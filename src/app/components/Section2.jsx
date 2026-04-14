import Image from 'next/image';
import { BellRing, Archive, Trash, Phone, MessageSquareMore, Video } from 'lucide-react';

const Section2 = () => {
  return (
    <div className='my-10 mx-auto flex-col md:flex-row flex md:items-center gap-3.5'>
      <div className='md:flex-1 text-center rounded-2xl space-y-3.5'>
        <div className='bg-white py-6 space-y-2.5'>
          <Image src="https://randomuser.me/api/portraits/women/33.jpg" alt="User Avatar" width={100} height={100} className="w-16 h-16 rounded-full object-cover mx-auto" />
        <div className='rounded-4xl mx-auto w-22 bg-[#EFAD44] text-center py-1.5 text-white'>Work</div>
        <div className='rounded-4xl w-15 mx-auto text-center py-1.5 bg-[#CBFADB]'>Work</div>
        <p className='text-[#64748B] font-bold text-[14px]'> {`"Former colleague, great mentor"`} </p>
        <p className='text-[#64748B]'>Preferred: email</p>
        </div>
        <div className='bg-white'>
          <h4 className='text-[18px] font-semibold text-center py-4 flex items-center justify-center gap-2'><BellRing /> <span>Snooze 2 weeks</span></h4>
        </div>
        <div className='bg-white'>
          <h4 className='text-[18px] font-semibold text-center py-4 flex items-center justify-center gap-2'><Archive /> Archive</h4>
        </div>
        <div className='bg-white text-red-500'>
          <h4 className='text-[18px] font-semibold text-center py-4 flex items-center justify-center gap-2'><Trash /> Delete</h4>
        </div>
      </div>
      <div className='md:flex-3 flex flex-col gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='text-center space-y-2.5 rounded-2xl p-8 bg-white'>
            <h4 className='text-xl font-semibold'>62</h4>
            <p className='text-[#64748B]'>Days Since Contact</p>
          </div>
          <div className='text-center space-y-2.5 rounded-2xl p-8 bg-white'>
            <h4 className='text-xl font-semibold'>30</h4>
            <p className='text-[#64748B]'>Goal (Days)</p>
          </div>
          <div className='text-center space-y-2.5 rounded-2xl p-8 bg-white'>
            <h4 className='text-xl font-semibold'>Feb 27, 2026</h4>
            <p className='text-[#64748B]'>Next Due</p>
          </div>
        </div>
        <div className='bg-white p-4 rounded-2xl'>
          <div className='flex items-center justify-between'>
            <h2 className='text-[18px] font-semibold'>Relationship Goal</h2>
            <button className='btn font-semibold'>Edit</button>
          </div>
          <h4 className='text-[18px] text-left'><span className='text-[#64748B] font-medium'>Connect every</span><span className='text-black font-bold'> 30 days</span></h4>
        </div>
        <div className='bg-white p-6 rounded-2xl'>
          <h4 className='text-[18px] text-left font-semibold'>Quick Check-In</h4>
          <div className='grid grid-cols-3 gap-5'>
          <div className='flex flex-col justify-center items-center space-y-2.5 rounded-2xl p-8 bg-[#F8FAFC]'>
            <h4 className='text-[17px] font-semibold'><Phone /></h4>
            <p className='font-medium text-[14px]'>Call</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2.5 rounded-2xl p-8 bg-[#F8FAFC]'>
            <h4 className='text-xl font-semibold'><MessageSquareMore /></h4>
            <p className='font-medium text-[14px]'>Text</p>
          </div>
          <div className='flex flex-col justify-center items-center space-y-2.5 rounded-2xl p-8 bg-[#F8FAFC]'>
            <h4 className='text-xl font-semibold'><Video /></h4>
            <p className='font-medium text-[14px]'>Video</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;