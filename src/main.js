// import { x } from './x.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { getChineseRecipes} from './../src/recipe-service.js';

$(document).ready(function() {
  $(".china").click(function() {

    (async () => {
      const response = await getChineseRecipes();
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        response.results.forEach(function(result) {
          $('.chinese').append(`<img src="${result.image}"><br>`);
          $('.chinese').append(`${result.title}<br>`);
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