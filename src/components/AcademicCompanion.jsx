// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   BookOpen,
//   Calculator,
//   Calendar,
//   Clock,
//   TrendingUp,
//   FileText,
//   Video,
//   Download,
//   Target,
//   CheckCircle,
//   AlertTriangle,
//   Star,
//   Plus,
//   Minus
// } from 'lucide-react';

// const AcademicCompanion = () => {
//   const [activeTab, setActiveTab] = useState('roadmap');
//   const [gpaData, setGpaData] = useState({
//     subjects: [
//       { name: 'Mathematics', credits: 4, grade: 'A', points: 9 },
//       { name: 'Physics', credits: 3, grade: 'B+', points: 8 },
//       { name: 'Programming', credits: 4, grade: 'A+', points: 10 },
//       { name: 'English', credits: 2, grade: 'A', points: 9 }
//     ]
//   });
//   const [attendanceData, setAttendanceData] = useState([
//     { subject: 'Mathematics', attended: 28, total: 32, percentage: 87.5 },
//     { subject: 'Physics', attended: 24, total: 30, percentage: 80.0 },
//     { subject: 'Programming', attended: 30, total: 32, percentage: 93.8 },
//     { subject: 'English', attended: 22, total: 28, percentage: 78.6 }
//   ]);

//   const tabs = [
//     { id: 'roadmap', name: 'Study Roadmap', icon: Target },
//     { id: 'gpa', name: 'GPA Calculator', icon: Calculator },
//     { id: 'attendance', name: 'Attendance Tracker', icon: Calendar },
//     { id: 'resources', name: 'Study Resources', icon: BookOpen }
//   ];

//   const semesterRoadmap = [
//     {
//       semester: 1,
//       subjects: [
//         {
//           name: 'Mathematics I',
//           credits: 4,
//           difficulty: 'Medium',
//           resources: ['Khan Academy Calculus', 'MIT OpenCourseWare'],
//           tips: 'Focus on fundamentals, practice daily'
//         },
//         {
//           name: 'Physics I',
//           credits: 3,
//           difficulty: 'Medium',
//           resources: ['Feynman Lectures', 'Physics Wallah'],
//           tips: 'Understand concepts before memorizing formulas'
//         },
//         {
//           name: 'Programming Fundamentals',
//           credits: 4,
//           difficulty: 'Easy',
//           resources: ['Codecademy', 'FreeCodeCamp'],
//           tips: 'Practice coding daily, start with simple programs'
//         },
//         {
//           name: 'English Communication',
//           credits: 2,
//           difficulty: 'Easy',
//           resources: ['Grammarly', 'TED Talks'],
//           tips: 'Focus on presentation and writing skills'
//         }
//       ]
//     },
//     {
//       semester: 2,
//       subjects: [
//         {
//           name: 'Mathematics II',
//           credits: 4,
//           difficulty: 'Hard',
//           resources: ["Paul's Online Math Notes", 'Professor Leonard'],
//           tips: 'Build on Semester 1 concepts, practice integration'
//         },
//         {
//           name: 'Data Structures',
//           credits: 4,
//           difficulty: 'Hard',
//           resources: ['GeeksforGeeks', 'LeetCode'],
//           tips: 'Implement each data structure from scratch'
//         },
//         {
//           name: 'Digital Electronics',
//           credits: 3,
//           difficulty: 'Medium',
//           resources: ['NPTEL', 'All About Electronics'],
//           tips: 'Practice Boolean algebra and circuit design'
//         }
//       ]
//     }
//   ];

