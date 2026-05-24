"use client";
import { QRCodeCanvas } from "qrcode.react";
export default function VerifyPage() {
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
              src="/suraj2.jpg"
              alt="profile"
              className="w-36 h-36 rounded-[35px] object-cover border-4 border-white shadow-xl"
            />
          </div>

          <div className="flex justify-center mt-6">
            <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold text-sm">
              ✅ AUTHENTIC RECORD
            </div>
          </div>

          <div className="text-center mt-6">
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Suraj <br />
              Sanjeewa
            </h2>

            <p className="text-slate-500 text-lg mt-4">
              Japanese Language (Equivalent to N2)
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-slate-100 rounded-2xl p-4">
              <p className="text-slate-400 text-sm">
                ID
              </p>

              <p className="font-bold text-slate-700 mt-1">
                AZ0030213P
              </p>
            </div>

            <div className="bg-slate-100 rounded-2xl p-4">
              <p className="text-slate-400 text-sm">
                Institute
              </p>

              <p className="font-bold text-slate-700 mt-1">
                MITL Campus
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

          </div><p className="text-slate-500 mt-3">
  Data authenticated securely.
</p>

</div>

<div className="flex justify-center mt-8">
  <div className="bg-white p-4 rounded-3xl shadow-lg">
    <QRCodeCanvas
      value="https://everify-nine.vercel.app/verify/test"
      size={160}
    />
  </div>
</div>

<div className="bg-slate-900 text-white rounded-3xl mt-8 p-6">

          <div className="bg-slate-900 text-white rounded-3xl mt-8 p-6">

            <h3 className="text-3xl font-bold">
              Timeline
            </h3>

            <div className="mt-6 space-y-6">

              <div>
                <p className="text-slate-400 text-sm">
                  ENROLLMENT DATE
                </p>

                <p className="text-2xl font-bold mt-1">
                  2025-03-10
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  COMPLETION DATE
                </p>

                <p className="text-2xl font-bold mt-1">
                  2025-03-13
                </p>
              </div>

              <div>
                <p className="text-slate-400 text-sm">
                  DURATION
                </p>

                <p className="text-2xl font-bold mt-1">
                  12 Months
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </main>
  );
}