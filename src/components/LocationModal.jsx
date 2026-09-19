import { X } from "lucide-react";
import { useState } from "react";

const LocationModal = ({ onChang }) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = city.trim();
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className=" w-md h-90 bg-gray-500 shadow-2xl p-5 ">
        <div className="flex justify-between mb-2">
          <h2 className=" text-xl font-medium">where are you today</h2>
          <button
            onClick={onChang}
            className="cursor-pointer w-10 h-10 rounded-full bg-gray-950 text-white flex justify-center items-center"
          >
            <X />
          </button>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              className=" block w-full p-2 border run"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="inter your cuntry"
            />
            <button
              onClick={() => setClick(true)}
              type="button"
              className=" w-full cursor-pointer py-3 px-5 bg-amber-600 rounded-2xl text-white"
            >
              get weather
            </button>
          </form>
        </div>
        <div>
          <div>or </div>
          <button
            onClick={() => setClick(true)}
            type="submit"
            className=" w-full cursor-pointer py-3 px-5 bg-amber-600 rounded-2xl text-white"
          >
            use my location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