//   const studyResources = [
//     {
//       category: 'Video Lectures',
//       resources: [
//         {
//           name: 'MIT OpenCourseWare',
//           description: 'Free courses from MIT',
//           link: 'https://ocw.mit.edu',
//           rating: 4.9,
//           subjects: ['Mathematics', 'Physics', 'Computer Science']
//         },
//         {
//           name: 'Khan Academy',
//           description: 'Free online courses and practice',
//           link: 'https://khanacademy.org',
//           rating: 4.8,
//           subjects: ['Mathematics', 'Science', 'Programming']
//         },
//         {
//           name: 'NPTEL',
//           description: 'Indian engineering education platform',
//           link: 'https://nptel.ac.in',
//           rating: 4.7,
//           subjects: ['Engineering', 'Science', 'Management']
//         }
//       ]
//     },
//     {
//       category: 'Programming Practice',
//       resources: [
//         {
//           name: 'LeetCode',
//           description: 'Coding interview preparation',
//           link: 'https://leetcode.com',
//           rating: 4.8,
//           subjects: ['Data Structures', 'Algorithms']
//         },
//         {
//           name: 'HackerRank',
//           description: 'Programming challenges and contests',
//           link: 'https://hackerrank.com',
//           rating: 4.6,
//           subjects: ['Programming', 'Problem Solving']
//         },
//         {
//           name: 'GeeksforGeeks',
//           description: 'Programming tutorials and practice',
//           link: 'https://geeksforgeeks.org',
//           rating: 4.7,
//           subjects: ['Computer Science', 'Programming']
//         }
//       ]
//     },
//     {
//       category: 'Previous Year Papers',
//       resources: [
//         {
//           name: 'Mathematics Papers (2020-2023)',
//           description: 'Solved question papers with explanations',
//           link: '#',
//           rating: 4.5,
//           subjects: ['Mathematics']
//         },
//         {
//           name: 'Physics Papers (2020-2023)',
//           description: 'Previous year question papers',
//           link: '#',
//           rating: 4.4,
//           subjects: ['Physics']
//         },
//         {
//           name: 'Programming Papers (2020-2023)',
//           description: 'Coding problems and solutions',
//           link: '#',
//           rating: 4.6,
//           subjects: ['Programming']
//         }
//       ]
//     }
//   ];

//   const calculateGPA = () => {
//     const totalCredits = gpaData.subjects.reduce((sum, subject) => sum + subject.credits, 0);
//     const totalPoints = gpaData.subjects.reduce((sum, subject) => sum + (subject.credits * subject.points), 0);
//     return totalPoints / totalCredits;
//   };

//   const addSubject = () => {
//     setGpaData(prev => ({
//       ...prev,
//       subjects: [...prev.subjects, { name: '', credits: 3, grade: 'B', points: 7 }]
//     }));
//   };

//   const removeSubject = (index) => {
//     setGpaData(prev => ({
//       ...prev,
//       subjects: prev.subjects.filter((_, i) => i !== index)
//     }));
//   };

//   const updateSubject = (index, field, value) => {
//     setGpaData(prev => ({
//       ...prev,
//       subjects: prev.subjects.map((subject, i) => 
//         i === index ? { ...subject, [field]: value } : subject
//       )
//     }));
//   };

//   const gradeToPoints = {
//     'A+': 10, 'A': 9, 'B+': 8, 'B': 7, 'C+': 6, 'C': 5, 'D': 4, 'F': 0
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
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
//               <BookOpen className="h-12 w-12 text-white" />
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Academic Companion
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Your comprehensive academic toolkit for success - study roadmaps, GPA tracking, attendance monitoring, and curated resources.
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
//                       ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
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
//           {activeTab === 'roadmap' && (
//             <div className="space-y-8">
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
//                   <Target className="h-6 w-6 mr-3 text-blue-600" />
//                   Semester-wise Study Roadmap
//                 </h2>

//                 <div className="space-y-8">
//                   {semesterRoadmap.map((semester, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
//                     >
//                       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                         Semester {semester.semester}
//                       </h3>
                      
//                       <div className="grid md:grid-cols-2 gap-6">
//                         {semester.subjects.map((subject, idx) => (
//                           <div
//                             key={idx}
//                             className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
//                           >
//                             <div className="flex justify-between items-start mb-3">
//                               <h4 className="font-semibold text-gray-900 dark:text-white">
//                                 {subject.name}
//                               </h4>
//                               <div className="flex space-x-2">
//                                 <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
//                                   {subject.credits} Credits
//                                 </span>
//                                 <span className={`px-2 py-1 rounded text-xs ${
//                                   subject.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
//                                   subject.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
//                                   'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
//                                 }`}>
//                                   {subject.difficulty}
//                                 </span>
//                               </div>
//                             </div>

//                             <div className="space-y-3">
//                               <div>
//                                 <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                   Recommended Resources:
//                                 </p>
//                                 <div className="flex flex-wrap gap-1">
//                                   {subject.resources.map((resource, resIdx) => (
//                                     <span
//                                       key={resIdx}
//                                       className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs"
//                                     >
//                                       {resource}
//                                     </span>
//                                   ))}
//                                 </div>
//                               </div>

