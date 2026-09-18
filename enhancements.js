window.LEARNING_ATLAS_ENHANCEMENTS = {
  prepPlan: [
    {title:"1. Learn the model", text:"Explain the idea in your own words before using a formula. If you cannot explain what the quantities mean, calculation practice will not stick."},
    {title:"2. Build the setup", text:"Write GIVEN and FIND, choose the relationship, and construct the unit path before touching the calculator."},
    {title:"3. Mix the skills", text:"Practice without being told which formula applies. Honors questions often combine measurement, conversion, algebra, and interpretation."},
    {title:"4. Simulate and diagnose", text:"Work under time pressure, then classify every miss as concept, setup, unit, algebra, significant-figure, arithmetic, or reasoning error."}
  ],
  habits: [
    "Units are algebra. Cancel them visibly.",
    "Keep guard digits. Round once, at the end.",
    "Estimate the magnitude before calculating.",
    "After solving, ask whether the answer is physically possible.",
    "For word problems, identify the target unit before choosing a formula."
  ],
  formulas: [
    {name:"Density", formula:"D = m / V", rearrange:"m = DV · V = m/D", cue:"Mass sits on top. Cover the quantity you need.", trap:"Convert mass and volume units before substituting."},
    {name:"Electromagnetic radiation", formula:"c = λν", rearrange:"λ = c/ν · ν = c/λ", cue:"Long wavelength means low frequency. Short means high.", trap:"Wavelength must be in meters when c = 3.00 × 10⁸ m/s."},
    {name:"Mass number", formula:"A = p + n", rearrange:"n = A − p", cue:"Mass number counts the nucleus: protons + neutrons.", trap:"Atomic number is protons only."},
    {name:"Average atomic mass", formula:"Σ(isotope mass × fractional abundance)", rearrange:"abundances sum to 1", cue:"Percent → decimal → multiply → add.", trap:"Do not multiply by whole-number percentages unless you divide the total by 100."},
    {name:"Displacement volume", formula:"Vobject = Vfinal − Vinitial", rearrange:"then use D = m/V", cue:"The rise in water is the object's volume.", trap:"L, mL and cm³ must be reconciled."},
    {name:"Speed conversion", formula:"value × conversion factors", rearrange:"unwanted units cancel", cue:"Put the unit you want to remove on the opposite side.", trap:"A conversion factor must equal 1."}
  ],
  memory: [
    {title:"Significant figures", trick:"Leading zeros lead the number, so leave them out. Captive zeros count. Decimal trailing zeros count."},
    {title:"Density", trick:"If the same mass is squeezed into less volume, density rises. If the same mass spreads out, density falls."},
    {title:"Isotopes", trick:"Same element = same protons. Isotope difference = neutrons."},
    {title:"EM spectrum", trick:"λ and ν move opposite ways. c stays fixed."},
    {title:"Weighted average", trick:"The most abundant isotope pulls the average closest to itself."},
    {title:"Dimensional analysis", trick:"Do not move decimals by instinct. Let units tell you which way to convert."}
  ],
  resources: [
    {name:"CK-12 Chemistry FlexBook 2.0", url:"https://flexbooks.ck12.org/cbook/ck-12-chemistry-flexbook-2.0/", note:"Broad high-school chemistry reference for concepts, worked examples, and chapter-level review."},
    {name:"ChemCollective Tutorials", url:"https://chemcollective.org/tutorials", note:"Guided tutorials for density, significant figures, dimensional analysis, and related chemistry skills."},
    {name:"ChemCollective Virtual Labs", url:"https://chemcollective.org/vlabs", note:"Virtual experiments and difficulty-ranked problems that connect calculations to lab decisions."}
  ],
  practiceTests: {
    A: {
      title:"Foundation",
      subtitle:"Core recognition and one-step setup",
      questions:[
        {q:"Which sample is a homogeneous mixture?", options:["Granite","Salt water","Oil and water","Soil"], answer:1, why:"A homogeneous mixture has uniform composition throughout. Fully dissolved salt water is uniform at the scale being considered."},
        {q:"Which statement best describes a chemical change?", options:["Only size changes","A new substance forms","Only the state changes","The sample is cut"], answer:1, why:"Chemical change changes chemical identity and produces one or more new substances."},
        {q:"A block has mass 54.0 g and volume 20.0 cm³. What is its density?", options:["0.370 g/cm³","2.70 g/cm³","34.0 g/cm³","74.0 g/cm³"], answer:1, why:"D = m/V = 54.0/20.0 = 2.70 g/cm³."},
        {q:"Convert 2.50 km to meters.", options:["0.00250 m","25.0 m","250 m","2500 m"], answer:3, why:"2.50 km × 1000 m/1 km = 2500 m."},
        {q:"For carbon-14, how many neutrons are present?", options:["6","8","14","20"], answer:1, why:"Carbon has 6 protons. Neutrons = 14 − 6 = 8."},
        {q:"Which has the longest wavelength?", options:["Gamma rays","X-rays","Visible light","Radio waves"], answer:3, why:"Radio waves occupy the long-wavelength end of the electromagnetic spectrum."},
        {q:"If wavelength increases while light remains in vacuum, frequency:", options:["Increases","Decreases","Stays constant","Becomes zero"], answer:1, why:"c = λν and c is constant, so wavelength and frequency are inversely related."},
        {q:"Which is a physical change?", options:["Iron rusting","Paper burning","Ice melting","Milk souring"], answer:2, why:"Melting changes state but not chemical identity."},
        {q:"A liquid has density 0.80 g/mL. What mass occupies 25 mL?", options:["0.032 g","20 g","31.25 g","200 g"], answer:1, why:"m = DV = 0.80 × 25 = 20 g."},
        {q:"Which particle count determines atomic number?", options:["Neutrons","Electrons only","Protons","Protons + neutrons"], answer:2, why:"Atomic number is defined by proton count."},
        {q:"Convert 3500 mg to grams.", options:["0.0035 g","0.35 g","3.5 g","35 g"], answer:2, why:"1000 mg = 1 g, so 3500 mg = 3.5 g."},
        {q:"Which sample is heterogeneous?", options:["Air","Brass","Vinegar","Trail mix"], answer:3, why:"Trail mix has visibly different components and nonuniform composition."}
      ]
    },
    B: {
      title:"Applied",
      subtitle:"Two-step reasoning and interpretation",
      questions:[
        {q:"A 15.0 g metal raises water from 30.0 mL to 35.0 mL. What is its density?", options:["0.333 g/mL","3.00 g/mL","5.00 g/mL","75.0 g/mL"], answer:1, why:"Object volume is 5.0 mL. Density = 15.0/5.0 = 3.00 g/mL."},
        {q:"Which observation most strongly supports formation of a new substance?", options:["A solid is crushed","A liquid freezes","A precipitate forms when two clear solutions mix","Water evaporates"], answer:2, why:"A precipitate can be evidence that a new insoluble substance formed."},
        {q:"Convert 4.2 × 10⁻³ m to millimeters.", options:["0.0042 mm","0.42 mm","4.2 mm","4200 mm"], answer:2, why:"Multiply by 1000 mm/m: 4.2 × 10⁻³ m = 4.2 mm."},
        {q:"Which pair represents isotopes of the same element?", options:["¹²C and ¹⁴C","¹⁴C and ¹⁴N","²³Na and ²⁴Mg","¹H and ⁴He"], answer:0, why:"Isotopes have the same proton count but different mass numbers."},
        {q:"A wave has frequency 6.0 × 10¹⁴ Hz. Its wavelength is closest to:", options:["5.0 × 10⁻⁷ m","2.0 × 10⁶ m","1.8 × 10²³ m","5.0 × 10⁷ m"], answer:0, why:"λ = c/ν = 3.00×10⁸ / 6.0×10¹⁴ = 5.0×10⁻⁷ m."},
        {q:"Which classification best describes distilled water?", options:["Element","Compound","Homogeneous mixture","Heterogeneous mixture"], answer:1, why:"Pure H₂O is a compound."},
        {q:"A sample has mass 125 g and density 2.50 g/mL. Its volume is:", options:["0.0200 mL","50.0 mL","127.5 mL","312.5 mL"], answer:1, why:"V = m/D = 125/2.50 = 50.0 mL."},
        {q:"Which factor correctly converts centimeters to meters when starting with cm?", options:["100 cm/1 m","1 m/100 cm","100 m/1 cm","1 cm/100 m"], answer:1, why:"Centimeters must appear in the denominator so they cancel."},
        {q:"A student reports 0.0045600 L. How many significant figures?", options:["3","4","5","7"], answer:2, why:"The leading zeros do not count. 4, 5, 6, 0, 0 are significant."},
        {q:"Which region has higher frequency than visible light?", options:["Infrared","Microwave","Radio","Ultraviolet"], answer:3, why:"Ultraviolet has shorter wavelength and higher frequency than visible light."},
        {q:"Dissolving sugar in water is usually classified as:", options:["Chemical change","Physical change","Nuclear change","Combustion"], answer:1, why:"Sugar molecules remain sugar and can be recovered by physical separation."},
        {q:"A solid has density 1.10 g/cm³ and is placed in a liquid of density 1.26 g/mL. It will:", options:["Sink to bottom","Float","Have zero mass","React automatically"], answer:1, why:"The solid is less dense than the liquid, so it floats."}
      ]
    },
    C: {
      title:"Honors Challenge",
      subtitle:"Multi-step setup, algebra, error analysis",
      questions:[
        {q:"Which setup correctly converts 72.0 km/h to m/s?", options:["72.0×1000×3600","72.0×(1000 m/1 km)×(1 h/3600 s)","72.0×(1 km/1000 m)×(3600 s/1 h)","72.0/1000/3600"], answer:1, why:"km and h must cancel, leaving m/s."},
        {q:"A metal cube has side 2.00 cm and mass 62.4 g. Density?", options:["3.90 g/cm³","7.80 g/cm³","15.6 g/cm³","31.2 g/cm³"], answer:1, why:"V = 2.00³ = 8.00 cm³; D = 62.4/8.00 = 7.80 g/cm³."},
        {q:"Isotopes 10.0 amu at 20.0% and 11.0 amu at 80.0% give average mass:", options:["10.2","10.5","10.8","11.0"], answer:2, why:"(10.0)(0.200)+(11.0)(0.800)=10.8 amu."},
        {q:"Photon X has shorter wavelength than photon Y. X therefore has:", options:["Lower frequency and energy","Higher frequency and energy","Higher frequency but lower energy","Same frequency"], answer:1, why:"Shorter wavelength means higher frequency, and photon energy increases with frequency."},
        {q:"A sample's measured volume is accidentally too large while mass is correct. Calculated density is:", options:["Too high","Too low","Unchanged","Zero"], answer:1, why:"D=m/V. An inflated denominator makes density too low."},
        {q:"An element has isotopes 68.93 and 70.92 amu and average mass 69.72 amu. Which heavier-isotope abundance is closest?", options:["20%","40%","60%","80%"], answer:1, why:"Solving 68.93(1−x)+70.92x=69.72 gives about 39.7%."},
        {q:"A 0.785 kg cube has side 4.70 cm. Density is closest to:", options:["0.132","7.56","16.7","103.8"], answer:1, why:"Mass = 785 g; volume = 4.70³ = 103.823 cm³; density ≈7.56 g/cm³."},
        {q:"Air bubbles cling to an object during water displacement. Calculated density will usually be:", options:["Too high","Too low","Exactly correct","Impossible to predict"], answer:1, why:"Bubbles increase apparent volume, so m/V becomes too small."},
        {q:"Three isotope abundances are 42.5%, 37.0%, 25.5%. What should happen first?", options:["Calculate weighted average","Normalize silently","Identify invalid data","Round them"], answer:2, why:"They total 105.0%, so the data are inconsistent and should be corrected before calculation."},
        {q:"A wave has λ=550 nm. Before using c=λν, first:", options:["Divide by 1000","Convert nm to meters","Convert c to nm/min","Multiply by frequency"], answer:1, why:"The standard c value is in m/s, so λ must be in meters."},
        {q:"A student rounds every intermediate step to 1 significant figure. Best diagnosis:", options:["Always valid","Can compound rounding error","Improves precision","Only affects units"], answer:1, why:"Repeated aggressive rounding can shift the final value significantly. Keep guard digits until the end."},
        {q:"A 4.80 kg block at 6.00 g/cm³ must fit in a 750 mL container. Which conclusion is correct?", options:["It fits","It occupies 800 mL and does not fit","It occupies 80 mL","Need temperature only"], answer:1, why:"4800 g / 6.00 g/cm³ = 800 cm³ = 800 mL."}
      ]
    }
  },
  challengeBank: [
    {level:1, tag:"Foundation", prompt:"A liquid has mass 36.0 g and volume 45.0 mL. Find density.", answer:"0.800 g/mL", reasoning:"Use D=m/V. Both quantities already use compatible units."},
    {level:1, tag:"Foundation", prompt:"Write 0.0005080 in scientific notation while preserving significant figures.", answer:"5.080 × 10⁻⁴", reasoning:"Leading zeros do not count; the trailing decimal zero does."},
    {level:1, tag:"Foundation", prompt:"An atom has 17 protons and mass number 37. How many neutrons?", answer:"20", reasoning:"n=A−p=37−17."},
    {level:2, tag:"Applied", prompt:"Water rises from 41.2 mL to 47.8 mL when a 52.1 g metal is submerged. Find density.", answer:"7.89 g/mL", reasoning:"Volume=6.6 mL. D=52.1/6.6≈7.89 g/mL; apply class sig-fig expectations."},
    {level:2, tag:"Applied", prompt:"Convert 88.0 km/h to m/s using a continuous dimensional-analysis chain.", answer:"24.4 m/s", reasoning:"88.0×1000/3600=24.4 m/s."},
    {level:2, tag:"Applied", prompt:"A wave frequency is 7.50 × 10¹⁴ Hz. Find wavelength.", answer:"4.00 × 10⁻⁷ m", reasoning:"λ=c/ν."},
    {level:3, tag:"Honors", prompt:"A rectangular sample is 12.4 mm × 2.50 cm × 0.00820 m and has mass 0.634 kg. Find density in g/cm³.", answer:"≈250 g/cm³", reasoning:"Convert lengths to 1.24 cm, 2.50 cm, 0.820 cm; V≈2.54 cm³; mass=634 g."},
    {level:3, tag:"Honors", prompt:"An element has isotopes 34.97 and 36.97 amu with average 35.45 amu. Find heavier-isotope abundance.", answer:"24.0%", reasoning:"Solve 34.97(1−x)+36.97x=35.45."},
    {level:3, tag:"Honors", prompt:"A tungsten sample of mass 9.8674 kg is placed in 0.460 L water. Density 19.3 g/cm³. Find final reading.", answer:"0.971 L", reasoning:"Convert mass to g, compute V=m/D≈511 cm³=0.511 L, then add."},
    {level:4, tag:"Challenge", prompt:"A fictional element has density 124.8 g/cm³ and costs $280 per 3.00 cm³. A spacecraft requires 976 kg. With $1.00 million, how many complete spacecraft can be built and approximately how much remains?", answer:"1 spacecraft; about $270,000 remains", reasoning:"Convert 976 kg to g, find required volume, calculate cost per spacecraft, then use whole-number interpretation."},
    {level:4, tag:"Challenge", prompt:"A spacecraft travels 3.20 light years. Use 1 ly=5.879×10¹² miles, 1 mile=1.609 km, speed=2.80×10⁸ m/s. Find travel time in years.", answer:"≈3.43 years", reasoning:"Build a single chain ly→mi→km→m→s→day→year."},
    {level:4, tag:"Challenge", prompt:"Three isotopes have masses 23.985 amu, 24.986 amu, and unknown m with abundances 78.99%, 10.00%, 11.01%. Average mass is 24.305 amu. Find m.", answer:"≈25.98 amu", reasoning:"Solve the weighted-average equation for m."},
    {level:4, tag:"Challenge", prompt:"A density experiment gives 7.82, 7.79, and 9.21 g/cm³. Should you average immediately? Explain what you would do.", answer:"No. Investigate and repeat the inconsistent trial first.", reasoning:"9.21 is inconsistent with the cluster. Check volume reading, submersion, trapped bubbles, balance, or transcription before deciding whether it is an outlier."}
  ]
};