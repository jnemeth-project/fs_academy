import React, { useState, useEffect } from 'react';
import { Trophy, Zap, CheckCircle, XCircle, Award, ChevronRight, RotateCcw, BookOpen, Brain, Lightbulb, ArrowRight, Sparkles, Star, Home } from 'lucide-react';

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
  
  // Animation states
  const [showHeader, setShowHeader] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);

  useEffect(() => {
    // Animation sequence
    const headerTimer = setTimeout(() => setShowHeader(true), 500);
    const buttonsTimer = setTimeout(() => setShowButtons(true), 1200);
    const blurTimer = setTimeout(() => setBlurBackground(true), 2000);
    
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(buttonsTimer);
      clearTimeout(blurTimer);
    };
  }, []);

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
      { title: 'What is FSX 2020?', text: 'FSX 2020 is Foresight Sport\'s premium golf simulator software. The software can only be activated on ONE computer at a time. Customers get 12 free courses right out of the box.' },
      { title: 'Offline Hours Feature', text: 'FSX 2020 can work without internet for up to 720 in-game hours! Perfect for vacation homes or poor WiFi areas. To activate: Log into FSX Live, request offline hours, open FSX 2020 while connected, request again, then disconnect.' },
      { title: 'Moving to Another Computer', text: 'Since FSX 2020 only works on one computer at a time, customers need to move it. Process: Log into FSX Live online, go to My Account > Licenses, click Deactivate, then install on a new computer and reactivate with the same details.' },
      { title: 'System Requirements', text: 'Windows 10 64-bit or newer required. Intel i5/i7/i9 7th gen or newer. Minimum 8GB RAM, recommend 16GB. NVIDIA GeForce RTX 3060 or better. NVIDIA Quadro and AMD cards are NOT supported!' },
      { title: 'License Bundle', text: 'FSX 2020 typically includes FSX Pro (2 licenses) and Foresight Fairgrounds (1 license) unless FSX 2020 was purchased as a standalone code. FSX Pro and Fairgrounds automatically unlock when FSX 2020 is activated - no separate codes needed! Just install these apps, log in with your FSX 2020 Username and Password and you should be good to go!' },
      { title: 'License Error Fix', text: 'Most common issue: License validation error. Fix: Check the internet, deactivate the license in FSX Live online, reload FSX 2020 a few times, update software, and update Windows. This fixes 90% of issues!' }
    ],
    fsxplay: [
      { title: 'Meet FSX Play', text: 'FSX Play is next-generation simulation software with hyper-realistic graphics. It includes 25 FREE courses - more than double FSX 2020\'s 12 courses!' },
      { title: 'Internet Is Always Required', text: 'Unlike FSX 2020, FSX Play does NOT have offline mode. It needs stable internet at all times.' },
      { title: 'Course Compatibility', text: 'FSX Play has 25 free courses, but not all FSX 2020 courses work with FSX Play. New courses are mainly developed for FSX Play only. Always verify compatibility before purchase!' },
      { title: 'Camera Limitations', text: 'FSX Play supports cameras but with limits. Only Plug-and-Play cameras are supported. High-resolution driver cameras are NOT compatible. For professional analysis, we recommend the Swing Catalyst software!' },
      { title: 'Setup & Activation', text: 'Create/login to FSX Live account, activate with code, download from support site, install on Windows, launch and sign in. Important: The license won\'t show under your FSX Live account automatically - you must activate with the login details and activation code first!' },
      { title: 'Black Screen Fix', text: 'Most common call: Course loads to black screen! THE FIX: Make sure a HOLE is selected before starting the session! Customers click play without selecting the hole. This fixes 95% of cases!' },
      { title: 'Course Downloads', text: 'Courses do not play instantly after activation. Users must download courses from the Library before they become available to play.' },
      { title: 'Swing Camera Version Requirement', text: 'Swing Camera is ONLY supported in FSX Play version 1.10.0.10 or newer. Earlier versions will not show Swing Camera options.' },
      { title: 'Swing Camera Enable Path', text: 'To enable Swing Camera: Go to Settings in them Main Menu → Swing Camera → Click ENABLE → Assign camera from the dropdown. You must do this from the main menu, not from the open session settings.' },
      { title: 'Why is the purchased license not showing in your FSX Live Account?', text: 'Licenses do NOT appear automatically after purchase. Make sure you activate your FSX Play license within the software using your FSX Live username, Password, and the FSX Play activation code. After a successful activation, the license should appear in your FSX Live account online. (Hint: You must use the same FSX Live Username and Password for the activation that you used for the FSX Live account login.' }
    ],
    fairgrounds: [
      { title: 'What is Fairgrounds?', text: 'Foresight Fairgrounds is an entertainment mini-games for your simulator. BEST PART: Comes FREE with FSX 2020! Think of it as party mode - perfect for friends and family.' },
      { title: 'Activation Simplified', text: 'NO separate activation needed! Fairgrounds automatically unlocks when FSX 2020 is activated. Just download, install, log in with the same FSX Live credentials, and play!' },
      { title: 'Game Modes', text: 'Multiple modes: target practice with scoring, mini-golf challenges, accuracy competitions, distance challenges, multiplayer party modes. Quick, fun, accessible for all skill levels!' },
      { title: 'Auto-Connect Feature', text: 'Fairgrounds includes auto-connect that detects and connects to GCQuad, GC3, or compatible launch monitors automatically! Gets players into games faster.' },
      { title: 'Hitting Line Fix', text: 'Most common issue: Hitting line appears misaligned. THE FIX: Use the Room Configuration Tool as Administrator. Close Fairgrounds, right-click Room Config Tool, run as Admin, adjust alignment, save and relaunch.' },
      { title: 'Entertainment Value', text: 'Perfect for family gatherings, corporate events, practice breaks, non-golfers. Everyone can play regardless of skill!' }
    ],
    fsxpro: [
      { title: 'FSX Pro Overview', text: 'FSX Pro is a professional analysis and coaching tool for teaching pros, club fitters, and serious golfers. KEY BENEFIT: Comes FREE with FSX 2020 purchase!' },
      { title: 'Dual License System', text: 'You get 2 simultaneous licenses! Run on PC and iPad at the same time. Coach uses PC while student views on tablet.' },
      { title: 'Cross-Platform', text: 'Works on Windows PC (full desktop) and iPad (FSX Pro Mobile app). Both run simultaneously. The iPad version is popular for teaching pros. IMPORTANT: Mac computers are NOT supported. iPad yes, Mac no!' },
      { title: 'Local Storage Only', text: 'FSX Pro stores data locally. Each device has a separate database. Sessions on PC stay on PC, iPad stays on iPad. Session data from other devices will not be viewable. Plan which device is primary for long-term storage!' },
      { title: 'Upgrade to Unlock Error', text: 'Most common issue: "Upgrade to Unlock" error. Cause: License not properly linked to FSX Live account. Fix: Verify FSX 2020 is activated, log out/in, and check the license shows. Clean uninstall usually fixes it!' },
      { title: 'Professional Features', text: 'Side-by-side shot comparison, trend analysis, custom dashboards, session management, exportable reports. For pros and fitters, FSX Pro adds tremendous professional value FREE with the purchase of FSX 2020!' }
    ],
    gcquad: [
      { title: 'What Makes GCQuad Special', text: 'GCQuad is Foresight\'s flagship launch monitor. Quadrascopic Imaging - four high-speed cameras capture ball and club from multiple angles. Unlike radar systems that ESTIMATE, GCQuad MEASURES directly for tour-level accuracy!' },
      { title: 'Data Capture', text: 'Ball data: speed, launch, spin rate, spin axis, carry. Club data (paid add-on): clubhead speed, smash factor, attack angle, club path, face angle, impact location. Putting (paid add-on): skid, roll, post-impact. Modules often have trial periods!' },
      { title: 'The 45-Day Rule', text: 'GCQuad needs validation every 45 days with Foresight servers. Over 45 days = "Registration Expired" error. When expired: WiFi/Bluetooth stops, club data limits to 1-dot. Once validated, everything returns!' },
      { title: 'How to Validate', text: 'EASIEST: Use Foresight App on iOS/Android via Bluetooth. Install the app, load the app, and connect the GCQuad via Bluetooth (you do not need to pair it in your iPad settings as the GCQuad has encrypted Bluetooth = BLE and it will only show up within the app), app auto-validates, done - good for 45 more days! Other methods: Connect to FSX software via USB/Ethernet.' },
      { title: 'LED Indicators', text: 'Blue light = Ball data only. Green light = Ball AND Club data. Yellow = Booting up. Purple = Putting mode. Quick troubleshooting: If the customer expects a club but sees blue, the club module might not be activated!' },
      { title: 'Portability & Design', text: 'Built for indoor AND outdoor with weather-resistant construction. Swappable battery, 6-8 hours runtime. Connectivity: USB-C, WiFi, Ethernet, Bluetooth (app only). Perfect for pros at range, bay, and course!' }
    ],
    gc3: [
      { title: 'GC3 Overview', text: 'GC3 is a portable launch monitor with professional accuracy at a more accessible price than GCQuad. Tour-level data that fits in a golf bag! Uses three cameras (triscopic) instead of four, but still captures thousands of frames per second.' },
      { title: 'What GC3 Measures', text: 'Captures 11+ metrics: ball speed, launch angle, total spin, spin axis, club path, attack angle, carry distance, dispersion, azimuth. Covers everything from basic practice to professional club fitting!' },
      { title: 'Versatility', text: 'Works everywhere with no calibration: indoor simulator bays, outdoor range, on-course practice, fitting studios. Weighs only 5 lbs with a 5-hour battery! Perfect for teaching pros and fitters who travel.' },
      { title: 'Built-in Touchscreen', text: 'Unlike GCQuad, GC3 has a touchscreen display built in! Customers see shot data directly on the device without a computer or tablet. For advanced features, connect to FSX software via WiFi or USB-C.' },
      { title: 'WiFi-Direct Feature', text: 'GC3 has WiFi-Direct connection to internet routers. Customers can register a device and update firmware WITHOUT a computer! Just connect to WiFi network, validates and updates itself. Very user-friendly!' },
      { title: 'GC3S Subscription', text: 'GC3S is the same hardware but has subscription licensing instead of a one-time purchase. KEY DIFFERENCE: No activation codes! Setup: Connect to the internet, register to FSX Live, launch software and select Subscription, enter serial, access granted! For FSX 2020, need special Subscription Version download.' }
    ],
    falcon: [
      { title: 'Meet the Falcon', text: 'Falcon is Foresight\'s newest ceiling-mounted launch monitor. The "little brother" to GCHawk - same professional technology, much more compact. 43" long, weighs only 26 lbs - roughly HALF the size of GCHawk!' },
      { title: 'Hitting Zone', text: 'Features 59" x 28" hitting zone accommodating all clubs from driver to putter. Both right AND left-handed golfers play without repositioning! Ideal for residential installations where space optimisation matters.' },
      { title: 'Data Capabilities', text: 'Captures ball speed, launch angle, spin rates, spin axis, carry distance. Club data (paid add-on): head speed, smash factor, attack angle, club path, face angle, loft/lie, impact location. Always verify purchased modules!' },
      { title: 'LED Status', text: 'Flashing Blue = Looking for ball (ball-only). Steady Blue = Ready (ball-only). Flashing Green = Looking (ball & club). Steady Green = Ready (ball & club). Yellow = Booting. Steady Red = Error - try firmware update first!' },
      { title: 'Software & Connectivity', text: 'Integrates with FSX Play, FSX 2020, FSX Pro, third-party like GSPro. Connectivity: WiFi, USB-C, Ethernet. Multiple methods provide flexibility. Lighter weight means easier installation with less demanding ceiling reinforcement!' },
      { title: 'Installation', text: 'Mounts to ceiling with precise positioning relative to the hitting mat and screen. Because Falcon is 26 lbs vs GCHawk, ceiling reinforcement requirements are less demanding. Multiple connectivity options provide installation flexibility!' },
      { title: 'Missing Club Data Fix', text: 'If Falcon picks up ball data but not club data: First, reapply reflective markers using the official marker application guide. Second, update Falcon firmware from the support website. Third, recalibrate the Falcon. Fourth, connect the Falcon to the Foresight Mobile App and confirm that the club has not been turned off by accident. If the issue persists, contact support with: Has club data worked before? Are multiple clubs affected? Can multiple people replicate? Can you replicate in multiple software? Falcon firmware version and serial number.' },
      { title: 'Reflective Markers', text: 'Reflective markers are essential for club data tracking. If club data is missing, the first step is always to reapply markers following the official application guide. Markers must be properly positioned on clubs for accurate tracking. When troubleshooting, always check if markers are correctly applied before moving to firmware or calibration solutions.' },
      { title: 'Firmware Updates', text: 'Keeping Falcon firmware up to date is critical for optimal performance and can resolve connectivity and data tracking issues. Latest firmware version is published on the Hardware Support website at support.foresightsports.com/support/hardware. Regular firmware updates ensure compatibility with the latest software versions and fix known issues. Always update firmware when troubleshooting connection or data problems.' },
      { title: 'When Recalibration Is Needed', text: 'Recalibration may be required if: Device fails to lock or intermittently loses lock, launch or club data is missing or inconsistent, device was serviced, repositioned or remounted, hitting area or turf surface has changed. Falcon and GCHawk are ceiling-mounted monitors that rely on camera calibration to accurately track balls and clubs. Regular recalibration ensures optimal performance.' },
      { title: 'Recalibration Step 1: Delete Old Files', text: 'To recalibrate, first delete old calibration files: Open File Explorer, type %AppData% in the address bar and press Enter. In the Roaming folder, click the up arrow to go up one level. Open LocalLow → ForesightSports → ForesightOverheadCalibration. Delete all .json files in this folder that start with CreationDate. Empty the Recycle Bin to complete removal. This clears old calibration data for a fresh start.' },
      { title: 'Recalibration Step 2: Calibration Tool', text: 'Download latest Overhead Calibration Tool from support site (support.foresightsports.com/support/hardware/falcon). Launch the tool and follow on-screen prompts. Before starting, ensure the hitting area is clear of reflective objects, and lighting is consistent. Using the calibration wand, move through the requested positions within the hitting area as directed. Keep the wand visible to cameras and move at a steady pace. Let the tool run to completion and save the new calibration.' },
      { title: 'Calibration Best Practices', text: 'During calibration, the hitting area must be clear of reflective objects to avoid interference with camera tracking. Lighting should be consistent throughout the process. Move the calibration wand at a steady pace, waist height at a 45 degree angle through all requested positions, keeping it visible to all four cameras. After calibration completes, restart the device and test ball/club tracking to confirm lock and accuracy are restored. Watch Falcon Calibration Video guide for visual instructions.' },
      { title: 'Support Contact Information', text: 'If troubleshooting steps do not resolve your issue, contact support@foresightsports.eu with detailed information: What troubleshooting steps have you tried? Has the feature worked before? Can multiple people replicate the issue? What software versions are you testing? Include Falcon firmware version and serial number. Providing comprehensive details helps support team diagnose and resolve issues faster. Video guides and documentation available at support.foresightsports.com.' }
    ],
    gchawk: [
      { title: 'What is GCHawk?', text: 'GCHawk is a flagship ceiling-mounted launch monitor - gold standard for high-end simulators and commercial facilities. Same Quadrascopic system as GCQuad - four cameras for tour-level accuracy. Hands-free overhead design never gets in way!' },
      { title: 'Premium Hitting Zone', text: 'Features 52" x 30" hitting area - one of the largest in industry! Supports all clubs, including putter. Both left and right-handed players without repositioning. Commercial-grade durability for high-volume use!' },
      { title: 'Multi-Sport Magic', text: 'GCHawk tracks GOLF and SOCCER! Uses Skill Drill software for soccer. Golf mode captures standard data. Soccer mode tracks ball speed, trajectory,and  accuracy. Incredibly valuable for multi-sport facilities!' },
      { title: 'Data Modules', text: 'Ball Data included (speed, launch, spin). Club Data paid add-on (club speed, path, face angle, impact). Putting paid add-on (skid, roll, post-impact). Important: Modules often have trial periods - after expiration, you need to purchase it, or validate your device to activate your full module!' },
      { title: 'LED & Connectivity', text: 'Same LED as other Foresight: Blue = ball-only, Green = ball & club, Yellow = booting, Red = error. Connectivity: USB-C, Ethernet, WiFi. CRITICAL: Default WiFi password is FSSPORTS - customers need this for mobile apps!' },
      { title: 'Software Integration', text: 'Works with all Foresight platforms: FSX Play, FSX 2020, FSX Pro, Fairgrounds. Mobile: Foresight App (iOS/Android) and FSX Pro Mobile for iPad. For mobile WiFi connection, remember password: FSSPORTS!' }
    ]
  };

  const quizData = {
    fsx2020: [
      { question: 'Customer wants offline FSX 2020 at their cabin. What do you tell them?', answers: ['Internet is always required', 'They can activate 720 offline hours', 'Only FSX Play works offline', 'Need special license'], correct: 1, explanation: 'FSX 2020 has offline mode! Activate 720 hours through FSX Live.' },
      { question: 'Customer bought a used system. What is the first step to activate?', answers: ['Download immediately', 'Previous owner deactivates license', 'Buy new license', 'Contact support'], correct: 3, explanation: 'Contact us first so we can verify that all licenses are free, properly deactivated, and ready to be activated on the new system.' },
      { question: 'How many FREE courses come with FSX 2020?', answers: ['5 courses', '12 courses', '25 courses', 'No free courses'], correct: 1, explanation: 'FSX 2020 includes 12 free courses. FSX Play has 25!' },
      { question: 'Which graphics cards are NOT supported?', answers: ['Nvidia GeForce RTX', 'Nvidia Quadro and AMD', 'All Nvidia', 'Only integrated'], correct: 1, explanation: 'Nvidia Quadro and AMD NOT supported. Always check graphics!' }
    ],
    fsxplay: [
      { question: 'FSX Play is loading into a black screen - what is a recommended quick fix?', answers: ['Reinstall', 'Update drivers', 'Select a HOLE first', 'Restart computer'], correct: 2, explanation: 'Most common fix! Select a hole before launching the session.' },
      { question: 'Can FSX Play work offline?', answers: ['Yes, 720 hours', 'Yes, 100 hours', 'No, requires internet always', 'Only on iPad'], correct: 2, explanation: 'FSX Play requires internet always - no offline mode.' },
      { question: 'Customer wants pro swing analysis. What would we recommend?', answers: ['Plug-and-play camera', 'High-res driver camera', 'Use Swing Catalyst instead', 'Not supported'], correct: 2, explanation: 'FSX Play is recreational. For pro analysis, use Swing Catalyst!' },
      { question: 'How many free courses are in FSX Play?', answers: ['12 courses', '20 courses', '25 courses', '30 courses'], correct: 2, explanation: 'FSX Play includes 25 free courses' },
      { question: 'Your FSX Play license is not showing up in your FSX Live account after your purchase. Why would that be?', answers: ['Server outage', 'Wrong Windows version', 'Activation code not redeemed', 'Course not downloaded'], correct: 2, explanation: 'Licenses do not appear automatically and must be activated using the FSX Play activation code.' },
      { question: 'What must be done before a course can be played in FSX Play?', answers: ['Course must be manually installed from the website', 'Download from the Library', 'Restart the software', 'Enable Swing Camera'], correct: 1, explanation: 'Courses must be downloaded from the Library before they can be played.' },
      { question: 'Which cameras are supported by FSX Play?', answers: ['High-resolution driver cameras', 'Professional BlackFly analysis cameras', 'Plug-and-Play cameras only', 'Any USB camera will do'], correct: 2, explanation: 'FSX Play supports Plug-and-Play cameras only. The FSX Play video feature is for recreational analysis only.' },
      { question: 'What is the minimum FSX Play version that supports Swing Camera?', answers: ['1.8.0.12', '1.9.0.5', '1.10.0.10', '2.0.0.0'], correct: 2, explanation: 'Swing Camera is supported only in FSX Play version 1.10.0.10 or newer.' },
      { question: 'Where can you download the latest version of FSX Play', answers: ['FSX Play auto updates', 'It doesn\'t need updating', 'The Support website online', 'FSX Live account online'], correct: 2, explanation: 'The latest version can be downloaded from https://support.foresightsports.com/support/fsx-play' },
      { question: 'Select the correct URL for the support website', answers: ['https://support.foresightsports.com/support', 'https://support.foresightsports.org', 'https://info.foresightsports.com/support', 'https://help.foresightsports.eu'], correct: 0, explanation: 'All the latest versions can be downloaded from https://support.foresightsports.com/support' }
    ],
    fairgrounds: [
      { question: 'How much does Fairgrounds cost?', answers: ['£299/year', '£99 one-time', 'Free - included', '£49/year'], correct: 2, explanation: 'Fairgrounds is FREE with FSX 2020!' },
      { question: 'Hitting line is misaligned - what is the fix?', answers: ['Reinstall', 'Use Room Config Tool as Admin', 'Adjust monitor', 'Recalibrate launch monitor'], correct: 1, explanation: 'Use the Room Config Tool to adjust alignment!' },
      { question: 'Do you need a separate activation code for Fairgrounds?', answers: ['Yes, always', 'No, auto-unlocks with FSX 2020', 'Only first 30 days', 'Depends on license'], correct: 1, explanation: 'No separate code! Auto-unlocks when FSX 2020 is activated.' },
      { question: 'What is Fairgrounds best for?', answers: ['Professional coaching', 'Tournament only', 'Entertainment and mini-games', 'Club fitting'], correct: 2, explanation: 'Entertainment and mini-games - the party mode!' }
    ],
    fsxpro: [
      { question: 'How many devices can run FSX Pro simultaneously?', answers: ['One device', 'Two devices', 'Three devices', 'Unlimited'], correct: 1, explanation: 'FSX Pro includes 2 simultaneous licenses!' },
      { question: '"Upgrade to Unlock" error - what is the likely cause?', answers: ['Trial expired', 'License not linked to account', 'Wrong password', 'Needs update'], correct: 1, explanation: 'License not properly linked to FSX Live account. Log out/in or clean reinstall!' },
      { question: 'Does FSX Pro sync between PC and iPad?', answers: ['Yes, cloud sync', 'No, local storage only', 'Only on same WiFi', 'Once per day'], correct: 1, explanation: 'Local storage only - no cloud sync. Each device separate database!' },
      { question: 'Can FSX Pro run on Mac?', answers: ['Yes, Mac and Windows', 'No, but works on iPad', 'Only M1/M2 Macs', 'With special license'], correct: 1, explanation: 'Mac NOT supported. It can run on an iPad or iPhone, but not on a Mac!' }
    ],
    gcquad: [
      { question: 'GCQuad "Registration Expired" - what happened?', answers: ['Need new subscription', 'Device broken', 'Not validated in 45+ days', 'Warranty expired'], correct: 2, explanation: 'GCQuad needs validation every 45 days!' },
      { question: 'What is the LED colour when the Quad has club mode enabled?', answers: ['Blue', 'Green', 'Yellow', 'Purple'], correct: 1, explanation: 'Green = Ball & Club ready!' },
      { question: 'What is the easiest way to validate GCQuad?', answers: ['USB to FSX 2020', 'Foresight App via Bluetooth', 'Email support', 'Ethernet to PC'], correct: 1, explanation: 'Foresight App via Bluetooth is quickest!' },
      { question: 'When validation expires, what works?', answers: ['Everything normal', 'Only USB connection', 'Only WiFi', 'Nothing works'], correct: 1, explanation: 'When expired: WiFi/Bluetooth stops, but USB still works!' }
    ],
    gc3: [
      { question: 'What wired connection types are available in the GC3?', answers: ['Bluetooth', 'HDMI', 'Ethernet and USB ', 'Display port'], correct: 2, explanation: 'Yes, Ethernet and USB' },
      { question: 'How does GC3S differ from GC3?', answers: ['Better cameras', 'Subscription - no activation codes', 'Outdoor only', 'No difference'], correct: 1, explanation: 'GC3S uses subscription licensing!' },
      { question: 'What makes the GC3 unique?', answers: ['Four cameras', 'Built-in touchscreen', 'Long battery life', 'Weather-resistant'], correct: 1, explanation: 'GC3 has built-in touchscreen display!' },
      { question: 'Can you update GC3 firmware without a computer?', answers: ['No, computer required', 'Yes, WiFi-Direct to router', 'Only iPad', 'Only Bluetooth'], correct: 1, explanation: 'WiFi-Direct lets it connect to routers for updates!' }
    ],
    falcon: [
      { question: 'Falcon vs GCHawk size difference?', answers: ['Same size', 'Slightly smaller', 'About half size and weight', 'Twice as large'], correct: 2, explanation: 'Falcon is 43" long, 26 lbs - HALF the size of GCHawk!' },
      { question: 'Falcon shows steady red LED - what to do?', answers: ['Device needs replacing', 'Try firmware update first', 'Contact support now', 'Restart computer'], correct: 1, explanation: 'Steady red = error. First step: try updating the firmware!' },
      { question: 'What is the LED colour for a Falcon when it is locked on the ball in ball & club mode?', answers: ['Flashing blue', 'Steady blue', 'Flashing green', 'Steady green'], correct: 3, explanation: 'Steady green = ready in ball & club mode!' },
      { question: 'Falcon hitting zone size?', answers: ['52" x 30"', '59" x 28"', '48" x 26"', '60" x 32"'], correct: 1, explanation: 'Falcon has 59" x 28" hitting zone!' },
      { question: 'What should you reapply if Falcon picks up ball data but not club data?', answers: ['Calibration wand', 'Reflective markers', 'Ethernet cable', 'Firmware patch'], correct: 1, explanation: 'Reapply reflective markers first! This is the #1 fix for missing club data.' },
      { question: 'Can updating Falcon firmware help resolve missing club data issues?', answers: ['No, firmware only affects connection', 'Yes, firmware updates can fix data issues', 'Only for ball data', 'Firmware never affects tracking'], correct: 1, explanation: 'Yes! Updating firmware is step 2 after reapplying markers for missing club data.' },
      { question: 'Is recalibration only required when Falcon is first installed?', answers: ['Yes, one-time only', 'No, needed when conditions change', 'Only after firmware updates', 'Never required'], correct: 1, explanation: 'Recalibration needed when: device loses lock, hitting area changes, or device is serviced/moved!' }
    ],
    gchawk: [
      { question: 'What is the GCHawk WiFi password?', answers: ['GCHAWK2024', 'FSSPORTS', 'foresight123', 'No password'], correct: 1, explanation: 'Default WiFi password is FSSPORTS!' },
      { question: 'What makes the GCHawk unique?', answers: ['Most accurate', 'Tracks golf AND soccer', 'Longest battery', 'Smallest size'], correct: 1, explanation: 'GCHawk tracks both golf and soccer!' },
      { question: 'What is the GCHawk hitting area size - if mounted at our recommended height?', answers: ['48" x 26"', '59" x 28"', '52" x 30"', '60" x 35"'], correct: 2, explanation: 'GCHawk has 52" x 30" hitting area! These measurements only apply if you followed our recommended mounting height!' },
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

  const exitToMainMenu = () => {
    setCurrentView('home');
    setLearningMode(false);
    setQuizMode(false);
    setSelectedProduct(null);
  };

  // Premium Button Component
  const PremiumButton = ({ onClick, children, variant = 'primary', icon: Icon, className = '' }) => {
    const baseStyles = "relative px-8 py-5 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-3 text-sm tracking-wide overflow-visible group";
    
    const variantStyles = {
      primary: `
        bg-gradient-to-b from-gray-200 via-white to-gray-300 text-black
        shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_-1px_0_rgba(0,0,0,0.2)_inset,0_8px_0_rgba(180,180,180,1),0_9px_2px_rgba(0,0,0,0.3),0_12px_20px_rgba(0,0,0,0.4)]
        border-t-2 border-white/60 border-b border-gray-400
        hover:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_-1px_0_rgba(0,0,0,0.2)_inset,0_6px_0_rgba(180,180,180,1),0_7px_2px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.4)]
        hover:translate-y-[2px]
        active:shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_-1px_0_rgba(0,0,0,0.2)_inset,0_2px_0_rgba(180,180,180,1),0_3px_2px_rgba(0,0,0,0.3),0_4px_10px_rgba(0,0,0,0.4)]
        active:translate-y-[6px]
      `,
      secondary: `
        bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800 text-white
        shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_-1px_0_rgba(0,0,0,0.4)_inset,0_8px_0_rgba(30,30,35,1),0_9px_2px_rgba(0,0,0,0.5),0_12px_20px_rgba(0,0,0,0.6)]
        border-t-2 border-zinc-500/40 border-b border-black/60
        hover:shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_-1px_0_rgba(0,0,0,0.4)_inset,0_6px_0_rgba(30,30,35,1),0_7px_2px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.6)]
        hover:translate-y-[2px]
        active:shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_-1px_0_rgba(0,0,0,0.4)_inset,0_2px_0_rgba(30,30,35,1),0_3px_2px_rgba(0,0,0,0.5),0_4px_10px_rgba(0,0,0,0.6)]
        active:translate-y-[6px]
      `,
      ghost: `
        bg-gradient-to-b from-zinc-800 via-zinc-850 to-zinc-900 text-zinc-400
        shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_-1px_0_rgba(0,0,0,0.5)_inset,0_6px_0_rgba(15,15,20,1),0_7px_2px_rgba(0,0,0,0.6),0_10px_18px_rgba(0,0,0,0.5)]
        border-2 border-zinc-700/50 border-t-zinc-600/30
        hover:text-white hover:border-zinc-600/60
        hover:shadow-[0_1px_0_rgba(255,255,255,0.1)_inset,0_-1px_0_rgba(0,0,0,0.5)_inset,0_4px_0_rgba(15,15,20,1),0_5px_2px_rgba(0,0,0,0.6),0_8px_18px_rgba(0,0,0,0.5)]
        hover:translate-y-[2px]
        active:translate-y-[5px]
      `
    };

    return (
      <button 
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <span className="relative z-10 flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </span>
      </button>
    );
  };

  if (currentView === 'learning') {
    const lessons = learningContent[selectedProduct];
    const lesson = lessons[currentLesson];
    const product = products.find(p => p.id === selectedProduct);
    const progress = ((currentLesson + 1) / lessons.length) * 100;

    return (
      <div className="min-h-screen bg-black p-4 md:p-8 relative overflow-hidden">
        <div 
          className="fixed inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: 'url(/pexels-kindelmedia-6573882.jpg)',
            filter: 'blur(8px) brightness(0.3)'
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6">
            <PremiumButton onClick={exitToMainMenu} variant="ghost" icon={Home}>
              Exit to Main Menu
            </PremiumButton>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-6 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase">Lesson {currentLesson + 1} of {lessons.length}</span>
              <span className="text-xs font-medium tracking-wider text-emerald-400 uppercase">+10 XP</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2 shadow-inner">
              <div 
                className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 h-2 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(52,211,153,0.5)]" 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>

          <div className={`bg-gradient-to-br ${product.color} rounded-3xl p-12 mb-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
            <h1 className="text-5xl font-light tracking-tight mb-3 relative z-10">{product.name}</h1>
            <h2 className="text-xl font-light opacity-80 tracking-wide relative z-10">{lesson.title}</h2>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <p className="text-zinc-900 text-base leading-relaxed mb-8 font-normal">{lesson.text}</p>

            <div className="flex gap-4 pt-8 border-t border-zinc-200">
              {currentLesson > 0 && (
                <PremiumButton onClick={() => setCurrentLesson(currentLesson - 1)} variant="secondary">
                  ← Previous
                </PremiumButton>
              )}
              <PremiumButton 
                onClick={handleNextLesson} 
                variant="primary" 
                icon={currentLesson < lessons.length - 1 ? ArrowRight : Sparkles}
                className="flex-1"
              >
                {currentLesson < lessons.length - 1 ? 'Next Lesson' : 'Complete +50 XP'}
              </PremiumButton>
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
      <div className="min-h-screen bg-black p-8 flex items-center justify-center relative overflow-hidden">
        <div 
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/pexels-kindelmedia-6573882.jpg)',
            filter: 'blur(8px) brightness(0.3)'
          }}
        />

        <div className="relative z-10 w-full max-w-2xl">
          <div className="mb-6">
            <PremiumButton onClick={exitToMainMenu} variant="ghost" icon={Home}>
              Exit to Main Menu
            </PremiumButton>
          </div>

          <div className="bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-zinc-800">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase">Question {currentQuizQuestion + 1} of {quiz.length}</span>
              <span className="text-xs font-medium tracking-wider text-emerald-400 uppercase">Score: {quizScore}/{quiz.length}</span>
            </div>

            <h2 className="text-2xl font-light mb-8 text-white leading-relaxed">{question.question}</h2>

            <div className="space-y-3 mb-8">
              {question.answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => !showFeedback && handleAnswerSelect(idx)}
                  disabled={showFeedback}
                  className={`w-full p-5 rounded-2xl text-left font-light transition-all duration-300 text-sm relative overflow-hidden group ${
                    showFeedback
                      ? idx === question.correct
                        ? 'bg-emerald-500/20 border-2 border-emerald-500 text-white shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                        : idx === selectedAnswer
                        ? 'bg-rose-500/20 border-2 border-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                        : 'bg-zinc-800 text-zinc-400 border-2 border-zinc-800'
                      : selectedAnswer === idx
                      ? 'bg-gradient-to-b from-white to-gray-100 text-black border-2 border-white shadow-[0_4px_12px_rgba(255,255,255,0.3)]'
                      : 'bg-gradient-to-b from-zinc-700 to-zinc-800 hover:from-zinc-600 hover:to-zinc-700 text-white border-2 border-zinc-700 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4),0_0_20px_rgba(100,100,100,0.2)]'
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 group-hover:translate-x-full transition-all duration-700 -translate-x-full"></span>
                  <div className="flex items-center gap-3 relative z-10">
                    {showFeedback && idx === question.correct && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                    {showFeedback && idx === selectedAnswer && idx !== question.correct && <XCircle className="w-5 h-5 text-rose-400" />}
                    <span>{answer}</span>
                  </div>
                </button>
              ))}
            </div>

            {showFeedback && (
              <>
                <div className={`p-6 rounded-2xl mb-8 shadow-inner ${isCorrect ? 'bg-emerald-500/10 border-2 border-emerald-500/30' : 'bg-cyan-500/10 border-2 border-cyan-500/30'}`}>
                  <p className={`font-medium mb-2 flex items-center gap-2 text-sm tracking-wide ${isCorrect ? 'text-emerald-400' : 'text-cyan-400'}`}>
                    {isCorrect ? <><Trophy className="w-4 h-4" /> Correct!</> : <><Lightbulb className="w-4 h-4" /> Learning Moment</>}
                  </p>
                  <p className="text-zinc-300 text-sm font-light leading-relaxed">{question.explanation}</p>
                </div>

                <PremiumButton onClick={handleNextQuestion} variant="primary" className="w-full">
                  {currentQuizQuestion < quiz.length - 1 ? 'Next Question →' : 'See Results'}
                </PremiumButton>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'results') {
    const quiz = quizData[selectedProduct];
    const percentage = Math.round((quizScore / quiz.length) * 100);
    const product = products.find(p => p.id === selectedProduct);

    return (
      <div className="min-h-screen bg-black p-8 flex items-center justify-center relative overflow-hidden">
        <div 
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/pexels-kindelmedia-6573882.jpg)',
            filter: 'blur(8px) brightness(0.3)'
          }}
        />

        <div className="max-w-2xl w-full bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-center border border-zinc-800 relative z-10">
          <div className="mb-8">
            {percentage >= 80 ? (
              <Trophy className="w-20 h-20 text-amber-400 mx-auto drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
            ) : (
              <span className="text-6xl">👍</span>
            )}
          </div>

          <h1 className="text-5xl font-light mb-6 text-white tracking-tight">
            {percentage >= 80 ? 'Excellent!' : percentage >= 50 ? 'Good Job!' : percentage > 0 ? 'Keep Learning!' : 'Better luck next time!'}
          </h1>
          <p className="text-xl text-zinc-400 mb-8 font-light">You scored {quizScore} out of {quiz.length} ({percentage}%)</p>

          {percentage >= 80 && (
            <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-2xl p-8 mb-8 shadow-[0_0_30px_rgba(251,191,36,0.2)]">
              <Award className="w-10 h-10 text-amber-400 mx-auto mb-3 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
              <p className="font-medium text-amber-400 tracking-wide">Badge Earned: {product.name} Expert!</p>
              <p className="text-xs text-amber-400/70 mt-2 uppercase tracking-wider">+125 XP Total</p>
            </div>
          )}

          <div className="flex gap-4">
            <PremiumButton onClick={() => handleStartQuiz(selectedProduct)} variant="primary" icon={RotateCcw} className="flex-1">
              Retake Quiz
            </PremiumButton>
            <PremiumButton onClick={() => setCurrentView('home')} variant="secondary" className="flex-1">
              Back to Academy
            </PremiumButton>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'productMenu') {
    const product = products.find(p => p.id === selectedProduct);
    const hasCompletedLearning = userProgress.completedLearning.includes(selectedProduct);

    return (
      <div className="min-h-screen bg-black p-8 relative overflow-hidden">
        <div 
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/pexels-kindelmedia-6573882.jpg)',
            filter: 'blur(8px) brightness(0.3)'
          }}
        />

        <div className="relative z-10">
          <PremiumButton onClick={() => setCurrentView('home')} variant="ghost" icon={Home} className="mb-8">
            Back to Academy
          </PremiumButton>

          <div className={`bg-gradient-to-br ${product.color} rounded-3xl p-16 mb-10 text-white text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
            <h1 className="text-6xl font-light mb-4 tracking-tight relative z-10">{product.name}</h1>
            <p className="text-xl font-light opacity-70 tracking-wide relative z-10">{product.tagline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <button 
              onClick={() => handleStartLearning(selectedProduct)} 
              className="bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.6),0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 text-left relative group border border-zinc-800"
            >
              {hasCompletedLearning && <CheckCircle className="w-8 h-8 text-emerald-400 absolute top-8 right-8 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />}
              <div className="bg-gradient-to-b from-white to-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-light text-white mb-3 tracking-tight">{hasCompletedLearning ? 'Review' : 'Start'} Learning</h3>
              <p className="text-zinc-400 mb-4 font-light text-sm">Learn the fundamentals interactively</p>
              <div className="flex items-center gap-2 text-zinc-400 font-light text-xs tracking-wide">
                <Zap className="w-4 h-4" />
                <span>Earn 10 XP per lesson</span>
              </div>
            </button>

            <button 
              onClick={() => hasCompletedLearning && handleStartQuiz(selectedProduct)} 
              disabled={!hasCompletedLearning} 
              className={`rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-left relative group border border-zinc-800 transition-all duration-300 ${
                hasCompletedLearning 
                  ? 'bg-zinc-900/80 backdrop-blur-xl hover:shadow-[0_12px_48px_rgba(0,0,0,0.6),0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 cursor-pointer' 
                  : 'bg-zinc-950/60 backdrop-blur-sm cursor-not-allowed opacity-40'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(0,0,0,0.2)] ${
                hasCompletedLearning 
                  ? 'bg-gradient-to-b from-white to-gray-100 group-hover:scale-110 transition-transform' 
                  : 'bg-zinc-800'
              }`}>
                <Brain className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-light text-white mb-3 tracking-tight">Take Quiz</h3>
              <p className="text-zinc-400 mb-4 font-light text-sm">{hasCompletedLearning ? 'Test your knowledge' : 'Complete learning first'}</p>
              <div className={`flex items-center gap-2 font-light text-xs tracking-wide ${hasCompletedLearning ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <Zap className="w-4 h-4" />
                <span>Earn up to 125 XP</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      <div 
        className={`fixed inset-0 bg-cover bg-center transition-all duration-1000 ${
          blurBackground ? 'blur-[8px] brightness-[0.3]' : 'blur-0 brightness-[0.5]'
        }`}
        style={{
          backgroundImage: 'url(/pexels-kindelmedia-6573882.jpg)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          className={`bg-gradient-to-r from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 backdrop-blur-xl rounded-3xl p-10 mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] border border-zinc-700/50 relative overflow-hidden transition-all duration-1000 ${
            showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="flex justify-between items-center relative z-10">
            <div>
              <h1 className="text-6xl font-light tracking-tight text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                Foresight Sports Europe Academy
              </h1>
              <p className="text-zinc-300 text-lg font-light tracking-wide">Master our products, level up your expertise</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-light text-white mb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Level {userProgress.level}</div>
              <div className="text-xs text-zinc-400 mb-3 tracking-wider uppercase">{userProgress.xp} XP</div>
              <div className="w-48 bg-zinc-800/80 backdrop-blur-sm rounded-full h-2 overflow-hidden shadow-inner border border-zinc-700/50">
                <div 
                  className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 h-2 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(52,211,153,0.5)]" 
                  style={{ width: `${(userProgress.xp % 100)}%` }} 
                />
              </div>
            </div>
          </div>

          {userProgress.badges.length > 0 && (
            <div className="mt-8 pt-8 border-t border-zinc-700/50">
              <p className="text-xs font-medium mb-4 flex items-center gap-2 text-zinc-400 uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                Earned Badges
              </p>
              <div className="flex gap-3 flex-wrap">
                {userProgress.badges.map((badge, idx) => (
                  <span 
                    key={idx} 
                    className="bg-amber-500/10 border-2 border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 tracking-wide shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                  >
                    <Star className="w-3 h-3" />
                    {products.find(p => p.id === badge)?.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 transition-all duration-1000 delay-300 ${
            showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {products.map((product, index) => (
            <button 
              key={product.id} 
              onClick={() => { setSelectedProduct(product.id); setCurrentView('productMenu'); }} 
              className={`bg-gradient-to-br ${product.color} rounded-3xl p-8 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group text-left border-2 border-white/20`}
              style={{
                transitionDelay: `${index * 50}ms`,
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.7)) drop-shadow(0 0 20px rgba(255,255,255,0.1))',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 group-hover:translate-x-full transition-all duration-700 -translate-x-full"></span>
              <h3 className="text-3xl font-light text-white mb-2 tracking-tight relative z-10">{product.name}</h3>
              <p className="text-white/60 text-sm font-light tracking-wide relative z-10">{product.tagline}</p>
              <ChevronRight className="w-5 h-5 text-white/40 absolute bottom-8 right-8 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>

        <div 
          className={`bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-zinc-800 transition-all duration-1000 delay-500 ${
            showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl font-light mb-6 flex items-center gap-3 text-white tracking-wide">
            <Lightbulb className="w-5 h-5 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
            Learning Tips
          </h3>
          <ul className="space-y-3 text-zinc-300 font-light text-sm leading-relaxed">
            <li>• Start with learning modules to understand each product</li>
            <li>• Complete learning to unlock quizzes</li>
            <li>• Score 80%+ on quizzes to earn product expert badges</li>
            <li>• Each product has unique features and troubleshooting tips</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForesightLearningApp;
