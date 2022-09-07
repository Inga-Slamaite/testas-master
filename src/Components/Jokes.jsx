import { useEffect, useState } from "react";
import Joke from "./Joke";
import Loader from "./Loader";

function Jokes(){
  const [jokes, setJokes] = useState([]);
  const [err, setError] =  useState('');
  useEffect(() =>{
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
    .then((result) => result.json())
    .then((data) => setJokes(data))
    .catch((err) => setError(err.message));
  }, []);
  console.log(jokes);
  return(
     jokes.jokes ? jokes.jokes.map((joke) => <Joke key={joke.id} type={joke.type} joke={joke.joke} setup={joke.setup} delivery={joke.delivery} />) : <Loader />
)}

export default Jokes;