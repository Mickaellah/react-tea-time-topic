import React from 'react';

export default function Form(props) {
    return (
        <>
            <header>
                <h2>Add a topic</h2>
            </header>
            <form className="add_form" onSubmit={props.onClick}>
                <input 
                    className="add_input" 
                    type="text" 
                    name="newTopic" 
                    placeholder="Write your topic idea here..."
                    required 
                />
                <button className="submit_bttn" type="submit">Submit</button>
            </form>
        </>
    )
}