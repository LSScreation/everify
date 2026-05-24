"use client";

import { use } from "react";
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import { students } from "@/data/students";

export default function VerifyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);

  const student = students[id as keyof typeof students];

  if (!student) {
    return (
      <main className="min-h-screen bg-[#f5f7ff] flex items-center justify-center p-6">

        <div className="bg-[#fff7f7] w-full max-w-xl rounded-[40px] shadow-xl border border-red-100 p-10 text-center">

          <div className="w-40 h-40 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center text-7xl text-red-500 border border-red-100">
            ❌
          </div>

          <h1 className="text-6xl font-black text-slate-900 mt-10">
            Record Not Found
          </h1>

          <p className="text-slate-500 text-3xl mt-8 leading-relaxed">
            The Verification ID
          </p>

          <div className="bg-white rounded-2xl border border-slate-200 px-8 py-5 inline-block mt-5">
            <p className="text-4xl font-black text-slate-900">
              {id}
            </p>
          </div>

          <p className="text-slate-500 text-3xl mt-6 leading-relaxed">
            does not match any official record in our database.
          </p>

          <Link
            href="/"
            className="mt-12 inline-flex items-center justify-center bg-black text-white text-3xl font-bold rounded-3xl px-16 py-6 shadow-xl hover:scale-105 transition"
          >
            Try Another Number
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6 flex justify-center">

      <div className="max-w-md w-full bg-white rounded-[35px] shadow-2xl overflow-hidden">

        <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

        <div className="p-8">

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">
              🛡️
            </div>

            <div>
              <p className="text-slate-400 text-sm font-semibold tracking-wide">
                E-VERIFY PORTAL
              </p>

              <h1 className="text-3xl font-bold text-slate-800">
                Information Access
              </h1>
            </div>

          </div>

          <div className="flex justify-center mt-10">

            <img
              src={student.image}
              alt="profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl"
            />

          </div>

          <div className="flex justify-center mt-6">

            <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold text-sm">
              ✅ AUTHENTIC RECORD
            </div>

          </div>

          <div className="text-center mt-6">

            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              {student.name}
            </h2>

            <p className="text-slate-500 text-lg mt-4">
              {student.programme}
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-slate-100 rounded-2xl p-4">

              <p className="text-slate-400 text-sm">
                ID
              </p>

              <p className="font-bold text-slate-700 mt-1">
                {id}
              </p>

            </div>

            <div className="bg-slate-100 rounded-2xl p-4">

              <p className="text-slate-400 text-sm">
                Institute
              </p>

              <p className="font-bold text-slate-700 mt-1">
                {student.institute}
              </p>

            </div>

          </div>

          <div className="bg-green-50 border border-green-200 rounded-3xl mt-8 p-6 text-center">

            <div className="text-5xl">
              ✅
            </div>

            <h3 className="text-3xl font-bold text-slate-800 mt-4">
              Status: Verified
            </h3>

            <p className="text-slate-500 mt-3">
              Data authenticated securely.
            </p>

          </div>

          <div className="flex justify-center mt-8">

            <div className="bg-white p-4 rounded-3xl shadow-lg">

              <QRCodeCanvas
                value={`https://everify-nine.vercel.app/verify/${id}`}
                size={160}
              />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}