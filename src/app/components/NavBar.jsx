'use client'
import { useState } from "react";
import { House, History, ChartLine  } from 'lucide-react';

const NavBar = () => {
  const [active, setActive] = useState("home");
  const getClass = (tab) =>
    active === tab
      ? "bg-[#244D3F] text-white"
      : "bg-white text-[#64748B]";
  return (
    <div className="flex shadow-sm justify-between w-full py-2.5 bg-white">
  <div className="">
    <a className="btn btn-ghost text-xl"><span className="font-extrabold">Keen<span className="font-medium">Keeper</span></span></a>
  </div>
  <div className="">
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setActive("home")}
        className={`btn ${getClass("home")}`}
      >
        <House />
        <span>Home</span>
      </button>

      <button
        onClick={() => setActive("timeline")}
        className={`btn ${getClass("timeline")}`}
      >
        <History />
        <span>Timeline</span>
      </button>

      <button
        onClick={() => setActive("stats")}
        className={`btn ${getClass("stats")}`}
      >
        <ChartLine />
        <span>Stats</span>
      </button>
    </div>
  </div>
</div>
  );
};

export default NavBar;