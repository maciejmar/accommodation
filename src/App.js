import './App.module.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels.js';
import React, {Component} from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import SearchBar from './components/Header/SearchBar/SearchBar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';

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
      loading: true,
      theme:'secondary'
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
changeTheme = () => {
    const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
    this.setState({ theme: newTheme})
}
 render() {
  return (
    
      <Layout
        header = {
          <Header>
          <SearchBar onSearch= {term => this.searchHandler(term)}/>
        theme={this.state.theme}
        <ThemeButton onChange={this.changeTheme} />
        </Header>
        }
        menu = {
          <Menu theme={this.state.theme}/>
        }
        content = {
          this.state.loading ? (
            <LoadingIcon theme={this.state.theme} /> ):(
          <Hotels hotels={this.state.hotels} theme={this.state.theme}/>
            )
        }
        footer = {
            <div>
              <Footer theme={this.state.theme}/>
            </div>
        }
      />
     
  );
  }
 
}

export default App;
