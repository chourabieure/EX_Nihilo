import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className=" w-full cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="w-full h-[0.1rem] bg-ex_normal_purple opacity-20" />
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-ex_light_purple font-semibold py-4">
          {title}
        </h3>

        {!isActive ? (
          <svg
            className="fill-ex_normal_purple w-5 stroke-[2px] stroke-ex_normal_purple"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
          </svg>
        ) : (
          <svg
            className="fill-ex_normal_purple w-5 stroke-[2px] stroke-ex_normal_purple"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z" />
          </svg>
        )}
      </div>
      <p
        className={`${
          isActive ? "accordion_open" : "accordion_close "
        } overflow-hidden transition-all duration-500 mb-4`}
      >
        {content}
      </p>
    </div>
  );
};

export default Accordion;
