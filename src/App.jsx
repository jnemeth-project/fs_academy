import React, { useState } from 'react';
import { Trophy, Zap, CheckCircle, XCircle, Award, ChevronRight, RotateCcw, BookOpen, Brain, Lightbulb, ArrowRight, Sparkles, Star } from 'lucide-react';

const ForesightLearningApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [userProgress, setUserProgress] = useState({
    xp: 0,
    level: 1,
    completedModules: [],
    completedLearning: [],
    badges: []
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [learningMode, setLearningMode] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const products = [
    { id: 'fsx2020', name: 'FSX 2020', color: 'from-slate-700 to-slate-900', tagline: 'Premium Golf Simulation' },
    { id: 'fsxplay', name: 'FSX Play', color: 'from-slate-600 to-slate-800', tagline: 'Next-Gen Graphics' },
    { id: 'fairgrounds', name: 'Fairgrounds', color: 'from-emerald-700 to-emerald-900', tagline: 'Fun Mini-Games' },
    { id: 'fsxpro', name: 'FSX Pro', color: 'from-amber-600 to-amber-800', tagline: 'Professional Analysis' },
    { id: 'gcquad', name: 'GCQuad', color: 'from-rose-700 to-rose-900', tagline: 'Quadrascopic Precision' },
    { id: 'gc3', name: 'GC3', color: 'from-cyan-700 to-cyan-900', tagline: 'Portable Precision' },
    { id: 'falcon', name: 'Falcon', color: 'from-indigo-700 to-indigo-900', tagline: 'Compact Ceiling Mount' },
    { id: 'gchawk', name: 'GCHawk', color: 'from-violet-700 to-violet-900', tagline: 'Premium Ceiling Solution' }
  ];

  const learningContent = {
    fsx2020: [
      { title: 'What is FSX 2020?', text: 'FSX 2020 is Foresight Sports premium golf simulator software. The software can only be activated on ONE computer at a time. Customers get 12 free courses right out of the box.' },
      { title: 'Offline Hours Feature', text: 'FSX 2020 can work without internet for up to 720 in-game hours! Perfect for vacation homes or poor WiFi areas. To activate: Log into FSX Live, request offline hours, open FSX 2020 while connected, request again, then disconnect.' },
      { title: 'Moving to Another Computer', text: 'Since FSX 2020 only works on one computer at a time, customers need to move it. Process: Log into FSX Live online, go to My Account > Licenses, click Deactivate, then install on new computer.' },
      { title: 'System Requirements', text: 'Windows 10 64-bit or newer required. Intel i5/i7/i9 7th gen or newer. Minimum 8GB RAM, recommend 16GB. Nvidia GeForce RTX 3060 or better. Nvidia Quadro and AMD cards are NOT supported!' },
      { title: 'License Bundle', text: 'FSX 2020 typically includes FSX Pro (2 licenses) and Foresight Fairgrounds (1 license). These automatically unlock when FSX 2020 is activated - no separate codes needed!' },
      { title: 'License Error Fix', text: 'Most common issue: License validation error. Fix: Check internet, deactivate license in FSX Live online, reload FSX 2020 multiple times, update software, update Windows. This fixes 90% of issues!' }
    ],
    fsxplay: [
      { title: 'Meet FSX Play', text: 'FSX Play is next-generation simulation software with hyper-realistic graphics. It includes 25 FREE courses - more than double FSX 2020\'s 12 courses!' },
      { title: 'Internet Always Required', text: 'Unlike FSX 2020, FSX Play does NOT have offline mode. It needs stable internet at all times. Crucial for customer expectations! If unreliable internet, recommend FSX 2020 instead.' },
      { title: 'Course Compatibility', text: 'FSX Play has 25 free courses, but not all FSX 2020 courses work with FSX Play. New courses are mainly developed for FSX Play only. Always verify compatibility before purchase!' },
      { title: 'Camera Limitations', text: 'FSX Play supports cameras but with limits. Only Plug-and-Play cameras supported. High-resolution driver cameras NOT compatible. For professional analysis, recommend Swing Catalyst software!' },
      { title: 'Setup & Activation', text: 'Create/login to FSX Live account, activate with code, download from support site, install on Windows, launch and sign in. Important: License won\'t show automatically - must activate with code first!' },
      { title: 'Black Screen Fix', text: 'Most common call: Course loads to black screen! THE FIX: Make sure a HOLE is selected before starting session! Customers click play without selecting hole. This fixes 95% of cases!' }
    ],
    fairgrounds: [
      { title: 'What is Fairgrounds?', text: 'Foresight Fairgrounds is entertainment mini-games for your simulator. BEST PART: Comes FREE with FSX 2020! Think of it as party mode - perfect for friends and family.' },
      { title: 'Activation Simplified', text: 'NO separate activation needed! Fairgrounds automatically unlocks when FSX 2020 is activated. Just download, install, log in with same FSX Live credentials, and play!' },
      { title: 'Game Modes', text: 'Multiple modes: target practice with scoring, mini-golf challenges, accuracy competitions, distance challenges, multiplayer party modes. Quick, fun, accessible for all skill levels!' },
      { title: 'Auto-Connect Feature', text: 'Fairgrounds includes auto-connect that detects and connects to GCQuad, GC3, or compatible launch monitors automatically! Gets players into games faster.' },
      { title: 'Hitting Line Fix', text: 'Most common issue: Hitting line appears misaligned. THE FIX: Use Room Configuration Tool as Administrator. Close Fairgrounds, right-click Room Config Tool, run as Admin, adjust alignment, save and relaunch.' },
      { title: 'Entertainment Value', text: 'Perfect for family gatherings, corporate events, practice breaks, non-golfers. Everyone can play regardless of skill! When selling FSX 2020, mention Fairgrounds is included for major added value!' }
    ],
    fsxpro: [
      { title: 'FSX Pro Overview', text: 'FSX Pro is professional analysis and coaching tool for teaching pros, club fitters, and serious golfers. KEY BENEFIT: Comes FREE with FSX 2020 purchase!' },
      { title: 'Dual License System', text: 'You get 2 simultaneous licenses! Run on PC and iPad at same time. Coach uses PC while student views on tablet. Both licenses included - no extra purchase!' },
      { title: 'Cross-Platform', text: 'Works on Windows PC (full desktop) and iPad (FSX Pro Mobile app). Both run simultaneously. iPad version popular for teaching pros. IMPORTANT: Mac computers NOT supported. iPad yes, Mac no!' },
      { title: 'Local Storage Only', text: 'FSX Pro stores data locally. Each device has separate database. Sessions on PC stay on PC, iPad stays on iPad. Session data from other devices will not be viewable. Plan which device is primary for long-term storage!' },
      { title: 'Upgrade to Unlock Error', text: 'Most common issue: "Upgrade to Unlock" error. Cause: License not properly linked to FSX Live account. Fix: Verify FSX 2020 activated, log out/in, check license shows. Clean uninstall usually fixes it!' },
      { title: 'Professional Features', text: 'Side-by-side shot comparison, trend analysis, custom dashboards, session management, exportable reports. For pros and fitters, FSX Pro adds tremendous professional value FREE with the purchase of FSX 2020!' }
    ],
    gcquad: [
      { title: 'What Makes GCQuad Special', text: 'GCQuad is Foresight\'s flagship launch monitor. Quadrascopic Imaging - four high-speed cameras capture ball and club from multiple angles. Unlike radar systems that ESTIMATE, GCQuad MEASURES directly for tour-level accuracy!' },
      { title: 'Data Capture', text: 'Ball data: speed, launch, spin rate, spin axis, carry. Club data (paid add-on): clubhead speed, smash factor, attack angle, club path, face angle, impact location. Putting (paid add-on): skid, roll, post-impact. Modules often have trial periods!' },
      { title: 'The 45-Day Rule', text: 'GCQuad needs validation every 45 days with Foresight servers. Over 45 days = "Registration Expired" error. When expired: WiFi/Bluetooth stops, club data limits to 1-dot. Once validated, everything returns!' },
      { title: 'How to Validate', text: 'EASIEST: Use Foresight App on iOS/Android via Bluetooth. Install app, load the app, and connect the GCQuad via Bluetooth (you do not need to pair it in your iPad settings as the GCQuad has encrypted Bluetooth = BLE and it will only show up within the app), app auto-validates, done - good for 45 more days! Other methods: Connect to FSX software via USB/Ethernet.' },
      { title: 'LED Indicators', text: 'Blue light = Ball data only. Green light = Ball AND Club data. Yellow = Booting up. Purple = Putting mode. Quick troubleshooting: If customer expects club but sees blue, club module might not be activated!' },
      { title: 'Portability & Design', text: 'Built for indoor AND outdoor with weather-resistant construction. Swappable battery 6-8 hours runtime. Connectivity: USB-C, WiFi, Ethernet, Bluetooth (app only). Perfect for pros at range, bay, and course!' }
    ],
    gc3: [
      { title: 'GC3 Overview', text: 'GC3 is portable launch monitor with professional accuracy at more accessible price than GCQuad. Tour-level data that fits in golf bag! Uses three cameras (triscopic) instead of four, but still captures thousands of frames per second.' },
      { title: 'What GC3 Measures', text: 'Captures 11+ metrics: ball speed, launch angle, total spin, spin axis, club path, attack angle, carry distance, dispersion, azimuth. Covers everything from basic practice to professional club fitting!' },
      { title: 'Versatility', text: 'Works everywhere with no calibration: indoor simulator bays, outdoor range, on-course practice, fitting studios. Weighs only 5 lbs with 5-hour battery! Perfect for teaching pros and fitters who travel.' },
      { title: 'Built-in Touchscreen', text: 'Unlike GCQuad, GC3 has touchscreen display built in! Customers see shot data directly on device without computer or tablet. For advanced features, connect to FSX software via WiFi or USB-C.' },
      { title: 'WiFi-Direct Feature', text: 'GC3 has WiFi-Direct connection to internet routers. Customers can register device and update firmware WITHOUT computer! Just connect to WiFi network, validates and updates itself. Very user-friendly!' },
      { title: 'GC3S Subscription', text: 'GC3S is same hardware but subscription licensing instead of one-time purchase. KEY DIFFERENCE: No activation codes! Setup: Connect to internet, register to FSX Live, launch software and select Subscription, enter serial, access granted! For FSX 2020, need special Subscription Version download.' }
    ],
    falcon: [
      { title: 'Meet the Falcon', text: 'Falcon is Foresight\'s newest ceiling-mounted launch monitor. The "little brother" to GCHawk - same professional technology, much more compact. 43\" long, weighs only 26 lbs - roughly HALF the size of GCHawk!' },
      { title: 'Hitting Zone', text: 'Features 59\" x 28\" hitting zone accommodating all clubs from driver to putter. Both right AND left-handed golfers play without repositioning! Ideal for residential installations where space optimization matters.' },
      { title: 'Data Capabilities', text: 'Captures ball speed, launch angle, spin rates, spin axis, carry distance. Club data (paid add-on): head speed, smash factor, attack angle, club path, face angle, loft/lie, impact location. Always verify purchased modules!' },
      { title: 'LED Status', text: 'Flashing Blue = Looking for ball (ball-only). Steady Blue = Ready (ball-only). Flashing Green = Looking (ball & club). Steady Green = Ready (ball & club). Yellow = Booting. Steady Red = Error - try recalibrating first!' },
      { title: 'Software & Connectivity', text: 'Integrates with FSX Play, FSX 2020, FSX Pro, third-party like GSPro. Connectivity: WiFi, USB-C, Ethernet. Multiple methods provide flexibility. Lighter weight means easier installation with less demanding ceiling reinforcement!' },
      { title: 'Installation', text: 'Mounts to ceiling with precise positioning relative to hitting mat and screen. Because Falcon is 26 lbs vs GCHawk, ceiling reinforcement requirements are less demanding. Multiple connectivity options provide installation flexibility!' }
    ],
    gchawk: [
      { title: 'What is GCHawk?', text: 'GCHawk is flagship ceiling-mounted launch monitor - gold standard for high-end simulators and commercial facilities. Same Quadrascopic system as GCQuad - four cameras for tour-level accuracy. Hands-free overhead design never gets in way!' },
      { title: 'Premium Hitting Zone', text: 'Features 52\" x 30\" hitting area - one of largest in industry! Supports all clubs including putter. Both left and right-handed players without repositioning. Commercial-grade durability for high-volume use!' },
      { title: 'Multi-Sport Magic', text: 'GCHawk tracks GOLF and SOCCER! Uses Skill Drill software for soccer. Golf mode captures standard data. Soccer mode tracks ball speed, trajectory, accuracy. Incredibly valuable for multi-sport facilities!' },
      { title: 'Data Modules', text: 'Ball Data included (speed, launch, spin). Club Data paid add-on (club speed, path, face angle, impact). Putting paid add-on (skid, roll, post-impact). Important: Modules often have trial periods - after expiration need purchase!' },
      { title: 'LED & Connectivity', text: 'Same LED as other Foresight: Blue = ball-only, Green = ball & club, Yellow = booting, Red = error. Connectivity: USB-C, Ethernet, WiFi. CRITICAL: Default WiFi password is FSSPORTS - customers need this for mobile apps!' },
      { title: 'Software Integration', text: 'Works with all Foresight platforms: FSX Play, FSX 2020, FSX Pro, Fairgrounds. Mobile: Foresight App (iOS/Android) and FSX Pro Mobile for iPad. For mobile WiFi connection, remember password: FSSPORTS!' }
    ]
  };

  const quizData = {
    fsx2020: [
      { question: 'Customer wants offline FSX 2020 at cabin. What do you tell them?', answers: ['Internet always required', 'Can activate 720 offline hours', 'Only FSX Play works offline', 'Need special license'], correct: 1, explanation: 'FSX 2020 has offline mode! Activate 720 hours through FSX Live.' },
      { question: 'Customer bought used system. First step to activate?', answers: ['Download immediately', 'Previous owner deactivates license', 'Buy new license', 'Contact support'], correct: 1, explanation: 'Previous owner must deactivate from FSX Live. One computer at a time!' },
      { question: 'How many FREE courses with FSX 2020?', answers: ['5 courses', '12 courses', '25 courses', 'No free courses'], correct: 1, explanation: 'FSX 2020 includes 12 free courses. FSX Play has 25!' },
      { question: 'Which graphics cards NOT supported?', answers: ['Nvidia GeForce RTX', 'Nvidia Quadro and AMD', 'All Nvidia', 'Only integrated'], correct: 1, explanation: 'Nvidia Quadro and AMD NOT supported. Always check graphics!' }
    ],
    fsxplay: [
      { question: 'FSX Play black screen - quick fix?', answers: ['Reinstall', 'Update drivers', 'Select a HOLE first', 'Restart computer'], correct: 2, explanation: 'Most common fix! Select hole before launching session.' },
      { question: 'Can FSX Play work offline?', answers: ['Yes, 720 hours', 'Yes, 100 hours', 'No, requires internet always', 'Only on iPad'], correct: 2, explanation: 'FSX Play requires internet always - no offline mode.' },
      { question: 'Customer wants pro swing analysis. Recommend?', answers: ['Plug-and-play camera', 'High-res driver camera', 'Use Swing Catalyst instead', 'Not supported'], correct: 2, explanation: 'FSX Play is recreational. For pro analysis, use Swing Catalyst!' },
      { question: 'How many free courses in FSX Play?', answers: ['12 courses', '20 courses', '25 courses', '30 courses'], correct: 2, explanation: 'FSX Play includes 25 free courses - double FSX 2020!' }
    ],
    fairgrounds: [
      { question: 'Fairgrounds cost with FSX 2020?', answers: ['$299/year', '$99 one-time', 'Free - included', '$49/year'], correct: 2, explanation: 'Fairgrounds FREE with FSX 2020!' },
      { question: 'Hitting line misaligned - fix?', answers: ['Reinstall', 'Use Room Config Tool as Admin', 'Adjust monitor', 'Recalibrate launch monitor'], correct: 1, explanation: 'Use Room Config Tool as Administrator to adjust alignment!' },
      { question: 'Separate activation code needed?', answers: ['Yes, always', 'No, auto-unlocks with FSX 2020', 'Only first 30 days', 'Depends on license'], correct: 1, explanation: 'No separate code! Auto-unlocks when FSX 2020 activated.' },
      { question: 'Fairgrounds best for?', answers: ['Professional coaching', 'Tournament only', 'Entertainment and mini-games', 'Club fitting'], correct: 2, explanation: 'Entertainment and mini-games - the party mode!' }
    ],
    fsxpro: [
      { question: 'How many devices run FSX Pro simultaneously?', answers: ['One device', 'Two devices', 'Three devices', 'Unlimited'], correct: 1, explanation: 'FSX Pro includes 2 simultaneous licenses!' },
      { question: '\"Upgrade to Unlock\" error - likely cause?', answers: ['Trial expired', 'License not linked to account', 'Wrong password', 'Needs update'], correct: 1, explanation: 'License not properly linked to FSX Live account. Log out/in or clean reinstall!' },
      { question: 'Does FSX Pro sync between PC and iPad?', answers: ['Yes, cloud sync', 'No, local storage only', 'Only on same WiFi', 'Once per day'], correct: 1, explanation: 'Local storage only - no cloud sync. Each device separate database!' },
      { question: 'Can FSX Pro run on Mac?', answers: ['Yes, Mac and Windows', 'No, but works on iPad', 'Only M1/M2 Macs', 'With special license'], correct: 1, explanation: 'Mac NOT supported. iPad yes, Mac no!' }
    ],
    gcquad: [
      { question: 'GCQuad \"Registration Expired\" - what happened?', answers: ['Need new subscription', 'Device broken', 'Not validated in 45+ days', 'Warranty expired'], correct: 2, explanation: 'GCQuad needs validation every 45 days!' },
      { question: 'LED color for ball AND club ready?', answers: ['Blue', 'Green', 'Yellow', 'Purple'], correct: 1, explanation: 'Green = Ball & Club ready!' },
      { question: 'Easiest way to validate GCQuad?', answers: ['USB to FSX 2020', 'Foresight App via Bluetooth', 'Email support', 'Ethernet to PC'], correct: 1, explanation: 'Foresight App via Bluetooth is quickest!' },
      { question: 'When validation expires, what works?', answers: ['Everything normal', 'Only USB connection', 'Only WiFi', 'Nothing works'], correct: 1, explanation: 'When expired: WiFi/Bluetooth stops, but USB still works!' }
    ],
    gc3: [
      { question: 'Best feature selling GC3 over GCQuad?', answers: ['Cheaper', 'More accurate', 'Fits in golf bag - portable!', 'Better battery'], correct: 2, explanation: 'Portability! Weighs ~5 lbs, fits in golf bag.' },
      { question: 'How does GC3S differ from GC3?', answers: ['Better cameras', 'Subscription - no activation codes', 'Outdoor only', 'No difference'], correct: 1, explanation: 'GC3S uses subscription licensing!' },
      { question: 'What makes GC3 unique vs GCQuad?', answers: ['Four cameras', 'Built-in touchscreen', 'Longer battery', 'Weather-resistant'], correct: 1, explanation: 'GC3 has built-in touchscreen display!' },
      { question: 'Update GC3 firmware without computer?', answers: ['No, computer required', 'Yes, WiFi-Direct to router', 'Only iPad', 'Only Bluetooth'], correct: 1, explanation: 'WiFi-Direct lets it connect to routers for updates!' }
    ],
    falcon: [
      { question: 'Falcon vs GCHawk size difference?', answers: ['Same size', 'Slightly smaller', 'About half size and weight', 'Twice as large'], correct: 2, explanation: 'Falcon is 43\" long, 26 lbs - HALF the size of GCHawk!' },
      { question: 'Falcon shows steady red LED - what to do?', answers: ['Device needs replacing', 'Try recalibrating first', 'Contact support now', 'Restart computer'], correct: 1, explanation: 'Steady red = error. First step: try recalibrating!' },
      { question: 'LED color for Falcon ready in ball & club?', answers: ['Flashing blue', 'Steady blue', 'Flashing green', 'Steady green'], correct: 3, explanation: 'Steady green = ready in ball & club mode!' },
      { question: 'Falcon hitting zone size?', answers: ['52\" x 30\"', '59\" x 28\"', '48\" x 26\"', '60\" x 32\"'], correct: 1, explanation: 'Falcon has 59\" x 28\" hitting zone!' }
    ],
    gchawk: [
      { question: 'GCHawk WiFi password?', answers: ['GCHAWK2024', 'FSSPORTS', 'foresight123', 'No password'], correct: 1, explanation: 'Default WiFi password is FSSPORTS!' },
      { question: 'What makes GCHawk unique?', answers: ['Most accurate', 'Tracks golf AND soccer', 'Longest battery', 'Smallest size'], correct: 1, explanation: 'GCHawk tracks both golf and soccer!' },
      { question: 'GCHawk hitting area size?', answers: ['48\" x 26\"', '59\" x 28\"', '52\" x 30\"', '60\" x 35\"'], correct: 2, explanation: 'GCHawk has 52\" x 30\" hitting area!' },
      { question: 'Customer has club data - expected LED?', answers: ['Blue', 'Green', 'Yellow', 'Purple'], correct: 1, explanation: 'Green = Ball & Club mode!' }
    ]
  };

  const handleStartLearning = (productId) => {
    setSelectedProduct(productId);
    setLearningMode(true);
    setCurrentLesson(0);
    setCurrentView('learning');
  };

  const handleStartQuiz = (productId) => {
    setSelectedProduct(productId);
    setQuizMode(true);
    setCurrentQuizQuestion(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCurrentView('quiz');
  };

  const handleNextLesson = () => {
    const lessons = learningContent[selectedProduct];
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setUserProgress(prev => ({ ...prev, xp: prev.xp + 10 }));
    } else {
      if (!userProgress.completedLearning.includes(selectedProduct)) {
        setUserProgress(prev => ({
          ...prev,
          xp: prev.xp + 50,
          completedLearning: [...prev.completedLearning, selectedProduct]
        }));
      }
      setLearningMode(false);
      setCurrentView('productMenu');
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    const quiz = quizData[selectedProduct];
    if (answerIndex === quiz[currentQuizQuestion].correct) {
      setQuizScore(quizScore + 1);
      setUserProgress(prev => ({ ...prev, xp: prev.xp + 25 }));
    }
  };

  const handleNextQuestion = () => {
    const quiz = quizData[selectedProduct];
    if (currentQuizQuestion < quiz.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      const percentage = (quizScore / quiz.length) * 100;
      if (percentage >= 80 && !userProgress.badges.includes(selectedProduct)) {
        setUserProgress(prev => ({
          ...prev,
          badges: [...prev.badges, selectedProduct],
          completedModules: [...prev.completedModules, selectedProduct],
          xp: prev.xp + 100
        }));
      }
      setQuizMode(false);
      setCurrentView('results');
    }
  };

  if (currentView === 'learning') {
    const lessons = learningContent[selectedProduct];
    const lesson = lessons[currentLesson];
    const product = products.find(p => p.id === selectedProduct);
    const progress = ((currentLesson + 1) / lessons.length) * 100;

    return (
      <div className="min-h-screen bg-black p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[2rem] p-6 mb-6 shadow-2xl border border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-light tracking-widest text-zinc-400 uppercase">Lesson {currentLesson + 1} of {lessons.length}</span>
              <span className="text-xs font-medium tracking-widest text-emerald-400 uppercase">+10 XP</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-1.5 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(52,211,153,0.3)]" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className={`bg-gradient-to-br ${product.color} rounded-[2rem] p-12 mb-6 text-white shadow-2xl relative overflow-hidden`}>
            <h1 className="text-4xl font-light tracking-tight mb-3 drop-shadow-lg">{product.name}</h1>
            <h2 className="text-xl font-light opacity-80 tracking-wide">{lesson.title}</h2>
          </div>

          <div className="bg-white rounded-[2rem] p-12 shadow-xl border border-zinc-100">
            <p className="text-zinc-600 text-base leading-relaxed mb-8 font-light">{lesson.text}</p>

            <div className="flex gap-4 pt-8 border-t border-zinc-100">
              {currentLesson > 0 && (
                <button onClick={() => setCurrentLesson(currentLesson - 1)} className="px-8 py-3 bg-zinc-50 text-zinc-900 rounded-xl font-medium border border-zinc-200 hover:bg-zinc-100 hover:shadow-md transition-all">
                  Previous
                </button>
              )}
              <button onClick={handleNextLesson} className="flex-1 bg-gradient-to-b from-zinc-800 to-black text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 tracking-wide">
                {currentLesson < lessons.length - 1 ? (
                  <>Next Lesson <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>Complete Module <Sparkles className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'quiz') {
    const quiz = quizData[selectedProduct];
    const question = quiz[currentQuizQuestion];
    const isCorrect = selectedAnswer === question.correct;

    return (
      <div className="min-h-screen bg-black p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-zinc-900 rounded-[2rem] p-12 shadow-2xl border border-zinc-800">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs font-light tracking-widest text-zinc-500 uppercase">Question {currentQuizQuestion + 1} of {quiz.length}</span>
            <span className="text-xs font-medium tracking-widest text-emerald-500 uppercase">Score: {quizScore}/{quiz.length}</span>
          </div>

          <h2 className="text-2xl font-light mb-8 text-white leading-relaxed tracking-tight">{question.question}</h2>

          <div className="space-y-3 mb-8">
            {question.answers.map((answer, idx) => (
              <button
                key={idx}
                onClick={() => !showFeedback && handleAnswerSelect(idx)}
                disabled={showFeedback}
                className={`w-full p-5 rounded-xl text-left font-light transition-all border ${
                  showFeedback
                    ? idx === question.correct
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                      : idx === selectedAnswer
                      ? 'bg-rose-500/10 border-rose-500 text-rose-400'
                      : 'bg-zinc-800/50 text-zinc-600 border-zinc-900'
                    : selectedAnswer === idx
                    ? 'bg-white text-black border-white shadow-xl'
                    : 'bg-zinc-800 hover:bg-zinc-700/50 text-white border-zinc-800 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center gap-3">
                  {showFeedback && idx === question.correct && <CheckCircle className="w-5 h-5" />}
                  {showFeedback && idx === selectedAnswer && idx !== question.correct && <XCircle className="w-5 h-5" />}
                  <span>{answer}</span>
                </div>
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className={`p-6 rounded-xl mb-8 border-l-2 ${isCorrect ? 'bg-emerald-500/5 border-emerald-500' : 'bg-cyan-500/5 border-cyan-500'}`}>
                <p className={`font-medium mb-1 text-sm ${isCorrect ? 'text-emerald-400' : 'text-cyan-400'}`}>
                  {isCorrect ? 'Correct!' : 'Knowledge Check'}
                </p>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{question.explanation}</p>
              </div>

              <button onClick={handleNextQuestion} className="w-full bg-white text-black py-4 rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm tracking-wide">
                {currentQuizQuestion < quiz.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentView === 'results') {
    const quiz = quizData[selectedProduct];
    const percentage = Math.round((quizScore / quiz.length) * 100);
    const product = products.find(p => p.id === selectedProduct);

    return (
      <div className="min-h-screen bg-black p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-zinc-900 rounded-[2rem] p-12 shadow-2xl text-center border border-zinc-800">
          <div className="mb-8 inline-block">
            {percentage >= 80 ? (
              <Trophy className="w-16 h-16 text-amber-400 mx-auto drop-shadow-lg" />
            ) : (
              <Award className="w-16 h-16 text-zinc-400 mx-auto" />
            )}
          </div>

          <h1 className="text-4xl font-light mb-2 text-white tracking-tight">
            {percentage >= 80 ? 'Module Mastered' : 'Module Complete'}
          </h1>
          <p className="text-lg text-zinc-500 mb-10 font-light tracking-wide">You scored {quizScore} / {quiz.length} ({percentage}%)</p>

          {percentage >= 80 && (
            <div className="bg-zinc-800/50 border border-amber-500/20 rounded-2xl p-8 mb-10 shadow-inner">
              <Star className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <p className="font-medium text-amber-400 tracking-wide uppercase text-xs">Expert Badge Unlocked</p>
              <p className="text-white text-lg font-light mt-1">{product.name} Specialist</p>
            </div>
          )}

          <div className="flex gap-4">
            <button onClick={() => handleStartQuiz(selectedProduct)} className="flex-1 bg-zinc-800 text-white py-4 rounded-xl font-medium hover:bg-zinc-700 transition-all text-sm">
              Retake Quiz
            </button>
            <button onClick={() => setCurrentView('home')} className="flex-1 bg-white text-black py-4 rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm">
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'productMenu') {
    const product = products.find(p => p.id === selectedProduct);
    const hasCompletedLearning = userProgress.completedLearning.includes(selectedProduct);

    return (
      <div className="min-h-screen bg-black p-8">
        <button onClick={() => setCurrentView('home')} className="mb-12 text-zinc-500 hover:text-white flex items-center gap-2 font-light text-sm tracking-widest uppercase transition-all">
          <ChevronRight className="w-4 h-4 rotate-180" /> Back
        </button>

        <div className={`bg-gradient-to-br ${product.color} rounded-[2rem] p-16 mb-12 text-white text-center shadow-2xl border border-white/5`}>
          <h1 className="text-5xl font-light mb-4 tracking-tight">{product.name}</h1>
          <p className="text-xl font-light opacity-60 tracking-wide">{product.tagline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <button onClick={() => handleStartLearning(selectedProduct)} className="bg-zinc-900 rounded-[2rem] p-10 shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-all text-left relative group border border-zinc-800">
            {hasCompletedLearning && <CheckCircle className="w-6 h-6 text-emerald-400 absolute top-10 right-10" />}
            <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-light text-white mb-2">Training</h3>
            <p className="text-zinc-500 mb-6 font-light text-sm">Review core concepts and features.</p>
            <div className="flex items-center gap-2 text-zinc-600 font-medium text-[10px] tracking-widest uppercase">
              <Zap className="w-3 h-3" />
              <span>Earn 50 XP</span>
            </div>
          </button>

          <button onClick={() => hasCompletedLearning && handleStartQuiz(selectedProduct)} disabled={!hasCompletedLearning} className={`rounded-[2rem] p-10 shadow-2xl text-left relative group border ${hasCompletedLearning ? 'bg-zinc-900 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:-translate-y-1 border-zinc-800 cursor-pointer' : 'bg-zinc-950 border-zinc-900 cursor-not-allowed opacity-40'}`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${hasCompletedLearning ? 'bg-white/5 group-hover:bg-white/10' : 'bg-zinc-900'}`}>
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-light text-white mb-2">Certification</h3>
            <p className="text-zinc-500 mb-6 font-light text-sm">Pass the quiz to earn your specialist badge.</p>
            <div className="flex items-center gap-2 text-zinc-600 font-medium text-[10px] tracking-widest uppercase">
              <Zap className="w-3 h-3" />
              <span>Earn 100 XP</span>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900/40 backdrop-blur-3xl rounded-[2.5rem] p-10 mb-12 shadow-2xl border border-zinc-800/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="py-2">
              <h1 className="text-5xl font-light tracking-tighter mb-2 leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-sm">
                  Foresight Sports Europe Academy
                </span>
              </h1>
              <p className="text-zinc-500 text-lg font-light tracking-wide">Premium Product Mastery & Certification</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-light text-white mb-1 tracking-tight">Lvl {userProgress.level}</div>
              <div className="text-[10px] text-emerald-400/80 mb-3 font-medium tracking-[0.3em] uppercase">{userProgress.xp} XP Earned</div>
              <div className="w-48 bg-zinc-800 rounded-full h-1 shadow-inner overflow-hidden border border-zinc-800">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{ width: `${(userProgress.xp % 100)}%` }} />
              </div>
            </div>
          </div>

          {userProgress.badges.length > 0 && (
            <div className="mt-8 pt-8 border-t border-zinc-800/40">
              <div className="flex gap-3 flex-wrap">
                {userProgress.badges.map((badge, idx) => (
                  <span key={idx} className="bg-zinc-800/50 border border-amber-500/20 text-amber-500/80 px-4 py-1.5 rounded-full text-[10px] font-medium flex items-center gap-2 tracking-widest uppercase shadow-lg">
                    <Star className="w-3 h-3 fill-amber-500" />
                    {products.find(p => p.id === badge)?.name} Specialist
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map(product => (
            <div key={product.id} onClick={() => { setSelectedProduct(product.id); setCurrentView('productMenu'); }} className={`bg-gradient-to-br ${product.color} rounded-[2rem] p-8 cursor-pointer transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] hover:shadow-white/5 border border-white/5 active:scale-[0.98] group relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-3xl font-light text-white mb-1 tracking-tight drop-shadow-md">{product.name}</h3>
              <p className="text-white/60 text-xs font-light tracking-wide mb-8">{product.tagline}</p>
              <div className="flex items-center gap-1 text-white/40 group-hover:text-white transition-colors">
                 <span className="text-[10px] font-medium uppercase tracking-widest">Open Module</span>
                 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/40 rounded-[2.5rem] p-10 border border-zinc-800/50 shadow-2xl">
          <h3 className="text-lg font-light mb-8 flex items-center gap-3 text-white tracking-widest uppercase">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            Academy Guidelines
          </h3>
          <ul className="grid md:grid-cols-2 gap-6 text-zinc-500 font-light text-sm leading-relaxed tracking-wide">
            <li className="flex gap-4">01. Complete the interactive Training Module for each product first.</li>
            <li className="flex gap-4">02. The Certification Quiz requires a 100% score to earn a specialist badge.</li>
            <li className="flex gap-4">03. XP is awarded for all learning activities and successful quizzes.</li>
            <li className="flex gap-4">04. Maintain your certification by reviewing new features as they release.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForesightLearningApp;
