

import React, { useState } from "react";
import CircleProgress from "./CircleProgress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar2 from "./Navbar2";

const AttendanceCard = ({
  subject,
  selectedSubject,
  setSelectedSubject,
  subjectAttendanceData,
  fetchSubjectAttendance
}) => {
  const { name, attendance, combined, lecture, tutorial, practical, classesNeeded, classesCanMiss } = subject;
  console.log(name, attendance, combined, lecture, tutorial, practical)
  const attendancePercentage = (attendance.total > 0) ? combined.toFixed(0) : "100";
  const displayName = name.replace(/\s*\([^)]*\)\s*$/, '');

  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleClick = async () => {
    setSelectedSubject(subject);
    if (!subjectAttendanceData[subject.name]) {
      setIsLoading(true);
      await fetchSubjectAttendance(subject);
      setIsLoading(false);
    }
  };

  // Updated getDayStatus function to return array of statuses
  const getDayStatus = (date) => {
    if (!subjectAttendanceData[subject.name]) return null;

    const dateStr = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const attendances = subjectAttendanceData[subject.name].filter(
      a => a.datetime.startsWith(dateStr)
    );

    if (attendances.length === 0) return null;
    return attendances.map(a => a.present === "Present");
  };

  // Add this function to format the date string for display
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  // Modify getClassesForDate to handle string date
  const getClassesForDate = (dateStr) => {
    if (!subjectAttendanceData[subject.name] || !dateStr) return [];

    const date = new Date(dateStr);
    const formattedDateStr = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    return subjectAttendanceData[subject.name].filter(
      a => a.datetime.startsWith(formattedDateStr)
    );
  };

  // Add new function to process data for the chart
  const processAttendanceData = () => {
    if (!subjectAttendanceData[subject.name]) return [];

    const data = subjectAttendanceData[subject.name];

    // Sort all entries by date first
    const sortedData = [...data].sort((a, b) => {
      const [aDay, aMonth, aYear] = a.datetime.split(' ')[0].split('/');
      const [bDay, bMonth, bYear] = b.datetime.split(' ')[0].split('/');
      return new Date(aYear, aMonth - 1, aDay) - new Date(bYear, bMonth - 1, bDay);
    });

    let cumulativePresent = 0;
    let cumulativeTotal = 0;
    const attendanceByDate = {};

    // Calculate cumulative attendance for each date
    sortedData.forEach(entry => {
      const [date] = entry.datetime.split(' ');
      cumulativeTotal++;
      if (entry.present === "Present") {
        cumulativePresent++;
      }

      attendanceByDate[date] = {
        date,
        percentage: (cumulativePresent / cumulativeTotal) * 100
      };
    });

    return Object.values(attendanceByDate);
  };



  
