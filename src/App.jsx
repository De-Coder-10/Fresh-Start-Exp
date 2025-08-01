// import { useState, useEffect } from 'react'
// import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
// import Header from './components/Header';
// import Navbar from './components/Navbar'
// import Login from './components/Login'
// import Attendance from './components/Attendance'
// import Profile from './components/Profile'
// import Grades from './components/Grades';
// import Exams from './components/Exams';
// import Subjects from './components/Subjects';
// import MarksCard from './components/MarksCard';
// import LandingPage from './components/LandingPage';

// import './App.css'
// import { WebPortal, LoginError } from "https://cdn.jsdelivr.net/npm/jsjiit@0.0.20/dist/jsjiit.esm.js";


// // Create WebPortal instance at the top level
// const w = new WebPortal();



// // Create a wrapper component to use the useNavigate hook
// function AuthenticatedApp({ w, setIsAuthenticated }) {
//   const [activeAttendanceTab, setActiveAttendanceTab] = useState("overview")
//   const [attendanceData, setAttendanceData] = useState({});
//   const [attendanceSemestersData, setAttendanceSemestersData] = useState(null);

//   const [subjectData, setSubjectData] = useState({});
//   const [subjectSemestersData, setSubjectSemestersData] = useState(null);

//   const [gradesData, setGradesData] = useState({});
//   const [gradesSemesterData, setGradesSemesterData] = useState(null);

//   const [selectedAttendanceSem, setSelectedAttendanceSem] = useState(null);
//   const [selectedGradesSem, setSelectedGradesSem] = useState(null);
//   const [selectedSubjectsSem, setSelectedSubjectsSem] = useState(null);

//   const [attendanceDailyDate, setAttendanceDailyDate] = useState(new Date());
//   const [isAttendanceCalendarOpen, setIsAttendanceCalendarOpen] = useState(false);
//   const [isAttendanceTrackerOpen, setIsAttendanceTrackerOpen] = useState(false);
//   const [attendanceSubjectCacheStatus, setAttendanceSubjectCacheStatus] = useState({});

//   // Add attendance goal state
//   const [attendanceGoal, setAttendanceGoal] = useState(() => {
//     const savedGoal = localStorage.getItem('attendanceGoal');
//     return savedGoal ? parseInt(savedGoal) : 75; // Default to 75% if not set
//   });

//   // Add effect to save goal to localStorage when it changes
//   useEffect
//   (() => {
//     localStorage.setItem('attendanceGoal', attendanceGoal.toString());
//   }, [attendanceGoal]);

//   // Add new profile data state
//   const [profileData, setProfileData] = useState(null);

//   // Add new state for grades component
//   const [activeGradesTab, setActiveGradesTab] = useState("overview");
//   const [gradeCardSemesters, setGradeCardSemesters] = useState([]);
//   const [selectedGradeCardSem, setSelectedGradeCardSem] = useState(null);
//   const [gradeCard, setGradeCard] = useState(null);

//   // Add new state for storing grade cards
//   const [gradeCards, setGradeCards] = useState({});

//   // Add new states for subject attendance
//   const [subjectAttendanceData, setSubjectAttendanceData] = useState({});
//   const [selectedSubject, setSelectedSubject] = useState(null);

//   // Add new state for exams
//   const [examSchedule, setExamSchedule] = useState({});
//   const [examSemesters, setExamSemesters] = useState([]);
//   const [selectedExamSem, setSelectedExamSem] = useState(null);
//   const [selectedExamEvent, setSelectedExamEvent] = useState(null);

//   // Add new state for marks
//   const [marksSemesters, setMarksSemesters] = useState([]);
//   const [selectedMarksSem, setSelectedMarksSem] = useState(null);
//   const [marksSemesterData, setMarksSemesterData] = useState(null);
//   const [marksData, setMarksData] = useState({});

//   // Add these new states lifted from Grades.jsx
//   const [gradesLoading, setGradesLoading] = useState(true);
//   const [gradesError, setGradesError] = useState(null);
//   const [gradeCardLoading, setGradeCardLoading] = useState(false);
//   const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
//   const [marksLoading, setMarksLoading] = useState(false);

//   // Add these new states lifted from Attendance.jsx
//   const [isAttendanceMetaLoading, setIsAttendanceMetaLoading] = useState(true);
//   const [isAttendanceDataLoading, setIsAttendanceDataLoading] = useState(true);

