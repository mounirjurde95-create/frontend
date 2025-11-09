# Getting Started with SearchBar

This Search Bar was set as an answer to a Search Bar exam that aims to highlight the text entered in the input field and check its result in an array of essays below.

## Search Bar

The Search Bar is a Search Input that allows any input to be entered by a user, this user aim from this input field to search for a specific letters, keywords, words and even sentence in an array of essay.

This input have an x button at the end of the field allows the user to clear his input and try again for another selection.

This clear not only clear the input fields, but also clears its effect on the essay highlighting moreover it even set back the number of posts back to 0.

 const onSearchClear = () => {
      setInputValue('');
      setCount(0);
    }

## Search Count

The Search Count is count with sentence below the search bar that check the enter value from the user how many times it is posted.

Each essay have a title and a text, so if the search resul is found in the title only or in the text only or in both it will be added by 1, since each post is considered from 1 title and 1 text.
it this post have the same value entered by user in title or in text or in both then the number of posts will increase.

If essay 1 have the searched value in its title then add counter will increase by one, if essay 1 have the searched value in its text then the counter will be increased by one, if essay 3 have the searched value in both the title and text then the counter will be increased also by one, so in this caase the value of the counter will be three.

## Array Of Esaays

These array of essays are a dummy data added and created to check the function of the search bar and its effect on these essays and counter.

    [
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
  	];

Each essay is considered as a post, and each essay/post consist of both tite and text, user when search for a specific value in a post this value could be in the title or in the text or in both, thats why counter only add 1 if value is found in both title and text or in one of them because they both are a part of one post.

