



// import React, { useState, useEffect } from "react";

// import { ScrollArea } from "@/components/ui/scroll-area"; 
// import AttendanceCard from "./AttendanceCard";
// import Navbar from "./Navbar";
// import Navbar2 from '@/components/Navbar2'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Calendar } from "@/components/ui/calendar";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { Progress } from "@/components/ui/progress";
// import CircleProgress from "./CircleProgress";
// import {
//   Check,
//   Loader2,
//   AlertCircle,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// const Attendance = ({
//   w,
//   attendanceData,
//   setAttendanceData,
//   semestersData,
//   setSemestersData,
//   selectedSem,
//   setSelectedSem,
//   attendanceGoal,
//   setAttendanceGoal,
//   subjectAttendanceData,
//   setSubjectAttendanceData,
//   selectedSubject,
//   setSelectedSubject,
//   isAttendanceMetaLoading,
//   setIsAttendanceMetaLoading,
//   isAttendanceDataLoading,
//   setIsAttendanceDataLoading,
//   activeTab,
//   setActiveTab,
//   dailyDate,
//   setDailyDate,
//   calendarOpen,
//   setCalendarOpen,
//   isTrackerOpen,
//   setIsTrackerOpen,
//   subjectCacheStatus,
//   setSubjectCacheStatus
// }) => {

//   useEffect(() => {
//     const fetchSemesters = async () => {
//       if (semestersData) {
//         if (semestersData.semesters.length > 0 && !selectedSem) {
//           setSelectedSem(semestersData.latest_semester);
//         }
//         return;
//       }

//       setIsAttendanceMetaLoading(true);
//       setIsAttendanceDataLoading(true);
//       try {
//         const meta = await w.get_attendance_meta();
//         const header = meta.latest_header();
//         const latestSem = meta.latest_semester();

//         setSemestersData({
//           semesters: meta.semesters,
//           latest_header: header,
//           latest_semester: latestSem,
//         });

//         try {
//           const data = await w.get_attendance(header, latestSem);
//           setAttendanceData((prev) => ({
//             ...prev,
//             [latestSem.registration_id]: data,
//           }));
//           setSelectedSem(latestSem);
//         } catch (error) {
//           console.log(error.message);
//           console.log(error.status);
//           if (error.message.includes("NO Attendance Found")) {
//             // If latest semester has no attendance, try the previous one
//             const previousSem = meta.semesters[1]; // Index 1 is the second most recent semester
//             if (previousSem) {
//               const data = await w.get_attendance(header, previousSem);
//               setAttendanceData((prev) => ({
//                 ...prev,
//                 [previousSem.registration_id]: data,
//               }));
//               setSelectedSem(previousSem);
//               console.log(previousSem);
//             }
//           } else {
//             throw error;
//           }
//         }
//       } catch (error) {
//         console.error("Failed to fetch attendance:", error);
//       } finally {
//         setIsAttendanceMetaLoading(false);
//         setIsAttendanceDataLoading(false);
//       }
//     };

//     fetchSemesters();
//   }, [w, setAttendanceData, semestersData, setSemestersData]);

//   const handleSemesterChange = async (value) => {
//     // Update selected semester immediately
//     const semester = semestersData.semesters.find(
//       (sem) => sem.registration_id === value,
//     );
//     setSelectedSem(semester);

//     setIsAttendanceDataLoading(true);
//     try {
//       if (attendanceData[value]) {
//         setIsAttendanceDataLoading(false);
//         return;
//       }

//       const meta = await w.get_attendance_meta();
//       const header = meta.latest_header();
//       const data = await w.get_attendance(header, semester);
//       setAttendanceData((prev) => ({
//         ...prev,
//         [value]: data,
//       }));
//     } catch (error) {
//       if (error.message.includes("NO Attendance Found")) {
//         // Show message that attendance is not available for this semester
//         setAttendanceData((prev) => ({
//           ...prev,
//           [value]: { error: "Attendance not available for this semester" },
//         }));
//       } else {
//         console.error("Failed to fetch attendance:", error);
//       }
//     } finally {
//       setIsAttendanceDataLoading(false);
//     }
//   };

//   const handleGoalChange = (e) => {
//     const value = e.target.value === "" ? "" : parseInt(e.target.value);
//     if (value === "" || (!isNaN(value) && value > 0 && value <= 100)) {
//       setAttendanceGoal(value);
//     }
//   };

