import * as React from 'react';
import './App.css';
import Hello from './components/Hello'

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, aliquam? Explicabo nisi dignissimos at quod non magnam laboriosam corporis, laudantium deleniti ex, molestiae, itaque enim nihil dolor. Similique, praesentium unde!
        </p>
        <Hello name="typescript" level={2} />
      </div>
    );
  }
}

export default App;
