"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
export default function StaffPortal() {
    const [name, setName] = useState("");
    const [certificateId, setCertificateId] = useState("");
    const [programme, setProgramme] = useState("");
    const [institute, setInstitute] = useState("");
    const [dob, setDob] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");

    const [enrollment, setEnrollment] = useState("");
    const [completion, setCompletion] = useState("");
    const [duration, setDuration] = useState("");

    const [authority, setAuthority] = useState("");
    const [status, setStatus] = useState("Verified");
    const [photo, setPhoto] = useState("");
    const saveStudent = async () => {

        try {
            
            await addDoc(collection(db, "students"), {
                name,
                certificateId,
                programme,
                institute,

                dob,
                nic,
                email,

                enrollment,
                completion,
                duration,

                authority,
                status,
                image: photo,
            });


            alert("Student Record Saved Successfully 😎🔥");
            }

            catch (error) {

            console.log(error);

            alert("Something went wrong 😢");

        }

    };
    return (
        <main className="min-h-screen bg-[#f5f7ff] p-6 flex justify-center">

            <div className="w-full max-w-5xl bg-white rounded-[40px] shadow-2xl p-10">

                {/* TOP */}
                <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-3xl bg-blue-100 flex items-center justify-center text-3xl">
                        🛡️
                    </div>

                    <div>

                        <p className="text-slate-400 text-lg font-semibold">
                            STAFF PORTAL
                        </p>

                        <h1 className="text-5xl font-black text-slate-900">
                            Add Student Record
                        </h1>

                    </div>

                </div>

                {/* FORM */}
                <div className="grid grid-cols-2 gap-6 mt-12">

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Student Full Name
                        </p>

                        <input
                            type="text"
                            placeholder="Enter full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Certificate ID
                        </p>

                        <input
                            type="text"
                            placeholder="Enter certificate ID"
                            value={certificateId}
                            onChange={(e) => setCertificateId(e.target.value)}
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Programme
                        </p>

                        <input
                            type="text"
                            placeholder="Enter programme"
                            value={programme}
                            onChange={(e) => setProgramme(e.target.value)}
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Institute
                        </p>

                        <input
                            type="text"
                            placeholder="Enter institute"
                            value={institute}
                            onChange={(e) => setInstitute(e.target.value)}
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Date of Birth
                        </p>

                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            NIC Number
                        </p>

                        <input
                            type="text"
                            value={nic}
                            onChange={(e) => setNic(e.target.value)}
                            placeholder="Enter NIC number"
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Email Address
                        </p>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Enrollment Date
                        </p>

                        <input
                            type="date"
                            value={enrollment}
                            onChange={(e) => setEnrollment(e.target.value)}
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Completion Date
                        </p>

                        <input
                            type="date"
                            value={completion}
                            onChange={(e) => setCompletion(e.target.value)}
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Duration
                        </p>

                        <input
                            type="text"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            placeholder="Example: 12 Months"
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Issuing Authority
                        </p>

                        <input
                            type="text"
                            value={authority}
                            onChange={(e) => setAuthority(e.target.value)}
                            placeholder="Enter issuing authority"
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        />
                    </div>

                    <div>
                        <p className="text-slate-500 text-lg mb-3">
                            Verification Status
                        </p>

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                        >
                            <option>Verified</option>
                            <option>Pending</option>
                            <option>Rejected</option>
                        </select>
                    </div>

                </div>

                {/* PHOTO */}
                <div className="mt-8">

                    <p className="text-slate-500 text-lg mb-3">
                        Upload Student Photo
                    </p>
                    <input
                      type="text"
                      placeholder="Enter image name (example: suraj.jpg)"
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                      className="w-full h-16 rounded-2xl border border-slate-200 px-5 text-lg outline-none"
                    />
                                         
                   
                </div>

                {/* BUTTON */}
                <button
                    onClick={saveStudent}
                    className="w-full h-20 rounded-3xl bg-blue-600 text-white text-3xl font-black mt-12 hover:bg-blue-700 transition">
                    Save Student Record
                </button>

            </div>

        </main>
    );
}