//   const subjects =
//     (selectedSem &&
//       attendanceData[selectedSem.registration_id]?.studentattendancelist?.map(
//         (item) => {
//           const {
//             subjectcode,
//             Ltotalclass,
//             Ltotalpres,
//             Lpercentage,
//             Ttotalclass,
//             Ttotalpres,
//             Tpercentage,
//             Ptotalclass,
//             Ptotalpres,
//             Ppercentage,
//             LTpercantage,
//           } = item;

//           const { attended, total } = {
//             attended: (Ltotalpres || 0) + (Ttotalpres || 0) + (Ptotalpres || 0),
//             total: (Ltotalclass || 0) + (Ttotalclass || 0) + (Ptotalclass || 0),
//           };

//           const currentPercentage = (attended / total) * 100;
//           const classesNeeded = attendanceGoal
//             ? Math.ceil(
//                 (attendanceGoal * total - 100 * attended) /
//                   (100 - attendanceGoal),
//               )
//             : null;
//           const classesCanMiss = attendanceGoal
//             ? Math.floor(
//                 (100 * attended - attendanceGoal * total) / attendanceGoal,
//               )
//             : null;

//           return {

//             name: subjectcode,
//             attendance: {
//               attended,
//               total,
//             },
//             combined: LTpercantage,
//             lecture: Lpercentage,
//             tutorial: Tpercentage,
//             practical: Ppercentage,
//             classesNeeded: classesNeeded > 0 ? classesNeeded : 0,
//             classesCanMiss: classesCanMiss > 0 ? classesCanMiss : 0,
//           };
//         },
//       )) ||
//     [];

//   const fetchSubjectAttendance = async (subject) => {
//     try {
//       const attendance = attendanceData[selectedSem.registration_id];
//       const subjectData = attendance.studentattendancelist.find(
//         (s) => s.subjectcode === subject.name,
//       );

//       if (!subjectData) return;

//       const subjectcomponentids = [
//         "Lsubjectcomponentid",
//         "Psubjectcomponentid",
//         "Tsubjectcomponentid",
//       ]
//         .filter((id) => subjectData[id])
//         .map((id) => subjectData[id]);

//       const data = await w.get_subject_daily_attendance(
//         selectedSem,
//         subjectData.subjectid,
//         subjectData.individualsubjectcode,
//         subjectcomponentids,
//       );

//       setSubjectAttendanceData((prev) => ({
//         ...prev,
//         [subject.name]: data.studentAttdsummarylist,
//       }));
//     } catch (error) {
//       console.error("Failed to fetch subject attendance:", error);
//     }
//   };

//   useEffect(() => {
//     if (activeTab !== "daily") return;

//     const loadAllSubjects = async () => {
//       await Promise.all(
//         subjects.map(async (subj) => {
//           if (subjectAttendanceData[subj.name]) {
//             setSubjectCacheStatus((p) => ({ ...p, [subj.name]: "cached" }));
//             return;
//           }
//           setSubjectCacheStatus((p) => ({ ...p, [subj.name]: "fetching" }));
//           await fetchSubjectAttendance(subj); // server round‑trip
//           setSubjectCacheStatus((p) => ({ ...p, [subj.name]: "cached" }));
//         }),
//       );
//     };
//     loadAllSubjects();
//   }, [activeTab]);

//   const getClassesFor = (subjectName, date) => {
//     const all = subjectAttendanceData[subjectName];
//     if (!all) return [];
//     const key = date.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "2-digit",
//       year: "numeric",
//     });
//     return all.filter((c) => c.datetime.startsWith(key));
//   };







//   return (

//     <div className="text-white font-sans">
//       {/* <Navbar /> */}
//     <div className="text-white font-sans ">


//       <div className="sticky top-14 bg-[#191c20] z-20">
//         <div className="flex gap-2 py-2 px-3">
//           <Select
//             onValueChange={handleSemesterChange}
//             value={selectedSem?.registration_id}
//           >
//             <SelectTrigger className="bg-[#191c20] text-white border-white">
//               <SelectValue
//                 placeholder={
//                   isAttendanceMetaLoading
//                     ? "Loading semesters..."
//                     : "Select semester"
//                 }
//               >
//                 {selectedSem?.registration_code}
//               </SelectValue>
//             </SelectTrigger>
//             <SelectContent className="bg-[#191c20] text-white border-white">
//               {semestersData?.semesters?.map((sem) => (
//                 <SelectItem
//                   key={sem.registration_id}
//                   value={sem.registration_id}
//                 >
//                   {sem.registration_code}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           <Input
//             type="number"
//             value={attendanceGoal}
//             onChange={handleGoalChange}
//             min="-1"
//             max="100"
//             className="w-32 bg-[#191c20] text-white border-white"
//             placeholder="Goal %"
//           />
//         </div>
//       </div>

