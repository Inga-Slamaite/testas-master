function Joke({type, joke, setup, delivery}){
  return (
    <div>
      <p>&#128516; &#128516; &#128516;</p>
      {
      type === 'single' ? <h4 style={{color: 'crimson'}}>{joke}</h4> : <h4>{setup} <p><i>{delivery}</i></p></h4>
       } 
    </div>
  )
}

export default Joke;