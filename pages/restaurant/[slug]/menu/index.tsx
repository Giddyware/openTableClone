import Link from "next/link";

const RestaurantMenu = () => {
  return (
    <main className="w-screen min-h-screen bg-gray-100">
      <main className="m-auto bg-white max-w-screen-2xl">
        {/* NAVBAR */}
        <nav className="flex justify-between p-2 bg-white">
          <Link href="/" className="text-2xl font-bold text-gray-700">
            {" "}
            OpenTable{" "}
          </Link>
          <div>
            <div className="flex">
              <button className="p-1 px-4 mr-3 text-white bg-blue-400 border rounded">
                Sign in
              </button>
              <button className="p-1 px-4 border rounded">Sign up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */} {/* HEADER */}
        <div className="overflow-hidden h-96">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-center text-white text-7xl captitalize text-shadow">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex items-start justify-between w-2/3 m-auto 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <nav className="flex pb-2 border-b text-reg">
              <Link href="/restaurant/milestone-grill" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/milestone-grill/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* RESAURANT NAVBAR */} {/* MENU */}
            <main className="mt-5 bg-white">
              <div>
                <div className="pb-1 mt-4 mb-1">
                  <h1 className="text-4xl font-bold">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <div className=" border rounded p-3 w-[49%] mb-3">
                    <h3 className="text-lg font-bold">Surf and Turf</h3>
                    <p className="mt-1 text-sm font-light">
                      A well done steak with lobster and rice
                    </p>
                    <p className="mt-7">$80.00</p>
                  </div>
                  {/* MENU CARD */}
                </div>
              </div>
            </main>
            {/* MENU */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
};
export default RestaurantMenu;
