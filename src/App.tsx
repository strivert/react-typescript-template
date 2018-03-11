import * as React from 'react';
import Profile from './components/Profile';
import CounterContainer from './containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile
          name="Striver"
          job="Code Lover"
        />
        <CounterContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
