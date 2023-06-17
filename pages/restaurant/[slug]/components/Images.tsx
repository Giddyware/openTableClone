const Images = () => {
  return (
    <div>
      <h1 className="pb-5 mt-10 text-3xl font-bold border-b mb-7">5 photos</h1>
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
  );
};
export default Images;
