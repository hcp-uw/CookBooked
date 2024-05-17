import React from 'react';
import CheckBox from "./CheckBox/CheckBox";


// This is where we can create number of checkBox objects depending on the number passed into Hook
const Loop = ({numberOfItems}) => {
    
    // initialize the state of each checkbox with useStae and Array.from
    [used, setUsed] = useState(Array.from({length: numberOfItems}, () => false));
    // HandleCheckBoxChange function to change the state when changed
    const HandleCheckBoxChange = (index) => {
        setUsed((previous) => 
            previous.map((item, i) => (i === index ? !item : item))
        )
    }
    
    <div>
        {
            // change parameter to if the curr is checked and index
            used.map((isChecked, index) => (
                <CheckBox
                    value={isChecked}
                    key={index}
                    // arrow function is used so we don't get an undefined error when the 
                    // loops technically render
                    onValueChange={() => HandleCheckBoxChange(index)}
                />
            ))
        }
    </div>
};

export default Loop;