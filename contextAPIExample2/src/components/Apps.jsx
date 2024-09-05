import { createContext } from 'react'
import React from 'react';
import ChildA from './ChildA';

//what is useContext hook ? 
// create, provider, useContext... must know about this ...
// How to use it..?
// number of items to create number of createContext for sending data...

const data = createContext();
const data1 = createContext();

const Apps = () => {
    const name = "Avanish"
    const gender = "Male"

    return (
        <div>
            <data.Provider value={name}>
                <data1.Provider value={gender}> 
                    <ChildA />
                </data1.Provider>
            </data.Provider>
        </div>
    );
};

export default Apps;
export {data, data1};