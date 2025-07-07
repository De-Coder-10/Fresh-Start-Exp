import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available for combining Tailwind classes

// --- Custom ScrollArea Component ---
// This component provides a scrollable area using native HTML div and Tailwind CSS.
// It replaces external UI library ScrollArea components for better compatibility.
// It uses React.forwardRef to allow parent components to get a ref to the underlying div.

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    // Apply common scrollable styles: fixed height, vertical overflow, and custom scrollbar
    className={cn("relative overflow-hidden h-full", className)}
    {...props}
  >
    {/* Inner div to handle the actual scrolling content */}
    <div className="h-full w-full overflow-y-auto overflow-x-hidden custom-scrollbar">
      {children}
    </div>
  </div>
));

ScrollArea.displayName = "ScrollArea"; // For better debugging in React DevTools

// --- Example Usage of ScrollArea within a component ---
// This part demonstrates how the ScrollArea can be used.
// You would typically render this inside another component (e.g., your AttendanceOverview).

export default function MyScrollableContent() {
  return (
    <ScrollArea type="always" scrollbars="vertical" className="h-[180px] w-full bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="p-2 pr-8"> {/* Adjusted padding to account for scrollbar */}
        <h2 className="text-2xl font-semibold text-white mb-3 leading-tight">
          Principles of the typographic craft
        </h2>
        <div className="flex flex-col gap-4 text-gray-300">
          <p>
            Three fundamental aspects of typography are legibility, readability, and
            aesthetics. Although in a non-technical sense “legible” and “readable”
            are often used synonymously, typographically they are separate but
            related concepts.
          </p>

          <p>
            Legibility describes how easily individual characters can be
            distinguished from one another. It is described by Walter Tracy as “the
            quality of being decipherable and recognisable”. For instance, if a “b”
            and an “h”, or a “3” and an “8”, are a to distinguish at small
            sizes, this is a problem of legibility.
          </p>

          <p>
            Typographers are concerned with legibility insofar as it is their job to
            select the correct font to use. Brush Script is an example of a font
            containing many characters that might be difficult to distinguish. The
            selection of cases influences the legibility of typography because using
            only uppercase letters (all-caps) reduces legibility.
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}

// Export the ScrollArea component for use in other files
export { ScrollArea };
