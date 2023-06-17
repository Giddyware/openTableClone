import Link from "next/link";

const RestaurantNavBar = () => {
  return (
    <nav className="flex pb-2 border-b text-reg">
      <Link href="/restaurant/milestone-grill" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milestone-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
};
export default RestaurantNavBar;
