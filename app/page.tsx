"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const router = useRouter();

const [certificateId, setCertificateId] = useState("");
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-8 py-6">

        <div className="flex items-center gap-4">

          <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
            🛡️
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            everify.lk
          </h1>

        </div>

        <Link
          href="/admin/login"
          className="text-slate-500 font-medium"
        >
          Staff Portal Login
        </Link>

      </div>

      {/* HERO */}
      <div className="flex-1 flex items-center justify-center px-6">

        <div className="w-full max-w-2xl">

          <h2 className="text-6xl font-extrabold text-center text-slate-900 leading-tight">
            Certificate <br />
            Verification
          </h2>

          <div className="bg-white shadow-2xl rounded-[35px] p-6 mt-12 border border-slate-100">

            <input
  type="text"
  placeholder="Enter Certificate ID"
  value={certificateId}
  onChange={(e) => setCertificateId(e.target.value)}
  className="w-full h-16 border border-slate-200 rounded-2xl px-6 text-xl outline-none"
/>

            <button
  onClick={() => router.push(`/verify/${certificateId}`)}
  className="w-full h-16 bg-blue-700 hover:bg-blue-800 transition text-white rounded-2xl text-2xl font-bold mt-5"
>
  Verify Now
</button>
  

          </div>

          <p className="text-center text-slate-400 mt-8 text-xl">
            Example: AZ00*****
          </p>

        </div>

      </div>

    </main>
  );
}