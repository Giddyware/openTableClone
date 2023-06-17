import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="pb-1 mt-4 mb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          <MenuCard />
        </div>
      </div>
    </main>
  );
};
export default Menu;
