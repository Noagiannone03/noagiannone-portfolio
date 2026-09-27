document.addEventListener('DOMContentLoaded', () => {
  const P=Portfolio;
  const commands=['help','ls','cd','pwd','cat','tree','whoami','skills','projects','open','clear','history','echo','date','uname','man','neofetch'];
  const home='/Users/noa';
  const about=()=>P.profile?.about || 'Noa Giannone — Développeur web & mobile.\nCréer des outils utiles, soigner les interfaces et donner du sens au code.';
  const skills=()=>P.profile?.skills.map(s=>`${s.name}\n  ${s.items.join(' · ')}`).join('\n\n') || 'React · Vue.js · TypeScript · React Native · Expo · Swift · Java · Python\nPostgreSQL · NoSQL · InfluxDB · C++ · ESP · OPNsense';
  function fileSystem(){
    const fs=new Map([[home,{type:'dir'}],[home+'/projets',{type:'dir'}],[home+'/competences',{type:'dir'}], [home+'/README.md',{type:'file',text:about()}],[home+'/contact.txt',{type:'file',text:'noa.giannone@noagiannone.fr\nTapez open mail pour écrire à Noa.'}],[home+'/.secrets',{type:'file',text:'Quelques indices :\n  sudo make coffee\n  git log\n  cowsay\n  42\n  matrix\n\nLes meilleures découvertes commencent souvent par ls -a.'}]]);
    for(const p of P.projects)fs.set(home+'/projets/'+p.id+'.md',{type:'file',text:`${p.name}\n${'─'.repeat(p.name.length)}\n${p.summary}\n\n${new DOMParser().parseFromString(p.content,'text/html').body.textContent.trim().replace(/\n\s+/g,'\n')}\n\nOuvrir la présentation : open ${p.id}`,project:p.id});
    for(const s of P.profile?.skills||[])fs.set(home+'/competences/'+s.id+'.txt',{type:'file',text:s.name+'\n'+s.items.join('\n')});
    if(!(P.profile?.skills))fs.set(home+'/competences/stack.txt',{type:'file',text:skills()});
    return fs;
  }
  function createShell(host, compact=false){
    let cwd=home;const history=[];let historyIndex=0,draft='';
    const log=document.createElement('div');log.className='shell-log';log.setAttribute('role','log');log.setAttribute('aria-live','polite');log.setAttribute('aria-relevant','additions');
    const form=document.createElement('form');form.className='shell-form';
    const prompt=document.createElement('label');prompt.className='shell-prompt-label';prompt.htmlFor=host.id+'-input';
    const input=document.createElement('input');input.id=prompt.htmlFor;input.autocomplete='off';input.spellcheck=false;input.setAttribute('autocapitalize','off');input.setAttribute('aria-label','Commande du terminal');
    form.append(prompt,input);host.append(log,form);
    function promptText(){return `noa@portfolio ${cwd.replace(home,'~')} %`;}
    function scroll(){host.scrollTop=host.scrollHeight;}
    function print(text,style=''){const el=document.createElement('pre');el.className='shell-output '+style;el.textContent=String(text);log.append(el);while(log.childElementCount>240)log.firstElementChild.remove();scroll();}
    function resetPrompt(){prompt.textContent=promptText();scroll();}
    function resolve(value='~'){const path=value.startsWith('~')?value.replace(/^~/,home):value.startsWith('/')?value:cwd+'/'+value;const parts=[];for(const piece of path.split('/')){if(!piece||piece==='.')continue;if(piece==='..')parts.pop();else parts.push(piece);}return '/'+parts.join('/');}
    function list(path,all=false){return [...fileSystem()].filter(([key])=>key.startsWith(path+'/')&&!key.slice(path.length+1).includes('/')).filter(([key])=>all||!key.split('/').pop().startsWith('.'));}
    function open(target){const project=P.projects.find(p=>[p.id,p.name.toLowerCase(),p.title.toLowerCase()].includes(target.toLowerCase()))||P.projects.find(p=>fileSystem().get(resolve(target))?.project===p.id);if(project){P.openDocument(project.id);return `Ouverture de ${project.name} dans Word.`;}const apps={finder:'finder',projets:'finder',word:'word',mail:'mail',code:'code',vscode:'code',safari:'safari',settings:'settings',notes:'notes'};if(apps[target.toLowerCase()]){P.open(apps[target.toLowerCase()]);return 'Ouverture de '+target+'.';}return `open: introuvable : ${target}\nEssayez open whisp ou open mail.`;}
    function run(raw){
      const matches=raw.match(/"[^"]*"|'[^']*'|\S+/g)||[];const args=matches.map(v=>v.replace(/^(["'])(.*)\1$/,'$2'));const name=(args.shift()||'').toLowerCase(),arg=args.join(' ');
      const fs=fileSystem();
      switch(name){
        case 'help':return 'COMMANDES DU PORTFOLIO\n\n  ls [-a] [dossier]    Explorer les projets et compétences\n  cd <dossier>        Changer de dossier (.. pour remonter)\n  cat <fichier>       Lire une présentation\n  tree                Voir toute l’arborescence\n  whoami              Faire connaissance avec Noa\n  skills / projects   Compétences / projets\n  open <app|projet>   Ouvrir Mail, Word, un projet…\n  neofetch            Une autre façon de me présenter\n  pwd / date / echo   Les classiques\n  history / clear     Historique / écran propre\n\n↑ ↓ : historique · Tab : compléter · Ctrl L : effacer\nUn indice ? Les fichiers cachés ont parfois des choses à dire.';
        case 'pwd':return cwd;
        case 'ls':{const target=resolve(args.find(a=>!a.startsWith('-'))||cwd);if(!fs.has(target)&&target!=='/'&&target!=='/Users')return `ls: aucun fichier ou dossier : ${arg}`;if(target==='/')return 'Users/';if(target==='/Users')return 'noa/';if(fs.get(target)?.type==='file')return target.split('/').pop();return list(target,args.some(a=>a.includes('a'))).map(([key,item])=>key.split('/').pop()+(item.type==='dir'?'/':'')).join('   ')||'(dossier vide)';}
        case 'cd':{const target=resolve(arg||'~');if(fs.get(target)?.type==='dir'||target==='/'||target==='/Users'){cwd=target;return '';}return `cd: aucun dossier : ${arg}`;}
        case 'cat':{if(!arg)return 'usage : cat README.md';const f=fs.get(resolve(arg));return !f?`cat: fichier introuvable : ${arg}`:f.type==='dir'?`cat: ${arg} est un dossier`:f.text;}
        case 'tree':return '~\n'+list(home,true).map(([key,item])=>`├── ${key.split('/').pop()}${item.type==='dir'?'/\n'+list(key,true).map(([sub])=>'│   ├── '+sub.split('/').pop()).join('\n'):''}`).join('\n');
        case 'whoami':case 'about':return about();
        case 'skills':return arg?(P.profile.skills.find(s=>s.id===arg)?.items.join('\n')||'Domaines : '+P.profile.skills.map(s=>s.id).join(', ')):skills();
        case 'projects':return P.projects.map(p=>`${p.name.padEnd(24)}${p.summary}\n  → open ${p.id}`).join('\n\n');
        case 'open':return arg?open(arg):'usage : open finder | mail | code | safari | whisp | vago';
        case 'clear':log.replaceChildren();return '';
        case 'history':return history.map((h,i)=>`${String(i+1).padStart(3)}  ${h}`).join('\n');
        case 'echo':return arg;
        case 'date':return new Date().toLocaleString('fr-FR',{dateStyle:'full',timeStyle:'medium'});
        case 'uname':return 'PortfolioOS — un bureau web créé par Noa Giannone';
        case 'neofetch':return '       .----.       noa@portfolio\n      / .--. \\      ─────────────────────────────\n     | | NG | |     Rôle     Développeur web & mobile\n      \\ \'--\' /      Front    React · Vue · TypeScript\n       \'----\'       Mobile   React Native · Expo · Swift\n                    IoT      C++ · ESP · AirCarto\n                    Passion  Créer des outils qui comptent\n                    Hors code Voyages & avions';
        case 'man':return commands.includes(args[0])?`MANUEL — ${args[0]}\n\n${run('help')}\n\nCe terminal explore les contenus du portfolio.`:'usage : man <commande> — essayez man ls';
        case 'sudo':return arg==='make coffee'?'☕ Permission accordée.\nCafé compilé avec succès.\nNoa peut maintenant transformer une idée en application.':'sudo: ici, les idées ont déjà tous les droits. Essayez sudo make coffee.';
        case 'make':return arg==='coffee'?'make: permissions insuffisantes pour le café. Un sudo, peut-être ?':'make: objectif inconnu. Le prochain projet commence souvent par un café.';
        case 'git':return args[0]==='log'?'commit passion\n  Créer, imaginer et apprendre depuis toujours.\n\ncommit mobile\n  React Native, iOS, Android : des idées dans la poche.\n\ncommit aircarto\n  Du firmware au réseau : mesurer l’air et comprendre le terrain.\n\ncommit next\n  Construire quelque chose qui a du sens.':args[0]==='status'?'On branch curiosity\nNothing to commit, everything to explore.':'git: essayez git log ou git status.';
        case '42':return 'La réponse à la grande question.\nPour Noa, la question reste : « Est-ce que cet outil aide vraiment quelqu’un ? »';
        case 'cowsay':return '  ______________________________\n< '+(arg||'Un bon outil commence par écouter.')+' >\n  ------------------------------\n         \\   ^__^\n          \\  (oo)\\_______\n             (__)\\       )\\/\\\n                 ||----w |\n                 ||     ||';
        case 'matrix':return 'Wake up, Noa…\nThe portfolio has you.\n\nFollow the white rabbit → open vago\nDu temps passé sur le téléphone à une aide pour le carburant.';
        case 'rm':return 'rm: ce portfolio préfère construire. Rien n’a été supprimé.';
        case 'exit':return 'Session toujours ouverte. Le bouton rouge ferme la fenêtre.';
        case '':return '';
        default:return `zsh: commande inconnue : ${name}\nTapez help pour découvrir les commandes disponibles.`;
      }
    }
    form.addEventListener('submit',event=>{event.preventDefault();const raw=input.value.trim();if(!raw)return;history.push(raw);historyIndex=history.length;const line=document.createElement('div');line.className='shell-history-line';const label=document.createElement('span');label.className='shell-prompt-label';label.textContent=promptText();const value=document.createElement('span');value.textContent=raw;line.append(label,value);log.append(line);input.value='';const output=run(raw);if(output)print(output);resetPrompt();});
    input.addEventListener('keydown',event=>{
      if(event.key==='ArrowUp'||event.key==='ArrowDown'){event.preventDefault();if(historyIndex===history.length)draft=input.value;historyIndex=Math.max(0,Math.min(history.length,historyIndex+(event.key==='ArrowUp'?-1:1)));input.value=historyIndex===history.length?draft:history[historyIndex];input.setSelectionRange(input.value.length,input.value.length);}
      if(event.ctrlKey&&event.key.toLowerCase()==='l'){event.preventDefault();log.replaceChildren();}
      if(event.ctrlKey&&event.key.toLowerCase()==='c'){event.preventDefault();print(promptText()+' '+input.value+' ^C','muted');input.value='';}
      if(event.key==='Tab'){event.preventDefault();const tokens=input.value.split(/\s+/),part=tokens.at(-1);let candidates;if(tokens.length===1)candidates=commands.filter(c=>c.startsWith(part));else{const slash=part.lastIndexOf('/');const prefix=slash>=0?part.slice(0,slash+1):'';const fragment=part.slice(slash+1);candidates=list(resolve(prefix||cwd),true).map(([key,item])=>prefix+key.split('/').pop()+(item.type==='dir'?'/':'')).filter(c=>c.slice(prefix.length).startsWith(fragment));if(tokens[0]==='open')candidates.push(...P.projects.map(p=>p.id).filter(id=>id.startsWith(part)));}if(candidates.length===1){tokens[tokens.length-1]=candidates[0];input.value=tokens.join(' ');}else if(candidates.length>1)print(candidates.join('   '),'muted');}
    });
    host.addEventListener('click',event=>{if(!getSelection().toString()&&!event.target.closest('a,button'))input.focus();});
    print('Last login: '+new Date().toLocaleString('en-US')+' on ttys001','muted');
    print('Tapez help pour les commandes du portfolio.');
    resetPrompt();return{clear:()=>log.replaceChildren(),focus:()=>input.focus(),run};
  }
  P.terminalShell=createShell(document.getElementById('portfolio-terminal'));
  P.codeShell=createShell(document.getElementById('code-terminal'),true);
  document.querySelector('.open-terminal').addEventListener('click',()=>P.terminalShell.focus());
});
