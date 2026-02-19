import { useState } from "react";
import SEARCH from "../assets/search.png";
import DOWNLOAD from "../assets/Stroke1.png";
import FILTER from "../assets/Stroke2.png";
import SORTNAME from "../assets/StrokeIcons5.png";
import SORT from "../assets/StrokeIcons7.png";
import DATE from "../assets/StrokeIcons8.png";
import { tableData, timesheetData } from "../Helper/DummyData";

export default function Timesheet() {
    const [sortKey, setSortKey] = useState("");
    const [direction, setDirection] = useState("asc");

    const handleSort = (key) => {
        if (sortKey === key) {
            setDirection(direction === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setDirection("asc");
        }
    };

    const parseTime = (val) => {
        if (!val || val === "-") return null;

        if (val.includes(":")) {
            const [h, m] = val.split(":").map(Number);
            return h * 60 + m;
        }

        if (val.includes(".")) {
            const [h, m] = val.split(".").map(Number);
            return h * 60 + m;
        }

        return Number(val);
    };

    const sortedData = [...tableData].sort((a, b) => {
        if (!sortKey) return 0;
        if (sortKey === "name") {
            return direction === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        const aVal = parseTime(a[sortKey]);
        const bVal = parseTime(b[sortKey]);
        if (aVal === null) return 1;
        if (bVal === null) return -1;
        return direction === "asc" ? aVal - bVal : bVal - aVal;
    });


    const SortIcon = ({ column }) => (
        <img src={["total", "regular"].includes(column) ? SORT : SORTNAME} className={`ml-1 transition-transform duration-200
       ${sortKey === column && direction === "desc" ? "rotate-180" : ""}`} />
    );

    return (
        <div className="p-3 m-4 mx-0 bg-white rounded-[20px] border border-zinc-200">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
                <div className="flex gap-3 items-center bg-white rounded-full px-4 py-3 w-full max-w-md shadow-sm">
                    <img src={SEARCH} />
                    <input
                        placeholder="Search by Employee Name or Number"
                        className="outline-none w-full text-sm"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex gap-2 items-center border border-zinc-200 px-3 py-2 rounded-full cursor-pointer">
                        <img src={DATE} className="inline" /> Nov 6, 2025 - Nov 6,2025
                    </span>
                    <span className="border border-zinc-200 p-2 rounded-[15px] cursor-pointer"><img src={FILTER} /></span>
                    <span className="border border-zinc-200 p-2 rounded-[15px] cursor-pointer"><img src={DOWNLOAD} /></span>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {timesheetData.map((time) => {
                    return (
                        <div key={time.id} className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-2 cursor-pointer">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-xl`} style={{ backgroundColor: `${time.color}` }} >
                                <img src={time.icons} alt={time.type} />
                            </div>
                            <p className="text-sm text-gray-500">{time.type}</p>
                            <h2 className="text-2xl font-semibold text-gray-800">{time.hours}</h2>
                        </div>
                    )
                })}
            </div>

            <div className="rounded-2xl overflow-hidden mt-4 border border-gray-200">
                <table className="w-full text-sm">
                    <thead className="border border-gray-200">
                        <tr>
                            <th onClick={() => handleSort("name")} className="text-left px-6 py-4 cursor-pointer" >
                                <div className="flex items-center gap-1">
                                    Employee
                                    <img src={SORTNAME} className={`ml-1 transition-transform duration-200 ${sortKey === "name" && direction === "desc" ? "rotate-180" : ""}`} />
                                </div>
                            </th>

                            {["total", "regular", "overtime", "ot2", "holiday"].map((col) => (
                                <th key={col} onClick={() => handleSort(col)} className={`px-6 py-4 cursor-pointer ${sortKey === col && "text-gray-900"
                                    }`}>
                                    <div className="flex items-center justify-center gap-1 capitalize">
                                        {col}
                                        <SortIcon column={col} />
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {sortedData.map((data) => (
                            <tr key={data.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <img src={data.icons} className="w-8 h-8 rounded-full" />
                                    <span className="font-medium text-gray-800">{data.name}</span>
                                </td>
                                <td className="px-6 py-4 text-center">{data.total}</td>
                                <td className="px-6 py-4 text-center">{data.regular}</td>
                                <td className="px-6 py-4 text-center">{data.overtime}</td>
                                <td className="px-6 py-4 text-center">{data.ot2}</td>
                                <td className="px-6 py-4 text-center">{data.holiday}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Rows per page:</span>
                    <select className="border border-zinc-200 rounded-lg px-2 py-1">
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div className="font-semibold">1–100 of 500</div>
                <div className="flex gap-2">
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </div>
            </div>
        </div>
    );
}
