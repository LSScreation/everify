"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const router = useRouter();
const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    router.push("/staff");
  } catch (error) {
    alert("Invalid Email or Password");
  }
};
  return (
    <div className="min-h-screen bg-[#f3f3f5] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-8">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Login
        </h1>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg mb-2">
            Username
          </label>

          <input
            type="text"
            value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Enter email"
            className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 text-lg mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
onChange={(e) => setPassword(e.target.value)}
placeholder="Enter password"
            className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
          />
        </div>

        <button 
        onClick={handleLogin}
        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-2xl transition">
          Sign In
        </button>

      </div>
    </div>
  );
}