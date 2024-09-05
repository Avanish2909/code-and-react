import { createContext, useState } from "react";
import Counter from "../components/Counter";

export const ConterContext = createContext(null);

export const CounterProvider = (props) =>  {

    const [count, setCount] = useState(0);

    return (
        <ConterContext.Provider value={{count, setCount, name: "Avanish"}}>
            {props.children}
        </ConterContext.Provider>
    );
};
