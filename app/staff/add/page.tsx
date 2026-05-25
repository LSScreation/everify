"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function AddStudentPage() {

  const searchParams = useSearchParams();

  const certificateId = searchParams.get("id");

  const [docId, setDocId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    certificateId: "",
    programme: "",
    institute: "",
    dob: "",
    nic: "",
    email: "",
    enrollment: "",
    completion: "",
    duration: "",
    authority: "",
    status: "Verified",
    image: "",
  });

  useEffect(() => {

    const fetchStudent = async () => {

      if (!certificateId) return;

      const querySnapshot = await getDocs(collection(db, "students"));

      const foundStudent = querySnapshot.docs.find(
        (doc) => doc.data().certificateId === certificateId
      );

      if (foundStudent) {

        setDocId(foundStudent.id);

        setFormData({
          ...foundStudent.data(),
        });

      }

    };

    fetchStudent();

  }, [certificateId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = async () => {
  console.log(formData);
    if (docId) {

      await updateDoc(doc(db, "students", docId), {
        ...formData,
      });

      alert("Student Updated Successfully");

    } else {

      await addDoc(collection(db, "students"), {
        ...formData,
      });

      alert("Student Saved Successfully");

    }

  };

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
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Certificate ID
            </label>

            <input
              type="text"
              name="certificateId"
              value={formData.certificateId}
              onChange={handleChange}
              placeholder="Enter certificate ID"
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Programme
            </label>

            <input
              type="text"
              name="programme"
              value={formData.programme}
              onChange={handleChange}
              placeholder="Enter programme"
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Institute
            </label>

            <input
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              placeholder="Enter institute"
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              NIC Number
            </label>

            <input
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              placeholder="Enter NIC number"
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Enrollment Date
            </label>

            <input
              type="date"
              name="enrollment"
              value={formData.enrollment}
              onChange={handleChange}
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Completion Date
            </label>

            <input
              type="date"
              name="completion"
              value={formData.completion}
              onChange={handleChange}
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Duration
            </label>

            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Example: 12 Months"
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Issuing Authority
            </label>

            <input
              type="text"
              name="authority"
              value={formData.authority}
              onChange={handleChange}
              placeholder="Enter issuing authority"
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Verification Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none"
            >
              <option>Verified</option>
              <option>Pending</option>
            </select>
          </div>

        </div>

        <button
          onClick={handleSave}
          className="w-full mt-10 h-14 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-2xl transition"
        >
          Save Student Record
        </button>

      </div>

    </div>

  );

}

