"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center space-y-4">
      <h1 className="text-6xl font-bold text-[#244D3F]">404</h1>

      <h2 className="text-2xl font-semibold">
        Oops! Page not found
      </h2>

      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>

      <Link href="/">
        <button className="px-6 py-2 bg-[#244D3F] text-white rounded-lg">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;