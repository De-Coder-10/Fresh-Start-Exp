// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   CheckCircle, 
//   FileText, 
//   Briefcase, 
//   Calendar, 
//   MapPin, 
//   CreditCard,
//   Phone,
//   Mail,
//   User,
//   Building,
//   Clock,
//   AlertTriangle,
//   Download,
//   ExternalLink
// } from 'lucide-react';

// const OnboardingGuide = () => {
//   const [activeTab, setActiveTab] = useState('checklist');
//   const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

//   const tabs = [
//     { id: 'checklist', name: 'Document Checklist', icon: FileText },
//     { id: 'packing', name: 'Hostel Packing', icon: Briefcase },
//     { id: 'first-week', name: 'First Week Plan', icon: Calendar },
//     { id: 'verification', name: 'Verification Help', icon: CheckCircle }
//   ];

//   const documentChecklist = [
//     {
//       category: 'Academic Documents',
//       items: [
//         { id: 'marksheet-10', name: '10th Class Marksheet (Original + 3 Copies)', required: true },
//         { id: 'marksheet-12', name: '12th Class Marksheet (Original + 3 Copies)', required: true },
//         { id: 'transfer-cert', name: 'Transfer Certificate', required: true },
//         { id: 'character-cert', name: 'Character Certificate', required: true },
//         { id: 'migration-cert', name: 'Migration Certificate', required: true },
//         { id: 'entrance-scorecard', name: 'Entrance Exam Scorecard', required: true }
//       ]
//     },
//     {
//       category: 'Identity Documents',
//       items: [
//         { id: 'aadhar', name: 'Aadhar Card (Original + 3 Copies)', required: true },
//         { id: 'pan', name: 'PAN Card (if available)', required: false },
//         { id: 'passport', name: 'Passport Size Photos (10 copies)', required: true },
//         { id: 'birth-cert', name: 'Birth Certificate', required: false }
//       ]
//     },
//     {
//       category: 'Financial Documents',
//       items: [
//         { id: 'fee-receipt', name: 'Fee Payment Receipt', required: true },
//         { id: 'bank-passbook', name: 'Bank Passbook/Statement', required: true },
//         { id: 'income-cert', name: 'Income Certificate (if applicable)', required: false },
//         { id: 'scholarship', name: 'Scholarship Documents (if applicable)', required: false }
//       ]
//     },
//     {
//       category: 'Medical Documents',
//       items: [
//         { id: 'medical-cert', name: 'Medical Certificate', required: true },
//         { id: 'fitness-cert', name: 'Physical Fitness Certificate', required: true },
//         { id: 'vaccination', name: 'Vaccination Certificate', required: false }
//       ]
//     }
//   ];

//   const packingList = [
//     {
//       category: 'Clothing',
//       items: [
//         'Casual clothes (7-10 sets)',
//         'Formal clothes (2-3 sets)',
//         'Undergarments (sufficient quantity)',
//         'Socks (10-12 pairs)',
//         'Sleepwear (3-4 sets)',
//         'Seasonal clothes (jackets, sweaters)',
//         'Sports/gym clothes',
//         'Traditional wear (1-2 sets)'
//       ]
//     },
//     {
//       category: 'Personal Care',
//       items: [
//         'Toothbrush and toothpaste',
//         'Shampoo and soap',
//         'Towels (2-3)',
//         'Personal hygiene items',
//         'Medicines (basic first aid)',
//         'Sunscreen and moisturizer',
//         'Hair care products',
//         'Nail cutter, razor'
//       ]
//     },
//     {
//       category: 'Study Materials',
//       items: [
//         'Laptop/tablet with charger',
//         'Notebooks and stationery',
//         'Calculator',
//         'USB drives',
//         'Table lamp',
//         'Books (reference)',
//         'Printer (if needed)',
//         'Extension cord'
//       ]
//     },
//     {
//       category: 'Room Essentials',
//       items: [
//         'Bed sheets and pillows',
//         'Blanket/comforter',
//         'Bucket and mug',
//         'Hangers',
//         'Storage boxes',
//         'Laundry bag',
//         'Room slippers',
//         'Alarm clock'
//       ]
//     },
//     {
//       category: 'Electronics',
//       items: [
//         'Mobile phone and charger',
//         'Power bank',
//         'Headphones/earphones',
//         'Camera (optional)',
//         'Iron (if allowed)',
//         'Hair dryer (if allowed)',
//         'Multi-plug extension',
//         'Adapter/converter'
//       ]
//     }
//   ];

