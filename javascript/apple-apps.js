document.addEventListener('DOMContentLoaded', () => {
  const P = Portfolio, icon = P.icon, esc = P.escape;
  const button = (name, title, attrs = '') => `<button type="button" class="native-tool" title="${title}" aria-label="${title}" ${attrs}>${icon(name)}</button>`;
  const projects = P.projects;
  // Finder: one real location, native selection, preview, and document opening.
  const finder = document.querySelector('.finder');
  const grid = finder.querySelector('.file-grid');
  const preview = finder.querySelector('.finder-preview');
  let selected = projects[0];
  grid.innerHTML = projects.map(project => `<div role="listitem"><button type="button" class="file-card" data-project="${project.id}" aria-label="Sélectionner ${project.name}"><img src="icon/apple/${project.folder}.png" alt="Dossier ${project.name}"><span>${project.name}</span><small>${project.category}</small></button></div>`).join('');
  function selectProject(project) {
    selected = project;
    grid.querySelectorAll('.file-card').forEach(card => { card.classList.toggle('selected', card.dataset.project === project.id); card.setAttribute('aria-pressed', String(card.dataset.project === project.id)); });
    preview.innerHTML = `<img class="preview-folder" src="icon/apple/${project.folder}.png" alt=""><h3>${project.name}</h3><span class="preview-kind">Dossier de projet</span><section><h4>Informations</h4><dl><div><dt>Catégorie</dt><dd>${project.category}</dd></div><div><dt>Auteur</dt><dd>Noa Giannone</dd></div><div><dt>Contenu</dt><dd>Présentation du projet</dd></div></dl></section><p>${project.summary}</p><button type="button" class="native-button" id="finder-open">Ouvrir dans Word</button><small class="preview-hint">Double-cliquez sur un dossier pour l’ouvrir.</small>`;
    preview.querySelector('#finder-open').addEventListener('click', () => P.openDocument(project.id));
  }
  grid.addEventListener('click', event => { const card = event.target.closest('[data-project]'); if (card) selectProject(projects.find(p => p.id === card.dataset.project)); });
  grid.addEventListener('dblclick', event => { const card = event.target.closest('[data-project]'); if (card) P.openDocument(card.dataset.project); });
  grid.addEventListener('keydown', event => {
    if (event.key === 'Enter') { event.preventDefault(); P.openDocument(event.target.closest('[data-project]')?.dataset.project || selected.id); }
    if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault(); const visible = [...grid.querySelectorAll('.file-card')].filter(c => !c.parentElement.hidden);
      const index = visible.findIndex(c => c.dataset.project === selected.id);
      const next = visible[(index + (['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1) + visible.length) % visible.length];
      if (next) { next.focus(); next.click(); }
    }
  });
  document.getElementById('finder-search').addEventListener('input', event => {
    const query = event.target.value.toLocaleLowerCase(); let count = 0;
    grid.querySelectorAll('[role="listitem"]').forEach(item => { const matches = item.textContent.toLocaleLowerCase().includes(query); item.hidden = !matches; count += Number(matches); });
    document.getElementById('finder-count').textContent = `${count} élément${count > 1 ? 's' : ''}`;
    finder.querySelector('.finder-empty').hidden = count > 0;
  });
  finder.querySelectorAll('[data-view]').forEach(control => control.addEventListener('click', () => {
    grid.classList.toggle('is-list', control.dataset.view === 'list');
    finder.querySelector('.finder-list-heading').hidden = control.dataset.view !== 'list';
    finder.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === control)));
  }));
  for (const [id, selector] of [['finder-sidebar-toggle', '.finder-navigation'], ['finder-preview-toggle', '.finder-preview']]) {
    document.getElementById(id).addEventListener('click', event => { const panel = finder.querySelector(selector); panel.hidden = !panel.hidden; if (selector === '.finder-preview') finder.querySelector('.finder-layout').classList.toggle('preview-visible', !panel.hidden); event.currentTarget.setAttribute('aria-expanded', String(!panel.hidden)); });
  }
  selectProject(selected);
  document.getElementById('finder-count').textContent = `${projects.length} éléments`;
  finder.querySelector('.finder-location small').textContent = `${projects.length} projets à découvrir`;

  // Word: document contents are taken from the original project presentations.
  const editor = document.getElementById('win-editor'), area = editor.querySelector('.editor-area');
  const documents = new Map(); let currentDocument = 'welcome'; let range;
  const welcome = `<div class="document-kicker">NOA GIANNONE · PORTFOLIO</div><h1>Mes projets<br>web & mobile.</h1><p class="document-lead">Des projets menés pour des clients, de la mairie de Toulon à un tiers-lieu culturel, et des applications nées au sein de mon propre studio. Chacun a son histoire, que ces documents retracent.</p><hr><h2>À découvrir</h2><p>FORNAP, la plateforme la plus complète que j’aie construite ; Vago, l’application que je développe en ce moment ; Whisp, ma première application publiée ; Cyan Sensor, entre capteurs et application mobile ; et le site de la Fête de la musique à Toulon.</p><h2>Un portfolio à explorer</h2><p>Ouvrez un dossier dans le Finder pour découvrir son histoire. Vous pouvez aussi modifier ce document, explorer mes compétences dans VS Code, ou me laisser un message dans Mail.</p><div class="document-endnote">Noa Giannone<br>Développement web & mobile</div>`;
  function projectDocument(project) {
    const source = new DOMParser().parseFromString(project.content, 'text/html');
    const nodes = [...source.querySelectorAll('.editor-section')];
    const body = nodes.map(section => {
      return [...section.querySelectorAll('h4, p, li')].map(node => {
        const tag = node.tagName === 'H4' ? 'h2' : 'p';
        return `<${tag}>${node.tagName === 'LI' ? '• ' : ''}${esc(node.textContent.trim())}</${tag}>`;
      }).join('');
    }).join('');
    const gallery=(project.images||[]).map(image=>`<figure class="project-figure"><a href="${esc(image.src)}" target="_blank" rel="noopener noreferrer" contenteditable="false"><img src="${esc(image.src)}" alt="${esc(image.caption)}"></a><figcaption>${esc(image.caption)}</figcaption></figure>`).join('');
    const pdfLink=`<a href="documents/projects/${esc(project.id)}.pdf" download contenteditable="false">Télécharger la présentation PDF ↗</a>`;
    const links=(project.links||[]).map(link=>`<a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer" contenteditable="false">${esc(link.label)} ↗</a>`).join('');
    return `<div class="document-kicker">PROJET / ${esc(project.category).toUpperCase()}</div><h1>${esc(project.name)}</h1><p class="document-lead">${esc(project.summary)}</p><div class="project-facts"><span><b>Mon rôle</b>${esc(project.role||'Développement')}</span><span><b>Aujourd’hui</b>${esc(project.status||'Projet de portfolio')}</span></div>${gallery?`<div class="project-gallery ${project.images.length>1?'project-gallery-pair':''}">${gallery}</div>`:''}${project.quote?`<blockquote class="project-intention">${esc(project.quote)}</blockquote>`:''}<hr>${body}<section class="project-links" contenteditable="false"><h2>Découvrir le projet</h2>${links}${pdfLink}</section><div class="document-endnote">${esc(project.name)} — Noa Giannone<br>Conception & développement</div>`;
  }
  function updateDocumentUI() {
    const words = area.innerText.trim().split(/\s+/).filter(Boolean).length;
    document.getElementById('word-count').textContent = `${words} mots`;
    const headings = [...area.querySelectorAll('h1,h2,h3')];
    document.getElementById('word-outline').innerHTML = headings.map((h,i) => `<button type="button" data-heading="${i}" class="${h.tagName === 'H1' ? 'outline-title' : ''}">${esc(h.innerText.replace(/\n/g, ' '))}</button>`).join('');
  }
  P.openDocument = id => {
    documents.set(currentDocument, area.innerHTML);
    currentDocument = id;
    const project = projects.find(p => p.id === id);
    area.innerHTML = documents.get(id) || (project ? projectDocument(project) : welcome);
    area.style.setProperty('--document-accent', project?.color || '#285da4');
    document.getElementById('editor-title').textContent = project?.title || 'Bienvenue.docx';
    editor.querySelector('.word-canvas').scrollTop = 0;
    range = null; updateDocumentUI(); P.open('word');
  };
  area.innerHTML = welcome; updateDocumentUI();
  area.addEventListener('input', updateDocumentUI);
  document.getElementById('word-outline').addEventListener('click', event => {
    const index = event.target.closest('[data-heading]')?.dataset.heading;
    if (index !== undefined) area.querySelectorAll('h1,h2,h3')[index]?.scrollIntoView({ block:'start', behavior:'smooth' });
  });
  document.addEventListener('selectionchange', () => {
    const selection = getSelection();
    if (selection.rangeCount && area.contains(selection.anchorNode)) range = selection.getRangeAt(0).cloneRange();
  });
  function command(name, value = null) {
    area.focus();
    if (range && area.contains(range.startContainer)) { const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range); }
    document.execCommand(name, false, value);
    const selection=getSelection();if(selection.rangeCount && area.contains(selection.anchorNode))range=selection.getRangeAt(0).cloneRange();
    updateDocumentUI();
  }
  P.wordCommand = command;
  const commandButton = (symbol,label,cmd) => button(symbol,label,`data-command="${cmd}"`);
  function renderRibbon(tab) {
    const ribbon = document.getElementById('word-ribbon');
    const group = (content,label) => `<div class="ribbon-group"><div>${content}</div><small>${label}</small></div>`;
    if (tab === 'home') ribbon.innerHTML = group(`<select id="word-font" aria-label="Police"><option>Arial</option><option>Georgia</option><option>Helvetica</option><option>Times New Roman</option></select><select id="word-size" aria-label="Taille de police"><option value="2">10</option><option value="3" selected>12</option><option value="4">14</option><option value="5">18</option><option value="6">24</option></select><div class="ribbon-row">${commandButton('bold','Gras','bold')}${commandButton('italic','Italique','italic')}${commandButton('underline','Souligné','underline')}${button('highlighter','Surligner','data-highlight="true"')}<label class="word-color" title="Couleur du texte">A<input type="color" id="word-color" value="#252525" aria-label="Couleur du texte"></label></div>`, 'Police') + group(`<div class="ribbon-row">${commandButton('list.bullet','Liste à puces','insertUnorderedList')}${commandButton('list.number','Liste numérotée','insertOrderedList')}</div><div class="ribbon-row">${commandButton('text.alignleft','Aligner à gauche','justifyLeft')}${commandButton('text.aligncenter','Centrer','justifyCenter')}${commandButton('text.alignright','Aligner à droite','justifyRight')}${commandButton('text.justify','Justifier','justifyFull')}</div>`, 'Paragraphe') + group(`<div class="word-styles"><button data-style="p"><span>AaBbCc</span>Normal</button><button data-style="h1"><span>AaBbCc</span>Titre</button><button data-style="h2"><span>AaBbCc</span>Sous-titre</button></div>`, 'Styles');
    if (tab === 'insert') ribbon.innerHTML = group(button('tablecells','Insérer un tableau','data-insert="table"') + button('link','Insérer un lien','data-insert="link"') + button('photo','Insérer une image','data-insert="image"'), 'Insérer') + group('<p>Ajoutez un tableau, un lien ou une image à votre document.</p>', 'Contenu du document');
    if (tab === 'layout') ribbon.innerHTML = group('<label>Marges <select id="word-margins"><option value="64">Normales</option><option value="36">Étroites</option><option value="88">Larges</option></select></label>', 'Mise en page') + group('<label>Interligne <select id="word-spacing"><option value="1.6">1,6</option><option value="1.2">1,2</option><option value="2">Double</option></select></label>', 'Espacement');
    if (tab === 'view') ribbon.innerHTML = group('<label><input type="checkbox" id="word-nav-toggle" checked> Volet de navigation</label><label><input type="checkbox" id="word-ruler-toggle" checked> Règle</label>', 'Afficher') + group('<button type="button" class="native-button" id="word-fit">Ajuster à la fenêtre</button>', 'Zoom');
    if(tab==='layout'){ribbon.querySelector('#word-margins').value=String(parseInt(area.style.getPropertyValue('--page-margin'))||64);ribbon.querySelector('#word-spacing').value=area.style.lineHeight||'1.6';}
    ribbon.querySelector('#word-font')?.addEventListener('change', e => command('fontName', e.target.value));
    ribbon.querySelector('#word-size')?.addEventListener('change', e => command('fontSize', e.target.value));
    ribbon.querySelector('#word-color')?.addEventListener('input', e => command('foreColor', e.target.value));
    ribbon.querySelector('#word-margins')?.addEventListener('change', e => area.style.setProperty('--page-margin', `${e.target.value}px`));
    ribbon.querySelector('#word-spacing')?.addEventListener('change', e => area.style.lineHeight = e.target.value);
    for (const [id, target] of [['word-nav-toggle','.word-navigation'], ['word-ruler-toggle','.word-ruler']]) {
      const control = ribbon.querySelector('#'+id); if (control) { control.checked = !editor.querySelector(target).hidden; control.addEventListener('change', () => editor.querySelector(target).hidden = !control.checked); }
    }
    ribbon.querySelector('#word-fit')?.addEventListener('click', () => { document.getElementById('word-zoom').value = 100; document.getElementById('word-zoom').dispatchEvent(new Event('input')); });
  }
  editor.addEventListener('mousedown', e => { if (e.target.closest('[data-command], [data-style], [data-highlight]')) e.preventDefault(); });
  editor.addEventListener('click', e => {
    const control = e.target.closest('button'); if (!control) return;
    if (control.dataset.command) command(control.dataset.command);
    if (control.dataset.style) command('formatBlock', control.dataset.style);
    if (control.dataset.highlight) command('hiliteColor', '#fff29a');
    if (control.dataset.ribbon) { editor.querySelectorAll('[data-ribbon]').forEach(b => b.setAttribute('aria-selected', String(b === control))); renderRibbon(control.dataset.ribbon); }
    if (control.dataset.insert === 'table') command('insertHTML', '<table><tbody><tr><td>Colonne 1</td><td>Colonne 2</td></tr><tr><td>Contenu</td><td>Contenu</td></tr></tbody></table><p><br></p>');
    if (control.dataset.insert === 'link') {
      const dialog = document.createElement('dialog'); dialog.className='native-dialog'; dialog.innerHTML='<form method="dialog"><h3>Insérer un lien</h3><label>Adresse du lien<input type="url" placeholder="https://" required></label><div><button value="cancel" formnovalidate>Annuler</button><button value="insert">Insérer</button></div></form>';
      document.body.append(dialog); dialog.showModal(); dialog.addEventListener('close', () => { if (dialog.returnValue === 'insert') { const value=dialog.querySelector('input').value; if (/^https?:\/\//i.test(value)) { if (!range || range.collapsed) command('insertHTML', '<a href="'+esc(value)+'">'+esc(value)+'</a>'); else command('createLink', value); } } dialog.remove(); });
    }
    if (control.dataset.insert === 'image') {
      const input=document.createElement('input'); input.type='file'; input.accept='image/*'; input.addEventListener('change', () => { const file=input.files[0]; if (!file || !file.type.startsWith('image/')) return; const reader=new FileReader(); reader.onload=()=>command('insertImage', reader.result); reader.readAsDataURL(file); }); input.click();
    }
  });
  renderRibbon('home');
  document.getElementById('word-open').addEventListener('click', () => P.open('finder'));
  document.getElementById('word-save').addEventListener('click', () => {
    const html='<!doctype html><meta charset="utf-8"><title>'+esc(document.getElementById('editor-title').textContent)+'</title><style>body{max-width:720px;margin:50px auto;font:16px/1.6 Arial;color:#252525}h1{font-size:42px;color:#285da4}h2{font-size:22px}img{max-width:100%}table{border-collapse:collapse}td{border:1px solid #bbb;padding:8px}</style>'+area.innerHTML;
    const url=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'})); const a=document.createElement('a'); a.href=url; a.download=document.getElementById('editor-title').textContent.replace(/\.docx$/,'')+'.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  document.getElementById('word-zoom').addEventListener('input', e => { area.style.zoom=Number(e.target.value)/100;document.getElementById('word-zoom-value').textContent=e.target.value+' %'; });

  // System Settings: a real portfolio introduction with useful local controls.
  const settingsSections=[['welcome','person.crop.circle','Bienvenue','blue'],['general','gearshape','Général','gray'],['appearance','paintpalette','Apparence','purple'],['shortcuts','keyboard','Clavier et raccourcis','gray'],['privacy','lock.shield','Confidentialité','blue'],['about','info.circle','À propos','gray']];
  const settingsNav=document.querySelector('.settings-navigation');
  settingsNav.innerHTML=settingsSections.map(([id,symbol,label,color])=>`<button type="button" data-settings="${id}"><span class="settings-icon ${color}">${icon(symbol)}</span>${label}</button>`).join('');
  const settingsMain=document.getElementById('settings-main');
  const apps=[['finder','finder.png','Mes projets','Vago, FORNAP, Cyan Sensor et les autres'],['safari','../Launchpad/safari.png','Qui je suis','Mon histoire, le voyage et les avions'],['code','vscode.svg','Mes compétences','Les langages et outils que j’utilise'],['notes','notes.png','Mon parcours','Mes expériences et ma formation'],['mail','mail.png','Me contacter','Pour une question ou un projet']];
  function settingRow(label,content){return `<div class="setting-row"><span>${label}</span>${content}</div>`;}
  P.showSettings = section => {
    const current=settingsSections.find(s=>s[0]===section)||settingsSections[0];
    settingsNav.querySelectorAll('button').forEach(b=>{b.classList.toggle('selected',b.dataset.settings===current[0]);b.setAttribute('aria-current',b.dataset.settings===current[0]?'page':'false');});
    settingsMain.innerHTML=`<h2>${current[2]}</h2>`;
    if(current[0]==='welcome')settingsMain.innerHTML+=`<div class="settings-profile"><img src="images/profile-noa.jpeg" alt="Noa Giannone"><h1>Noa Giannone</h1><p>Développeur front-end & mobile</p></div><section class="settings-group"><div class="settings-introduction"><h3>Salut, bienvenue sur mon bureau !</h3><p>Je m’appelle Noa, j’ai vingt ans, et je développe des sites et des applications depuis l’âge de seize ans. Ce qui n’était au départ qu’une passion est devenu mon métier : je suis aujourd’hui développeur en alternance à Marseille, et j’ai fondé en parallèle mon propre studio de création d’applications.</p><p>Ce portfolio a été conçu comme un véritable Mac, où chaque application dévoile une facette de mon travail. Le Finder rassemble mes projets, Safari retrace mon parcours entre code, voyages et aviation, et le Terminal réserve quelques commandes aux plus curieux. Pour me parler d’un projet, Mail vous attend.</p><p>Prenez votre temps, et faites comme chez vous.</p></div></section><h3 class="settings-section-title">À découvrir</h3><section class="settings-group">${apps.map(([app,img,title,sub])=>`<button type="button" class="setting-app-row" data-open-app="${app}"><img src="icon/dock/${img}" alt=""><span>${title}<small>${sub}</small></span>${icon('chevron.right')}</button>`).join('')}</section>`;
    if(current[0]==='general')settingsMain.innerHTML+=`<div class="settings-page-icon">${icon('gearshape')}</div><p class="settings-description">Un bureau pour explorer mon travail, à votre rythme.</p><section class="settings-group">${settingRow('Nom du bureau','<strong>Portfolio de Noa</strong>')}${settingRow('Langue','<span>Français</span>')}${settingRow('Projets',`<button data-open-app="finder">${projects.length} projets ${icon('chevron.right')}</button>`)}</section><section class="settings-group"><button class="setting-app-row" data-settings="shortcuts">${icon('keyboard')}<span>Raccourcis clavier</span>${icon('chevron.right')}</button><button class="setting-app-row" data-settings="about">${icon('info.circle')}<span>À propos de ce portfolio</span>${icon('chevron.right')}</button></section>`;
    if(current[0]==='appearance')settingsMain.innerHTML+=`<h3 class="settings-section-title">Fond d’écran</h3><section class="settings-group wallpaper-choices">${[['fondmac.jpeg','Original'],['MontereyBackground.jpg','Monterey'],['mac os big sur.jpg','Big Sur']].map(([file,name])=>`<button type="button" data-wallpaper="${file}" aria-label="Fond d’écran ${name}"><img src="background/${file}" alt="">${name}</button>`).join('')}</section><section class="settings-group">${settingRow('Réduire les animations','<input type="checkbox" role="switch" id="reduce-motion" aria-label="Réduire les animations">')}${settingRow('Luminosité du bureau','<input type="range" min="35" max="100" value="100" id="settings-brightness" aria-label="Luminosité du bureau">')}</section><p class="settings-footnote">Ces réglages concernent uniquement ce portfolio.</p>`;
    if(current[0]==='shortcuts')settingsMain.innerHTML+=`<div class="settings-page-icon">${icon('keyboard')}</div><section class="settings-group">${[['Recherche Spotlight','⌘ Espace'],['Fermer un menu ou Launchpad','Échap'],['Ouvrir un projet sélectionné','Entrée'],['Parcourir les projets','← ↑ ↓ →'],['Historique du Terminal','↑ ↓'],['Compléter une commande','Tab'],['Effacer le Terminal','Ctrl L']].map(([a,b])=>settingRow(a,`<kbd>${b}</kbd>`)).join('')}</section>`;
    if(current[0]==='privacy')settingsMain.innerHTML+=`<div class="settings-page-icon">${icon('lock.shield')}</div><section class="settings-group"><div class="settings-introduction"><h3>Votre visite</h3><p>Le Terminal utilise les fichiers du portfolio. Les commandes ne sont pas exécutées sur votre ordinateur.</p><p>Le brouillon Mail reste en mémoire pendant cette visite. Le bouton Envoyer transmet votre adresse et votre message au formulaire de contact Formspree.</p><p>Les services externes intégrés au site, notamment les cartes, peuvent effectuer leurs propres requêtes.</p></div></section>`;
    if(current[0]==='about')settingsMain.innerHTML+=`<div class="settings-profile"><img src="icon/dock/finder.png" alt=""><h1>Le bureau de Noa</h1><p>Un portfolio à explorer.</p></div><section class="settings-group">${settingRow('Créé par','<strong>Noa Giannone</strong>')}${settingRow('Spécialité','<span>Développement web & mobile</span>')}${settingRow('Interface','<span>Inspirée de macOS</span>')}${settingRow('Technologies','<span>HTML, CSS & JavaScript</span>')}</section><p class="settings-footnote">Un projet personnel indépendant d’Apple et de Microsoft.</p>`;
    settingsMain.scrollTop=0;
    const motion=settingsMain.querySelector('#reduce-motion');if(motion){motion.checked=document.body.classList.contains('reduce-motion');motion.addEventListener('change',()=>document.body.classList.toggle('reduce-motion',motion.checked));}
    settingsMain.querySelector('#settings-brightness')?.addEventListener('input',e=>P.setBrightness?.(e.target.value));
  };
  document.getElementById('win-parametres').addEventListener('click', e=>{const settings=e.target.closest('[data-settings]');if(settings)P.showSettings(settings.dataset.settings);const app=e.target.closest('[data-open-app]');if(app)P.open(app.dataset.openApp);const wallpaper=e.target.closest('[data-wallpaper]');if(wallpaper){document.body.style.backgroundImage=`url("background/${wallpaper.dataset.wallpaper}")`;settingsMain.querySelectorAll('[data-wallpaper]').forEach(b=>b.classList.toggle('selected',b===wallpaper));}});
  document.getElementById('settings-search').addEventListener('input', e=>{const q=e.target.value.toLocaleLowerCase();settingsNav.querySelectorAll('button').forEach(b=>b.hidden=!b.textContent.toLocaleLowerCase().includes(q));});
  P.showSettings('welcome');

  // Mail: local welcome, live draft and messages successfully sent in this visit.
  const form=document.getElementById('contact-form'), welcomeMail=document.getElementById('mail-welcome'), mailEmpty=document.getElementById('mail-empty');
  let mailbox='inbox';const sent=[];
  function hasDraft(){return [...form.querySelectorAll('[name]')].some(e=>e.value.trim());}
  function mailState(){document.getElementById('mail-draft-count').textContent=hasDraft()?'1':'0';document.getElementById('mail-sent-count').textContent=sent.length;}
  function showMailView(view){welcomeMail.hidden=view!=='welcome';form.hidden=view!=='compose';mailEmpty.hidden=view!=='empty';}
  function renderMail(){
    document.querySelectorAll('[data-mailbox]').forEach(b=>b.classList.toggle('selected',b.dataset.mailbox===mailbox));
    const query=document.getElementById('mail-search').value.toLocaleLowerCase();
    const entries=mailbox==='inbox'?[{title:'Faisons connaissance.',from:'Noa Giannone',text:'Bienvenue sur mon portfolio. Un projet en tête ?',kind:'welcome'}]:mailbox==='draft'?(hasDraft()?[{title:form.elements.subject.value||'Nouveau message',from:'À : Noa Giannone',text:form.elements.message.value||'Votre brouillon',kind:'compose'}]:[]):sent.map((m,i)=>({title:m.subject,from:'À : Noa Giannone',text:m.message,kind:'sent',index:i}));
    const filtered=entries.filter(e=>(e.title+e.text+e.from).toLocaleLowerCase().includes(query));
    document.getElementById('mailbox-title').textContent={inbox:'Réception',draft:'Brouillon',sent:'Envoyés'}[mailbox];document.getElementById('mailbox-count').textContent=`${filtered.length} message${filtered.length>1?'s':''}`;
    document.getElementById('mail-message-list').innerHTML=filtered.map(e=>`<button type="button" class="mail-list-item" data-message="${e.kind}" data-index="${e.index||0}"><strong>${esc(e.from)}</strong><b>${esc(e.title)}</b><span>${esc(e.text.slice(0,110))}</span></button>`).join('');
    if(!filtered.length){showMailView('empty');mailEmpty.textContent=query?'Aucun message trouvé.':'Aucun message dans cette boîte.';}else if(mailbox==='inbox')showMailView('welcome');else if(mailbox==='draft')showMailView('compose');else{showMailView('empty');mailEmpty.textContent='Sélectionnez un message.';}
    mailState();
    if(mailbox==='sent'&&filtered.length)document.querySelector('#mail-message-list [data-message]')?.click();
  }
  P.composeMail=()=>{mailbox='draft';renderMail();showMailView('compose');form.elements.email.focus();};
  ['mail-compose','mail-reply','mail-contact'].forEach(id=>document.getElementById(id).addEventListener('click',P.composeMail));
  document.querySelectorAll('[data-mailbox]').forEach(b=>b.addEventListener('click',()=>{mailbox=b.dataset.mailbox;renderMail();}));
  document.getElementById('mail-search').addEventListener('input',renderMail);
  form.addEventListener('reset',()=>setTimeout(mailState,0));
  form.addEventListener('input',()=>{mailState();if(mailbox==='draft'){document.getElementById('mail-message-list').innerHTML=`<button type="button" class="mail-list-item selected" data-message="compose"><strong>À : Noa Giannone</strong><b>${esc(form.elements.subject.value||'Nouveau message')}</b><span>${esc(form.elements.message.value.slice(0,110)||'Votre brouillon')}</span></button>`;}});
  document.getElementById('mail-message-list').addEventListener('click',e=>{const item=e.target.closest('[data-message]');if(!item)return;document.querySelectorAll('.mail-list-item').forEach(b=>b.classList.toggle('selected',b===item));if(item.dataset.message==='sent'){const m=sent[item.dataset.index];showMailView('empty');mailEmpty.innerHTML=`<h3>${esc(m.subject)}</h3><p>À : Noa Giannone</p><pre>${esc(m.message)}</pre><small>Message envoyé pendant cette visite.</small>`;}else showMailView(item.dataset.message);});
  document.addEventListener('portfolio:mail-sent',e=>{sent.unshift(e.detail);mailState();});
  document.getElementById('mail-sidebar-toggle').addEventListener('click',()=>{const sidebar=document.querySelector('.mail-sidebar');sidebar.hidden=!sidebar.hidden;});
  renderMail();

  // VS Code: official Codicons and real file switching, filtering and panel controls.
  const profile = P.profile;
  const files = {
    'skills.js': '// Noa Giannone — Front-end & applications mobiles\n// Compétences et outils utilisés dans mes projets.\n\n' + profile.skills.map(group => `const ${group.id} = {\n  domaine: ${JSON.stringify(group.name)},\n  technologies: [\n${group.items.map(item => '    ' + JSON.stringify(item)).join(',\n')}\n  ]\n};`).join('\n\n') + '\n\nexport { frontend, mobile, backend, iot, network, ai };',
    'projects.json': JSON.stringify(projects.map(({name,category,summary})=>({name,category,description:summary})),null,2)
  };
  const code=document.querySelector('.Vscode');let activeFile='skills.js';let activity='files';
  code.querySelector('.vscode-activity').innerHTML=[['files','Explorateur'],['search','Rechercher'],['source-control','Projets'],['terminal','Terminal']].map(([name,label])=>`<button type="button" data-activity="${name}" title="${label}" aria-label="${label}">${P.codicon(name)}</button>`).join('')+`<button type="button" class="activity-settings" data-activity="settings" title="Réglages" aria-label="Réglages">${P.codicon('settings-gear')}</button>`;
  const fileIcon=name=>name.endsWith('.js')?'<span class="js-file-icon">JS</span>':P.codicon(name.endsWith('.json')?'json':'markdown');
  code.querySelector('.vscode-tabs').innerHTML=Object.keys(files).map(name=>`<button type="button" role="tab" data-code-file="${name}">${fileIcon(name)}${name}</button>`).join('');
  function highlight(line){const rx=/(\/\/.*$|"(?:[^"\\]|\\.)*"|\b(?:const|export|from|return)\b|\b\d+\b)/g;let last=0,result='';for(const m of line.matchAll(rx)){result+=esc(line.slice(last,m.index));const cls=m[0].startsWith('//')?'comment':m[0].startsWith('"')?'string':/^\d/.test(m[0])?'number':'keyword';result+=`<span class="syntax-${cls}">${esc(m[0])}</span>`;last=m.index+m[0].length;}return result+esc(line.slice(last));}
  function showFile(name){activeFile=name;code.querySelectorAll('[data-code-file]').forEach(b=>{b.classList.toggle('selected',b.dataset.codeFile===name);if(b.getAttribute('role')==='tab')b.setAttribute('aria-selected',String(b.dataset.codeFile===name));});code.querySelector('.vscode-breadcrumb').textContent=`portfolio  ›  ${name}`;code.querySelector('.vscode-code').innerHTML=files[name].split('\n').map((line,i)=>`<span class="code-line"><span class="line-number">${i+1}</span><span>${name.endsWith('.md')?esc(line):highlight(line)||' '}</span></span>`).join('');code.querySelector('.vscode-minimap').textContent=files[name];code.querySelector('.vscode-language').textContent=name.endsWith('.js')?'JavaScript':name.endsWith('.json')?'JSON':'Markdown';}
  function explorer(){code.querySelector('.vscode-sidebar h3').textContent='EXPLORATEUR';code.querySelector('.vscode-explorer').innerHTML=`<strong class="explorer-root">${P.codicon('chevron-down')} PORTFOLIO</strong>${Object.keys(files).map(name=>`<button type="button" data-code-file="${name}">${fileIcon(name)}${name}</button>`).join('')}<div class="explorer-bottom">${P.codicon('chevron-right')} STRUCTURE</div>`;showFile(activeFile);}
  code.addEventListener('click',e=>{
    const f=e.target.closest('[data-code-file]');if(f)showFile(f.dataset.codeFile);
    const a=e.target.closest('[data-activity]');if(!a)return;activity=a.dataset.activity;code.querySelectorAll('[data-activity]').forEach(b=>b.classList.toggle('selected',b===a));
    if(activity==='files')explorer();
    if(activity==='search'){code.querySelector('.vscode-sidebar h3').textContent='RECHERCHER';code.querySelector('.vscode-explorer').innerHTML='<input class="code-search" aria-label="Rechercher dans les fichiers" placeholder="Rechercher"><div id="code-search-results"></div>';const input=code.querySelector('.code-search');input.focus();input.addEventListener('input',()=>{const q=input.value.toLocaleLowerCase();document.getElementById('code-search-results').innerHTML=q?Object.entries(files).filter(([n,t])=>(n+t).toLocaleLowerCase().includes(q)).map(([n])=>`<button data-code-file="${n}">${fileIcon(n)}${n}</button>`).join('')||'<p>Aucun résultat</p>':'';});}
    if(activity==='source-control'){showFile('projects.json');code.querySelector('.vscode-sidebar h3').textContent='PROJETS';code.querySelector('.vscode-explorer').innerHTML=projects.map(p=>`<button data-open-project="${p.id}">${P.codicon('git-branch')}${p.name}</button>`).join('');}
    if(activity==='terminal'){code.querySelector('.vscode-panel').hidden=false;document.querySelector('#code-terminal input')?.focus();}
    if(activity==='settings')P.open('settings');
  });
  code.addEventListener('click',e=>{const p=e.target.closest('[data-open-project]');if(p)P.openDocument(p.dataset.openProject);});
  document.getElementById('code-terminal-toggle').addEventListener('click',()=>{code.querySelector('.vscode-panel').hidden=!code.querySelector('.vscode-panel').hidden;});
  document.getElementById('code-clear-terminal').addEventListener('click',()=>P.codeShell?.clear());
  explorer();code.querySelector('[data-activity="files"]').classList.add('selected');
});
