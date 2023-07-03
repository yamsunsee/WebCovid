import React from "react";

const Protect = () => {
  return (
    <div id="protect" className="my-28 ">
      <div className=" my-4 flex flex-col items-center ">
        <p className=" mb-4 text-3xl font-bold text-purple">
          How to Protect YourSelf?
        </p>
        <p className="text-xl text-gray-500">
          Amet minim mollit non deserunt ullamco est sit na coder is medicine
        </p>
      </div>
      <div className="flex justify-between items-center mx-40">
        <div className=" ">
          <p className="my-4 mx-2 text-xl font-bold text-purple">
            You should Do
          </p>
          <div className="my-2 text-gray-600">
            <input type="checkbox" className="mx-2" />
            <label htmlFor="">Have to talk about thid Covid 19 Virus?</label>
          </div>

          <div className="my-2 text-gray-600">
            <input type="checkbox" className="mx-2" />
            <label htmlFor="">Have to talk about thid Covid 19 Virus?</label>
          </div>

          <div className="my-2 text-gray-600">
            <input type="checkbox" className="mx-2" />
            <label htmlFor="">Have to talk about thid Covid 19 Virus?</label>
          </div>
        </div>
        <div className=" ">
          <p className="my-4 mx-2 text-xl font-bold text-purple">
            You should Avoid
          </p>
          <div className="my-2 text-gray-600">
            <input type="checkbox" className="mx-2" />
            <label htmlFor="">Have to talk about thid Covid 19 Virus?</label>
          </div>

          <div className="my-2 text-gray-600">
            <input type="checkbox" className="mx-2" />
            <label htmlFor="">Have to talk about thid Covid 19 Virus?</label>
          </div>

          <div className="my-2 text-gray-600">
            <input type="checkbox" className="mx-2" />
            <label htmlFor="">Have to talk about thid Covid 19 Virus?</label>
          </div>
        </div>
        <div className="">
          <img
            className="w-[350px] h-[310px]"
            src="src/assets/protect.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Protect;