//   return (

    
//     <>
//       <div
//         className="flex justify-between items-center py-1 border-b border-gray-700 cursor-pointer hover:bg-gray-800/50"
//         onClick={handleClick}
//       >
//         <div className="flex-1 mr-4">
//           <h2 className="text-sm font-semibold max-[390px]:text-xs ">{displayName}</h2>
//           {lecture !== '' && <p className="text-sm lg:text-base max-[390px]:text-xs">Lecture: {lecture}%</p>}
//           {tutorial !== '' && <p className="text-sm lg:text-base max-[390px]:text-xs">Tutorial: {tutorial}%</p>}
//           {practical !== '' && <p className="text-sm lg:text-base max-[390px]:text-xs">Practical: {practical}%</p>}
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="text-center">
//             <div className="text-sm">{attendance.attended}</div>
//             <div className="h-px w-full bg-gray-700"></div>
//             <div className="text-sm">{attendance.total}</div>
//           </div>
//           <div className="flex flex-col items-center">
//             <CircleProgress key={Date.now()} percentage={attendancePercentage} />
//             {classesNeeded > 0 ? (
//               <div className="text-xs mt-1 text-gray-400">
//                 Attend {classesNeeded}
//               </div>
//             ) : classesCanMiss > 0 && (
//               <div className="text-xs mt-1 text-gray-400">
//                 Can miss {classesCanMiss}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <Sheet open={selectedSubject?.name === subject.name} onOpenChange={() => {
//         setSelectedSubject(null);
//         setSelectedDate(null);
//       }}>
//         <SheetContent side="bottom" className="h-[70vh] bg-[#191c20] text-white border-0 overflow-hidden">
//           <SheetHeader>
//             {/* <SheetTitle className="text-white">{}</SheetTitle> */}
//           </SheetHeader>
//           <div className="h-full overflow-y-auto snap-y snap-mandatory">
//             {/* Calendar Section */}
//             <div className="min-h-full flex flex-col items-center py-4 snap-start">
//               <div className="w-full max-w-[320px] flex flex-col">
//                 <Calendar
//                   mode="single"
//                   modifiers={{
//                     presentSingle: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 1 && statuses[0] === true;
//                     },
//                     absentSingle: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 1 && statuses[0] === false;
//                     },
//                     presentDouble: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 2 && statuses.every(s => s === true);
//                     },
//                     absentDouble: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 2 && statuses.every(s => s === false);
//                     },
//                     mixedDouble: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 2 && statuses[0] !== statuses[1];
//                     },
//                     presentTriple: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 3 && statuses.every(s => s === true);
//                     },
//                     absentTriple: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 3 && statuses.every(s => s === false);
//                     },
//                     mixedTripleAllPresent: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 3 && statuses.filter(s => s === true).length === 2;
//                     },
//                     mixedTripleAllAbsent: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 3 && statuses.filter(s => s === false).length === 2;
//                     },
//                     mixedTripleEqual: (date) => {
//                       const statuses = getDayStatus(date);
//                       return statuses?.length === 3 &&
//                              statuses.filter(s => s === true).length ===
//                              statuses.filter(s => s === false).length;
//                     },
//                     selected: (date) => date === selectedDate,
//                   }}
//                   modifiersStyles={{
//                     presentSingle: {
//                       backgroundColor: 'rgba(22, 163, 72, 0.4)',
//                       borderRadius: '50%'
//                     },
//                     absentSingle: {
//                       backgroundColor: 'rgba(220, 38, 38, 0.4)',
//                       borderRadius: '50%'
//                     },
//                     presentDouble: {
//                       backgroundColor: 'rgba(22, 163, 72, 0.4)',
//                       borderRadius: '50%'
//                     },
//                     absentDouble: {
//                       backgroundColor: 'rgba(220, 38, 38, 0.4)',
//                       borderRadius: '50%'
//                     },
//                     mixedDouble: {
//                       background: 'linear-gradient(90deg, rgba(22, 163, 72, 0.4) 50%, rgba(220, 38, 38, 0.4) 50%)',
//                       borderRadius: '50%'
//                     },
//                     presentTriple: {
//                       backgroundColor: 'rgba(22, 163, 72, 0.4)',
//                       borderRadius: '50%'
//                     },
//                     absentTriple: {
//                       backgroundColor: 'rgba(220, 38, 38, 0.4)',
//                       borderRadius: '50%'
//                     },
//                     mixedTripleAllPresent: {
//                       background: 'conic-gradient(rgba(22, 163, 72, 0.4) 0deg 240deg, rgba(220, 38, 38, 0.4) 240deg 360deg)',
//                       borderRadius: '50%'
//                     },
//                     mixedTripleAllAbsent: {
//                       background: 'conic-gradient(rgba(220, 38, 38, 0.4) 0deg 240deg, rgba(22, 163, 72, 0.4) 240deg 360deg)',
//                       borderRadius: '50%'
//                     },
//                     mixedTripleEqual: {
//                       background: 'conic-gradient(rgba(22, 163, 72, 0.4) 0deg 120deg, rgba(220, 38, 38, 0.4) 120deg 240deg, rgba(22, 163, 72, 0.4) 240deg 360deg)',
//                       borderRadius: '50%'
//                     },
//                   }}
//                   selected={selectedDate}
//                   onSelect={(date) => setSelectedDate(date)}
//                   className={`pb-2 text-white ${isLoading ? 'animate-pulse' : ''} w-full flex-shrink-0 max-w-full`}
//                   classNames={{
//                     months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
//                     month: "space-y-4 w-full",
//                     caption: "flex justify-center pt-1 relative items-center text-sm",
//                     caption_label: "text-sm font-medium",
//                     nav: "space-x-1 flex items-center",
//                     nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
//                     nav_button_previous: "absolute left-1",
//                     nav_button_next: "absolute right-1",
//                     table: "w-full border-collapse space-y-1",
//                     head_row: "flex",
//                     head_cell: "text-gray-500 rounded-md flex-1 font-normal text-[0.8rem] max-[390px]:text-[0.7rem]",
//                     row: "flex w-full mt-2",
//                     cell: "flex-1 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
//                     day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 mx-auto max-[390px]:h-6 max-[390px]:w-6 max-[390px]:text-xs",
//                     day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
//                     day_today: "bg-accent text-accent-foreground",
//                     day_outside: "text-muted-foreground opacity-50",
//                     day_disabled: "text-muted-foreground opacity-50",
//                     day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
//                     day_hidden: "invisible",
//                   }}
//                 />

