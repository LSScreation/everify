"use client";

import React from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { QRCodeCanvas } from "qrcode.react";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function VerifyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = React.use(params);

  const [student, setStudent] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {

    const fetchStudent = async () => {

      const q = query(
        collection(db, "students"),
        where("certificateId", "==", id)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setStudent(querySnapshot.docs[0].data());
      }

      setLoading(false);
    };

    fetchStudent();

  }, [id]);



  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }
console.log(student);


  if (!student) {
    return (

      <main className="min-h-screen bg-red-50 flex items-center justify-center p-6">

        <div className="bg-white max-w-md w-full rounded-[35px] shadow-2xl p-10 text-center border border-red-100">

          <div className="text-8xl">
            ❌
          </div>

          <h1 className="text-5xl font-black text-red-600 mt-6">
            Certificate Not Found
          </h1>

          <p className="text-slate-500 text-xl mt-6 leading-relaxed">
            This certificate ID does not exist in our official verification database.
          </p>

          <div className="bg-red-100 text-red-700 px-6 py-3 rounded-full inline-block mt-8 font-bold">
            INVALID CERTIFICATE
          </div>

          <a
            href="/"
            className="block mt-10 bg-black text-white py-5 rounded-3xl text-2xl font-bold"
          >
            Back To Home
          </a>

        </div>

      </main>

    );
  }



  return (
    <main className="min-h-screen bg-slate-100 p-6 flex justify-center">

      <div className="max-w-md w-full bg-white rounded-[35px] shadow-2xl overflow-hidden">

        <div className="h-4 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

        <div className="p-8">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">
              🛡️
            </div>

            <div>
              <p className="text-slate-400 font-bold uppercase tracking-wider text-sm">
                E-VERIFY PORTAL
              </p>

              <h1 className="text-5xl font-black text-slate-900">
                Information Access
              </h1>
            </div>

          </div>

          <div className="flex justify-center mt-10">

            <img
              src={`/${student.image}`}
              alt="profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl"
            />

          </div>

          <div className="flex justify-center mt-6">

            <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
              ✅ AUTHENTIC RECORD
            </div>

          </div>

          <h1 className="text-6xl font-black text-slate-900 text-center mt-8">
            {student.name}
          </h1>

          <p className="text-center text-slate-500 text-3xl mt-4">
            {student.programme}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-slate-100 rounded-2xl p-5">
              <p className="text-slate-400 text-sm uppercase">ID</p>
              <h2 className="text-slate-800 font-bold text-2xl mt-2">
                {id}
              </h2>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              <p className="text-slate-400 text-sm uppercase">Institute</p>
              <h2 className="text-slate-800 font-bold text-2xl mt-2">
                {student.institute}
              </h2>
            </div>

          </div>

          <div className="bg-green-50 border border-green-200 rounded-[30px] p-10 mt-10 text-center">

            <div className="text-7xl">
              ✅
            </div>

            <h2 className="text-5xl font-black text-slate-800 mt-6">
              Status: Verified
            </h2>

            <p className="text-slate-500 text-2xl mt-5">
              Data authenticated securely.
            </p>

          </div>

          <div className="rounded-[35px] border border-slate-200 p-8 mt-10">

            <h2 className="text-5xl font-black text-slate-900">
              Personal Data
            </h2>

            <div className="mt-8 space-y-8">

              <div>
                <p className="text-slate-400 uppercase tracking-widest text-sm">
                  Full Name
                </p>

                <h3 className="text-slate-900 text-3xl font-bold mt-2">
                  {student.name}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 uppercase tracking-widest text-sm">
                  Date of Birth
                </p>

                <h3 className="text-slate-900 text-3xl font-bold mt-2">
                  {student.dob}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 uppercase tracking-widest text-sm">
                  NIC Number
                </p>

                <h3 className="text-slate-900 text-3xl font-bold mt-2">
                  {student.nic}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 uppercase tracking-widest text-sm">
                  Email Address
                </p>

                <h3 className="text-slate-900 text-2xl font-bold mt-2 break-all">
                  {student.email}
                </h3>
              </div>

            </div>

          </div>

          <div className="rounded-[35px] bg-slate-950 p-8 mt-10">

            <h2 className="text-5xl font-black text-white">
              Timeline
            </h2>

            <div className="space-y-10 mt-10">

              <div>
                <p className="text-slate-400 uppercase tracking-widest text-sm">
                  Enrollment Date
                </p>

                <h3 className="text-white text-3xl font-bold mt-3">
                  {student.enrollment}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 uppercase tracking-widest text-sm">
                  Completion Date
                </p>

                <h3 className="text-white text-3xl font-bold mt-3">
                  {student.completion}
                </h3>
              </div>

              <div>
                <p className="text-slate-400 uppercase tracking-widest text-sm">
                  Duration
                </p>

                <h3 className="text-white text-3xl font-bold mt-3">
                  {student.duration}
                </h3>
              </div>

            </div>

          </div>

          <div className="bg-slate-100 rounded-[30px] p-8 mt-10">

            <p className="text-slate-400 uppercase tracking-widest text-sm">
              Issuing Authority
            </p>

            <h2 className="text-4xl font-black text-slate-900 mt-3">
              {student.authority}
            </h2>

          </div>

          <div className="flex justify-center mt-10">

            <div className="bg-white p-4 rounded-3xl shadow-lg">

              <QRCodeCanvas
                value={`https://everify-nine.vercel.app/verify/${id}`}
                size={160}
              />

            </div>

          </div>

          <div className="mt-10">

            <Link
              href="/"
              className="block w-full bg-black text-white text-center py-5 rounded-3xl text-2xl font-bold"
            >
              Back To Home
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}