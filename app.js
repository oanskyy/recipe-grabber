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
    
}
