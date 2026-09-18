const D=window.LEARNING_ATLAS_DATA;
const E=window.LEARNING_ATLAS_ENHANCEMENTS||{};
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
const store={get:(k,d="")=>{try{return localStorage.getItem(k)??d}catch{return d}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch{}}};

function brand(){return '<a class="brand" href="#/"><span class="brandmark"><i></i><i></i><i></i></span><span>Learning Atlas</span></a>'}
function header(active="Home"){
 const chem=["Chemistry","Study Guide","Visual Lab","Formula Vault","Practice Tests","Challenge Lab","Fusion Lab","Open Ended","Mock Exam"].includes(active);
 return '<header class="topbar">'+brand()+
 '<nav class="topnav"><a class="'+(active==="Home"?"active":"")+'" href="#/">Home</a><a class="'+(active==="Grade 10"?"active":"")+'" href="#/grade-10">Grade 10</a>'+
 (chem?'<a class="'+(active==="Chemistry"?"active":"")+'" href="#/grade-10/chemistry-honors">Chemistry</a><a class="'+(active==="Study Guide"?"active":"")+'" href="#/grade-10/chemistry-honors/study-guide">Prep</a><a class="'+(active==="Practice Tests"?"active":"")+'" href="#/grade-10/chemistry-honors/practice-tests">Tests</a><a class="'+(active==="Challenge Lab"?"active":"")+'" href="#/grade-10/chemistry-honors/challenge-lab">Challenge</a><a class="'+(active==="Visual Lab"?"active":"")+'" href="#/grade-10/chemistry-honors/visual-lab">Visuals</a>':"")+
 '</nav><div class="navend"><button class="kbd" id="cmdBtn">⌘ K</button><button class="tool-btn" id="toolBtn">Tools</button></div></header>'
}
function footer(){return '<footer><div class="shell"><span>Learning Atlas</span><span>Notes and scratch work stay in this browser.</span></div></footer>'}
function crumbs(items){return '<div class="crumbs">'+items.map((x,i)=>i===items.length-1?'<strong>'+x[0]+'</strong>':'<a href="'+x[1]+'">'+x[0]+'</a><span>/</span>').join("")+'</div>'}
function chemCrumbs(last){return crumbs([["Learning Atlas","#/"],["Grade 10","#/grade-10"],[D.subject.name,"#/grade-10/chemistry-honors"],[last,""]])}

function home(){
 const g=D.grade,s=D.subject;
 return header("Home")+'<main><section class="shell hero home"><div><div class="eyebrow"><span class="signal"></span>High School Preparation</div><h1>Study what<br><span class="gradient">matters now.</span></h1><p class="lead">A focused learning workspace that reveals only real content, then scales from subject guidance to topic mastery, challenge work, and exam simulation.</p><div class="actions"><a class="btn primary" href="#/grade-10">Open Grade 10 <span>↗</span></a></div></div><div class="hero-art"><div class="orbit o1"></div><div class="orbit o2"></div><div class="orbit o3"></div><div class="active-node"><small>ACTIVE PATH</small><strong>'+g.name+'</strong><span>'+s.name+' · '+s.subtitle+'</span></div><div class="node-chip n1">'+D.topics.length+' topics</div><div class="node-chip n2">'+D.topics.reduce((a,t)=>a+t.modules.length,0)+' modules</div><div class="node-chip n3">Prep → Practice → Challenge</div></div></section><section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Your learning path</div><h2>Continue from here.</h2></div><p>No placeholders. New grades and subjects appear only when usable material exists.</p></div><div class="path-grid"><a class="path-card" href="#/grade-10"><div class="big">10</div><h3>'+g.name+'</h3><p>'+g.description+' '+s.name+' is currently available.</p><div class="cardmeta"><span class="pill">Active</span><span class="roundarrow">↗</span></div></a></div></section></main>'+footer()
}
function grade(){
 const g=D.grade,s=D.subject,mc=D.topics.reduce((a,t)=>a+t.modules.length,0);
 return header("Grade 10")+'<main><section class="shell innerhero">'+crumbs([["Learning Atlas","#/"],[g.name,""]])+'<div class="eyebrow"><span class="signal"></span>Academic path</div><h1>'+g.name+'</h1><p class="lead">Subjects appear here only after usable material exists.</p></section><section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Subjects</div><h2>Current subject.</h2></div><p>This page expands naturally when Biology Honors, Physics Honors, AP Seminar, or another real subject is added.</p></div><div class="subject-grid"><a class="subject-card" href="#/grade-10/chemistry-honors"><div><div class="micro">Honors Science</div><div class="subject-title">'+s.name+'<br>'+s.subtitle+'</div><p>'+s.description+'</p></div><div class="countbox"><div class="count"><strong>'+D.topics.length+'</strong><span>topics</span></div><div class="count"><strong>'+mc+'</strong><span>modules</span></div><div class="count"><strong>5</strong><span>practice modes</span></div><div class="count"><strong>'+(D.openQuestions.length+D.mockQuestions.length)+'</strong><span>constructed prompts</span></div></div></a></div></section></main>'+footer()
}
function chemistry(){
 return header("Chemistry")+'<main><section class="shell innerhero">'+crumbs([["Learning Atlas","#/"],["Grade 10","#/grade-10"],[D.subject.name,""]])+'<div class="eyebrow"><span class="signal"></span>Grade 10 · Honors Science</div><h1>'+D.subject.name+'<br><span class="gradient">'+D.subject.subtitle+'</span></h1><p class="lead">A one-stop prep workspace: learn concepts, memorize essentials, practice at multiple levels, write out reasoning, use scratch tools, and simulate the exam.</p></section>'+prepOverview()+learningSystemStrip()+
 '<section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Topics</div><h2>Choose the chemistry problem space.</h2></div><p>Each topic can contain any number of modules. Modules open into explanation, worked model, and targeted practice.</p></div><div class="topic-grid">'+D.topics.map((t,i)=>'<a class="topic-card" href="#/grade-10/chemistry-honors/topic/'+t.id+'"><div class="topic-index">0'+(i+1)+'</div><h3>'+t.name+'</h3><p>'+t.description+'</p><div class="module-preview">'+t.modules.slice(0,3).map(m=>'<span>'+m.name+'</span>').join("")+(t.modules.length>3?'<span>+'+(t.modules.length-3)+' more</span>':"")+'</div><div class="topicfoot"><span>'+t.modules.length+' modules</span><span class="roundarrow">↗</span></div></a>').join("")+'</div></section>'+
 assessmentHub()+'<section class="shell section"><div class="reasoning"><span>GIVEN</span><b>→</b><span>FIND</span><b>→</b><span>PATH</span><b>→</b><span>UNITS</span><b>→</b><span>SOLVE</span><b>→</b><span>SIG FIGS</span><b>→</b><span>CHECK</span></div></section>'+resourcesStrip()+'</main>'+footer()
}
function prepOverview(){
 return '<section class="shell section"><div class="prep-hero"><div><div class="eyebrow">Prep system</div><h2>Know what to do before you solve.</h2><p>Use the study guide for formulas, memory cues, habits, and a four-pass preparation sequence. Then choose the practice mode that matches your confidence.</p><div class="actions"><a class="btn primary" href="#/grade-10/chemistry-honors/study-guide">Open Study Guide</a><a class="btn" href="#/grade-10/chemistry-honors/practice-tests">Practice Tests</a></div></div><div class="prep-stats"><div><strong>4</strong><span>prep passes</span></div><div><strong>6</strong><span>formula cards</span></div><div><strong>3</strong><span>graded tests</span></div><div><strong>4</strong><span>challenge levels</span></div></div></div></section>'
}
function assessmentHub(){
 const cards=[["Practice Tests","Foundation → Applied → Honors with immediate scoring and question-by-question reasoning.","#/grade-10/chemistry-honors/practice-tests","36 MCQ"],["Challenge Lab","Original problems from simple to complex, with scratch work and reasoning checks.","#/grade-10/chemistry-honors/challenge-lab","4 levels"],["Fusion Lab","Cross-topic problems that force students to combine two to four chemistry ideas in one solution.","#/grade-10/chemistry-honors/fusion-lab",(E.fusionChallenges||[]).length+" cross-topic"],["Open-Ended Practice","Constructed response, lab thinking, dimensional setup, error analysis, and synthesis.","#/grade-10/chemistry-honors/open-ended",D.openQuestions.length+" prompts"],["Mixed Mock Exam","Cumulative exam where the student must decide which method applies.","#/grade-10/chemistry-honors/mock-exam",D.mockQuestions.length+" questions"]];
 return '<section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Practice & assessment</div><h2>Move from confidence to challenge.</h2></div><p>Alternate recognition, free response, setup, error diagnosis, and mixed-topic work.</p></div><div class="assessment-grid rich">'+cards.map((c,i)=>'<a class="assessment-card" href="'+c[2]+'"><b>0'+(i+1)+'</b><div class="micro">Practice mode</div><h3>'+c[0]+'</h3><p>'+c[1]+'</p><span class="pill">'+c[3]+'</span></a>').join("")+'</div></section>'
}
function resourcesStrip(){
 return '<section class="shell section"><div class="resource-panel"><div><div class="eyebrow">Reference shelf</div><h2>Go deeper when a concept is not sticking.</h2><p>External references provide broader context and additional examples. Learning Atlas questions are original.</p></div><div class="resource-links">'+(E.resources||[]).map(r=>'<a href="'+r.url+'" target="_blank" rel="noopener"><strong>'+r.name+'</strong><span>'+r.note+'</span><i>↗</i></a>').join("")+'</div></div></section>'
}

