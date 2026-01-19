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
      { title: 'Moving to Another Computer', text: 'Since FSX 2020 only works on one computer at a time, customers need to move it. Process: Log into FSX Live online, go to My Account > Licenses, click Deactivate, then install on new computer and reactivate with the same details.' },
      { title: 'System Requirements', text: 'Windows 10 64-bit or newer required. Intel i5/i7/i9 7th gen or newer. Minimum 8GB RAM, recommend 16GB. Nvidia GeForce RTX 3060 or better. Nvidia Quadro and AMD cards are NOT supported!' },
      { title: 'License Bundle', text: 'FSX 2020 typically includes FSX Pro (2 licenses) and Foresight Fairgrounds (1 license) unless FSX 2020 was purchased as a standalone code. FSX Pro and Fairgrounds automatically unlock when FSX 2020 is activated - no separate codes needed! Just install these apps, log in with your FSX 2020 Username and Password and you should be good to go!' },
      { title: 'License Error Fix', text: 'Most common issue: License validation error. Fix: Check internet, deactivate license in FSX Live online, reload FSX 2020 a few times, update software, update Windows. This fixes 90% of issues!' }
    ],
    fsxplay: [
      { title: 'Meet FSX Play', text: 'FSX Play is next-generation simulation software with hyper-realistic graphics. It includes 25 FREE courses - more than double FSX 2020\'s 12 courses!' },
      { title: 'Internet Is Always Required', text: 'Unlike FSX 2020, FSX Play does NOT have offline mode. It needs stable internet at all times.' },
      { title: 'Course Compatibility', text: 'FSX Play has 25 free courses, but not all FSX 2020 courses work with FSX Play. New courses are mainly developed for FSX Play only. Always verify compatibility before purchase!' },
      { title: 'Camera Limitations', text: 'FSX Play supports cameras but with limits. Only Plug-and-Play cameras supported. High-resolution driver cameras are NOT compatible. For professional analysis, we recommend the Swing Catalyst software!' },
      { title: 'Setup & Activation', text: 'Create/login to FSX Live account, activate with code, download from support site, install on Windows, launch and sign in. Important: The license won\'t show under your FSX Live account automatically - you must activate with the login details and activation code first!' },
      { title: 'Black Screen Fix', text: 'Most common call: Course loads to black screen! THE FIX: Make sure a HOLE is selected before starting session! Customers click play without selecting hole. This fixes 95% of cases!' },
      { title: 'Course Downloads', text: 'Courses do not play instantly after activation. Users must download courses from the Library before they become available to play.' },
      { title: 'Swing Camera Version Requirement', text: 'Swing Camera is ONLY supported in FSX Play version 1.10.0.10 or newer. Earlier versions will not show Swing Camera options.' },
      { title: 'Swing Camera Enable Path', text: 'To enable Swing Camera: Go to Settings in them Main Menu → Swing Camera → Click ENABLE → Assign camera from dropdown. You must do this from the main menu, not from the open session settings.' },
      { title: 'Why is the purchased license not showing in your FSX Live Account?', text: 'Licenses do NOT appear automatically after purchase. Make sure you activated your FSX Play license within the software using your FSX Live username, Password, and the FSX Play activation code. After a successful activation, the license should appear in your FSX Live account online. (Hint: You must use the same FSX Live Username and Password for the activation that you used for the FSX Live account login.' },
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
      { title: 'Meet the Falcon', text: 'Falcon is Foresight\'s newest ceiling-mounted launch monitor. The "little brother" to GCHawk - same professional technology, much more compact. 43" long, weighs only 26 lbs - roughly HALF the size of GCHawk!' },
      { title: 'Hitting Zone', text: 'Features 59" x 28" hitting zone accommodating all clubs from driver to putter. Both right AND left-handed golfers play without repositioning! Ideal for residential installations where space optimization matters.' },
      { title: 'Data Capabilities', text: 'Captures ball speed, launch angle, spin rates, spin axis, carry distance. Club data (paid add-on): head speed, smash factor, attack angle, club path, face angle, loft/lie, impact location. Always verify purchased modules!' },
      { title: 'LED Status', text: 'Flashing Blue = Looking for ball (ball-only). Steady Blue = Ready (ball-only). Flashing Green = Looking (ball & club). Steady Green = Ready (ball & club). Yellow = Booting. Steady Red = Error - try recalibrating first!' },
      { title: 'Software & Connectivity', text: 'Integrates with FSX Play, FSX 2020, FSX Pro, third-party like GSPro. Connectivity: WiFi, USB-C, Ethernet. Multiple methods provide flexibility. Lighter weight means easier installation with less demanding ceiling reinforcement!' },
      { title: 'Installation', text: 'Mounts to ceiling with precise positioning relative to hitting mat and screen. Because Falcon is 26 lbs vs GCHawk, ceiling reinforcement requirements are less demanding. Multiple connectivity options provide installation flexibility!' },
      { title: 'Missing Club Data Fix', text: 'If Falcon picks up ball data but not club data: First, reapply reflective markers using the official marker application guide. Second, update Falcon firmware from support website. Third, recalibrate the Falcon. Fourth, connect the falcon to the Foresight Mobile App and confirm that the club has not been turned off by accident. If issue persists, contact support with: Has club data worked before? Are multiple clubs affected? Can multiple people replicate? Can you replicate in multiple software? Falcon firmware version and serial number.' },
      { title: 'Reflective Markers', text: 'Reflective markers are essential for club data tracking. If club data is missing, the first step is always to reapply markers following the official application guide. Markers must be properly positioned on clubs for accurate tracking. When troubleshooting, always check if markers are correctly applied before moving to firmware or calibration solutions.' },
      { title: 'Firmware Updates', text: 'Keeping Falcon firmware up to date is critical for optimal performance and can resolve connectivity and data tracking issues. Latest firmware version is published on the Hardware Support website at support.foresightsports.com/support/hardware. Regular firmware updates ensure compatibility with latest software versions and fix known issues. Always update firmware when troubleshooting connection or data problems.' },
      { title: 'When Recalibration Is Needed', text: 'Recalibration may be required if: Device fails to lock or intermittently loses lock, launch or club data is missing or inconsistent, device was serviced repositioned or remounted, hitting area or turf surface has changed. Falcon and GCHawk are ceiling-mounted monitors that rely on camera calibration to accurately track balls and clubs. Regular recalibration ensures optimal performance.' },
      { title: 'Recalibration Step 1: Delete Old Files', text: 'To recalibrate, first delete old calibration files: Open File Explorer, type %AppData% in address bar and press Enter. In Roaming folder, click up arrow to go up one level. Open LocalLow → ForesightSports → ForesightOverheadCalibration. Delete all .json files in this folder that start with CreationDate. Empty Recycle Bin to complete removal. This clears old calibration data for fresh start.' },
      { title: 'Recalibration Step 2: Calibration Tool', text: 'Download latest Overhead Calibration Tool from support site (support.foresightsports.com/support/hardware/falcon). Launch the tool and follow on-screen prompts. Before starting, ensure the hitting area is clear of reflective objects and lighting is consistent. Using calibration wand, move through requested positions within hitting area as directed. Keep wand visible to cameras and move at steady pace. Let the tool run to completion and save new calibration.' },
      { title: 'Calibration Best Practices', text: 'During calibration, hitting area must be clear of reflective objects to avoid interference with camera tracking. Lighting should be consistent throughout the process. Move calibration wand at steady pace, waist height at a 45 degree angle through all requested positions, keeping it visible to all four cameras. After calibration completes, restart the device and test ball/club tracking to confirm lock and accuracy are restored. Watch Falcon Calibration Video guide for visual instructions.' },
      { title: 'Support Contact Information', text: 'If troubleshooting steps do not resolve your issue, contact support@foresightsports.eu with detailed information: What troubleshooting steps have you tried? Has the feature worked before? Can multiple people replicate the issue? What software versions are you testing? Include Falcon firmware version and serial number. Providing comprehensive details helps support team diagnose and resolve issues faster. Video guides and documentation available at support.foresightsports.com.' }

],
    gchawk: [
      { title: 'What is GCHawk?', text: 'GCHawk is flagship ceiling-mounted launch monitor - gold standard for high-end simulators and commercial facilities. Same Quadrascopic system as GCQuad - four cameras for tour-level accuracy. Hands-free overhead design never gets in way!' },
      { title: 'Premium Hitting Zone', text: 'Features 52" x 30" hitting area - one of largest in industry! Supports all clubs including putter. Both left and right-handed players without repositioning. Commercial-grade durability for high-volume use!' },
      { title: 'Multi-Sport Magic', text: 'GCHawk tracks GOLF and SOCCER! Uses Skill Drill software for soccer. Golf mode captures standard data. Soccer mode tracks ball speed, trajectory, accuracy. Incredibly valuable for multi-sport facilities!' },
      { title: 'Data Modules', text: 'Ball Data included (speed, launch, spin). Club Data paid add-on (club speed, path, face angle, impact). Putting paid add-on (skid, roll, post-impact). Important: Modules often have trial periods - after expiration need purchase!' },
      { title: 'LED & Connectivity', text: 'Same LED as other Foresight: Blue = ball-only, Green = ball & club, Yellow = booting, Red = error. Connectivity: USB-C, Ethernet, WiFi. CRITICAL: Default WiFi password is FSSPORTS - customers need this for mobile apps!' },
      { title: 'Software Integration', text: 'Works with all Foresight platforms: FSX Play, FSX 2020, FSX Pro, Fairgrounds. Mobile: Foresight App (iOS/Android) and FSX Pro Mobile for iPad. For mobile WiFi connection, remember password: FSSPORTS!' }
    ]
  };

  const quizData = {
    fsx2020: [
      { question: 'Customer wants offline FSX 2020 at cabin. What do you tell them?', answers: ['Internet always required', 'Can activate 720 offline hours', 'Only FSX Play works offline', 'Need special license'], correct: 1, explanation: 'FSX 2020 has offline mode! Activate 720 hours through FSX Live.' },
      { question: 'Customer bought used system. First step to activate?', answers: ['Download immediately', 'Previous owner deactivates license', 'Buy new license', 'Contact support'], correct: 3, explanation: 'Contact us first so we can verify that all licenses are free, properly deactivated, and ready to be activated on the new system.' },
      { question: 'How many FREE courses with FSX 2020?', answers: ['5 courses', '12 courses', '25 courses', 'No free courses'], correct: 1, explanation: 'FSX 2020 includes 12 free courses. FSX Play has 25!' },
      { question: 'Which graphics cards NOT supported?', answers: ['Nvidia GeForce RTX', 'Nvidia Quadro and AMD', 'All Nvidia', 'Only integrated'], correct: 1, explanation: 'Nvidia Quadro and AMD NOT supported. Always check graphics!' }
    ],
    fsxplay: [
      { question: 'FSX Play black screen - quick fix?', answers: ['Reinstall', 'Update drivers', 'Select a HOLE first', 'Restart computer'], correct: 2, explanation: 'Most common fix! Select hole before launching session.' },
      { question: 'Can FSX Play work offline?', answers: ['Yes, 720 hours', 'Yes, 100 hours', 'No, requires internet always', 'Only on iPad'], correct: 2, explanation: 'FSX Play requires internet always - no offline mode.' },
      { question: 'Customer wants pro swing analysis. Recommend?', answers: ['Plug-and-play camera', 'High-res driver camera', 'Use Swing Catalyst instead', 'Not supported'], correct: 2, explanation: 'FSX Play is recreational. For pro analysis, use Swing Catalyst!' },
      { question: 'How many free courses in FSX Play?', answers: ['12 courses', '20 courses', '25 courses', '30 courses'], correct: 2, explanation: 'FSX Play includes 25 free courses - double FSX 2020!' },
      { question: 'Your FSX Play license is not showing after right after your purchase in your FSX Live account. Why would that be?', answers: ['Server outage', 'Wrong Windows version', 'Activation code not redeemed', 'Course not downloaded'], correct: 2, explanation: 'Licenses do not appear automatically and must be activated using the FSX Play activation code.' },
      { question: 'What must be done before a course can be played in FSX Play?', answers: ['Course must be manually installed from the website', 'Download from the Library', 'Restart the software', 'Enable Swing Camera'], correct: 1, explanation: 'Courses must be downloaded from the Library before they can be played.' },
      { question: 'Which cameras are supported by FSX Play?', answers: ['High-resolution driver cameras', 'Professional BlackFly analysis cameras', 'Plug-and-Play cameras only', 'Any USB camera will do'], correct: 2, explanation: 'FSX Play supports Plug-and-Play cameras only. The FSX Play video feature is for recreational analysis only.' },
      { question: 'What is the minimum FSX Play version that supports Swing Camera?', answers: ['1.8.0.12', '1.9.0.5', '1.10.0.10', '2.0.0.0'], correct: 2, explanation: 'Swing Camera is supported only in FSX Play version 1.10.0.10 or newer.' },
      { question: 'Where can you download the latest version of FSX Play', answers: ['FSX Play auto updates', 'It doesn't need updating', 'The Support website online', 'FSX Live account online'], correct: 2, explanation: 'The latest version can be downloaded from https://support.foresightsports.com/support/fsx-play' },
      { question: 'Select the correct URL for the support website', answers: ['https://support.foresightsports.com/support', 'https://support.foresightsports.org', 'https://info.foresightsports.com/support', 'https://help.foresightsports.eu'], correct: 0, explanation: 'All the latest versions can be downloaded from https://support.foresightsports.com/support' }

    ],
    fairgrounds: [
      { question: 'Fairgrounds cost with FSX 2020?', answers: ['$299/year', '$99 one-time', 'Free - included', '$49/year'], correct: 2, explanation: 'Fairgrounds FREE with FSX 2020!' },
      { question: 'Hitting line misaligned - fix?', answers: ['Reinstall', 'Use Room Config Tool as Admin', 'Adjust monitor', 'Recalibrate launch monitor'], correct: 1, explanation: 'Use Room Config Tool as Administrator to adjust alignment!' },
      { question: 'Separate activation code needed?', answers: ['Yes, always', 'No, auto-unlocks with FSX 2020', 'Only first 30 days', 'Depends on license'], correct: 1, explanation: 'No separate code! Auto-unlocks when FSX 2020 activated.' },
      { question: 'Fairgrounds best for?', answers: ['Professional coaching', 'Tournament only', 'Entertainment and mini-games', 'Club fitting'], correct: 2, explanation: 'Entertainment and mini-games - the party mode!' }
    ],
    fsxpro: [
      { question: 'How many devices run FSX Pro simultaneously?', answers: ['One device', 'Two devices', 'Three devices', 'Unlimited'], correct: 1, explanation: 'FSX Pro includes 2 simultaneous licenses!' },
      { question: '"Upgrade to Unlock" error - likely cause?', answers: ['Trial expired', 'License not linked to account', 'Wrong password', 'Needs update'], correct: 1, explanation: 'License not properly linked to FSX Live account. Log out/in or clean reinstall!' },
      { question: 'Does FSX Pro sync between PC and iPad?', answers: ['Yes, cloud sync', 'No, local storage only', 'Only on same WiFi', 'Once per day'], correct: 1, explanation: 'Local storage only - no cloud sync. Each device separate database!' },
      { question: 'Can FSX Pro run on Mac?', answers: ['Yes, Mac and Windows', 'No, but works on iPad', 'Only M1/M2 Macs', 'With special license'], correct: 1, explanation: 'Mac NOT supported. iPad yes, Mac no!' }
    ],
    gcquad: [
      { question: 'GCQuad "Registration Expired" - what happened?', answers: ['Need new subscription', 'Device broken', 'Not validated in 45+ days', 'Warranty expired'], correct: 2, explanation: 'GCQuad needs validation every 45 days!' },
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
      { question: 'Falcon vs GCHawk size difference?', answers: ['Same size', 'Slightly smaller', 'About half size and weight', 'Twice as large'], correct: 2, explanation: 'Falcon is 43" long, 26 lbs - HALF the size of GCHawk!' },
      { question: 'Falcon shows steady red LED - what to do?', answers: ['Device needs replacing', 'Try recalibrating first', 'Contact support now', 'Restart computer'], correct: 1, explanation: 'Steady red = error. First step: try recalibrating!' },
      { question: 'LED color for Falcon ready in ball & club?', answers: ['Flashing blue', 'Steady blue', 'Flashing green', 'Steady green'], correct: 3, explanation: 'Steady green = ready in ball & club mode!' },
      { question: 'Falcon hitting zone size?', answers: ['52" x 30"', '59" x 28"', '48" x 26"', '60" x 32"'], correct: 1, explanation: 'Falcon has 59" x 28" hitting zone!' }
      { question: 'What should you reapply if Falcon picks up ball data but not club data?', answers: ['Calibration wand', 'Reflective markers', 'Ethernet cable', 'Firmware patch'], correct: 1, explanation: 'Reapply reflective markers first! This is the #1 fix for missing club data.' },
      { question: 'Can updating Falcon firmware help resolve missing club data issues?', answers: ['No, firmware only affects connection', 'Yes, firmware updates can fix data issues', 'Only for ball data', 'Firmware never affects tracking'], correct: 1, explanation: 'Yes! Updating firmware is step 2 after reapplying markers for missing club data.' },
      { question: 'Is recalibration only required when Falcon is first installed?', answers: ['Yes, one-time only', 'No, needed when conditions change', 'Only after firmware updates', 'Never required'], correct: 1, explanation: 'Recalibration needed when: device loses lock, hitting area changes, or device is serviced/moved!' },
    
      
    ],
    gchawk: [
      { question: 'GCHawk WiFi password?', answers: ['GCHAWK2024', 'FSSPORTS', 'foresight123', 'No password'], correct: 1, explanation: 'Default WiFi password is FSSPORTS!' },
      { question: 'What makes GCHawk unique?', answers: ['Most accurate', 'Tracks golf AND soccer', 'Longest battery', 'Smallest size'], correct: 1, explanation: 'GCHawk tracks both golf and soccer!' },
      { question: 'GCHawk hitting area size?', answers: ['48" x 26"', '59" x 28"', '52" x 30"', '60" x 35"'], correct: 2, explanation: 'GCHawk has 52" x 30" hitting area!' },
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
              <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase">Lesson {currentLesson + 1} of {lessons.length}</span>
              <span className="text-xs font-medium tracking-wider text-emerald-400 uppercase">+10 XP</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-1.5 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className={`bg-gradient-to-br ${product.color} rounded-[2rem] p-12 mb-6 text-white shadow-2xl`}>
            <h1 className="text-5xl font-light tracking-tight mb-3">{product.name}</h1>
            <h2 className="text-xl font-light opacity-80 tracking-wide">{lesson.title}</h2>
          </div>

          <div className="bg-white rounded-[2rem] p-12 shadow-2xl">
            <p className="text-zinc-900 text-base leading-relaxed mb-8 font-normal">{lesson.text}</p>

            <div className="flex gap-4 pt-8 border-t border-zinc-200">
              {currentLesson > 0 && (
                <button onClick={() => setCurrentLesson(currentLesson - 1)} className="px-8 py-4 bg-zinc-100 text-zinc-900 rounded-2xl font-medium hover:bg-zinc-200 transition-all text-sm tracking-wide">
                  ← Previous
                </button>
              )}
              <button onClick={handleNextLesson} className="flex-1 bg-black text-white py-4 rounded-2xl font-medium hover:bg-zinc-900 transition-all flex items-center justify-center gap-3 text-sm tracking-wide">
                {currentLesson < lessons.length - 1 ? (
                  <>Next Lesson <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>Complete +50 XP <Sparkles className="w-4 h-4" /></>
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
                className={`w-full p-5 rounded-2xl text-left font-light transition-all text-sm ${
                  showFeedback
                    ? idx === question.correct
                      ? 'bg-emerald-500/20 border border-emerald-500 text-white'
                      : idx === selectedAnswer
                      ? 'bg-rose-500/20 border border-rose-500 text-white'
                      : 'bg-zinc-800 text-zinc-400 border border-zinc-800'
                    : selectedAnswer === idx
                    ? 'bg-white text-black border border-white'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  {showFeedback && idx === question.correct && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                  {showFeedback && idx === selectedAnswer && idx !== question.correct && <XCircle className="w-5 h-5 text-rose-400" />}
                  <span>{answer}</span>
                </div>
              </button>
            ))}
          </div>

          {showFeedback && (
            <>
              <div className={`p-6 rounded-2xl mb-8 ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-cyan-500/10 border border-cyan-500/30'}`}>
                <p className={`font-medium mb-2 flex items-center gap-2 text-sm tracking-wide ${isCorrect ? 'text-emerald-400' : 'text-cyan-400'}`}>
                  {isCorrect ? <><Trophy className="w-4 h-4" /> Correct!</> : <><Lightbulb className="w-4 h-4" /> Learning Moment</>}
                </p>
                <p className="text-zinc-300 text-sm font-light leading-relaxed">{question.explanation}</p>
              </div>

              <button onClick={handleNextQuestion} className="w-full bg-white text-black py-4 rounded-2xl font-medium hover:bg-zinc-100 transition-all text-sm tracking-wide">
                {currentQuizQuestion < quiz.length - 1 ? 'Next Question →' : 'See Results'}
              </button>
            </>
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
          <div className="mb-8">
            {percentage >= 80 ? <Trophy className="w-20 h-20 text-amber-400 mx-auto" /> : <span className="text-6xl">👍</span>}
          </div>

          <h1 className="text-5xl font-light mb-6 text-white tracking-tight">{percentage >= 80 ? 'Excellent!' : percentage >= 50 ? 'Good Job!' : percentage > 0 ? 'Keep Learning!' : 'Better luck next time!'}</h1>
          <p className="text-xl text-zinc-400 mb-8 font-light">You scored {quizScore} out of {quiz.length} ({percentage}%)</p>

          {percentage >= 80 && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 mb-8">
              <Award className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <p className="font-medium text-amber-400 tracking-wide">Badge Earned: {product.name} Expert!</p>
              <p className="text-xs text-amber-400/70 mt-2 uppercase tracking-wider">+125 XP Total</p>
            </div>
          )}

          <div className="flex gap-4">
            <button onClick={() => handleStartQuiz(selectedProduct)} className="flex-1 bg-white text-black py-4 rounded-2xl font-medium hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 text-sm tracking-wide">
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
            <button onClick={() => setCurrentView('home')} className="flex-1 bg-zinc-800 text-white py-4 rounded-2xl font-medium hover:bg-zinc-700 transition-all text-sm tracking-wide">
              Back to Academy
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
        <button onClick={() => setCurrentView('home')} className="mb-8 text-zinc-400 hover:text-white flex items-center gap-2 font-light text-sm tracking-wide transition-colors">
          ← Back to Academy
        </button>

        <div className={`bg-gradient-to-br ${product.color} rounded-[2rem] p-16 mb-10 text-white text-center shadow-2xl`}>
          <h1 className="text-6xl font-light mb-4 tracking-tight">{product.name}</h1>
          <p className="text-xl font-light opacity-70 tracking-wide">{product.tagline}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <button onClick={() => handleStartLearning(selectedProduct)} className="bg-zinc-900 rounded-[2rem] p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all text-left relative group border border-zinc-800">
            {hasCompletedLearning && <CheckCircle className="w-8 h-8 text-emerald-400 absolute top-8 right-8" />}
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-3xl font-light text-white mb-3 tracking-tight">{hasCompletedLearning ? 'Review' : 'Start'} Learning</h3>
            <p className="text-zinc-400 mb-4 font-light text-sm">Learn the fundamentals interactively</p>
            <div className="flex items-center gap-2 text-zinc-400 font-light text-xs tracking-wide">
              <Zap className="w-4 h-4" />
              <span>Earn 10 XP per lesson</span>
            </div>
          </button>

          <button onClick={() => hasCompletedLearning && handleStartQuiz(selectedProduct)} disabled={!hasCompletedLearning} className={`rounded-[2rem] p-10 shadow-2xl text-left relative group border border-zinc-800 ${hasCompletedLearning ? 'bg-zinc-900 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-all cursor-pointer' : 'bg-zinc-950 cursor-not-allowed opacity-40'}`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${hasCompletedLearning ? 'bg-white group-hover:scale-110 transition-transform' : 'bg-zinc-800'}`}>
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
    );
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[2rem] p-10 mb-12 shadow-2xl border border-zinc-800">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-6xl font-light tracking-tight text-white mb-4">
                Foresight Sports Europe Academy
              </h1>
              <p className="text-zinc-400 text-lg font-light tracking-wide">Master our products, level up your expertise</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-light text-white mb-1">Level {userProgress.level}</div>
              <div className="text-xs text-zinc-500 mb-3 tracking-wider uppercase">{userProgress.xp} XP</div>
              <div className="w-48 bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-1.5 rounded-full transition-all duration-500" style={{ width: `${(userProgress.xp % 100)}%` }} />
              </div>
            </div>
          </div>

          {userProgress.badges.length > 0 && (
            <div className="mt-8 pt-8 border-t border-zinc-800">
              <p className="text-xs font-medium mb-4 flex items-center gap-2 text-zinc-400 uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-amber-400" />
                Earned Badges
              </p>
              <div className="flex gap-3 flex-wrap">
                {userProgress.badges.map((badge, idx) => (
                  <span key={idx} className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 tracking-wide">
                    <Star className="w-3 h-3" />
                    {products.find(p => p.id === badge)?.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {products.map(product => (
            <div key={product.id} onClick={() => { setSelectedProduct(product.id); setCurrentView('productMenu'); }} className={`bg-gradient-to-br ${product.color} rounded-[2rem] p-8 cursor-pointer transform transition-all hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)] relative overflow-hidden group`}>
              <h3 className="text-3xl font-light text-white mb-2 tracking-tight">{product.name}</h3>
              <p className="text-white/60 text-sm font-light tracking-wide">{product.tagline}</p>
              <ChevronRight className="w-5 h-5 text-white/40 absolute bottom-8 right-8 group-hover:text-white/80 transition-colors" />
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-zinc-800">
          <h3 className="text-xl font-light mb-6 flex items-center gap-3 text-white tracking-wide">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            Learning Tips
          </h3>
          <ul className="space-y-3 text-zinc-400 font-light text-sm leading-relaxed">
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








