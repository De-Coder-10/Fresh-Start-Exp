// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   BookOpen, 
//   Download, 
//   ExternalLink, 
//   Search, 
//   Filter, 
//   Star,
//   FileText,
//   Video,
//   Link,
//   Calendar,
//   Clock,
//   User,
//   Tag,
//   Eye,
//   Heart
// } from 'lucide-react';

// const ResourceHub = () => {
//   const [activeTab, setActiveTab] = useState('downloads');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const tabs = [
//     { id: 'downloads', name: 'Downloads', icon: Download },
//     { id: 'links', name: 'Helpful Links', icon: ExternalLink },
//     { id: 'guides', name: 'Study Guides', icon: BookOpen },
//     { id: 'videos', name: 'Video Resources', icon: Video }
//   ];

//   const downloadableResources = [
//     {
//       id: 1,
//       title: 'Academic System Handbook 2024',
//       description: 'Complete guide to the academic system, grading, and course structure',
//       category: 'Academic',
//       type: 'PDF',
//       size: '2.5 MB',
//       downloads: 1250,
//       rating: 4.8,
//       uploadDate: '2024-01-15',
//       tags: ['Academic', 'Handbook', 'Grading', 'Course Structure']
//     },
//     {
//       id: 2,
//       title: 'College Admission Brochure',
//       description: 'Official admission brochure with all course details and fee structure',
//       category: 'Admission',
//       type: 'PDF',
//       size: '5.2 MB',
//       downloads: 890,
//       rating: 4.6,
//       uploadDate: '2024-01-10',
//       tags: ['Admission', 'Courses', 'Fees', 'Brochure']
//     },
//     {
//       id: 3,
//       title: 'Hostel Rules & Regulations',
//       description: 'Complete hostel guidelines, rules, and facility information',
//       category: 'Hostel',
//       type: 'PDF',
//       size: '1.8 MB',
//       downloads: 675,
//       rating: 4.4,
//       uploadDate: '2024-01-08',
//       tags: ['Hostel', 'Rules', 'Guidelines', 'Facilities']
//     },
//     {
//       id: 4,
//       title: 'Lab Manual - Programming Fundamentals',
//       description: 'Complete lab manual for first-year programming course',
//       category: 'Lab Manual',
//       type: 'PDF',
//       size: '3.1 MB',
//       downloads: 1450,
//       rating: 4.9,
//       uploadDate: '2024-01-12',
//       tags: ['Programming', 'Lab', 'First Year', 'C++']
//     },
//     {
//       id: 5,
//       title: 'Mathematics Formula Sheet',
//       description: 'Essential formulas for engineering mathematics',
//       category: 'Study Material',
//       type: 'PDF',
//       size: '0.8 MB',
//       downloads: 2100,
//       rating: 4.7,
//       uploadDate: '2024-01-05',
//       tags: ['Mathematics', 'Formulas', 'Engineering', 'Reference']
//     },
//     {
//       id: 6,
//       title: 'Campus Map & Facilities Guide',
//       description: 'Detailed campus map with all building locations and facilities',
//       category: 'Campus',
//       type: 'PDF',
//       size: '4.5 MB',
//       downloads: 980,
//       rating: 4.5,
//       uploadDate: '2024-01-03',
//       tags: ['Campus', 'Map', 'Facilities', 'Navigation']
//     }
//   ];

