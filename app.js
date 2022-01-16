// https://www.edamam.com/

// 1.Get all the elements we need
const appID = "b8357617"
const appKey = "5ac80a3a940c58f142083f2147089c67"
const recipeURL = "https://api.edamam.com/search?q="

const form = document.querySelector("form")
const searchInput = document.querySelector(".search-input")
const searchResults = document.querySelector(".search-results")

// 2.Add event listeners
form.addEventListener("submit", e => {
	e.preventDefault()
	//to prevent the form from submitting
	const searchQuery = searchInput.value
	fetchRecipes(searchQuery)
})

// 3.Functions
async function fetchRecipes(searchQuery) {
	const response = await fetch(
		`${recipeURL}${searchQuery}&app_id=${appID}&app_key=${appKey}&to=30`
	)
	const data = await response.json()
	displayRecipes(data.hits)
}

function displayRecipes(recipeResults) {
	let recipeEl = ""

	recipeResults.forEach(recipeResult => {
		recipeEl += `
        <div class="item">
            <img src="${recipeResult.recipe.image}" />
                <div class="content-wrapper">
                <h2 class="recipe-title">${recipeResult.recipe.label}</h2>
                <a href="${
									recipeResult.recipe.url
								}" target="_blank" class="view-recipe">View Recipe</a>
            </div>
            <div class="recipe-desc">
                <p class="item-data">Calories: ${recipeResult.recipe.calories.toFixed(
									0
								)}</p>
                <p class="item-data">Diet Label: ${
									recipeResult.recipe.dietLabels
								}</p>
                <p class="item-data">Health Label: ${
									recipeResult.recipe.healthLabels
								}</p>
                <p class="item-data">Source: ${recipeResult.recipe.source}</p>
            </div>
        </div>
        `

		searchResults.innerHTML = recipeEl
	})
}
