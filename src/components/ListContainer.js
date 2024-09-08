import React, {useState} from 'react';
import ListItem from './ListItem';

const ListContainer = () => {
    const [items, setItems] = useState([]); // starts as empty list
    const [newItem, setNewItem] = useState(''); // input starts as empty string

    const handleInputChange = (e) => {
        setNewItem(e.target.value); // input field value
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent reload
        if (newItem.trim()){
            setItems([...items, newItem]);
            setNewItem(''); // reset to empty string
        };
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={newItem}
                    onChange={handleInputChange}
                    placeholder="Add a new item"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map((item, index) => (                    
                    <ListItem key={index} item={item} />
                ))};
            </ul>
        </div>
    );
};


export default ListContainer;