import Link from "next/link";

const RestaurantCard = () => {
  return (
    <div className="w-64 m-3 overflow-hidden border rounded cursor-pointer h-72">
      <Link href="/restaurant/milestones-grill">
        <img src="" alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-zxl">Lorem ipsum dolor</h3>
          <div className="flex items-start">
            <div className="flex mb-2">***</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex gap-3 font-light capitalize text-reg">
            <p className="">Mexican</p>
            <p className="">$$$$</p>
            <p className="">Lagos</p>
          </div>
          <p className="mt-1 text-sm font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};
export default RestaurantCard;
