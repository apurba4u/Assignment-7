"use client";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "A", value: 40, color: "#1f4d3a" }, // dark green
  { name: "B", value: 30, color: "#7c3aed" }, // purple
  { name: "C", value: 20, color: "#22c55e" }, // green
];

const Section4 = () => {
  return (
    <div className='mt-14 mb-10 w-10/12 mx-auto space-y-5'>
      <h4 className='text-4xl font-bold text-left'>Friendship Analytics</h4>
      <div className='bg-white'>
        <h2 className='font-medium text-[17px] text-left pt-5 pl-3.5'>By Interaction Type</h2>
        <div className='py-6 flex justify-center items-center'>
          <PieChart width={200} height={200}>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={60} 
        outerRadius={80}
        paddingAngle={6}
        cornerRadius={10}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
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
    </div>
  );
};

export default Section4;