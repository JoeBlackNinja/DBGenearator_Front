import { useContext } from "react";

import ThemeContext from '../storage/storage';

const ButtonsResume = () => {

  const context = useContext(ThemeContext);

  const addField = (e) => {
    e.preventDefault();
    context.addParameters()
    console.log(context.parameters);
  } 

  return (
        <div className="flex flex-row items-center justify-around mt-4 w-full"> 
          <button
            className="bg-gradient-to-r from-indigo-400 to-pink-500
              text-3xl font-bold rounded-md w-1/6"
              onClick={(e) => addField(e)}
          >
            +
          </button>
          <button
            className="bg-gradient-to-r from-indigo-400 to-pink-500
              text-3xl font-bold rounded-md w-1/6"
          >
            -
          </button>
          <button
            className="bg-gradient-to-r from-purple-400 to-pink-500 
              font-semibold text-3xl rounded-md w-2/6"
            type="submit"
          >
            Generate
          </button>
        </div> 
  );
};

export default ButtonsResume;
