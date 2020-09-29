import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''  
    }
  }

  async componentDidMount() {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let users = await response.json();

      console.log('turd'); 
      console.log(users);
      this.setState({monsters: users});



      // .then(response => response.json())
      // .then(users => {
      //   console.log('turd'); 
      //   console.log(users);
      //   this.setState({monsters: users});
      // })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <input 
          type='search' 
          placeholder='search monsters' 
          // onChange={async(e) => {
          //   await this.setState({ searchField: e.target.value });
          //   console.log(this.state);
          // }}
          // onChange={e => {
          //   this.setState({ searchField: e.target.value }, () => 
          //     console.log(this.state)
          //   );
          // }}
          onChange={e => this.setState({ searchField: e.target.value })}
        /> */}
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
                <SearchBox
          placeholder='fuck you'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
