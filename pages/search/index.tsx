import Link from "next/link";

const Search = () => {
  return (
    <div>
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
          {/* HEADER */}
          <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
            <div className="flex justify-center py-3 m-auto text-lg text-left">
              <input
                className="rounded  mr-3 p-2 w-[450px]"
                type="text"
                placeholder="State, city or town"
              />
              <button className="py-2 text-white bg-red-600 rounded px-9">
                Let's go
              </button>
            </div>
          </div>
          <div className="flex items-start justify-between w-2/3 py-4 m-auto">
            {/* SEARCH SIDE BAR */}
            <div className="w-1/5">
              <div className="pb-4 border-b">
                <h1 className="mb-2">Region</h1>
                <p className="font-light text-reg">Toronto</p>
                <p className="font-light text-reg">Ottawa</p>
                <p className="font-light text-reg">Montreal</p>
                <p className="font-light text-reg">Hamilton</p>
                <p className="font-light text-reg">Kingston</p>
                <p className="font-light text-reg">Niagara</p>
              </div>
              <div className="pb-4 mt-3 border-b">
                <h1 className="mb-2">Cuisine</h1>
                <p className="font-light text-reg">Mexican</p>
                <p className="font-light text-reg">Italian</p>
                <p className="font-light text-reg">Chinese</p>
              </div>
              <div className="pb-4 mt-3">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                  <button className="w-full p-2 font-light border rounded-l text-reg">
                    $
                  </button>
                  <button className="w-full p-2 font-light border-t border-b border-r text-reg">
                    $$
                  </button>
                  <button className="w-full p-2 font-light border-t border-b border-r rounded-r text-reg">
                    $$$
                  </button>
                </div>
              </div>
            </div>
            {/* SEARCH SIDE BAR */}
            <div className="w-5/6">
              {/* RESAURANT CAR */}
              <div className="flex pb-5 border-b">
                <img
                  src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                  alt=""
                  className="rounded w-44"
                />
                <div className="pl-5">
                  <h2 className="text-3xl">Aiāna Restaurant Collective</h2>
                  <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                  </div>
                  <div className="mb-9">
                    <div className="flex font-light text-reg">
                      <p className="mr-4">$$$</p>
                      <p className="mr-4">Mexican</p>
                      <p className="mr-4">Ottawa</p>
                    </div>
                  </div>
                  <div className="text-red-600">
                    <a href="">View more information</a>
                  </div>
                </div>
              </div>
              {/* RESAURANT CAR */}
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};
export default Search;
