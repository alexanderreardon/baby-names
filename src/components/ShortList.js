import React from 'react';

export default ( {data, favorites} ) => {
    
    const namesList = favorites.map(id => {
        const { name, sex } = data[id];
        return (
            <li key={id} className={sex}>{name}</li>
        )
    });

    return (
        <div className="favorites">
            <h4>Your Shortlist</h4>
            <ul>
                {namesList}
            </ul>
        </div>
    )
}