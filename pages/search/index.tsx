import Link from "next/link";
import NavBar from "../components/NavBar";
import Header from "./components/Header";
import SearchSideBar from "./components/SeachSideBar";
import RestaurantCard from "./components/RestaurantCard";

const Search = () => {
  return (
    <div>
      <main className="w-screen min-h-screen bg-gray-100">
        <main className="m-auto bg-white max-w-screen-2xl">
          <NavBar />
          {/* HEADER */}
          <Header />
          <div className="flex items-start justify-between w-2/3 py-4 m-auto">
            <SearchSideBar />
            <div className="w-5/6">
              <RestaurantCard />
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};
export default Search;
