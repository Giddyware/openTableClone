import Link from "next/link";

const RestaurantDetails = () => {
  return (
    <main className="w-screen min-h-screen bg-gray-100">
      <main className="m-auto bg-white max-w-screen-2xl">
        {/* NAVBAR */}
        <nav className="flex justify-between p-2 bg-white">
          <Link href="/" className="text-2xl font-bold text-gray-700">
            OpenTable
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
            <h1 className="text-center text-white text-7xl capitalize text-shadow">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex items-start justify-between w-2/3 m-auto 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <nav className="flex pb-2 border-b text-reg">
              <Link href="/restaurant/milestone-grill" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/milestone-grill/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* RESAURANT NAVBAR */} {/* TITLE */}
            <div className="pb-6 mt-4 border-b">
              <h1 className="text-6xl font-bold">Milesstone Grill</h1>
            </div>
            {/* TITLE */} {/* RATING */}
            <div className="flex items-end">
              <div className="flex items-center mt-2 ratings">
                <p>*****</p>
                <p className="ml-3 text-reg">4.9</p>
              </div>
              <div>
                <p className="ml-4 text-reg">600 Reviews</p>
              </div>
            </div>
            {/* RATING */} {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                The classics you love prepared with a perfect twist, all served
                up in an atmosphere that feels just right. That’s the Milestones
                promise. So, whether you’re celebrating a milestone, making the
                most of Happy Hour or enjoying brunch with friends, you can be
                sure that every Milestones experience is a simple and perfectly
                memorable one.
              </p>
            </div>
            {/* DESCRIPTION */} {/* IMAGES */}
            <div>
              <h1 className="pb-5 mt-10 text-3xl font-bold border-b mb-7">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className="w-56 mb-1 mr-1 h-44"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
                  alt=""
                />
                <img
                  className="w-56 mb-1 mr-1 h-44"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
                  alt=""
                />
                <img
                  className="w-56 mb-1 mr-1 h-44"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
                  alt=""
                />
                <img
                  className="w-56 mb-1 mr-1 h-44"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
                  alt=""
                />
                <img
                  className="w-56 mb-1 mr-1 h-44"
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* IMAGES */} {/* REVIEWS */}
            <div>
              <h1 className="pb-5 mt-10 text-3xl font-bold mb-7 border-b">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="flex flex-col items-center w-1/6">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-400 rounded-full">
                        <h2 className="text-2xl text-white">MJ</h2>
                      </div>
                      <p className="text-center">Micheal Jordan</p>
                    </div>
                    <div className="w-5/6 ml-10">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Laurie was on top of everything! Slow night due to the
                          snow storm so it worked in our favor to have more one
                          on one with the staff. Delicious and well worth the
                          money.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="pb-2 font-bold text-center border-b">
                <h4 className="text-lg mr-7">Make a Reservation</h4>
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="">Party size</label>
                <select name="" className="py-3 font-light border-b" id="">
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 font-light border-b w-28"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="py-3 font-light border-b">
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="w-full h-16 px-4 font-bold text-white bg-red-600 rounded">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}
        {/* RESERVATION
      CARD PORTION */}
      </main>
    </main>
  );
};
export default RestaurantDetails;
