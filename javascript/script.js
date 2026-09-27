
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.window').forEach(win => document.body.appendChild(win));
  // Vérification globale pour éviter les erreurs si des éléments sont manquants
  function safeQuerySelector(selector, context = document) {
    return context.querySelector(selector);
  }

  function safeAddEventListener(element, event, callback) {
    if (element) {
      element.addEventListener(event, callback);
    }
  }


  // Email App
  const emailApp = {
    app_name: document.querySelector(".icon.open-email"),
    window: document.getElementById("win-email"),
    close: document.querySelector(".close-email"),
    backfull: document.querySelector(".backfull-email"),
    full: document.querySelector(".full-email"),
    point: document.getElementById("point-email"),
    form: document.getElementById("contact-form")
  };

  // Open/close/min/max email window

  emailApp.app_name.addEventListener("click", () =>
    open_window(emailApp.window, emailApp.point, emailApp.app_name)
  );

  emailApp.close.addEventListener("click", () =>
    close_window(emailApp.window, emailApp.point)  // Ne pas passer emailApp.app_name
  );
  emailApp.backfull.addEventListener("click", () =>
    minimizeWindow(emailApp.window, emailApp.app_name)
  );
  emailApp.full.addEventListener("click", () =>
    handleFullScreen(emailApp.window)
  );

  // Preserve the contact endpoint and report delivery inline.
  emailApp.form.addEventListener("submit", async e => {
    e.preventDefault();
    const button = document.querySelector('.email-send-button');
    const status = document.getElementById('mail-status');
    button.disabled = true;
    status.textContent = 'Envoi en cours…';
    try {
      const response = await fetch(emailApp.form.action, {
        method: 'POST', body: new FormData(emailApp.form), headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Delivery failed');
      document.dispatchEvent(new CustomEvent('portfolio:mail-sent', {detail: Object.fromEntries(new FormData(emailApp.form))}));
      emailApp.form.reset();
      status.textContent = 'Votre message a bien été envoyé.';
    } catch {
      status.textContent = 'Envoi impossible. Votre message est conservé, réessayez.';
    } finally { button.disabled = false; }
  });

  // global z-index tracker
  let zTop = 20;
  const minimizedWindows = new Set();
  /********** ELEMENTS **********/
  const elements = {
    body: document.querySelector("body"),
    navbar: document.querySelector(".navbar"),
    open_spotlight: document.querySelector(".open_Search"),
    spotlight_search: document.querySelector(".spotlight_serach"),
    brightness_range: document.getElementById("brightness"),
    sound_range: document.getElementById("sound"),
    clockElement: document.getElementById("clock"),
    clockWrapper: document.querySelector(".clock"),
    widgetsPanel: document.querySelector(".widgets-panel"),
    batteryButton: document.querySelector(".battery"),
    batteryText: document.querySelector(".battery__text"),
    batteryPopup: document.querySelector(".battery__popup"),
    batteryPopupText: document.querySelector(".battery__popup header span"),
    batteryProgress: document.querySelector(".battery__progress"),
    batteryIsChargingLogo: document.querySelector(".is-charging"),
    powerSource: document.querySelector(".power-source"),
  };

  // Calculator App
  const calculatorApp = {
    app_name: document.querySelector("#calculator"),
    window: document.querySelector(".calculator"),
    full: document.querySelector(".min-cal"),
    close: document.querySelector(".close-cal"),
    backfull: document.querySelector(".max-cal"),
    point: document.querySelector("#point-cal"),
    opening: document.querySelector('.open-cal'),
    opening_l: document.querySelector(".open-cal-lunching")
  };

  // Prevent dragging when clicking calculator buttons (Explicit Fix)
  [calculatorApp.close, calculatorApp.backfull, document.querySelector(".max-cal")].forEach(btn => {
    if (btn) {
      btn.addEventListener('mousedown', (e) => e.stopPropagation());
      btn.addEventListener('click', (e) => e.stopPropagation());
    }
  });

  // Notes App
  const notesApp = {
    app_name: document.querySelector("#Notes"),
    window: document.querySelector(".note"),
    full: document.querySelector(".full-note"),
    close: document.querySelector(".close-note"),
    backfull: document.querySelector(".backfull-note"),
    point: document.querySelector("#point-note"),
    adding: document.querySelector(".adding"),
    deleting: document.querySelector(".deleting"),
    content_typing: document.querySelector(".note-editor"),
    opening: document.querySelector(".open-note")
  };

  // Terminal App
  const terminalApp = {
    app_name: document.querySelector("#Terminal"),
    window: document.querySelector(".terminal"),
    full: document.querySelector(".full"),
    close: document.querySelector(".close"),
    backfull: document.querySelector(".backfull"),
    point: document.querySelector("#point-terminal"),
    content: document.querySelector(".terminal .terminal_content"),
    taskbar: document.querySelector(".terminal .window__taskbar"),
    opening: document.querySelector(".open-terminal")
  };


  const vscodeApp = {
    app_name: document.querySelector("#VScode"),
    window: document.querySelector(".Vscode"),
    close: document.querySelector(".close-Vscode"),
    backfull: document.querySelector(".backfull-Vscode"),
    full: document.querySelector(".full-Vscode"),
    point: document.querySelector("#point-vscode"),
    opening: document.querySelector(".open-vscode")
  };


  // Maps App
  const mapsApp = {
    app_name: document.querySelector("#map"),
    window: document.querySelector(".maps"),
    full: document.querySelector(".full-map"),
    close: document.querySelector(".close-map"),
    backfull: document.querySelector(".backfull-map"),
    point: document.querySelector("#point-maps"),
    opening: document.querySelector(".open-map")
  };

  // Finder App (nouveau)
  const finderApp = {
    app_name: document.querySelector("#finder"),
    window: document.querySelector(".finder"),
    full: document.querySelector(".full-finder"),
    close: document.querySelector(".close-finder"),
    backfull: document.querySelector(".backfull-finder"),
    point: document.querySelector("#point-finder"),
    opening: document.querySelector(".open-finder")
  };

  // Launchpad
  const launchpad = {
    container: document.querySelector(".container__Window"),
    window: document.querySelector(".launchpad"),
    searchbox: document.querySelector(".launchpad .searchbox"),
    app_container: document.querySelector(".Apps-container"),
    point: document.querySelector("#point-launchpad"),
    opening: document.querySelector(".open-lunchpad")
  };

  /********** LISTENERS **********/

  /* 
  Now it's not good cause when i set this, the default blur will be remove of everywhere.
  
  function change_brightness() {
    var brightnessVal = elements.brightness_range.value;
  
    elements.body.style.filter = `brightness(${brightnessVal + '%'})`;
    elements.body.style.backdropFilter = `brightness(${brightnessVal + '%'})`;
  }
  */

  // Notes app function start
  function handleAdding() {
    // Feature disabled for static portfolio
    console.log("Add note feature disabled");
  }

  function handleDeleting() {
    // Feature disabled for static portfolio
    console.log("Delete note feature disabled");
  }

  function handleNotes() {
    if (notesApp.content_typing) {
      notesApp.content_typing.style.display = "block";
    }
  }


  /* Finder (ajout complet) */
  finderApp.opening.addEventListener("click", () =>
    open_window(finderApp.window, finderApp.point, finderApp.app_name)
  );
  finderApp.close.addEventListener("click", () =>
    close_window(finderApp.window, finderApp.point, finderApp.app_name)
  );
  finderApp.backfull.addEventListener("click", () =>
    minimizeWindow(finderApp.window, finderApp.opening)
  );
  finderApp.full.addEventListener("click", () =>
    handleFullScreen(finderApp.window)
  );
  // Notes app function end

  function minimizeWindow(win, dockIcon) {
    if (win.classList.contains('is-fullscreen')) return;

    const winRect = win.getBoundingClientRect();
    win.dataset.minLeft = win.style.left;
    win.dataset.minTop = win.style.top;
    win._dockIcon = dockIcon;

    // Insert thumbnail in dock (invisible first, to measure position)
    const thumb = createMinimizedThumbnail(win);
    thumb.style.opacity = '0';
    const separator = document.querySelector('.dock .column');

    // Logic to insert AFTER the separator (between separator and Trash)
    if (separator) {
      if (separator.nextSibling) {
        separator.parentNode.insertBefore(thumb, separator.nextSibling);
      } else {
        separator.parentNode.appendChild(thumb);
      }
    } else {
      // If no separator, just append (fallback)
      document.querySelector('.dock').appendChild(thumb);
    }

    win._dockThumb = thumb;

    // Animate window towards the thumbnail
    const thumbRect = thumb.getBoundingClientRect();
    const targetX = (thumbRect.left + thumbRect.width / 2) - (winRect.left + winRect.width / 2);
    const targetY = (thumbRect.top + thumbRect.height / 2) - (winRect.top + winRect.height / 2);

    win.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease';
    win.style.transform = `translate(${targetX}px, ${targetY}px) scale(0.01)`;
    win.style.opacity = '0';
    win.style.pointerEvents = 'none';

    setTimeout(() => {
      win.style.display = 'none';
      win.style.transition = '';
      win.style.transform = '';
      win.style.opacity = '';
      win.style.pointerEvents = '';
      minimizedWindows.add(win);

      // Reveal thumbnail
      thumb.style.transition = 'opacity 0.2s ease';
      thumb.style.opacity = '1';
      setTimeout(() => { thumb.style.transition = ''; }, 220);
    }, 420);
  }

  function createMinimizedThumbnail(win) {
    const titleEl = win.querySelector('.window__taskbar--content h2');
    const title = titleEl ? titleEl.textContent : 'Window';

    const thumb = document.createElement('button');
    thumb.className = 'icon dock-minimized';
    thumb.setAttribute('data-min-title', title);

    const preview = document.createElement('div');
    preview.className = 'dock-minimized__preview';

    const dots = document.createElement('div');
    dots.className = 'dock-minimized__dots';
    dots.innerHTML =
      '<span class="dock-minimized__dot dock-minimized__dot--r"></span>' +
      '<span class="dock-minimized__dot dock-minimized__dot--y"></span>' +
      '<span class="dock-minimized__dot dock-minimized__dot--g"></span>';

    const body = document.createElement('div');
    body.className = 'dock-minimized__body';

    preview.appendChild(dots);
    preview.appendChild(body);
    thumb.appendChild(preview);

    thumb.addEventListener('click', () => {
      restoreWindow(win, win._dockIcon);
      win.style.zIndex = ++zTop;
    });

    return thumb;
  }

  function restoreWindow(win, dockIcon) {
    minimizedWindows.delete(win);

    // Animate from thumbnail position (or dock icon as fallback)
    const startEl = win._dockThumb || dockIcon;
    const startRect = startEl.getBoundingClientRect();

    if (win._dockThumb) {
      win._dockThumb.remove();
      win._dockThumb = null;
    }

    const prevLeft = parseFloat(win.dataset.minLeft) || 0;
    const prevTop = parseFloat(win.dataset.minTop) || 0;

    win.style.display = win.dataset.display || 'block';
    win.style.left = win.dataset.minLeft;
    win.style.top = win.dataset.minTop;

    const winWidth = win.offsetWidth;
    const winHeight = win.offsetHeight;

    // Start from thumbnail (scale 0)
    const startX = (startRect.left + startRect.width / 2) - (prevLeft + winWidth / 2);
    const startY = (startRect.top + startRect.height / 2) - (prevTop + winHeight / 2);

    win.style.transition = 'none';
    win.style.transform = `translate(${startX}px, ${startY}px) scale(0.01)`;
    win.style.opacity = '0';

    void win.offsetWidth; // Force reflow

    win.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease';
    win.style.transform = 'translate(0, 0) scale(1)';
    win.style.opacity = '1';

    setTimeout(() => {
      win.style.transition = '';
      win.style.transform = '';
      win.style.opacity = '';
    }, 450);
  }

  function handleFullScreen(win) {
    const fsTransition = 'left 0.35s ease, top 0.35s ease, min-width 0.35s ease, max-width 0.35s ease, height 0.35s ease, border-radius 0.3s ease';

    if (win.classList.contains('is-fullscreen')) {
      // Restore from fullscreen
      win.classList.remove('is-fullscreen');
      win.style.transition = fsTransition;
      win.style.left = win.dataset.fsLeft;
      win.style.top = win.dataset.fsTop;
      win.style.minWidth = win.dataset.fsMinWidth;
      win.style.maxWidth = win.dataset.fsMaxWidth;
      win.style.height = win.dataset.fsHeight;

      setTimeout(() => {
        win.style.position = '';
        win.style.transition = '';
      }, 380);
    } else {
      if (minimizedWindows.has(win)) return;

      const rect = win.getBoundingClientRect();

      // Store current state
      win.dataset.fsLeft = rect.left + 'px';
      win.dataset.fsTop = rect.top + 'px';
      win.dataset.fsMinWidth = rect.width + 'px';
      win.dataset.fsMaxWidth = rect.width + 'px';
      win.dataset.fsHeight = rect.height + 'px';

      // Switch to fixed at current visual position (no transition)
      win.style.transition = 'none';
      win.style.position = 'fixed';
      win.style.left = rect.left + 'px';
      win.style.top = rect.top + 'px';
      win.style.minWidth = rect.width + 'px';
      win.style.maxWidth = rect.width + 'px';
      win.style.height = rect.height + 'px';

      void win.offsetWidth; // Force reflow

      // Animate to fullscreen
      win.style.transition = fsTransition;
      win.style.left = '0';
      win.style.top = '0';
      win.style.minWidth = '100%';
      win.style.maxWidth = '100%';
      win.style.height = '100%';
      win.classList.add('is-fullscreen');

      setTimeout(() => { win.style.transition = ''; }, 380);
    }
  }

  function close_window(close, point, appName) {
    close.style.display = "none";
    if (point) point.style.display = "none";
    if (appName && !appName.classList.contains("icon")) appName.style.display = "none";
    document.dispatchEvent(new CustomEvent("portfolio:windowchange"));
  }

  // Ajoute ces variables au début de ton code pour suivre les décalages
  let offsetIndex = 0;
  const offsetStep = 20; // Pixels de décalage entre chaque fenêtre
  const maxOffset = 100; // Décalage maximum avant de revenir à zéro

  function open_window(open, point, appName) {
    // Amener cette fenêtre au premier plan
    open.style.zIndex = ++zTop;
    document.dispatchEvent(new CustomEvent("portfolio:active", { detail: open }));
    if (minimizedWindows.has(open)) {
      restoreWindow(open, open._dockIcon);
      return;
    }
    elements.navbar.style.display = "flex";
    open.style.display = open.dataset.display || "block";
    launchpad.container.style.display = "flex";
    if (launchpad.window.classList.contains("is-open")) closeLaunchpad(false);

    // Afficher l'icône et le point dans le dock
    if (appName) appName.style.display = "block";
    if (point) point.style.display = "block";

    // Positionner la fenêtre au centre de l'écran avec un décalage
    const windowWidth = open.offsetWidth;
    const windowHeight = open.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calcule la position de base (centre)
    let baseLeft = (screenWidth - windowWidth) / 2;
    let baseTop = (screenHeight - windowHeight) / 3;

    // Ajoute un décalage pour cette fenêtre
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Sur mobile, décaler uniquement verticalement
      baseTop += offsetIndex * offsetStep;
    } else {
      // Sur desktop, décaler en diagonale
      baseLeft += offsetIndex * (offsetStep / 2);
      baseTop += offsetIndex * offsetStep;
    }

    // S'assurer que la fenêtre reste dans les limites de l'écran
    baseLeft = Math.max(10, Math.min(baseLeft, screenWidth - windowWidth - 10));
    baseTop = Math.max(30, Math.min(baseTop, screenHeight - windowHeight - 90)); // Laisse un peu d'espace en bas

    // Applique la position
    open.style.left = baseLeft + 'px';
    open.style.top = baseTop + 'px';

    // Incrémente l'index pour la prochaine fenêtre
    offsetIndex = (offsetIndex + 1) % (maxOffset / offsetStep);
  }



  // Launchpad function start
  launchpad.opening.addEventListener("click", handleOpenLaunching);


  // Keep the backdrop outside containers that can clip or transform it.
  document.body.appendChild(launchpad.window);
  let launchpadReturnFocus;
  let launchpadCloseTimer;
  function closeLaunchpad(restoreFocus = true) {
    clearTimeout(launchpadCloseTimer);
    launchpad.window.classList.remove('is-open');
    launchpad.window.classList.add('is-closing');
    launchpad.window.inert = true;
    launchpad.point.style.display = 'none';
    elements.navbar.style.display = 'flex';
    document.body.classList.remove('launchpad-open');
    launchpadCloseTimer = setTimeout(() => {
      launchpad.window.style.display = 'none';
      launchpad.window.classList.remove('is-closing');
      if (restoreFocus) launchpadReturnFocus?.focus();
    }, (matchMedia('(prefers-reduced-motion: reduce)').matches || document.body.classList.contains('reduce-motion')) ? 0 : 260);
  }
  function handleOpenLaunching() {
    if (launchpad.window.classList.contains('is-open')) { closeLaunchpad(); return; }
    clearTimeout(launchpadCloseTimer);
    launchpadReturnFocus = document.activeElement;
    launchpad.window.inert = false;
    launchpad.window.classList.remove('is-closing');
    launchpad.window.style.display = 'block';
    void launchpad.window.offsetWidth;
    launchpad.window.classList.add('is-open');
    document.body.classList.add('launchpad-open');
    launchpad.point.style.display = 'block';
    const input = launchpad.searchbox.querySelector('input');
    input.value = '';
    handleLaunchpadSearch({ target: input });
    input.focus();
  }
  launchpad.window.addEventListener('click', event => {
    if (!event.target.closest('.child-launchpad, .searchContainer')) closeLaunchpad();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && getComputedStyle(launchpad.window).display !== 'none') closeLaunchpad();
  });
  function handleLaunchpadSearch(e) {
    const query = e.target.value.trim().toLocaleLowerCase();
    for (const app of launchpad.app_container.children) {
      app.style.display = (app.dataset.keywords + ' ' + app.textContent).toLocaleLowerCase().includes(query) ? 'flex' : 'none';
    }
  }
  const launchTargets = { Home: '.open-finder', Mail: '.open-email', Pages: '.open-editor', 'Safari browser': '.open-safari', Code: '.open-vscode', Terminal: '.open-terminal', Notes: '.open-note', Settings: '.open-parametres', Maps: '.open-map' };
  Object.entries(launchTargets).forEach(([keyword, selector]) => {
    const tile = Array.from(launchpad.app_container.children).find(app => app.dataset.keywords.split(',').includes(keyword));
    if (tile) tile.addEventListener('click', () => { closeLaunchpad(false); document.querySelector(selector)?.click(); });
  });
  Array.from(launchpad.app_container.children).forEach(tile => {
    tile.tabIndex = 0;
    tile.setAttribute('role', 'button');
    tile.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); tile.click(); }
    });
  });
  // Launchpad function end

  // Calculator app start
  function handleOpenCal_lunchpad() {
    open_window(calculatorApp.window, calculatorApp.point, calculatorApp.app_name);
  }
  // Calculator app end


  notesApp.adding.addEventListener("click", handleAdding);
  calculatorApp.backfull.addEventListener("click", () =>
    minimizeWindow(calculatorApp.window, calculatorApp.opening)
  );
  calculatorApp.full.addEventListener("click", () =>
    handleFullScreen(calculatorApp.window)
  );
  notesApp.backfull.addEventListener("click", () =>
    minimizeWindow(notesApp.window, notesApp.opening)
  );
  terminalApp.close.addEventListener("click", () =>
    close_window(terminalApp.window, terminalApp.point, terminalApp.app_name)
  );
  notesApp.close.addEventListener("click", () =>
    close_window(notesApp.window, notesApp.point, notesApp.app_name)
  );
  mapsApp.close.addEventListener("click", () =>
    close_window(mapsApp.window, mapsApp.point, mapsApp.app_name)
  );
  finderApp.close.addEventListener("click", () =>
    close_window(finderApp.window, finderApp.point, finderApp.app_name)
  );
  notesApp.deleting.addEventListener("click", handleDeleting);
  terminalApp.backfull.addEventListener("click", () =>
    minimizeWindow(terminalApp.window, terminalApp.opening)
  );
  terminalApp.full.addEventListener("click", () =>
    handleFullScreen(terminalApp.window)
  );
  notesApp.full.addEventListener("click", () =>
    handleFullScreen(notesApp.window)
  );

  vscodeApp.full.addEventListener("click", () =>
    handleFullScreen(vscodeApp.window)
  );

  mapsApp.full.addEventListener("click", () => handleFullScreen(mapsApp.window));
  notesApp.window.addEventListener("click", handleNotes);
  terminalApp.opening.addEventListener("click", () =>
    open_window(terminalApp.window, terminalApp.point, terminalApp.app_name)
  );
  notesApp.opening.addEventListener("click", () =>
    open_window(notesApp.window, notesApp.point, notesApp.app_name)
  );
  calculatorApp.opening.addEventListener("click", () =>
    open_window(calculatorApp.window, calculatorApp.point, calculatorApp.app_name)
  );

  vscodeApp.opening.addEventListener("click", () =>
    open_window(vscodeApp.window, vscodeApp.point, vscodeApp.app_name)
  );

  mapsApp.opening.addEventListener("click", () =>
    open_window(mapsApp.window, mapsApp.point, mapsApp.app_name)
  );

  vscodeApp.close.addEventListener("click", () =>
    close_window(vscodeApp.window, vscodeApp.point, vscodeApp.app_name)
  );
  vscodeApp.backfull.addEventListener("click", () =>
    minimizeWindow(vscodeApp.window, vscodeApp.opening)
  );

  mapsApp.backfull.addEventListener("click", () =>
    minimizeWindow(mapsApp.window, mapsApp.opening)
  );
  calculatorApp.close.addEventListener("click", () =>
    close_window(
      calculatorApp.window,
      calculatorApp.point,
      calculatorApp.app_name
    )
  );
  calculatorApp.opening_l.addEventListener("click", handleOpenCal_lunchpad);

  launchpad.searchbox.addEventListener("input", handleLaunchpadSearch);
  // Calculator code
  // select all the buttons
  const calculatorButtons = document.querySelectorAll(".input button");
  // select the <input type="text" class="display" disabled> element
  const calculatorDisplay = document.querySelector(".display");
  const calculatorFormula = document.querySelector(".calculator__formula");

  // --- CALCULATOR LOGIC (Advanced) ---
  let calcState = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function updateDisplay() {
    if (calculatorDisplay) {
      calculatorDisplay.value = calcState.displayValue;
    }
    if (calculatorFormula) {
      if (calcState.operator && calcState.firstOperand !== null) {
        // Un mappage pour que ce soit plus joli (ex: * devient ×)
        const opMap = { '/': '÷', '*': '×', '+': '+', '-': '−' };
        const opPretty = opMap[calcState.operator] || calcState.operator;
        calculatorFormula.innerText = `${calcState.firstOperand} ${opPretty}`;
      } else {
        calculatorFormula.innerText = '';
      }
    }
  }

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calcState;

    if (waitingForSecondOperand === true) {
      calcState.displayValue = digit;
      calcState.waitingForSecondOperand = false;
    } else {
      calcState.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }

  function inputDecimal(dot) {
    if (calcState.waitingForSecondOperand === true) {
      calcState.displayValue = "0.";
      calcState.waitingForSecondOperand = false;
      return;
    }

    if (!calcState.displayValue.includes(dot)) {
      calcState.displayValue += dot;
    }
  }

  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calcState;
    const inputValue = parseFloat(displayValue);

    if (operator && calcState.waitingForSecondOperand) {
      calcState.operator = nextOperator;
      return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {
      calcState.firstOperand = inputValue;
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, inputValue);
      calcState.displayValue = String(Number(result.toFixed(7)));
      calcState.firstOperand = result;
    }

    calcState.waitingForSecondOperand = true;
    calcState.operator = nextOperator;
  }

  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand,
  };

  function resetCalculator() {
    calcState.displayValue = '0';
    calcState.firstOperand = null;
    calcState.waitingForSecondOperand = false;
    calcState.operator = null;
  }

  function toggleSign() {
    calcState.displayValue = String(parseFloat(calcState.displayValue) * -1);
  }

  function applyPercentage() {
    calcState.displayValue = String(parseFloat(calcState.displayValue) / 100);
  }

  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const { value } = button;

      if (button.classList.contains('operator')) {
        handleOperator(value);
      } else if (button.classList.contains('operator-2')) {
        if (value === 'C') resetCalculator();
        if (value === '+/-') toggleSign();
        if (value === '%') applyPercentage();
      } else if (value === '.') {
        inputDecimal(value);
      } else if (value === '=') {
        handleOperator(value);
      } else {
        inputDigit(value);
      }
      updateDisplay();
    });
  });

  updateDisplay(); // Initial display

  // Custom dragging for all windows on desktop and mobile
  const wins = document.querySelectorAll('.window');
  wins.forEach(win => {
    win.addEventListener('pointerdown', () => { win.style.zIndex = ++zTop; document.dispatchEvent(new CustomEvent('portfolio:active', { detail: win })); });
    const hdr = win.querySelector('.window-header, .window__taskbar');
    let drag = false, ox = 0, oy = 0;

    const start = e => {
      // Prevent drag if we're clicking a button
      if (e.target.closest('button, input, select, textarea, label, a')) return;

      e.preventDefault();
      drag = true;
      win.style.zIndex = ++zTop;
      const ev = e.touches ? e.touches[0] : e;
      ox = ev.clientX - win.offsetLeft;
      oy = ev.clientY - win.offsetTop;
      hdr.style.cursor = 'grabbing';
    };

    const move = e => {
      if (!drag) return;
      e.preventDefault();
      const ev = e.touches ? e.touches[0] : e;
      win.style.left = (ev.clientX - ox) + 'px';
      win.style.top = (ev.clientY - oy) + 'px';
    };

    const end = () => {
      drag = false;
      hdr.style.cursor = 'grab';
    };

    hdr.addEventListener('mousedown', start);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);

    hdr.addEventListener('touchstart', start, { passive: false });
    document.addEventListener('touchmove', move, { passive: false });
    document.addEventListener('touchend', end);

    // Prevent drag from button clicks/taps in the header
    const btns = win.querySelectorAll('.window-header button, .window__taskbar button');
    btns.forEach(b => {
      b.addEventListener('mousedown', e => e.stopPropagation());
      b.addEventListener('touchstart', e => e.stopPropagation(), { passive: false });


    });
  });

  // Window resize functionality
  function addResizeHandles(win) {
    const directions = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];
    directions.forEach(dir => {
      const handle = document.createElement('div');
      handle.className = `resize-handle resize-handle-${dir}`;
      win.appendChild(handle);
    });
  }

  wins.forEach(win => addResizeHandles(win));

  wins.forEach(win => {
    const handles = win.querySelectorAll('.resize-handle');
    const minWidth = 250;
    const minHeight = 200;

    handles.forEach(handle => {
      let resizing = false;
      let startX, startY, startWidth, startHeight, startLeft, startTop;
      let direction = '';

      const getDirection = (el) => {
        const classes = el.className.split(' ');
        for (const cls of classes) {
          if (cls.startsWith('resize-handle-') && cls !== 'resize-handle') {
            return cls.replace('resize-handle-', '');
          }
        }
        return '';
      };

      const startResize = (e) => {
        if (win.classList.contains('is-fullscreen')) return;
        e.preventDefault();
        e.stopPropagation();
        resizing = true;
        direction = getDirection(handle);
        win.style.zIndex = ++zTop;

        const ev = e.touches ? e.touches[0] : e;
        startX = ev.clientX;
        startY = ev.clientY;
        startWidth = win.offsetWidth;
        startHeight = win.offsetHeight;
        startLeft = win.offsetLeft;
        startTop = win.offsetTop;

        document.body.style.cursor = getComputedStyle(handle).cursor;
        document.body.style.userSelect = 'none';
      };

      const doResize = (e) => {
        if (!resizing) return;
        e.preventDefault();

        const ev = e.touches ? e.touches[0] : e;
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;

        let newWidth = startWidth;
        let newHeight = startHeight;
        let newLeft = startLeft;
        let newTop = startTop;

        if (direction.includes('e')) {
          newWidth = Math.max(minWidth, startWidth + dx);
        }
        if (direction.includes('w')) {
          const potentialWidth = startWidth - dx;
          if (potentialWidth >= minWidth) {
            newWidth = potentialWidth;
            newLeft = startLeft + dx;
          }
        }
        if (direction.includes('s')) {
          newHeight = Math.max(minHeight, startHeight + dy);
        }
        if (direction.includes('n')) {
          const potentialHeight = startHeight - dy;
          if (potentialHeight >= minHeight) {
            newHeight = potentialHeight;
            newTop = startTop + dy;
          }
        }

        win.style.minWidth = newWidth + 'px';
        win.style.maxWidth = newWidth + 'px';
        win.style.height = newHeight + 'px';
        win.style.left = newLeft + 'px';
        win.style.top = newTop + 'px';
      };

      const endResize = () => {
        resizing = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };

      handle.addEventListener('mousedown', startResize);
      document.addEventListener('mousemove', doResize);
      document.addEventListener('mouseup', endResize);

      handle.addEventListener('touchstart', startResize, { passive: false });
      document.addEventListener('touchmove', doResize, { passive: false });
      document.addEventListener('touchend', endResize);
    });
  });

  // Date and time
  const dateElement = document.getElementById("date");

  function digi() {
    const date = new Date();

    // Options for French localization
    const dateOptions = { weekday: 'short', day: 'numeric', month: 'short' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

    // Update Date (e.g., "mar. 3 févr.")
    if (dateElement) {
      dateElement.innerHTML = date.toLocaleDateString('fr-FR', dateOptions);
      dateElement.classList.remove('hidden'); // Ensure it's visible
    }

    // Update Clock (e.g., "01:43")
    if (elements.clockElement) {
      elements.clockElement.innerHTML = date.toLocaleTimeString('fr-FR', timeOptions);
    }
  }

  // Editor App
  const editorApp = {
    app_name: document.querySelector(".icon.open-editor"),
    window: document.getElementById("win-editor"),
    close: document.querySelector(".close-editor"),
    backfull: document.querySelector(".backfull-editor"),
    full: document.querySelector(".full-editor"),
    point: document.getElementById("point-editor"),
    title: document.getElementById("editor-title"),  // pour changer le titre
    area: document.querySelector(".editor-area")    // pour injecter le contenu
  };


  // Ouvrir l'éditeur depuis le Dock
  editorApp.app_name.addEventListener("click", () =>
    open_window(editorApp.window, editorApp.point, editorApp.app_name)
  );
  // fermer / minim / maxim
  editorApp.close.addEventListener("click", () =>
    close_window(editorApp.window, editorApp.point, editorApp.app_name)
  );
  editorApp.backfull.addEventListener("click", () =>
    minimizeWindow(editorApp.window, editorApp.app_name)
  );
  editorApp.full.addEventListener("click", () =>
    handleFullScreen(editorApp.window)
  );


  // Safari App
  const safariApp = {
    app_name: document.querySelector(".icon.open-safari"),
    window: document.getElementById("win-safari"),
    close: document.querySelector(".close-safari"),
    backfull: document.querySelector(".backfull-safari"),
    full: document.querySelector(".full-safari"),
    point: document.getElementById("point-safari"),
    back: document.querySelector(".safari-back"),
    forward: document.querySelector(".safari-forward"),
    home: document.querySelector(".safari-home"),
    reload: document.querySelector(".safari-reload"),
    addressBar: document.querySelector(".safari-url"),

    content: document.querySelector(".safari-content"),
    pinnedTabs: document.querySelectorAll(".safari-pinned-tab"),
    pages: document.querySelectorAll(".safari-page"),
    currentPage: "home",
    history: ["home"]
  };

  // Ouvrir/fermer la fenêtre Safari
  safariApp.app_name.addEventListener("click", () =>
    open_window(safariApp.window, safariApp.point, safariApp.app_name)
  );

  safariApp.close.addEventListener("click", () =>
    close_window(safariApp.window, safariApp.point)
  );

  safariApp.backfull.addEventListener("click", () =>
    minimizeWindow(safariApp.window, safariApp.app_name)
  );

  safariApp.full.addEventListener("click", () =>
    handleFullScreen(safariApp.window)
  );

  // Paramètres App
  const parametresApp = {
    app_name: document.querySelector(".icon.open-parametres"),
    window: document.getElementById("win-parametres"),
    close: document.querySelector(".close-parametres"),
    backfull: document.querySelector(".backfull-parametres"),
    full: document.querySelector(".full-parametres"),
    point: document.getElementById("point-parametres"),
    sidebar_items: document.querySelectorAll(".parametres-sidebar li"),
  };



  open_window(parametresApp.window, parametresApp.point, parametresApp.app_name)


  // Ouvrir/fermer la fenêtre Paramètres
  parametresApp.app_name.addEventListener("click", () =>
    open_window(parametresApp.window, parametresApp.point, parametresApp.app_name)
  );

  parametresApp.close.addEventListener("click", () =>
    close_window(parametresApp.window, parametresApp.point)
  );

  parametresApp.backfull.addEventListener("click", () =>
    minimizeWindow(parametresApp.window, parametresApp.app_name)
  );

  parametresApp.full.addEventListener("click", () =>
    handleFullScreen(parametresApp.window)
  );

  digi();
  setInterval(digi, 1000);


});