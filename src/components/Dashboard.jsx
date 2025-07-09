



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { motion } from 'framer-motion';
// import { 
//   BookOpen, 
//   Users, 
//   Calendar, 
//   TrendingUp, 
//   Bell, 
//   MapPin,
//   Heart,
//   Briefcase,
//   CheckCircle,
//   AlertTriangle,
//   Star,
//   Clock,
//   Target,
//   Award,
//   MessageCircle,
//   FileText,
//   Zap
// } from 'lucide-react';

// const Dashboard = () => {
//   const { user } = useAuth();
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const quickStats = [
//     // {
//     //   title: 'Current CGPA',
//     //   value: '8.5',
//     //   change: '+0.2',
//     //   icon: TrendingUp,
//     //   color: 'from-green-500 to-emerald-500',
//     //   bgColor: 'bg-green-50 dark:bg-green-900/20'
//     // },
//     {
//       title: 'Click to visit WebPortal',
//       // value: '87%',
//       // change: '-3%',
//       icon: Calendar ,
//       color: 'from-blue-500 to-cyan-500',
//       bgColor: 'bg-blue-50 dark:bg-blue-900/20',
//       link: '/login'
//     }

    
//     // {
//     //   title: 'Assignments Due',
//     //   value: '3',
//     //   change: 'This Week',
//     //   icon: FileText,
//     //   color: 'from-orange-500 to-red-500',
//     //   bgColor: 'bg-orange-50 dark:bg-orange-900/20'
//     // },
//     // {
//     //   title: 'Study Streak',
//     //   value: '12',
//     //   change: 'Days',
//     //   icon: Zap,
//     //   color: 'from-purple-500 to-pink-500',
//     //   bgColor: 'bg-purple-50 dark:bg-purple-900/20'
//     // }
//   ];

//   const quickActions = [
//     {
//       title: 'Academic Companion',
//       description: 'Study materials, GPA calculator, timetable',
//       icon: BookOpen,
//       color: 'from-blue-500 to-cyan-500',
//       link: '/academic-companion'
//     },
//     {
//       title: 'Find a Mentor',
//       description: 'Connect with seniors and get guidance',
//       icon: Users,
//       color: 'from-green-500 to-emerald-500',
//       link: '/mentorship'
//     },
//     {
//       title: 'Campus Life',
//       description: 'Clubs, events, food, and campus info',
//       icon: Heart,
//       color: 'from-pink-500 to-rose-500',
//       link: '/campus-life'
//     },
//     {
//       title: 'Career Toolkit',
//       description: 'Resume builder, internships, skill development',
//       icon: Briefcase,
//       color: 'from-purple-500 to-indigo-500',
//       link: '/career-toolkit'
//     },
//     {
//       title: 'Mental Health',
//       description: 'Support, counseling, and wellness resources',
//       icon: Heart,
//       color: 'from-teal-500 to-cyan-500',
//       link: '/mental-health'
//     },
//     {
//       title: 'College Essentials',
//       description: 'Campus map, faculty directory, college info',
//       icon: MapPin,
//       color: 'from-orange-500 to-red-500',
//       link: '/college-essentials'
//     }
//   ];

//   const upcomingEvents = [
//     {
//       title: 'Data Structures Quiz',
//       date: 'Tomorrow, 10:00 AM',
//       type: 'Academic',
//       color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
//     },
//     {
//       title: 'Tech Fest Registration',
//       date: 'Dec 15, 2024',
//       type: 'Event',
//       color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
//     },
//     {
//       title: 'Placement Workshop',
//       date: 'Dec 20, 2024',
//       type: 'Career',
//       color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
//     },
//     {
//       title: 'Mental Health Seminar',
//       date: 'Dec 22, 2024',
//       type: 'Wellness',
//       color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300'
//     }
//   ];

//   const recentNotifications = [
//     {
//       title: 'New assignment posted in Mathematics',
//       time: '2 hours ago',
//       type: 'academic',
//       icon: FileText
//     },
//     {
//       title: 'Your mentor replied to your message',
//       time: '4 hours ago',
//       type: 'mentorship',
//       icon: MessageCircle
//     },
//     {
//       title: 'Tech club meeting tomorrow at 4 PM',
//       time: '6 hours ago',
//       type: 'event',
//       icon: Users
//     },
//     {
//       title: 'Attendance below 85% in Physics',
//       time: '1 day ago',
//       type: 'warning',
//       icon: AlertTriangle
//     }
//   ];

//   const achievements = [
//     {
//       title: 'First Week Completed',
//       description: 'Successfully completed your first week!',
//       icon: Star,
//       earned: true
//     },
//     {
//       title: 'Study Streak',
//       description: 'Maintained 7-day study streak',
//       icon: Zap,
//       earned: true
//     },
//     {
//       title: 'Social Butterfly',
//       description: 'Connected with 5 mentors',
//       icon: Users,
//       earned: false
//     },
//     {
//       title: 'Academic Excellence',
//       description: 'Maintain CGPA above 8.0',
//       icon: Award,
//       earned: false
//     }
//   ];

//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Welcome Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-8"
//         >
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//               <div>
//                 <h1 className="text-3xl md:text-4xl font-bold mb-2">
//                   Welcome back, {user?.name}! 👋
//                 </h1>
//                 <p className="text-blue-100 text-lg">
//                   {user?.branch} • Semester {user?.semester} • {user?.rollNumber}
//                 </p>
//                 <p className="text-blue-200 mt-2">
//                   {currentTime.toLocaleDateString('en-US', { 
//                     weekday: 'long', 
//                     year: 'numeric', 
//                     month: 'long', 
//                     day: 'numeric' 
//                   })}
//                 </p>
//               </div>
//               <div className="mt-4 md:mt-0">
//                 <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
//                   <Clock className="h-8 w-8 mx-auto mb-2" />
//                   <div className="text-2xl font-bold">
//                     {currentTime.toLocaleTimeString('en-US', { 
//                       hour: '2-digit', 
//                       minute: '2-digit' 
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Quick Stats */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
//         >
//           {quickStats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <div
//                 key={index}
//                 className={`${stat.bgColor} p-6 rounded-xl border border-gray-200 dark:border-gray-700`}
//               >
                
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg`}>
//                     <Icon className="h-6 w-6 text-white" />
//                   </div>
//                   <span className="text-sm text-gray-600 dark:text-gray-400">
//                     {stat.change}
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
//                   {stat.value}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm">
//                   {stat.title}
//                 </p>
//               </div>
//             );
//           })}
//         </motion.div> */}



//         <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, delay: 0.1 }}
//   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
// >
//   {quickStats.map((stat, index) => {
//     const Icon = stat.icon;
//     const CardContent = (
//       <div
//         key={index}
//         className={`${stat.bgColor} p-6 rounded-xl border border-gray-200 items-center justify-center text-center dark:border-gray-700 hover:shadow-md transition cursor-pointer`}
//       >
//         {/* <div className="flex items-center  mb-4">
//           <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg`}>
//             <Icon className="h-6 w-6 text-white " />
//           </div>
//           <span className="text-sm text-gray-600 dark:text-gray-400">
//             {stat.change}
//           </span>
//         </div> */}


