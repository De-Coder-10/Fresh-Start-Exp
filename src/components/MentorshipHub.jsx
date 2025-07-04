import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  BookOpen, 
  Calendar,
  Send,
  Phone,
  Video,
  Mail,
  Award,
  Clock,
  CheckCircle,
  Heart,
  User
} from 'lucide-react';

const MentorshipHub = () => {
  const [activeTab, setActiveTab] = useState('find-mentor');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const tabs = [
    { id: 'find-mentor', name: 'Find a Mentor', icon: Search },
    { id: 'my-mentors', name: 'My Mentors', icon: Users },
    { id: 'chat', name: 'Messages', icon: MessageCircle },
    { id: 'tips', name: 'Senior Tips', icon: Award }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Arjun Sharma',
      year: '3rd Year',
      branch: 'Computer Science Engineering',
      hostel: 'Block A',
      rating: 4.9,
      reviews: 24,
      specialties: ['DSA', 'Web Development', 'Placement Prep'],
      bio: 'Passionate about helping juniors with coding and placement preparation. Interned at Google.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: true,
      responseTime: '< 2 hours',
      mentees: 15,
      sessions: 45
    },
    {
      id: 2,
      name: 'Priya Patel',
      year: '4th Year',
      branch: 'Information Technology',
      hostel: 'Block B',
      rating: 4.8,
      reviews: 18,
      specialties: ['Project Management', 'Internships', 'Career Guidance'],
      bio: 'Final year student with experience in multiple internships. Love to guide freshers.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: false,
      responseTime: '< 4 hours',
      mentees: 12,
      sessions: 38
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      year: '2nd Year',
      branch: 'Electronics & Communication',
      hostel: 'Block C',
      rating: 4.7,
      reviews: 15,
      specialties: ['Circuit Design', 'Mathematics', 'Study Tips'],
      bio: 'Good at explaining complex concepts in simple terms. Always ready to help.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: true,
      responseTime: '< 1 hour',
      mentees: 8,
      sessions: 22
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      year: '3rd Year',
      branch: 'Computer Science Engineering',
      hostel: 'Block A',
      rating: 4.9,
      reviews: 21,
      specialties: ['Machine Learning', 'Research', 'Higher Studies'],
      bio: 'Research enthusiast with publications. Can guide on higher studies and research opportunities.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: true,
      responseTime: '< 3 hours',
      mentees: 10,
      sessions: 32
    }
  ];

  const myMentors = [
    {
      id: 1,
      name: 'Arjun Sharma',
      branch: 'Computer Science Engineering',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'Active',
      lastContact: '2 days ago',
      nextSession: 'Tomorrow, 4:00 PM',
      progress: 75
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      branch: 'Computer Science Engineering',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'Active',
      lastContact: '1 week ago',
      nextSession: 'Dec 20, 2:00 PM',
      progress: 45
    }
  ];

  const messages = [
    {
      id: 1,
      mentor: 'Arjun Sharma',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      lastMessage: 'Great progress on your DSA practice! Keep it up.',
      time: '2 hours ago',
      unread: 2,
      isOnline: true
    },
    {
      id: 2,
      mentor: 'Sneha Gupta',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      lastMessage: 'I\'ve shared some research paper links with you.',
      time: '1 day ago',
      unread: 0,
      isOnline: false
    }
  ];

  const seniorTips = [
    {
      id: 1,
      author: 'Arjun Sharma',
      year: '3rd Year CSE',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'How to Master Data Structures in First Year',
      content: 'Start with understanding the basics before jumping into complex problems. Practice daily and implement each data structure from scratch at least once.',
      likes: 45,
      comments: 12,
      timeAgo: '2 days ago',
      tags: ['DSA', 'Programming', 'Study Tips']
    },
    {
      id: 2,
      author: 'Priya Patel',
      year: '4th Year IT',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Balancing Academics and Extracurriculars',
      content: 'Time management is key. Create a schedule and stick to it. Don\'t overcommit - quality over quantity in both academics and activities.',
      likes: 38,
      comments: 8,
      timeAgo: '4 days ago',
      tags: ['Time Management', 'Balance', 'College Life']
    },
    {
      id: 3,
      author: 'Rohit Kumar',
      year: '2nd Year ECE',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'First Year Survival Guide',
      content: 'Don\'t panic if you feel overwhelmed initially. Everyone goes through this phase. Focus on building good study habits and making genuine friends.',
      likes: 52,
      comments: 15,
      timeAgo: '1 week ago',
      tags: ['First Year', 'Mental Health', 'Advice']
    }
  ];

  const branches = ['Computer Science Engineering', 'Information Technology', 'Electronics & Communication', 'Mechanical Engineering'];
  const years = ['2nd Year', '3rd Year', '4th Year'];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesBranch = selectedBranch === 'all' || mentor.branch === selectedBranch;
    const matchesYear = selectedYear === 'all' || mentor.year === selectedYear;
    
    return matchesSearch && matchesBranch && matchesYear;
  });

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
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-2xl shadow-lg">
              <Users className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mentorship Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with experienced seniors, get guidance, and build meaningful relationships that will help you succeed in your engineering journey.
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
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:block">{tab.name}</span>
                  {tab.id === 'chat' && messages.reduce((sum, msg) => sum + msg.unread, 0) > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {messages.reduce((sum, msg) => sum + msg.unread, 0)}
                    </span>
                  )}
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
          {activeTab === 'find-mentor' && (
            <div className="space-y-8">
              {/* Filters */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search mentors by name or specialty..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Branches</option>
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="all">All Years</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mentors Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={mentor.avatar}
                            alt={mentor.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          {mentor.isOnline && (
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {mentor.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {mentor.year} • {mentor.branch}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {mentor.rating}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          ({mentor.reviews})
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {mentor.bio}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {mentor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {mentor.mentees}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Mentees
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {mentor.sessions}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Sessions
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {mentor.responseTime}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Response
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 text-sm font-medium">
                        Connect
                      </button>
                      <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <MessageCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'my-mentors' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  My Mentors
                </h2>

                <div className="space-y-6">
                  {myMentors.map((mentor) => (
                    <div
                      key={mentor.id}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={mentor.avatar}
                            alt={mentor.name}
                            className="h-16 w-16 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {mentor.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              {mentor.branch}
                            </p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              mentor.status === 'Active' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                            }`}>
                              {mentor.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                            <MessageCircle className="h-5 w-5" />
                          </button>
                          <button className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                            <Video className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Last Contact
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            {mentor.lastContact}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Next Session
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            {mentor.nextSession}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Progress
                          </p>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${mentor.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {mentor.progress}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex h-96">
                {/* Chat List */}
                <div className="w-1/3 border-r border-gray-200 dark:border-gray-700">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Messages
                    </h3>
                  </div>
                  <div className="overflow-y-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-600"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <img
                              src={message.avatar}
                              alt={message.mentor}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                            {message.isOnline && (
                              <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <p className="font-medium text-gray-900 dark:text-white truncate">
                                {message.mentor}
                              </p>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {message.time}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                              {message.lastMessage}
                            </p>
                          </div>
                          {message.unread > 0 && (
                            <span className="bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                              {message.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                        alt="Arjun Sharma"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Arjun Sharma
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Online
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg max-w-xs">
                          <p className="text-gray-900 dark:text-white text-sm">
                            Hey! How's your DSA practice going?
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            2:30 PM
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-green-600 text-white p-3 rounded-lg max-w-xs">
                          <p className="text-sm">
                            Going well! Completed arrays and strings. Working on linked lists now.
                          </p>
                          <p className="text-xs text-green-100 mt-1">
                            2:32 PM
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg max-w-xs">
                          <p className="text-gray-900 dark:text-white text-sm">
                            Great progress! Let me know if you need help with any specific problems.
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            2:35 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-green-600" />
                  Senior Tips & Advice
                </h2>

                <div className="space-y-6">
                  {seniorTips.map((tip) => (
                    <div
                      key={tip.id}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={tip.avatar}
                          alt={tip.author}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                {tip.author}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {tip.year}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {tip.timeAgo}
                            </span>
                          </div>
                          
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                            {tip.title}
                          </h4>
                          
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {tip.content}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tip.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                              <Heart className="h-4 w-4" />
                              <span>{tip.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                              <MessageCircle className="h-4 w-4" />
                              <span>{tip.comments}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MentorshipHub;