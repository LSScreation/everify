"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [certificateId, setCertificateId] = useState("");
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f5f7ff] flex flex-col">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-6">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
            🛡️
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            everify.lk
          </h1>
        </div>

        <button className="text-slate-500 font-medium">
          Staff Portal Login
        </button>

      </div>

      {/* HERO */}
      <div className="flex-1 flex items-center justify-center px-6">

        <div className="w-full max-w-2xl">

          <h2 className="text-6xl font-extrabold text-center text-slate-900 leading-tight">
            Certificate <br />
            Verification
          </h2>

          <div className="bg-white mt-12 rounded-[35px] shadow-xl border border-slate-200 p-5">

            <input
              type="text"
              placeholder="Enter Certificate ID"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              className="w-full h-16 rounded-2xl border border-slate-200 px-6 text-2xl outline-none"
            />

            <button
              onClick={(e) => {
                e.preventDefault();

                if (certificateId.trim() !== "") {
                  router.push(`/verify/${certificateId}`);
                }
              }}
              className="w-full h-16 rounded-2xl bg-blue-600 text-white text-2xl font-bold mt-5 hover:bg-blue-700 transition"
            >
              Verify Now
            </button>

          </div>

          <p className="text-center text-slate-400 text-xl mt-6">
            Example: AZ00*****
          </p>

        </div>

      </div>

    </main>
  );
}