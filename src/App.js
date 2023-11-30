import React from 'react'
import './style.css';


function App() {
  return (
    <QuoteBox/>
  );
}


function QuoteBox(){
    const [quoteData, setQuoteData] = React.useState({});
    const [count, setCount] = React.useState(0);
  
  
    React.useEffect(function(){
      fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setQuoteData(data))
    },[count])  

  function buttonCounter(){
    console.log("clicked");
    setCount(count + 1);
  }
  
  function getNewQuote(){
    buttonCounter();
  }
  
  
  return (
    <div class="vh-100 align-items-center justify-content-center d-flex bg-primary">
      <div id="quote-box" class="w-50 row p-5 rounded-lg bg-light">
        <blockquote class="w-100">
          <p id="text" class="h2">{quoteData.content}</p>
          <p id="author" class="text-right h4">--{quoteData.author}</p>
        </blockquote>
        <div class="w-100">
          <a href="twitter.com/intent/tweet" id="tweet-quote"><i class="fa-brands fa-square-twitter icon-large"></i></a>
          <button onClick={getNewQuote} class="btn btn-default" id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}


export default App;
