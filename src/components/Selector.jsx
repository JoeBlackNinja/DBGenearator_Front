import { useContext } from "react";

import ThemeContext from '../storage/storage';

const Selector = (props) => {

  const context = useContext(ThemeContext);

  return (    
      <div className="w-full flex flex-row items-center justify-around mt-4">        
        <input
            className="h-10 rounded-md w-5/12"
            placeholder={props.placeholderMessage}
        />
        <select className="h-10 rounded-md w-5/12">
          {context.parameters.map((parametro) => (
            <option
              key={parametro}
              value={parametro}
              defaultValue={props.placeholderMessage}
            >{parametro}</option>
          ))}
        </select>
        <button
          className="h-10 text-2xl font-bold rounded-md w-1/12"
        >X</button>
      </div>    
  );
};

export default Selector;