//         <div className="flex justify-center mb-4">
//   <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-full flex items-center justify-center`}>
//     <Icon className="h-6 w-6 text-white" />
//   </div>
//   <span className="text-sm text-gray-600 dark:text-gray-400">
//             {stat.change}
//           </span>
// </div>


//         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
//           {stat.value}
//         </h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">
//           {stat.title}
//         </p>
//       </div>
//     );

//     return stat.link ? (
//       <Link to={stat.link} key={index}>
//         {CardContent}
//       </Link>
//     ) : (
//       <div key={index}>{CardContent}</div>
//     );
//   })}
// </motion.div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Quick Actions */}
//           <div className="lg:col-span-2 ">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="mb-8"
//             >
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                 Quick Actions
//               </h2>
//               <div className="grid md:grid-cols-1 gap-6 ">

//                 {/* {quickActions.map((action, index) => {
//                   const Icon = action.icon;
//                   return (
//                     <Link
//                       key={index}
//                       to={action.link}
//                       className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                     >
//                       <div className="flex items-start space-x-4">
//                         <div className={`bg-gradient-to-r ${action.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
//                           <Icon className="h-6 w-6 text-white" />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                             {action.title}
//                           </h3>
//                           <p className="text-gray-600 dark:text-gray-400 text-sm">
//                             {action.description}
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   );
//                 })}
                
//                 */}



//                 <div className="grid md:grid-cols-2 gap-6">
//   <Link to="/AcademicCompanion" className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className="flex items-start space-x-4">
//       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
//         <BookOpen className="h-6 w-6 text-white" />
//       </div>

//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Academic Companion</h3>

//         <p className="text-gray-600 dark:text-gray-400 text-sm">Study materials, GPA calculator, timetable</p>
//       </div>
//     </div>
//   </Link>

//   <Link to="/MentorshipHub" className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className="flex items-start space-x-4">
//       <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
//         <Users className="h-6 w-6 text-white" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Find a Mentor</h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">Connect with seniors and get guidance</p>
//       </div>
//     </div>
//   </Link>

