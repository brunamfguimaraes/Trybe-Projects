import React from 'react';
import './App.css';

const tasks = ['HTML', 'CSS','Javascript', 'React'];

class App extends React.Component {
  render() {
      return (
        <ol> {tasks.map((lista) => <li>{ lista }</li>) }</ol>
        );
    }
}

export default App;
