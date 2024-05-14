import React from 'react';
import CheckBox from "./CheckBox/CheckBox";


// This is where we can create number of checkBox objects depending on the number passed into Hook
const Loop = ({numberOfItems}) => {
    
    // initialize the state of each checkbox with useStae and Array.from
    const checkBoxLoop = Array.from({length: numberOfItems}, (index) => index);
    // HandleCheckBoxChange function to change the state when changed
    
    <div>
        {
            // change parameter to if the curr is checked and index
            checkBoxLoop.map((i) =>
                // add the parameter of usestate
                (<CheckBox key={i}/>)
            )
        }
    </div>
};

export default Loop;