function learningSystemStrip(){
 const cards=[
  ["Visual Lab","Animated concept models for density, displacement, waves, gases, pH, equilibrium, kinetics, and more.","#/grade-10/chemistry-honors/visual-lab","See it"],
  ["Formula Vault","Searchable formulas with usage cues and common traps.","#/grade-10/chemistry-honors/formula-vault","Recall it"],
  ["Memory Cards","Fast retention cues embedded in the Study Guide.","#/grade-10/chemistry-honors/study-guide","Remember it"]
 ];
 return '<section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Learn before testing</div><h2>Understand → see → work → remember.</h2></div><p>Phase 1 adds a teach-first layer so students build the mental model before harder practice.</p></div><div class="learning-system-grid">'+cards.map(c=>'<a class="learning-system-card" href="'+c[2]+'"><span>'+c[3]+'</span><h3>'+c[0]+'</h3><p>'+c[1]+'</p><i>↗</i></a>').join("")+'</div></section>'
}
function formulaVault(){
 const cards=(E.phase1&&E.phase1.formulaCards)||[];
 return header("Formula Vault")+'<main><section class="shell innerhero">'+chemCrumbs("Formula Vault")+'<div class="eyebrow"><span class="signal"></span>Formula memory</div><h1>Formula Vault</h1><p class="lead">Search the relationships worth instant recall. Each card includes a cue and a common trap.</p><div class="formula-search"><input id="formulaSearch" placeholder="Search density, pH, gas, yield, photons..."></div></section><section class="shell section"><div class="formula-vault-grid" id="formulaVaultGrid">'+cards.map((f,i)=>'<article class="vault-card" data-search="'+esc((f[0]+" "+f[1]+" "+f[2]+" "+f[3]).toLowerCase())+'"><div class="micro">'+String(i+1).padStart(2,"0")+'</div><h3>'+f[0]+'</h3><code>'+f[1]+'</code><p><strong>Remember:</strong> '+f[2]+'</p><div class="trapline">'+f[3]+'</div></article>').join("")+'</div></section></main>'+footer()
}
function visualLab(){
 const visuals=(E.phase1&&E.phase1.visuals)||[];
 return header("Visual Lab")+'<main><section class="shell innerhero">'+chemCrumbs("Visual Lab")+'<div class="eyebrow"><span class="signal"></span>Animated concept lab</div><h1>Visual Lab</h1><p class="lead">Move the controls and watch the chemistry respond. These diagrams are built to explain relationships, not decorate the page.</p></section><section class="shell section"><div class="visual-grid">'+visuals.map(v=>'<article class="visual-card"><div class="visual-card-head"><div><div class="micro">'+v.topic+'</div><h3>'+v.name+'</h3><p>'+v.desc+'</p></div></div>'+visualScene(v.kind)+'</article>').join("")+'</div></section></main>'+footer()
}
function visualScene(kind){
 if(kind==="density") return '<div class="viz density-viz"><div class="mass-block" id="densityBlock">MASS</div><div class="viz-readout"><span>Mass: <b>100 g</b></span><span>Volume: <b id="densityVol">50 cm³</b></span><span>Density: <b id="densityOut">2.00 g/cm³</b></span></div><input type="range" min="20" max="100" value="50" data-viz-control="density"></div>';
 if(kind==="displacement") return '<div class="viz displacement-viz"><div class="cylinder"><div class="water"></div><div class="object-drop"></div></div><button class="mini-btn" data-animate="displacement">Drop object</button><div class="viz-caption">Initial 40 mL → final 58 mL → object volume 18 mL</div></div>';
 if(kind==="sigfig") return '<div class="viz sigfig-viz"><div class="sig-number" id="sigNumber"><span class="ghost">0.00</span><span class="sig">45600</span></div><div class="viz-controls"><button class="mini-btn" data-animate="sigfig">Scan digits</button><button class="mini-btn" data-reset-viz="sigfig">Reset</button></div><div class="viz-caption" id="sigCaption">Press Scan digits to see which digits count.</div></div>';
 if(kind==="isotope") return '<div class="viz isotope-viz"><div class="isotope-scale"><span>35 amu</span><i id="isoNeedle"></i><span>37 amu</span></div><input type="range" min="0" max="100" value="24" data-viz-control="isotope"><div class="viz-readout"><span>Heavy isotope: <b id="isoPct">24%</b></span><span>Average: <b id="isoAvg">35.48 amu</b></span></div></div>';
 if(kind==="wave") return '<div class="viz wave-viz"><svg viewBox="0 0 520 130" preserveAspectRatio="none"><path id="wavePath" d="" fill="none" stroke="currentColor" stroke-width="4"/></svg><input type="range" min="1" max="8" value="3" data-viz-control="wave"><div class="viz-caption" id="waveCaption">Longer wavelength → lower frequency.</div></div>';
 if(kind==="molarity") return '<div class="viz molarity-viz"><div class="beaker"><div class="solution" id="molSolution"></div><div class="particles" id="molParticles"></div></div><div class="dual-control"><label>Solute<input type="range" min="1" max="16" value="6" data-viz-control="solute"></label><label>Volume<input type="range" min="40" max="100" value="80" data-viz-control="volume"></label></div><div class="viz-caption" id="molCaption">More solute or less solution volume means higher concentration.</div></div>';
 if(kind==="gas") return '<div class="viz gas-viz"><div class="piston"><div class="piston-head" id="pistonHead"></div><div class="gas-space" id="gasSpace">'+Array.from({length:14},(_,i)=>'<i style="--x:'+((i*37)%90+5)+'%;--y:'+((i*53)%80+10)+'%"></i>').join("")+'</div></div><input type="range" min="25" max="85" value="70" data-viz-control="gas"><div class="viz-caption" id="gasCaption">Compress the gas and pressure rises.</div></div>';
 if(kind==="heat") return '<div class="viz heat-viz"><div class="thermal hot" id="hotBody">HOT <b id="hotTemp">80°C</b></div><div class="heat-arrow">→</div><div class="thermal cold" id="coldBody">COLD <b id="coldTemp">20°C</b></div><input type="range" min="0" max="100" value="0" data-viz-control="heat"><div class="viz-caption" id="heatCaption">Move the slider to let the two objects exchange heat.</div></div>';
 if(kind==="equilibrium") return '<div class="viz equilibrium-viz"><div class="eq-box"><b>Reactants</b><strong id="eqReact">80</strong></div><div class="eq-arrows"><span>→</span><span>←</span></div><div class="eq-box"><b>Products</b><strong id="eqProd">20</strong></div><input type="range" min="0" max="100" value="20" data-viz-control="equilibrium"><div class="viz-caption" id="eqCaption">Shift composition and observe that equilibrium is about equal rates, not equal amounts.</div></div>';
 if(kind==="ph") return '<div class="viz ph-viz"><div class="ph-scale">'+Array.from({length:15},(_,i)=>'<span>'+i+'</span>').join("")+'</div><input type="range" min="0" max="14" value="7" data-viz-control="ph"><div class="viz-caption" id="phCaption">pH 7 → [H⁺] ≈ 1 × 10⁻⁷ M</div></div>';
 if(kind==="kinetics") return '<div class="viz kinetics-viz"><svg viewBox="0 0 520 190"><path id="uncatPath" d="M10 155 C110 150 130 25 230 25 S340 145 510 110" fill="none" stroke="currentColor" stroke-width="4"/><path id="catPath" d="M10 155 C120 150 145 80 230 80 S350 145 510 110" fill="none" stroke="currentColor" stroke-width="4" opacity=".35"/></svg><label class="viz-slider-label">Catalyst effect <input type="range" min="0" max="100" value="0" data-viz-control="kinetics"></label><div class="viz-caption" id="kineticsCaption">Move the slider to lower activation energy. Reactant/product energies stay fixed.</div></div>';
 if(kind==="phase") return '<div class="viz phase-viz"><svg viewBox="0 0 520 200"><path d="M20 175 L120 105 L225 105 L325 45 L455 45 L505 15" fill="none" stroke="currentColor" stroke-width="5"/><circle id="phaseDot" cx="20" cy="175" r="8" fill="currentColor"/></svg><input type="range" min="0" max="100" value="0" data-viz-control="phase"><div class="viz-caption" id="phaseCaption">Add heat and follow the sample through warming, melting, boiling, and gas heating.</div></div>';
 return '<div class="viz"><div class="viz-caption">Concept model</div></div>'
}
function memoryStrip(){
 const cards=(E.phase1&&E.phase1.memoryCards)||[];
 return '<section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Memory deck</div><h2>Recall it under pressure.</h2></div><p>Short cues should trigger the full concept, not replace it.</p></div><div class="memory-deck">'+cards.map(m=>'<article><strong>'+m[0]+'</strong><span>'+m[1]+'</span></article>').join("")+'</div></section>'
}
function guidedBlock(id,prompt,answer,reason){
 return '<article class="short-q coached"><h4>'+prompt+'</h4><div class="coach-strip"><button class="hint-btn" data-hint="1">Hint 1</button><button class="hint-btn" data-hint="2">Hint 2</button><button class="hint-btn" data-hint="3">Hint 3</button></div><div class="hint-panel" data-hint-panel="1">What is the target quantity or idea? Write it first.</div><div class="hint-panel" data-hint-panel="2">Which definition, relationship, particle model, or conversion connects the given information to the target?</div><div class="hint-panel" data-hint-panel="3">Build the setup before calculating. Track units and estimate a reasonable result.</div><div class="answer-row"><input class="student-answer" data-save="'+id+'" placeholder="Type your answer"><button class="mini-btn save-answer" data-key="'+id+'">Save</button><button class="mini-btn reveal-reasoning">Check reasoning</button></div><div class="reasoning-panel"><strong>Expected answer:</strong> '+answer+'<br><span>'+reason+'</span></div></article>'
}

