import React, { useState } from 'react';
import ListContainer from './components/ListContainer';
import Title from './components/Title';

const App = () => {
  const [tasks] = useState(['Task A', 'Task B', 'Task C']);

  return (
    <div>
      <Title />
      <ListContainer tasks={tasks} />
    </div>
  )
}

export default App;
