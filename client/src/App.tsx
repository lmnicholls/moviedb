import React from "react";
import { AppContainer } from "./AppStyles";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import MovieList from "./components/MovieList/MovieList";
import axios from "axios";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const API_KEY = process.env.REACT_APP_MOVIE_DB_KEY;

type MyProps = {};

type MyState = {
  searchTerm: string;
  results: Array<any>;
  show: boolean;
  showMovieDetail: boolean;
  showMovies: boolean;
};
class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchTerm: "",
      results: [],
      show: true,
      showMovieDetail: false,
      showMovies: true,
    };
  }

  handleShowSearch = () => {
    this.setState({ show: !this.state.show });
  };

  handleSearch = (data: string) => {
    this.setState({ searchTerm: data });
    this.setState({ show: !this.state.show });
    this.setState({ showMovies: true });
    this.setState({ showMovieDetail: false });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&query=${this.state.searchTerm}`
      )
      .then((response) => {
        const results = response.data.results;
        this.setState({ results: results });
      });
  };

  handleShowMovieDetails = (id: any) => {
    this.setState({ showMovies: !this.state.showMovies });
    this.setState({ showMovieDetail: !this.state.showMovieDetail });
  };

  componentWillMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
      )
      .then((response) => {
        this.setState({ results: response.data.results });
      });
  }

  render() {
    return (
      <AppContainer>
        <Header show={this.state.show} handleShow={this.handleShowSearch} />
        <Search
          show={this.state.show}
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />
        {this.state.showMovies ? (
          <MovieList
            results={this.state.results}
            handleShowMovieDetails={this.handleShowMovieDetails}
          />
        ) : (
          <></>
        )}
        {this.state.showMovieDetail ? <MovieDetail /> : <></>}
      </AppContainer>
    );
  }
}

export default App;