//   return (
//     <div className="min-h-screen pb-14 select-none">
//       <div className="sticky top-0 z-30 bg-[#191c20] -mt-[2px]">
//         <Header setIsAuthenticated={setIsAuthenticated} />
//       </div>
//       <Routes>
//         <Route path="/" element={<Navigate to="/attendance" />} />
//         <Route path="/login" element={<Navigate to="/attendance" />} />
//         <Route
//           path="/attendance"
//           element={
//             <Attendance
//               w={w}
//               attendanceData={attendanceData}
//               setAttendanceData={setAttendanceData}
//               semestersData={attendanceSemestersData}
//               setSemestersData={setAttendanceSemestersData}
//               selectedSem={selectedAttendanceSem}
//               setSelectedSem={setSelectedAttendanceSem}
//               attendanceGoal={attendanceGoal}
//               setAttendanceGoal={setAttendanceGoal}
//               subjectAttendanceData={subjectAttendanceData}
//               setSubjectAttendanceData={setSubjectAttendanceData}
//               selectedSubject={selectedSubject}
//               setSelectedSubject={setSelectedSubject}
//               isAttendanceMetaLoading={isAttendanceMetaLoading}
//               setIsAttendanceMetaLoading={setIsAttendanceMetaLoading}
//               isAttendanceDataLoading={isAttendanceDataLoading}
//               setIsAttendanceDataLoading={setIsAttendanceDataLoading}
//               activeTab={activeAttendanceTab}
//               setActiveTab={setActiveAttendanceTab}
//               dailyDate={attendanceDailyDate}
//               setDailyDate={setAttendanceDailyDate}
//               calendarOpen={isAttendanceCalendarOpen}
//               setCalendarOpen={setIsAttendanceCalendarOpen}
//               isTrackerOpen={isAttendanceTrackerOpen}
//               setIsTrackerOpen={setIsAttendanceTrackerOpen}
//               subjectCacheStatus={attendanceSubjectCacheStatus}
//               setSubjectCacheStatus={setAttendanceSubjectCacheStatus}
//             />
//           }
//         />
//         <Route
//           path="/grades"
//           element={
//             <Grades
//               w={w}
//               gradesData={gradesData}
//               setGradesData={setGradesData}
//               semesterData={gradesSemesterData}
//               setSemesterData={setGradesSemesterData}
//               activeTab={activeGradesTab}
//               setActiveTab={setActiveGradesTab}
//               gradeCardSemesters={gradeCardSemesters}
//               setGradeCardSemesters={setGradeCardSemesters}
//               selectedGradeCardSem={selectedGradeCardSem}
//               setSelectedGradeCardSem={setSelectedGradeCardSem}
//               gradeCard={gradeCard}
//               setGradeCard={setGradeCard}
//               gradeCards={gradeCards}
//               setGradeCards={setGradeCards}
//               marksSemesters={marksSemesters}
//               setMarksSemesters={setMarksSemesters}
//               selectedMarksSem={selectedMarksSem}
//               setSelectedMarksSem={setSelectedMarksSem}
//               marksSemesterData={marksSemesterData}
//               setMarksSemesterData={setMarksSemesterData}
//               marksData={marksData}
//               setMarksData={setMarksData}
//               gradesLoading={gradesLoading}
//               setGradesLoading={setGradesLoading}
//               gradesError={gradesError}
//               setGradesError={setGradesError}
//               gradeCardLoading={gradeCardLoading}
//               setGradeCardLoading={setGradeCardLoading}
//               isDownloadDialogOpen={isDownloadDialogOpen}
//               setIsDownloadDialogOpen={setIsDownloadDialogOpen}
//               marksLoading={marksLoading}
//               setMarksLoading={setMarksLoading}
//             />
//           }
//         />
//         <Route path="/exams" element={
//           <Exams
//             w={w}
//             examSchedule={examSchedule}
//             setExamSchedule={setExamSchedule}
//             examSemesters={examSemesters}
//             setExamSemesters={setExamSemesters}
//             selectedExamSem={selectedExamSem}
//             setSelectedExamSem={setSelectedExamSem}
//             selectedExamEvent={selectedExamEvent}
//             setSelectedExamEvent={setSelectedExamEvent}
//           />
//           } />
//         <Route
//           path="/subjects"
//           element={
//             <Subjects
//               w={w}
//               subjectData={subjectData}
//               setSubjectData={setSubjectData}
//               semestersData={subjectSemestersData}
//               setSemestersData={setSubjectSemestersData}
//               selectedSem={selectedSubjectsSem}
//               setSelectedSem={setSelectedSubjectsSem}
//             />
//           }
//         />
//         <Route path="/profile" element={
//           <Profile
//             w={w}
//             profileData={profileData}
//             setProfileData={setProfileData}
//           />
//         } />
//       </Routes>
//       <Navbar />
//     </div>
//   );
// }

