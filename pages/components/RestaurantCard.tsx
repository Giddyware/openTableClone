import { IRestaurant } from "@/@types/models";
import Link from "next/link";
import Price from "./Price";
interface Props {
  restaurant: IRestaurant;
}
const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <div className="w-64 m-3 overflow-hidden border rounded cursor-pointer h-72">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={restaurant?.main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-zxl">{restaurant?.name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex gap-3 font-light capitalize text-reg">
            <p className="">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p className="">{restaurant.location.name}</p>
          </div>
          <p className="mt-1 text-sm font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};
export default RestaurantCard;
