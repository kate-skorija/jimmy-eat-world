import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { getRecipes } from './../src/recipe-service.js';
import { getRecipeDetails } from './../src/recipe-service.js';


$(document).ready(function() {
  $(".point").click(function() {

    (async () => {
      const response = await getRecipes(this.id);
      getElements(response);
    })();

    let getElements = (response) => {
      let moreInfo;
      if (response) {
        response.results.forEach(async (result) => {
          moreInfo = await getRecipeDetails(result.id);
          $(`div.${this.id}`).append(`<a target="_blank" href="${moreInfo.sourceUrl}"><img src="${result.image}"><br>${result.title}<br></a><br>`);
        });
      } else {
        $(`div.${this.id}`).text(`There was an error handling your request.`);
      }
    }
  
  });
  $(".close").click(function() {
    location.reload(true);
  });
  $(".shoppingList").click(function() {
    document.querySelector(".myShoppingList").scrollIntoView({behavior: 'smooth'});
  });
  $("footer").click(function() {
    document.querySelector(".myShoppingList").scrollIntoView({behavior: 'smooth'});
  });

});