//   const helpfulLinks = [
//     {
//       id: 1,
//       title: 'MATLAB Online Portal',
//       description: 'Access MATLAB software online for engineering calculations',
//       url: 'https://matlab.mathworks.com',
//       category: 'Software',
//       visits: 3200,
//       rating: 4.8,
//       tags: ['MATLAB', 'Engineering', 'Software', 'Calculations']
//     },
//     {
//       id: 2,
//       title: 'Learning Resource Center (LRC)',
//       description: 'Digital library with books, journals, and research papers',
//       url: 'https://lrc.college.edu',
//       category: 'Library',
//       visits: 2800,
//       rating: 4.6,
//       tags: ['Library', 'Books', 'Research', 'Digital']
//     },
//     {
//       id: 3,
//       title: 'Student Portal',
//       description: 'Access grades, attendance, timetable, and announcements',
//       url: 'https://portal.college.edu',
//       category: 'Academic',
//       visits: 5600,
//       rating: 4.4,
//       tags: ['Portal', 'Grades', 'Attendance', 'Timetable']
//     },
//     {
//       id: 4,
//       title: 'E-Forms & Applications',
//       description: 'Download and submit various college forms online',
//       url: 'https://forms.college.edu',
//       category: 'Forms',
//       visits: 1900,
//       rating: 4.2,
//       tags: ['Forms', 'Applications', 'Online', 'Submission']
//     },
//     {
//       id: 5,
//       title: 'Course Outlines & Syllabus',
//       description: 'Official course outlines for all branches and semesters',
//       url: 'https://syllabus.college.edu',
//       category: 'Academic',
//       visits: 4100,
//       rating: 4.7,
//       tags: ['Syllabus', 'Course', 'Outline', 'Academic']
//     },
//     {
//       id: 6,
//       title: 'Placement Cell Portal',
//       description: 'Job opportunities, internships, and placement statistics',
//       url: 'https://placements.college.edu',
//       category: 'Career',
//       visits: 2400,
//       rating: 4.5,
//       tags: ['Placement', 'Jobs', 'Internships', 'Career']
//     }
//   ];

//   const studyGuides = [
//     {
//       id: 1,
//       title: 'First Year Survival Guide',
//       description: 'Complete guide to succeeding in your first year of engineering',
//       author: 'Academic Team',
//       readTime: '15 min',
//       category: 'General',
//       likes: 245,
//       views: 3200,
//       lastUpdated: '2024-01-15',
//       tags: ['First Year', 'Tips', 'Academic', 'Success']
//     },
//     {
//       id: 2,
//       title: 'Effective Study Techniques',
//       description: 'Proven methods to improve your study efficiency and retention',
//       author: 'Dr. Sarah Johnson',
//       readTime: '12 min',
//       category: 'Study Tips',
//       likes: 189,
//       views: 2800,
//       lastUpdated: '2024-01-12',
//       tags: ['Study', 'Techniques', 'Efficiency', 'Memory']
//     },
//     {
//       id: 3,
//       title: 'Time Management for Students',
//       description: 'Balance academics, extracurriculars, and personal life effectively',
//       author: 'Student Counselor',
//       readTime: '10 min',
//       category: 'Life Skills',
//       likes: 156,
//       views: 2100,
//       lastUpdated: '2024-01-10',
//       tags: ['Time Management', 'Balance', 'Productivity', 'Life Skills']
//     },
//     {
//       id: 4,
//       title: 'Exam Preparation Strategy',
//       description: 'Step-by-step approach to prepare for semester examinations',
//       author: 'Academic Team',
//       readTime: '18 min',
//       category: 'Exam Prep',
//       likes: 298,
//       views: 4500,
//       lastUpdated: '2024-01-08',
//       tags: ['Exam', 'Preparation', 'Strategy', 'Academic']
//     },
//     {
//       id: 5,
//       title: 'Research Paper Writing Guide',
//       description: 'Learn how to write effective research papers and reports',
//       author: 'Prof. Michael Chen',
//       readTime: '25 min',
//       category: 'Writing',
//       likes: 134,
//       views: 1800,
//       lastUpdated: '2024-01-05',
//       tags: ['Research', 'Writing', 'Papers', 'Academic']
//     },
//     {
//       id: 6,
//       title: 'Group Study Best Practices',
//       description: 'Maximize the benefits of studying with peers',
//       author: 'Student Success Team',
//       readTime: '8 min',
//       category: 'Study Tips',
//       likes: 167,
//       views: 2300,
//       lastUpdated: '2024-01-03',
//       tags: ['Group Study', 'Collaboration', 'Peers', 'Learning']
//     }
//   ];

