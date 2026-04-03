fetch("https://dummyjson.com/recipes")
  .then(res => res.json())
  .then(data => {
    console.log(data.recipes);
  });