//                 {selectedDate && (
//                   <div className="mt-4 space-y-2 w-full pb-4">
//                     {getClassesForDate(selectedDate).map((classData, index) => (
//                       <div
//                         key={index}
//                         className={`p-2 rounded ${
//                           classData.present === "Present"
//                             ? "bg-green-600/40"
//                             : "bg-red-600/40"
//                         }`}
//                       >
//                         <p className="text-sm">
//                           {classData.attendanceby}
//                         </p>

//                           <p className="text-xs text-gray-400">
//                         {classData.classtype} - {classData.present}
//                           </p>
//                         <p className="text-xs text-gray-400">
//                           {classData.datetime}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Chart Section */}
//             <div className="min-h-full flex flex-col items-center justify-center py-4 pb-10 snap-start">
//               <div className="w-full h-[300px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart
//                     data={processAttendanceData()}
//                     margin={{
//                       top: 10,
//                       right: 10,
//                       left: -20,
//                       bottom: 0,
//                     }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//                     <XAxis
//                       dataKey="date"
//                       stroke="#fff"
//                       tick={{ fill: '#fff', fontSize: '0.75rem', dy: 10 }}
//                       tickFormatter={(value) => {
//                         const [day, month] = value.split('/');
//                         return `${day}/${month}`;
//                       }}
//                     />
//                     <YAxis
//                       stroke="#fff"
//                       tick={{ fill: '#fff', fontSize: '0.75rem' }}
//                       domain={[0, 100]}
//                       tickFormatter={(value) => `${value}%`}
//                       width={65}
//                     />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: '#191c20',
//                         border: '1px solid #444',
//                         color: '#fff'
//                       }}
//                       formatter={(value) => [`${value.toFixed(1)}%`]}
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="percentage"
//                       stroke="#60A5FA"
//                       strokeWidth={2}
//                       dot={{ fill: '#60A5FA', r: 4 }}
//                       activeDot={{ r: 6 }}
//                       name="Present"
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         </SheetContent>
//       </Sheet>
//     </>
//   );
// };

// export default AttendanceCard;







