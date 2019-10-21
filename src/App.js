import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "1df3b360b5967d372e9c55e9abff8abf"

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // api call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return(
      <div>
        <Titles></Titles>
        <Form getWeather={this.getWeather}></Form>
        <Weather/>
      </div>
    );
  }
}

export default App;