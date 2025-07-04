import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Phone, 
  Shield, 
  Clock, 
  User,
  BookOpen,
  Headphones,
  Coffee,
  Sun,
  Moon,
  Activity,
  Smile,
  AlertCircle,
  CheckCircle,
  Play,
  Pause
} from 'lucide-react';

const MentalHealth = () => {
  const [activeTab, setActiveTab] = useState('support');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMood, setSelectedMood] = useState('');

  const tabs = [
    { id: 'support', name: 'Get Support', icon: Heart },
    { id: 'resources', name: 'Wellness Resources', icon: BookOpen },
    { id: 'stories', name: 'Success Stories', icon: Smile },
    { id: 'tools', name: 'Self-Care Tools', icon: Activity }
  ];

  const supportOptions = [
    {
      id: 1,
      title: 'Anonymous Chat Support',
      description: 'Talk to trained counselors anonymously about stress, anxiety, or any concerns.',
      icon: MessageCircle,
      availability: '24/7 Available',
      responseTime: 'Immediate',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      action: 'Start Chat'
    },
    {
      id: 2,
      title: 'Campus Counselor',
      description: 'Schedule an appointment with our professional campus counselors.',
      icon: User,
      availability: 'Mon-Fri, 9 AM - 5 PM',
      responseTime: 'Same day booking',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      action: 'Book Appointment'
    },
    {
      id: 3,
      title: 'Crisis Helpline',
      description: 'Immediate support for urgent mental health situations.',
      icon: Phone,
      availability: '24/7 Emergency',
      responseTime: 'Immediate',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      action: 'Call Now'
    },
    {
      id: 4,
      title: 'Peer Support Groups',
      description: 'Connect with fellow students who understand your experiences.',
      icon: Shield,
      availability: 'Weekly Sessions',
      responseTime: 'Next session info',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      action: 'Join Group'
    }
  ];

  const counselors = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'Anxiety & Stress Management',
      experience: '8 years',
      availability: 'Mon, Wed, Fri',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Michael Chen',
      specialization: 'Depression & Mood Disorders',
      experience: '12 years',
      availability: 'Tue, Thu, Sat',
      rating: 4.8,
      image: '	https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Dr. Priya Sharma',
      specialization: 'Academic Stress & Performance',
      experience: '6 years',
      availability: 'Mon-Fri',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const wellnessResources = [
    {
      category: 'Meditation & Mindfulness',
      resources: [
        {
          title: 'Guided Meditation Sessions',
          description: '10-minute daily meditation for stress relief',
          duration: '10 min',
          type: 'Audio',
          difficulty: 'Beginner'
        },
        {
          title: 'Breathing Exercises',
          description: 'Simple breathing techniques for anxiety management',
          duration: '5 min',
          type: 'Interactive',
          difficulty: 'Beginner'
        },
        {
          title: 'Mindful Study Techniques',
          description: 'Stay focused and reduce academic stress',
          duration: '15 min',
          type: 'Video',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      category: 'Sleep & Relaxation',
      resources: [
        {
          title: 'Sleep Hygiene Guide',
          description: 'Tips for better sleep quality and routine',
          duration: '8 min',
          type: 'Article',
          difficulty: 'Beginner'
        },
        {
          title: 'Progressive Muscle Relaxation',
          description: 'Full body relaxation technique',
          duration: '20 min',
          type: 'Audio',
          difficulty: 'Beginner'
        },
        {
          title: 'Bedtime Stories for Adults',
          description: 'Calming stories to help you fall asleep',
          duration: '25 min',
          type: 'Audio',
          difficulty: 'Beginner'
        }
      ]
    },
    {
      category: 'Stress Management',
      resources: [
        {
          title: 'Time Management Workshop',
          description: 'Organize your schedule to reduce stress',
          duration: '30 min',
          type: 'Video',
          difficulty: 'Intermediate'
        },
        {
          title: 'Exam Anxiety Toolkit',
          description: 'Strategies to manage test anxiety',
          duration: '12 min',
          type: 'Interactive',
          difficulty: 'Beginner'
        },
        {
          title: 'Social Anxiety Support',
          description: 'Building confidence in social situations',
          duration: '18 min',
          type: 'Video',
          difficulty: 'Intermediate'
        }
      ]
    }
  ];

  const successStories = [
    {
      id: 1,
      title: 'From Overwhelmed to Organized',
      author: 'Anonymous Student',
      year: '2nd Year CSE',
      story: 'I was struggling with severe anxiety about my academic performance. The campus counseling helped me develop coping strategies and time management skills. Now I feel more confident and in control of my studies.',
      tags: ['Anxiety', 'Academic Stress', 'Time Management'],
      timeAgo: '2 weeks ago',
      helpful: 45
    },
    {
      id: 2,
      title: 'Finding My Support System',
      author: 'Anonymous Student',
      year: '1st Year IT',
      story: 'Moving away from home was really difficult. I felt lonely and homesick. Joining the peer support group helped me connect with others who understood what I was going through. I made genuine friends and learned that it\'s okay to ask for help.',
      tags: ['Homesickness', 'Social Connection', 'Peer Support'],
      timeAgo: '1 month ago',
      helpful: 38
    },
    {
      id: 3,
      title: 'Breaking the Perfectionism Cycle',
      author: 'Anonymous Student',
      year: '3rd Year ECE',
      story: 'I used to put immense pressure on myself to be perfect in everything. This led to burnout and depression. Through counseling and mindfulness practices, I learned to be kinder to myself and set realistic expectations.',
      tags: ['Perfectionism', 'Depression', 'Self-Compassion'],
      timeAgo: '3 weeks ago',
      helpful: 52
    }
  ];

  const selfCareTools = [
    {
      id: 1,
      title: 'Mood Tracker',
      description: 'Track your daily mood and identify patterns',
      icon: Activity,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: 'Gratitude Journal',
      description: 'Write down things you\'re grateful for each day',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Breathing Exercise',
      description: 'Quick breathing exercises for instant calm',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Relaxing Sounds',
      description: 'Nature sounds and white noise for relaxation',
      icon: Headphones,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const moodOptions = [
    { emoji: '😊', label: 'Great', color: 'bg-green-500' },
    { emoji: '🙂', label: 'Good', color: 'bg-blue-500' },
    { emoji: '😐', label: 'Okay', color: 'bg-yellow-500' },
    { emoji: '😔', label: 'Low', color: 'bg-orange-500' },
    { emoji: '😢', label: 'Sad', color: 'bg-red-500' }
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
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 rounded-2xl shadow-lg">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mental Health & Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your mental health matters. Find support, resources, and tools to help you thrive during your college journey.
          </p>
        </motion.div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                  Need Immediate Help?
                </h3>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  If you're experiencing a mental health crisis, please reach out immediately:
                </p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <span className="text-red-700 dark:text-red-300">
                    📞 Campus Crisis Line: 1800-XXX-XXXX
                  </span>
                  <span className="text-red-700 dark:text-red-300">
                    📞 National Suicide Prevention: 988
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
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
          {activeTab === 'support' && (
            <div className="space-y-8">
              {/* Support Options */}
              <div className="grid md:grid-cols-2 gap-6">
                {supportOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={option.id}
                      className={`${option.bgColor} p-6 rounded-xl border border-gray-200 dark:border-gray-700`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-r ${option.color} p-3 rounded-lg flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {option.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {option.description}
                          </p>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center space-x-2 text-sm">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-600 dark:text-gray-400">
                                {option.availability}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-gray-600 dark:text-gray-400">
                                {option.responseTime}
                              </span>
                            </div>
                          </div>
                          <button className={`w-full bg-gradient-to-r ${option.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-200 font-medium`}>
                            {option.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Campus Counselors */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Meet Our Campus Counselors
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {counselors.map((counselor, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 text-center"
                    >
                      <img
                        src={counselor.image}
                        alt={counselor.name}
                        className="h-20 w-20 rounded-full object-cover mx-auto mb-4"
                      />
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {counselor.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {counselor.specialization}
                      </p>
                      <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <p>{counselor.experience} experience</p>
                        <p>Available: {counselor.availability}</p>
                      </div>
                      <div className="flex items-center justify-center space-x-1 mb-3">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {counselor.rating}
                        </span>
                      </div>
                      <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm">
                        Book Session
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-teal-600" />
                  Wellness Resources
                </h2>

                <div className="space-y-8">
                  {wellnessResources.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {category.category}
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        {category.resources.map((resource, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                          >
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              {resource.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                              {resource.description}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                                {resource.type}
                              </span>
                              <span>{resource.duration}</span>
                              <span className={`px-2 py-1 rounded ${
                                resource.difficulty === 'Beginner' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                  : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                              }`}>
                                {resource.difficulty}
                              </span>
                            </div>
                            <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm">
                              Start Now
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stories' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Smile className="h-6 w-6 mr-3 text-teal-600" />
                  Success Stories
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Read inspiring stories from fellow students who have overcome mental health challenges.
                </p>

                <div className="space-y-6">
                  {successStories.map((story) => (
                    <div
                      key={story.id}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {story.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {story.author} • {story.year} • {story.timeAgo}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <Heart className="h-4 w-4" />
                          <span>{story.helpful} found helpful</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {story.story}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {story.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>Helpful</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span>Share Your Story</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                    Share Your Success Story
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="space-y-8">
              {/* Self-Care Tools Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {selfCareTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.id}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`bg-gradient-to-r ${tool.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {tool.description}
                      </p>
                      <button className={`w-full bg-gradient-to-r ${tool.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-200 font-medium`}>
                        Open Tool
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Mood Tracker */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Daily Mood Check-in
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  How are you feeling today? Tracking your mood can help identify patterns and triggers.
                </p>

                <div className="grid grid-cols-5 gap-4 mb-6">
                  {moodOptions.map((mood, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMood(mood.label)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedMood === mood.label
                          ? `${mood.color} border-current text-white`
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                    >
                      <div className="text-3xl mb-2">{mood.emoji}</div>
                      <div className="text-sm font-medium">{mood.label}</div>
                    </button>
                  ))}
                </div>

                {selectedMood && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      You're feeling <strong>{selectedMood}</strong> today.
                    </p>
                    <textarea
                      placeholder="What's contributing to this mood? (optional)"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      rows={3}
                    />
                    <button className="mt-3 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                      Save Mood Entry
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Relaxation */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Quick Relaxation
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Breathing Exercise
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <span className="text-2xl">🫁</span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        4-7-8 Breathing Technique
                      </p>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Start Exercise
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Calming Sounds
                    </h3>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Headphones className="h-12 w-12 text-white" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Nature sounds & white noise
                      </p>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 mx-auto"
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        <span>{isPlaying ? 'Pause' : 'Play'} Sounds</span>
                      </button>
                    </div>
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

export default MentalHealth;