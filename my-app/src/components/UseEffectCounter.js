import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    // here the second parameters triggers the 
    // function conditionally (when count updates)
    useEffect(() => {
        console.log('count 1 effect')
        document.title = count;
    }, [count]);

    // here we only want this to be triggered once
    // so we pass an empty array 
    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
    }, []);

    // if we wanted to be triggered each time the component
    // is rendered, just don't pass a a second parameter

    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter