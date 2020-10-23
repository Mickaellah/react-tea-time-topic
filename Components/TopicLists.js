import React, { useEffect, useState } from 'react';

function TopicLists() {
    const [ topics, setTopics ] = useState([]);

    useEffect( async () => {
        const res = await fetch("https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json");
        const data = await res.json();
        setTopics(data);
    }, [])

    return (
        <section>
            { topics.map((topic) => {
                <article>
                    <div>
                        <p>{console.log(topic.title)}</p>
                        <button type="button" id={console.log(topic.id)}></button>
                    </div>
                    <div class="buttons">
                        <div>
                            <button class="up_vote" type="button"></button>
                            <div class="upvote_score">Like: {console.log(topic.upvotes)}</div>
                        </div>
                        <div>
                            <button class="down_vote" type="button"></button>
                            <div class="downvote_score">Dislike: {console.log(topic.downvotes)}</div>
                        </div>
                    </div>
                </article>
            }) }
        </section>
    )
}

export default TopicLists