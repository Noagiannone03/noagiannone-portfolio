
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
  // Keep in sync with the compact-window media query in responsive.css.
  const compactDesktop = matchMedia('(max-width: 760px), (max-height: 500px) and (pointer: coarse)');
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

  // ---- macOS window animations -------------------------------------------------

  const prefersReducedMotion = () =>
    document.body.classList.contains('reduce-motion') || matchMedia('(prefers-reduced-motion: reduce)').matches;

  const GENIE_STRIPS = 36;
  const GENIE_MINIMIZE_MS = 560;
  const GENIE_RESTORE_MS = 480;
  const smoothstep = u => u * u * (3 - 2 * u);
  const clamp01 = v => Math.min(1, Math.max(0, v));
  const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Genie effect: the window is sliced into thin horizontal strips (clones), and every
  // strip is scaled and clipped to its slice of a funnel that bends toward the Dock
  // icon. First the bottom of the window pinches (bend), then the content pours down
  // through the funnel into the icon (slide); both phases overlap like on macOS.
  function genie(win, winRect, targetRect, direction) {
    return new Promise(resolve => {
      const w = winRect.width, h = winRect.height;
      const x0 = winRect.left, y0 = winRect.top;
      const cx = targetRect.left + targetRect.width / 2;
      const tw = targetRect.width * 0.92;
      const ty = targetRect.top, tb = targetRect.bottom;
      const funnelDepth = Math.max(1, ty - y0);
      const travel = tb - y0;

      const layer = document.createElement('div');
      layer.className = 'genie-layer';
      layer.style.cssText = `left:${x0}px;top:${y0}px;width:${w}px;height:${h}px;`;

      // Inner scroll positions are lost by cloneNode: record them once, replay per strip
      const scrolled = [];
      win.querySelectorAll('*').forEach((el, i) => {
        if (el.scrollTop || el.scrollLeft) scrolled.push([i, el.scrollTop, el.scrollLeft]);
      });
      const display = win.dataset.display || 'block';
      const strips = [];
      const stripHeight = h / GENIE_STRIPS;
      for (let i = 0; i < GENIE_STRIPS; i++) {
        const clone = win.cloneNode(true);
        clone.classList.remove('genie-hidden');
        clone.classList.add('genie-strip');
        clone.removeAttribute('id');
        clone.querySelectorAll('iframe, video').forEach(el => el.replaceWith(document.createElement('div')));
        clone.style.cssText = `display:${display};left:0;top:0;width:${w}px;height:${h}px;min-width:0;max-width:none;`;
        clone.setAttribute('aria-hidden', 'true');
        clone.inert = true;
        layer.appendChild(clone);
        strips.push({ el: clone, r0: i * stripHeight, r1: (i + 1) * stripHeight });
      }
      document.body.appendChild(layer);
      if (scrolled.length) {
        strips.forEach(({ el }) => {
          const all = el.querySelectorAll('*');
          scrolled.forEach(([i, top, left]) => { if (all[i]) { all[i].scrollTop = top; all[i].scrollLeft = left; } });
        });
      }

      // Funnel edges at a given screen y, for a given amount of bending
      const edges = (y, bend) => {
        const s = bend * smoothstep(clamp01((y - y0) / funnelDepth));
        return [x0 + (cx - tw / 2 - x0) * s, x0 + w + (cx + tw / 2 - x0 - w) * s];
      };

      const render = t => {
        const bend = easeInOut(clamp01(t / 0.45));
        const slide = easeInOut(clamp01((t - 0.18) / 0.82));
        const shift = slide * travel;
        for (const strip of strips) {
          const yTop = y0 + strip.r0 + shift;
          const visibleBottom = Math.min(strip.r1, tb - y0 - shift);
          if (visibleBottom <= strip.r0) { strip.el.style.visibility = 'hidden'; continue; }
          const yBottom = y0 + visibleBottom + shift;
          const [lt, rt] = edges(yTop, bend);
          const [lb, rb] = edges(yBottom, bend);
          strip.el.style.visibility = 'visible';
          strip.el.style.transform = rectToQuad(w, strip.r0, visibleBottom,
            [lt - x0, yTop - y0], [rt - x0, yTop - y0], [rb - x0, yBottom - y0], [lb - x0, yBottom - y0]);
          // Overlap the next strip by a pixel so anti-aliased seams don't show
          strip.el.style.clipPath = `inset(${strip.r0}px 0 ${Math.max(0, h - visibleBottom - 1)}px 0)`;
        }
      };

      const duration = direction === 'in' ? GENIE_MINIMIZE_MS : GENIE_RESTORE_MS;
      const start = performance.now();
      render(direction === 'in' ? 0 : 1);
      const frame = now => {
        const p = clamp01((now - start) / duration);
        render(direction === 'in' ? p : 1 - p);
        if (p < 1) return requestAnimationFrame(frame);
        layer.remove();
        resolve();
      };
      requestAnimationFrame(frame);
    });
  }

  // Projective transform (homography) mapping the rows [r0, r1] of a box of width w onto
  // an arbitrary quad, so each strip lands exactly on its trapezoid of the funnel.
  function rectToQuad(w, r0, r1, [x0, y0], [x1, y1], [x2, y2], [x3, y3]) {
    const sh = Math.max(0.0001, r1 - r0);
    const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
    const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
    const det = dx1 * dy2 - dx2 * dy1;
    const g = det ? (dx3 * dy2 - dx2 * dy3) / det : 0;
    const k = det ? (dx1 * dy3 - dx3 * dy1) / det : 0;
    const a = x1 - x0 + g * x1, b = x3 - x0 + k * x3, c = x0;
    const d = y1 - y0 + g * y1, e = y3 - y0 + k * y3, f = y0;
    return `matrix3d(${a / w},${d / w},0,${g / w},${b / sh},${e / sh},0,${k / sh},0,0,1,0,` +
      `${c - b * r0 / sh},${f - e * r0 / sh},0,${1 - k * r0 / sh})`;
  }

  function dockAppIconSrc(dockIcon) {
    const img = dockIcon && (dockIcon.tagName === 'IMG' ? dockIcon : dockIcon.querySelector('img'));
    return img ? img.getAttribute('src') : 'icon/dock/finder.png';
  }

  function minimizeWindow(win, dockIcon) {
    if ((win.classList.contains('is-fullscreen') && !compactDesktop.matches) || minimizedWindows.has(win) || win._genieRunning) return;
    if (compactDesktop.matches || innerWidth <= 900) {
      win._dockIcon = dockIcon;
      minimizedWindows.add(win);
      win.style.display = 'none';
      document.dispatchEvent(new CustomEvent('portfolio:windowchange'));
      return;
    }
    win._genieRunning = true;
    win._dockIcon = dockIcon;
    const winRect = win.getBoundingClientRect();

    // The Dock makes room for the minimized window while it pours in
    const thumb = createMinimizedThumbnail(win, dockIcon);
    // Newest minimized window goes at the right end, just before the Trash
    const trash = document.querySelector('.dock .Trash')?.closest('.icon');
    if (trash) trash.before(thumb); else document.querySelector('.dock').appendChild(thumb);
    win._dockThumb = thumb;
    const targetRect = thumb.getBoundingClientRect();
    growThumbnail(thumb);

    minimizedWindows.add(win);
    document.dispatchEvent(new CustomEvent('portfolio:windowchange'));

    const finish = () => {
      win.style.display = 'none';
      setGenieHidden(win, false);
      win._genieRunning = false;
    };
    if (prefersReducedMotion()) return finish();
    setGenieHidden(win, true);
    genie(win, winRect, targetRect, 'in').then(finish);
  }

  // Hides the real window while its genie strips are drawn. Opacity (unlike visibility)
  // cannot be overridden or delayed by descendants, and inert blocks stray clicks.
  function setGenieHidden(win, hidden) {
    win.classList.toggle('genie-hidden', hidden);
    win.inert = hidden;
  }

  function growThumbnail(thumb) {
    if (prefersReducedMotion()) return;
    thumb.animate([{ width: '0px', opacity: 0 }, { width: getComputedStyle(thumb).width, opacity: 1 }],
      { duration: 280, easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)' });
  }

  function createMinimizedThumbnail(win, dockIcon) {
    const titleEl = win.querySelector('.window__taskbar--content h2, .window__taskbar h2');
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'icon dock-minimized';
    thumb.dataset.label = (titleEl && titleEl.textContent.trim()) || dockIcon?.dataset.label || 'Fenêtre';

    thumb.setAttribute('aria-label', 'Restaurer ' + thumb.dataset.label);
    const img = document.createElement('img');
    img.src = dockAppIconSrc(dockIcon);
    img.alt = '';
    thumb.appendChild(img);

    thumb.addEventListener('click', () => {
      win.style.zIndex = ++zTop;
      restoreWindow(win, win._dockIcon);
    });
    return thumb;
  }

  function restoreWindow(win, dockIcon) {
    if (win._genieRunning || !minimizedWindows.has(win)) return;
    minimizedWindows.delete(win);
    const startEl = win._dockThumb || dockIcon;
    const targetRect = startEl?.getBoundingClientRect();
    const thumb = win._dockThumb;
    win._dockThumb = null;

    // Hide before it is laid out again, so not a single frame of it shows before the genie
    const animate = !prefersReducedMotion() && !compactDesktop.matches && targetRect?.width > 0;
    if (animate) setGenieHidden(win, true);
    win.style.display = win.dataset.display || 'block';
    document.dispatchEvent(new CustomEvent('portfolio:windowchange'));
    const removeThumb = () => {
      if (!thumb) return;
      if (prefersReducedMotion()) return thumb.remove();
      thumb.animate([{ width: getComputedStyle(thumb).width, opacity: 1 }, { width: '0px', opacity: 0 }],
        { duration: 260, easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }).finished.then(() => thumb.remove());
    };
    if (!animate) {
      document.dispatchEvent(new CustomEvent('portfolio:active', { detail: win }));
      return removeThumb();
    }

    win._genieRunning = true;
    const winRect = win.getBoundingClientRect();
    genie(win, winRect, targetRect, 'out').then(() => {
      setGenieHidden(win, false);
      win._genieRunning = false;
      document.dispatchEvent(new CustomEvent('portfolio:active', { detail: win }));
      removeThumb();
    });
  }

  // Opening: the window zooms in slightly while fading in, as an app launches on macOS
  function animateWindowOpen(win) {
    if (prefersReducedMotion()) return;
    win.animate([
      { opacity: 0, transform: 'scale(0.92)' },
      { opacity: 1, transform: 'scale(1)' }
    ], { duration: 260, easing: 'cubic-bezier(0.2, 0.9, 0.3, 1)' });
  }

  function handleFullScreen(win) {
    if (compactDesktop.matches && !win.classList.contains('is-fullscreen')) return;
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
      // Edge to edge, directly below the menu bar
      const barHeight = menubarHeight();
      win.style.transition = fsTransition;
      win.style.left = '0';
      win.style.top = barHeight + 'px';
      win.style.minWidth = '100%';
      win.style.maxWidth = '100%';
      win.style.height = `calc(100% - ${barHeight}px)`;
      win.classList.add('is-fullscreen');

      setTimeout(() => { win.style.transition = ''; }, 380);
    }
  }

  function menubarHeight() {
    return elements.navbar ? elements.navbar.offsetHeight : 0;
  }

  // Usable desktop area between the menu bar and the Dock (ignores the Dock's
  // auto-hide transform so it stays stable while a window is fullscreen).
  function desktopBounds() {
    const dock = document.querySelector('.dock');
    const gap = 10;
    const top = menubarHeight() + gap;
    const bottom = (dock && getComputedStyle(dock).display !== 'none' ? dock.offsetTop : window.innerHeight) - gap;
    return { top, bottom };
  }

  // Closing: a quick fade with a slight shrink, then the window is hidden
  function close_window(close, point, appName) {
    const hide = () => {
      close.style.display = "none";
      document.dispatchEvent(new CustomEvent("portfolio:windowchange"));
    };
    if (prefersReducedMotion() || getComputedStyle(close).display === "none") {
      hide();
    } else {
      close.style.pointerEvents = "none";
      close._closeAnimation = close.animate([
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.94)' }
      ], { duration: 180, easing: 'cubic-bezier(0.4, 0, 1, 1)' });
      close._closeAnimation.finished.then(() => {
        close._closeAnimation = null;
        close.style.pointerEvents = "";
        hide();
      }, () => {});
    }
    if (point) point.style.display = "none";
    if (appName && !appName.classList.contains("icon")) appName.style.display = "none";
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
    // Reopened while its close animation is still running: cancel it and keep the window
    const wasClosing = Boolean(open._closeAnimation);
    if (wasClosing) {
      open._closeAnimation.cancel();
      open._closeAnimation = null;
      open.style.pointerEvents = "";
    }
    const wasHidden = getComputedStyle(open).display === "none";
    open.style.display = open.dataset.display || "block";
    if (wasHidden || wasClosing) animateWindowOpen(open);
    launchpad.container.style.display = "flex";
    if (launchpad.window.classList.contains("is-open")) closeLaunchpad(false);

    // Afficher l'icône et le point dans le dock
    if (appName) appName.style.display = "block";
    if (point) point.style.display = "block";

    if (compactDesktop.matches || open.classList.contains('is-fullscreen')) return;

    // Positionner la fenêtre entre la barre de menus et le Dock, sans le chevaucher
    const bounds = desktopBounds();
    const availableHeight = bounds.bottom - bounds.top;
    if (open.offsetHeight > availableHeight) open.style.height = availableHeight + 'px';

    const windowWidth = open.offsetWidth;
    const windowHeight = open.offsetHeight;
    const screenWidth = window.innerWidth;

    // Calcule la position de base (centre de la zone utile)
    let baseLeft = (screenWidth - windowWidth) / 2;
    let baseTop = bounds.top + (availableHeight - windowHeight) / 3;

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
    baseTop = Math.max(bounds.top, Math.min(baseTop, bounds.bottom - windowHeight));

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

  // Dock auto-hide while a window is fullscreen, like macOS:
  // touching the bottom edge reveals it after a short delay, leaving it slides it away.
  const dock = document.querySelector('.dock');
  const DOCK_SHOW_DELAY = 300;
  const DOCK_HIDE_DELAY = 150;
  const DOCK_EDGE = 8;
  let dockShowTimer, dockHideTimer;

  function showDock() {
    clearTimeout(dockHideTimer);
    dockHideTimer = null;
    if (dockShowTimer || dock.classList.contains('is-revealed')) return;
    dockShowTimer = setTimeout(() => {
      dockShowTimer = null;
      dock.classList.add('is-revealed');
    }, DOCK_SHOW_DELAY);
  }

  function hideDock() {
    clearTimeout(dockShowTimer);
    dockShowTimer = null;
    if (dockHideTimer || !dock.classList.contains('is-revealed')) return;
    dockHideTimer = setTimeout(() => {
      dockHideTimer = null;
      dock.classList.remove('is-revealed');
    }, DOCK_HIDE_DELAY);
  }

  function syncFullscreenDock() {
    const active = [...document.querySelectorAll('.window.is-fullscreen')]
      .some(w => getComputedStyle(w).display !== 'none');
    if (active === document.body.classList.contains('has-fullscreen')) return;
    document.body.classList.toggle('has-fullscreen', active);
    clearTimeout(dockShowTimer);
    clearTimeout(dockHideTimer);
    dockShowTimer = dockHideTimer = null;
    dock.classList.remove('is-revealed');
  }

  const fullscreenObserver = new MutationObserver(syncFullscreenDock);
  document.querySelectorAll('.window').forEach(win =>
    fullscreenObserver.observe(win, { attributes: true, attributeFilter: ['class', 'style'] })
  );

  // Invisible reveal strip along the bottom edge, stacked above fullscreen windows
  // so it still catches the pointer over iframes or elements that swallow events.
  const dockHotzone = document.createElement('div');
  dockHotzone.className = 'dock-hotzone';
  dockHotzone.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dockHotzone);
  dockHotzone.addEventListener('pointerenter', e => {
    if (e.pointerType !== 'touch') showDock();
  });

  document.addEventListener('pointermove', e => {
    if (!document.body.classList.contains('has-fullscreen') || e.pointerType === 'touch') return;
    if (e.clientY >= window.innerHeight - DOCK_EDGE) return showDock();
    // Keep it while the pointer is over the Dock, including magnified icons above it
    const rect = dock.getBoundingClientRect();
    const overDock = dock.classList.contains('is-revealed') &&
      e.clientX >= rect.left - 10 && e.clientX <= rect.right + 10 && e.clientY >= rect.top - 70;
    if (overDock) {
      clearTimeout(dockHideTimer);
      dockHideTimer = null;
    } else {
      hideDock();
    }
  });

  // In a browser window the screen edge sits below the page (the real Dock lives there),
  // so a pointer thrown downwards leaves the page before touching the strip: treat
  // leaving through the bottom edge as reaching it.
  document.addEventListener('mouseout', e => {
    if (e.relatedTarget || !document.body.classList.contains('has-fullscreen')) return;
    const toBottom = window.innerHeight - e.clientY;
    const nearestEdge = Math.min(e.clientY, e.clientX, window.innerWidth - e.clientX);
    if (toBottom <= nearestEdge) showDock();
    else hideDock();
  });
  // Touch screens have no hover: tap near the bottom edge to reveal, elsewhere to dismiss
  document.addEventListener('pointerdown', e => {
    if (!document.body.classList.contains('has-fullscreen') || e.pointerType !== 'touch') return;
    if (e.clientY >= window.innerHeight - 24) dock.classList.add('is-revealed');
    else if (!dock.contains(e.target)) dock.classList.remove('is-revealed');
  });

  // Dock magnification, like macOS: every icon sizes itself from its distance to the
  // cursor along a cosine falloff, smoothed by a spring so neighbours swell and settle.
  const DOCK_MAGNIFICATION = 1.85; // largest size, relative to the resting size
  const DOCK_RANGE = 3.2;          // falloff radius, in resting icon widths
  const DOCK_SPRING = { stiffness: 1500, damping: 120 }; // per unit mass, critically-damped feel
  const dockLabels = {
    'open-finder': 'Finder', 'open-lunchpad': 'Launchpad', 'open-editor': 'Word',
    'open-vscode': 'Visual Studio Code', 'open-email': 'Mail', 'open-safari': 'Safari',
    'open-map': 'Plans', 'open-cal': 'Calculatrice', 'open-note': 'Notes',
    'open-terminal': 'Terminal', 'open-parametres': 'Réglages Système'
  };
  dock.querySelectorAll('.icon').forEach(icon => {
    const cls = [...icon.classList].find(c => dockLabels[c]);
    icon.dataset.label = cls ? dockLabels[cls] : 'Corbeille';
    icon.setAttribute('aria-label', icon.dataset.label);
  });

  const dockSizes = new Map();
  let dockPointerX = null, dockFrame = 0, dockLastTime = 0;

  function dockFrameStep(time) {
    const dt = Math.min((time - dockLastTime) / 1000 || 1 / 60, 1 / 30);
    dockLastTime = time;
    const base = parseFloat(getComputedStyle(dock).getPropertyValue('--dock-icon'));
    const restingWidth = [...dock.children].reduce((total, child) => total + (child.offsetParent ? (child.classList.contains('icon') ? base : child.offsetWidth + 8) : 0), 18);
    const headroom = Math.max(0, innerWidth - 32 - restingWidth);
    const max = base + Math.min(base * (DOCK_MAGNIFICATION - 1), headroom / DOCK_RANGE);
    const range = base * DOCK_RANGE;
    let moving = false;

    dock.querySelectorAll('.icon').forEach(icon => {
      if (!icon.offsetParent) return;
      const state = dockSizes.get(icon) || { size: base, velocity: 0 };
      const rect = icon.getBoundingClientRect();
      const distance = dockPointerX === null ? Infinity : Math.abs(dockPointerX - (rect.left + rect.width / 2));
      const target = distance < range ? base + (max - base) * (1 + Math.cos(Math.PI * distance / range)) / 2 : base;

      // Semi-implicit Euler in small sub-steps keeps the stiff spring stable
      for (let t = 0; t < dt; t += 0.004) {
        const step = Math.min(0.004, dt - t);
        state.velocity += (DOCK_SPRING.stiffness * (target - state.size) - DOCK_SPRING.damping * state.velocity) * step;
        state.size += state.velocity * step;
      }

      if (Math.abs(target - state.size) < 0.05 && Math.abs(state.velocity) < 0.05) {
        state.size = target;
        state.velocity = 0;
      } else {
        moving = true;
      }
      dockSizes.set(icon, state);
      icon.style.width = state.size === base && dockPointerX === null ? '' : state.size + 'px';
    });

    if (moving) {
      dockFrame = requestAnimationFrame(dockFrameStep);
    } else {
      dockFrame = 0;
      if (dockPointerX === null) dockSizes.clear();
    }
  }

  function runDockMagnification() {
    if (dockFrame) return;
    dockLastTime = performance.now();
    dockFrame = requestAnimationFrame(dockFrameStep);
  }

  dock.addEventListener('pointermove', e => {
    if (innerWidth <= 1000 || e.pointerType !== 'mouse' || document.body.classList.contains('reduce-motion') ||
        matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    dockPointerX = e.clientX;
    runDockMagnification();
  });
  dock.addEventListener('pointerleave', () => {
    dockPointerX = null;
    runDockMagnification();
  });

  // A desktop fullscreen layer must not cover subsequently opened mobile apps.
  compactDesktop.addEventListener('change', event => {
    if (event.matches) document.querySelectorAll('.window.is-fullscreen').forEach(handleFullScreen);
  });

  let layoutFrame;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(() => {
      dockPointerX = null;
      runDockMagnification();
      if (compactDesktop.matches) return;
      const bounds = desktopBounds();
      document.querySelectorAll('.window').forEach(win => {
        if (getComputedStyle(win).display === 'none' || win.classList.contains('is-fullscreen')) return;
        const rect = win.getBoundingClientRect();
        if (rect.height > bounds.bottom - bounds.top) win.style.height = (bounds.bottom - bounds.top) + 'px';
        win.style.left = Math.max(8, Math.min(rect.left, innerWidth - win.offsetWidth - 8)) + 'px';
        win.style.top = Math.max(bounds.top, Math.min(rect.top, bounds.bottom - win.offsetHeight)) + 'px';
      });
    });
  });

  // Custom dragging for all windows on desktop and mobile
  const wins = document.querySelectorAll('.window');
  wins.forEach(win => {
    win.addEventListener('pointerdown', () => { win.style.zIndex = ++zTop; document.dispatchEvent(new CustomEvent('portfolio:active', { detail: win })); });
    const hdr = win.querySelector('.window-header, .window__taskbar');
    let drag = false, ox = 0, oy = 0;

    const start = e => {
      if (compactDesktop.matches) return;
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