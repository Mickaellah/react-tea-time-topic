import React, { useEffect, useImperativeHandle, useState } from 'react';
import NextTopic from './NextTopics';
import PastTopics from './PastTopic';
import Form from './Form';

const Topic_url = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json";

function TopicLists() {
    const [ topics, setTopics ] = useState([]);
    const [ count, setCount ] = useState(0);

    async function fetchTopic() {
        const res = await fetch(Topic_url);
        const data = await res.json();
        console.log(data);
        setTopics(data);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const [ name ] = e.target;
        e.target.reset();

        const newTopic = {
            upvotes: 0,
            downvotes: 0,
            disussedOn: '',
            title: name.value,
            id: Date.now()
        }

        topics.push(newTopic);
        console.log(newTopic);
        setTopics([...topics]);
    }


    function upVotesIncreament(e) {
        const id = e.target.id;
        const findId = topics.find(item => item.id === id);
        const upVotes = findId.upvotes++;
        setCount(upVotes);
    }

    function downVotesIncreament(e) {
        const id = e.target.id;
        const findId = topics.find(item => item.id === id);
        const downVotes = findId.downvotes++;
        setCount(downVotes);
    }

    function handleDelete(e) {
        const id = e.target.id;
        console.log(id);
        const deleteItem = topics.filter((item) => item.id !== id);
        setTopics(deleteItem);
    }

    function handleArchive(e) {
        const id = e.target.id;
        const topicToArchive = topics.filter((topic) => topic.id === id);
        topicToArchive.discussedOn = new Date();
        console.log(topicToArchive);
        setTopics(topicToArchive);
    }


    useEffect( () => {
        fetchTopic();
    }, [])

    const pastTopics = topics.filter((topic) => topic.discussedOn);

    return (
        <div>
            <Form onClick={handleAdd} />
            <header>
                <h2>Next topics</h2>
            </header>

            { topics.sort((topicX, topicY) => {
                const ratioX = topicX.upvotes - topicX.downvotes;
                const ratioY = topicY.upvotes - topicY.downvotes;
                return ratioY - ratioX;
            }).filter((topic) => !topic.discussedOn).map((topic) => {
                return <NextTopic 
                    key={topic.id} 
                    {...topic} 
                    onClick={upVotesIncreament} 
                    onChange={downVotesIncreament}
                    upVotes={count + topic.upvotes}
                    handleArchive={handleArchive}
                />
            }) }

            <header>
                <h2>Past topics</h2>
            </header>

            { pastTopics.map((topic) => {
                return <PastTopics 
                    key={topic.id} {...topic} 
                    onClick={handleDelete} 
                />
            }) }
        </div>
    )
}

export default TopicLists