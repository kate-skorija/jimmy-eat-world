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
        $('#chinaModal.modal-body').text(response.results.title);
      } else {
        $('#chinaModal.modal-body').text(`There was an error handling your request.`);
      }
    }
  });
});