"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useParams } from "next/navigation";

export default function EditStudentPage() {

  const params = useParams();

  const [student, setStudent] = useState<any>(null);

  useEffect(() => {

    const fetchStudent = async () => {

      const querySnapshot = await getDocs(collection(db, "students"));

      const foundStudent = querySnapshot.docs.find(
        (doc) => doc.data().certificateId === params.id
      );

      if (foundStudent) {
        setStudent(foundStudent.data());
      }

    };

    fetchStudent();

  }, [params.id]);

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading Student...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f3f5] p-6">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-md p-8">

        <h1 className="text-5xl font-bold text-gray-800 mb-10">
          Add Student Record
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-gray-700">
              Student Full Name
            </label>

            <input
              type="text"
              defaultValue={student.name}
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Certificate ID
            </label>

            <input
              type="text"
              defaultValue={student.certificateId}
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Programme
            </label>

            <input
              type="text"
              defaultValue={student.programme}
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Institute
            </label>

            <input
              type="text"
              defaultValue={student.institute}
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

        </div>

      </div>

    </div>
  );
}