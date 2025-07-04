import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Star, 
  Clock, 
  Trophy,
  Music,
  Camera,
  Code,
  Palette,
  Zap,
  Coffee,
  Utensils,
  Building,
  Search,
  Filter
} from 'lucide-react';

const CampusLife = () => {
  const [activeTab, setActiveTab] = useState('clubs');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tabs = [
    { id: 'clubs', name: 'Clubs & Societies', icon: Users },
    { id: 'events', name: 'Events & Fests', icon: Calendar },
    { id: 'food', name: 'Food & Dining', icon: Utensils },
    { id: 'sports', name: 'Sports & Recreation', icon: Trophy }
  ];

  const clubs = [
    {
      id: 1,
      name: 'Coding Club',
      category: 'Technical',
      description: 'Learn programming, participate in hackathons, and build amazing projects together.',
      members: 150,
      rating: 4.8,
      activities: ['Hackathons', 'Coding Competitions', 'Workshops', 'Project Building'],
      meetingTime: 'Every Saturday, 4:00 PM',
      location: 'Computer Lab 1',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      contact: 'coding.club@college.edu'
    },
    {
      id: 2,
      name: 'Photography Club',
      category: 'Creative',
      description: 'Capture moments, learn photography techniques, and showcase your artistic vision.',
      members: 85,
      rating: 4.7,
      activities: ['Photo Walks', 'Exhibitions', 'Workshops', 'Competitions'],
      meetingTime: 'Every Sunday, 10:00 AM',
      location: 'Art Room',
      icon: Camera,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      contact: 'photo.club@college.edu'
    },
    {
      id: 3,
      name: 'Music Society',
      category: 'Cultural',
      description: 'Express yourself through music, learn instruments, and perform on stage.',
      members: 120,
      rating: 4.9,
      activities: ['Concerts', 'Music Lessons', 'Band Formation', 'Cultural Events'],
      meetingTime: 'Every Friday, 6:00 PM',
      location: 'Auditorium',
      icon: Music,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      contact: 'music.society@college.edu'
    },
    {
      id: 4,
      name: 'Art & Design Club',
      category: 'Creative',
      description: 'Explore various art forms, from traditional painting to digital design.',
      members: 95,
      rating: 4.6,
      activities: ['Art Exhibitions', 'Design Workshops', 'Mural Projects', 'Digital Art'],
      meetingTime: 'Every Wednesday, 5:00 PM',
      location: 'Art Studio',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      contact: 'art.club@college.edu'
    },
    {
      id: 5,
      name: 'Robotics Club',
      category: 'Technical',
      description: 'Build robots, participate in competitions, and explore automation technologies.',
      members: 75,
      rating: 4.8,
      activities: ['Robot Building', 'Competitions', 'Tech Talks', 'Innovation Projects'],
      meetingTime: 'Every Thursday, 4:30 PM',
      location: 'Robotics Lab',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      contact: 'robotics.club@college.edu'
    },
    {
      id: 6,
      name: 'Drama Society',
      category: 'Cultural',
      description: 'Act, direct, and produce theatrical performances that inspire and entertain.',
      members: 110,
      rating: 4.7,
      activities: ['Stage Plays', 'Street Plays', 'Acting Workshops', 'Script Writing'],
      meetingTime: 'Every Tuesday, 6:30 PM',
      location: 'Drama Room',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      contact: 'drama.society@college.edu'
    }
  ];

  const events = [
    {
      id: 1,
      name: 'TechFest 2024',
      type: 'Technical',
      date: 'March 15-17, 2024',
      description: 'Annual technical festival featuring hackathons, robotics competitions, and tech talks.',
      highlights: ['48-hour Hackathon', 'Robotics Competition', 'Tech Talks by Industry Experts', 'Innovation Showcase'],
      registrationOpen: true,
      prize: '₹2,00,000',
      participants: '500+',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Cultural Carnival',
      type: 'Cultural',
      date: 'April 5-7, 2024',
      description: 'Celebrate diversity through music, dance, drama, and art exhibitions.',
      highlights: ['Dance Competition', 'Music Concert', 'Art Exhibition', 'Fashion Show'],
      registrationOpen: true,
      prize: '₹1,50,000',
      participants: '800+',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Sports Week',
      type: 'Sports',
      date: 'February 20-26, 2024',
      description: 'Inter-college sports competitions across various indoor and outdoor games.',
      highlights: ['Cricket Tournament', 'Basketball Championship', 'Athletics Meet', 'E-sports Competition'],
      registrationOpen: false,
      prize: '₹1,00,000',
      participants: '1000+',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const foodOptions = [
    {
      id: 1,
      name: 'Main Cafeteria',
      type: 'Cafeteria',
      rating: 4.2,
      priceRange: '₹30-80',
      cuisine: ['North Indian', 'South Indian', 'Chinese', 'Continental'],
      specialties: ['Butter Chicken', 'Masala Dosa', 'Fried Rice', 'Sandwiches'],
      timings: '7:00 AM - 10:00 PM',
      location: 'Ground Floor, Academic Block',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Coffee Corner',
      type: 'Cafe',
      rating: 4.6,
      priceRange: '₹20-60',
      cuisine: ['Beverages', 'Snacks', 'Fast Food'],
      specialties: ['Cappuccino', 'Cold Coffee', 'Sandwiches', 'Pastries'],
      timings: '8:00 AM - 11:00 PM',
      location: 'Library Building',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Hostel Mess',
      type: 'Mess',
      rating: 3.8,
      priceRange: '₹15-40',
      cuisine: ['Home-style Indian'],
      specialties: ['Dal Rice', 'Roti Sabzi', 'Rajma Chawal', 'Curd Rice'],
      timings: '7:00 AM - 9:00 PM',
      location: 'Hostel Block A',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Street Food Corner',
      type: 'Food Stall',
      rating: 4.4,
      priceRange: '₹10-50',
      cuisine: ['Street Food', 'Chaat', 'Snacks'],
      specialties: ['Pani Puri', 'Bhel Puri', 'Samosa', 'Jalebi'],
      timings: '11:00 AM - 8:00 PM',
      location: 'Near Main Gate',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const sportsActivities = [
    {
      id: 1,
      name: 'Cricket',
      type: 'Outdoor',
      facility: 'Cricket Ground',
      timings: '6:00 AM - 8:00 PM',
      equipment: 'Available',
      coach: 'Available',
      tournaments: ['Inter-college Championship', 'Intra-college League'],
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Basketball',
      type: 'Outdoor',
      facility: 'Basketball Court',
      timings: '6:00 AM - 10:00 PM',
      equipment: 'Available',
      coach: 'Available',
      tournaments: ['3v3 Tournament', 'Inter-hostel Championship'],
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Badminton',
      type: 'Indoor',
      facility: 'Sports Complex',
      timings: '6:00 AM - 10:00 PM',
      equipment: 'Available for rent',
      coach: 'Available',
      tournaments: ['Singles Championship', 'Doubles Tournament'],
      image: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Gym & Fitness',
      type: 'Indoor',
      facility: 'Fitness Center',
      timings: '5:00 AM - 11:00 PM',
      equipment: 'Modern equipment available',
      coach: 'Personal trainers available',
      tournaments: ['Fitness Challenge', 'Powerlifting Competition'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categories = ['all', 'Technical', 'Cultural', 'Creative', 'Sports'];

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-4 rounded-2xl shadow-lg">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Campus Life
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the vibrant campus culture - join clubs, attend events, explore dining options, and make the most of your college experience.
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
                      ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md'
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
          {activeTab === 'clubs' && (
            <div className="space-y-8">
              {/* Search and Filter */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search clubs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>
                  
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clubs Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClubs.map((club) => {
                  const Icon = club.icon;
                  return (
                    <div
                      key={club.id}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`${club.bgColor} p-6`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`bg-gradient-to-r ${club.color} p-3 rounded-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {club.rating}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {club.name}
                        </h3>
                        
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          club.category === 'Technical' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          club.category === 'Cultural' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          club.category === 'Creative' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                          'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                        }`}>
                          {club.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          {club.description}
                        </p>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Members:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{club.members}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400">{club.meetingTime}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400">{club.location}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Activities:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {club.activities.slice(0, 3).map((activity, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                              >
                                {activity}
                              </span>
                            ))}
                            {club.activities.length > 3 && (
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                +{club.activities.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-200 font-medium">
                          Join Club
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-pink-600" />
                  Upcoming Events & Festivals
                </h2>

                <div className="space-y-8">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {event.name}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  event.type === 'Technical' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                                  event.type === 'Cultural' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                                  'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                                }`}>
                                  {event.type}
                                </span>
                                <span>{event.date}</span>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-sm text-gray-600 dark:text-gray-400">Prize Pool</p>
                              <p className="text-lg font-bold text-green-600">{event.prize}</p>
                            </div>
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {event.description}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Event Highlights:
                            </p>
                            <div className="grid md:grid-cols-2 gap-2">
                              {event.highlights.map((highlight, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                              <span>Expected Participants: {event.participants}</span>
                            </div>
                            
                            <button
                              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                                event.registrationOpen
                                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700'
                                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                              }`}
                              disabled={!event.registrationOpen}
                            >
                              {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
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

          {activeTab === 'food' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Utensils className="h-6 w-6 mr-3 text-pink-600" />
                  Food & Dining Options
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {foodOptions.map((food) => (
                    <div
                      key={food.id}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600"
                    >
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-48 object-cover"
                      />
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {food.name}
                            </h3>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              food.type === 'Cafeteria' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                              food.type === 'Cafe' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                              food.type === 'Mess' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
                              'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                            }`}>
                              {food.type}
                            </span>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {food.rating}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {food.priceRange}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400">{food.timings}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400">{food.location}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Cuisine Types:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {food.cuisine.map((type, idx) => (
                              <span
                                key={idx}
                                className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-2 py-1 rounded text-xs"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Popular Items:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {food.specialties.map((item, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sports' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Trophy className="h-6 w-6 mr-3 text-pink-600" />
                  Sports & Recreation Facilities
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {sportsActivities.map((sport) => (
                    <div
                      key={sport.id}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600"
                    >
                      <img
                        src={sport.image}
                        alt={sport.name}
                        className="w-full h-48 object-cover"
                      />
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {sport.name}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            sport.type === 'Indoor' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          }`}>
                            {sport.type}
                          </span>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Facility:</span>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {sport.facility}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Timings:</span>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {sport.timings}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Equipment:</span>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {sport.equipment}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Coach:</span>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {sport.coach}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Tournaments:
                          </p>
                          <div className="space-y-1">
                            {sport.tournaments.map((tournament, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <Trophy className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                                <span>{tournament}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sports Membership Info */}
                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Sports Membership Benefits
                  </h3>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• Free access to all sports facilities</li>
                    <li>• Equipment rental at discounted rates</li>
                    <li>• Professional coaching sessions</li>
                    <li>• Priority registration for tournaments</li>
                    <li>• Access to fitness center and gym</li>
                    <li>• Sports injury medical support</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CampusLife;