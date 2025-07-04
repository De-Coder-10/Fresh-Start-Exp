/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
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
import { Navigate } from "react-router-dom";
import Attendance from "./Attendance";

const formSchema = z.object({
  enrollmentNumber: z.string({
    required_error: "Enrollment number is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
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
        await w.student_login(
          loginStatus.credentials.enrollmentNumber,
          loginStatus.credentials.password
        );

        localStorage.setItem(
          "username",
          loginStatus.credentials.enrollmentNumber
        );
        localStorage.setItem("password", loginStatus.credentials.password);

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

           {/* logo */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-xl">
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
      
      {/* Enrollment Field */}
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

      {/* Password Field */}
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

      {/* Submit Button */}
      <Button
        type="submit"
        className="group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        disabled={loginStatus.isLoading}
      >
        {loginStatus.isLoading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  </Form>
</div>


    <div className="bg-[#2a2a3a]/60 p-5 rounded-xl shadow-lg border border-gray-700">
  <p className="text-sm text-gray-100 font-semibold mb-2">
    Demo Credentials:
  </p>
  <p className="text-sm text-gray-300">
    Enrollment: <span className="font-mono">23103239</span><br />
    Password: <span className="font-mono">678D52</span>
  </p>
</div>



  </div>
</div>


  );
}