function studyGuide(){
 return header("Study Guide")+'<main><section class="shell innerhero">'+chemCrumbs("Study Guide")+'<div class="eyebrow"><span class="signal"></span>Preparation & memory</div><h1>Study Guide</h1><p class="lead">Review sequence, formulas, traps, memorization cues, and high-value habits before practice.</p></section>'+
 '<section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Four-pass prep</div><h2>Prepare in the right order.</h2></div></div><div class="prep-grid">'+(E.prepPlan||[]).map((p,i)=>'<article class="prep-card"><span>0'+(i+1)+'</span><h3>'+p.title+'</h3><p>'+p.text+'</p></article>').join("")+'</div></section>'+
 '<section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Formula vault</div><h2>Relationships worth instant recall.</h2></div><p>Memorize the relationship and the unit trap most likely to cause the mistake.</p></div><div class="formula-grid">'+(E.formulas||[]).map(f=>'<article class="formula-card"><div class="micro">'+f.name+'</div><code>'+f.formula+'</code><strong>'+f.rearrange+'</strong><p><b>Memory cue:</b> '+f.cue+'</p><p class="trap"><b>Trap:</b> '+f.trap+'</p></article>').join("")+'</div></section>'+
 '<section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Memory techniques</div><h2>Short cues that survive test pressure.</h2></div></div><div class="memory-grid">'+(E.memory||[]).map(m=>'<article class="memory-card"><h3>'+m.title+'</h3><p>'+m.trick+'</p></article>').join("")+'</div></section>'+
 '<section class="shell section"><div class="actions study-actions"><a class="btn primary" href="#/grade-10/chemistry-honors/formula-vault">Open Formula Vault</a><a class="btn" href="#/grade-10/chemistry-honors/visual-lab">Open Visual Lab</a></div></section>'+memoryStrip()+'<section class="shell section"><div class="habit-panel"><div><div class="eyebrow">High-value habits</div><h2>What strong solutions visibly show.</h2></div><ul>'+(E.habits||[]).map(h=>'<li>'+h+'</li>').join("")+'</ul></div></section></main>'+footer()
}
function topic(id){
 const t=D.topics.find(x=>x.id===id);if(!t)return notfound();
 return header("Chemistry")+'<main><section class="shell innerhero">'+chemCrumbs(t.name)+'<div class="eyebrow"><span class="signal"></span>Chemistry Topic</div><h1>'+t.name+'</h1><p class="lead">'+t.description+'</p></section>'+
 '<section class="shell section"><div class="sectionhead"><div><div class="eyebrow">Modules</div><h2>'+t.modules.length+' focused modules.</h2></div><p>Read the model, answer in your own words, then reveal the reasoning.</p></div><div class="module-list">'+t.modules.map((m,i)=>'<article class="module-row"><div class="module-head" data-module><div class="module-num">'+String(i+1).padStart(2,"0")+'</div><div class="module-title"><strong>'+m.name+'</strong><small>'+m.summary+'</small></div><span class="module-type">'+m.type+'</span></div><div class="module-body"><div class="learnbox"><div class="note"><label>LEARN</label>'+m.learn+'</div><div class="note"><label>WORKED MODEL</label>'+m.example+'</div></div><div class="practice"><div class="micro">Targeted practice</div>'+m.practice.map((p,j)=>guidedBlock(m.id+"-"+j,p[0],p[1],"Compare your method, units, and final result.")).join("")+'</div></div></article>').join("")+'</div></section></main>'+footer()
}
function shortAnswer(id,prompt,answer,reason){
 return '<article class="short-q"><h4>'+prompt+'</h4><div class="answer-row"><input class="student-answer" data-save="'+id+'" placeholder="Type your answer"><button class="mini-btn save-answer" data-key="'+id+'">Save</button><button class="mini-btn reveal-reasoning">Check reasoning</button></div><div class="reasoning-panel"><strong>Expected answer:</strong> '+answer+'<br><span>'+reason+'</span></div></article>'
}
function practiceTests(){
 const tests=E.practiceTests||{},first=Object.keys(tests)[0]||"A";
 return header("Practice Tests")+'<main><section class="shell innerhero">'+chemCrumbs("Practice Tests")+'<div class="eyebrow"><span class="signal"></span>Interactive practice</div><h1>Practice Tests</h1><p class="lead">Start foundational, move to applied, then Honors. Every question includes a reasoning check after you attempt it.</p></section><section class="shell section"><div class="test-tabs">'+Object.entries(tests).map(([k,t],i)=>'<button class="test-tab '+(i===0?"active":"")+'" data-test="'+k+'"><strong>'+t.title+'</strong><span>'+t.subtitle+'</span></button>').join("")+'</div><div id="testMount" data-current="'+first+'"></div></section></main>'+footer()
}
function renderTest(key){
 const t=E.practiceTests[key],mount=$("#testMount");if(!t||!mount)return;
 mount.innerHTML='<div class="test-head"><div><div class="micro">'+t.title+'</div><h2>'+t.subtitle+'</h2></div><div class="test-score" id="testScore">Not graded</div></div>'+
 t.questions.map((q,i)=>'<article class="mcq" data-q="'+i+'"><div class="qtop"><span class="cat">Question '+(i+1)+'</span><button class="scratch-toggle" data-scratch="mcq-'+key+'-'+i+'">Scratchpad</button></div><h3>'+q.q+'</h3><div class="choices">'+q.options.map((o,j)=>'<label><input type="radio" name="'+key+'-'+i+'" value="'+j+'"><span>'+o+'</span></label>').join("")+'</div><div class="inline-scratch" id="scratch-mcq-'+key+'-'+i+'"><textarea data-note="mcq-'+key+'-'+i+'" placeholder="Show setup, unit chain, or reasoning here...">'+esc(store.get("note:mcq-"+key+"-"+i))+'</textarea></div><div class="mcq-actions"><button class="mini-btn check-one" data-test="'+key+'" data-index="'+i+'">Check answer</button><button class="mini-btn reveal-reasoning">Check reasoning</button></div><div class="reasoning-panel">'+q.why+'</div></article>').join("")+
 '<div class="gradebar"><button class="btn primary" id="gradeTest">Grade entire test</button><button class="btn" id="resetTest">Reset</button></div>';
 bindTest(key)
}
function bindTest(key){
 $$(".check-one").forEach(b=>b.onclick=()=>checkOne(key,+b.dataset.index));
 $("#gradeTest")?.addEventListener("click",()=>gradeTest(key));$("#resetTest")?.addEventListener("click",()=>renderTest(key));bindDynamic()
}
function checkOne(key,i){
 const card=$('.mcq[data-q="'+i+'"]'),sel=$('input:checked',card),q=E.practiceTests[key].questions[i];
 card.classList.remove("correct","incorrect","needs-answer");if(!sel){card.classList.add("needs-answer");return}card.classList.add(+sel.value===q.answer?"correct":"incorrect")
}
function gradeTest(key){
 let n=0,answered=0,qs=E.practiceTests[key].questions;
 qs.forEach((q,i)=>{const card=$('.mcq[data-q="'+i+'"]'),sel=$('input:checked',card);card.classList.remove("correct","incorrect","needs-answer");if(sel){answered++;if(+sel.value===q.answer){n++;card.classList.add("correct")}else card.classList.add("incorrect")}else card.classList.add("needs-answer")});
 $("#testScore").textContent=n+" / "+qs.length+" · "+answered+" answered"
}
function fusionLab(){
 const qs=E.fusionChallenges||[];
 const groups=["Bridge","Applied","Honors","Challenge"];
 const titles={Bridge:"Two concepts, one path",Applied:"Three-step applications",Honors:"Multi-skill Honors reasoning",Challenge:"No obvious starting point"};
 return header("Fusion Lab")+'<main><section class="shell innerhero">'+chemCrumbs("Fusion Lab")+'<div class="eyebrow"><span class="signal"></span>Cross-topic reasoning</div><h1>Fusion Lab</h1><p class="lead">Real Honors questions rarely announce the chapter. These problems deliberately combine topics so the student must decide which ideas belong together before solving.</p></section>'+
 '<section class="shell section"><div class="fusion-map"><div><div class="eyebrow">How it works</div><h2>Recognize the hidden chain.</h2><p>Each challenge combines two to four concepts. Use the scratchpad to identify the concepts first, then build the path. Check reasoning only after committing to a solution.</p></div><div class="fusion-path"><span>Recognize</span><b>→</b><span>Connect</span><b>→</b><span>Model</span><b>→</b><span>Solve</span><b>→</b><span>Defend</span></div></div></section>'+
 '<section class="shell section">'+groups.map(g=>{const set=qs.filter(q=>q.level===g);return '<div class="fusion-group"><div class="sectionhead"><div><div class="eyebrow">'+g+'</div><h2>'+titles[g]+'</h2></div><p>'+set.length+' distinct cross-topic problems</p></div><div class="question-list">'+set.map((q,i)=>workbench("fusion-"+g+"-"+i,q.prompt,q.answer,q.reasoning,q.title)).join("")+'</div></div>'}).join("")+'</section></main>'+footer()
}

