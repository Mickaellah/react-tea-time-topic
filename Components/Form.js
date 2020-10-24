import React from 'react';

export default function Form(props) {
    return (
        <>
            <header>
                <h2>Add a topic</h2>
            </header>
            <form className="add_form" onSubmit={props.handleSubmit}>
                <input className="add_input" type="text" value={props.value} onChange={props.handleChange} placeholder="Write your topic idea here..." />
                <button className="submit_bttn" onSubmit={props.handleAdd} type="submit">Submit</button>
            </form>
        </>
    )
}