return (

  <div className="text-white font-sans">
  <>
    <div
      className="flex justify-between items-center py-4 px-4 sm:px-6 bg-[#1f1f2a] border border-gray-700 rounded-xl mb-4 shadow-md hover:shadow-lg transition duration-200 cursor-pointer"
      onClick={handleClick}
    >
      {/* <div className="flex-1 mr-4">
        <h2 className="text-base sm:text-lg font-semibold text-white truncate mb-1">
          {displayName}
        </h2>
        {lecture !== '' && (
          <p className="text-sm text-gray-300">Lecture: {lecture}%</p>
        )}
        {tutorial !== '' && (
          <p className="text-sm text-gray-300">Tutorial: {tutorial}%</p>
        )}
        {practical !== '' && (
          <p className="text-sm text-gray-300">Practical: {practical}%</p>
        )}
      </div> */}
       



       <div className="flex-1 mr-4">
  <h2 className="text-lg font-semibold text-white tracking-tight mb-1">
    {displayName}
  </h2>

  <div className="flex flex-wrap gap-3 text-sm text-white">
    {lecture !== '' && (
      <div className="flex items-center gap-2">
        <span className="text-gray-400">Lecture</span>
        <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-medium">
          {lecture}%
        </span>
      </div>
    )}

    {tutorial !== '' && (
      <div className="flex items-center gap-2">
        <span className="text-gray-400">Tutorial</span>
        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text--400 font-medium">
          {tutorial}%
        </span>
      </div>
    )}

    {practical !== '' && (
      <div className="flex items-center gap-2">
        <span className="text-gray-400">Practical</span>
        <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 font-medium">
          {practical}%
        </span>
      </div>
    )}
  </div>
</div>





      <div className="flex items-center gap-4">
        <div className="text-center text-white">
          <div className="text-sm font-semibold">{attendance.attended}</div>
          <div className="h-px w-full bg-gray-600 my-1"></div>
          <div className="text-sm font-semibold">{attendance.total}</div>
        </div>

        <div className="flex flex-col items-center">
          <CircleProgress key={Date.now()} percentage={attendancePercentage} />
          {classesNeeded > 0 ? (
            <div className="text-xs mt-1 text-emerald-400 font-medium">
              Attend {classesNeeded}
            </div>
          ) : classesCanMiss > 0 ? (
            <div className="text-xs mt-1 text-yellow-400 font-medium">
              Can miss {classesCanMiss}
            </div>
          ) : null}
        </div>
      </div>
    </div>

    {/* Sheet for Details */}
    <Sheet open={selectedSubject?.name === subject.name} onOpenChange={() => {
      setSelectedSubject(null);
      setSelectedDate(null);
    }}>
      <SheetContent side="bottom" className="h-[75vh] bg-[#191c20] text-white border-0 rounded-t-2xl overflow-hidden shadow-xl">
        <SheetHeader />

        <div className="h-full overflow-y-auto snap-y snap-mandatory">
          {/* Calendar Section */}
          <div className="min-h-full flex flex-col items-center py-4 snap-start">
            <div className="w-full max-w-md px-4">
              <Calendar
                mode="single"
                modifiers={{
                  presentSingle: (date) => getDayStatus(date)?.length === 1 && getDayStatus(date)[0] === true,
                  absentSingle: (date) => getDayStatus(date)?.length === 1 && getDayStatus(date)[0] === false,
                  presentDouble: (date) => getDayStatus(date)?.length === 2 && getDayStatus(date).every(s => s === true),
                  absentDouble: (date) => getDayStatus(date)?.length === 2 && getDayStatus(date).every(s => s === false),
                  mixedDouble: (date) => getDayStatus(date)?.length === 2 && getDayStatus(date)[0] !== getDayStatus(date)[1],
                  presentTriple: (date) => getDayStatus(date)?.length === 3 && getDayStatus(date).every(s => s === true),
                  absentTriple: (date) => getDayStatus(date)?.length === 3 && getDayStatus(date).every(s => s === false),
                  mixedTripleAllPresent: (date) => getDayStatus(date)?.length === 3 && getDayStatus(date).filter(s => s === true).length === 2,
                  mixedTripleAllAbsent: (date) => getDayStatus(date)?.length === 3 && getDayStatus(date).filter(s => s === false).length === 2,
                  mixedTripleEqual: (date) => getDayStatus(date)?.length === 3 && getDayStatus(date).filter(s => s === true).length === getDayStatus(date).filter(s => s === false).length,
                  selected: (date) => date === selectedDate,
                }}
                modifiersStyles={{
                  presentSingle: { backgroundColor: 'rgba(34,197,94,0.4)', borderRadius: '50%' },
                  absentSingle: { backgroundColor: 'rgba(239,68,68,0.4)', borderRadius: '50%' },
                  presentDouble: { backgroundColor: 'rgba(34,197,94,0.4)', borderRadius: '50%' },
                  absentDouble: { backgroundColor: 'rgba(239,68,68,0.4)', borderRadius: '50%' },
                  mixedDouble: { background: 'linear-gradient(90deg, rgba(34,197,94,0.4) 50%, rgba(239,68,68,0.4) 50%)', borderRadius: '50%' },
                  presentTriple: { backgroundColor: 'rgba(34,197,94,0.4)', borderRadius: '50%' },
                  absentTriple: { backgroundColor: 'rgba(239,68,68,0.4)', borderRadius: '50%' },
                  mixedTripleAllPresent: { background: 'conic-gradient(rgba(34,197,94,0.4) 0deg 240deg, rgba(239,68,68,0.4) 240deg 360deg)', borderRadius: '50%' },
                  mixedTripleAllAbsent: { background: 'conic-gradient(rgba(239,68,68,0.4) 0deg 240deg, rgba(34,197,94,0.4) 240deg 360deg)', borderRadius: '50%' },
                  mixedTripleEqual: { background: 'conic-gradient(rgba(34,197,94,0.4) 0deg 120deg, rgba(239,68,68,0.4) 120deg 240deg, rgba(34,197,94,0.4) 240deg 360deg)', borderRadius: '50%' },
                }}
                selected={selectedDate}
                onSelect={setSelectedDate}
                className={`pb-2 text-white ${isLoading ? 'animate-pulse' : ''}`}
                classNames={{
                  months: "flex flex-col sm:flex-row gap-4",
                  month: "space-y-4 w-full",
                  caption: "flex justify-center pt-1 items-center text-sm",
                  caption_label: "text-sm font-medium",
                  nav: "flex items-center space-x-1",
                  nav_button: "h-7 w-7 p-0 opacity-50 hover:opacity-100",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-gray-400 font-medium text-xs",
                  row: "flex w-full mt-2",
                  cell: "flex-1 text-center text-sm p-0",
                  day: "h-8 w-8 mx-auto rounded-full",
                }}
              />

              {selectedDate && (
                <div className="mt-4 space-y-2">
                  {getClassesForDate(selectedDate).map((classData, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg ${
                        classData.present === "Present" ? "bg-green-600/30" : "bg-red-600/30"
                      }`}
                    >
                      <p className="text-sm font-medium">{classData.attendanceby}</p>
                      <p className="text-xs text-gray-300">{classData.classtype} - {classData.present}</p>
                      <p className="text-xs text-gray-300">{classData.datetime}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chart Section */}
          <div className="min-h-full flex flex-col items-center justify-center py-6 snap-start">
            <div className="w-full h-[280px] px-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={processAttendanceData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis
                    dataKey="date"
                    stroke="#fff"
                    tick={{ fill: '#fff', fontSize: '0.75rem', dy: 10 }}
                    tickFormatter={(value) => value.split('/').slice(0, 2).join('/')}
                  />
                  <YAxis
                    stroke="#fff"
                    tick={{ fill: '#fff', fontSize: '0.75rem' }}
                    domain={[0, 100]}
                    tickFormatter={(v) => `${v}%`}
                    width={50}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#191c20', border: '1px solid #444', color: '#fff' }}
                    formatter={(v) => [`${v.toFixed(1)}%`]}
                  />
                  <Line
                    type="monotone"
                    dataKey="percentage"
                    stroke="#60A5FA"
                    strokeWidth={2}
                    dot={{ fill: '#60A5FA', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </>
  <Navbar2/>
  </div>
);
};

export default AttendanceCard;