// function LoginWrapper({ onLoginSuccess, w }) {
//   const navigate = useNavigate();

//   const handleLoginSuccess = () => {
//     onLoginSuccess();
//     // Add a small delay to ensure state updates before navigation
//     setTimeout(() => {
//       navigate('/attendance');
//     }, 100);
//   };

//   return (
//     <Login
//       onLoginSuccess={handleLoginSuccess}
//       w={w}
//     />
//   );
// }

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const username = localStorage.getItem("username");
//     const password = localStorage.getItem("password");

//     const performLogin = async () => {
//       try {
//         if (username && password) {
//           await w.student_login(username, password);
//           if (w.session) {
//             setIsAuthenticated(true);
//           }
//         }
//       } catch (error) {
//         if (error instanceof LoginError && error.message.includes("JIIT Web Portal server is temporarily unavailable")) {
//           setError("JIIT Web Portal server is temporarily unavailable. Please try again later.");
//         } else if (error instanceof LoginError && error.message.includes("Failed to fetch")) {
//           setError("Please check your internet connection. If connected, JIIT Web Portal server is temporarily unavailable.");
//         }
//         else {
//           console.error("Auto-login failed:", error);
//           setError("Auto-login failed. Please login again.");
//         }
//         localStorage.removeItem("username");
//         localStorage.removeItem("password");
//         setIsAuthenticated(false);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     performLogin();
//   }, []);

//   if (isLoading) {
//     return <div className="min-h-screen flex items-center justify-center bg-[#191c20] text-white">
//       Signing in...
//     </div>;
//   }

//   return (
//     <Router>
//       <div className="min-h-screen bg-[#191c20] select-none">
//         {!isAuthenticated || !w.session ? (
//           <Routes>
//             <Route path="*" element={
//               <>
//                 {error && <div className="text-red-500 text-center pt-4">{error}</div>}
//                 <LoginWrapper
//                   onLoginSuccess={() => setIsAuthenticated(true)}
//                   w={w}
//                 />
//               </>
//             } />
//           </Routes>
//         ) : (
//           <AuthenticatedApp w={w} setIsAuthenticated={setIsAuthenticated} />
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App


// ✅ INTEGRATED LandingPage with the routing system
// ✅ Redirect root ("/") to LandingPage if NOT authenticated
// ✅ Login still handled via LoginWrapper

import { Link } from 'react-router-dom'; // Ensure this is at the top
import { ArrowRight } from 'lucide-react';


import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Login from './components/Login';
import Attendance from './components/Attendance';
import AttendanceCard from './components/AttendanceCard';
import Profile from './components/Profile';
import Grades from './components/Grades';
import Exams from './components/Exams';
import Subjects from './components/Subjects';
import MarksCard from './components/MarksCard';
import LandingPage from './components/LandingPage';
import CampusLife from './components/CampusLife'
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CollegeEssentials from './components/CollegeEssentials';
import AcademicCompanion from './components/AcademicCompanion';
import MentorshipHub from './components/MentorshipHub';
import CareerToolkit from './components/CareerToolkit';
import MentalHealth from './components/MentalHealth'
import MessScheduler from './components/MessScheduler'; // adjust the path if needed

import './App.css';
import { WebPortal, LoginError } from "https://cdn.jsdelivr.net/npm/jsjiit@0.0.20/dist/jsjiit.esm.js";





const w = new WebPortal();

