

const Banner2 = () => {
  return (
    <div className="my-10 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3.5">
        <div className="p-8 text-center bg-white">
          <h4 className="text-2xl font-bold">10</h4>
          <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="p-8 text-center bg-white">
          <h4 className="text-2xl font-bold">10</h4>
          <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="p-8 text-center bg-white">
          <h4 className="text-2xl font-bold">10</h4>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="p-8 text-center bg-white">
          <h4 className="text-2xl font-bold">10</h4>
          <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>
      <div className="divider my-4"></div>
    </div>
  );
};

export default Banner2;