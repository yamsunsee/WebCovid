import React from "react";
import LineChart from "../Charts/LineChart.jsx";
import { useSearch } from "../hooks/useSearch";

const Overview = ({ data }) => {
  const titles = ["Tỉnh/TP", "Tổng số ca", "24h qua", "Hồi phục", "Tử vong"];
  const [setSearch, filteredTP] = useSearch(data?.locations);

  return (
    <div id="overview" className="my-32  mx-10">
      <div className=" my-4 flex flex-col items-center  ">
        <p className=" mb-4 text-3xl font-bold text-purple">
          Corona Virus Overview
        </p>
        <p className="text-xl text-gray-500">
          Constantly updating nationwide covid information and reliable news
        </p>
      </div>
      <div className="mx-28">
        <div className="w-1/2 flex items-center justify-between">
          <p className=" px-2 text-2xl text-purple font-bold border-l-4 border-red-600 ">
            National epidemic situation
          </p>
          <input
            type="text"
            placeholder="Search Tỉnh/TP..."
            className="w-60 h-7 border border-gray-500 rounded-full outline-none px-4 text-sm "
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="flex justify-between">
          {/* table */}
          <div className="h-96   m-4 border border-gray-300  custom-scrollbar overflow-auto  ">
            {/* head table */}
            <div className=" grid grid-cols-5 mx-8 font-bold  sticky top-0 bg-white  ">
              {titles.map((item) => (
                <div className=" py-3 text-center" key={item}>
                  {item}
                </div>
              ))}
            </div>

            {/* body table */}

            {filteredTP.map((location, index) => (
              <div
                className="grid grid-cols-5 mx-8 border-t border-gray-300 "
                key={index}
              >
                <div className=" py-3 text-center">{location.name}</div>
                <div className="  py-3 text-center">{location.cases}</div>
                <div className="  py-3 text-center text-red-500">
                  {" "}
                  +{location.casesToday}
                </div>
                <div className="  py-3 text-center">{location.treating}</div>
                <div className="  py-3 text-center">{location.death}</div>
              </div>
            ))}
          </div>
          {/* chart */}
          <div className="w-1/2  ">
            <LineChart data2={data}></LineChart>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Overview;