//       {isAttendanceMetaLoading || isAttendanceDataLoading ? (
//         <div className="flex items-center justify-center py-4 h-[calc(100vh-<header_height>-<navbar_height>)]">
//           Loading attendance...
//         </div>
//       ) : (
//         <Tabs
//           value={activeTab}
//           onValueChange={setActiveTab}
//           className="px-3 pb-4"
//         >
//           <TabsList className="grid grid-cols-2 bg-[#191c20]">
//             <TabsTrigger
//               value="overview"
//               className="bg-[#191c20] data-[state=active]:bg-[#1f2937] data-[state=active]:text-white"
//             >
//               Overview
//             </TabsTrigger>

//             <TabsTrigger
//               value="daily"
//               className="bg-[#191c20] data-[state=active]:bg-[#1f2937] data-[state=active]:text-white"
//             >
//               Day‑to‑Day
//             </TabsTrigger>
            
//           </TabsList>

//           <TabsContent value="overview">
//             {selectedSem &&
//             attendanceData[selectedSem.registration_id]?.error ? (
//               <div className="flex items-center justify-center py-4">
//                 {attendanceData[selectedSem.registration_id].error}
//               </div>
//             ) : (
//               subjects.map((subject) => (
//                 <AttendanceCard
//                   key={subject.name}
//                   subject={subject}
//                   selectedSubject={selectedSubject}
//                   setSelectedSubject={setSelectedSubject}
//                   subjectAttendanceData={subjectAttendanceData}
//                   fetchSubjectAttendance={fetchSubjectAttendance}
//                 />
//               ))
//             )}
//           </TabsContent>

//           <TabsContent value="daily">
//             <div className="flex flex-col items-center">
//               <div className="w-full max-w-[320px] flex flex-col">
//                 <button
//                   onClick={() => setCalendarOpen((o) => !o)}
//                   className="flex items-center justify-between bg-[#242a32] rounded-md px-3 py-2 mb-2 text-sm"
//                 >
//                   <span>{dailyDate.toDateString()}</span>
//                   {calendarOpen ? (
//                     <ChevronUp className="w-4 h-4" />
//                   ) : (
//                     <ChevronDown className="w-4 h-4" />
//                   )}
//                 </button>
//                 {calendarOpen && (
//                   <Calendar
//                     mode="single"
//                     selected={dailyDate}
//                     onSelect={(d) => {
//                       if (d) {
//                         setDailyDate(d);
//                       }
//                     }}
//                     modifiers={{
//                       hasActivity: (date) =>
//                         subjects.some(
//                           (s) => getClassesFor(s.name, date).length > 0,
//                         ),
//                     }}
//                     modifiersStyles={{
//                       hasActivity: {
//                         boxShadow: "inset 0 -2px 0 0 rgba(96,165,250,0.8)",
//                         borderRadius: "2px",
//                       },
//                     }}

//                     // className={` pb-2 text-white w-full flex-shrink-0 max-w-full`}
//                     classNames={{
//                       months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
//                       month: "space-y-4 w-full",
//                       caption: "flex justify-center pt-1 relative items-center text-sm",
//                       caption_label: "text-sm font-medium",
//                       nav: "space-x-1 flex items-center",
//                       nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
//                       nav_button_previous: "absolute left-1",
//                       nav_button_next: "absolute right-1",
//                       table: "w-full border-collapse space-y-1",
//                       presentation: "bg-red",
//                       head_row: "flex",
//                       head_cell: "text-gray-500 rounded-md flex-1 font-normal text-[0.8rem] max-[390px]:text-[0.7rem]",
//                       row: "flex w-full mt-2",
//                       cell: "flex-1 text-center text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
//                       day: "h-8 w-8 p-0 font-normal rounded-[2px] aria-selected:opacity-100 mx-auto max-[390px]:h-6 max-[390px]:w-6 max-[390px]:text-xs",
//                       day_selected: "bg-[hsl(0,8.7%,20.2%)]",
//                       day_today: "text-accent-foreground !bg-white",
//                       day_outside: "text-muted-foreground opacity-50",
//                       day_disabled: "text-muted-foreground opacity-50",
//                       day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
//                       day_hidden: "invisible",
//                     }}
//                   />
//                 )}
//               </div>

