import React, { Component } from 'react';
import SearchFilter from './components/SearchFilter';
import ShortList from './components/ShortList';
import NamesList from './components/NamesList';
import Credit from './components/Credit';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      favorites: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  addFavorite(id) {
    const favList = this.state.favorites.concat([id]);
    this.setState({
      favorites: favList
    })
  }

  render() {
    return (

      <div>
        <SearchFilter
          filterText={this.state.filterText} 
          filterUpdate={this.filterUpdate.bind(this)} />
        <main>
          <ShortList
            favorites={this.state.favorites}
            data={this.props.data} />
          <NamesList
            data={this.props.data}
            filterText={this.state.filterText}
            addFavorite={this.addFavorite.bind(this)}
          />
          <Credit />
        </main>
      </div>

    )  
  }
}

export default App;
