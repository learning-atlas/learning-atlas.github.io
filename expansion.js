(function(){
const D=window.LEARNING_ATLAS_DATA, E=window.LEARNING_ATLAS_ENHANCEMENTS;
const extraTopics=[
{
 id:"lab-data",
 name:"Measurement, Uncertainty & Lab Data",
 description:"Precision, accuracy, uncertainty, percent error, graph interpretation, and experimental design.",
 modules:[
  {id:"precision-accuracy",name:"Precision vs Accuracy",type:"Lab Reasoning",summary:"Separate repeatability from closeness to an accepted value.",learn:"Accuracy describes closeness to an accepted value. Precision describes how closely repeated measurements agree with one another.",example:"Trials 10.01, 10.02, 10.01 g are precise. If the accepted value is 12.00 g, they are not accurate.",practice:[["Measurements cluster tightly but far from accepted value. Precise, accurate, both, or neither?","Precise but not accurate"],["What kind of error can shift all trials in the same direction?","Systematic error"],["Why are repeated trials useful?","They reveal spread and help estimate random variation."]]},
  {id:"percent-error",name:"Percent Error & Deviation",type:"Quantitative",summary:"Measure error relative to an accepted reference.",learn:"Percent error = |experimental − accepted| / accepted × 100%. Always compare like units.",example:"Experimental density 7.62 g/cm³ vs accepted 7.87 gives about 3.18% error.",practice:[["Experimental 9.20, accepted 8.96. Percent error?","≈2.68%"],["Does negative raw error make percent error negative?","No, the standard percent-error magnitude uses absolute value."],["Why can a small absolute error still matter?","Relative size depends on the accepted value."]]},
  {id:"graphing-data",name:"Graphs, Trends & Outliers",type:"Data Analysis",summary:"Read slope, intercept, trends, and suspicious data points.",learn:"In a mass-versus-volume graph for one material, slope equals density if mass is on y and volume on x.",example:"If mass rises 39.5 g for every 5.00 mL, slope = 7.90 g/mL.",practice:[["On mass vs volume, what does slope represent?","Density"],["Should one strange point be deleted immediately?","No. Investigate the measurement and procedure first."],["What does a nonzero intercept sometimes suggest?","Possible tare, calibration, or setup bias."]]}
 ]
},
{
 id:"mole-counting",
 name:"The Mole & Chemical Counting",
 description:"Moles, particles, molar mass, formula mass, and conversions between microscopic and macroscopic scales.",
 modules:[
  {id:"mole-concept",name:"The Mole Concept",type:"Conceptual",summary:"Connect amount of substance to particle count.",learn:"One mole contains 6.022 × 10²³ representative particles.",example:"0.500 mol Na atoms contains 3.011 × 10²³ atoms.",practice:[["How many particles are in 2.00 mol?","1.204 × 10²⁴"],["Why use the mole?","It links particle-scale counting to measurable laboratory quantities."],["0.250 mol contains what fraction of Avogadro's number?","One quarter."]]},
  {id:"molar-mass",name:"Molar Mass",type:"Quantitative",summary:"Translate a chemical formula into grams per mole.",learn:"Molar mass is the sum of atomic masses multiplied by subscripts in the formula.",example:"H₂O ≈ 2(1.008)+16.00 = 18.02 g/mol.",practice:[["Approximate molar mass of CO₂?","44.01 g/mol"],["Why does a subscript matter?","It tells how many atoms of that element contribute to one formula unit."],["What unit should molar mass carry?","g/mol"]]},
  {id:"mass-mole-particles",name:"Mass ↔ Moles ↔ Particles",type:"Multi-step",summary:"Move through grams, moles, and representative particles.",learn:"Use molar mass between grams and moles, then Avogadro's number between moles and particles.",example:"36.0 g H₂O ÷18.02 g/mol ×6.022×10²³ ≈1.20×10²⁴ molecules.",practice:[["22.0 g CO₂ is about how many moles?","0.500 mol"],["0.500 mol CO₂ contains about how many molecules?","3.01 × 10²³"],["Why should grams never convert directly to particles without a mole step?","The conversion depends on substance-specific molar mass."]]}
 ]
},
{
 id:"solutions",
 name:"Solutions & Concentration",
 description:"Molarity, dilution, solution preparation, and concentration reasoning.",
 modules:[
  {id:"molarity",name:"Molarity",type:"Quantitative",summary:"Relate moles of solute to liters of solution.",learn:"M = moles solute / liters solution. Volume must be in liters.",example:"0.250 mol in 0.500 L gives 0.500 M.",practice:[["0.150 mol in 300 mL. Molarity?","0.500 M"],["Why convert 300 mL to 0.300 L?","Molarity is defined per liter."],["2.0 M means what?","2.0 mol solute per liter of solution."]]},
  {id:"dilution",name:"Dilution",type:"Quantitative",summary:"Track concentration before and after adding solvent.",learn:"For simple dilution, M₁V₁ = M₂V₂ because moles of solute stay constant.",example:"25.0 mL of 2.00 M diluted to 100.0 mL becomes 0.500 M.",practice:[["10.0 mL of 6.0 M diluted to 120 mL. Final M?","0.50 M"],["What remains unchanged during dilution?","Moles of solute"],["Does adding solvent increase or decrease molarity?","Decrease"]]},
  {id:"solution-prep",name:"Solution Preparation",type:"Lab Design",summary:"Choose glassware, quantities, and order of operations.",learn:"Prepare a target molarity by calculating moles, converting to mass when needed, dissolving, then bringing the total solution volume to the mark.",example:"To make 250 mL of 0.200 M NaCl, calculate 0.0500 mol then convert to grams.",practice:[["Why not measure 250 mL water first, then add solute?","The final solution volume, not solvent volume, defines molarity."],["Best glassware for a precise final volume?","Volumetric flask"],["What must be known to convert required moles to grams?","Molar mass"]]}
 ]
},
{
 id:"stoichiometry",
 name:"Chemical Reactions & Stoichiometry",
 description:"Equation balancing, mole ratios, limiting reactants, theoretical yield, and percent yield.",
 modules:[
  {id:"balancing",name:"Balancing Chemical Equations",type:"Conceptual",summary:"Conserve atoms without changing chemical identities.",learn:"Adjust coefficients, never subscripts. Each element must have equal atom count on both sides.",example:"2H₂ + O₂ → 2H₂O.",practice:[["Why must subscripts stay fixed?","Changing them changes the substances."],["Balance N₂ + H₂ → NH₃.","N₂ + 3H₂ → 2NH₃"],["What law is reflected by balancing?","Conservation of mass"]]},
  {id:"mole-ratios",name:"Mole Ratios",type:"Quantitative",summary:"Use balanced coefficients as conversion factors.",learn:"Coefficients provide exact mole-to-mole relationships between reactants and products.",example:"2 mol H₂ produce 2 mol H₂O, so the H₂:H₂O ratio is 1:1.",practice:[["For N₂+3H₂→2NH₃, 6 mol H₂ can form how many mol NH₃?","4 mol"],["Where do mole ratios come from?","Balanced equation coefficients"],["Can an unbalanced equation be used reliably for stoichiometry?","No"]]},
  {id:"limiting-yield",name:"Limiting Reactant & Yield",type:"Multi-step",summary:"Find what runs out first and how much product can form.",learn:"Convert each reactant to the same product. The smaller product amount identifies the limiting reactant.",example:"If A could make 12 g product and B could make 9 g, B limits the reaction.",practice:[["Which reactant determines theoretical yield?","The limiting reactant"],["Percent yield formula?","actual/theoretical × 100%"],["Can excess reactant remain after reaction?","Yes"]]}
 ]
},
{
 id:"thermochemistry",
 name:"Thermochemistry & Energy",
 description:"Heat transfer, specific heat, endothermic/exothermic processes, and energy accounting.",
 modules:[
  {id:"energy-signs",name:"Endothermic vs Exothermic",type:"Conceptual",summary:"Track energy flow between system and surroundings.",learn:"Endothermic processes absorb heat into the system. Exothermic processes release heat to the surroundings.",example:"If the surroundings warm during a reaction, the reaction is usually exothermic.",practice:[["Melting ice is endothermic or exothermic?","Endothermic"],["If q for the system is negative, heat flowed where?","Out of the system"],["Why can a cold pack feel cold?","The process absorbs heat from its surroundings."]]},
  {id:"specific-heat",name:"Specific Heat",type:"Quantitative",summary:"Use q = mcΔT to connect energy and temperature change.",learn:"q = mcΔT. Keep mass, specific heat, and temperature units compatible.",example:"100 g water ×4.184 J/g°C ×5.0°C ≈2.09 kJ.",practice:[["50.0 g water warms 10.0°C. q?","2.09 kJ"],["If the same heat warms less mass, ΔT becomes?","Larger"],["What does high specific heat mean?","More energy is required per gram per degree change."]]},
  {id:"calorimetry",name:"Calorimetry Reasoning",type:"Lab Reasoning",summary:"Use conservation of energy in heat exchange.",learn:"In an ideal isolated calorimeter, heat lost by one part equals heat gained by another.",example:"q_hot + q_cold = 0.",practice:[["Hot metal cools in water. Which gains heat?","Water"],["Why insulate a calorimeter?","To reduce energy exchange with the surroundings."],["If heat escapes the calorimeter, what assumption fails?","That the measured system is effectively isolated."]]}
 ]
},
{
 id:"gases",
 name:"Gases & Particle Behavior",
 description:"Pressure, temperature, volume, particle motion, and gas-law reasoning.",
 modules:[
  {id:"kinetic-model",name:"Particle Model of Gases",type:"Conceptual",summary:"Explain gas behavior using moving particles and collisions.",learn:"Gas pressure results from particle collisions with container walls. Higher temperature means greater average kinetic energy.",example:"Heating a sealed rigid container raises pressure because faster particles collide more forcefully and frequently.",practice:[["At constant volume, higher temperature usually causes pressure to?","Increase"],["Why are gases compressible?","Particles are widely spaced."],["Temperature in gas-law equations must usually use which scale?","Kelvin"]]},
  {id:"boyle-charles",name:"Boyle & Charles Relationships",type:"Quantitative",summary:"Reason about pressure-volume and volume-temperature changes.",learn:"At constant temperature, P and V are inverse. At constant pressure, V is proportional to absolute temperature.",example:"Halving volume at constant temperature doubles pressure.",practice:[["Volume doubles at constant T. Pressure becomes?","Half"],["Why use Kelvin for volume-temperature proportionality?","It is an absolute temperature scale."],["A balloon warms at constant pressure. Volume trend?","Increase"]]},
  {id:"combined-gas",name:"Combined Gas Problems",type:"Multi-step",summary:"Coordinate changes in pressure, volume, and temperature.",learn:"For a fixed amount of gas, P₁V₁/T₁ = P₂V₂/T₂.",example:"Convert all temperatures to Kelvin before substitution.",practice:[["What quantities must use matching units across states?","Pressure and volume units must be internally consistent; temperature must be Kelvin."],["If T rises and V is fixed, what must P do?","Rise"],["Why is Celsius dangerous in gas-law ratios?","Zero Celsius is not zero thermal energy."]]}
 ]
}
];

const existing=new Set(D.topics.map(t=>t.id));
extraTopics.forEach(t=>{if(!existing.has(t.id))D.topics.push(t)});

E.fusionChallenges=[
{level:"Bridge",title:"Density + Unit Conversion + Sig Figs",prompt:"A mineral sample has mass 0.842 kg. It raises water from 1.250 L to 1.347 L. Find density in g/cm³ and report with correct significant figures.",answer:"8.68 g/cm³",reasoning:"Convert 0.842 kg→842 g. Displaced volume=0.097 L=97 mL=97 cm³. 842/97≈8.68 g/cm³. Precision may be limited by the volume reading convention used in class."},
{level:"Bridge",title:"Mole + Molar Mass + Scientific Notation",prompt:"How many oxygen atoms are present in 8.80 g of CO₂?",answer:"≈2.41 × 10²³ oxygen atoms",reasoning:"8.80 g÷44.01 g/mol≈0.200 mol CO₂. Multiply by 6.022×10²³ molecules/mol, then by 2 O atoms per molecule."},
{level:"Applied",title:"Density + Moles + Particle Count",prompt:"A 12.0 cm³ sample of pure aluminum has density 2.70 g/cm³. Estimate how many Al atoms it contains. Use molar mass 26.98 g/mol.",answer:"≈7.23 × 10²³ atoms",reasoning:"Find mass from density×volume, convert grams to moles, then moles to atoms."},
{level:"Applied",title:"Molarity + Dilution + Dimensional Analysis",prompt:"You need 250.0 mL of 0.150 M NaCl from a 2.00 M stock. What stock volume is required, and how many moles of NaCl are in the final solution?",answer:"18.75 mL stock; 0.0375 mol NaCl",reasoning:"Use M₁V₁=M₂V₂, then moles=M₂×final liters."},
{level:"Applied",title:"Gas Behavior + Temperature Conversion",prompt:"A balloon is 2.40 L at 22°C and constant pressure. It warms to 47°C. Predict and calculate the new volume.",answer:"≈2.60 L",reasoning:"Convert temperatures to Kelvin, then V₁/T₁=V₂/T₂. The volume should increase because absolute temperature increases."},
{level:"Honors",title:"Stoichiometry + Limiting Reactant + Percent Yield",prompt:"For N₂ + 3H₂ → 2NH₃, 5.00 mol N₂ reacts with 12.0 mol H₂. Find the limiting reactant, theoretical moles NH₃, and percent yield if 6.80 mol NH₃ is collected.",answer:"H₂ limits; 8.00 mol NH₃ theoretical; 85.0% yield",reasoning:"12.0 mol H₂×2/3=8.00 mol NH₃. N₂ could make 10.0 mol, so H₂ limits. 6.80/8.00×100=85.0%."},
{level:"Honors",title:"Thermochemistry + Density + Unit Conversion",prompt:"A 125 mL liquid with density 0.920 g/mL cools by 18.0°C. Its specific heat is 2.10 J/g°C. How much heat is released?",answer:"≈4.35 kJ released",reasoning:"Mass=115 g. q=mcΔT=115×2.10×(-18.0)≈-4.35 kJ. Negative indicates heat leaves the liquid."},
{level:"Honors",title:"Isotopes + Algebra + Validation",prompt:"An element has isotope masses 63.0, 65.0, and 67.0 amu. The 63.0 isotope is 52.0% abundant and the 67.0 isotope is 18.0%. Find the missing abundance and the average atomic mass.",answer:"30.0%; 64.32 amu",reasoning:"Missing abundance=100−52−18=30%. Weighted average=63(.52)+65(.30)+67(.18)=64.32."},
{level:"Challenge",title:"Lab Data + Graph Slope + Density + Outlier Judgment",prompt:"Mass-volume data are (2.0 mL, 15.8 g), (4.0, 31.5), (6.0, 47.4), and (8.0, 78.0). Estimate the material density from the consistent trend and decide whether the final point should be trusted immediately.",answer:"≈7.9 g/mL; investigate the 8.0 mL point before using it",reasoning:"The first three points imply ~7.9 g/mL. The final point gives 9.75 g/mL, inconsistent with the established linear trend. Check procedure or repeat rather than deleting automatically."},
{level:"Challenge",title:"Solution Prep + Stoichiometry + Yield",prompt:"A reaction needs 0.0600 mol of reactant X. You only have a 0.800 M solution of X. What volume is required? If the reaction should form product Y in a 1:1 mole ratio but isolated yield is 78.0%, how many moles Y are collected?",answer:"75.0 mL X solution; 0.0468 mol Y",reasoning:"V=n/M=0.0600/0.800=0.0750 L. Actual product=0.0600×0.780=0.0468 mol."},
{level:"Challenge",title:"EM Radiation + Moles of Photons + Energy Scaling",prompt:"Two beams contain the same number of photons. Beam A has wavelength 400 nm and beam B 800 nm. Without using Planck's constant, compare frequency and total photon energy.",answer:"Beam A has 2× the frequency and 2× the total photon energy",reasoning:"ν=c/λ, so halving wavelength doubles frequency. Photon energy is proportional to frequency, and photon counts are equal."},
{level:"Challenge",title:"Experimental Design + Multi-step Decision",prompt:"You must identify an unknown metal using only a balance, graduated cylinder, periodic table, and calculator. Design the experiment, state what data you would collect, how you would calculate density, how many trials you would run, and how you would decide whether an outlier is procedural or random.",answer:"Use repeated mass/displacement density trials and compare the reliable mean with reference densities",reasoning:"A strong design includes tare/calibration checks, full submersion without bubbles, repeated trials, units, uncertainty, outlier investigation, and comparison against plausible reference values."}
];
})();