//   <Link to="/CampusLife" className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className="flex items-start space-x-4">
//       <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
//         <Heart className="h-6 w-6 text-white" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Campus Life</h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">Clubs, events, food, and campus info</p>
//       </div>
//     </div>
//   </Link>

//   <Link to="/CareerToolkit" className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className="flex items-start space-x-4">
//       <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
//         <Briefcase className="h-6 w-6 text-white" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Career Toolkit</h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">Resume builder, internships, skill development</p>
//       </div>
//     </div>
//   </Link>

//   <Link to="/MentalHealth" className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className="flex items-start space-x-4">
//       <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
//         <Heart className="h-6 w-6 text-white" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mental Health</h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">Support, counseling, and wellness resources</p>
//       </div>
//     </div>
//   </Link>

//   <Link to="/CollegeEssentials" className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className="flex items-start space-x-4">
//       <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
//         <MapPin className="h-6 w-6 text-white" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">College Essentials</h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm">Campus map, faculty directory, college info</p>
//       </div>
//     </div>
//   </Link>
// </div>

//               </div>
//             </motion.div>

//             {/* Upcoming Events */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                 Upcoming Events
//               </h2>
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
//                 <div className="space-y-4">
//                   {upcomingEvents.map((event, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
//                     >
//                       <div>
//                         <h3 className="font-semibold text-gray-900 dark:text-white">
//                           {event.title}
//                         </h3>
//                         <p className="text-sm text-gray-600 dark:text-gray-400">
//                           {event.date}
//                         </p>
//                       </div>
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.color}`}>
//                         {event.type}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
//             {/* Notifications */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
//                 <Bell className="h-5 w-5 mr-2" />
//                 Recent Notifications
//               </h2>
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
//                 <div className="space-y-3">
//                   {recentNotifications.map((notification, index) => {
//                     const Icon = notification.icon;
//                     return (
//                       <div
//                         key={index}
//                         className="flex items-start space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
//                       >
//                         <div className={`p-2 rounded-lg ${
//                           notification.type === 'warning' 
//                             ? 'bg-orange-100 dark:bg-orange-900/30' 
//                             : 'bg-blue-100 dark:bg-blue-900/30'
//                         }`}>
//                           <Icon className={`h-4 w-4 ${
//                             notification.type === 'warning' 
//                               ? 'text-orange-600 dark:text-orange-400' 
//                               : 'text-blue-600 dark:text-blue-400'
//                           }`} />
//                         </div>
//                         <div className="flex-1">
//                           <p className="text-sm font-medium text-gray-900 dark:text-white">
//                             {notification.title}
//                           </p>
//                           <p className="text-xs text-gray-500 dark:text-gray-400">
//                             {notification.time}
//                           </p>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Achievements */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
//                 <Award className="h-5 w-5 mr-2" />
//                 Achievements
//               </h2>
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
//                 <div className="space-y-3">
//                   {achievements.map((achievement, index) => {
//                     const Icon = achievement.icon;
//                     return (
//                       <div
//                         key={index}
//                         className={`flex items-center space-x-3 p-3 rounded-lg ${
//                           achievement.earned 
//                             ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
//                             : 'bg-gray-50 dark:bg-gray-700 opacity-60'
//                         }`}
//                       >
//                         <div className={`p-2 rounded-lg ${
//                           achievement.earned 
//                             ? 'bg-green-100 dark:bg-green-900/30' 
//                             : 'bg-gray-200 dark:bg-gray-600'
//                         }`}>
//                           <Icon className={`h-4 w-4 ${
//                             achievement.earned 
//                               ? 'text-green-600 dark:text-green-400' 
//                               : 'text-gray-400'
//                           }`} />
//                         </div>
//                         <div className="flex-1">
//                           <p className={`text-sm font-medium ${
//                             achievement.earned 
//                               ? 'text-gray-900 dark:text-white' 
//                               : 'text-gray-500 dark:text-gray-400'
//                           }`}>
//                             {achievement.title}
//                           </p>
//                           <p className="text-xs text-gray-500 dark:text-gray-400">
//                             {achievement.description}
//                           </p>
//                         </div>
//                         {achievement.earned && (
//                           <CheckCircle className="h-5 w-5 text-green-500" />
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import MessScheduler from './MessScheduler';

import { 
  BookOpen, 
  Users, 
  Calendar, 
  Bell, 
  MapPin,
  Heart,
  Briefcase,
  AlertTriangle,
  MessageCircle,
  FileText,
  Zap,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  // Mock user data for demonstration if useAuth() is null
  const { user: authUser } = useAuth();
  const user = authUser || {
    name: 'Student',
    branch: 'Computer Science',
    semester: '3',
    rollNumber: '22CS101'
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const quickStats = [
    {
      title: 'Click to visit WebPortal',
      icon: Zap,
      color: 'from-teal-400 to-blue-500',
      bgColor: 'bg-gray-800/60',
      link: '/login'
    }
  ];

  // Restored the original quickActions array with original links
  const quickActions = [
    {
      title: 'Academic Companion',
      description: 'Study materials, GPA calculator, timetable',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      link: '/AcademicCompanion'
    },
    {
      title: 'Find a Mentor',
      description: 'Connect with seniors and get guidance',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      link: '/MentorshipHub'
    },
    {
      title: 'Campus Life',
      description: 'Clubs, events, food, and campus info',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      link: '/CampusLife'
    },
    {
      title: 'Career Toolkit',
      description: 'Resume builder, internships, skill development',
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-500',
      link: '/CareerToolkit'
    },
    {
      title: 'Mental Health',
      description: 'Support, counseling, and wellness resources',
      icon: Heart,
      color: 'from-teal-500 to-cyan-500',
      link: '/MentalHealth'
    },
    {
      title: 'College Essentials',
      description: 'Campus map, faculty directory, college info',
      icon: MapPin,
      color: 'from-orange-500 to-red-500',
      link: '/CollegeEssentials'
    },

{
    title: 'Mess Scheduler',
    description: 'Today\'s meals and weekly schedule',
    icon: Calendar,
    color: 'from-yellow-500 to-amber-500',
    link: '/MessScheduler'
}
  ];

  const upcomingEvents = [
    {
      title: 'Data Structures Quiz',
      date: 'Tomorrow, 10:00 AM',
      type: 'Academic',
      color: 'bg-blue-900/30 text-blue-300 border-blue-500/30'
    },
    {
      title: 'Tech Fest Registration',
      date: 'July 15, 2025',
      type: 'Event',
      color: 'bg-purple-900/30 text-purple-300 border-purple-500/30'
    },
    {
      title: 'Placement Workshop',
      date: 'July 20, 2025',
      type: 'Career',
      color: 'bg-green-900/30 text-green-300 border-green-500/30'
    }
  ];

  const recentNotifications = [
    {
      title: 'New assignment posted in Mathematics',
      time: '2 hours ago',
      type: 'academic',
      icon: FileText
    },
    {
      title: 'Your mentor replied to your message',
      time: '4 hours ago',
      type: 'mentorship',
      icon: MessageCircle
    },
    {
      title: 'Tech club meeting tomorrow at 4 PM',
      time: '6 hours ago',
      type: 'event',
      icon: Users
    },
    {
      title: 'Attendance below 85% in Physics',
      time: '1 day ago',
      type: 'warning',
      icon: AlertTriangle
    }
  ];


  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans py-8">
      {/* Background Gradient Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-teal-900 via-gray-900 to-gray-900"
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-indigo-600 via-gray-800 to-teal-800 rounded-2xl p-8 text-white shadow-2xl shadow-indigo-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Welcome back, {user?.name}! 👋
                </h1>
                <p className="text-blue-200 text-lg">
                  {user?.branch} • Semester {user?.semester}
                </p>
                <p className="text-gray-400 mt-2">
                  {currentTime.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="mt-6 md:mt-0 bg-gray-900/40 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
                <div className="text-3xl font-bold tracking-wider">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">

             {/* Quick Stats */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Link to={stat.link} key={index} className={`group ${stat.bgColor} p-6 rounded-xl border border-gray-700 hover:border-teal-400/50 flex items-center justify-between transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1`}>
                    <div className="flex items-center space-x-4">
                       <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg`}>
                         <Icon className="h-6 w-6 text-white" />
                       </div>
                       <p className="text-gray-200 font-medium">
                         {stat.title}
                       </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-teal-400 transition-colors" />
                  </Link>
                );
              })}
            </motion.div>


            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-100 mb-6">
                Quick Actions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={index}
                      to={action.link}
                      className="group bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-teal-400/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/20"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-r ${action.color} p-3 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-100 mb-1">
                            {action.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {action.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                    
                  );
                })}
              </div>
              
            </motion.div>
            
          </div>
          

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Recent Notifications
              </h2>
              <div className="bg-gray-800/60 rounded-xl border border-gray-700 p-4 space-y-3">
                {recentNotifications.map((notification, index) => {
                  const Icon = notification.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">
                      <div className={`p-2 rounded-lg ${
                        notification.type === 'warning' 
                          ? 'bg-amber-900/30' 
                          : 'bg-blue-900/30'
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          notification.type === 'warning' 
                            ? 'text-amber-400' 
                            : 'text-blue-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-200">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </h2>
              <div className="bg-gray-800/60 rounded-xl border border-gray-700 p-6 space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-200">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {event.date}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${event.color}`}>
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

