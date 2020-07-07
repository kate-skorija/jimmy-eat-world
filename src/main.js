import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { getChineseRecipes } from './../src/recipe-service.js';
import { getRecipeDetails } from './../src/recipe-service.js';


$(document).ready(function() {
  $(".china").click(function() {

    (async () => {
      const response = await getChineseRecipes();
      getElements(response);
    })();

    function getElements(response) {
      let moreInfo;
      if (response) {
        response.results.forEach(async function(result) {
          moreInfo = await getRecipeDetails(result.id);
          $('.chinese').append(`<a target="_blank" href="${moreInfo.sourceUrl}"><img src="${result.image}"><br>${result.title}<br></a><br>`);
          console.log(moreInfo.sourceUrl);
        });
      } else {
        $('.chinese').text(`There was an error handling your request.`);
      }
    }
  
  });
  $(".close").click(function() {
    location.reload(true);
  });

});