//   const firstWeekPlan = [
//     {
//       day: 'Day 1',
//       title: 'Arrival & Check-in',
//       tasks: [
//         'Complete hostel check-in process',
//         'Submit all required documents',
//         'Get room keys and hostel ID',
//         'Meet your roommate(s)',
//         'Explore your floor and common areas',
//         'Get mess card/meal plan',
//         'Note important contact numbers'
//       ]
//     },
//     {
//       day: 'Day 2',
//       title: 'Campus Orientation',
//       tasks: [
//         'Attend college orientation program',
//         'Get student ID card made',
//         'Visit academic block and locate classrooms',
//         'Find library and computer labs',
//         'Locate administrative offices',
//         'Get campus map and important locations',
//         'Open bank account (if needed)'
//       ]
//     },
//     {
//       day: 'Day 3',
//       title: 'Academic Setup',
//       tasks: [
//         'Meet your academic advisor',
//         'Understand course structure and credits',
//         'Get timetable and class schedules',
//         'Purchase required textbooks',
//         'Set up college email and online portals',
//         'Join class WhatsApp groups',
//         'Note assignment submission procedures'
//       ]
//     },
//     {
//       day: 'Day 4-5',
//       title: 'Social Integration',
//       tasks: [
//         'Attend fresher\'s events and activities',
//         'Join clubs and societies of interest',
//         'Meet seniors and get their contact info',
//         'Explore campus facilities (gym, sports)',
//         'Find study groups in your branch',
//         'Connect with classmates',
//         'Learn about college traditions'
//       ]
//     },
//     {
//       day: 'Day 6-7',
//       title: 'Settling In',
//       tasks: [
//         'Establish daily routine',
//         'Find nearby shops and services',
//         'Set up room properly',
//         'Plan weekly schedule',
//         'Start attending regular classes',
//         'Begin assignment work',
//         'Reflect on first week experience'
//       ]
//     }
//   ];

//   const verificationHelp = [
//     {
//       title: 'Bank Account Opening',
//       description: 'Steps to open a student bank account',
//       icon: CreditCard,
//       steps: [
//         'Choose a bank with campus branch',
//         'Carry Aadhar, PAN, college ID, and photos',
//         'Fill account opening form',
//         'Submit documents and initial deposit',
//         'Get debit card and checkbook',
//         'Set up mobile/internet banking'
//       ],
//       tips: [
//         'Many banks offer zero-balance student accounts',
//         'Look for banks with good ATM network on campus',
//         'Consider banks offering education loans'
//       ]
//     },
//     {
//       title: 'Aadhar Verification',
//       description: 'Update Aadhar with college address',
//       icon: User,
//       steps: [
//         'Visit nearest Aadhar center',
//         'Carry original Aadhar and address proof',
//         'Fill address update form',
//         'Provide biometric verification',
//         'Pay required fees',
//         'Get acknowledgment receipt'
//       ],
//       tips: [
//         'Process takes 15-30 days',
//         'Keep acknowledgment safe',
//         'You can track status online'
//       ]
//     },
//     {
//       title: 'Railway Concession',
//       description: 'Get student railway concession',
//       icon: MapPin,
//       steps: [
//         'Get application form from college office',
//         'Attach passport size photo',
//         'Submit with college ID proof',
//         'Pay processing fees',
//         'Collect concession certificate',
//         'Use for booking discounted tickets'
//       ],
//       tips: [
//         'Valid for specific routes only',
//         'Renewal required annually',
//         'Carry college ID while traveling'
//       ]
//     }
//   ];

