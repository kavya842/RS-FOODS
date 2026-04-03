let data = JSON.parse(localStorage.getItem("selectedRecipe"));

let container = document.getElementById("details");

container.innerHTML = `
    <img src="${data.image}" class="main-img">

    <h1>${data.name}</h1>

    <p><strong>Cuisine:</strong> ${data.cuisine}</p>
    <p>⭐ ${data.rating}</p>

    <h3>Ingredients </h3>
    <ul>
        ${data.ingredients.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Instructions </h3>
    <p>${data.instructions}</p>

    <h3>Customer Reviews </h3>
    <p>⭐ Excellent taste! Loved it </p>
    <p>⭐ Very easy to cook </p>
    <p>⭐ Highly recommended </p>
`;


// Navigation
function goBack() {
    window.location.href = "../recipes/recipes.html";
}

function goHome() {
    window.location.href = "../Home/home.html";
}