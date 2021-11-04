import React from "react";
import { AppContainer } from "./AppStyles";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import MovieList from "./components/MovieList/MovieList";
import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_DB_KEY;

type MyProps = {};

type MyState = {
  searchTerm: string;
  results: Array<any>;
  show: boolean;
};
class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchTerm: "",
      results: [],
      show: true,
    };
  }

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  handleSearch = (data: string) => {
    this.setState({ searchTerm: data });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&query=${this.state.searchTerm}`
      )
      .then((response) => {
        const results = response.data.results;
        this.setState({ results: results });
      });

    console.log("results", this.state.results);
  };

  // componentWillMount() {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({});
  //     });
  // }

  render() {
    return (
      <AppContainer>
        <Header show={this.state.show} handleShow={this.handleShow} />
        <Search
          show={this.state.show}
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />
        <MovieList />
      </AppContainer>
    );
  }
}

export default App;
