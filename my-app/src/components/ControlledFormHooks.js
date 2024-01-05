import React, {useState} from 'react'

function ControlledFormHooks() {
    // With hooks we replace the whole constructor thing
    // we just define like [state, methodToChangeState] = useState(initialState)
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');

    // This is the method for the submit, it is just an arrow function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

    return (
        <div>
            <h2>Please fill out the form</h2>
            {/* remove the need to the this keyword */}
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        // remove the need of the this and state keywords
                        value={name} 
                        // remove the this keyword and just add an replace it
                        // with an arrow function that takes the e (Event) as
                        // a parameter
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id='id-name' 
                        type="text" 
                        name='name'
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select 
                        id='id-category' 
                        name='category'
                        value={category} 
                        onChange={
                            (e) => setCategory(e.target.value)
                        }
                    >
                        <option value='website'>Website issue</option>
                        <option value='order'>Order issue</option>
                        <option value='general'>General enquiry</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="id-category">Comments:</label>
                    <textarea 
                        id='id-comments' 
                        value={comments} 
                        onChange={
                            (e) => setComments(e.target.value)
                        }
                        name='comments'
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks