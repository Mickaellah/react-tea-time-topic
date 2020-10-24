import React from "react";
import archive from '../icons/archive.svg';
import trash from '../icons/trash.svg';

function Topics({ topic }) {

    const timeStamp = new Date(topic.discussedOn * 1000).getTime();
    const original_date = new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    }).format(timeStamp);

    return (
        <article className="card" key={topic.id}>
            <div className="content">
                <p>{topic.title}</p>
                <button className="archive" type="button" id={topic.id}>{topic.discussedOn == "" ? <img src={archive} alt="archive" /> : <img src={trash} alt="Delete" />} </button>
            </div>
            <div>
            <p>{original_date}</p>
            </div>
        </article>
    )
}

export default Topics