function challengeLab(){
 return header("Challenge Lab")+'<main><section class="shell innerhero">'+chemCrumbs("Challenge Lab")+'<div class="eyebrow"><span class="signal"></span>Adaptive difficulty</div><h1>Challenge Lab</h1><p class="lead">Choose a level, write the setup, save your answer, then inspect the reasoning. Problems change structure rather than only changing numbers.</p></section><section class="shell section"><div class="level-tabs">'+[1,2,3,4].map((l,i)=>'<button class="level-tab '+(i===0?"active":"")+'" data-level="'+l+'"><b>Level '+l+'</b><span>'+["Foundation","Applied","Honors","Challenge"][l-1]+'</span></button>').join("")+'</div><div id="challengeMount"></div></section></main>'+footer()
}
function renderChallenge(level=1){
 const mount=$("#challengeMount"),qs=(E.challengeBank||[]).filter(q=>q.level===+level);if(!mount)return;
 mount.innerHTML='<div class="challenge-intro"><div><div class="micro">Level '+level+'</div><h2>'+["Foundation","Applied","Honors","Challenge"][level-1]+'</h2></div><span>'+qs.length+' distinct problems</span></div>'+qs.map((q,i)=>workbench("challenge-"+level+"-"+i,q.prompt,q.answer,q.reasoning,q.tag)).join("");bindDynamic()
}
function workbench(id,prompt,answer,reason,tag){
 return '<article class="workbench"><div class="qtop"><span class="cat">'+tag+'</span><span>Work it out before checking</span></div><h3>'+prompt+'</h3><textarea class="workpad" data-note="'+id+'" placeholder="Show GIVEN, FIND, factor chain / equation, units, and final answer...">'+esc(store.get("note:"+id))+'</textarea><div class="submit-row"><input class="final-entry" data-final="'+id+'" value="'+esc(store.get("final:"+id))+'" placeholder="Final answer"><button class="mini-btn save-work" data-key="'+id+'">Save answer</button><button class="mini-btn reveal-reasoning">Check reasoning</button></div><div class="reasoning-panel"><strong>Expected result:</strong> '+answer+'<br><span>'+reason+'</span></div></article>'
}
function reason(cat){
 const m={"Significant Figures":"Identify which zeros count, then apply the operation-specific precision rule.","Measurement":"Separate numerical equality from measurement precision.","Dimensional Analysis":"Write GIVEN and target unit. Arrange factors so unwanted units cancel visibly.","Matter":"Ask whether chemical identity changed. New substances support chemical change.","Mixtures":"Choose separation steps based on physical properties such as magnetism, particle size, solubility, and boiling point.","Density":"Find volume, reconcile units, apply D=m/V, then check plausibility.","Density Error":"Identify which measurement is biased, then use D=m/V to predict direction.","Density Layers":"Compare densities. The solid sinks through less-dense layers and floats on a denser one.","Reverse Density":"Rearrange D=m/V first, then convert units and perform the final physical step.","Geometry + Density":"Convert all dimensions to one unit, compute volume, convert mass, then divide.","Displacement":"Object volume is final reading minus initial reading.","Reverse Displacement":"Use V=m/D, convert it, then add to the initial liquid level.","Isotopes":"Atomic number fixes proton count; neutrons are mass number minus protons.","Weighted Average":"Percent to decimal, multiply mass × abundance, then add.","Data Validation":"Verify abundances total 100% before calculating.","Missing Abundance":"Use x and 1−x in the weighted-average equation.","Missing Mass":"Find missing abundance first, then isolate unknown isotope mass.","EM Radiation":"Wavelength and frequency are inverse; frequency and energy move together.","EM Calculation":"Convert wavelength to meters, rearrange c=λν, and track powers of ten.","Error Analysis":"Explain how the procedural choice changes the numerical result.","Experimental Design":"Name equipment, measurements, calculation, and one source of error.","Reasonableness":"Use units, magnitude, and physical behavior to decide whether the result is plausible.","Synthesis":"GIVEN → FIND → PATH → UNITS → SOLVE → SIG FIGS → CHECK."};return m[cat]||"State the governing concept, show the setup, track units, and justify the result."
}
function openEnded(){
 return header("Open Ended")+'<main><section class="shell innerhero">'+chemCrumbs("Open-Ended Practice")+'<div class="eyebrow"><span class="signal"></span>Constructed Response</div><h1>Open-Ended<br>Practice</h1><p class="lead">Write a complete solution in the built-in scratch area. Work is saved locally. Check reasoning only after committing to an approach.</p></section><section class="shell section"><div class="question-list">'+D.openQuestions.map((q,i)=>workbench("open-"+i,q[1],"Self-check against the reasoning guide.",reason(q[0]),q[0])).join("")+'</div></section></main>'+footer()
}
let examSeconds=4500,examTimer=null;
function mockExam(){
 return header("Mock Exam")+'<main><section class="shell innerhero">'+chemCrumbs("Mixed Mock Exam")+'<div class="eyebrow"><span class="signal"></span>Exam Simulation</div><h1>Mixed Mock<br>Exam</h1><p class="lead">75-minute target. Decide the method yourself. Use the timer and write every setup.</p><div class="timerbar"><div><span class="micro">Timer</span><strong id="timerDisplay">75:00</strong></div><button class="mini-btn" id="startTimer">Start / Pause</button><button class="mini-btn" id="resetTimer">Reset</button></div></section><section class="shell section"><div class="question-list">'+D.mockQuestions.map((q,i)=>workbench("exam-"+i,q[1],"Use the reasoning guide to verify your method.",reason(q[0]),"Question "+(i+1))).join("")+'</div></section></main>'+footer()
}
function utilityDock(){
 return '<button class="floating-tools" id="floatingTools">Calculator + Notes</button><aside class="tool-drawer" id="toolDrawer"><div class="tool-head"><strong>Study Tools</strong><button id="closeTools" aria-label="Close tools">×</button></div><div class="tool-tabs"><button class="active" data-tooltab="calc">Calculator</button><button data-tooltab="notes">Scratch notes</button></div><div class="tool-pane active" data-pane="calc"><div class="calc-display"><input id="calcInput" inputmode="decimal" placeholder="e.g. (3e8)/(6e14)"><output id="calcOutput">Ready</output></div><div class="calc-grid">'+["7","8","9","/","sqrt(","4","5","6","*","^","1","2","3","-","(","0",".","pi","+ ",")","sin(","cos(","tan(","log(","ln("].map(x=>'<button data-calc="'+x+'">'+x+'</button>').join("")+'</div><div class="calc-actions"><button class="mini-btn" id="calcEquals">Calculate</button><button class="mini-btn" id="calcClear">Clear</button></div><p class="tool-note">sin, cos and tan use degrees. Scientific notation such as 3e8 is supported.</p></div><div class="tool-pane" data-pane="notes"><textarea id="globalNotes" placeholder="Keep formulas, reminders, or rough work here...">'+esc(store.get("globalNotes"))+'</textarea><div class="calc-actions"><button class="mini-btn" id="saveGlobalNotes">Save notes</button><button class="mini-btn" id="clearGlobalNotes">Clear</button></div></div></aside>'
}
function palette(){
 const links=[["10","Grade 10","#/grade-10"],["CH","Chemistry Honors","#/grade-10/chemistry-honors"],["SG","Study Guide","#/grade-10/chemistry-honors/study-guide"],["VL","Visual Lab","#/grade-10/chemistry-honors/visual-lab"],["FV","Formula Vault","#/grade-10/chemistry-honors/formula-vault"],["PT","Practice Tests","#/grade-10/chemistry-honors/practice-tests"],["CL","Challenge Lab","#/grade-10/chemistry-honors/challenge-lab"],["FX","Fusion Lab","#/grade-10/chemistry-honors/fusion-lab"],["MM","Measurement & Matter","#/grade-10/chemistry-honors/topic/measurement-matter"],["DE","Density","#/grade-10/chemistry-honors/topic/density"],["IS","Atomic Structure & Isotopes","#/grade-10/chemistry-honors/topic/isotopes"],["EM","Electromagnetic Radiation","#/grade-10/chemistry-honors/topic/em-radiation"],["OE","Open-Ended Practice","#/grade-10/chemistry-honors/open-ended"],["EX","Mixed Mock Exam","#/grade-10/chemistry-honors/mock-exam"]];
 return '<div class="palettebg" id="palette"><div class="palette"><div class="palinput"><span>⌕</span><input id="palInput" placeholder="Jump to grade, topic, practice, or assessment..."><kbd>ESC</kbd></div><div class="palresults">'+links.map(x=>'<a href="'+x[2]+'"><span class="ico">'+x[0]+'</span><div><strong>'+x[1]+'</strong><small>Open</small></div><b>↗</b></a>').join("")+'</div></div></div>'
}
function notfound(){return header()+'<main class="shell innerhero"><h1>Not found</h1><a class="btn" href="#/">Return home</a></main>'+footer()}
function bindDynamic(){
 $$(".hint-btn").forEach(b=>b.onclick=()=>{const card=b.closest(".short-q");const p=card?.querySelector('[data-hint-panel="'+b.dataset.hint+'"]');if(p)p.classList.toggle("show")});
 $("#formulaSearch")?.addEventListener("input",e=>{const q=e.target.value.toLowerCase().trim();$$(".vault-card").forEach(c=>c.hidden=q&&!c.dataset.search.includes(q))});

 $$(".reveal-reasoning").forEach(b=>b.onclick=()=>b.closest(".short-q,.mcq,.workbench")?.querySelector(".reasoning-panel")?.classList.toggle("show"));
 $$(".scratch-toggle").forEach(b=>b.onclick=()=>$("#scratch-"+b.dataset.scratch)?.classList.toggle("show"));
 $$("[data-note]").forEach(t=>t.addEventListener("input",()=>store.set("note:"+t.dataset.note,t.value)));
 $$(".save-answer").forEach(b=>b.onclick=()=>{const input=$('[data-save="'+b.dataset.key+'"]');if(input){store.set("answer:"+b.dataset.key,input.value);b.textContent="Saved"}});
 $$("[data-save]").forEach(i=>i.value=store.get("answer:"+i.dataset.save,i.value||""));
 $$(".save-work").forEach(b=>b.onclick=()=>{const input=$('[data-final="'+b.dataset.key+'"]');if(input){store.set("final:"+b.dataset.key,input.value);b.textContent="Saved"}});
}

