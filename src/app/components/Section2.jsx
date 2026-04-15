"use client";
import Image from 'next/image';
import { BellRing, Archive, Trash, Phone, MessageSquareMore, Video } from 'lucide-react';
import { toast } from 'react-toastify';

const Section2 = ({props}) => {
  const {
  id,
  name,
  picture,
  email,
  status,
  tags,
  bio,
  connect_goal_days,
  relationship,
  tracking
} = props;

const getStatusClass = (status) => {
    switch (status) {
      case "overdue":
        return "badge badge-error";
      case "almost due":
        return "badge badge-warning";
      case "on-track":
        return "badge badge-success";
      default:
        return "badge badge-default";
    }
  };
  const handleAction = (type) => {
    const key = "contact_logs";

    // previous data load
    const existing = JSON.parse(localStorage.getItem(key)) || [];

    // new entry
    const newLog = {
      name,
      type, // call / text / video
      time: new Date().toISOString(),
    };

    // save
    const updated = [...existing, newLog];
    localStorage.setItem(key, JSON.stringify(updated));

    // toast
    toast.success(`${type.toUpperCase()} logged for ${name}`);
  };
  return (
    <div className='my-10 mx-auto flex-col md:flex-row flex md:items-center gap-3.5'>
      <div className='md:flex-1 text-center rounded-2xl space-y-3.5'>
        <div className='bg-white py-6 space-y-2.5'>
          <Image src={picture} alt={name} width={100} height={100} className="w-16 h-16 rounded-full object-cover mx-auto" />
          <h4 className="text-xl font-bold">{name}</h4>
        <div
        className={`mx-auto rounded-2xl text-white ${getStatusClass(status)}`}
      >
        {status}
      </div>
        <div className='flex flex-col md:flex-row items-center w-43 mx-auto gap-0.5'>
          {tags.map((tag, index) => (
          <div
            key={index}
            className="rounded-4xl w-20 mx-auto p-1.5 bg-[#CBFADB] text-xs flex justify-center items-center"
          >
            <span>{tag}</span>
          </div>
        ))}
        </div>
        <p className='text-[#64748B] font-bold text-[14px]'> {relationship.note} </p>
        <p className='text-[#64748B]'>Preferred: {relationship.preferred_contact}</p>
        </div>
        <div className='bg-white'>
          <h4 className='text-[18px] font-semibold text-center py-4 flex items-center justify-center gap-2 btn'><BellRing /> <span>Snooze 2 weeks</span></h4>
        </div>
        <div className='bg-white'>
          <h4 className='text-[18px] font-semibold text-center py-4 flex items-center justify-center gap-2 btn'><Archive /> Archive</h4>
        </div>
        <div className='bg-white text-red-500'>
          <h4 className='text-[18px] font-semibold text-center py-4 flex items-center justify-center gap-2 btn'><Trash /> Delete</h4>
        </div>
      </div>
      <div className='md:flex-3 flex flex-col gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='text-center space-y-2.5 rounded-2xl p-8 bg-white'>
            <h4 className='text-xl font-semibold'>{tracking.days_since_contact}</h4>
            <p className='text-[#64748B]'>Days Since Contact</p>
          </div>
          <div className='text-center space-y-2.5 rounded-2xl p-8 bg-white'>
            <h4 className='text-xl font-semibold'>{tracking.goal_days}</h4>
            <p className='text-[#64748B]'>Goal (Days)</p>
          </div>
          <div className='text-center space-y-2.5 rounded-2xl p-8 bg-white'>
            <h4 className='text-xl font-semibold'>{tracking.next_due}</h4>
            <p className='text-[#64748B]'>Next Due</p>
          </div>
        </div>
        <div className='bg-white p-4 rounded-2xl'>
          <div className='flex items-center justify-between'>
            <h2 className='text-[18px] font-semibold'>Relationship Goal</h2>
            <button className='btn font-semibold'>Edit</button>
          </div>
          <h4 className='text-[18px] text-left'><span className='text-[#64748B] font-medium'>Connect every</span><span className='text-black font-bold'> {connect_goal_days} days</span></h4>
        </div>
        <div className='bg-white p-6 rounded-2xl'>
          <h4 className='text-[18px] text-left font-semibold'>Quick Check-In</h4>
          <div className='grid grid-cols-3 gap-5'>
          <button onClick={() => handleAction("call")} className='flex flex-col justify-center items-center space-y-2.5 rounded-2xl p-8 bg-[#F8FAFC]'>
            <h4 className='text-[17px] font-semibold '><Phone /></h4>
            <p className='font-medium text-[14px]'>Call</p>
          </button>
          <button onClick={() => handleAction("text")} className='flex flex-col justify-center items-center space-y-2.5 rounded-2xl p-8 bg-[#F8FAFC]'>
            <h4 className='text-xl font-semibold'><MessageSquareMore /></h4>
            <p className='font-medium text-[14px]'>Text</p>
          </button>
          <button onClick={() => handleAction("video")} className='flex flex-col justify-center items-center space-y-2.5 rounded-2xl p-8 bg-[#F8FAFC]'>
            <h4 className='text-xl font-semibold'><Video /></h4>
            <p className='font-medium text-[14px]'>Video</p>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;