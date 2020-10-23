import React from 'react';

export default function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <header>
                <h2>Add a topic</h2>
            </header>
            <form className="add_form" onSubmit={handleSubmit}>
                <input className="add_input" type="text" placeholder="Write your topic idea here..."/>
                <button className="submit_bttn" type="submit">Submit</button>
            </form>
        </>
    )
}