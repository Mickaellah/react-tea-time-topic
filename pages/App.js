import React, { useState } from 'react';
import Form from "../Components/Form"
import TopicLists from "../Components/TopicLists";
import "../styles.css";

function App(props) {
    const [ newTopic, setNewTopic ] = useState({
        upvotes: 0,
		downvotes: 0,
		disussedOn: '',
		title: '',
		id: Date.now()
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const newTopics = props.topics.concat({ newTopic });
        setNewTopic(newTopics);
    }

    return (
        <div>
            <Form 
                onChange={props.handleChange}
                onSubmit={handleSubmit}
                onClick={handleAdd}
                // value={newTopic}
            />
            <TopicLists />
        </div>
    )
}

export default App