//               {subjects.length === 0 ? (
//                 <p className="text-gray-400">No subjects found.</p>
//               ) : (
//                 subjects.flatMap((subj) => {
//                   const lectures = getClassesFor(subj.name, dailyDate);
//                   if (lectures.length === 0) return [];
//                   return (
//                     <div
//                       key={subj.name}
//                       className="w-full max-w-lg border-b border-gray-700 py-3"
//                     >
//                       <h3 className="font-semibold mb-1">{subj.name}</h3>
//                       {lectures.map((cls, i) => (
//                         <div
//                           key={i}
//                           className={`flex justify-between text-sm ${
//                             cls.present === "Present"
//                               ? "text-green-400"
//                               : "text-red-400"
//                           }`}
//                         >
//                           <span>
//                             {cls.classtype} • {cls.present}
//                           </span>
//                           <span>{cls.datetime.split(" ").slice(1).join(" ").slice(1, -1)}</span>
//                         </div>
//                       ))}
//                     </div>
//                   );
//                 })
//               )}

//               {/* nothing on that day? */}
//               {subjects.every(
//                 (s) => getClassesFor(s.name, dailyDate).length === 0,
//               ) && (
//                 <p className="text-gray-400 mt-4">
//                   No classes were scheduled on&nbsp;
//                   {dailyDate.toLocaleDateString()}
//                 </p>
//               )}
//             </div>

//             {subjects.length > 0 &&
//               Object.values(subjectCacheStatus).some((s) => s !== "cached") && (
//                 <Sheet open={isTrackerOpen} onOpenChange={setIsTrackerOpen}>
//                   <SheetTrigger asChild>
//                     <button
//                       className="fixed bottom-20 right-4 z-50
//                            drop-shadow-lg bg-[#242a32] rounded-full
//                            ring-blue-400
//                            hover:ring-blue-300 hover:scale-105
//                            transition-transform cursor-pointer"
//                     >
//                       <CircleProgress
//                         percentage={
//                           (100 *
//                             subjects.filter(
//                               (s) => subjectCacheStatus[s.name] === "cached",
//                             ).length) /
//                           subjects.length
//                         }
//                         label={`${subjects.filter((s) => subjectCacheStatus[s.name] === "cached").length}/${subjects.length}`}
//                         className="shadow-inner"
//                       />
//                     </button>
//                   </SheetTrigger>

//                   <SheetContent
//                     side="bottom"
//                     /* hide default close button & force white text */
//                     className="h-[45vh] bg-[#242a32] text-white border-0 overflow-hidden
//                          [&_[data-radix-dialog-close]]:hidden"
//                   >
//                     <SheetHeader>
//                       <SheetTitle className="text-sm text-white">
//                         Fetching daily attendance&nbsp;(
//                         {
//                           subjects.filter(
//                             (s) => subjectCacheStatus[s.name] === "cached",
//                           ).length
//                         }
//                         /{subjects.length})
//                       </SheetTitle>
//                     </SheetHeader>

//                     <div className="mt-4 space-y-4 px-1 overflow-y-auto h-[calc(100%-3rem)]">
//                       <Progress
//                         value={
//                           (100 *
//                             subjects.filter(
//                               (s) => subjectCacheStatus[s.name] === "cached",
//                             ).length) /
//                           subjects.length
//                         }
//                         className="h-2"
//                       />

//                       <div className="divide-y divide-white/10 mt-4 overflow-y-auto h-[calc(100%-5rem)] pr-1">
//                         {subjects.map((s) => {
//                           const st = subjectCacheStatus[s.name] || "idle";
//                           return (
//                             <div
//                               key={s.name}
//                               className="py-3 flex items-center justify-between"
//                             >
//                               <div className="flex-1 min-w-0">
//                                 <p className="text-sm font-medium truncate">
//                                   {s.name}
//                                 </p>
//                               </div>
//                               {st === "cached" && (
//                                 <Check className="text-green-400 w-5 h-5" />
//                               )}
//                               {st === "fetching" && (
//                                 <Loader2 className="animate-spin text-blue-400 w-5 h-5" />
//                               )}
//                               {st === "idle" && (
//                                 <AlertCircle className="text-gray-500 w-5 h-5" />
//                               )}
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </SheetContent>
//                 </Sheet>
//               )}
//           </TabsContent>
//         </Tabs>
//       )}
//       <Navbar2 />
//     </div>
//     </div>
//   );
// };

