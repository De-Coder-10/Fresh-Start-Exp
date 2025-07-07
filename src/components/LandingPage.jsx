import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      description: 'Timetables, faculty contacts, and grading systems.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Study Tools',
      description: 'Curated notes, PYQs, and GPA tracker.',
      color: 'from-pink-400 to-purple-500'
    },
    {
      icon: Users,
      title: 'Mentorship Hub',
      description: 'Chat with verified seniors from your branch/hostel.',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'College Guide',
      description: 'Packing lists, hostel tips, and FAQs.',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Heart,
      title: 'Campus Life Decoder',
      description: 'Explore societies, fests, canteens, and shortcuts to fun.',
      color: 'from-red-400 to-rose-500'
    },
    {
      icon: Briefcase,
      title: 'Career Kickstart',
      description: 'First-year coding roadmap, resumes, and internships.',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Anonymous Help',
      description: 'Talk about stress or college blues privately.',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Live Updates',
      description: 'Real-time notifications for events and deadlines.',
      color: 'from-yellow-400 to-amber-500'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      year: '2nd Year, CSE',
      quote: 'I wish I had this in my first week—it\'s like having a cool senior in your pocket. The PYQs and notes were a lifesaver!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rohan Verma',
      year: '1st Year, ECE',
      quote: 'The mentorship feature is gold. I connected with a senior who helped me choose the right clubs and prepare for my first exams.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Anika Reddy',
      year: '3rd Year, IT',
      quote: 'From hostel hacks to finding the best canteen food, FreshStart made settling in so much easier. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Helped' },
    { number: '500+', label: 'Verified Mentors' },
    { number: '50+', label: 'Colleges Onboard' },
    { number: '1,200+', label: 'Resources Shared' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      
      {/* Background Gradient Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-gray-900"
        ></div>
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="overflow-hidden py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-teal-400 p-4 rounded-2xl shadow-lg shadow-indigo-500/20">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-100 mb-6 tracking-tight">
                Your College Journey,
                <br />
                <span className="bg-gradient-to-r from-teal-300 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                  Perfected.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                FreshStart is the ultimate toolkit for first-year engineering students. Navigate academics, campus life, and your career path—all from one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/dashboard"
                  className="group bg-gradient-to-r from-teal-400 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-teal-500 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/40 transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started - It's Free</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="#features"
                  className="bg-gray-800/80 backdrop-blur-sm text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-700 hover:bg-gray-700/90 hover:border-teal-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Features
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Everything You Need, All In One Place
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From day one essentials to long-term career planning, we've got you covered.
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
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-teal-400/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-indigo-500/20"
                  >
                    <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg w-fit mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Loved by Students Like You
              </h2>
              <p className="text-lg text-gray-400">
                Real stories from our growing community.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/60 p-8 rounded-xl border border-gray-700 flex flex-col"
                >
                  <div className="flex-grow mb-6">
                    <p className="text-gray-300 italic text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-teal-400"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative p-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-900 to-teal-800 text-center overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Ace Your First Year?
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                  Get instant access to all tools, resources, and support. No ads, no spam—just genuine help.
                </p>

                <Link
                  to="/dashboard"
                  className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1"
                >
                  <span>Start Now — It's Free</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;