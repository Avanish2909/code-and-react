import React, { useContext } from 'react';
import { data, data1 } from './Apps';

const ChildC = () => {
    const fullName = useContext(data);
    const gender = useContext(data1);
    return (
        <div>
            <h1>Hi, my name is {fullName} and my gender is {gender}</h1>
        </div>
    );
};

export default ChildC;