import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function App() {
  return (
    <QuoteBox/>
  );
}


function QuoteBox(){
    const [quoteData, setQuoteData] = React.useState({});
    const [count, setCount] = React.useState(0);
    const colors = ['primary', 'success', 'danger','warning','info'];
  
  
    React.useEffect(function(){
      fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setQuoteData(data))
    },[count])  

  function buttonCounter(){
    setCount(count>3 ? 0 : count + 1);
  }
  
  
  
  
  return (
    <div id="wrapper" class={`vh-100 align-items-center justify-content-center d-flex bg-${colors[count]}`}>
      <div id="quote-box" class="w-50 row p-5 rounded-lg bg-light">
        <blockquote class="w-100">
          <p id="text" class={`h2 text-${colors[count]}`}>{quoteData.content}</p>
          <p id="author" class={`text-right h4 text-${colors[count]}`}>--{quoteData.author}</p>
        </blockquote>
        <div class="w-100 d-flex justify-content-between">
          <a href="twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon size="3x" icon={icon({name: 'square-twitter', style: 'brands',}) } /></a>
          <button onClick={buttonCounter} class={`btn bg-${colors[count]} text-light`} id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}


export default App;
