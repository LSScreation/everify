"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function StudentsPage() {

  const router = useRouter();

  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {

    fetchStudents();

  }, []);

  const fetchStudents = async () => {

    const querySnapshot = await getDocs(collection(db, "students"));

    const studentData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setStudents(studentData);

  };

  const handleDelete = async (id: string) => {

    const confirmDelete = confirm(
      "Are you sure you want to remove this student?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "students", id));

    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );

    alert("Student Removed Successfully");

  };

  return (

    <div className="min-h-screen bg-[#f3f3f5] p-6">

      <h1 className="text-4xl font-bold mb-8">
        Saved Students
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {students.map((student) => (

          <div
            key={student.id}
            className="relative bg-white rounded-3xl shadow-md p-6 hover:scale-105 transition cursor-pointer"
          >

            {/* DELETE BUTTON */}

            <button
  onClick={() => handleDelete(student.id)}
  className="mt-5 w-full py-2 rounded-xl border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition"
>
  Remove Person
</button>

            {/* CARD CLICK */}

            <div
              onClick={() =>
                router.push(`/staff/add?id=${student.certificateId}`)
              }
            >

              <img
                src={
                  student.image
                    ? `/${student.image}`
                    : "/default-user.jpg"
                }
                alt={student.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />

              <h2 className="text-2xl font-bold text-center text-gray-800">
                {student.name || "No Name"}
              </h2>

              <p className="text-center text-gray-500 mt-2">
                Certificate ID: {student.certificateId}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}