function AuthenticatedApp({ w, setIsAuthenticated }) {
  const [activeAttendanceTab, setActiveAttendanceTab] = useState("overview");
  const [attendanceData, setAttendanceData] = useState({});
  const [attendanceSemestersData, setAttendanceSemestersData] = useState(null);
  const [subjectData, setSubjectData] = useState({});
  const [subjectSemestersData, setSubjectSemestersData] = useState(null);
  const [gradesData, setGradesData] = useState({});
  const [gradesSemesterData, setGradesSemesterData] = useState(null);
  const [selectedAttendanceSem, setSelectedAttendanceSem] = useState(null);
  const [selectedGradesSem, setSelectedGradesSem] = useState(null);
  const [selectedSubjectsSem, setSelectedSubjectsSem] = useState(null);
  const [attendanceDailyDate, setAttendanceDailyDate] = useState(new Date());
  const [isAttendanceCalendarOpen, setIsAttendanceCalendarOpen] = useState(false);
  const [isAttendanceTrackerOpen, setIsAttendanceTrackerOpen] = useState(false);
  const [attendanceSubjectCacheStatus, setAttendanceSubjectCacheStatus] = useState({});
  const [attendanceGoal, setAttendanceGoal] = useState(() => {
    const savedGoal = localStorage.getItem('attendanceGoal');
    return savedGoal ? parseInt(savedGoal) : 75;
  });
  useEffect(() => {
    localStorage.setItem('attendanceGoal', attendanceGoal.toString());
  }, [attendanceGoal]);
  const [profileData, setProfileData] = useState(null);
  const [activeGradesTab, setActiveGradesTab] = useState("overview");
  const [gradeCardSemesters, setGradeCardSemesters] = useState([]);
  const [selectedGradeCardSem, setSelectedGradeCardSem] = useState(null);
  const [gradeCard, setGradeCard] = useState(null);
  const [gradeCards, setGradeCards] = useState({});
  const [subjectAttendanceData, setSubjectAttendanceData] = useState({});
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [examSchedule, setExamSchedule] = useState({});
  const [examSemesters, setExamSemesters] = useState([]);
  const [selectedExamSem, setSelectedExamSem] = useState(null);
  const [selectedExamEvent, setSelectedExamEvent] = useState(null);
  const [marksSemesters, setMarksSemesters] = useState([]);
  const [selectedMarksSem, setSelectedMarksSem] = useState(null);
  const [marksSemesterData, setMarksSemesterData] = useState(null);
  const [marksData, setMarksData] = useState({});
  const [gradesLoading, setGradesLoading] = useState(true);
  const [gradesError, setGradesError] = useState(null);
  const [gradeCardLoading, setGradeCardLoading] = useState(false);
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  const [marksLoading, setMarksLoading] = useState(false);
  const [isAttendanceMetaLoading, setIsAttendanceMetaLoading] = useState(true);
  const [isAttendanceDataLoading, setIsAttendanceDataLoading] = useState(true);

  return (
    <div className="min-h-screen pb-14 select-none">
      <div className="sticky top-0 z-30 bg-[#191c20] -mt-[2px]">
        <Header setIsAuthenticated={setIsAuthenticated} />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/attendance" />} />
        <Route path="/login" element={<Navigate to="/attendance" />} />
        <Route
          path="/attendance"
          element={<Attendance
            w={w} attendanceData={attendanceData} setAttendanceData={setAttendanceData}
            semestersData={attendanceSemestersData} setSemestersData={setAttendanceSemestersData}
            selectedSem={selectedAttendanceSem} setSelectedSem={setSelectedAttendanceSem}
            attendanceGoal={attendanceGoal} setAttendanceGoal={setAttendanceGoal}
            subjectAttendanceData={subjectAttendanceData} setSubjectAttendanceData={setSubjectAttendanceData}
            selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject}
            isAttendanceMetaLoading={isAttendanceMetaLoading} setIsAttendanceMetaLoading={setIsAttendanceMetaLoading}
            isAttendanceDataLoading={isAttendanceDataLoading} setIsAttendanceDataLoading={setIsAttendanceDataLoading}
            activeTab={activeAttendanceTab} setActiveTab={setActiveAttendanceTab}
            dailyDate={attendanceDailyDate} setDailyDate={setAttendanceDailyDate}
            calendarOpen={isAttendanceCalendarOpen} setCalendarOpen={setIsAttendanceCalendarOpen}
            isTrackerOpen={isAttendanceTrackerOpen} setIsTrackerOpen={setIsAttendanceTrackerOpen}
            subjectCacheStatus={attendanceSubjectCacheStatus} setSubjectCacheStatus={setAttendanceSubjectCacheStatus} />}
        />
        <Route path="/grades" element={<Grades w={w} gradesData={gradesData} setGradesData={setGradesData} semesterData={gradesSemesterData} setSemesterData={setGradesSemesterData} activeTab={activeGradesTab} setActiveTab={setActiveGradesTab} gradeCardSemesters={gradeCardSemesters} setGradeCardSemesters={setGradeCardSemesters} selectedGradeCardSem={selectedGradeCardSem} setSelectedGradeCardSem={setSelectedGradeCardSem} gradeCard={gradeCard} setGradeCard={setGradeCard} gradeCards={gradeCards} setGradeCards={setGradeCards} marksSemesters={marksSemesters} setMarksSemesters={setMarksSemesters} selectedMarksSem={selectedMarksSem} setSelectedMarksSem={setSelectedMarksSem} marksSemesterData={marksSemesterData} setMarksSemesterData={setMarksSemesterData} marksData={marksData} setMarksData={setMarksData} gradesLoading={gradesLoading} setGradesLoading={setGradesLoading} gradesError={gradesError} setGradesError={setGradesError} gradeCardLoading={gradeCardLoading} setGradeCardLoading={setGradeCardLoading} isDownloadDialogOpen={isDownloadDialogOpen} setIsDownloadDialogOpen={setIsDownloadDialogOpen} marksLoading={marksLoading} setMarksLoading={setMarksLoading} />} />
        <Route path="/exams" element={<Exams w={w} examSchedule={examSchedule} setExamSchedule={setExamSchedule} examSemesters={examSemesters} setExamSemesters={setExamSemesters} selectedExamSem={selectedExamSem} setSelectedExamSem={setSelectedExamSem} selectedExamEvent={selectedExamEvent} setSelectedExamEvent={setSelectedExamEvent} />} />
        <Route path="/subjects" element={<Subjects w={w} subjectData={subjectData} setSubjectData={setSubjectData} semestersData={subjectSemestersData} setSemestersData={setSubjectSemestersData} selectedSem={selectedSubjectsSem} setSelectedSem={setSelectedSubjectsSem} />} />
        <Route path="/profile" element={<Profile w={w} profileData={profileData} setProfileData={setProfileData} />} />
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}

