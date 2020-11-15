import './App.css';
import React from 'react'
import {CardList } from './components/card-list/CardList.components'
import {SearchBox} from './components/searchox/Searchox.component'

class App extends React.Component{
  state = {
    monsters : [],
    searchField : ''
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then((users)=>users.json()).then((userList)=>this.setState({
      monsters: userList
    }))
  }

  handleChange = (e)=>{
    this.setState({
      searchField: e.target.value
    })
  }

  render(){
    return(
      <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder="Search monster" handleChange={this.handleChange}/>
          <CardList monsters = {this.state.monsters.filter(monster=>monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))}>
          </CardList>
      </div>
    )
  }
}

export default App;
