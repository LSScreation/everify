"use client";

import Link from "next/link";

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f5] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl grid md:grid-cols-2 gap-6">

        <Link href="/staff/add">
          <div className="bg-white rounded-3xl shadow-md p-10 cursor-pointer hover:scale-105 transition">
            <div className="text-5xl mb-4">➕</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Add Student Record
            </h2>

            <p className="text-gray-500">
              Create and save new student certificate records.
            </p>
          </div>
        </Link>

        <Link href="/staff/students">
          <div className="bg-white rounded-3xl shadow-md p-10 cursor-pointer hover:scale-105 transition">
            <div className="text-5xl mb-4">👥</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Saved Students
            </h2>

            <p className="text-gray-500">
              View and manage saved student profiles.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}