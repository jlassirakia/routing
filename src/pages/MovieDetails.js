import React from "react";
import { useParams } from "react-router";
import { Data } from "../Components/Data";
import "./MovieDetail.css";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  let History = useHistory();
  const { id } = useParams();
  const movie = Data.find((i) => {
    return i.id == id;
  });
  console.log(movie);
  return (
    <div>
      <button onClick={() => History.push("/")}>
        {" "}
        <b>Go to racine</b>{" "}
      </button>

      <div className="nom">
        <b>{movie.name}</b>
      </div>
      <div className="mov">
        {" "}
        <img src={movie.image} alt="img" />{" "}
      </div>

      <div className="ved">
        <iframe
          width="916"
          height="515"
          src={movie.lien}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default MovieDetails;
