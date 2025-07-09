import React, { useState, useEffect } from 'react';

// Lucide React Icons (assuming available in the environment)
// If not, you'd typically import them like:
// import { Home, BarChart2, Award, Calendar, User, Book, Clock, LogOut, Bell, Search, Download } from 'lucide-react';

// Mock data for demonstration
const mockStudentData = {
  name: 'Alice Johnson',
  studentId: '2023CS001',
  branch: 'Computer Science',
  semester: '5th',
  email: 'alice.johnson@example.com',
  phone: '+91 98765 43210',
  address: '123, Tech Park, Bengaluru, India',
  dob: '2003-08-15',
  cgpa: 8.75,
};

const mockAttendance = [
  { subject: 'Data Structures & Algorithms', attended: 35, total: 40, percentage: 87.5 },
  { subject: 'Operating Systems', attended: 30, total: 40, percentage: 75.0 },
  { subject: 'Database Management Systems', attended: 38, total: 40, percentage: 95.0 },
  { subject: 'Computer Networks', attended: 28, total: 40, percentage: 70.0 },
  { subject: 'Software Engineering', attended: 32, total: 40, percentage: 80.0 },
];

const mockGrades = [
  { subject: 'Data Structures & Algorithms', grade: 'A', credits: 4, score: 92 },
  { subject: 'Operating Systems', grade: 'B+', credits: 4, score: 85 },
  { subject: 'Database Management Systems', grade: 'A+', credits: 3, score: 98 },
  { subject: 'Computer Networks', grade: 'B', credits: 3, score: 81 },
  { subject: 'Software Engineering', grade: 'A-', credits: 3, score: 88 },
];

const mockExamSchedule = [
  { subject: 'Operating Systems', date: '2025-12-10', time: '10:00 AM', room: 'A-201' },
  { subject: 'Data Structures & Algorithms', date: '2025-12-12', time: '02:00 PM', room: 'B-105' },
  { subject: 'Computer Networks', date: '2025-12-15', time: '10:00 AM', room: 'A-201' },
  { subject: 'Database Management Systems', date: '2025-12-17', time: '02:00 PM', room: 'C-303' },
];

const mockSubjects = [
  { code: 'CS501', name: 'Data Structures & Algorithms', credits: 4, semester: '5th', branch: 'Computer Science' },
  { code: 'CS502', name: 'Operating Systems', credits: 4, semester: '5th', branch: 'Computer Science' },
  { code: 'CS503', name: 'Database Management Systems', credits: 3, semester: '5th', branch: 'Computer Science' },
  { code: 'CS504', name: 'Computer Networks', credits: 3, semester: '5th', branch: 'Computer Science' },
  { code: 'CS505', name: 'Software Engineering', credits: 3, semester: '5th', branch: 'Computer Science' },
  { code: 'MA501', name: 'Discrete Mathematics', credits: 3, semester: '5th', branch: 'Computer Science' },
];

const mockTimetable = [
  { day: 'Monday', '09:00': 'DS&A (CS501)', '10:00': 'OS (CS502)', '11:00': 'DBMS (CS503)', '12:00': 'CN (CS504)', '02:00': 'SE (CS505)' },
  { day: 'Tuesday', '09:00': 'OS (CS502)', '10:00': 'DBMS (CS503)', '11:00': 'DS&A (CS501)', '12:00': 'DM (MA501)', '02:00': 'SE (CS505)' },
  { day: 'Wednesday', '09:00': 'CN (CS504)', '10:00': 'DS&A (CS501)', '11:00': 'OS (CS502)', '12:00': 'SE (CS505)', '02:00': 'DBMS (CS503)' },
  { day: 'Thursday', '09:00': 'DM (MA501)', '10:00': 'CN (CS504)', '11:00': 'DS&A (CS501)', '12:00': 'OS (CS502)', '02:00': 'SE (CS505)' },
  { day: 'Friday', '09:00': 'SE (CS505)', '10:00': 'DBMS (CS503)', '11:00': 'CN (CS504)', '12:00': 'DS&A (CS501)', '02:00': 'OS (CS502)' },
];

// Helper function to get Lucide Icon component by name
const getIcon = (name) => {
  const icons = {
    Home: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    BarChart2: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>,
    Award: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 18 17 23 15.79 13.89"/></svg>,
    Calendar: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
    User: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    Book: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M18 2H6.5a2.5 2.5 0 0 0-2.5 2.5V19.5"/></svg>,
    Clock: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    LogOut: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>,
    Bell: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.36 19a2 2 0 0 0 3.28 0"/></svg>,
    Search: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
    Download: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>,
  };
  return icons[name] || (() => null); // Return a component or null if not found
};