//   const videoResources = [
//     {
//       id: 1,
//       title: 'Campus Tour - Virtual Walkthrough',
//       description: 'Complete virtual tour of the campus facilities and buildings',
//       duration: '12:45',
//       category: 'Campus',
//       views: 8900,
//       likes: 456,
//       uploadDate: '2024-01-15',
//       thumbnail: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
//       tags: ['Campus', 'Tour', 'Virtual', 'Facilities']
//     },
//     {
//       id: 2,
//       title: 'How to Use the Library System',
//       description: 'Step-by-step guide to accessing and using library resources',
//       duration: '8:30',
//       category: 'Tutorial',
//       views: 3400,
//       likes: 189,
//       uploadDate: '2024-01-12',
//       thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
//       tags: ['Library', 'Tutorial', 'Resources', 'Guide']
//     },
//     {
//       id: 3,
//       title: 'Student Life at Our College',
//       description: 'Insights into student life, clubs, and extracurricular activities',
//       duration: '15:20',
//       category: 'Student Life',
//       views: 6700,
//       likes: 378,
//       uploadDate: '2024-01-10',
//       thumbnail: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
//       tags: ['Student Life', 'Clubs', 'Activities', 'Campus']
//     },
//     {
//       id: 4,
//       title: 'Academic Success Tips',
//       description: 'Expert advice on achieving academic excellence in engineering',
//       duration: '18:15',
//       category: 'Academic',
//       views: 5200,
//       likes: 267,
//       uploadDate: '2024-01-08',
//       thumbnail: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=400',
//       tags: ['Academic', 'Success', 'Tips', 'Engineering']
//     },
//     {
//       id: 5,
//       title: 'Hostel Life Guide',
//       description: 'Everything you need to know about living in college hostels',
//       duration: '10:45',
//       category: 'Hostel',
//       views: 4100,
//       likes: 234,
//       uploadDate: '2024-01-05',
//       thumbnail: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
//       tags: ['Hostel', 'Life', 'Guide', 'Living']
//     },
//     {
//       id: 6,
//       title: 'Career Guidance Session',
//       description: 'Industry experts share insights on career opportunities',
//       duration: '32:10',
//       category: 'Career',
//       views: 7800,
//       likes: 445,
//       uploadDate: '2024-01-03',
//       thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
//       tags: ['Career', 'Guidance', 'Industry', 'Opportunities']
//     }
//   ];

//   const categories = ['all', 'Academic', 'Admission', 'Hostel', 'Campus', 'Career', 'Study Material', 'Software', 'Library', 'Forms'];

//   const getFilteredData = () => {
//     let data = [];
//     switch (activeTab) {
//       case 'downloads':
//         data = downloadableResources;
//         break;
//       case 'links':
//         data = helpfulLinks;
//         break;
//       case 'guides':
//         data = studyGuides;
//         break;
//       case 'videos':
//         data = videoResources;
//         break;
//       default:
//         data = [];
//     }

//     return data.filter(item => {
//       const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
//       const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     });
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
//             <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl shadow-lg">
//               <BookOpen className="h-12 w-12 text-white" />
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Resource Hub
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Access all essential documents, helpful links, study guides, and video resources in one centralized location.
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
//                       ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
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

//         {/* Search and Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-8"
//         >
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="flex-1">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Search resources..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                   />
//                 </div>
//               </div>
              
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               >
//                 {categories.map(category => (
//                   <option key={category} value={category}>
//                     {category === 'all' ? 'All Categories' : category}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </motion.div>

//         {/* Tab Content */}
//         <motion.div
//           key={activeTab}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {activeTab === 'downloads' && (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {getFilteredData().map((resource) => (
//                 <div
//                   key={resource.id}
//                   className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
//                       <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
//                     </div>
//                     <div className="text-right">
//                       <div className="flex items-center space-x-1 mb-1">
//                         <Star className="h-4 w-4 text-yellow-500 fill-current" />
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                           {resource.rating}
//                         </span>
//                       </div>
//                       <span className="text-xs text-gray-500 dark:text-gray-400">
//                         {resource.downloads} downloads
//                       </span>
//                     </div>
//                   </div>

//                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//                     {resource.title}
//                   </h3>
                  
//                   <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
//                     {resource.description}
//                   </p>

//                   <div className="flex items-center justify-between text-sm mb-4">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       resource.category === 'Academic' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
//                       resource.category === 'Admission' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
//                       resource.category === 'Hostel' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
//                       resource.category === 'Campus' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
//                       'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
//                     }`}>
//                       {resource.category}
//                     </span>
//                     <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
//                       <span>{resource.type}</span>
//                       <span>•</span>
//                       <span>{resource.size}</span>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {resource.tags.slice(0, 3).map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>

