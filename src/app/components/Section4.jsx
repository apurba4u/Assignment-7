"use client";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const getInteractionCounts = () => {
  const logs = JSON.parse(localStorage.getItem("contact_logs") || "[]");

  return {
    call: logs.filter((log) => log.type === "call").length,
    text: logs.filter((log) => log.type === "text").length,
    video: logs.filter((log) => log.type === "video").length,
  };
};

const Section4 = () => {
  const [counts, setCounts] = useState({
    call: 0,
    text: 0,
    video: 0,
  });

  useEffect(() => {
    const data = getInteractionCounts();
    setCounts(data);
  }, []);

  const total = counts.call + counts.text + counts.video;

  // if (total === 0) return null;

  const chartData = [
    { name: "Call", value: counts.call, color: "#1f4d3a" },
    { name: "Text", value: counts.text, color: "#7c3aed" },
    { name: "Video", value: counts.video, color: "#22c55e" },
  ];

  return (
    <div className="mt-14 mb-10 w-10/12 mx-auto space-y-5">
      <h4 className="text-4xl font-bold text-left">Friendship Analytics</h4>
      {total === 0 ? (
        <p className="text-gray-400">No interactions yet</p>
      ) : (
        <div className="bg-white">
          <h2 className="font-medium text-[17px] text-left pt-5 pl-3.5">
            By Interaction Type
          </h2>
          <div className="py-6 flex justify-center items-center">
            <PieChart width={200} height={200}>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={6}
                cornerRadius={10}
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} interactions`} />
            </PieChart>
          </div>
          <div className="flex items-center justify-center gap-6 text-[#64748B] pb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span>Text</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1f4d3a]"></span>
              <span>Call</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span>Video</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section4;