function bindVisualLab(){
 const density=$('[data-viz-control="density"]');if(density){const update=()=>{const v=+density.value;$("#densityVol").textContent=v+" cm³";$("#densityOut").textContent=(100/v).toFixed(2)+" g/cm³";$("#densityBlock").style.transform="scaleX("+Math.max(.48,1.25-v/160)+")"};density.addEventListener("input",update);update()}
 $$('[data-animate="displacement"]').forEach(b=>b.addEventListener("click",()=>{const v=b.closest(".displacement-viz");v?.classList.toggle("active");b.textContent=v?.classList.contains("active")?"Reset object":"Drop object"}));
 $$('[data-animate="sigfig"]').forEach(b=>b.addEventListener("click",()=>{const n=$("#sigNumber");n?.classList.add("scanning");$("#sigCaption").textContent="Leading zeros are placeholders. The digits 4, 5, 6, 0, 0 are significant.";setTimeout(()=>n?.classList.remove("scanning"),1600)}));
 $$('[data-reset-viz="sigfig"]').forEach(b=>b.addEventListener("click",()=>{$("#sigNumber")?.classList.remove("scanning");$("#sigCaption").textContent="Press Scan digits to see which digits count."}));
 const iso=$('[data-viz-control="isotope"]');if(iso){const update=()=>{const p=+iso.value;$("#isoPct").textContent=p+"%";$("#isoAvg").textContent=(35*(1-p/100)+37*(p/100)).toFixed(2)+" amu";$("#isoNeedle").style.left=p+"%"};iso.addEventListener("input",update);update()}
 const wave=$('[data-viz-control="wave"]');if(wave){const draw=()=>{const n=+wave.value;let d="M0 65";for(let x=0;x<=520;x+=4){const y=65+38*Math.sin((x/520)*Math.PI*2*n);d+=" L"+x+" "+y}$("#wavePath").setAttribute("d",d);$("#waveCaption").textContent="Relative frequency "+n+"×. More cycles in the same distance means shorter wavelength."};wave.addEventListener("input",draw);draw()}
 const solute=$('[data-viz-control="solute"]'),vol=$('[data-viz-control="volume"]');if(solute&&vol){const update=()=>{const n=+solute.value,v=+vol.value;$("#molSolution").style.height=v+"%";$("#molParticles").innerHTML=Array.from({length:n},(_,i)=>'<i style="--x:'+((i*41)%78+10)+'%;--y:'+((i*29)%Math.max(30,v-10)+8)+'%"></i>').join("");$("#molCaption").textContent="Relative concentration: "+(n/v*10).toFixed(2)+" units"};solute.addEventListener("input",update);vol.addEventListener("input",update);update()}
 const gas=$('[data-viz-control="gas"]');if(gas){const update=()=>{const h=+gas.value;$("#gasSpace").style.height=h+"%";$("#gasCaption").textContent=h<45?"Smaller volume → more frequent wall collisions → higher pressure.":"Larger volume → fewer wall collisions per area → lower pressure."};gas.addEventListener("input",update);update()}
 const heat=$('[data-viz-control="heat"]');if(heat){const update=()=>{const x=+heat.value/100,hot=80-30*x,cold=20+30*x;$("#hotTemp").textContent=hot.toFixed(0)+"°C";$("#coldTemp").textContent=cold.toFixed(0)+"°C";$("#hotBody").style.opacity=String(1-.25*x);$("#coldBody").style.opacity=String(.75+.25*x);$("#heatCaption").textContent=x<.98?"Heat flows from hotter to colder matter until thermal equilibrium is approached.":"Temperatures have converged: thermal equilibrium."};heat.addEventListener("input",update);update()}
 const eq=$('[data-viz-control="equilibrium"]');if(eq){const update=()=>{const p=+eq.value;$("#eqProd").textContent=p;$("#eqReact").textContent=100-p;$("#eqCaption").textContent="Composition: "+(100-p)+" reactant / "+p+" product. Equal forward and reverse rates do not require 50/50 amounts."};eq.addEventListener("input",update);update()}
 const ph=$('[data-viz-control="ph"]');if(ph){const update=()=>{const v=+ph.value;$("#phCaption").textContent="pH "+v+" → [H⁺] ≈ 1 × 10⁻"+v+" M. One pH unit changes [H⁺] by 10×."};ph.addEventListener("input",update);update()}
 const kin=$('[data-viz-control="kinetics"]');if(kin){const update=()=>{const x=+kin.value/100;const peak=25+75*x;$("#catPath").setAttribute("d","M10 155 C120 150 145 "+peak+" 230 "+peak+" S350 145 510 110");$("#catPath").style.opacity=String(.35+.65*x);$("#kineticsCaption").textContent=x<.1?"No catalyst effect shown yet.":"Catalyzed path has a lower activation barrier; ΔG and endpoints remain unchanged."};kin.addEventListener("input",update);update()}
 const phase=$('[data-viz-control="phase"]');if(phase){const pts=[[20,175],[120,105],[225,105],[325,45],[455,45],[505,15]];const segs=[18,22,20,22,18];const update=()=>{let p=+phase.value,acc=0,idx=0;for(let i=0;i<segs.length;i++){if(p<=acc+segs[i]){idx=i;break}acc+=segs[i];idx=i}const t=Math.min(1,(p-acc)/segs[idx]),a=pts[idx],b=pts[idx+1];$("#phaseDot").setAttribute("cx",a[0]+(b[0]-a[0])*t);$("#phaseDot").setAttribute("cy",a[1]+(b[1]-a[1])*t);const labels=["warming solid","melting plateau","warming liquid","boiling plateau","warming gas"];$("#phaseCaption").textContent="Current region: "+labels[idx]+". "+((idx===1||idx===3)?"Energy changes phase while temperature stays nearly constant.":"Added energy raises temperature.")};phase.addEventListener("input",update);update()}
}
function calcEvaluate(raw){
 let x=raw.trim().replace(/\^/g,"**").replace(/\bpi\b/gi,"Math.PI").replace(/sqrt\(/g,"Math.sqrt(").replace(/log\(/g,"Math.log10(").replace(/ln\(/g,"Math.log(");
 x=x.replace(/sin\(([^()]*)\)/g,"Math.sin(($1)*Math.PI/180)").replace(/cos\(([^()]*)\)/g,"Math.cos(($1)*Math.PI/180)").replace(/tan\(([^()]*)\)/g,"Math.tan(($1)*Math.PI/180)");
 if(!/^[0-9eE+\-*/().,\sMathPIqrtloginacos]+$/.test(x))throw Error("Unsupported expression");
 return Function('"use strict";return ('+x+')')()
}
function bindTools(){
 $("#floatingTools")?.addEventListener("click",()=>$("#toolDrawer")?.classList.add("open"));$("#toolBtn")?.addEventListener("click",()=>$("#toolDrawer")?.classList.add("open"));$("#closeTools")?.addEventListener("click",()=>$("#toolDrawer")?.classList.remove("open"));
 $$("[data-tooltab]").forEach(b=>b.onclick=()=>{$$("[data-tooltab]").forEach(x=>x.classList.toggle("active",x===b));$$("[data-pane]").forEach(p=>p.classList.toggle("active",p.dataset.pane===b.dataset.tooltab))});
 $$("[data-calc]").forEach(b=>b.onclick=()=>{const i=$("#calcInput");if(i)i.value+=b.dataset.calc});
 $("#calcClear")?.addEventListener("click",()=>{$("#calcInput").value="";$("#calcOutput").textContent="Ready"});
 $("#calcEquals")?.addEventListener("click",()=>{try{$("#calcOutput").textContent=String(calcEvaluate($("#calcInput").value))}catch{$("#calcOutput").textContent="Check expression"}});
 $("#saveGlobalNotes")?.addEventListener("click",()=>store.set("globalNotes",$("#globalNotes").value));$("#clearGlobalNotes")?.addEventListener("click",()=>{$("#globalNotes").value="";store.set("globalNotes","")});
}
function bindTimer(){
 const display=()=>{const m=Math.floor(examSeconds/60),s=examSeconds%60;if($("#timerDisplay"))$("#timerDisplay").textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")};
 $("#startTimer")?.addEventListener("click",()=>{if(examTimer){clearInterval(examTimer);examTimer=null}else examTimer=setInterval(()=>{if(examSeconds>0){examSeconds--;display()}else{clearInterval(examTimer);examTimer=null}},1000)});
 $("#resetTimer")?.addEventListener("click",()=>{if(examTimer){clearInterval(examTimer);examTimer=null}examSeconds=4500;display()});display()
}
function bind(){
 $("#cmdBtn")?.addEventListener("click",()=>$("#palette")?.classList.add("open"));
 $$("[data-module]").forEach(h=>h.onclick=()=>h.closest(".module-row").classList.toggle("open"));
 $("#palette")?.addEventListener("click",e=>{if(e.target.id==="palette")e.currentTarget.classList.remove("open")});
 $$(".test-tab").forEach(b=>b.onclick=()=>{$$(".test-tab").forEach(x=>x.classList.toggle("active",x===b));renderTest(b.dataset.test)});
 $$(".level-tab").forEach(b=>b.onclick=()=>{$$(".level-tab").forEach(x=>x.classList.toggle("active",x===b));renderChallenge(+b.dataset.level)});
 bindDynamic();bindTools();bindTimer();bindVisualLab();enhanceScrollExperience()
}

function enhanceScrollExperience(){
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.scroll-progress').forEach(x=>x.remove());
  const bar=document.createElement('div');bar.className='scroll-progress';bar.id='scrollProgress';document.body.appendChild(bar);

  const revealTargets=$$('main > section, .topic-card, .assessment-card, .prep-card, .formula-card, .memory-card, .module-row, .question, .workbench, .mcq, .resource-links a');
  revealTargets.forEach((el,i)=>{el.classList.add('scroll-reveal');el.style.setProperty('--reveal-delay',Math.min((i%6)*55,275)+'ms')});

  if(!reduce && 'IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target)}
    }),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    revealTargets.forEach(el=>io.observe(el));
  }else revealTargets.forEach(el=>el.classList.add('in-view'));

  const topbar=$('.topbar'), hero=$('.hero-art');
  let ticking=false;
  const update=()=>{
    const y=window.scrollY||0;
    const max=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);
    bar.style.transform='scaleX('+Math.min(y/max,1)+')';
    if(topbar) topbar.classList.toggle('scrolled',y>18);
    if(hero && !reduce){
      const rect=hero.getBoundingClientRect();
      const center=rect.top+rect.height/2-window.innerHeight/2;
      const drift=Math.max(-18,Math.min(18,-center*.035));
      hero.style.setProperty('--scroll-drift',drift+'px');
    }
    ticking=false;
  };
  const onScroll=()=>{if(!ticking){requestAnimationFrame(update);ticking=true}};
  if(window.__atlasScrollHandler)window.removeEventListener('scroll',window.__atlasScrollHandler);
  window.__atlasScrollHandler=onScroll;
  window.addEventListener('scroll',onScroll,{passive:true});update();

  $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(!href || href.startsWith('#/')) return;
    const target=document.querySelector(href);
    if(target){e.preventDefault();target.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}
  }));
}