//                               <div>
//                                 <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                   Study Tips:
//                                 </p>
//                                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                                   {subject.tips}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'gpa' && (
//             <div className="space-y-8">
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
//                     <Calculator className="h-6 w-6 mr-3 text-blue-600" />
//                     GPA Calculator
//                   </h2>
//                   <div className="text-right">
//                     <p className="text-sm text-gray-600 dark:text-gray-400">Current GPA</p>
//                     <p className="text-3xl font-bold text-blue-600">
//                       {calculateGPA().toFixed(2)}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   {gpaData.subjects.map((subject, index) => (
//                     <div
//                       key={index}
//                       className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
//                     >
//                       <input
//                         type="text"
//                         placeholder="Subject name"
//                         value={subject.name}
//                         onChange={(e) => updateSubject(index, 'name', e.target.value)}
//                         className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
                      
//                       <input
//                         type="number"
//                         placeholder="Credits"
//                         value={subject.credits}
//                         onChange={(e) => updateSubject(index, 'credits', parseInt(e.target.value) || 0)}
//                         className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
                      
//                       <select
//                         value={subject.grade}
//                         onChange={(e) => {
//                           const grade = e.target.value;
//                           const points = gradeToPoints[grade] || 0;
//                           updateSubject(index, 'grade', grade);
//                           updateSubject(index, 'points', points);
//                         }}
//                         className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         {Object.keys(gradeToPoints).map(grade => (
//                           <option key={grade} value={grade}>{grade}</option>
//                         ))}
//                       </select>
                      
//                       <div className="flex items-center justify-center">
//                         <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                           {subject.points} pts
//                         </span>
//                       </div>
                      
//                       <button
//                         onClick={() => removeSubject(index)}
//                         className="flex items-center justify-center p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
//                       >
//                         <Minus className="h-5 w-5" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={addSubject}
//                   className="mt-4 flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   <Plus className="h-5 w-5" />
//                   <span>Add Subject</span>
//                 </button>

//                 <div className="mt-8 grid md:grid-cols-3 gap-6">
//                   <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
//                     <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
//                       Total Credits
//                     </h3>
//                     <p className="text-2xl font-bold text-blue-600">
//                       {gpaData.subjects.reduce((sum, subject) => sum + subject.credits, 0)}
//                     </p>
//                   </div>
                  
//                   <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
//                     <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
//                       Grade Points
//                     </h3>
//                     <p className="text-2xl font-bold text-green-600">
//                       {gpaData.subjects.reduce((sum, subject) => sum + (subject.credits * subject.points), 0)}
//                     </p>
//                   </div>
                  
//                   <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
//                     <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
//                       CGPA Status
//                     </h3>
//                     <p className={`text-2xl font-bold ${
//                       calculateGPA() >= 8.0 ? 'text-green-600' : 
//                       calculateGPA() >= 6.0 ? 'text-yellow-600' : 'text-red-600'
//                     }`}>
//                       {calculateGPA() >= 8.0 ? 'Honors' : 
//                        calculateGPA() >= 6.0 ? 'Good' : 'Needs Improvement'}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'attendance' && (
//             <div className="space-y-8">
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
//                   <Calendar className="h-6 w-6 mr-3 text-blue-600" />
//                   Attendance Tracker
//                 </h2>

//                 <div className="grid gap-6">
//                   {attendanceData.map((subject, index) => (
//                     <div
//                       key={index}
//                       className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
//                     >
//                       <div className="flex justify-between items-start mb-4">
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                           {subject.subject}
//                         </h3>
//                         <div className="text-right">
//                           <p className={`text-2xl font-bold ${
//                             subject.percentage >= 85 ? 'text-green-600' :
//                             subject.percentage >= 75 ? 'text-yellow-600' : 'text-red-600'
//                           }`}>
//                             {subject.percentage.toFixed(1)}%
//                           </p>
//                           <p className="text-sm text-gray-600 dark:text-gray-400">
//                             {subject.attended}/{subject.total} classes
//                           </p>
//                         </div>
//                       </div>

//                       <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-4">
//                         <div
//                           className={`h-3 rounded-full transition-all duration-300 ${
//                             subject.percentage >= 85 ? 'bg-green-500' :
//                             subject.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
//                           }`}
//                           style={{ width: `${subject.percentage}%` }}
//                         ></div>
//                       </div>

