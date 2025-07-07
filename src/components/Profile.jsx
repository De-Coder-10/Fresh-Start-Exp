// import React, { useState, useEffect } from "react";
// import Navbar2 from "./Navbar2"; // Assuming Navbar2 is a separate component and should remain.

// export default function Profile({ w, profileData, setProfileData }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       // Return early if data is already cached
//       if (profileData) {
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       try {
//         const data = await w.get_personal_info();
//         setProfileData(data);
//       } catch (error) {
//         console.error("Failed to fetch profile data:", error);
//         // Optionally, set an error state to display to the user
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, [w, profileData, setProfileData]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
//         <div className="flex items-center space-x-3 text-xl font-medium text-gray-300">
//           <svg className="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//           </svg>
//           <span>Loading profile data...</span>
//         </div>
//       </div>
//     );
//   }

//   const info = profileData?.generalinformation || {};
//   const qualifications = profileData?.qualification || [];

//   // Helper component for consistent info display
//   // Modified to use a grid for perfect alignment of label and value within each row.
//   function InfoRow({ label, value }) {
//     return (
//       <div className="grid grid-cols-2 gap-x-4 py-2 border-b border-gray-700 last:border-b-0 items-center">
//         <span className="text-gray-400 font-normal text-sm sm:text-base text-left">{label}:</span>
//         <span className="font-medium text-gray-200 text-sm sm:text-base text-right">{value || "N/A"}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-950 text-white font-sans pb-8">
//       {/* Main content container with elegant styling */}
//       <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8">
//           Student Profile
//         </h1>

//         {/* Personal Information */}
//         <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
//           <h2 className="text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 text-blue-400">Personal Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
//             <InfoRow label="Name" value={info.studentname} />
//             <InfoRow label="Registration No" value={info.registrationno} />
//             <InfoRow label="Date of Birth" value={info.dateofbirth} />
//             <InfoRow label="Gender" value={info.gender} />
//             <InfoRow label="Blood Group" value={info.bloodgroup} />
//             <InfoRow label="Nationality" value={info.nationality} />
//             <InfoRow label="Category" value={info.category} />
//           </div>
//         </div>

//         {/* Academic Information */}
//         <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
//           <h2 className="text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 text-purple-400">Academic Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
//             <InfoRow label="Program" value={info.programcode} />
//             <InfoRow label="Branch" value={info.branch} />
//             <InfoRow label="Section" value={info.sectioncode} />
//             <InfoRow label="Batch" value={info.batch} />
//             <InfoRow label="Semester" value={info.semester} />
//             <InfoRow label="Institute" value={info.institutecode} />
//             <InfoRow label="Academic Year" value={info.academicyear} />
//             <InfoRow label="Admission Year" value={info.admissionyear} />
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
//           <h2 className="text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 text-green-400">Contact Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
//             <InfoRow label="Student Email (College)" value={info.studentemailid} />
//             <InfoRow label="Student Email (Personal)" value={info.studentpersonalemailid} />
//             <InfoRow label="Mobile" value={info.studentcellno} />
//             <InfoRow label="Telephone" value={info.studenttelephoneno || "N/A"} />
//           </div>
//         </div>

//         {/* Family Information */}
//         <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
//           <h2 className="text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 text-yellow-400">Family Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
//             <InfoRow label="Father's Name" value={info.fathersname} />
//             <InfoRow label="Mother's Name" value={info.mothername} />
//             <InfoRow label="Parent's Email" value={info.parentemailid} />
//             <InfoRow label="Parent's Mobile" value={info.parentcellno} />
//             <InfoRow label="Parent's Telephone" value={info.parenttelephoneno || "N/A"} />
//           </div>
//         </div>

//         {/* Address Information */}
//         <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
//           <h2 className="text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 text-red-400">Current Address</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
//             <InfoRow label="Address" value={[info.caddress1, info.caddress3].filter(Boolean).join(", ")} />
//             <InfoRow label="City" value={info.ccityname} />
//             <InfoRow label="District" value={info.cdistrict} />
//             <InfoRow label="State" value={info.cstatename} />
//             <InfoRow label="Postal Code" value={info.cpostalcode} />
//           </div>
//         </div>

//         {/* Permanent Address */}
//         <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
//           <h2 className="text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 text-orange-400">Permanent Address</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
//             <InfoRow label="Address" value={[info.paddress1, info.paddress2, info.paddress3].filter(Boolean).join(", ")} />
//             <InfoRow label="City" value={info.pcityname} />
//             <InfoRow label="District" value={info.pdistrict} />
//             <InfoRow label="State" value={info.pstatename} />
//             <InfoRow label="Postal Code" value={info.ppostalcode} />
//           </div>
//         </div>

//         {/* Educational Qualifications */}
//         <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
//           <h2 className="text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 text-cyan-400">Educational Qualifications</h2>
//           {qualifications.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
//               {qualifications.map((qual, index) => (
//                 <React.Fragment key={index}> {/* Using React.Fragment for multiple InfoRows per qualification */}
//                   <InfoRow label="Qualification" value={qual.qualificationcode} />
//                   <InfoRow label="Board" value={qual.boardname} />
//                   <InfoRow label="Year of Passing" value={qual.yearofpassing} />
//                   <InfoRow label="Marks Obtained" value={`${qual.obtainedmarks}/${qual.fullmarks}`} />
//                   <InfoRow label="Percentage" value={`${qual.percentagemarks}%`} />
//                   <InfoRow label="Division" value={qual.division} />
//                   {qual.grade && <InfoRow label="Grade" value={qual.grade} />}
//                   {index < qualifications.length - 1 && (
//                     <div className="col-span-1 md:col-span-2 border-t border-gray-700 my-4 pt-4"></div> // Separator for multiple qualifications
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-400 text-center py-4">No educational qualifications found.</p>
//           )}
//         </div>
//       </div>
//       {/* Navbar2 is typically outside the main content area */}
//       <Navbar2 />
//     </div>
//   );
// }







import React, { useState, useEffect, useRef } from "react"; // Import useRef
import Navbar2 from "./Navbar2"; // Assuming Navbar2 is a separate component and should remain.

export default function Profile({ w, profileData, setProfileData }) {
  const [loading, setLoading] = useState(true);
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("personal"); // Default to Personal Information

  // Refs for tab buttons and the container to measure their positions
  const tabsContainerRef = useRef(null);
  const tabRefs = useRef({});

  // State for the sliding indicator's style
  const [indicatorStyle, setIndicatorStyle] = useState({ left: '2px', right: '2px', width: '2px' });

  useEffect(() => {
    const fetchProfileData = async () => {
      // Return early if data is already cached
      if (profileData) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const data = await w.get_personal_info();
        setProfileData(data);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
        // Optionally, set an error state to display to the user
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [w, profileData, setProfileData]);

  // Effect to calculate and update the sliding indicator's position and width
  useEffect(() => {
    if (activeTab && tabsContainerRef.current && tabRefs.current[activeTab]) {
      const activeTabElement = tabRefs.current[activeTab];
      const containerElement = tabsContainerRef.current;

      // Calculate position relative to the tabs container
      const left = activeTabElement.offsetLeft - containerElement.offsetLeft;
      const width = activeTabElement.offsetWidth;

      setIndicatorStyle({
        left: `${left}px`,
        width: `${width}px`,
      });
    }
  }, [activeTab, loading, tabsContainerRef.current]); // Recalculate when activeTab changes or after loading

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <div className="flex items-center space-x-3 text-xl font-medium text-gray-300">
          <svg className="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading profile data...</span>
        </div>
      </div>
    );
  }

  const info = profileData?.generalinformation || {};
  const qualifications = profileData?.qualification || [];

  // Helper component for consistent info display
  function InfoRow({ label, value }) {
    return (
      <div className="grid grid-cols-2 gap-x-4 py-2 border-b border-gray-700 last:border-b-0 items-center">
        <span className="text-gray-400 font-normal text-sm sm:text-base text-left">{label}:</span>
        <span className="font-medium text-gray-200 text-sm sm:text-base text-right">{value || "N/A"}</span>
      </div>
    );
  }

  // Define tab data for easy mapping
  const tabs = [
    { id: "personal", label: "Personal Info", color: "text-blue-400" },
    { id: "academic", label: "Academic Info", color: "text-purple-400" },
    { id: "contact", label: "Contact Info", color: "text-green-400" },
    { id: "family", label: "Family Info", color: "text-yellow-400" },
    { id: "currentAddress", label: "Current Address", color: "text-red-400" },
    { id: "permanentAddress", label: "Permanent Address", color: "text-orange-400" },
    { id: "qualifications", label: "Qualifications", color: "text-cyan-400" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans pb-8">
      {/* Main content container with elegant styling */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8">
          Student Profile
        </h1>

        {/* Tab Headers with Sliding Indicator */}
        <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-2 overflow-x-auto relative">
          <div ref={tabsContainerRef} className="flex flex-nowrap justify-between sm:justify-center gap-2 relative z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                ref={el => tabRefs.current[tab.id] = el} // Assign ref to each button
                className={`
                  flex-shrink-0 px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-colors duration-300
                  ${activeTab === tab.id
                    ? "text-white font-semibold" // Active tab text style
                    : "text-gray-300 hover:text-white" // Inactive tab text style
                  }
                  focus:outline-none ()focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Sliding Indicator */}
          <div
            className="absolute bottom-0 h-1 bg-blue-600 rounded-full transition-all duration-400 ease-in-out z-0 "
            style={indicatorStyle}
          ></div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 min-h-[400px]">
          {activeTab === "personal" && (
            <div>
              <h2 className={`text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 ${tabs.find(t => t.id === "personal").color}`}>Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <InfoRow label="Name" value={info.studentname} />
                <InfoRow label="Registration No" value={info.registrationno} />
                <InfoRow label="Date of Birth" value={info.dateofbirth} />
                <InfoRow label="Gender" value={info.gender} />
                <InfoRow label="Blood Group" value={info.bloodgroup} />
                <InfoRow label="Nationality" value={info.nationality} />
                <InfoRow label="Category" value={info.category} />
              </div>
            </div>
          )}

          {activeTab === "academic" && (
            <div>
              <h2 className={`text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 ${tabs.find(t => t.id === "academic").color}`}>Academic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <InfoRow label="Program" value={info.programcode} />
                <InfoRow label="Branch" value={info.branch} />
                <InfoRow label="Section" value={info.sectioncode} />
                <InfoRow label="Batch" value={info.batch} />
                <InfoRow label="Semester" value={info.semester} />
                <InfoRow label="Institute" value={info.institutecode} />
                <InfoRow label="Academic Year" value={info.academicyear} />
                <InfoRow label="Admission Year" value={info.admissionyear} />
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div>
              <h2 className={`text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 ${tabs.find(t => t.id === "contact").color}`}>Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <InfoRow label="Student Email (College)" value={info.studentemailid} />
                <InfoRow label="Student Email (Personal)" value={info.studentpersonalemailid} />
                <InfoRow label="Mobile" value={info.studentcellno} />
                <InfoRow label="Telephone" value={info.studenttelephoneno || "N/A"} />
              </div>
            </div>
          )}

          {activeTab === "family" && (
            <div>
              <h2 className={`text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 ${tabs.find(t => t.id === "family").color}`}>Family Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <InfoRow label="Father's Name" value={info.fathersname} />
                <InfoRow label="Mother's Name" value={info.mothername} />
                <InfoRow label="Parent's Email" value={info.parentemailid} />
                <InfoRow label="Parent's Mobile" value={info.parentcellno} />
                <InfoRow label="Parent's Telephone" value={info.parenttelephoneno || "N/A"} />
              </div>
            </div>
          )}

          {activeTab === "currentAddress" && (
            <div>
              <h2 className={`text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 ${tabs.find(t => t.id === "currentAddress").color}`}>Current Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <InfoRow label="Address" value={[info.caddress1, info.caddress3].filter(Boolean).join(", ")} />
                <InfoRow label="City" value={info.ccityname} />
                <InfoRow label="District" value={info.cdistrict} />
                <InfoRow label="State" value={info.cstatename} />
                <InfoRow label="Postal Code" value={info.cpostalcode} />
              </div>
            </div>
          )}

          {activeTab === "permanentAddress" && (
            <div>
              <h2 className={`text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 ${tabs.find(t => t.id === "permanentAddress").color}`}>Permanent Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <InfoRow label="Address" value={[info.paddress1, info.paddress2, info.paddress3].filter(Boolean).join(", ")} />
                <InfoRow label="City" value={info.pcityname} />
                <InfoRow label="District" value={info.pdistrict} />
                <InfoRow label="State" value={info.pstatename} />
                <InfoRow label="Postal Code" value={info.ppostalcode} />
              </div>
            </div>
          )}

          {activeTab === "qualifications" && (
            <div>
              <h2 className={`text-2xl font-semibold mb-5 pb-3 border-b border-gray-700 ${tabs.find(t => t.id === "qualifications").color}`}>Educational Qualifications</h2>
              {qualifications.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {qualifications.map((qual, index) => (
                    <React.Fragment key={index}> {/* Using React.Fragment for multiple InfoRows per qualification */}
                      <InfoRow label="Qualification" value={qual.qualificationcode} />
                      <InfoRow label="Board" value={qual.boardname} />
                      <InfoRow label="Year of Passing" value={qual.yearofpassing} />
                      <InfoRow label="Marks Obtained" value={`${qual.obtainedmarks}/${qual.fullmarks}`} />
                      <InfoRow label="Percentage" value={`${qual.percentagemarks}%`} />
                      <InfoRow label="Division" value={qual.division} />
                      {qual.grade && <InfoRow label="Grade" value={qual.grade} />}
                      {index < qualifications.length - 1 && (
                        <div className="col-span-1 md:col-span-2 border-t border-gray-700 my-4 pt-4"></div> // Separator for multiple qualifications
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-4">No educational qualifications found.</p>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Navbar2 is typically outside the main content area */}
      <Navbar2 />
    </div>
  );
}