//   const toggleCheck = (itemId: string) => {
//     setCheckedItems(prev => ({
//       ...prev,
//       [itemId]: !prev[itemId]
//     }));
//   };

//   const getCompletionPercentage = () => {
//     const totalItems = documentChecklist.reduce((sum, category) => sum + category.items.length, 0);
//     const checkedCount = Object.values(checkedItems).filter(Boolean).length;
//     return Math.round((checkedCount / totalItems) * 100);
//   };

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <div className="flex justify-center mb-6">
//             <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-2xl shadow-lg">
//               <Briefcase className="h-12 w-12 text-white" />
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Onboarding Guide
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Your complete guide to starting college life - from document preparation to settling into your new environment.
//           </p>
//         </motion.div>

//         {/* Tab Navigation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="mb-8"
//         >
//           <div className="flex flex-wrap justify-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
//             {tabs.map((tab) => {
//               const Icon = tab.icon;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
//                     activeTab === tab.id
//                       ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md'
//                       : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
//                   }`}
//                 >
//                   <Icon className="h-5 w-5" />
//                   <span className="hidden sm:block">{tab.name}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Tab Content */}
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {activeTab === 'checklist' && (
//             <div className="space-y-8">
//               {/* Progress Bar */}
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-bold text-gray-900 dark:text-white">
//                     Document Preparation Progress
//                   </h2>
//                   <span className="text-2xl font-bold text-orange-600">
//                     {getCompletionPercentage()}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
//                   <div
//                     className="bg-gradient-to-r from-orange-600 to-red-600 h-3 rounded-full transition-all duration-300"
//                     style={{ width: `${getCompletionPercentage()}%` }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Document Categories */}
//               <div className="space-y-6">
//                 {documentChecklist.map((category, index) => (
//                   <div
//                     key={index}
//                     className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
//                   >
//                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                       {category.category}
//                     </h3>
//                     <div className="space-y-3">
//                       {category.items.map((item) => (
//                         <div
//                           key={item.id}
//                           className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                         >
//                           <button
//                             onClick={() => toggleCheck(item.id)}
//                             className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
//                               checkedItems[item.id]
//                                 ? 'bg-green-500 border-green-500'
//                                 : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
//                             }`}
//                           >
//                             {checkedItems[item.id] && (
//                               <CheckCircle className="h-4 w-4 text-white" />
//                             )}
//                           </button>
//                           <div className="flex-1">
//                             <p className={`font-medium ${
//                               checkedItems[item.id]
//                                 ? 'text-gray-500 dark:text-gray-400 line-through'
//                                 : 'text-gray-900 dark:text-white'
//                             }`}>
//                               {item.name}
//                             </p>
//                           </div>
//                           {item.required && (
//                             <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded text-xs font-medium">
//                               Required
//                             </span>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Important Notes */}
//               <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
//                 <div className="flex items-start space-x-3">
//                   <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
//                       Important Notes
//                     </h3>
//                     <ul className="space-y-1 text-yellow-800 dark:text-yellow-200 text-sm">
//                       <li>• Keep all original documents in a separate folder</li>
//                       <li>• Make extra copies of important documents</li>
//                       <li>• Verify document requirements with college office</li>
//                       <li>• Some documents may need attestation</li>
//                       <li>• Keep digital copies as backup</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'packing' && (
//             <div className="space-y-8">
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
//                   <Briefcase className="h-6 w-6 mr-3 text-orange-600" />
//                   Hostel Packing Checklist
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-8">
//                   {packingList.map((category, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
//                     >
//                       <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
//                         {category.category}
//                       </h3>
//                       <ul className="space-y-2">
//                         {category.items.map((item, idx) => (
//                           <li
//                             key={idx}
//                             className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
//                           >
//                             <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
//                             <span className="text-sm">{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Packing Tips */}
//                 <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
//                   <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
//                     Packing Tips
//                   </h3>
//                   <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
//                     <li>• Pack essentials in carry-on bag</li>
//                     <li>• Label all belongings with your name and contact</li>
//                     <li>• Check hostel rules for prohibited items</li>
//                     <li>• Pack seasonal clothes according to location</li>
//                     <li>• Bring comfort items from home (photos, small decorations)</li>
//                     <li>• Don't overpack - you can buy items locally</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'first-week' && (
//             <div className="space-y-8">
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
//                   <Calendar className="h-6 w-6 mr-3 text-orange-600" />
//                   First Week Action Plan
//                 </h2>

//                 <div className="space-y-6">
//                   {firstWeekPlan.map((day, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
//                     >
//                       <div className="flex items-center space-x-4 mb-4">
//                         <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                           {day.day}
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                           {day.title}
//                         </h3>
//                       </div>
                      
//                       <div className="grid md:grid-cols-2 gap-4">
//                         {day.tasks.map((task, idx) => (
//                           <div
//                             key={idx}
//                             className="flex items-start space-x-2 p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600"
//                           >
//                             <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
//                             <span className="text-sm text-gray-700 dark:text-gray-300">
//                               {task}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Success Tips */}
//                 <div className="mt-8 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
//                   <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
//                     First Week Success Tips
//                   </h3>
//                   <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
//                     <li>• Stay positive and open to new experiences</li>
//                     <li>• Don't hesitate to ask for help</li>
//                     <li>• Take notes of important information</li>
//                     <li>• Be patient with yourself - adjustment takes time</li>
//                     <li>• Stay in touch with family but don't be homesick</li>
//                     <li>• Focus on making genuine connections</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'verification' && (
//             <div className="space-y-8">
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
//                   <CheckCircle className="h-6 w-6 mr-3 text-orange-600" />
//                   Verification & Documentation Help
//                 </h2>

//                 <div className="space-y-8">
//                   {verificationHelp.map((item, index) => {
//                     const Icon = item.icon;
//                     return (
//                       <div
//                         key={index}
//                         className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
//                       >
//                         <div className="flex items-start space-x-4 mb-4">
//                           <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-lg">
//                             <Icon className="h-6 w-6 text-white" />
//                           </div>
//                           <div>
//                             <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                               {item.title}
//                             </h3>
//                             <p className="text-gray-600 dark:text-gray-400">
//                               {item.description}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="grid md:grid-cols-2 gap-6">
//                           <div>
//                             <h4 className="font-medium text-gray-900 dark:text-white mb-3">
//                               Step-by-Step Process:
//                             </h4>
//                             <ol className="space-y-2">
//                               {item.steps.map((step, idx) => (
//                                 <li
//                                   key={idx}
//                                   className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300"
//                                 >
//                                   <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-xs font-medium flex-shrink-0">
//                                     {idx + 1}
//                                   </span>
//                                   <span>{step}</span>
//                                 </li>
//                               ))}
//                             </ol>
//                           </div>

//                           <div>
//                             <h4 className="font-medium text-gray-900 dark:text-white mb-3">
//                               Important Tips:
//                             </h4>
//                             <ul className="space-y-2">
//                               {item.tips.map((tip, idx) => (
//                                 <li
//                                   key={idx}
//                                   className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300"
//                                 >
//                                   <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
//                                   <span>{tip}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {/* Contact Information */}
//                 <div className="mt-8 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
//                   <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
//                     Need Help? Contact Information
//                   </h3>
//                   <div className="grid md:grid-cols-3 gap-4">
//                     <div className="flex items-center space-x-2">
//                       <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
//                       <div>
//                         <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
//                           Admission Office
//                         </p>
//                         <p className="text-sm text-purple-800 dark:text-purple-200">
//                           +91-XXXX-XXXXXX
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
//                       <div>
//                         <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
//                           Student Help Desk
//                         </p>
//                         <p className="text-sm text-purple-800 dark:text-purple-200">
//                           help@college.edu
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
//                       <div>
//                         <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
//                           Office Hours
//                         </p>
//                         <p className="text-sm text-purple-800 dark:text-purple-200">
//                           9 AM - 5 PM
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OnboardingGuide;