//                       <div className="flex items-center justify-between text-sm">
//                         <div className="flex items-center space-x-2">
//                           {subject.percentage >= 85 ? (
//                             <CheckCircle className="h-5 w-5 text-green-500" />
//                           ) : subject.percentage >= 75 ? (
//                             <AlertTriangle className="h-5 w-5 text-yellow-500" />
//                           ) : (
//                             <AlertTriangle className="h-5 w-5 text-red-500" />
//                           )}
//                           <span className="text-gray-600 dark:text-gray-400">
//                             {subject.percentage >= 85 ? 'Good attendance' :
//                              subject.percentage >= 75 ? 'Minimum requirement met' : 'Below minimum requirement'}
//                           </span>
//                         </div>
                        
//                         <span className="text-gray-500 dark:text-gray-400">
//                           Need {Math.max(0, Math.ceil((75 * subject.total - 100 * subject.attended) / 25))} more classes for 75%
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
//                   <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
//                     Attendance Guidelines
//                   </h3>
//                   <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
//                     <li>• Minimum 75% attendance required for end semester exam eligibility</li>
//                     <li>• Medical leave can be adjusted with proper documentation</li>
//                     <li>• Attendance shortage can result in academic penalties</li>
//                     <li>• Regular attendance improves understanding and performance</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'resources' && (
//             <div className="space-y-8">
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
//                   <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
//                   Study Resources
//                 </h2>

//                 <div className="space-y-8">
//                   {studyResources.map((category, index) => (
//                     <div key={index}>
//                       <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                         {category.category}
//                       </h3>
                      
//                       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {category.resources.map((resource, idx) => (
//                           <div
//                             key={idx}
//                             className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
//                           >
//                             <div className="flex justify-between items-start mb-3">
//                               <h4 className="font-semibold text-gray-900 dark:text-white">
//                                 {resource.name}
//                               </h4>
//                               <div className="flex items-center space-x-1">
//                                 <Star className="h-4 w-4 text-yellow-500 fill-current" />
//                                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                                   {resource.rating}
//                                 </span>
//                               </div>
//                             </div>
                            
//                             <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
//                               {resource.description}
//                             </p>
                            
//                             <div className="flex flex-wrap gap-1 mb-4">
//                               {resource.subjects.map((subject, subIdx) => (
//                                 <span
//                                   key={subIdx}
//                                   className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs"
//                                 >
//                                   {subject}
//                                 </span>
//                               ))}
//                             </div>
                            
//                             <a
//                               href={resource.link}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
//                             >
//                               <span>Access Resource</span>
//                               <Download className="h-4 w-4" />
//                             </a>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AcademicCompanion;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Link2,
  Users,
  ClipboardList
} from 'lucide-react';

