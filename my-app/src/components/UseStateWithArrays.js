import React, {useState} from 'react'

function UseStateWithArrays() {

    // define the state nums and the method setNums
    // the initial values are an array with numbers from 1 to 3
    const [nums, setNums] = useState([1, 2, 3]);

    // this is the method to add nums
    const addNums = () => {
        // nums is the array, the ...nums include the existing ones
        // then it adds one more by checking the length of the array 
        // and adding one
        setNums([...nums, nums.length + 1]);
    }

    // method to remove last item
    const removeNums = () => {
        setNums(
            // nums is the array, then the filter method takes two
            // parameters, item and index (of the array)
            // then the arrow funciton checks if the index is 
            // not equal to length of the array minus 1
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }

    return (
        <div>
            <button onClick={addNums}>
                Add item
            </button>
            <button onClick={removeNums}>
                Revmove item
            </button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

export default UseStateWithArrays