import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component {
  render() {
    return(
      <div>
        <Titles></Titles>
        <Form></Form>
        <Weather/>
      </div>
    );
  }
}

export default App;