const AcademicCompanion = () => {
  const [activeTab, setActiveTab] = useState('syllabus');


  const [selectedYear, setSelectedYear] = useState('');
const [selectedSemester, setSelectedSemester] = useState('');
const [selectedBranch, setSelectedBranch] = useState('');

const semesterOptions = {
  '1st': ['Semester 1', 'Semester 2'],
  '2nd': ['Semester 3', 'Semester 4'],
  '3rd': ['Semester 5', 'Semester 6'],
  '4th': ['Semester 7', 'Semester 8']
};

const syllabusData = {
  '1st': {
    'Semester 1': {
      CSE: [
        { name: 'Mathematics I', link: '#' },
        { name: 'Programming', link: '#' }
      ],
      ECE: [
        { name: 'Circuit Theory', link: '#' }
      ]
    },
    'Semester 2': {
      CSE: [
        { name: 'Data Structures', link: '#' }
      ]
    }
  },
  '2nd': {
    'Semester 3': {
      CSE: [
        { name: 'DBMS', link: '#' }
      ]
    }
  }
};

  const tabs = [
    { id: 'syllabus', name: 'Syllabus', icon: FileText },
    { id: 'resources', name: 'Study Resources', icon: BookOpen },
    { id: 'exam', name: 'Examination Structure', icon: ClipboardList },
    { id: 'groups', name: 'WhatsApp Groups', icon: Users }
  ];

  // const syllabusData = {
  //   CSE: {
  //     'Semester 1': [
  //       { name: 'Mathematics I', link: '#' },
  //       { name: 'Physics I', link: '#' },
  //       { name: 'Programming', link: '#' }
  //     ],
  //     'Semester 2': [
  //       { name: 'Mathematics II', link: '#' },
  //       { name: 'Data Structures', link: '#' }
  //     ]
  //   },
  //   ECE: {
  //     'Semester 1': [
  //       { name: 'Circuit Theory', link: '#' },
  //       { name: 'Digital Electronics', link: '#' }
  //     ]
  //   }
  // };

  const resources = {
    'Drive Links': [
      { name: 'CSE PYQs 2020–24', link: '#' },
      { name: 'ECE Notes', link: '#' }
    ],
    'YouTube Channels': [
      { name: 'Gate Smashers', link: 'https://www.youtube.com/@GateSmasher' },
      { name: 'Neso Academy', link: 'https://www.youtube.com/@NesoAcademy' }
    ],
    'Coding Websites': [
      { name: 'LeetCode', link: 'https://leetcode.com' },
      { name: 'GeeksforGeeks', link: 'https://geeksforgeeks.org' }
    ]
  };

  const examStructure = [
    { name: 'T1 (Mid-Sem)', marks: 20, duration: '1 hour', topics: 'Units 1–3' },
    { name: 'T2 (Second Mid-Sem)', marks: 20, duration: '1 hour', topics: 'Units 4–5' },
    { name: 'T3 (End-Sem)', marks: 60, duration: '2.5 hours', topics: 'Full syllabus' }
  ];

  const whatsappGroups = {
    'Batch 2025': 'https://chat.whatsapp.com/example1',
    'Batch 2026': 'https://chat.whatsapp.com/example2',
    'Batch 2027': 'https://chat.whatsapp.com/example3'
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Companion
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your central academic hub – syllabus, resources, exam info, and batch communities.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:block">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'syllabus' && (
  <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
      <FileText className="h-6 w-6 mr-3 text-blue-600" />
      Syllabus Finder
    </h3>

    {/* Filters */}
    <div className="grid md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Year of Study
        </label>
        <select
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value);
            setSelectedSemester('');
            setSelectedBranch('');
          }}
          className="w-full p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value="">Select Year</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
      </div>

      {selectedYear && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Semester
          </label>
          <select
            value={selectedSemester}
            onChange={(e) => {
              setSelectedSemester(e.target.value);
              setSelectedBranch('');
            }}
            className="w-full p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">Select Semester</option>
            {semesterOptions[selectedYear].map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>
      )}

      {selectedSemester && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Branch
          </label>
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">Select Branch</option>
            {Object.keys(syllabusData[selectedYear]?.[selectedSemester] || {}).map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>
      )}
    </div>

    {/* Syllabus Results */}
    {selectedYear && selectedSemester && selectedBranch && (
      <div className="mt-6">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          Syllabus for {selectedBranch} – {selectedSemester}, {selectedYear}
        </h4>
        <ul className="space-y-3">
          {(syllabusData[selectedYear]?.[selectedSemester]?.[selectedBranch] || []).map((subject, idx) => (
            <li key={idx}>
              <a
                href={subject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-2"
              >
                <FileText className="h-4 w-4" />
                <span>{subject.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}


          {activeTab === 'resources' && (
            <div className="space-y-6">
              {Object.entries(resources).map(([category, links]) => (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">{category}</h3>
                  <ul className="space-y-2">
                    {links.map((res, idx) => (
                      <li key={idx}>
                        <a
                          href={res.link}
                          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Link2 className="h-4 w-4" />
                          <span>{res.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'exam' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-6 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <ClipboardList className="h-6 w-6 mr-3 text-blue-600" />
                Examination Structure
              </h3>
              {examStructure.map((exam, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{exam.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Marks:</strong> {exam.marks} | <strong>Duration:</strong> {exam.duration}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Topics Covered:</strong> {exam.topics}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'groups' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Users className="h-6 w-6 mr-3 text-blue-600" />
                WhatsApp Group Links
              </h3>
              <ul className="space-y-3">
                {Object.entries(whatsappGroups).map(([batch, link]) => (
                  <li key={batch}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-2"
                    >
                      <Link2 className="h-4 w-4" />
                      <span>{batch}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicCompanion;