function render(){
 const p=location.hash.replace(/^#/,"")||"/";let html;
 if(p==="/")html=home();else if(p==="/grade-10")html=grade();else if(p==="/grade-10/chemistry-honors")html=chemistry();else if(p==="/grade-10/chemistry-honors/study-guide")html=studyGuide();else if(p==="/grade-10/chemistry-honors/visual-lab")html=visualLab();else if(p==="/grade-10/chemistry-honors/formula-vault")html=formulaVault();else if(p==="/grade-10/chemistry-honors/practice-tests")html=practiceTests();else if(p==="/grade-10/chemistry-honors/challenge-lab")html=challengeLab();else if(p==="/grade-10/chemistry-honors/fusion-lab")html=fusionLab();else if(p.startsWith("/grade-10/chemistry-honors/topic/"))html=topic(p.split("/").pop());else if(p==="/grade-10/chemistry-honors/open-ended")html=openEnded();else if(p==="/grade-10/chemistry-honors/mock-exam")html=mockExam();else html=notfound();
 $("#app").innerHTML=html+palette()+utilityDock();bind();if(p.endsWith("/practice-tests"))renderTest($("#testMount")?.dataset.current||"A");if(p.endsWith("/challenge-lab"))renderChallenge(1);window.scrollTo({top:0,behavior:"instant"})
}
window.addEventListener("hashchange",render);
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#palette")?.classList.add("open");$("#palInput")?.focus()}if(e.key==="Escape"){$("#palette")?.classList.remove("open");$("#toolDrawer")?.classList.remove("open")}});
render();