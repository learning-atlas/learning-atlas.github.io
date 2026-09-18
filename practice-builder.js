(function(){
const LEVELS=()=>window.LEARNING_ATLAS_LEVELS;
const normalize=s=>String(s||"").trim().toLowerCase();
const shuffle=(arr,seed)=>{
 let x=(seed||Date.now())>>>0;const rnd=()=>{x=(1664525*x+1013904223)>>>0;return x/4294967296};
 const out=[...arr];for(let i=out.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out;
};
function canonicalTopic(subject,raw){
 const t=normalize(raw);
 if(subject==="chemistry"){
  if(/measurement|lab|error|sig/.test(t))return "Measurement & Lab Data";
  if(/density/.test(t))return "Density";
  if(/atomic|isotope|periodic/.test(t))return "Atomic Structure & Periodicity";
  if(/em radiation|photon|wave|radiation/.test(t))return "Electromagnetic Radiation";
  if(/mole|particle/.test(t))return "Mole & Chemical Counting";
  if(/nomenclature|bond|formula|imf/.test(t))return "Nomenclature & Bonding";
  if(/state|phase/.test(t))return "States of Matter";
  if(/solution|molarity|solubility|dilution/.test(t))return "Solutions & Concentration";
  if(/stoich|yield|reaction/.test(t))return "Stoichiometry & Reactions";
  if(/gas/.test(t))return "Gases";
  if(/thermo|heat/.test(t))return "Thermochemistry";
  if(/kinetic|rate/.test(t))return "Kinetics";
  if(/equilibrium/.test(t))return "Equilibrium";
  if(/acid|base|ph/.test(t))return "Acids & Bases";
  if(/redox|electrochem|cell/.test(t))return "Redox & Electrochemistry";
  if(/entropy|free energy/.test(t))return "Entropy & Free Energy";
  if(/nuclear/.test(t))return "Nuclear Chemistry";
  if(/ap experimental/.test(t))return "AP Experimental Reasoning";
  return raw||"Mixed Chemistry";
 }
 if(/function/.test(t))return "Functions";
 if(/system|inequal/.test(t))return "Systems & Inequalities";
 if(/quadratic/.test(t))return "Quadratics";
 if(/complex/.test(t))return "Complex Numbers";
 if(/polynomial|factor|end behavior/.test(t))return "Polynomial Algebra & Graphs";
 if(/radical/.test(t))return "Radicals & Rational Exponents";
 if(/rational/.test(t))return "Rational Functions";
 if(/exponential/.test(t))return "Exponential Functions";
 if(/log/.test(t))return "Logarithms";
 if(/trig|unit circle/.test(t))return "Trigonometry";
 if(/sequence|series/.test(t))return "Sequences & Series";
 if(/conic|analytic geometry|circle/.test(t))return "Analytic Geometry & Conics";
 if(/probability|counting|data|residual/.test(t))return "Probability & Data";
 if(/model|diagnostic|error detective|fusion/.test(t))return "Modeling & Diagnostics";
 if(/ap precalculus/.test(t))return "AP Precalculus";
 return raw||"Mixed Mathematics";
}
const uniqueTopics=(pool:pool.map(q=>({...q,builderTopic:canonicalTopic(subjectKey,q.topic)})),subject)=>[...new Set(pool.map(q=>canonicalTopic(subject,q.topic)).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
const presetsFor=(subject,level)=>{
 const profile=LEVELS()?.getProfile(subject,level),d=profile?.defaults||{count:15,grading:"standard",levels:{simple:25,medium:35,complex:25,fusion:15}};
 return [
  {id:"quick",name:"Quick 10",desc:"10 mixed questions · balanced difficulty",count:10,levels:level==="ap"?{simple:5,medium:25,complex:45,fusion:25}:{simple:35,medium:35,complex:20,fusion:10},grading:d.grading},
  {id:"confidence",name:"Confidence Builder",desc:"15 questions · fluency first",count:15,levels:level==="ap"?{simple:10,medium:45,complex:35,fusion:10}:{simple:60,medium:40,complex:0,fusion:0},grading:level==="ap"?"standard":"lenient"},
  {id:"level",name:(profile?.label||"Course")+" Default",desc:"Uses the selected course-level defaults",count:d.count,levels:d.levels,grading:d.grading},
  {id:"fusion",name:"Fusion Challenge",desc:"12 cross-topic questions",count:12,levels:{simple:0,medium:10,complex:25,fusion:65},grading:level==="cp"?"standard":"strict"}
 ];
};
function subjectAdapter(subjectKey,level){
 const L=LEVELS(),profile=L?.getProfile(subjectKey,level),pool=L?.pool(subjectKey,level)||[];
 return {
  key:subjectKey,
  name:profile?.title||(subjectKey==="math"?"Mathematics":"Chemistry"),
  route:subjectKey==="math"?"mathematics-honors":"chemistry-honors",
  level:profile?.key||level||"honors",
  topics:uniqueTopics(pool,subjectKey),
  pool,
  presets:presetsFor(subjectKey,profile?.key||level||"honors")
 };
}
function allocate(count,levels){
 const order=["simple","medium","complex","fusion"],raw=order.map(k=>({k,v:(levels[k]||0)/100*count}));
 const base=raw.map(x=>({k:x.k,n:Math.floor(x.v),frac:x.v-Math.floor(x.v)}));let used=base.reduce((n,x)=>n+x.n,0);
 base.sort((a,b)=>b.frac-a.frac);for(let i=0;used<count;i++,used++)base[i%base.length].n++;
 return Object.fromEntries(base.map(x=>[x.k,x.n]));
}
function build(subjectKey,config){
 const level=config.courseLevel||LEVELS()?.getLevel(subjectKey)||"honors",s=subjectAdapter(subjectKey,level);if(!s)return null;
 const selected=(config.topics&&config.topics.length?config.topics:s.topics).map(normalize);
 const pool=s.pool.filter(q=>selected.includes(normalize(q.builderTopic||q.topic))||selected.includes("all"));
 const profile=LEVELS()?.getProfile(subjectKey,level),levels=config.levels||profile?.defaults?.levels||{simple:25,medium:35,complex:25,fusion:15};
 const want=allocate(config.count||profile?.defaults?.count||15,levels),chosen=[],used=new Set(),seed=config.seed||Date.now();
 ["simple","medium","complex","fusion"].forEach((difficulty,di)=>{
  const candidates=shuffle(pool.filter(q=>q.difficulty===difficulty),seed+di*997);let need=want[difficulty]||0;
  for(const q of candidates){if(!need)break;if(!used.has(q.id)){chosen.push(q);used.add(q.id);need--}}
 });
 if(chosen.length<(config.count||15)){
  for(const q of shuffle(pool.filter(q=>!used.has(q.id)),seed+8081)){if(chosen.length>=(config.count||15))break;chosen.push(q);used.add(q.id)}
 }
 return {id:"pb-"+subjectKey+"-"+level+"-"+seed,subject:subjectKey,courseLevel:level,grading:config.grading||profile?.defaults?.grading||"standard",feedback:config.feedback||profile?.defaults?.feedback||"end",topics:config.topics&&config.topics.length?config.topics:s.topics,levels,count:chosen.length,requestedCount:config.count||15,createdAt:Date.now(),questions:shuffle(chosen,seed+191)};
}
const policies={
 lenient:{name:"Lenient",desc:"Learning-first. Reattempts carry no penalty.",attempt:[1,1,1],revealPenalty:0},
 standard:{name:"Standard",desc:"Second attempts receive reduced credit.",attempt:[1,.75,.5],revealPenalty:.25},
 strict:{name:"Strict",desc:"Exam-style. First-attempt accuracy and independent reasoning matter.",attempt:[1,.5,0],revealPenalty:.5}
};
function scoreQuestion(session,qState,isCorrect){
 if(!isCorrect)return 0;const p=policies[session.grading]||policies.standard,a=Math.max(1,qState.attempts||1),base=p.attempt[Math.min(a-1,p.attempt.length-1)]||0;
 return Math.max(0,base-(qState.revealed?p.revealPenalty:0));
}
window.LEARNING_ATLAS_PRACTICE={
 version:"2.0",
 contract:{description:"Shared level-aware practice capability. Future subjects register through the course-level engine.",difficulty:["simple","medium","complex","fusion"],grading:["lenient","standard","strict"],courseLevels:["cp","honors","ap"]},
 subjects:{
  get chemistry(){return subjectAdapter("chemistry",LEVELS()?.getLevel("chemistry"))},
  get math(){return subjectAdapter("math",LEVELS()?.getLevel("math"))}
 },
 getSubject:subjectAdapter,policies,build,scoreQuestion
};
})();