import { useState } from "react";
import LocationModal from "../components/LocationModal";

const Home = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-blue-300">
        NextLevel <span className=" text-blue-400">weather</span>{" "}
      </h1>
      <p className=" text-gray-300 py-4">
        check in weather today in next level
      </p>
      <div>
        <button
          onClick={() => setClick(true)}
          type="button"
          className="cursor-pointer py-3 px-5 bg-amber-600 rounded-2xl text-white"
        >
          check weather
        </button>
        {click && <LocationModal onChang={() => setClick(false)} />}
      </div>
    </div>
  );
};

export default Home;
