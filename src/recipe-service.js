export async function getRecipes(cuisineParam) {
  try {
    let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&cuisine=${cuisineParam}`);
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch(error) {
    return false;
  }
}

export async function getRecipeDetails(idParam) {
  try {
    let response = await fetch(`https://api.spoonacular.com/recipes/${idParam}/information?apiKey=${process.env.API_KEY}`);
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch(error) {
    return false;
  }
}

export async function getRandomRecipe() {
  try {
    let response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}`);
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch(error) {
    return false;
  }
}