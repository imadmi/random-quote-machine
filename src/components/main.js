import { useState } from "react";

function Main() {
    let quotes = {
        "lfya9 bkri b dheb mchri":"- nass zman",
        "tali zhro 3ali":"- drari sghar",
    } ;
    const quoteKeys = Object.keys(quotes);

    const [currentQuote, setCurrentQuote] = useState("lfya9 bkri b dheb mchri");
    const [I, setI] = useState(0);

    const new_quote = () => {
        setI(I + 1);
        console.log(I);
        const randomQuote = quoteKeys[I % (quoteKeys.length)];
        setCurrentQuote(randomQuote);
      };
    return (
      <div>
        <div id="quote-box">
            <div id="text">
                {currentQuote}
            </div>
            <div id="author">
                {quotes[currentQuote]}
            </div>
            <button id="new-quote" onClick={new_quote}>
                new quote
            </button>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">

            </a>
        </div>
      </div>
    );
  }
  
  
  export default Main;