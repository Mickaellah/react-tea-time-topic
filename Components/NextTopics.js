import React from "react";
import archive from '../icons/archive.svg';
import thumbUp from '../icons/thumbUp.svg';
import thumbDown from '../icons/thumbDown.svg';
import trash from '../icons/trash.svg';

function Topics({ topic }) {
    return (
        <article className="card" key={topic.id}>
            <div className="content">
                <p>{topic.title}</p>
                <button className="archive" type="button" id={topic.id}>{topic.discussedOn == "" ? <img src={archive} alt="archive" /> : <img src={trash} alt="Delete" />} </button>
            </div>
            <div className="buttons">
                <div>
                    <div className="upvote_score">{topic.upvotes}</div>
                    <button className="up_vote" type="button"><img src={thumbUp} alt="like" /></button>
                </div>
                <div>
                    <div className="downvote_score">{topic.downvotes}</div>
                    <button className="down_vote" type="button"><img src={thumbDown} alt="dislike" /></button>
                </div>
            </div>
        </article>
    )
}

export default Topics