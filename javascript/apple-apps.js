document.addEventListener('DOMContentLoaded', () => {
  // All three apps share the same stacking context as the desktop windows.
  document.querySelectorAll('.window.finder, .window.email, .window.editor').forEach(app => document.body.appendChild(app));
  const finder = document.querySelector('.finder');
  const grid = finder.querySelector('.file-grid');
  const cards = [...grid.querySelectorAll('.file-card')];
  const search = finder.querySelector('input[type="search"]');
  const count = document.getElementById('finder-count');
  let location = 'Mes projets';
  const empty = document.createElement('p');
  empty.className = 'finder-empty';
  grid.after(empty);
  function filterFiles() {
    let visible = 0;
    cards.forEach(card => {
      const matches = !['Téléchargements', 'Bureau'].includes(location) && card.dataset.title.toLocaleLowerCase().includes(search.value.trim().toLocaleLowerCase());
      card.style.display = matches ? '' : 'none';
      visible += Number(matches);
    });
    count.textContent = `${visible} élément${visible > 1 ? 's' : ''}`;
    empty.hidden = visible > 0;
    empty.textContent = search.value ? 'Aucun document ne correspond à votre recherche.' : 'Ce dossier est vide.';
  }
  search.addEventListener('input', filterFiles);
  finder.querySelectorAll('[data-location]').forEach(button => button.addEventListener('click', () => {
    location = button.dataset.location;
    finder.querySelectorAll('[data-location]').forEach(item => item.classList.toggle('active', item === button));
    finder.querySelector('.breadcrumb').textContent = location;
    finder.querySelector('.finder-footer strong').textContent = location;
    filterFiles();
  }));
  finder.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
    grid.classList.toggle('is-list', button.dataset.view === 'list');
    finder.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  }));
  cards.forEach(card => {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ouvrir ${card.dataset.title}`);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); card.click(); }
    });
  });
  filterFiles();
  const editor = document.getElementById('win-editor');
  const area = editor.querySelector('.editor-area');
  const inspector = editor.querySelector('.pages-inspector');
  const format = document.getElementById('pages-format');
  function toggleInspector(show) {
    inspector.hidden = !show;
    format.setAttribute('aria-expanded', String(show));
  }
  toggleInspector(window.innerWidth > 540);
  format.addEventListener('click', () => toggleInspector(inspector.hidden));
  let savedRange;
  document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    if (selection.rangeCount && area.contains(selection.anchorNode)) savedRange = selection.getRangeAt(0).cloneRange();
  });
  function command(name, value = null) {
    area.focus();
    if (savedRange && area.contains(savedRange.startContainer)) {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(savedRange);
    }
    document.execCommand(name, false, value);
  }
  editor.querySelectorAll('[data-command]').forEach(button => {
    button.addEventListener('mousedown', event => event.preventDefault());
    button.addEventListener('click', () => command(button.dataset.command));
  });
  document.getElementById('pages-font').addEventListener('change', event => command('fontName', event.target.value));
  document.getElementById('pages-style').addEventListener('change', event => command('formatBlock', event.target.value));
  document.getElementById('pages-open').addEventListener('click', () => document.querySelector('.open-finder').click());
  document.getElementById('pages-save').addEventListener('click', () => {
    const blob = new Blob(['<!doctype html><meta charset="utf-8"><title>Document</title>' + area.innerHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = document.getElementById('editor-title').textContent.replace(/\.[^.]+$/, '') + '.html';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  function updateCount() {
    const text = area.innerText.trim();
    const words = text ? text.split(/\s+/).length : 0;
    editor.querySelector('.status-center').textContent = `${words} mot${words > 1 ? 's' : ''}`;
  }
  new MutationObserver(updateCount).observe(area, { subtree: true, childList: true, characterData: true });
  updateCount();
});
