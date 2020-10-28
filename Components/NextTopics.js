import React, { useState } from "react";
import archive from '../icons/archive.svg';
import thumbUp from '../icons/thumbUp.svg';
import thumbDown from '../icons/thumbDown.svg';
import trash from '../icons/trash.svg';

function Topics(props) {

    return (
        <article className="card" key={props.id}>
            <div className="content">
                <p className="title">{props.title}</p>
                <button 
                    className="archive" 
                    onClick={props.handleArchive} 
                    type="button" 
                    id={props.id}>{props.discussedOn == "" ? <img 
                    id={props.id} 
                    src={archive} 
                    alt="archive" /> : <img 
                    src={trash} 
                    id={props.id} 
                    alt="Delete" />} 
                </button>
            </div>
            <div className="buttons">
                <div>
                    <div className="upvote_score">{props.upvotes}</div>
                    <button 
                        className="up_vote" 
                        id={props.id} 
                        onClick={props.onClick} 
                        type="button"><img id={props.id} src={thumbUp} alt="like" /></button>
                </div>

                <div>
                    <div className="downvote_score">{props.downvotes}</div>
                    <button 
                        className="down_vote" 
                        id={props.id} 
                        onClick={props.onChange} 
                        type="button"><img 
                        id={props.id}
                        src={thumbDown} 
                        alt="dislike" 
                    /></button>
                </div>
            </div>
        </article>
    )
}

export default Topics