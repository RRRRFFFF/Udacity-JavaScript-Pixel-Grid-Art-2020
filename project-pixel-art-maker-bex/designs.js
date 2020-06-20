/* Instructions: 27714ef8-e678-4eb6-8faa-9a581e961797/lessons/03ab9590-9a37-4797-ab0a-b9313561fc99/concepts/b42d2144-5a06-4687-b42c-3d859023ef6f */
/* Rubric: https://review.udacity.com/#!/rubrics/1957/view */
//Grid

const mainTable = document.querySelector('table');
const submitter = document.querySelector('input[type=submit]');

submitter.addEventListener('click', makeGrid);

//Colours

const colourChooser = document.getElementById('colorPicker');

var numberOfNewRows = document.getElementById('inputHeight').value
var numberOfNewColumns = document.getElementById('inputWidth').value

// Function

function makeGrid() {

var numberOfNewRows = document.getElementById('inputHeight').value
var numberOfNewColumns = document.getElementById('inputWidth').value

// delete the table rows so they can be rebuilt
/* https://stackoverflow.com/questions/14003606/remove-element-by-tag-name */

		var element = document.getElementsByTagName("tr"), index;

		for (index = element.length - 1; index >= 0; index--) 
    {
		    element[index].parentNode.removeChild(element[index]);
		}	

// without the following line, it completely deletes the table. 
// with the following line, it keeps the table. 

    event.preventDefault()  

    var myParent = document.getElementsByTagName("table")[0]; 

// rows (height)

    for ( j = 0; j < numberOfNewRows; j++)
    {
  	
    var myRow = document.createElement("tr");

// columns (width)

      for ( k = 0; k < numberOfNewColumns; k++)
      {   
          var myCell = document.createElement("td");
          myParent.appendChild(myRow);
          myRow.appendChild(myCell);
          event.preventDefault()
      }  
    } 

    var cells = document.querySelectorAll("td");

    for (var i = 0; i < cells.length; i++) 
    {

// this is where we reset the background colour of the cells
// (if they already exist)  
// actually no longer necessary now that I am completely redrawing
// the table each time but I leave it in to remind myself.   	

        cells[i].style.backgroundColor =  "";

// then we give every cell an Event Listener

        cells[i].addEventListener("click", function() {
          this.style.backgroundColor =  colourChooser.value;
        });
    } 

// set colour picker to black 

  colourChooser.value = '#000000'
}