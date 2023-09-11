import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import Add from '../assets/icons/add.svg'
import Sub from '../assets/icons/sub.svg'

 const Accordion = ({ data, height, width, keyAttr, valAttr }) => {
  const [current, setCurrent] = useState(null);
   const classNames = (...classes) => classes.filter(Boolean).join(" ");
  const select = useCallback(
    (i) => {
      if (current === i) return setCurrent(null);
      setCurrent(i);
    },
    [current]
  );

  return (
    <div
      className="flex flex-col items-center justify-center divide-y-2
        text-black bg-white dark:text-white xl:px-80 lg:px-30 md:px-20 max-sm:px-2 sm:text-sm"
      
    >
      {data.map((item, index) => (
        <div className="flex flex-col text-black " key={index}>
          <div
            className="text-xl flex items-center text-left justify-between cursor-pointer group-hover:text-neutral-400 p-6"
            onClick={() => select(index)}
          >
            <span>{item[keyAttr]}</span>
            <span>{current === index ? 
            <img src={Sub}/>
            :    <img src={Add}/>}</span>
          </div>
          <div
            className={classNames(
              "transition-all duration-500 ease-in-out overflow-auto mx-2 text-left text-gray-500 text-base font-normal",
              current === index ? "p-2 " : "p-0"
            )}
            style={{ maxHeight: current === index ? height : 0 }}
          >
            {item[valAttr]}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number,
  keyAttr: PropTypes.string,
  valAttr: PropTypes.string,
};

Accordion.defaultProps = {
  width: 400,
  height: 200,
  keyAttr: "title",
  valAttr: "content",
};


export default Accordion