document.addEventListener('DOMContentLoaded',()=>{
  const P=Portfolio;
  // Compose is the entry point of Mail; retain its existing validated submit handler.
  const mail=document.getElementById('win-email'),form=document.getElementById('contact-form');
  mail.querySelector('.mail-titlebar h2').textContent='Nouveau message';
  form.hidden=false;
  const send=form.querySelector('[type=submit]');send.setAttribute('form','contact-form');send.title='Envoyer le message';
  mail.querySelector('.mail-toolbar').prepend(send);
  form.querySelector('.mail-compose-header').hidden=true;
  P.composeMail=()=>{form.hidden=false;form.elements.email.focus();};
  document.addEventListener('portfolio:active',e=>{if(e.detail===mail&&!form.contains(document.activeElement))form.elements.email.focus();});
  form.elements.subject.addEventListener('input',()=>mail.querySelector('.mail-titlebar h2').textContent=form.elements.subject.value||'Nouveau message');
  form.addEventListener('reset',()=>{mail.querySelector('.mail-titlebar h2').textContent='Nouveau message';});
  // A resizable integrated panel, including a keyboard-operated separator.
  const panel=document.querySelector('.vscode-panel'),toggle=document.getElementById('code-terminal-toggle');
  const sash=document.createElement('div');sash.className='terminal-resize';sash.tabIndex=0;sash.setAttribute('role','separator');sash.setAttribute('aria-label','Hauteur du terminal');sash.setAttribute('aria-orientation','horizontal');panel.prepend(sash);
  function resize(height){const max=Math.max(95,panel.parentElement.clientHeight*.65);const value=Math.max(95,Math.min(max,height));panel.style.height=value+'px';sash.setAttribute('aria-valuemin','95');sash.setAttribute('aria-valuemax',String(Math.round(max)));sash.setAttribute('aria-valuenow',String(Math.round(value)));}
  sash.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();sash.setPointerCapture(e.pointerId);const y=e.clientY,h=panel.getBoundingClientRect().height;const move=ev=>resize(h+y-ev.clientY);const end=()=>{sash.removeEventListener('pointermove',move);sash.removeEventListener('pointerup',end);sash.removeEventListener('pointercancel',end);};sash.addEventListener('pointermove',move);sash.addEventListener('pointerup',end);sash.addEventListener('pointercancel',end);});
  sash.addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown','Home','End'].includes(e.key)){e.preventDefault();resize(e.key==='Home'?95:e.key==='End'?panel.parentElement.clientHeight:panel.clientHeight+(e.key==='ArrowUp'?20:-20));}});
  const close=document.createElement('button');close.type='button';close.textContent='×';close.title='Masquer le terminal';close.setAttribute('aria-label','Masquer le terminal');panel.querySelector('header').append(close);close.addEventListener('click',()=>panel.hidden=true);
  const panelState=()=>{toggle.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden){resize(parseFloat(panel.style.height)||200);P.codeShell.focus();}};
  new MutationObserver(panelState).observe(panel,{attributes:true,attributeFilter:['hidden']});toggle.setAttribute('aria-expanded','false');
  document.querySelector('.Vscode').addEventListener('keydown',e=>{if(e.ctrlKey&&e.key==='`'){e.preventDefault();panel.hidden=!panel.hidden;}});
  // Keep native input editing, selection and IME support, with a terminal block cursor.
  document.querySelectorAll('.shell-form input').forEach(input=>{
    const wrap=document.createElement('span');wrap.className='shell-input-wrap';input.before(wrap);wrap.append(input);
    const cursor=document.createElement('span');cursor.className='shell-cursor';cursor.setAttribute('aria-hidden','true');wrap.append(cursor);
    function position(){const style=getComputedStyle(input);const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');ctx.font=style.font;const width=ctx.measureText(input.value.slice(0,input.selectionStart||0)).width;cursor.style.left=Math.max(0,Math.min(input.clientWidth-8,width-input.scrollLeft))+'px';cursor.style.visibility=input.selectionStart!==input.selectionEnd?'hidden':'visible';}
    ['input','keyup','click','focus','scroll'].forEach(type=>input.addEventListener(type,position));input.closest('form').addEventListener('submit',()=>requestAnimationFrame(position));document.addEventListener('selectionchange',()=>{if(document.activeElement===input)position();});
    input.closest('.window').addEventListener('pointerup',e=>{if(e.target.closest('.window__taskbar,.terminal-tabs,.vscode-panel header,.terminal-resize'))return;if(e.target.closest('.shell-host')&&!getSelection().toString())input.focus();});
    position();
  });
  document.addEventListener('portfolio:active',e=>{if(e.detail?.classList.contains('terminal'))requestAnimationFrame(()=>P.terminalShell.focus());});
});
