import { useState } from "react";

export const useCounter = (prop:number) => {

    const [counter, setCounter] = useState(prop);

    const handleAddition = () => {
        setCounter(counter + 1);
    }
    const handleSubstraction = () => {
        setCounter( prevState =>  prevState - 1 );
    }
    const handleReset = ()=> {
        setCounter(prop);
    }

  return {
    counter,
    handleAddition,
    handleReset,
    handleSubstraction
  };
}

