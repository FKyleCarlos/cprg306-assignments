"use client";
import React from "react";
import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page(){

// Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  // Sign out of Firebase
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {!user ? (
        <main className="flex items-center p-6">
          <div className="flex items-center justify-center bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5 pt-20">
            <div className="flex flex-col items-center justify-center bg-slate-500 p-15 rounded-lg shadow-lg">
              <h2 className="pb-5">SIGN IN</h2>
              <button onClick={handleSignIn} className="bg-blue-800 rounded-lg px-2 hover:bg-blue-600">Login with Github</button>
            </div>
          </div>
        </main>
        ) : (
        <main className="flex items-center p-6">
          <div className="flex items-center justify-center bg-slate-300 w-full h-[90vh] rounded-lg mt-12 p-5 pt-20">
            <div className="flex flex-col items-center justify-center bg-slate-500 p-15 rounded-lg shadow-lg">
              <h2 className="pb-5">Welcome, {(user.displayName == "") ? user.displayName : user.email}!</h2>
              <Link href="week-10/shopping-list" className="bg-blue-800 rounded-lg px-2 hover:bg-blue-900">Go To Shopping List</Link>
              <button onClick={handleSignOut} className="bg-rose-800 rounded-lg px-2 hover:bg-rose-900 mt-5">Sign Out</button>
            </div>
          </div>
        </main>
      )
        }
    </div>
  );
};