function LoginWrapper({ onLoginSuccess, w }) {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    onLoginSuccess();
    setTimeout(() => navigate('/attendance'), 100);
  };
  return <Login onLoginSuccess={handleLoginSuccess} w={w} />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  
  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const performLogin = async () => {
      try {
        if (username && password) {
          await w.student_login(username, password);
          if (w.session) setIsAuthenticated(true);
        }
      } catch (error) {
        if (error instanceof LoginError && error.message.includes("JIIT Web Portal server is temporarily unavailable")) {
          setError("JIIT Web Portal server is temporarily unavailable. Please try again later.");
        } else if (error instanceof LoginError && error.message.includes("Failed to fetch")) {
          setError("Please check your internet connection. If connected, JIIT Web Portal server is temporarily unavailable.");
        } else {
          console.error("Auto-login failed:", error);
          setError("Auto-login failed. Please login again.");
        }
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    performLogin();
  }, []);

  return (
    <Router>
 <Navbar /> 
      <div className="min-h-screen bg-[#191c20] select-none">
        {isLoading ? 
        (
          <div className="min-h-screen flex items-center justify-center text-white">Signing in...</div>
        ) : !isAuthenticated || !w.session ? 
        
        (
          <Routes>
            
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginWrapper onLoginSuccess={() => setIsAuthenticated(true)} w={w} />} />
            <Route path="*" element={<Navigate to="/" />} />
            
            <Route path="/register" element={<Register w={w} />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/collegeEssentials" element={<CollegeEssentials/>} />
            <Route path="/marks-card" element={<MarksCard />} />
            <Route path="/attendance-card" element={<AttendanceCard />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/CampusLife" element={<CampusLife />} />
            <Route path="/MentalHealth" element={<MentalHealth />} />



            {/* <Route path="/academicCompanion" element={<Navigate to="AcademicCompanion" />} /> */}
            <Route path="/AcademicCompanion" element={<AcademicCompanion w={w} />} />
            <Route path="/MentorshipHub" element={<MentorshipHub w={w} />} />
            <Route path="/CareerToolkit" element={<CareerToolkit w={w} />} />
            <Route path="/navbar2" element={<Navbar2 w={w} />} />
            <Route path="/MessScheduler" element={<MessScheduler />} />

            

            <Route path="*" element={<Navigate to="/" />} />




          </Routes>
        ) : (
          <AuthenticatedApp w={w} setIsAuthenticated={setIsAuthenticated} />
        )}
      </div>

    </Router>
    
  );
}

export default App;

