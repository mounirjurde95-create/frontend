import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0); 
  const [essays] = useState([
 	    {
        title:"essayessay essay essay 1",
      	text:"hello i am trying to text essa essay"
        },
  		{
        title:"essay part  essay 2",
       	text:"hello checking text essay essay results essay"
      },
      {
        title:"essay  3",
       	text:"hello part checking text  results"
      },
      {
        title:"part 4",
       	text:"hello checking text essay essay results essay"
      },
      {
        title:"part 5",
       	text:"hello checking text results"
      },
  	]);

    const onSearchClear = () => {
      setInputValue('');
      setCount(0);
    }
    
    const onChnageImput = (text) => {
      setInputValue(text);
      let currentCount = 0;
      const lowerCaseInputValue = text.toLowerCase();
      essays.forEach((essay) => {
        const lowerCaseEssayTitle = essay.title.toLowerCase();
        const lowerCaseEssayText = essay.text.toLowerCase();
        if ( 
          (lowerCaseEssayTitle.includes(lowerCaseInputValue) || lowerCaseEssayText.includes(lowerCaseInputValue)) 
          && lowerCaseInputValue !== '') {
          currentCount++;
        }
      });
      setCount(currentCount);
    }

    const highlightText = (text, highlight) => {
      if (!highlight.trim()) {
        return text;
      }
      const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      return parts.map((part, index) => (
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="highlight">{part}</span>
        ) : (
          <span key={index}>{part}</span>
        )
      ));
    };

    const divElements = essays.map((essay) => (
      <div>
        <h1>
          {highlightText(essay.title, inputValue)}
        </h1>
        <p>
          {highlightText(essay.text, inputValue)}
        </p>
      </div>
    ));

  return (
    <div className="App">
      <div class="search-title">
  		  <h1>Search</h1>
      </div>
      <div class="search-container">
		    <input 
          id="searchText"
          type="text"
          value={inputValue}
          onChange={(e) => {
            onChnageImput(e.target.value)
          }}
          placeholder="Search..."
        />
        <button onClick={onSearchClear} class="clear-button">x</button>
	    </div>
      <div id="result-test">
        <text><span class="highlighted-count">{count} posts</span>where found</text>
      </div>
      <div id="essayContainer">
        {divElements}
      </div>
    </div>
  );
}

export default App;
