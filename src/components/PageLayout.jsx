// components/PageLayout.jsx
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#191c20] text-white font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content area (scrollable between navbars) */}
      <div className="flex-1 overflow-y-auto pt-16 pb-20 px-4">
        {children}
      </div>

      {/* Bottom Navbar */}
      <Navbar2 />
    </div>
  );
};

export default PageLayout;
