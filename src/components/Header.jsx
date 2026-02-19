import { useLocation } from 'react-router-dom';
import CHEVRON from '../assets/stroke.png';
import CLOCK from '../assets/time.png';
import NOTES from '../assets/notes.png';
import INBOX from '../assets/inbox.png';
import { capitalizeFirstWord } from '../Helper/Utils';
import { useEffect, useState } from 'react';

export default function Header({ isOpen, setIsOpen }) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZone: "Asia/Kolkata"
            });
            setTime(formattedTime);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getTitle = () => {
        const location = useLocation();
        console.log(location, 'location')
        const path = location.pathname;
        if (path.startsWith("/home")) return capitalizeFirstWord(location.pathname);
        if (path.startsWith("/people")) return capitalizeFirstWord(location.pathname);
        if (path.startsWith("/myinfo")) return capitalizeFirstWord(location.pathname);
        if (path.startsWith("/teammanagement")) return capitalizeFirstWord(location.pathname);
        if (path.startsWith("/projectsetup")) return capitalizeFirstWord(location.pathname);
        if (path.startsWith("/hiring")) return capitalizeFirstWord(location.pathname);
        if (path.startsWith("/report")) return capitalizeFirstWord(location.pathname);
        return "Home";
    };

    return (
        <header className="h-16 bg-white shadow flex items-center justify-between px-6 rounded-[15px] ">
            <div className="flex flex-row items-center gap-4">
                {!isOpen && <button onClick={() => setIsOpen(true)} className={`mr-3 cursor-pointer`}>☰</button>}
                <h2 className="hidden md:flex gap-2 text-xl font-semibold">
                    {getTitle()?.first} {getTitle()?.second !== '' && <img src={CHEVRON} alt='chev' className="w-auto  m-2" />} {getTitle()?.second}
                </h2>
            </div>
            <div className="flex items-center gap-4">
                <span className="hidden md:flex border border-zinc-200 px-3 py-2 rounded-full cursor-pointer">
                    MST
                </span>
                <span className="flex gap-2 items-center border border-zinc-200 px-3 py-2 rounded-full cursor-pointer">
                    <img src={CLOCK} className="inline" /> {time}  <img src={NOTES} className="inline" />
                </span>
                <span className="border border-zinc-200 px-3 py-2 rounded-full cursor-pointer">
                    <img src={INBOX} className="inline" />
                </span>
                <img
                    src="https://i.pravatar.cc/40"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    alt="profile"
                />
            </div>
        </header>
    )
}
