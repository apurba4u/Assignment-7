"use client";

import { useEffect, useState } from "react";
import { Phone, Video, MessageCircleMore } from "lucide-react";

const Section3 = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contact_logs") || "[]");

    // sort latest first
    const sorted = data.sort(
      (a, b) => new Date(b.time) - new Date(a.time)
    );

    setLogs(sorted);
  }, []);

  // filter logic
  const filteredLogs =
    filter === "all"
      ? logs
      : logs.filter((log) => log.type === filter);

  // icon select
  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <Phone />;
      case "text":
        return <MessageCircleMore />;
      case "video":
        return <Video />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-16 mb-12 mx-auto space-y-5">
      <h4 className="text-3xl font-bold text-left">Timeline</h4>

      {/* Filter */}
      <div className='w-full flex justify-start'>
  <select
    defaultValue="all"
    onChange={(e) => setFilter(e.target.value)}
    className="select text-[#64748B]"
  >
    <option disabled value="all" className='text-[#64748B]'>
      Filter timeline
    </option>

    <option value="call" className='text-black'>Call</option>
    <option value="text" className='text-black'>Text</option>
    <option value="video" className='text-black'>Video</option>
  </select>
</div>

      {/* Timeline */}
      <div className="space-y-2">
        {filteredLogs.length === 0 ? (
          <p className="text-gray-400">No data found</p>
        ) : (
          filteredLogs.map((log, index) => (
            <div key={index} className="bg-white w-full rounded-xl">
              <div className="flex p-3 items-center">

                {/* Icon */}
                <div className="text-xl">{getIcon(log.type)}</div>

                {/* Content */}
                <div className="ml-4">
                  <h4>
                    <span className="font-semibold capitalize">
                      {log.type}
                    </span>
                    <span className="text-[#64748B]">
                      {" "}with {log.name}
                    </span>
                  </h4>

                  <p className="text-sm text-left text-gray-500">
                    {new Date(log.time).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Section3;