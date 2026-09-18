(function(){
const mod=(id,name,type,summary,learn,example,practice)=>({id,name,type,summary,learn,example,practice});
const T=(id,name,description,modules)=>({id,name,description,modules});
window.LEARNING_ATLAS_MATH={
 subject:{name:"Mathematics Honors",subtitle:"Algebra II + Advanced Functions",description:"A teach-first Honors mathematics track spanning functions, algebra, trigonometry, analytic geometry, sequences, probability, and modeling."},
 benchmark:{name:"OpenStax Algebra and Trigonometry 2e + Algebra II skill benchmarks",majorDomains:16,coverageTarget:"70%+ broad-domain coverage"},
 topics:[
 T("functions","Functions & Mathematical Language","Read, represent, combine, transform, and reason about functions as mathematical objects.",[
  mod("function-notation","Function Notation & Evaluation","Foundation","Interpret f(x), inputs, outputs, tables, and graphs.","A function assigns exactly one output to each allowed input. Function notation names that relationship without implying multiplication.","If f(x)=2x²−3, then f(−2)=2(4)−3=5.",[["If f(x)=3x−4, find f(5).","11"],["If g(2)=7, what ordered pair lies on g?","(2, 7)"],["Can one input have two outputs in a function?","No"]]),
  mod("domain-range","Domain, Range & Intervals","Representation","Determine valid inputs and resulting outputs from formulas and graphs.","Domain is the set of allowed inputs; range is the set of attainable outputs. Restrictions often come from denominators, even roots, or context.","For f(x)=1/(x−4), x=4 is excluded from the domain.",[["Domain restriction of 1/(x+2)?","x ≠ −2"],["Domain of √(x−5)?","x ≥ 5"],["Write x≥3 in interval notation.","[3, ∞)"]]),
  mod("composition-inverse","Composition & Inverse Functions","Honors","Connect multi-step processes and undo them.","Composition feeds one function's output into another. An inverse reverses a one-to-one function, so f⁻¹(f(x))=x on the valid domain.","f(x)=2x+5 has inverse f⁻¹(x)=(x−5)/2.",[["If f(x)=x+1 and g(x)=x², find g(f(2)).","9"],["Inverse of y=3x−6?","(x+6)/3"],["What graph relationship links a function and its inverse?","Reflection across y=x"]])
 ]),
 T("linear-systems","Linear Systems & Inequalities","Solve and interpret systems algebraically, graphically, and with matrices.",[
  mod("systems-2","Two-Variable Systems","Foundation","Use substitution, elimination, and graph intersections.","A solution to a system satisfies every equation simultaneously and appears as an intersection point on a graph.","x+y=7 and x−y=1 gives x=4, y=3.",[["Solve x+y=10, x−y=2.","(6,4)"],["Parallel distinct lines have how many solutions?","0"],["Same line represented twice has how many?","Infinitely many"]]),
  mod("systems-3","Three-Variable Systems","Multi-step","Eliminate variables systematically in 3×3 systems.","Reduce a three-variable system to two variables, solve that pair, then back-substitute.","The goal is triangular reduction: three variables → two → one.",[["Best first strategy in a 3×3 system?","Eliminate the same variable from two pairs"],["What must the final ordered solution contain?","x, y, and z"],["Why check all original equations?","To verify no elimination error occurred"]]),
  mod("linear-inequalities","Systems of Inequalities","Representation","Translate inequalities into half-planes and feasible regions.","Each inequality defines a region. A system's solution is the overlap that satisfies all constraints.","For y≥2x−1, shade above the solid boundary line.",[["Dashed boundary means what?","Boundary not included"],["For y≤3, shade where?","Below y=3"],["Optimization constraints create what region?","A feasible region"]])
 ]),
 T("quadratics","Quadratic Functions & Equations","Move fluently among forms, roots, vertices, discriminants, and models.",[
  mod("quadratic-forms","Three Forms of a Quadratic","Representation","Use standard, vertex, and factored forms strategically.","Standard form highlights coefficients, vertex form exposes transformations, and factored form exposes zeros.","(x−2)(x+5) has zeros 2 and −5.",[["Vertex of y=(x−3)²+4?","(3,4)"],["Zeros of (x+1)(x−6)?","−1 and 6"],["Which form exposes axis of symmetry fastest?","Vertex form"]]),
  mod("solve-quadratics","Solving Quadratics","Procedure","Factor, complete the square, use square roots, or apply the quadratic formula.","Choose a method based on structure. The discriminant b²−4ac predicts the real-root count before solving.","For x²−6x+5=0, factoring gives (x−1)(x−5)=0.",[["Solve x²−9=0.","x=±3"],["Discriminant <0 implies?","Two nonreal complex roots"],["Discriminant =0 implies?","One repeated real root"]]),
  mod("quadratic-models","Quadratic Modeling & Constraints","Honors","Translate maxima, minima, projectile paths, and geometric constraints.","Quadratics model situations with constant second differences and parabolic geometry. The vertex often carries the contextual maximum or minimum.","For h(t)=−16t²+64t+5, the vertex time gives maximum height.",[["Axis of y=2(x−4)²−7?","x=4"],["If a<0, vertex is a?","Maximum"],["What should a contextual solution include beyond x?","Units and interpretation"]])
 ]),
 T("complex","Complex Numbers","Extend algebra beyond real roots and connect complex arithmetic to quadratics.",[
  mod("imaginary-unit","Imaginary Unit & Powers","Foundation","Use i²=−1 and cycle powers of i.","Powers of i repeat every four: i, −1, −i, 1.","i²=−1 and i⁴=1.",[["i³?","−i"],["i⁶?","−1"],["√(−49)?","7i"]]),
  mod("complex-arithmetic","Complex Arithmetic","Procedure","Add, multiply, and divide complex numbers.","Combine real and imaginary parts separately. For division, multiply by the denominator's conjugate.","(3+2i)+(1−5i)=4−3i.",[["(2+i)(2−i)?","5"],["Conjugate of 4−7i?","4+7i"],["Real part of 3+8i?","3"]]),
  mod("complex-roots","Complex Quadratic Roots","Honors","Interpret nonreal solutions algebraically.","Negative discriminants produce conjugate-pair complex roots for real-coefficient quadratics.","x²+4=0 gives x=±2i.",[["Roots of x²+9=0?","±3i"],["Complex roots of real quadratics occur in what pattern?","Conjugate pairs"],["Why use i?","To represent square roots of negative numbers"]])
 ]),
 T("polynomial-algebra","Polynomial Algebra","Build, factor, divide, and analyze higher-degree expressions.",[
  mod("poly-operations","Polynomial Operations","Foundation","Add, subtract, and multiply polynomials accurately.","Combine like powers and use distributive structure. Degree behavior provides a quick check.","(x+2)(x−3)=x²−x−6.",[["Degree of 4x⁵−x+1?","5"],["Leading term of −2x³+7?","−2x³"],["(x+4)²?","x²+8x+16"]]),
  mod("advanced-factoring","Advanced Factoring","Multi-step","Use grouping, substitution, identities, and known factors.","Look for structure before expanding. Difference of squares, sum/difference of cubes, and grouping can expose factors quickly.","x⁴−5x²+4 factors as (x²−1)(x²−4).",[["x³−8 factors as?","(x−2)(x²+2x+4)"],["Factor x²−16.","(x−4)(x+4)"],["Why factor before solving?","Zero-product structure exposes roots"]]),
  mod("poly-division","Polynomial & Synthetic Division","Honors","Divide polynomials and connect remainders to function values.","The Remainder Theorem says dividing f(x) by x−c leaves remainder f(c). Synthetic division compresses this process for linear divisors.","If f(2)=0, then x−2 is a factor.",[["Remainder when f(x) divided by x−3 equals?","f(3)"],["If remainder is 0, divisor is a?","Factor"],["Synthetic division works directly with what divisor form?","x−c"]])
 ]),
 T("polynomial-functions","Polynomial Functions & Graphs","Infer roots, multiplicity, end behavior, and shape from algebraic structure.",[
  mod("zeros-multiplicity","Zeros & Multiplicity","Representation","Connect factors to x-intercepts and crossing behavior.","Odd multiplicity usually crosses the x-axis; even multiplicity usually touches and turns.","(x−2)² touches at x=2.",[["Multiplicity 3 at x=1 usually does what?","Crosses with flattening"],["Factor for zero −4?","x+4"],["Even multiplicity behavior?","Touches/turns"]]),
  mod("end-behavior","End Behavior","Reasoning","Predict tails from degree and leading coefficient.","For large |x|, the leading term dominates polynomial behavior.","Positive even degree rises on both ends; negative odd degree rises left and falls right.",[["Positive odd leading term: right end?","Up"],["Negative even: both ends?","Down"],["What term controls end behavior?","Leading term"]]),
  mod("build-polynomial","Build a Polynomial from Features","Honors","Construct equations from roots, multiplicity, and points.","Translate every zero into a factor, encode multiplicity as an exponent, then use a known point to determine scale.","Zeros 1 and −2 with multiplicities 2 and 1 gives a(x−1)²(x+2).",[["Zero 5 multiplicity 2 gives factor?","(x−5)²"],["Why include leading scale a?","To match vertical scale or a known point"],["Minimum degree from multiplicities 2,1,3?","6"]])
 ]),
 T("radicals","Radicals & Rational Exponents","Simplify powers and solve radical equations while controlling domain.",[
  mod("rational-exponents","Rational Exponents","Foundation","Translate between radicals and fractional exponents.","a^(m/n)=ⁿ√(a^m) when the expression is defined in the relevant number system.","x^(3/2)=√(x³)=x√x for x≥0.",[["x^(1/2)?","√x"],["Cube root of x² as exponent?","x^(2/3)"],["Why are even-root domains restricted over reals?","Negative radicands are not real"]]),
  mod("radical-equations","Radical Equations","Multi-step","Isolate radicals, raise powers, and check extraneous roots.","Powering both sides can create solutions that fail the original equation, so checking is mandatory.","√(x+1)=x−1 requires x−1≥0 before solving.",[["Why check solutions after squaring?","Squaring can introduce extraneous roots"],["First step with √(expression)+3=8?","Isolate the radical"],["Domain of √(5−x)?","x≤5"]]),
  mod("radical-functions","Radical Function Graphs","Representation","Connect root transformations to domains and endpoints.","Square-root graphs start at an endpoint; cube-root graphs continue both directions.","y=√(x−4)+2 begins at (4,2).",[["Endpoint of √(x+3)−1?","(−3,−1)"],["Domain of y=√x?","x≥0"],["Cube-root domain?","All real numbers"]])
 ]),
 T("rational-functions","Rational Functions","Analyze restrictions, holes, asymptotes, intercepts, and equations.",[
  mod("rational-simplify","Rational Expressions & Restrictions","Foundation","Simplify while preserving excluded values.","A canceled factor creates a hole, not permission to restore the original excluded x-value.","(x²−4)/(x−2)=x+2 for x≠2.",[["Original restriction of (x−1)/(x²−1)?","x≠±1"],["A canceled denominator factor creates a?","Hole"],["Why keep original restrictions?","They belong to the original function's domain"]]),
  mod("asymptotes","Asymptotes & Holes","Representation","Infer graph structure from numerator and denominator behavior.","Uncanceled denominator zeros create vertical asymptotes. Degree comparison helps determine horizontal or slant behavior.","1/(x−3) has vertical asymptote x=3.",[["Equal numerator/denominator degree horizontal asymptote?","Ratio of leading coefficients"],["Denominator degree larger horizontal asymptote?","y=0"],["Hole comes from what?","Canceled common factor"]]),
  mod("rational-equations","Rational Equations","Honors","Clear denominators and reject restricted solutions.","Multiply by the least common denominator, solve the resulting equation, then check original restrictions.","If x=2 makes an original denominator zero, x=2 cannot be accepted.",[["After clearing denominators, what must still be checked?","Domain restrictions"],["LCD means?","Least common denominator"],["Can an algebraic solution be invalid?","Yes, if it violates the original domain"]])
 ]),
 T("exponential","Exponential Functions & Models","Recognize multiplicative change and model growth, decay, finance, and half-life.",[
  mod("exp-functions","Exponential Growth & Decay","Foundation","Distinguish constant-percent change from constant-difference change.","Exponential models multiply by a common factor over equal intervals: y=ab^x.","A 5% increase per period uses b=1.05.",[["12% decay factor?","0.88"],["If b>1, growth or decay?","Growth"],["Linear vs exponential: constant what?","Linear difference; exponential ratio"]]),
  mod("compound-interest","Compound Interest","Applied","Model periodic and continuous compounding.","Compound interest accumulates on prior interest. Common forms are A=P(1+r/n)^(nt) and A=Pe^(rt).","$1000 at 6% annually for 2 years gives 1000(1.06)².",[["What is P?","Principal"],["Continuous-compounding base?","e"],["Why is exponent nt?","n compounding periods per year for t years"]]),
  mod("exp-modeling","Exponential Modeling","Honors","Fit models from data and interpret parameters.","Use ratios, doubling/half-life, or regression to determine growth structure. Always interpret parameters in context.","Doubling every 3 hours can be modeled as A=A₀·2^(t/3).",[["Half-life h model factor?","(1/2)^(t/h)"],["What does initial value mean?","Value when independent variable is 0"],["How verify exponential fit?","Check roughly constant ratios or residuals"]])
 ]),
 T("logarithms","Logarithms & Inverse Functions","Use logarithms to invert exponentials, solve equations, and reason about scale.",[
  mod("log-definition","Logarithm Meaning","Foundation","Translate between exponential and logarithmic statements.","log_b(x)=y means b^y=x.","log₂(8)=3 because 2³=8.",[["log₁₀(1000)?","3"],["ln(e⁵)?","5"],["log_b(1)?","0"]]),
  mod("log-properties","Log Properties","Procedure","Expand, condense, and change bases.","Products become sums, quotients become differences, and powers move to coefficients.","log(x²y)=2log x+log y.",[["log(ab)?","log a + log b"],["log(a/b)?","log a − log b"],["Change of base for log_b a?","log a / log b"]]),
  mod("log-equations","Solving Exponential & Log Equations","Honors","Use inverse relationships and domain checks.","Take logs when the unknown is in an exponent; exponentiate when the unknown is inside a logarithm. Log arguments must remain positive.","2^x=7 gives x=ln7/ln2.",[["Solve 10^x=100.","2"],["Domain of log(x−4)?","x>4"],["Why check logarithmic solutions?","Arguments must be positive"]])
 ]),
 T("trig-foundations","Trigonometry Foundations & Unit Circle","Connect angle measure, right triangles, radians, and unit-circle coordinates.",[
  mod("radians","Degrees, Radians & Arc Length","Foundation","Move between angular units and interpret radians geometrically.","π radians equals 180°. Arc length satisfies s=rθ when θ is in radians.","90°=π/2 radians.",[["60° in radians?","π/3"],["π radians in degrees?","180°"],["Arc length formula?","s=rθ"]]),
  mod("unit-circle","Unit Circle","Representation","Use coordinates to generate exact sine and cosine values.","At angle θ on the unit circle, coordinates are (cosθ,sinθ).","At π/3, coordinates are (1/2,√3/2).",[["cos 0?","1"],["sin π/2?","1"],["tan θ equals?","sinθ/cosθ"]]),
  mod("right-trig","Right-Triangle Trigonometry","Applied","Use trig ratios to solve lengths and angles.","SOH-CAH-TOA connects acute angles to side ratios.","sinθ=opposite/hypotenuse.",[["cosθ?","adjacent/hypotenuse"],["tanθ?","opposite/adjacent"],["Inverse trig is used to find what?","An angle from a ratio"]])
 ]),
 T("trig-functions","Trigonometric Functions, Graphs & Identities","Model periodic behavior and solve trig equations.",[
  mod("trig-graphs","Sinusoidal Graphs","Representation","Read amplitude, period, phase shift, and midline.","For y=A sin(B(x−C))+D: amplitude |A|, period 2π/|B|, phase shift C, midline y=D.","y=3sin(2x)+1 has amplitude 3 and period π.",[["Amplitude of −4cosx?","4"],["Period of sin(3x)?","2π/3"],["Midline of 2sinx−5?","y=−5"]]),
  mod("trig-identities","Core Trig Identities","Honors","Transform expressions using reciprocal, quotient, and Pythagorean identities.","Identity work is algebra with trig expressions. Convert strategically rather than memorizing isolated tricks.","sin²x+cos²x=1.",[["1+tan²x?","sec²x"],["tanx?","sinx/cosx"],["Why identities matter?","They rewrite equivalent trig expressions"]]),
  mod("trig-equations","Trig Equations","Honors","Solve over intervals and account for periodic families.","Find reference angles, determine valid quadrants, then include all requested solutions.","sin x=1/2 on [0,2π) gives x=π/6,5π/6.",[["cosx=1 on [0,2π)?","0"],["tan period?","π"],["Why can trig equations have infinitely many solutions?","Trig functions are periodic"]])
 ]),
 T("sequences","Sequences & Series","Model discrete patterns recursively and explicitly.",[
  mod("sequence-notation","Sequence Notation & Recursion","Foundation","Read indexed terms and recursive definitions.","A sequence is a function whose domain is typically positive integers. Recursive rules depend on prior terms.","a₁=3, aₙ=aₙ₋₁+4 is arithmetic.",[["Next after 2,5,8?","11"],["Recursive rule needs what?","Starting value(s)"],["Explicit rule advantage?","Find any term directly"]]),
  mod("arithmetic-geometric","Arithmetic & Geometric Sequences","Procedure","Distinguish constant difference from constant ratio.","Arithmetic: aₙ=a₁+(n−1)d. Geometric: aₙ=a₁r^(n−1).","2,6,18,... is geometric with r=3.",[["Common difference 5, a1=2, a4?","17"],["Geometric a1=4,r=2,a5?","64"],["Constant ratio identifies?","Geometric sequence"]]),
  mod("series","Series & Sigma Notation","Honors","Add sequence terms efficiently and connect finite/infinite geometric sums.","A series is a sum of sequence terms. Infinite geometric series converges when |r|<1.","1+1/2+1/4+... sums to 2.",[["Finite arithmetic sum formula?","n(a1+an)/2"],["Infinite geometric sum?","a1/(1−r), |r|<1"],["Does r=1.2 converge infinitely?","No"]])
 ]),
 T("analytic-geometry","Analytic Geometry & Conics","Use equations to understand geometric loci and coordinate structure.",[
  mod("circles","Circles","Foundation","Read centers/radii and build equations.","A circle with center (h,k) and radius r satisfies (x−h)²+(y−k)²=r².","Center (2,−1), radius 3 gives (x−2)²+(y+1)²=9.",[["Center of x²+y²=25?","(0,0)"],["Radius?","5"],["Complete square helps reveal what?","Center-radius form"]]),
  mod("conics","Parabolas, Ellipses & Hyperbolas","Representation","Classify conics and connect equations to geometric features.","Squared-variable signs and coefficients distinguish conics. Standard forms reveal vertices, foci, and axes.","x²/9+y²/4=1 is an ellipse.",[["Opposite signs on squared terms?","Hyperbola"],["Only one squared variable?","Parabola"],["Same-sign equal coefficients often indicate?","Circle"]]),
  mod("rotation-parametric","Parametric & Rotated Geometry","Extension","Describe curves using parameters and transformed coordinate systems.","Parametric equations let x and y depend on a third variable, often time; rotation can eliminate xy terms in conics.","x=cos t,y=sin t traces the unit circle.",[["Parameter commonly represents?","Time or another independent driver"],["x=3cost,y=3sint traces?","Circle radius 3"],["Why use parametrics?","To encode motion or curves not conveniently written as y=f(x)"]])
 ]),
 T("probability-data","Probability, Counting & Data Modeling","Count outcomes, quantify uncertainty, and judge models from evidence.",[
  mod("counting","Counting Principles","Foundation","Use multiplication principle, permutations, and combinations.","Order matters in permutations; order does not matter in combinations.","Choosing 3 people from 10 uses C(10,3).",[["Arrange 5 distinct books?","5! = 120"],["Choose 2 of 8?","C(8,2)=28"],["Permutation vs combination key question?","Does order matter?"]]),
  mod("probability","Probability & Conditional Probability","Applied","Compute compound and conditional probabilities.","P(A|B)=P(A∩B)/P(B), when P(B)>0. Independence means one event does not change the other's probability.","For independent A,B, P(A∩B)=P(A)P(B).",[["Probability range?","0 to 1"],["Complement rule?","P(not A)=1−P(A)"],["Conditional notation?","P(A|B)"]]),
  mod("regression","Regression & Residual Reasoning","Honors","Compare models, inspect residuals, and avoid correlation errors.","A strong model leaves residuals without systematic pattern. Correlation alone does not establish causation.","Curved residual structure suggests a linear model is missing pattern.",[["Residual =?","observed − predicted"],["Random residual scatter suggests?","Model form is reasonable"],["Correlation proves causation?","No"]])
 ]),
 T("advanced-modeling","Honors Modeling & Mathematical Synthesis","Combine multiple representations, constraints, and models in unfamiliar contexts.",[
  mod("model-selection","Model Selection","Diagnostic","Choose linear, quadratic, exponential, rational, or trig models from structure.","Model choice should follow how change behaves, not which formula looks familiar.","Constant ratios suggest exponential; repeating oscillation suggests trigonometric.",[["Constant second differences suggest?","Quadratic"],["Periodic data suggests?","Trigonometric"],["Saturation/asymptote can suggest?","Rational or logistic-style model"]]),
  mod("error-detective","Error Detective","Diagnostic","Locate the first invalid algebraic or reasoning step.","Strong Honors work diagnoses why a method fails, not only what the final answer should be.","Squaring both sides can introduce extraneous roots; dividing by an expression can discard a zero case.",[["Why inspect first wrong step?","Later errors may simply follow from it"],["Dividing by x can lose which case?","x=0"],["Taking square roots requires remembering?","± when solving x²=a"]]),
  mod("multi-representation","Multi-Representation Synthesis","Synthesis","Move among equation, graph, table, verbal model, and constraints.","Expert mathematical reasoning chooses the representation that exposes the needed feature most directly.","Factored form exposes zeros; vertex form exposes extrema; a table can reveal finite differences.",[["Best quadratic form for roots?","Factored form"],["Best for vertex?","Vertex form"],["Why switch representations?","Different forms expose different structure"]])
 ])
 ],
 formulas:[
  ["Slope","m=(y₂−y₁)/(x₂−x₁)","rate of change","Keep point order consistent."],
  ["Quadratic formula","x=(-b±√(b²−4ac))/(2a)","all quadratic roots","Parenthesize the entire numerator."],
  ["Vertex","x=−b/(2a)","axis / extremum input","Substitute back for y."],
  ["Distance","d=√((x₂−x₁)²+(y₂−y₁)²)","coordinate distance","Square both coordinate differences."],
  ["Exponential","y=abˣ","multiplicative change","Growth factor is 1+r, not r."],
  ["Compound interest","A=P(1+r/n)ⁿᵗ","periodic compounding","Use decimal rate."],
  ["Log meaning","log_b(x)=y ⇔ bʸ=x","inverse of exponentials","Log argument must be positive."],
  ["Arc length","s=rθ","circle arc length","θ must be radians."],
  ["Unit circle","(cosθ,sinθ)","exact trig values","x-coordinate is cosine."],
  ["Sinusoid","y=A sin(B(x−C))+D","periodic models","period=2π/|B|."],
  ["Arithmetic sequence","aₙ=a₁+(n−1)d","constant difference","Index shift uses n−1."],
  ["Geometric sequence","aₙ=a₁rⁿ⁻¹","constant ratio","Do not confuse r with percent."],
  ["Infinite geometric sum","S=a₁/(1−r)","convergent geometric series","Requires |r|<1."],
  ["Circle","(x−h)²+(y−k)²=r²","center-radius form","Signs inside parentheses reverse center coordinates."],
  ["Conditional probability","P(A|B)=P(A∩B)/P(B)","probability given B","Denominator is the condition event."]
 ],
 visuals:[
  {kind:"parabola",name:"Parabola Studio",topic:"Quadratics",desc:"Manipulate a, h, and k and see vertex form move in real time."},
  {kind:"transform",name:"Function Transformer",topic:"Functions",desc:"Shift, reflect, and stretch a parent function while equation and graph stay synchronized."},
  {kind:"unit-circle",name:"Unit Circle Tracker",topic:"Trigonometry",desc:"Move an angle around the circle and watch sine, cosine, and tangent update."},
  {kind:"exponential",name:"Growth vs Linear",topic:"Exponentials",desc:"Race constant-additive change against constant-multiplicative change."},
  {kind:"log",name:"Logarithm Inverter",topic:"Logarithms",desc:"Watch exponential and logarithmic statements invert each other."},
  {kind:"rational",name:"Asymptote Lab",topic:"Rational Functions",desc:"Move denominator zeros and see vertical asymptotes and holes respond."},
  {kind:"sequence",name:"Sequence Engine",topic:"Sequences",desc:"Toggle arithmetic and geometric rules and compare term growth."},
  {kind:"systems",name:"Intersection Solver",topic:"Systems",desc:"Move two lines and connect algebraic solutions to graphical intersections."}
 ],
 practiceTests:{
  A:{title:"Foundation",subtitle:"Core fluency and representation",questions:[
   ["If f(x)=2x+3, f(4)=?",["8","10","11","14"],2,"Substitute 4: 2(4)+3=11."],
   ["Vertex of y=(x−2)²+5?",["(−2,5)","(2,5)","(2,−5)","(5,2)"],1,"Vertex form gives (h,k)."],
   ["i² equals?",["1","−1","i","−i"],1,"By definition i²=−1."],
   ["Zero of x−7?",["−7","0","7","1/7"],2,"Set x−7=0."],
   ["Domain excludes x=3 for which?",["x+3","√(x+3)","1/(x−3)","x²−3"],2,"A zero denominator is forbidden."],
   ["12% growth factor?",["0.12","0.88","1.12","12"],2,"Growth uses 1+0.12."],
   ["log₁₀(100)=?",["1","2","10","100"],1,"10²=100."],
   ["90° in radians?",["π","π/2","2π","π/4"],1,"180°=π."],
   ["sinθ on unit circle is which coordinate?",["x","y","radius","slope"],1,"Coordinates are (cosθ,sinθ)."],
   ["Arithmetic sequence has constant?",["ratio","difference","product","square"],1,"Arithmetic means constant difference."],
   ["Opposite signs on squared conic terms indicate?",["circle","ellipse","hyperbola","parabola"],2,"Hyperbolas have opposite-signed squared terms."],
   ["Permutation differs from combination because?",["it uses fractions","order matters","it is always larger","repetition is required"],1,"Permutation counts order."]
  ]},
  B:{title:"Applied",subtitle:"Transfer across representations",questions:[
   ["Discriminant of x²−4x+4?",["0","4","8","16"],0,"16−16=0."],
   ["If f(x)=x+2,g(x)=x², g(f(3))=?",["13","25","27","5"],1,"f(3)=5, then g(5)=25."],
   ["Horizontal asymptote of (2x+1)/(x−4)?",["y=0","y=1","y=2","x=4"],2,"Equal degree: ratio of leading coefficients 2/1."],
   ["Half-life model uses which factor?",["2^(t/h)","(1/2)^(t/h)","h^t","t/2"],1,"Each half-life multiplies amount by 1/2."],
   ["Period of sin(4x)?",["4π","2π","π","π/2"],3,"2π/4=π/2."],
   ["Infinite geometric series converges when?",["r>1","r=1","|r|<1","r<0 only"],2,"Convergence requires absolute ratio below 1."],
   ["Circle center for (x+3)²+(y−2)²=16?",["(3,−2)","(−3,2)","(−3,−2)","(3,2)"],1,"Center signs reverse inside parentheses."],
   ["Residual is?",["predicted−observed","observed−predicted","slope−intercept","mean−median"],1,"Residual = observed minus predicted."],
   ["If Q is not relevant; solve 2^x=7 with?",["factoring","logs","quadratic formula","synthetic division"],1,"Logs invert exponentials."],
   ["(x²−4)/(x−2) has at x=2?",["vertical asymptote","hole","zero","minimum"],1,"The common factor cancels, leaving a hole at the excluded input."],
   ["A positive even-degree polynomial with positive leading coefficient ends?",["down/down","up/up","down/up","up/down"],1,"Both ends rise."],
   ["P(A|B) denominator?",["P(A)","P(B)","P(A∩B)","P(A∪B)"],1,"Condition event B is denominator."]
  ]},
  C:{title:"Honors",subtitle:"Hidden structure and multi-step reasoning",questions:[
   ["Exactly one real root for x²+kx+9=0 requires?",["k=0","k²=18","k²=36","k=9"],2,"Discriminant k²−36 must equal 0."],
   ["If polynomial has zero 2 multiplicity 2 and zero −1 multiplicity 3, minimum degree?",["2","3","5","6"],2,"Degree at least sum of multiplicities 5."],
   ["A model with constant second differences is most likely?",["linear","quadratic","exponential","trig"],1,"Quadratics have constant second differences."],
   ["If log(x−2)=1 base10, x=?",["3","10","12","102"],2,"x−2=10, so x=12."],
   ["sinx=1/2 on [0,2π) gives?",["π/6 only","5π/6 only","π/6 and 5π/6","π/3 and 2π/3"],2,"Sine is positive in quadrants I and II."],
   ["If geometric a1=5,r=0.4, infinite sum?",["2","5","8.33","12.5"],2,"5/(1−0.4)=8.33..."],
   ["A rational function with denominator degree one greater than numerator degree has horizontal asymptote?",["y=0","y=1","none","x=0"],0,"Denominator dominates, so y→0."],
   ["If a function and inverse intersect, points lie on?",["x-axis","y-axis","y=x","y=−x"],2,"Inverse graphs reflect across y=x."],
   ["Which operation can lose x=0 as a valid case?",["adding x","multiplying by x","dividing by x","factoring x"],2,"Division by x assumes x≠0."],
   ["For y=−3sin(2(x−π/4))+1, amplitude?",["−3","3","2","1"],1,"Amplitude is absolute value |−3|=3."],
   ["If residual plot curves, linear model is?",["definitely perfect","missing nonlinear structure","causal","invalid data automatically"],1,"Patterned residuals indicate systematic structure remains."],
   ["A 50/50 equilibrium composition guarantees equal rates?",["yes always","no; rate constants and mechanism matter","only in gases","only at 25°C"],1,"Equilibrium is defined by equal forward/reverse rates, not equal amounts."]
  ]}
 },
 challenges:[
  ["Bridge","Function → Quadratic","A quadratic has vertex (3,−4) and passes through (5,4). Build its equation in vertex form.","y=2(x−3)²−4","Use y=a(x−3)²−4 and substitute (5,4): 4=4a−4, so a=2."],
  ["Bridge","Polynomial → Graph","Build the least-degree polynomial with zeros −2 (multiplicity 1) and 3 (multiplicity 2), leading coefficient 1.","(x+2)(x−3)²","Each zero becomes a factor and multiplicity becomes exponent."],
  ["Applied","Exponential → Log","A population triples every 4 hours from 180. When does it first exceed 50,000?","About 20.5 hours","Solve 180·3^(t/4)=50000 using logs, then interpret the inequality."],
  ["Applied","Rational → Domain → Graph","Analyze f(x)=(x²−9)/(x²−x−6): identify holes and vertical asymptotes.","Hole x=3; vertical asymptote x=−2","Factor numerator and denominator; x−3 cancels, x+2 does not."],
  ["Honors","Trig → Model","A Ferris wheel radius is 20 m, center 22 m high, period 40 s, rider starts at lowest point. Build a height model.","h(t)=22−20cos(πt/20)","Amplitude 20, midline 22, angular frequency 2π/40=π/20."],
  ["Honors","Sequence → Finance","A scholarship fund deposits $1200 first year and increases deposits by 8% annually. Find year-10 deposit.","$2,398.81 approximately","Geometric sequence: 1200(1.08)^9."],
  ["Challenge","Model Selection","Data show approximately constant ratios early, then level toward a ceiling. Why is a pure exponential model structurally weak?","Exponential growth has no finite upper asymptote; a saturation model is more appropriate.","Use qualitative structure, not curve-fitting alone."],
  ["Challenge","Error Detective","A student solves √(x+6)=x by squaring to x+6=x² and reports both quadratic roots. What must happen next?","Check both roots in the original radical equation and reject any extraneous root.","Squaring is not logically reversible without verification."]
 ]
};
for(const group of Object.values(window.LEARNING_ATLAS_MATH.practiceTests)){
 group.questions=group.questions.map(x=>({q:x[0],options:x[1],answer:x[2],why:x[3]}));
}
window.LEARNING_ATLAS_MATH.challenges=window.LEARNING_ATLAS_MATH.challenges.map(x=>({level:x[0],title:x[1],prompt:x[2],answer:x[3],reasoning:x[4]}));
})();