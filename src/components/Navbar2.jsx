// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';

// const BASE_NAME = 'jportal';

// function Navbar2() {
//   const [hovering, setHovering] = useState(false);

//   const navItems = [
//     { name: 'Attendance', path: '/attendance', icon: `/${BASE_NAME}/icons/attendance.svg` },
//     { name: 'Grades', path: '/Grades', icon: `/${BASE_NAME}/icons/grades.svg` },
//     { name: 'Exams', path: '/Exams', icon: `/${BASE_NAME}/icons/exams.svg` },
//     { name: 'Subjects', path: '/Subjects', icon: `/${BASE_NAME}/icons/subjects1.svg` },
//     { name: 'Profile', path: '/Profile', icon: `/${BASE_NAME}/icons/profile.svg` },
//   ];

//   return (
//     <div
//       className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-50
//         transition-all duration-300 ease-in-out
//         ${hovering ? 'w-40' : 'w-10'} h-[70%]`}
//       onMouseEnter={() => setHovering(true)}
//       onMouseLeave={() => setHovering(false)}
//     >
//       <div className="relative h-full bg-[#1e1e2e] rounded-l-2xl shadow-lg flex flex-col justify-center items-center overflow-hidden">
//         {!hovering && (
//           <div className="rotate-90 text-white text-[10px] opacity-60 tracking-wide">
//             ◀ MENU
//           </div>
//         )}

//         <div className={`transition-opacity duration-300 w-full ${hovering ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//           <div className="flex flex-col items-center gap-4 px-2 py-4">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center w-full px-2 py-2 gap-2 rounded-lg transition-all
//                   ${isActive ? 'bg-[#3b82f6]/20 text-[#3b82f6]' : 'text-white/80 hover:bg-white/10'}`
//                 }
//               >
//                 <img src={item.icon} alt={item.name} className="w-5 h-5" />
//                 <span className="text-xs">{item.name}</span>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar2;


import { NavLink } from 'react-router-dom';

const BASE_NAME = 'jportal';

function Navbar2() {
  const navItems = [
    { name: 'Attendance', path: '/attendance', icon: `/${BASE_NAME}/icons/attendance.svg` },
    { name: 'Grades', path: '/Grades', icon: `/${BASE_NAME}/icons/grades.svg` },
    { name: 'Exams', path: '/Exams', icon: `/${BASE_NAME}/icons/exams.svg` },
    { name: 'Subjects', path: '/Subjects', icon: `/${BASE_NAME}/icons/subjects1.svg` },
    { name: 'Profile', path: '/Profile', icon: `/${BASE_NAME}/icons/profile.svg` },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1e1e2e] py-3 px-2 shadow-xl z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex-1 transition-all duration-300 px-2 py-1 rounded-xl mx-1
              flex flex-col items-center text-white
              ${isActive ? 'bg-[#3b82f6]/20 text-[#3b82f6]' : 'hover:bg-white/10 text-white/80'}`
            }
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 mb-1 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-[0.65rem] sm:text-xs font-medium">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar2;
