
import SEARCH from "../assets/search.png";
import DOWNLOAD from "../assets/Stroke1.png";
import FILTER from "../assets/Stroke2.png";
import PLUS from "../assets/Stroke3.png";
import GIT from "../assets/Stroke4.png";
import BOX from "../assets/element-3.png";
import BOXTWO from "../assets/Plus.png";
import { people } from "../Helper/DummyData";
import { useState } from "react";


export default function People() {
    const [search, setSearch] = useState("");

    const filteredPeople = people.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className="p-3 m-4 mx-0 bg-white rounded-[20px] border border-zinc-200">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
                <div className="flex gap-3 items-center bg-white rounded-full px-4 py-4 w-full max-w-md shadow-sm">
                    <img src={SEARCH} alt="search" />
                    <input placeholder="Search by Employee Name or Number"
                        className="bg-white outline-none w-full text-sm" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="border border-zinc-200 px-3 py-2 rounded-[15px]">
                        <img src={DOWNLOAD} alt="download" />
                    </span>
                    <span className="border border-zinc-200 px-3 py-2 rounded-[15px]">
                        <img src={FILTER} alt="filter" />
                    </span>
                    <span className="bg-[#3D3936] border border-zinc-200 px-3 py-2 rounded-[15px]">
                        <img src={PLUS} alt="plus" />
                    </span>
                    <div className="flex items-center gap-2 border border-zinc-200 px-3 py-2 rounded-[15px]">
                        <span className="px-3 py-2 bg-[#3D3936] rounded-[15px]">
                            <img src={BOX} alt="download" />
                        </span>
                        <span className="px-3 py-2">
                            <img src={BOXTWO} alt="filter" />
                        </span>
                        <span className="px-3 py-2">
                            <img src={GIT} alt="git" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredPeople.map((p, i) => (
                    <div key={i} className="bg-white rounded-3xl p-4 text-center border border-zinc-100 shadow-sm hover:shadow-md transition cursor-pointer">
                        <div className="relative w-25 h-25 mx-auto mb-4">
                            <img src={p.img} className="rounded-full w-full h-full object-cover" />
                            <div className="absolute bottom-0 right-[-2px]">
                                <img src={p.badge} alt={p.name} />
                            </div>
                        </div>

                        <h3 className="font-semibold text-gray-800">{p.name}</h3>
                        <p className="text-sm text-[#947550] mb-3">{p.role}</p>

                        <div className="flex items-center gap-2 justify-center">
                            <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                            <span className="w-3 h-3 rounded-full bg-lime-500"></span>
                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                            <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                        </div>
                    </div>
                ))}
            </div>
            {filteredPeople.length === 0 && (
                <p className="text-center text-gray-400 mt-6">No employee found</p>
            )}
            <div className="flex flex-wrap items-center justify-start mt-4 text-sm text-gray-600 gap-8">
                <div className="flex items-center gap-2">
                    <span className="font-bold"> Rows per page:</span>
                    <select className="border border-zinc-200 rounded-lg px-2 py-1 bg-white">
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                <div className="font-semibold">1–100 of 500</div>
                <div className="flex gap-2">
                    <button className="">{'<'}</button>
                    <button className="">{'>'}</button>
                </div>
            </div>
        </div>
    );
}
