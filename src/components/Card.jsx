import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({
    id,
    title,
    body,
    link,
}) => {
    return (
        <div className="col-md-3 mb-4" key={id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <Link to={link} className="btn btn-primary">Détails !</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;