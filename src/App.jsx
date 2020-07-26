import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      list: [
        'item 1',
        'item 2',
        'item 3',
      ],
      newValue: ''
    }
  }

  handleInput = event => {
    this.setState({ newValue: event.target.value })
  }

  addItem = () => {
    this.setState({
      list: [...this.state.list, this.state.newValue],
      newValue: ''
    })
  }

  handleDelete = currentItem => {
    this.setState({
      list: [...this.state.list.filter(item => item != currentItem)]
    })
  }


  render(){
    return (
      <>
        <h1>TODO list</h1>
        <input 
          type="text" 
          value={this.state.newValue} 
          placeholder="Digite o item aqui"
          onChange={this.handleInput}
          />
          <button 
          disabled={!this.state.newValue}
          onClick={this.addItem}
          >Adicionar</button>
        <ul>
           {this.state.list.map((item, index) =>(
              <li key={index}>
                {item}
                <button onClick={() => this.handleDelete(item)}>X</button>
              </li>
           ))}
        </ul>
      </>
    )
  }
}

export default App;