//                   <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2">
//                     <Download className="h-4 w-4" />
//                     <span>Download</span>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === 'links' && (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {getFilteredData().map((link) => (
//                 <div
//                   key={link.id}
//                   className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
//                       <Link className="h-6 w-6 text-blue-600 dark:text-blue-400" />
//                     </div>
//                     <div className="text-right">
//                       <div className="flex items-center space-x-1 mb-1">
//                         <Star className="h-4 w-4 text-yellow-500 fill-current" />
//                         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                           {link.rating}
//                         </span>
//                       </div>
//                       <span className="text-xs text-gray-500 dark:text-gray-400">
//                         {link.visits} visits
//                       </span>
//                     </div>
//                   </div>

//                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//                     {link.title}
//                   </h3>
                  
//                   <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
//                     {link.description}
//                   </p>

//                   <div className="mb-4">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       link.category === 'Software' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
//                       link.category === 'Library' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
//                       link.category === 'Academic' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
//                       link.category === 'Forms' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
//                       'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
//                     }`}>
//                       {link.category}
//                     </span>
//                   </div>

//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {link.tags.slice(0, 3).map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>

//                   <a
//                     href={link.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
//                   >
//                     <ExternalLink className="h-4 w-4" />
//                     <span>Visit Link</span>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === 'guides' && (
//             <div className="grid md:grid-cols-2 gap-6">
//               {getFilteredData().map((guide) => (
//                 <div
//                   key={guide.id}
//                   className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
//                       <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
//                     </div>
//                     <div className="text-right">
//                       <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
//                         <div className="flex items-center space-x-1">
//                           <Eye className="h-4 w-4" />
//                           <span>{guide.views}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Heart className="h-4 w-4" />
//                           <span>{guide.likes}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//                     {guide.title}
//                   </h3>
                  
//                   <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
//                     {guide.description}
//                   </p>

//                   <div className="flex items-center justify-between text-sm mb-4">
//                     <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
//                       <User className="h-4 w-4" />
//                       <span>{guide.author}</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
//                       <Clock className="h-4 w-4" />
//                       <span>{guide.readTime}</span>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       guide.category === 'General' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
//                       guide.category === 'Study Tips' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
//                       guide.category === 'Life Skills' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
//                       guide.category === 'Exam Prep' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
//                       'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
//                     }`}>
//                       {guide.category}
//                     </span>
//                   </div>

//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {guide.tags.slice(0, 3).map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>

//                   <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-medium">
//                     Read Guide
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === 'videos' && (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {getFilteredData().map((video) => (
//                 <div
//                   key={video.id}
//                   className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="relative">
//                     <img
//                       src={video.thumbnail}
//                       alt={video.title}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
//                       {video.duration}
//                     </div>
//                     <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                       <div className="bg-white bg-opacity-90 p-3 rounded-full">
//                         <Video className="h-6 w-6 text-gray-800" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//                       {video.title}
//                     </h3>
                    
//                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
//                       {video.description}
//                     </p>

//                     <div className="flex items-center justify-between text-sm mb-4">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         video.category === 'Campus' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
//                         video.category === 'Tutorial' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
//                         video.category === 'Student Life' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
//                         video.category === 'Academic' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
//                         video.category === 'Hostel' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300' :
//                         'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
//                       }`}>
//                         {video.category}
//                       </span>
//                       <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
//                         <div className="flex items-center space-x-1">
//                           <Eye className="h-4 w-4" />
//                           <span>{video.views}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Heart className="h-4 w-4" />
//                           <span>{video.likes}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap gap-1 mb-4">
//                       {video.tags.slice(0, 3).map((tag, idx) => (
//                         <span
//                           key={idx}
//                           className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
//                         >
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>

//                     <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2">
//                       <Video className="h-4 w-4" />
//                       <span>Watch Video</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </motion.div>

//         {/* No Results */}
//         {getFilteredData().length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
//               <Search className="h-8 w-8 text-gray-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//               No resources found
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400">
//               Try adjusting your search terms or filters to find what you're looking for.
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResourceHub;