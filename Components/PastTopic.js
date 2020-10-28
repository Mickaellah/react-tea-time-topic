import React from "react";
import archive from '../icons/archive.svg';
import trash from '../icons/trash.svg';

function Topics(props) {

    const timeStamp = new Date(props.discussedOn * 1000).getTime();
    const original_date = new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    }).format(timeStamp);

    return (
        <article className="card" key={props.id}>
            <div className="content">
                <p className="title">{props.title}</p>
                <button 
                    className="delete" 
                    onClick={props.onClick} 
                    type="button" 
                    id={props.id}>{props.discussedOn == "" ? <img 
                    src={archive} 
                    id={props.id}
                    alt="archive" /> : <img 
                    id={props.id} 
                    src={trash} 
                    alt="Delete" 
                />} </button>
            </div>
            <div>
            <p className="discussedOn">Discussed on {original_date}</p>
            </div>
        </article>
    )
}

export default Topics