import Image from 'next/image';

const Card = ({props}) => {
  const {name, picture, email, days_since_contact, status, tags, bio} = props;
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
  return (
        <div className='py-6 bg-white flex flex-col gap-3.5 rounded-3xl shadow-sm'>
          <Image
  src={picture} alt="User Avatar" width={64} height={64} className="rounded-full object-cover mx-auto"/>
  <h4 className='text-xl font-bold'>{name}</h4>
  <p className='text-[#64748B]'>{days_since_contact}d ago</p>
  <div className='flex items-center gap-0.5 justify-center w-41 mx-auto'>
    {
    tags.map((tag, index) => (
      <div key={index} className='rounded-4xl w-20 mx-auto p-1.5 bg-[#CBFADB] text-xs flex justify-center items-center'><span>{tag}</span></div>
    ))
  }
  </div>
  <div className={`mx-auto rounded-2xl text-white ${getStatusClass(status)}`}>{status}</div>
        </div>
  );
};

export default Card;

{/* <div className='rounded-4xl w-15 mx-auto text-center py-1.5 bg-[#CBFADB]'>{tags[0]}</div> */}

// bio
// : 
// "Freelance design client."
// email
// : 
// "aisha@example.com"
// id
// : 
// 5
// name
// : 
// "Aisha Patel"
// picture
// : 
// "https://randomuser.me/api/portraits/women/5.jpg"
// status
// : 
// "overdue"
// tags
// : 
// (2) ['client', 'design']