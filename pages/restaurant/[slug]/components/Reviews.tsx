const Reviews = () => {
  return (
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
                  Laurie was on top of everything! Slow night due to the snow
                  storm so it worked in our favor to have more one on one with
                  the staff. Delicious and well worth the money.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* REVIEW CARD */}
      </div>
    </div>
  );
};
export default Reviews;
