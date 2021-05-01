import "../App.css";
import Search from "../Components/Search";
import MoviesList from "../Components/MoviesList";
import AddMovie from "../Components/AddMovie";
import React, { useState } from "react";
import { Data } from "../Components/Data";

function Home() {
  const [moviesList, setMoviesList] = useState(Data);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  const addMovie = (e) => {
    e.preventDefault();
    let newMovie = {
      name,
      rating,
      image,
      date,
      description,
    };
    return setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="App">
      <h1> la liste des films </h1>
      <hr></hr>

      <AddMovie
        addMovie={addMovie}
        setName={setName}
        setRating={setRating}
        setImage={setImage}
        setDate={setDate}
        setDescription={setDescription}
      />

      <Search setNameSearch={setNameSearch} />

      <MoviesList moviesData={moviesList} nameSearch={nameSearch} />
    </div>
  );
}
export default Home;
