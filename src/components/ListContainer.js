import React from 'react';

const ListContainer = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} class="listItems">{task}</li>
            ))}
        </ul>
    );
};


export default ListContainer;