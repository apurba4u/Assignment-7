import Image from 'next/image';
import data from '../../../public/data.json';

const CardSection = () => {
  const contacts = data.contacts
  console.log(contacts)
  
  return (
    <div className='my-9 mx-auto'>
      <h2 className='text-xl font-bold text-left my-3.5'>Your Friends</h2>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-6'>
        <div className='py-6 bg-white flex flex-col gap-3.5 rounded-3xl shadow-sm'>
          <Image
  src="https://randomuser.me/api/portraits/women/33.jpg" alt="User Avatar" width={64} height={64} className="rounded-full object-cover mx-auto"/>
  <h4 className='text-xl font-bold'>David Kim</h4>
  <p className='text-[#64748B]'>62d ago</p>
  <div className='rounded-4xl w-15 mx-auto text-center py-1.5 bg-[#CBFADB]'>Work</div>
  <div className='rounded-4xl mx-auto w-22 bg-[#EFAD44] text-center py-1.5 text-white'>Work</div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;