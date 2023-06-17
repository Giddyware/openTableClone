const SearchSideBar = () => {
  return (
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
  );
};
export default SearchSideBar;
