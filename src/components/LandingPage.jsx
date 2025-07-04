



import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Heart, 
  Briefcase, 
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  MapPin,
  MessageCircle,
  Target,
  Zap,
  Award
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'College Essentials',
      description: 'From timetables to faculty contacts to grading systems',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Study Support',
      description: 'Notes, video playlists, previous papers, GPA calculator',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Mentorship Hub',
      description: 'Chat with verified seniors from your branch/hostel',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Onboarding Guide',
      description: 'Hostel packing list, document checklist, day-1 tips',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'Campus Life Decoder',
      description: 'Explore societies, fests, canteens, and shortcuts to fun',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Briefcase,
      title: 'Career Kickstart',
      description: 'First-year coding roadmap, resumes, internships & more',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Anonymous Help',
      description: 'Talk about stress, confusion, or college blues privately',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Live Updates',
      description: 'Real-time notifications for events, deadlines, and more',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Ayushi',
      year: '2nd Year, CSE',
      quote: 'I wish I had this in my first week — it\'s like having a cool senior in your pocket.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Krishan',
      year: '1st Year, ECE',
      quote: 'Everything from notes to hostel hacks to coding stuff. Perfect!',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ananya',
      year: '3rd Year, IT',
      quote: 'The mentorship feature helped me connect with amazing seniors who guided me through tough times.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Helped' },
    { number: '500+', label: 'Mentors Available' },
    { number: '50+', label: 'Colleges Connected' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (


    
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Engineering Journey 
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              FreshStart is your all-in-one guide to surviving — and thriving — in your first year of engineering college.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                'Academic resources',
                'Campus survival tips',
                'Clubs, seniors, career, and more',
                'Built by students, for students'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>


{/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Own Your First Year?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get access to all tools, resources, and support from Day 1.
            </p>


            {/* <Link
              to="/register"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Start Now — It's Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link> */}


            
            
            <Link to="/Dashboard"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">

                <span>Start Now — It's Free</span>
                 <ArrowRight className="h-5 w-5" />
              </Link>
            
            <p className="text-blue-100 mt-4 text-sm">
              No ads, no spam. Just genuine help.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">



  <Link
    to="/Login"
    className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-md hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-md"
  >
    <span>Check Attendance</span>
  </Link>

  <Link
    to="/CampusLife"
    className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold text-md hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md"
  >
    <span>Explore Campus Life</span>
  </Link>
</div>

          </motion.div>
        </div>
      </section>
      
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="#features"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Features
              </Link>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FreshStart Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why FreshStart?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Starting college is confusing. We get it. That's why we built FreshStart — to give you a smoother, smarter entry into college life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, text: 'Semester-wise study roadmap' },
              { icon: CheckCircle, text: 'Digital admission checklist' },
              { icon: Heart, text: 'Mental wellness + peer support' },
              { icon: Users, text: 'Connect with seniors & mentors' },
              { icon: Briefcase, text: 'Skill-building + internship paths' },
              { icon: Award, text: 'Food, fests, friends — we\'ve got it all' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What You'll Find Inside
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to succeed in your engineering journey, all in one place.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <Star className="h-12 w-12 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Students Are Saying
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.year}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Built for Freshers. Backed by Experience.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              FreshStart is designed in collaboration with:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Engineering seniors across India',
              'Mentors from IITs & NITs',
              'Mental health professionals',
              'Real feedback from 1st-year students'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>



  );
};

export default LandingPage;