/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

import MessScheduler from "@/components/MessScheduler"; // adjust the path if needed

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginError } from "https://cdn.jsdelivr.net/npm/jsjiit@0.0.20/dist/jsjiit.esm.js";

const formSchema = z.object({
  enrollmentNumber: z.string({ required_error: "Enrollment number is required" }),
  password: z.string({ required_error: "Password is required" }),
});

export default function Login({ onLoginSuccess, w }) {
  const [loginStatus, setLoginStatus] = useState({
    isLoading: false,
    error: null,
    credentials: null,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      enrollmentNumber: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!loginStatus.credentials) return;

    const performLogin = async () => {
      try {
        // Login to jsjiit portal
        await w.student_login(
          loginStatus.credentials.enrollmentNumber,
          loginStatus.credentials.password
        );

        // Save to localStorage
        localStorage.setItem("username", loginStatus.credentials.enrollmentNumber);
        localStorage.setItem("password", loginStatus.credentials.password);

        // Save to backend database
        try {
          await fetch("http://localhost:4000/api/save-credentials", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              enrollmentNumber: loginStatus.credentials.enrollmentNumber,
              password: loginStatus.credentials.password,
            }),
          });
          console.log("Credentials saved to DB");
        } catch (dbError) {
          console.error("Failed to save to DB:", dbError);
        }

        setLoginStatus((prev) => ({
          ...prev,
          isLoading: false,
          credentials: null,
        }));

        onLoginSuccess();
      } catch (error) {
        let message = "Login failed. Please check your credentials.";
        if (
          error instanceof LoginError &&
          error.message.includes("JIIT Web Portal server is temporarily unavailable")
        ) {
          message = "JIIT Web Portal server is temporarily unavailable. Please try again later.";
        } else if (
          error instanceof LoginError &&
          error.message.includes("Failed to fetch")
        ) {
          message = "Please check your internet connection. If connected, JIIT Web Portal server is unavailable.";
        }

        setLoginStatus((prev) => ({
          ...prev,
          isLoading: false,
          error: message,
          credentials: null,
        }));
      }
    };

    setLoginStatus((prev) => ({ ...prev, isLoading: true }));
    performLogin();
  }, [loginStatus.credentials, onLoginSuccess, w]);

  function onSubmit(values) {
    setLoginStatus((prev) => ({
      ...prev,
      credentials: values,
      error: null,
    }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-indigo-500 to-teal-400 p-4 rounded-2xl shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.34 6.789L12 20l-6.5-2.633a12.083 12.083 0 01.34-6.789L12 14z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-100 tracking-tight font-sans">
            Welcome Back, Bachcho
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sign in to your FreshStart account
          </p>
          {loginStatus.error && (
            <p className="mt-4 text-red-600 dark:text-red-400 font-medium">
              {loginStatus.error}
            </p>
          )}
        </div>

        <div className="bg-[#1e1e2f] p-10 rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full max-w-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="enrollmentNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200 font-medium text-sm">
                      Enrollment Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your enrollment number"
                        className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-700 bg-[#2b2b3d] text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-600/30 focus:outline-none transition-all duration-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200 font-medium text-sm">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="Enter your password"
                        className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-700 bg-[#2b2b3d] text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-600/30 focus:outline-none transition-all duration-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-xl text-white bg-gradient-to-br from-indigo-500 to-teal-400 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                disabled={loginStatus.isLoading}
              >
                {loginStatus.isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Form>



        </div>

        <div className="bg-[#2a2a3a]/60 p-5 rounded-xl shadow-lg border border-gray-700">
          <p className="text-sm text-gray-100 font-semibold mb-2">Demo Credentials:</p>
          <p className="text-sm text-gray-300">
            Enrollment: <span className="font-mono">23103239</span><br />
            Password: <span className="font-mono">678D52</span>
          </p>
        </div>
      </div>
    </div>
  );
}


// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import Navbar from "./Navbar";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { LoginError } from "https://cdn.jsdelivr.net/npm/jsjiit@0.0.20/dist/jsjiit.esm.js";
// import { Navigate } from "react-router-dom";
// import Attendance from "./Attendance";

// const formSchema = z.object({
//   enrollmentNumber: z.string({
//     required_error: "Enrollment number is required",
//   }),
//   password: z.string({
//     required_error: "Password is required",
//   }),
// });

// export default function Login({ onLoginSuccess, w }) {
//   const [loginStatus, setLoginStatus] = useState({
//     isLoading: false,
//     error: null,
//     credentials: null,
//   });

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       enrollmentNumber: "",
//       password: "",
//     },
//   });

//   useEffect(() => {
//     if (!loginStatus.credentials) return;
      
//     const performLogin = async () => {
//       try {
//         await w.student_login(
//           loginStatus.credentials.enrollmentNumber,
//           loginStatus.credentials.password
//         );

//         localStorage.setItem(
//           "username",
//           loginStatus.credentials.enrollmentNumber
//         );
//         localStorage.setItem("password", loginStatus.credentials.password);

//         setLoginStatus((prev) => ({
//           ...prev,
//           isLoading: false,
//           credentials: null,
//         }));
//         onLoginSuccess();

        
//       } catch (error) {
//         let message = "Login failed. Please check your credentials.";
//         if (
//           error instanceof LoginError &&
//           error.message.includes("JIIT Web Portal server is temporarily unavailable")
//         ) {
//           message = "JIIT Web Portal server is temporarily unavailable. Please try again later.";
//         } else if (
//           error instanceof LoginError &&
//           error.message.includes("Failed to fetch")
//         ) {
//           message = "Please check your internet connection. If connected, JIIT Web Portal server is unavailable.";
//         }
//         setLoginStatus((prev) => ({
//           ...prev,
//           isLoading: false,
//           error: message,
//           credentials: null,
//         }));
//       }
//     };

//     setLoginStatus((prev) => ({ ...prev, isLoading: true }));
//     performLogin();
//   }, [loginStatus.credentials, onLoginSuccess, w]);


  
//   function onSubmit(values) {
//     setLoginStatus((prev) => ({
//       ...prev,
//       credentials: values,
//       error: null,
//     }));
//   }

//   return (
//   <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
//   <div className="max-w-md w-full space-y-10">
//     <div className="text-center">
//       <div className="flex justify-center mb-6">

//            {/* logo */}
//         <div className="bg-gradient-to-br from-indigo-500 to-teal-400 p-4 rounded-2xl shadow-xl">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-12 w-12 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={1}
//               d="M12 14l9-5-9-5-9 5 9 5z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={1}
//               d="M12 14l6.16-3.422a12.083 12.083 0 01.34 6.789L12 20l-6.5-2.633a12.083 12.083 0 01.34-6.789L12 14z"
//             />
//           </svg>
//         </div>
//       </div>

      
// <h2 className="text-3xl font-semibold text-gray-100 tracking-tight font-sans">
//   Welcome Back, Bachcho
// </h2>

      
//       <p className="mt-2 text-gray-600 dark:text-gray-400">
//         Sign in to your FreshStart account
//       </p>
//       {loginStatus.error && (
//         <p className="mt-4 text-red-600 dark:text-red-400 font-medium">
//           {loginStatus.error}
//         </p>
//       )}
//     </div>

//     <div className="bg-[#1e1e2f] p-10 rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full max-w-md">
//   <Form {...form}>
//     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      
//       {/* Enrollment Field */}
//       <FormField
//         control={form.control}
//         name="enrollmentNumber"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel className="text-gray-200 font-medium text-sm">
//               Enrollment Number
//             </FormLabel>
//             <FormControl>
//               <Input
//                 {...field}
//                 placeholder="Enter your enrollment number"
//                 className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-700 bg-[#2b2b3d] text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-600/30 focus:outline-none transition-all duration-200"
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Password Field */}
//       <FormField
//         control={form.control}
//         name="password"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel className="text-gray-200 font-medium text-sm">
//               Password
//             </FormLabel>
//             <FormControl>
//               <Input
//                 type="password"
//                 {...field}
//                 placeholder="Enter your password"
//                 className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-700 bg-[#2b2b3d] text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-600/30 focus:outline-none transition-all duration-200"
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Submit Button */}
//       <Button
//         type="submit"
//         className="group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-xl text-white bg-gradient-to-br from-indigo-500 to-teal-400 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//         disabled={loginStatus.isLoading}
//       >
//         {loginStatus.isLoading ? "Signing in..." : "Sign in"}
//       </Button>
//     </form>
//   </Form>
// </div>


//     <div className="bg-[#2a2a3a]/60 p-5 rounded-xl shadow-lg border border-gray-700">
//   <p className="text-sm text-gray-100 font-semibold mb-2">
//     Demo Credentials:
//   </p>
//   <p className="text-sm text-gray-300">
//     Enrollment: <span className="font-mono">23103239</span><br />
//     Password: <span className="font-mono">678D52</span>
//   </p>
// </div>



//   </div>
// </div>


//   );
// }


















/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { LoginError } from "https://cdn.jsdelivr.net/npm/jsjiit@0.0.20/dist/jsjiit.esm.js";
// // No need for Navigate or Attendance import if not directly used in this component's render.

// const formSchema = z.object({
//   enrollmentNumber: z.string({
//     required_error: "Enrollment number is required",
//   }),
//   password: z.string({
//     required_error: "Password is required",
//   }),
// });

// export default function Login({ onLoginSuccess, w }) {
//   const [loginStatus, setLoginStatus] = useState({
//     isLoading: false,
//     error: null,
//     credentials: null,
//   });

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       enrollmentNumber: "",
//       password: "",
//     },
//   });

//   useEffect(() => {
//     if (!loginStatus.credentials) return;

//     const performLogin = async () => {
//       try {
//         await w.student_login(
//           loginStatus.credentials.enrollmentNumber,
//           loginStatus.credentials.password
//         );

//         localStorage.setItem(
//           "username",
//           loginStatus.credentials.enrollmentNumber
//         );
//         localStorage.setItem("password", loginStatus.credentials.password);

//         setLoginStatus((prev) => ({
//           ...prev,
//           isLoading: false,
//           credentials: null,
//         }));
//         onLoginSuccess();
//       } catch (error) {
//         let message = "Login failed. Please check your credentials.";
//         if (
//           error instanceof LoginError &&
//           error.message.includes("JIIT Web Portal server is temporarily unavailable")
//         ) {
//           message = "JIIT Web Portal server is temporarily unavailable. Please try again later.";
//         } else if (
//           error instanceof LoginError &&
//           error.message.includes("Failed to fetch")
//         ) {
//           message = "Please check your internet connection. If connected, JIIT Web Portal server is unavailable.";
//         }
//         setLoginStatus((prev) => ({
//           ...prev,
//           isLoading: false,
//           error: message,
//           credentials: null,
//         }));
//       }
//     };

//     setLoginStatus((prev) => ({ ...prev, isLoading: true }));
//     performLogin();
//   }, [loginStatus.credentials, onLoginSuccess, w]);

//   function onSubmit(values) {
//     setLoginStatus((prev) => ({
//       ...prev,
//       credentials: values,
//       error: null,
//     }));
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gray-950 text-gray-100 font-sans">
//       <div className="max-w-md w-full space-y-8 p-10 rounded-2xl bg-gray-900 shadow-2xl border border-gray-800">
//         <div className="text-center">
//           <div className="flex justify-center mb-8">
//             {/* Professional and subtle logo */}
            
//            {/* logo */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-xl">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-12 w-12 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//            stroke="currentColor"
//          >
//            <path
//              strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={1}
//               d="M12 14l9-5-9-5-9 5 9 5z"
//              />
//              <path
//                strokeLinecap="round"
//                strokeLinejoin="round"
//                strokeWidth={1}
//                d="M12 14l6.16-3.422a12.083 12.083 0 01.34 6.789L12 20l-6.5-2.633a12.083 12.083 0 01.34-6.789L12 14z"
//              />
//            </svg>
//          </div>


//           </div>

//           <h2 className="text-4xl font-extrabold text-white tracking-tight mb-2">
//             Welcome Back
//           </h2>
//           <p className="text-gray-400 text-lg">
//             Sign in to your FreshStart account
//           </p>
//           {loginStatus.error && (
//             <p className="mt-5 text-red-500 font-medium text-base">
//               {loginStatus.error}
//             </p>
//           )}
//         </div>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             {/* Enrollment Field */}
//             <FormField
//               control={form.control}
//               name="enrollmentNumber"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-300 text-sm font-semibold">
//                     Enrollment Number
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       placeholder="Enter your enrollment number"
//                       className="mt-2 block w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors duration-200 text-base"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-400" />
//                 </FormItem>
//               )}
//             />

//             {/* Password Field */}
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-300 text-sm font-semibold">
//                     Password
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       type="password"
//                       {...field}
//                       placeholder="Enter your password"
//                       className="mt-2 block w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-colors duration-200 text-base"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-400" />
//                 </FormItem>
//               )}
//             />

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               className="w-full flex justify-center py-3.5 px-4 text-base font-bold rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
//               disabled={loginStatus.isLoading}
//             >
//               {loginStatus.isLoading ? (
//                 <span className="flex items-center">
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Signing in...
//                 </span>
//               ) : (
//                 "Sign in"
//               )}
//             </Button>
//           </form>
//         </Form>

//         <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 shadow-inner mt-6">
//           <p className="text-sm text-gray-300 font-semibold mb-2">
//             Demo Credentials:
//           </p>
//           <p className="text-sm text-gray-400 leading-relaxed">
//             Enrollment: <span className="font-mono text-blue-400">23103239</span><br />
//             Password: <span className="font-mono text-blue-400">678D52</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }