import React from "react";
import archive from '../icons/archive.svg';
import trash from '../icons/trash.svg';

function Topics({ topic }) {

    const timeStamp = new Date(topic.discussedOn * 1000).getTime();
    const todate = new Date(timeStamp).getDate();
    const toMonth = new Date(timeStamp).getMonth()+1;
    const toYear = new Date(timeStamp).getFullYear();
    const original_date = todate + '/' + toMonth + '/' + toYear;

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