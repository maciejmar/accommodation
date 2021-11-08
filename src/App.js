import './App.module.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels.js';
import React, {Component} from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import SearchBar from './components/Header/SearchBar/SearchBar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

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
      hotels: [],
      loading: true
    }
    


  searchHandler(term) {
      console.log('szukaj z app    ', term);
      const hotels = [...this.hotels].filter(x => x.name.toLowerCase()
      .includes(term.toLowerCase()));
      this.setState({ hotels });
  }

  componentDidMount() {
    setTimeout( ()=> {
      this.setState({
        hotels: this.hotels,
        loading: false
      });

    }, 1000);
  }

 render() {
  return (
    
      <Layout
        header = {
          <Header>
          <SearchBar onSearch= {term => this.searchHandler(term)}/>
        </Header>
        }
        menu = {
          <Menu/>
        }
        content = {
          this.state.loading ? (
            <LoadingIcon /> ):(
          <Hotels hotels={this.state.hotels}/>
            )
        }
        footer = {
            <div>
              <Footer/>
            </div>
        }
      />
     
  );
  }
 
}

export default App;
