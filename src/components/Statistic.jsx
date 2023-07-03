import React, { useState } from "react";

const Statistic = ({ data }) => {
  const [type, setType] = useState("vn");
  return (
    <div id="statistics" className="">
      <div className="flex flex-col items-center my-4">
        <p className="mb-4 text-3xl font-bold text-purple">
          Corona Virus Statistics
        </p>
        <p className="text-xl text-gray-500">
          The next data is updated continuously and reliably
        </p>
      </div>
      <div className="mt-14">
        <div className="flex justify-center text-2xl font-bold   ">
          <div
            className={`mr-4 text-2xl cursor-pointer  ${
              type === "world" ? "text-xl text-gray-500" : "text-purple"
            }`}
            onClick={() => setType("vn")}
          >
            Viet Nam
          </div>
          <div className="text-gray-500 text-3xl">/</div>
          <div
            className={`ml-4 text-2xl cursor-pointer  ${
              type === "vn" ? "text-xl text-gray-500" : "text-purple"
            }`}
            onClick={() => setType("world")}
          >
            World
          </div>
        </div>
        {type === "vn" && (
          <div className="mx-72 flex justify-between my-10   ">
            <div className="w-[300px] h-[80px] bg-red-200 text-center p-1 ">
              <p className="text-base font-semibold">Active Case</p>
              <p className="text-xl font-bold text-red-600">
                {data?.total.internal.cases}
              </p>
              <div className="flex justify-center">
                <p className="text-xs  p-0.5">Last 24 hours </p>
                <p className=" text-xs font-bold px-1">
                  +{data?.today.internal.cases}
                </p>
              </div>
            </div>
            <div className="w-[300px] h-[80px] bg-green-200 text-center p-1">
              {" "}
              <p className="text-base font-semibold">Recovered Case</p>
              <p className="text-xl font-bold text-green-600">
                {data?.total.internal.recovered}
              </p>
            </div>
            <div className="w-[300px] h-[80px] bg-gray-200 text-center p-1">
              {" "}
              <p className="text-base font-semibold">Death Case</p>
              <p className="text-xl font-bold text-gray-600">
                {" "}
                {data?.total.internal.death}
              </p>
            </div>
          </div>
        )}
        {type === "world" && (
          <div className="mx-72 flex justify-between my-10   ">
            <div className="w-[300px] h-[80px] bg-red-200 text-center p-1 ">
              <p className="text-base font-semibold">Active Case</p>
              <p className="text-xl font-bold text-red-600">
                {" "}
                {data?.total.world.cases}
              </p>
              <p className="text-xs">Last 24 hours</p>
            </div>
            <div className="w-[300px] h-[80px] bg-green-200 text-center p-1">
              {" "}
              <p className="text-base font-semibold">Recovered Case</p>
              <p className="text-xl font-bold text-green-600">
                {" "}
                {data?.total.world.recovered}
              </p>
            </div>
            <div className="w-[300px] h-[80px] bg-gray-200 text-center p-1">
              {" "}
              <p className="text-base font-semibold">Death Case</p>
              <p className="text-xl font-bold text-gray-600">
                {" "}
                {data?.total.world.death}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistic;
