import React, { useEffect, useState } from 'react';
import archive from '../icons/archive.svg';
import thumbUp from '../icons/thumbUp.svg';
import thumbDown from '../icons/thumbDown.svg';
import trash from '../icons/trash.svg';

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

    return (
        <div>
            { topics.map((topic) => {
                <article key={topic.id}>
                    <div>
                        <p>{console.log(topic.title)}</p>
                        <button type="button" id={console.log(topic.id)}><img src={archive} alt="archive" /></button>
                    </div>
                    <div class="buttons">
                        <div>
                            <button class="up_vote" type="button"><img src={thumbUp} alt="like" /></button>
                            <div class="upvote_score">Like: {console.log(topic.upvotes)}</div>
                        </div>
                        <div>
                            <button class="down_vote" type="button"><img src={thumbDown} alt="dislike" /></button>
                            <div class="downvote_score">Dislike: {console.log(topic.downvotes)}</div>
                        </div>
                    </div>
                </article>
            }) }
        </div>
    )
}

export default TopicLists