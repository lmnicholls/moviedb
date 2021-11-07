import React from "react";
import { AppContainer } from "./AppStyles";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import MovieList from "./components/MovieList/MovieList";
import axios, { AxiosResponse } from "axios";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const API_KEY = process.env.REACT_APP_MOVIE_DB_KEY;

type MyProps = {};

type MyState = {
  searchTerm: string;
  currentMovie: {
    title?: string;
    backdrop_path?: string;
    vote_average?: number;
    release_date?: string;
    poster_path?: string;
    tagline?: string;
    overview?: string;
  };
  type: string;
  results: Array<any>;
  currentPage: number;
  totalPages: number;
  hasMoreMovies: boolean;
  show: boolean;
  showMovieDetail: boolean;
};
class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchTerm: "",
      currentMovie: {
        title: "",
        backdrop_path: "",
        vote_average: undefined,
        release_date: "",
        poster_path: "",
        tagline: "",
        overview: "",
      },
      type: "discover",
      results: [],
      currentPage: 0,
      totalPages: 0,
      hasMoreMovies: true,
      show: true,
      showMovieDetail: false,
    };
  }

  handleShowSearch = () => {
    this.setState({ show: !this.state.show });
  };

  handleSearch = (data: string) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&query=${data}`
      )
      .then((response) => {
        console.log(response.data);
        const results = response.data.results;
        this.setState({
          searchTerm: data,
          results: results,
          show: !this.state.show,
          showMovieDetail: false,
          type: "search",
          totalPages: response.data.total_pages,
          currentPage: 1,
          hasMoreMovies: true,
        });
      });
  };

  handleShowMovieDetails = (id: any) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&include_adult=false&include_video=false`
      )
      .then((response) => {
        const result = response.data;
        this.setState({
          showMovieDetail: true,
          currentMovie: {
            title: result.title,
            backdrop_path: result.backdrop_path,
            vote_average: result.vote_average,
            release_date: result.release_date,
            poster_path: result.poster_path,
            tagline: result.tagline,
            overview: result.overview,
          },
        });
      });
  };

  handleCloseMovieDetails = () => {
    this.setState({
      showMovieDetail: false,
      currentMovie: {
        title: "",
        backdrop_path: "",
        vote_average: undefined,
        release_date: "",
        poster_path: "",
        tagline: "",
        overview: "",
      },
    });
  };

  handleClear = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
      )
      .then((response) => {
        this.setState({
          results: response.data.results,
          type: "discover",
          currentPage: 1,
          totalPages: response.data.total_pages,
          hasMoreMovies: true,
        });
      });
  };

  updateResults = (response: AxiosResponse<any, any>) => {
    let updatedResults = [...this.state.results];
    let results = response.data.results;
    results.forEach((movie: any) => {
      if (!updatedResults.some((e) => e.id === movie.id)) {
        updatedResults.push(movie);
        return;
      }
    });
    this.setState({
      results: updatedResults,
      currentPage: this.state.currentPage + 1,
    });
  };

  fetchMoreMovies = () => {
    if (this.state.currentPage < this.state.totalPages) {
      if (this.state.type === "discover") {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
              this.state.currentPage + 1
            }`
          )
          .then(this.updateResults);
      }
      if (this.state.type === "search") {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&query=${
              this.state.searchTerm
            }&page=${this.state.currentPage + 1}`
          )
          .then(this.updateResults);
      }
    } else {
      this.setState({ hasMoreMovies: false });
    }
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
      )
      .then((response) => {
        this.setState({
          results: response.data.results,
          totalPages: response.data.total_pages,
          currentPage: 1,
        });
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
          handleClear={this.handleClear}
        />
        <MovieList
          results={this.state.results}
          handleShowMovieDetails={this.handleShowMovieDetails}
          totalPages={this.state.totalPages}
          fetchMoreMovies={this.fetchMoreMovies}
          hasMoreMovies={this.state.hasMoreMovies}
        />
        {this.state.showMovieDetail ? (
          <MovieDetail
            showMovieDetail={this.state.showMovieDetail}
            currentMovie={this.state.currentMovie}
            handleShowMovieDetails={this.handleShowMovieDetails}
            handleCloseMovieDetails={this.handleCloseMovieDetails}
          />
        ) : (
          <></>
        )}
      </AppContainer>
    );
  }
}

export default App;
