"use client";

import LoginForm from "@/components/auth/LoginForm";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Login() {
  const { data: session, status } = useSession();
  console.log("Status Inside Login", status);

  if (status === "loading") {
    return <p>Loading User please wait...</p>;
  }
  if (status === "authenticated") {
    redirect("/dashboard/home/overview");
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-20 h-20 mr-2" src="tigray.png" alt="logo" />
          Inventory Management System
        </a>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
