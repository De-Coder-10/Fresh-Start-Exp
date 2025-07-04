import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  Github, 
  Linkedin, 
  FileText, 
  TrendingUp,
  Calendar,
  Building,
  DollarSign,
  Star,
  Clock,
  Users,
  Award,
  Target,
  BookOpen,
  Download,
  ExternalLink,
  CheckCircle,
  Play
} from 'lucide-react';

const CareerToolkit = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [selectedSkill, setSelectedSkill] = useState('');

  const tabs = [
    { id: 'roadmap', name: 'Learning Roadmap', icon: Target },
    { id: 'profile', name: 'Profile Builder', icon: Users },
    { id: 'internships', name: 'Internships', icon: Briefcase },
    { id: 'placements', name: 'Placement Prep', icon: TrendingUp }
  ];

  const learningPaths = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      description: 'Master the fundamentals of programming and problem-solving',
      difficulty: 'Beginner to Advanced',
      duration: '3-4 months',
      skills: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming'],
      resources: [
        { name: 'LeetCode', type: 'Practice', link: '#' },
        { name: 'GeeksforGeeks', type: 'Tutorial', link: '#' },
        { name: 'Striver SDE Sheet', type: 'Roadmap', link: '#' }
      ],
      progress: 65,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Build modern web applications with latest technologies',
      difficulty: 'Beginner to Intermediate',
      duration: '4-5 months',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases'],
      resources: [
        { name: 'FreeCodeCamp', type: 'Course', link: '#' },
        { name: 'MDN Web Docs', type: 'Documentation', link: '#' },
        { name: 'React Official Tutorial', type: 'Tutorial', link: '#' }
      ],
      progress: 40,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 3,
      title: 'Machine Learning',
      description: 'Dive into AI and machine learning fundamentals',
      difficulty: 'Intermediate to Advanced',
      duration: '5-6 months',
      skills: ['Python', 'Statistics', 'Pandas', 'Scikit-learn', 'TensorFlow'],
      resources: [
        { name: 'Coursera ML Course', type: 'Course', link: '#' },
        { name: 'Kaggle Learn', type: 'Practice', link: '#' },
        { name: 'Python for ML', type: 'Tutorial', link: '#' }
      ],
      progress: 20,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Create mobile applications for iOS and Android',
      difficulty: 'Intermediate',
      duration: '3-4 months',
      skills: ['React Native', 'Flutter', 'Firebase', 'API Integration', 'UI/UX'],
      resources: [
        { name: 'React Native Docs', type: 'Documentation', link: '#' },
        { name: 'Flutter.dev', type: 'Tutorial', link: '#' },
        { name: 'Expo', type: 'Platform', link: '#' }
      ],
      progress: 10,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const profileSections = [
    {
      id: 1,
      title: 'GitHub Profile',
      description: 'Showcase your coding projects and contributions',
      icon: Github,
      color: 'from-gray-700 to-gray-900',
      tips: [
        'Add a professional README to your profile',
        'Pin your best repositories',
        'Contribute to open source projects',
        'Use meaningful commit messages',
        'Add project descriptions and documentation'
      ],
      template: 'GitHub Profile Template'
    },
    {
      id: 2,
      title: 'LinkedIn Profile',
      description: 'Build your professional network and presence',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800',
      tips: [
        'Use a professional profile photo',
        'Write a compelling headline and summary',
        'Add relevant skills and endorsements',
        'Share industry-related content',
        'Connect with professionals in your field'
      ],
      template: 'LinkedIn Optimization Guide'
    },
    {
      id: 3,
      title: 'Resume Builder',
      description: 'Create ATS-friendly resumes that get noticed',
      icon: FileText,
      color: 'from-green-600 to-green-800',
      tips: [
        'Use a clean, professional format',
        'Quantify your achievements',
        'Include relevant keywords',
        'Keep it to 1-2 pages',
        'Proofread for errors'
      ],
      template: 'Resume Templates'
    }
  ];

  const internships = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineering Intern',
      location: 'Bangalore, India',
      duration: '10-12 weeks',
      stipend: '₹80,000/month',
      deadline: 'January 15, 2024',
      requirements: ['Strong programming skills', 'Data structures knowledge', 'Problem-solving abilities'],
      type: 'Summer Internship',
      logo: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=100',
      difficulty: 'High',
      applications: '10,000+'
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product Management Intern',
      location: 'Hyderabad, India',
      duration: '12 weeks',
      stipend: '₹75,000/month',
      deadline: 'February 1, 2024',
      requirements: ['Analytical thinking', 'Communication skills', 'Technical background'],
      type: 'Summer Internship',
      logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=100',
      difficulty: 'High',
      applications: '8,000+'
    },
    {
      id: 3,
      company: 'Flipkart',
      position: 'Data Science Intern',
      location: 'Bangalore, India',
      duration: '8-10 weeks',
      stipend: '₹50,000/month',
      deadline: 'January 30, 2024',
      requirements: ['Python/R programming', 'Statistics knowledge', 'Machine learning basics'],
      type: 'Summer Internship',
      logo: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=100',
      difficulty: 'Medium',
      applications: '5,000+'
    },
    {
      id: 4,
      company: 'Zomato',
      position: 'Frontend Developer Intern',
      location: 'Gurgaon, India',
      duration: '6 months',
      stipend: '₹35,000/month',
      deadline: 'February 15, 2024',
      requirements: ['React.js', 'JavaScript', 'HTML/CSS', 'Git'],
      type: 'Full-time Internship',
      logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100',
      difficulty: 'Medium',
      applications: '3,000+'
    }
  ];

  const placementStats = {
    averagePackage: '₹11.13 LPA',
    medianPackage: '₹7.93 LPA',
    highestPackage: '₹45 LPA',
    placementRate: '92%',
    topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Infosys', 'TCS', 'Wipro', 'Accenture']
  };

  const placementEvents = [
    {
      id: 1,
      title: 'Resume Building Workshop',
      date: 'December 20, 2024',
      time: '2:00 PM - 4:00 PM',
      speaker: 'HR Manager, Microsoft',
      type: 'Workshop',
      registrations: 150
    },
    {
      id: 2,
      title: 'Mock Interview Session',
      date: 'December 22, 2024',
      time: '10:00 AM - 5:00 PM',
      speaker: 'Industry Professionals',
      type: 'Practice',
      registrations: 200
    },
    {
      id: 3,
      title: 'Coding Competition',
      date: 'December 25, 2024',
      time: '9:00 AM - 12:00 PM',
      speaker: 'Competitive Programming Club',
      type: 'Competition',
      registrations: 300
    },
    {
      id: 4,
      title: 'Industry Talk: Future of Tech',
      date: 'December 28, 2024',
      time: '3:00 PM - 5:00 PM',
      speaker: 'CTO, Flipkart',
      type: 'Seminar',
      registrations: 500
    }
  ];

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
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl shadow-lg">
              <Briefcase className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Career Toolkit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Build your skills, create professional profiles, find internships, and prepare for placements with our comprehensive career toolkit.
          </p>
        </motion.div>

        {/* Tab Navigation */}
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
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
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
          {activeTab === 'roadmap' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Target className="h-6 w-6 mr-3 text-indigo-600" />
                  Skill Development Roadmaps
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {learningPaths.map((path) => (
                    <div
                      key={path.id}
                      className={`${path.bgColor} p-6 rounded-xl border border-gray-200 dark:border-gray-700`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {path.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {path.description}
                          </p>
                        </div>
                        <div className={`bg-gradient-to-r ${path.color} p-2 rounded-lg`}>
                          <Code className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {path.difficulty}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {path.duration}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Key Skills:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {path.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                          {path.skills.length > 3 && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              +{path.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Progress
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {path.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${path.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${path.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Resources:
                        </p>
                        <div className="space-y-1">
                          {path.resources.map((resource, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-gray-600 dark:text-gray-400">
                                {resource.name}
                              </span>
                              <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                                {resource.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className={`w-full bg-gradient-to-r ${path.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-200 font-medium`}>
                        Start Learning
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-indigo-600" />
                  Professional Profile Builder
                </h2>

                <div className="space-y-8">
                  {profileSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <div
                        key={section.id}
                        className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`bg-gradient-to-r ${section.color} p-3 rounded-lg flex-shrink-0`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {section.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                              {section.description}
                            </p>

                            <div className="mb-4">
                              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                Optimization Tips:
                              </h4>
                              <ul className="space-y-1">
                                {section.tips.map((tip, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex space-x-3">
                              <button className={`bg-gradient-to-r ${section.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-200 font-medium flex items-center space-x-2`}>
                                <ExternalLink className="h-4 w-4" />
                                <span>Open Builder</span>
                              </button>
                              <button className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors font-medium flex items-center space-x-2">
                                <Download className="h-4 w-4" />
                                <span>{section.template}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'internships' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-indigo-600" />
                  Available Internships
                </h2>

                <div className="grid gap-6">
                  {internships.map((internship) => (
                    <div
                      key={internship.id}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <img
                            src={internship.logo}
                            alt={internship.company}
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {internship.position}
                            </h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                              {internship.company}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <span className="flex items-center space-x-1">
                                <Building className="h-4 w-4" />
                                <span>{internship.location}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{internship.duration}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <DollarSign className="h-4 w-4 text-green-600" />
                            <span className="font-bold text-green-600">
                              {internship.stipend}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            internship.difficulty === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                            internship.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          }`}>
                            {internship.difficulty} Competition
                          </span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Type:
                          </p>
                          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                            {internship.type}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Deadline:
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {internship.deadline}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Applications:
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {internship.applications}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Requirements:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {internship.requirements.map((req, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                          Apply Now
                        </button>
                        <button className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                          Save for Later
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Internship Tips */}
                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Internship Application Tips
                  </h3>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• Apply early - many internships have rolling admissions</li>
                    <li>• Tailor your resume for each application</li>
                    <li>• Prepare for technical interviews and coding challenges</li>
                    <li>• Build relevant projects to showcase your skills</li>
                    <li>• Network with professionals in your target companies</li>
                    <li>• Follow up on your applications professionally</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placements' && (
            <div className="space-y-8">
              {/* Placement Statistics */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 text-indigo-600" />
                  Placement Statistics
                </h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {placementStats.averagePackage}
                    </div>
                    <div className="text-sm text-green-800 dark:text-green-200">
                      Average Package
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {placementStats.medianPackage}
                    </div>
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                      Median Package
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {placementStats.highestPackage}
                    </div>
                    <div className="text-sm text-purple-800 dark:text-purple-200">
                      Highest Package
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {placementStats.placementRate}
                    </div>
                    <div className="text-sm text-orange-800 dark:text-orange-200">
                      Placement Rate
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Top Recruiting Companies
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {placementStats.topRecruiters.map((company, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center border border-gray-200 dark:border-gray-600"
                      >
                        <span className="font-medium text-gray-900 dark:text-white">
                          {company}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Placement Events */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-indigo-600" />
                  Upcoming Placement Events
                </h2>

                <div className="space-y-4">
                  {placementEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Speaker: {event.speaker}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === 'Workshop' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          event.type === 'Practice' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          event.type === 'Competition' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                          'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                        }`}>
                          {event.type}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{event.registrations} registered</span>
                          </span>
                        </div>
                        
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation Resources */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Placement Preparation Resources
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-600 p-2 rounded-lg">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Coding Practice
                      </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• LeetCode Premium</li>
                      <li>• HackerRank Challenges</li>
                      <li>• GeeksforGeeks Practice</li>
                      <li>• InterviewBit</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-green-600 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Study Materials
                      </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Aptitude Test Books</li>
                      <li>• Technical Interview Guides</li>
                      <li>• Previous Year Questions</li>
                      <li>• Mock Test Papers</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-purple-600 p-2 rounded-lg">
                        <Play className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Video Courses
                      </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• System Design Basics</li>
                      <li>• Interview Preparation</li>
                      <li>• Soft Skills Development</li>
                      <li>• Industry Insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CareerToolkit;