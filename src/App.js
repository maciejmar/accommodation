import './App.module.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels.js';
import React, {Component} from 'react';



class App extends Component {
      hotels = [
        {
          id:1,
          name: 'Under palm trees',
          city: 'Acapulco',
          rating: '1.2',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          image: ''
          },
          {
            id:2,
            name: 'On the Seeshore',
            city: 'Gdynia',
            rating: '1.5',
            description: 'Lorem Ipsum has been the industry-s standard dummy text ever since the 1500s.',
            image: ''
          }
      ];
    state = { 
      hotels: this.hotels
    }
    


  searchHandler(term) {
      console.log('szukaj z app    ', term);
      const hotels = [...this.state.hotels].filter(x => x.name.toLowerCase()
      .includes(term.toLowerCase()));
      this.setState({ hotels });
  }
 render() {
  return (
    <div className="App">
      <Header onSearch= {term => this.searchHandler(term)}/>
      <Menu/>
      <Hotels hotels={this.state.hotels}/>
      
    </div>
  );
  }
 
}

export default App;
