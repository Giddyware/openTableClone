import Link from "next/link";

const RestaurantNavBar = ({ slug }: { slug: string }) => {
  return (
    <nav className="flex pb-2 border-b text-reg">
      <Link href={`/restaurant/${slug}`} className="mr-7">
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
};
export default RestaurantNavBar;
