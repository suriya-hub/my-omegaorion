import React, { useState } from 'react'
import Sidebar from './Sidebar';

export default function People() {
    const employees = [
        { id: 1, name: "Ethan Lee", role: "IT Specialist", img: "https://i.pravatar.cc/150?img=1" },
        { id: 2, name: "Emily Baker", role: "Marketing Manager", img: "https://i.pravatar.cc/150?img=2" },
        { id: 3, name: "Michael Shaun", role: "Sales Director", img: "https://i.pravatar.cc/150?img=3" },
        { id: 4, name: "Liam Carter", role: "Product Designer", img: "https://i.pravatar.cc/150?img=4" },
        { id: 5, name: "Grace Kim", role: "Customer Lead", img: "https://i.pravatar.cc/150?img=5" },
        { id: 6, name: "Noah Williams", role: "Finance Head", img: "https://i.pravatar.cc/150?img=6" },
    ];
    const [active, setActive] = useState("People");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-screen w-screen flex overflow-hidden bg-gray-100">
            {/* Right Section */}
            <div className="flex-1 flex flex-col h-full">

                {/* Header */}
                <header className="h-16 bg-white shadow flex items-center justify-between px-6">
                    <h2 className="text-xl font-semibold">People</h2>

                    <div className="flex items-center gap-4">
                        <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                            MST
                        </span>
                        <img
                            src="https://i.pravatar.cc/40"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-auto p-6">

                    {/* Search */}
                    <div className="mb-6">
                        <input
                            placeholder="Search by Employee Name or Number"
                            className="w-full max-w-md border rounded-lg p-2"
                        />
                    </div>

                    {/* Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {employees.map((emp) => (
                            <div
                                key={emp.id}
                                className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition text-center"
                            >
                                <img
                                    src={emp.img}
                                    className="w-24 h-24 mx-auto rounded-full mb-3"
                                />
                                <h3 className="font-semibold">{emp.name}</h3>
                                <p className="text-sm text-gray-500">{emp.role}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
