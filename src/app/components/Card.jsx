"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ props }) => {
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

  const router = useRouter()
  return (
    <div onClick={() => router.push(`/cardData/${props.id}`)}
     className="py-6 bg-white flex flex-col gap-3.5 rounded-3xl shadow-sm">
      <Image
        src={picture}
        alt="User Avatar"
        width={64}
        height={64}
        className="rounded-full object-cover mx-auto"
      />
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-[#64748B]">{tracking.days_since_contact}d ago</p>
      <div className="flex items-center gap-1 flex-wrap justify-center mx-auto">
  {tags.map((tag, index) => (
    <div
      key={index}
      className="rounded-4xl px-3 py-1.5 bg-[#CBFADB] text-xs flex justify-center items-center"
    >
      <span className="text-center text-xs">{tag}</span>
    </div>
  ))}
</div>
      <div
        className={`mx-auto rounded-2xl text-white ${getStatusClass(status)} text-[10px] md:text-xs`}
      >
        {status}
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className='rounded-4xl w-15 mx-auto text-center py-1.5 bg-[#CBFADB]'>{tags[0]}</div> */
}

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