const NavLink = ({ iconName, text, isActive, onClick }) => {
  const Icon = getIcon(iconName);
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-3 my-1 rounded-lg transition-all duration-200
        ${isActive ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-200 hover:text-indigo-600'}`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="font-medium">{text}</span>
    </button>
  );
};

const Card = ({ children, title, iconName, className = '' }) => {
  const Icon = getIcon(iconName);
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 ${className}`}>
      {title && (
        <div className="flex items-center mb-4">
          {Icon && <Icon className="w-6 h-6 text-indigo-600 mr-3" />}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

const ProgressBar = ({ percentage }) => {
  const colorClass = percentage >= 75 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${colorClass}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [studentData, setStudentData] = useState(mockStudentData);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New announcement: Mid-term exams postponed by a week.', read: false },
    { id: 2, message: 'Your DBMS assignment grade has been updated.', read: false },
  ]);

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend
    alert('Profile updated successfully!');
    // For demo, just show the alert. No actual data persistence here.
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Attendance Summary" iconName="BarChart2" className="lg:col-span-2">
              <div className="space-y-4">
                {mockAttendance.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1 text-sm text-gray-700">
                      <span>{item.subject}</span>
                      <span className="font-semibold">{item.percentage.toFixed(1)}%</span>
                    </div>
                    <ProgressBar percentage={item.percentage} />
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Academic Snapshot" iconName="Award">
              <p className="text-gray-700 mb-2">Current CGPA:</p>
              <p className="text-5xl font-bold text-indigo-600">{studentData.cgpa}</p>
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" /> Download Marks PDF
              </button>
            </Card>

            <Card title="Upcoming Exams" iconName="Calendar" className="md:col-span-2">
              <div className="space-y-4">
                {mockExamSchedule.slice(0, 2).map((exam, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <Calendar className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">{exam.subject}</p>
                      <p className="text-sm text-gray-600">{new Date(exam.date).toDateString()} at {exam.time} ({exam.room})</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Notifications" iconName="Bell">
              {notifications.length === 0 ? (
                <p className="text-gray-600">No new notifications.</p>
              ) : (
                <ul className="space-y-3">
                  {notifications.map(notification => (
                    <li key={notification.id} className={`p-3 rounded-lg flex items-start ${notification.read ? 'bg-gray-100 text-gray-600' : 'bg-blue-50 text-blue-800 font-medium'}`}>
                      <Bell className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                      <div className="flex-grow">
                        <p className={`${notification.read ? 'line-through' : ''}`}>{notification.message}</p>
                        {!notification.read && (
                          <button
                            onClick={() => markNotificationAsRead(notification.id)}
                            className="text-xs text-blue-600 hover:underline mt-1"
                          >
                            Mark as Read
                          </button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </div>
        );

      case 'attendance':
        return (
          <Card title="Student Attendance" iconName="BarChart2">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6">Subject</th>
                    <th className="py-3 px-6">Attended</th>
                    <th className="py-3 px-6">Total</th>
                    <th className="py-3 px-6">Percentage</th>
                    <th className="py-3 px-6">Progress</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-light">
                  {mockAttendance.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-6">{item.subject}</td>
                      <td className="py-3 px-6">{item.attended}</td>
                      <td className="py-3 px-6">{item.total}</td>
                      <td className="py-3 px-6 font-semibold">{item.percentage.toFixed(1)}%</td>
                      <td className="py-3 px-6">
                        <ProgressBar percentage={item.percentage} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        );

      case 'grades':
        return (
          <Card title="Grades & Academic Performance" iconName="Award">
            <div className="mb-6 p-4 bg-indigo-50 rounded-lg flex items-center justify-between">
              <p className="text-lg font-semibold text-indigo-800">Overall CGPA: <span className="text-2xl font-bold">{studentData.cgpa}</span></p>
              <button className="bg-indigo-600 text-white py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" /> Download Marks PDF
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6">Subject</th>
                    <th className="py-3 px-6">Score</th>
                    <th className="py-3 px-6">Grade</th>
                    <th className="py-3 px-6">Credits</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-light">
                  {mockGrades.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-6">{item.subject}</td>
                      <td className="py-3 px-6">{item.score}</td>
                      <td className="py-3 px-6 font-semibold">{item.grade}</td>
                      <td className="py-3 px-6">{item.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        );

      case 'exam-schedule':
        return (
          <Card title="Exam Schedule" iconName="Calendar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockExamSchedule.map((exam, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-lg border border-blue-200 shadow-sm flex items-start">
                  <Calendar className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{exam.subject}</h4>
                    <p className="text-gray-700 text-sm">Date: <span className="font-medium">{new Date(exam.date).toDateString()}</span></p>
                    <p className="text-gray-700 text-sm">Time: <span className="font-medium">{exam.time}</span></p>
                    <p className="text-gray-700 text-sm">Room: <span className="font-medium">{exam.room}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );

      case 'profile':
        return (
          <Card title="User Profile Details" iconName="User">
            <form onSubmit={handleProfileUpdate} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={studentData.name}
                    onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                  <input
                    type="text"
                    id="studentId"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm"
                    value={studentData.studentId}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={studentData.email}
                    onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={studentData.phone}
                    onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                  <input
                    type="text"
                    id="branch"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm"
                    value={studentData.branch}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                  <input
                    type="text"
                    id="semester"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed sm:text-sm"
                    value={studentData.semester}
                    readOnly
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    id="address"
                    rows="3"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={studentData.address}
                    onChange={(e) => setStudentData({ ...studentData, address: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </Card>
        );

      case 'subjects':
        return (
          <Card title="Subjects by Semester" iconName="Book">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6">Subject Code</th>
                    <th className="py-3 px-6">Subject Name</th>
                    <th className="py-3 px-6">Credits</th>
                    <th className="py-3 px-6">Semester</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-light">
                  {mockSubjects.map((subject, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-6">{subject.code}</td>
                      <td className="py-3 px-6">{subject.name}</td>
                      <td className="py-3 px-6">{subject.credits}</td>
                      <td className="py-3 px-6">{subject.semester}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        );

      case 'timetable':
        return (
          <Card title="Class Timetable" iconName="Clock">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6">Day</th>
                    <th className="py-3 px-6">09:00 - 10:00</th>
                    <th className="py-3 px-6">10:00 - 11:00</th>
                    <th className="py-3 px-6">11:00 - 12:00</th>
                    <th className="py-3 px-6">12:00 - 01:00</th>
                    <th className="py-3 px-6">01:00 - 02:00</th>
                    <th className="py-3 px-6">02:00 - 03:00</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-light">
                  {mockTimetable.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-6 font-semibold">{row.day}</td>
                      <td className="py-3 px-6">{row['09:00'] || '-'}</td>
                      <td className="py-3 px-6">{row['10:00'] || '-'}</td>
                      <td className="py-3 px-6">{row['11:00'] || '-'}</td>
                      <td className="py-3 px-6">{row['12:00'] || '-'}</td>
                      <td className="py-3 px-6 text-gray-500 italic">Lunch Break</td>
                      <td className="py-3 px-6">{row['02:00'] || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        );

      default:
        return <p className="text-gray-600">Select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="font-['Inter'] min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-white shadow-lg lg:rounded-r-xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-10">
            <img
              src="https://placehold.co/40x40/6366F1/FFFFFF?text=SP"
              alt="Portal Logo"
              className="w-10 h-10 rounded-full mr-3"
            />
            <h1 className="text-2xl font-bold text-indigo-700">Student Portal</h1>
          </div>

          <nav>
            <NavLink
              iconName="Home"
              text="Dashboard"
              isActive={activeSection === 'dashboard'}
              onClick={() => setActiveSection('dashboard')}
            />
            <NavLink
              iconName="BarChart2"
              text="Attendance"
              isActive={activeSection === 'attendance'}
              onClick={() => setActiveSection('attendance')}
            />
            <NavLink
              iconName="Award"
              text="Grades"
              isActive={activeSection === 'grades'}
              onClick={() => setActiveSection('grades')}
            />
            <NavLink
              iconName="Calendar"
              text="Exam Schedule"
              isActive={activeSection === 'exam-schedule'}
              onClick={() => setActiveSection('exam-schedule')}
            />
            <NavLink
              iconName="User"
              text="Profile"
              isActive={activeSection === 'profile'}
              onClick={() => setActiveSection('profile')}
            />
            <NavLink
              iconName="Book"
              text="Subject Info"
              isActive={activeSection === 'subjects'}
              onClick={() => setActiveSection('subjects')}
            />
            <NavLink
              iconName="Clock"
              text="Time Table"
              isActive={activeSection === 'timetable'}
              onClick={() => setActiveSection('timetable')}
            />
          </nav>
        </div>

        <div className="mt-8">
          <NavLink
            iconName="LogOut"
            text="Logout"
            isActive={false}
            onClick={() => alert('Logging out... (This is a demo)')}
          />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {unreadNotificationsCount}
                </span>
              )}
            </div>
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40/E0E7FF/4F46E5?text=AJ"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-3 border-2 border-indigo-400"
              />
              <div>
                <p className="font-semibold text-gray-800">{studentData.name}</p>
                <p className="text-sm text-gray-500">{studentData.studentId}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
