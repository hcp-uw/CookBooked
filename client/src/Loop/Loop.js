import React, {useState} from 'react';
import CheckBox from "../CheckBox/CheckBox";


// This is where we can create number of checkBox objects depending on the number passed into Hook
const Loop = ({numberOfItems, itemNum}) => {
    
    // initialize the state of each checkbox with useState and Array.from
    const [used, setUsed] = useState(Array.from({length: numberOfItems}, () => false));
    // HandleCheckBoxChange function to change the state when changed
    const handleCheckBoxChange = (index) => {
        setUsed((previous) => 
            previous.map((item, i) => (i === index ? !item : item))
        )
    }
    return (
        <div>
            {
                // change parameter to if the curr is checked and index
                used.map((isChecked, index) => (
                    <CheckBox
                        checkedVisible={isChecked}
                        key={index}
                        // arrow function is used so we don't get an undefined error when the 
                        // loops technically render
                        setCheckedVisible={() => handleCheckBoxChange(index)}
                        itemNum={0}
                    />
                ))
            }
        </div>
    )
};

export default Loop;