// export default Attendance;

import React, { useState, useEffect } from "react";

import { ScrollArea } from "@/components/ui/scroll-area"; 
 // Re-importing ScrollArea from the provided path
import AttendanceCard from "./AttendanceCard";
import Navbar from "./Navbar"; // Assuming Navbar is still needed
import Navbar2 from '@/components/Navbar2' // Assuming Navbar2 is still needed
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import CircleProgress from "./CircleProgress"; // Assuming CircleProgress is a separate component
import {
  Check,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Attendance = ({
  w,
  attendanceData,
  setAttendanceData,
  semestersData,
  setSemestersData,
  selectedSem,
  setSelectedSem,
  attendanceGoal,
  setAttendanceGoal,
  subjectAttendanceData,
  setSubjectAttendanceData,
  selectedSubject,
  setSelectedSubject,
  isAttendanceMetaLoading,
  setIsAttendanceMetaLoading,
  isAttendanceDataLoading,
  setIsAttendanceDataLoading,
  activeTab,
  setActiveTab,
  dailyDate,
  setDailyDate,
  calendarOpen,
  setCalendarOpen,
  isTrackerOpen,
  setIsTrackerOpen,
  subjectCacheStatus,
  setSubjectCacheStatus
}) => {

  useEffect(() => {
    const fetchSemesters = async () => {
      if (semestersData) {
        if (semestersData.semesters.length > 0 && !selectedSem) {
          setSelectedSem(semestersData.latest_semester);
        }
        return;
      }

      setIsAttendanceMetaLoading(true);
      setIsAttendanceDataLoading(true);
      try {
        const meta = await w.get_attendance_meta();
        const header = meta.latest_header();
        const latestSem = meta.latest_semester();

        setSemestersData({
          semesters: meta.semesters,
          latest_header: header,
          latest_semester: latestSem,
        });

        try {
          const data = await w.get_attendance(header, latestSem);
          setAttendanceData((prev) => ({
            ...prev,
            [latestSem.registration_id]: data,
          }));
          setSelectedSem(latestSem);
        } catch (error) {
          console.log(error.message);
          console.log(error.status);
          if (error.message.includes("NO Attendance Found")) {
            // If latest semester has no attendance, try the previous one
            const previousSem = meta.semesters[1]; // Index 1 is the second most recent semester
            if (previousSem) {
              const data = await w.get_attendance(header, previousSem);
              setAttendanceData((prev) => ({
                ...prev,
                [previousSem.registration_id]: data,
              }));
              setSelectedSem(previousSem);
              console.log(previousSem);
            }
          } else {
            throw error;
          }
        }
      } catch (error) {
        console.error("Failed to fetch attendance:", error);
      } finally {
        setIsAttendanceMetaLoading(false);
        setIsAttendanceDataLoading(false);
      }
    };

    fetchSemesters();
  }, [w, setAttendanceData, semestersData, setSemestersData]);

  const handleSemesterChange = async (value) => {
    // Update selected semester immediately
    const semester = semestersData.semesters.find(
      (sem) => sem.registration_id === value,
    );
    setSelectedSem(semester);

    setIsAttendanceDataLoading(true);
    try {
      if (attendanceData[value]) {
        setIsAttendanceDataLoading(false);
        return;
      }

      const meta = await w.get_attendance_meta();
      const header = meta.latest_header();
      const data = await w.get_attendance(header, semester);
      setAttendanceData((prev) => ({
        ...prev,
        [value]: data,
      }));
    } catch (error) {
      if (error.message.includes("NO Attendance Found")) {
        // Show message that attendance is not available for this semester
        setAttendanceData((prev) => ({
          ...prev,
          [value]: { error: "Attendance not available for this semester" },
        }));
      } else {
        console.error("Failed to fetch attendance:", error);
      }
    } finally {
      setIsAttendanceDataLoading(false);
    }
  };

  const handleGoalChange = (e) => {
    const value = e.target.value === "" ? "" : parseInt(e.target.value);
    if (value === "" || (!isNaN(value) && value > 0 && value <= 100)) {
      setAttendanceGoal(value);
    }
  };

  const subjects =
    (selectedSem &&
      attendanceData[selectedSem.registration_id]?.studentattendancelist?.map(
        (item) => {
          const {
            subjectcode,
            Ltotalclass,
            Ltotalpres,
            Lpercentage,
            Ttotalclass,
            Ttotalpres,
            Tpercentage,
            Ptotalclass,
            Ptotalpres,
            Ppercentage,
            LTpercantage,
          } = item;

          const { attended, total } = {
            attended: (Ltotalpres || 0) + (Ttotalpres || 0) + (Ptotalpres || 0),
            total: (Ltotalclass || 0) + (Ttotalclass || 0) + (Ptotalclass || 0),
          };

          const currentPercentage = (attended / total) * 100;
          const classesNeeded = attendanceGoal
            ? Math.ceil(
                (attendanceGoal * total - 100 * attended) /
                  (100 - attendanceGoal),
              )
            : null;
          const classesCanMiss = attendanceGoal
            ? Math.floor(
                (100 * attended - attendanceGoal * total) / attendanceGoal,
              )
            : null;

          return {

            name: subjectcode,
            attendance: {
              attended,
              total,
            },
            combined: LTpercantage,
            lecture: Lpercentage,
            tutorial: Tpercentage,
            practical: Ppercentage,
            classesNeeded: classesNeeded > 0 ? classesNeeded : 0,
            classesCanMiss: classesCanMiss > 0 ? classesCanMiss : 0,
          };
        },
      )) ||
    [];

  const fetchSubjectAttendance = async (subject) => {
    try {
      const attendance = attendanceData[selectedSem.registration_id];
      const subjectData = attendance.studentattendancelist.find(
        (s) => s.subjectcode === subject.name,
      );

      if (!subjectData) return;

      const subjectcomponentids = [
        "Lsubjectcomponentid",
        "Psubjectcomponentid",
        "Tsubjectcomponentid",
      ]
        .filter((id) => subjectData[id])
        .map((id) => subjectData[id]);

      const data = await w.get_subject_daily_attendance(
        selectedSem,
        subjectData.subjectid,
        subjectData.individualsubjectcode,
        subjectcomponentids,
      );

      setSubjectAttendanceData((prev) => ({
        ...prev,
        [subject.name]: data.studentAttdsummarylist,
      }));
    } catch (error) {
      console.error("Failed to fetch subject attendance:", error);
    }
  };

  useEffect(() => {
    if (activeTab !== "daily") return;

    const loadAllSubjects = async () => {
      await Promise.all(
        subjects.map(async (subj) => {
          if (subjectAttendanceData[subj.name]) {
            setSubjectCacheStatus((p) => ({ ...p, [subj.name]: "cached" }));
            return;
          }
          setSubjectCacheStatus((p) => ({ ...p, [subj.name]: "fetching" }));
          await fetchSubjectAttendance(subj); // server round‑trip
          setSubjectCacheStatus((p) => ({ ...p, [subj.name]: "cached" }));
        }),
      );
    };
    loadAllSubjects();
  }, [activeTab, subjects, subjectAttendanceData, fetchSubjectAttendance, setSubjectCacheStatus]); // Added dependencies

  const getClassesFor = (subjectName, date) => {
    const all = subjectAttendanceData[subjectName];
    if (!all) return [];
    const key = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return all.filter((c) => c.datetime.startsWith(key));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans pb-8">
      {/* Main content container with elegant styling */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8">
          Attendance Overview
        </h1>

        {/* Semester and Goal Input Section */}
        <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-4 sticky top-0 z-20">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Select
              onValueChange={handleSemesterChange}
              value={selectedSem?.registration_id || ""}
            >
              <SelectTrigger className="w-full sm:w-auto bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors duration-200">
                <SelectValue
                  placeholder={
                    isAttendanceMetaLoading
                      ? "Loading semesters..."
                      : "Select semester"
                  }
                >
                  {selectedSem?.registration_code || "Select semester"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border border-gray-700 rounded-lg">
                {semestersData?.semesters?.map((sem) => (
                  <SelectItem
                    key={sem.registration_id}
                    value={sem.registration_id}
                    className="hover:bg-gray-700 focus:bg-gray-700"
                  >
                    {sem.registration_code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={attendanceGoal}
              onChange={handleGoalChange}
              min="0" // Changed min to 0 as percentage can be 0
              max="100"
              className="w-full sm:w-32 bg-gray-800 text-white border border-gray-700 rounded-lg placeholder-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors duration-200"
              placeholder="Goal %"
            />
          </div>
        </div>

        {isAttendanceMetaLoading || isAttendanceDataLoading ? (
          <div className="min-h-[400px] flex items-center justify-center bg-gray-900 rounded-xl shadow-lg border border-gray-800">
            <div className="flex items-center space-x-3 text-xl font-medium text-gray-300">
              <svg className="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Loading attendance data...</span>
            </div>
          </div>
        ) : (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6" // Added space-y for consistent spacing
          >
            <TabsList className="grid grid-cols-2 bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-2">
              <TabsTrigger
                value="overview"
                className="px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-300
                           data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md
                           data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-300 data-[state=inactive]:hover:bg-gray-700 data-[state=inactive]:hover:text-white"
              >
                Overview
              </TabsTrigger>

              <TabsTrigger
                value="daily"
                className="px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-300
                           data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md
                           data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-300 data-[state=inactive]:hover:bg-gray-700 data-[state=inactive]:hover:text-white"
              >
                Day‑to‑Day
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0"> {/* Removed default mt-4 from TabsContent */}
              {selectedSem &&
              attendanceData[selectedSem.registration_id]?.error ? (
                <div className="flex items-center justify-center py-8 text-red-400 text-center bg-gray-800 rounded-md p-4 mx-auto max-w-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {attendanceData[selectedSem.registration_id].error}
                </div>
              ) : (
                <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-6">
                  <ScrollArea className="h-[500px] w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                      {subjects.map((subject) => (
                        <AttendanceCard
                          key={subject.name}
                          subject={subject}
                          selectedSubject={selectedSubject}
                          setSelectedSubject={setSelectedSubject}
                          subjectAttendanceData={subjectAttendanceData}
                          fetchSubjectAttendance={fetchSubjectAttendance}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
            </TabsContent>

            <TabsContent value="daily" className="mt-0"> {/* Removed default mt-4 from TabsContent */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 min-h-[400px]">
                <div className="flex flex-col items-center">
                  {/* Date Selector Button */}
                  <button
                    onClick={() => setCalendarOpen((o) => !o)}
                    className="w-full max-w-[320px] flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3 mb-4 text-gray-200 border border-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                  >
                    <span className="font-medium">{dailyDate.toDateString()}</span>
                    {calendarOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {calendarOpen && (
                    <Calendar
                      mode="single"
                      selected={dailyDate}
                      onSelect={(d) => {
                        if (d) {
                          setDailyDate(d);
                          setCalendarOpen(false); // Close calendar on date select
                        }
                      }}
                      modifiers={{
                        hasActivity: (date) =>
                          subjects.some(
                            (s) => getClassesFor(s.name, date).length > 0,
                          ),
                      }}
                      modifiersStyles={{
                        hasActivity: {
                          boxShadow: "inset 0 -2px 0 0 rgba(96,165,250,0.8)", // Blue underline
                          borderRadius: "2px",
                        },
                      }}
                      className="rounded-lg border border-gray-700 bg-gray-800 text-white p-4 max-w-[320px] w-full mb-4"
                      classNames={{
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4 w-full",
                        caption: "flex justify-center pt-1 relative items-center text-sm text-gray-200",
                        caption_label: "text-sm font-medium",
                        nav: "space-x-1 flex items-center",
                        nav_button: "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 text-gray-300 hover:bg-gray-700 rounded-md",
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex",
                        head_cell: "text-gray-400 rounded-md flex-1 font-normal text-[0.8rem] max-[390px]:text-[0.7rem]",
                        row: "flex w-full mt-2",
                        cell: "flex-1 text-center text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day: "h-8 w-8 p-0 font-normal rounded-md aria-selected:opacity-100 mx-auto max-[390px]:h-6 max-[390px]:w-6 max-[390px]:text-xs text-gray-200 hover:bg-gray-700",
                        day_selected: "bg-blue-600 text-white hover:bg-blue-700", // Consistent blue for selected day
                        day_today: "bg-gray-700 text-white", // Today's date highlight
                        day_outside: "text-gray-500 opacity-50",
                        day_disabled: "text-gray-600 opacity-50 cursor-not-allowed",
                        day_range_middle: "aria-selected:bg-gray-700 aria-selected:text-white",
                        day_hidden: "invisible",
                      }}
                    />
                  )}
                </div>

                {subjects.length === 0 ? (
                  <p className="text-gray-400 text-center py-4">No subjects found for this semester.</p>
                ) : (
                  <div className="space-y-3 mt-4">
                    {subjects.flatMap((subj) => {
                      const lectures = getClassesFor(subj.name, dailyDate);
                      if (lectures.length === 0) return [];
                      return (
                        <div
                          key={subj.name}
                          className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-sm"
                        >
                          <h3 className="font-semibold text-lg text-gray-100 mb-2 border-b border-gray-700 pb-2">{subj.name}</h3>
                          <div className="space-y-1">
                            {lectures.map((cls, i) => (
                              <div
                                key={i}
                                className={`flex justify-between items-center text-sm py-1
                                  ${cls.present === "Present"
                                    ? "text-green-400"
                                    : "text-red-400"
                                  }`}
                              >
                                <span className="font-medium">
                                  {cls.classtype} • {cls.present}
                                </span>
                                <span className="text-gray-400 text-xs">
                                  {cls.datetime.split(" ").slice(1).join(" ").replace(/[()]/g, '')} {/* Clean up parentheses */}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* nothing on that day? */}
                {subjects.every(
                  (s) => getClassesFor(s.name, dailyDate).length === 0,
                ) && (
                  <p className="text-gray-400 mt-4 text-center">
                    No classes were scheduled on&nbsp;
                    {dailyDate.toLocaleDateString()}
                  </p>
                )}
              </div>

              {subjects.length > 0 &&
                Object.values(subjectCacheStatus).some((s) => s !== "cached") && (
                  <Sheet open={isTrackerOpen} onOpenChange={setIsTrackerOpen}>
                    <SheetTrigger asChild>
                      <button
                        className="fixed bottom-20 right-4 z-50
                             drop-shadow-lg bg-blue-700 rounded-full p-2
                             ring-2 ring-blue-500 hover:ring-blue-400
                             hover:scale-105 transition-transform cursor-pointer"
                      >
                        <CircleProgress
                          percentage={
                            (100 *
                              subjects.filter(
                                (s) => subjectCacheStatus[s.name] === "cached",
                              ).length) /
                            subjects.length
                          }
                          label={`${subjects.filter((s) => subjectCacheStatus[s.name] === "cached").length}/${subjects.length}`}
                          className="shadow-inner"
                        />
                      </button>
                    </SheetTrigger>

                    <SheetContent
                      side="bottom"
                      /* hide default close button & force white text */
                      className="h-[45vh] bg-gray-900 text-white border-0 overflow-hidden
                           [&_[data-radix-dialog-close]]:hidden"
                    >
                      <SheetHeader>
                        <SheetTitle className="text-lg text-white font-semibold border-b border-gray-700 pb-3">
                          Fetching daily attendance&nbsp;(
                          {
                            subjects.filter(
                              (s) => subjectCacheStatus[s.name] === "cached",
                            ).length
                          }
                          /{subjects.length})
                        </SheetTitle>
                      </SheetHeader>

                      <div className="mt-4 space-y-4 px-1 overflow-y-auto h-[calc(100%-3rem)]">
                        <Progress
                          value={
                            (100 *
                              subjects.filter(
                                (s) => subjectCacheStatus[s.name] === "cached",
                              ).length) /
                            subjects.length
                          }
                          className="h-2 bg-gray-700 [&>div]:bg-blue-500" // Styled progress bar
                        />

                        <div className="divide-y divide-gray-700 mt-4 overflow-y-auto h-[calc(100%-5rem)] pr-1">
                          {subjects.map((s) => {
                            const st = subjectCacheStatus[s.name] || "idle";
                            return (
                              <div
                                key={s.name}
                                className="py-3 flex items-center justify-between"
                              >
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate text-gray-200">
                                    {s.name}
                                  </p>
                                </div>
                                {st === "cached" && (
                                  <Check className="text-green-400 w-5 h-5" />
                                )}
                                {st === "fetching" && (
                                  <Loader2 className="animate-spin text-blue-400 w-5 h-5" />
                                )}
                                {st === "idle" && (
                                  <AlertCircle className="text-gray-500 w-5 h-5" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                )}
            </TabsContent>
          </Tabs>
        )}
      </div>
      <Navbar2 />
    </div>
  );
};

export default Attendance;
