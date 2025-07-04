import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  BookOpen, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  Building,
  GraduationCap,
  FileText,
  Search,
  Filter,
  Star,
  Navigation
} from 'lucide-react';

const CollegeEssentials = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [searchTerm, setSearchTerm] = useState('');

  const campusLocations = [
    {
      name: 'Main Academic Block',
      type: 'Academic',
      description: 'Lecture halls, computer labs, faculty offices',
      floor: 'Ground to 4th Floor',
      facilities: ['Lecture Halls', 'Computer Labs', 'Faculty Offices', 'Seminar Rooms']
    },
    {
      name: 'Library (LRC)',
      type: 'Academic',
      description: 'Learning Resource Center with books, journals, and study areas',
      floor: '2nd Floor',
      facilities: ['Books', 'Digital Resources', 'Study Areas', 'Group Discussion Rooms']
    },
    {
      name: 'Hostel Block A',
      type: 'Residential',
      description: 'Student accommodation with mess facility',
      floor: 'Ground to 3rd Floor',
      facilities: ['Student Rooms', 'Common Room', 'Mess', 'Laundry']
    },
    {
      name: 'Sports Complex',
      type: 'Recreation',
      description: 'Indoor and outdoor sports facilities',
      floor: 'Ground Floor',
      facilities: ['Basketball Court', 'Badminton Court', 'Gym', 'Cricket Ground']
    },
    {
      name: 'Cafeteria',
      type: 'Dining',
      description: 'Main dining area with multiple food options',
      floor: 'Ground Floor',
      facilities: ['Food Court', 'Seating Area', 'Vending Machines']
    },
    {
      name: 'Health Center',
      type: 'Medical',
      description: 'Medical facility with doctor and nurse',
      floor: 'Ground Floor',
      facilities: ['Doctor Consultation', 'First Aid', 'Pharmacy', 'Emergency Care']
    }
  ];

  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head',
      department: 'Computer Science Engineering',
      specialization: 'Machine Learning, Data Mining',
      email: 'rajesh.kumar@college.edu',
      phone: '+91-9876543210',
      office: 'Room 301, Academic Block',
      officeHours: 'Mon-Fri, 10:00 AM - 12:00 PM',
      rating: 4.8
    },
    {
      name: 'Dr. Priya Sharma',
      designation: 'Associate Professor',
      department: 'Information Technology',
      specialization: 'Software Engineering, Web Technologies',
      email: 'priya.sharma@college.edu',
      phone: '+91-9876543211',
      office: 'Room 205, Academic Block',
      officeHours: 'Mon-Wed-Fri, 2:00 PM - 4:00 PM',
      rating: 4.6
    },
    {
      name: 'Dr. Amit Singh',
      designation: 'Assistant Professor',
      department: 'Electronics & Communication',
      specialization: 'Digital Signal Processing, VLSI Design',
      email: 'amit.singh@college.edu',
      phone: '+91-9876543212',
      office: 'Room 102, Academic Block',
      officeHours: 'Tue-Thu, 11:00 AM - 1:00 PM',
      rating: 4.7
    },
    {
      name: 'Dr. Neha Gupta',
      designation: 'Professor',
      department: 'Mechanical Engineering',
      specialization: 'Thermal Engineering, CAD/CAM',
      email: 'neha.gupta@college.edu',
      phone: '+91-9876543213',
      office: 'Room 401, Academic Block',
      officeHours: 'Mon-Fri, 9:00 AM - 11:00 AM',
      rating: 4.9
    }
  ];

  const courseInfo = [
    {
      branch: 'Computer Science Engineering',
      totalCredits: 160,
      semesters: 8,
      coreSubjects: [
        'Programming Fundamentals',
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering'
      ],
      electiveOptions: [
        'Machine Learning',
        'Web Development',
        'Mobile App Development',
        'Cybersecurity',
        'Cloud Computing'
      ]
    },
    {
      branch: 'Information Technology',
      totalCredits: 160,
      semesters: 8,
      coreSubjects: [
        'Programming in C/C++',
        'Web Technologies',
        'Database Systems',
        'Network Security',
        'System Analysis & Design',
        'Project Management'
      ],
      electiveOptions: [
        'Data Analytics',
        'Digital Marketing',
        'E-commerce',
        'IT Service Management',
        'Business Intelligence'
      ]
    }
  ];

  const examStructure = {
    internalAssessment: {
      t1: { weightage: '15%', duration: '1.5 hours', type: 'Written' },
      t2: { weightage: '15%', duration: '1.5 hours', type: 'Written' },
      t3: { weightage: '20%', duration: '2 hours', type: 'Written' }
    },
    endSemester: {
      weightage: '50%',
      duration: '3 hours',
      type: 'Written'
    },
    gradingSystem: {
      'A+': '90-100',
      'A': '80-89',
      'B+': '70-79',
      'B': '60-69',
      'C+': '50-59',
      'C': '40-49',
      'F': 'Below 40'
    }
  };

  const tabs = [
    { id: 'map', name: 'Campus Map', icon: MapPin },
    { id: 'faculty', name: 'Faculty Directory', icon: Users },
    { id: 'courses', name: 'Course Info', icon: BookOpen },
    { id: 'exams', name: 'Exam Structure', icon: FileText }
  ];

  const filteredFaculty = facultyMembers.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <Building className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            College Essentials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about your college - from campus navigation to faculty contacts and academic structure.
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
          {activeTab === 'map' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Navigation className="h-6 w-6 mr-3 text-blue-600" />
                  Interactive Campus Map
                </h2>
                
                {/* Campus Map Placeholder */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 mb-8 text-center border-2 border-dashed border-blue-300 dark:border-blue-700">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Interactive Campus Map
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Detailed campus map with building locations, facilities, and navigation would be displayed here.
                  </p>
                </div>

                {/* Campus Locations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {campusLocations.map((location, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {location.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          location.type === 'Academic' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          location.type === 'Residential' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          location.type === 'Recreation' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                          location.type === 'Dining' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
                          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                        }`}>
                          {location.type}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {location.description}
                      </p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        📍 {location.floor}
                      </p>
                      <div className="space-y-1">
                        {location.facilities.map((facility, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-400 mr-2 mb-1"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faculty' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <Users className="h-6 w-6 mr-3 text-blue-600" />
                    Faculty Directory
                  </h2>
                  <div className="relative mt-4 md:mt-0">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search faculty..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {filteredFaculty.map((faculty, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {faculty.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {faculty.designation}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {faculty.department}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {faculty.rating}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Specialization:
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {faculty.specialization}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
                              <Mail className="h-4 w-4 mr-1" />
                              Email:
                            </p>
                            <a
                              href={`mailto:${faculty.email}`}
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              {faculty.email}
                            </a>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
                              <Phone className="h-4 w-4 mr-1" />
                              Phone:
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              {faculty.phone}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            Office:
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {faculty.office}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Office Hours:
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {faculty.officeHours}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                  Course Information
                </h2>

                <div className="space-y-8">
                  {courseInfo.map((course, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {course.branch}
                        </h3>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                            {course.totalCredits} Credits
                          </span>
                          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                            {course.semesters} Semesters
                          </span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                            Core Subjects
                          </h4>
                          <div className="space-y-2">
                            {course.coreSubjects.map((subject, idx) => (
                              <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600"
                              >
                                <span className="text-gray-700 dark:text-gray-300">
                                  {subject}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                            Elective Options
                          </h4>
                          <div className="space-y-2">
                            {course.electiveOptions.map((elective, idx) => (
                              <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600"
                              >
                                <span className="text-gray-700 dark:text-gray-300">
                                  {elective}
                                </span>
                              </div>
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

          {activeTab === 'exams' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-blue-600" />
                  Examination Structure
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Internal Assessment */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Internal Assessment (50%)
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(examStructure.internalAssessment).map(([test, details]) => (
                        <div key={test} className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            {test.toUpperCase()}
                          </h4>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Weightage:</span>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {details.weightage}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {details.duration}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Type:</span>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {details.type}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* End Semester */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      End Semester Exam
                    </h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Weightage:</span>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {examStructure.endSemester.weightage}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {examStructure.endSemester.duration}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">Type:</span>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {examStructure.endSemester.type}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Grading System */}
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                        Grading System
                      </h4>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {Object.entries(examStructure.gradingSystem).map(([grade, range]) => (
                            <div key={grade} className="flex justify-between items-center py-1">
                              <span className="font-medium text-gray-900 dark:text-white">
                                {grade}
                              </span>
                              <span className="text-gray-600 dark:text-gray-400">
                                {range}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Important Notes
                  </h3>
                  <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                    <li>• Minimum 75% attendance required to appear in end semester exam</li>
                    <li>• CGPA ≥ 8.0 required for honors degree</li>
                    <li>• Minimum passing grade is 'C' (40%)</li>
                    <li>• Re-examination available for failed subjects</li>
                    <li>• Grade improvement option available once per subject</li>
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

export default CollegeEssentials;