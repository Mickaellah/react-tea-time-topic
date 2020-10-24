import React, { useEffect, useState } from 'react';
import NextTopic from './NextTopics';
import PastTopics from './PastTopic';

const Topic_url = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json";

function TopicLists() {
    const [ topics, setTopics ] = useState([]);
    console.log(topics);

    async function fetchTopic() {
        const res = await fetch(Topic_url);
        const data = await res.json();
        setTopics(data);
        console.log(data);
    }

    useEffect( () => {
        fetchTopic();
    }, [])

    let nextTeaTopic = topics.filter((topic) => !topic.discussedOn);
    nextTeaTopic = nextTeaTopic.sort((topicX, topicY) => {
        const ratioX = topicX.upvotes - topicX.downvotes;
        const ratioY = topicY.upvotes - topicY.downvotes;
        return ratioY - ratioX;
    })
    const pastTopics = topics.filter((topic) => topic.discussedOn);

    return (
        <div>
            <header>
                <h2>Next topics</h2>
            </header>

            { nextTeaTopic.map((topic) => {
                return <NextTopic key={topic.id} topic={topic} />
            }) }

            <header>
                <h2>Past topics</h2>
            </header>

            { pastTopics.map((topic) => {
                return <PastTopics key={topic.id} topic={topic} />
            }) }
        </div>
    )
}

export default TopicLists