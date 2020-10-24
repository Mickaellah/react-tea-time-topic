import React, { useState } from 'react';
import Form from "../Components/Form"
import TopicLists from "../Components/TopicLists";
import "../styles.css";

function App(props) {
    const [ newTopic, setNewTopic ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setNewTopic(e.target.value);
        console.log(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const newTopics = props.topics.concat({ newTopic });
        props.setTopics(newTopics);
        setNewTopic('');
    }
    return (
        <div>
            <Form 
                onChange={handleChange}
                onSubmit={handleSubmit}
                onClick={handleAdd}
                value={props.topics}
            />
            <TopicLists />
        </div>
    )
}

export default App