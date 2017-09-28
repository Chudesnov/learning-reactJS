import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Action from './Action';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // инициализируем. можно было бы взять значение из getComputedStyle,
      // тогда не было бы дублирования нашего App.css
      animationDuration: '10s'
    };
    
    // Нужно для сохранения контекста при вызове этого метода в Action
    this.setAnimationDuration = this.setAnimationDuration.bind(this);
  }
  setAnimationDuration(value) {
    this.setState({
      animationDuration: value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo} 
            className="App-logo" 
            alt="logo" 
            id='logo'
            style={{
              animationDuration: this.state.animationDuration
              // передаем style.animationDuration из стейта компонента
            }}
          />
          <h2>Welcome to React</h2>
        </div>
        {/* в props.value прокидываем текущее значение, позволяем, вызвав props.onChange, его менять */}
        <Action
          onChange={this.setAnimationDuration}
          value={this.state.animationDuration}
        />
      </div>
    );
  }
}

export default App;
