import { Handshake, MessageCircleMore, Phone, Video } from 'lucide-react';

const Section3 = () => {
  return (
    <div className='mt-16 mb-12 mx-auto space-y-5'>
      <h4 className='text-3xl font-bold text-left'>Timeline</h4>
      <div className='w-full flex justify-start'>
        <select defaultValue="Filter timeline" className="select text-[#64748B]">
        <option disabled={true} className='text-[#64748B]'>Filter timeline</option>
        <option className='text-black'>Crimson</option>
        <option className='text-black'>Amber</option>
        <option className='text-black'>Velvet</option>
      </select>
      </div>
      <div className='space-y-2'>
        <div className='bg-white w-full'>
          <div className='flex p-2.5 items-center'>
            <div className='text-[20px] font-bold text-amber-400'>
              <Handshake />
            </div>
            <div className='space-y-0.5 flex flex-col ml-4'>
              <h4><span className='text-[17px] font-semibold'>Meetup</span><span className='text-[#64748B] font-medium'>  with Tom Baker</span></h4>
              <p className='text-[14px] font-semibold text-left text-gray-500'>March 29, 2026</p>
            </div>
          </div>
        </div>
        <div className='bg-white w-full'>
          <div className='flex p-2.5 items-center'>
            <div className='text-[20px] font-bold text-shadow-black'>
              <Phone />
            </div>
            <div className='space-y-0.5 flex flex-col ml-4'>
              <h4><span className='text-[17px] font-semibold'>Call</span><span className='text-[#64748B] font-medium'>  with Tom Baker</span></h4>
              <p className='text-[14px] font-semibold text-left text-gray-500'>March 29, 2026</p>
            </div>
          </div>
        </div>
        <div className='bg-white w-full'>
          <div className='flex p-2.5 items-center'>
            <div className='text-[20px] font-bold text-black'>
              <Video />
            </div>
            <div className='space-y-0.5 flex flex-col ml-4'>
              <h4><span className='text-[17px] font-semibold'>Video</span><span className='text-[#64748B] font-medium'>  with Tom Baker</span></h4>
              <p className='text-[14px] font-semibold text-left text-gray-500'>March 29, 2026</p>
            </div>
          </div>
        </div>
        <div className='bg-white w-full'>
          <div className='flex p-2.5 items-center'>
            <div className='text-[20px] font-bold text-gray-500'>
              <MessageCircleMore />
            </div>
            <div className='space-y-0.5 flex flex-col ml-4'>
              <h4><span className='text-[17px] font-semibold'>Text</span><span className='text-[#64748B] font-medium'>  with Tom Baker</span></h4>
              <p className='text-[14px] font-semibold text-left text-gray-500'>March 29, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;