'use client'
import { House, History, ChartLine  } from 'lucide-react';
import CardSection from "./CardSection";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {

  const path = usePathname();

  const getClass = (route) =>
    path === route
      ? "bg-[#244D3F] text-white"
      : "bg-white text-[#64748B]";
  return (
    <>
    <div className="flex shadow-sm justify-between w-full py-2.5 bg-white">
  <div className="pl-3.5">
    <div className="text-xl"><span className="font-extrabold">Keen<span className="font-medium">Keeper</span></span></div>
  </div>
  <div className="pr-3.5">
    <div id='responsive-flex'>
      <Link
        href="/" className={`btn ${getClass("/")}`}
      >
        <House />
        <span>Home</span>
      </Link>

      <Link
        href="/timeline" className={`btn ${getClass("/timeline")}`}
      >
        <History />
        <span>Timeline</span>
      </Link>

      <Link
        href="/stats" className={`btn ${getClass("/stats")}`}
      >
        <ChartLine />
        <span>Stats</span>
      </Link>
    </div>
  </div>
</div>
    </>
  );
};

export default NavBar;