import NavBar from "../../../components/NavBar";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

const RestaurantMenu = () => {
  return (
    <main className="w-screen min-h-screen bg-gray-100">
      <main className="m-auto bg-white max-w-screen-2xl">
        <NavBar />

        <Header />

        <div className="flex items-start justify-between w-2/3 m-auto 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Menu />
          </div>
        </div>
      </main>
    </main>
  );
};
export default RestaurantMenu;
