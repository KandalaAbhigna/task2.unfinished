function showBoxes() {
    var x = parseInt(document.getElementById("numberInput").value);
    var y = parseInt(document.getElementById("maxSideLength").value);
    var shape = document.getElementById("shapeSelect").value;
    var overallShape = document.getElementById("overallShapeSelect").value;
  
    if (isNaN(x) || x < 1 || isNaN(y) || y < 1) {
      //////////////////////////////alert("Please enter valid whole numbers greater than 0.");
      return;
    }
	
	
			const body = document.body;
            const elementsToRemove = [];

            // Collect elements to remove
            for (let i = 0; i < body.children.length; i++) {
                const child = body.children[i];
                if (child.id !== 'container') {
                    elementsToRemove.push(child);
                }
            }

            // Remove collected elements
            for (let i = 0; i < elementsToRemove.length; i++) {
                const element = elementsToRemove[i];
                element.remove();
            }
  
    //var container = document.getElementById("boxContainer");
	
	createBoxesRecursive(x, y, shape);
	
	/*
    container.innerHTML = "<p>hai</p>";
    
    var numCols = Math.ceil(Math.sqrt(x));
    var numRows = Math.ceil(Math.sqrt(x));
     
    if (overallShape === "square") {
      numRows = Math.ceil(Math.sqrt(x));
      numCols = numRows;
      console.log(numCols)
      console.log(numRows)
       
    } else if (overallShape === "rectangle") {
      numRows = Math.ceil(x / y);
      console.log(numRows = Math.ceil(x / y))
      numCols = Math.ceil(x/numRows);
      console.log(numCols = Math.ceil(x/numRows))
    } else if (overallShape==="equilateralTriangle"){
        numRows=Math.ceil((2 * x)/(Math.sqrt(3) * y));
        numCols=Math.ceil((x/numRows) * (Math.sqrt(3) / 2));
    } else if (overallShape === "circle") {
        var radius = Math.sqrt((x * y) / (Math.PI));
        var sideLength = Math.min(2 * radius, y);
        numRows = Math.ceil(x / (sideLength / y));
        numCols = Math.ceil(x / numRows);
      }
    
      var boxWidth = y;
      var boxHeight =y;
    
      for (var i = 0; i < x; i++) {
        var box = document.createElement("div");
        box.className = "box " + shape;
        box.style.width = boxWidth + "px";
        box.style.height = boxHeight + "px";
        container.appendChild(box);
        box.setAttribute('id', 'boxes'+i)
      }
	  
	  */
      
}


        function createBoxesRecursive(n, maxWidth, shape) {
            const container = document.createElement('div');
            container.style.width = '100%';
            container.style.height = '100%';
            document.body.appendChild(container);

            splitScreen(container, n, maxWidth, shape);
        }
		function randomcolor() {
            return Math.floor(Math.random() * 255);
        }

        function splitScreen(container, n, maxWidth, shape) {
			
			var width = container.offsetWidth;
			var height = container.offsetHeight;
			
			////////////////////alert("width" + width);
			////////////////////alert("length" + length);
		totalSqaures = 0;
            if (n === 0) {
                const box = document.createElement('div');
                box.className = 'box';
                box.style.width = '100%';
                box.style.height = '100%';
                container.appendChild(box);
            } else {
                let rows, cols;
				
				  ////////////////alert(shape);
				  
				
                if (n % 2 === 0) {
                    rows = 2;
                    cols = n / 2;
                } else {
                    rows = Math.ceil(Math.sqrt(n));
                    cols = Math.ceil(n / rows);
                }


                cellWidth = 100 / cols;
                cellHeight = 100 / rows;
				
				
let relativeWidth = width * cellWidth / 100;
let relativeHeight = height * cellHeight / 100;
let relativeMaxLength = 0;
if(shape == "square") {
	////////alert("sqaure");
relativeMaxLength = Math.min(relativeHeight, relativeWidth, maxWidth);
relativeWidth = relativeMaxLength;
relativeHeight = relativeMaxLength;
}
////////alert(relativeMaxLength);
////////alert(width);
////////alert(height);
////////alert(relativeHeight);
////////alert(relativeWidth);
let maxCellWidth = Math.min(relativeWidth, maxWidth) * 100/width;
let maxCellHeight = Math.min(relativeHeight, maxWidth) * 100/height;	
////////////////alert(shape);


	if(n%cols != 0 && ((n%cols) * (width*maxCellWidth/100) < maxWidth))
	{
		////////alert("haii");
				let finalRows = rows-1;		
                
                var newCellHeight = 100 / finalRows;
				
				
relativeWidth = width * cellWidth / 100;
relativeHeight = height * newCellHeight / 100;
relativeMaxLength = 0;
if(shape == "square") {
	////////alert("sqaure");
relativeMaxLength = Math.min(relativeHeight, relativeWidth, maxWidth);
relativeWidth = relativeMaxLength;
relativeHeight = relativeMaxLength;
}
////////alert(relativeMaxLength);
////////alert(width);
////////alert(height);
////////alert(relativeHeight);
////////alert(relativeWidth);
maxCellWidth = Math.min(relativeWidth, maxWidth) * 100/width;
maxCellHeight = Math.min(relativeHeight, maxWidth) * 100/height;

				
				//relativeHeight = height * newCellHeight / 100;
				
                //maxCellHeight = Math.min(relativeHeight, maxWidth) * 100/height;
				
				

				
				// if(maxCellWidth < maxWidth)
				// {
					// maxCellWidth = maxWidth * cols;
					
				// }
	}


				
				//////////////////////////////alert("cellwidth" + cellWidth);
				//////////////////////////////alert("maxWidth" + maxWidth);
				
                //let maxCellWidth = Math.min(cellWidth, maxCellWidth);
                //let maxCellHeight = Math.min(cellHeight, maxCellHeight);
////////////////////alert(shape);
switch(shape) {
  case "square":
  ////////////////alert(shape);
  
  //maxCellWidth = maxCellHeight = Math.min(maxCellHeight, maxCellWidth);

    // code block
    break;
  default:
    // code block
}

				//////////////////////////////alert("maxCellWidth" + maxCellWidth);
				//////////////////////////////alert("maxCellHeight" + maxCellHeight);
				
				
				
				////////////////////////////alert(maxWidth + " " + maxCellWidth + " " + n + " " + cols);
                for (let i = 0; i < rows; i++) {
					if(n<=0) break;
					
				////////////////////////////alert(i);
////////////////////////////alert( maxCellWidth * (n%cols));				
if((i == (rows - 2) || (rows-2) < 0) && n%cols != 0)
{
	if(maxWidth * (n%cols) >= ((maxCellWidth * width/100) * (cols))) 
	{
		////alert("nothing");
		//nothing
	}
	////////////////////////////alert("hi");
	////////////////////////////alert(i + " " +  rows + " " +  cols + " " +  cellWidth + " " +  maxWidth);
	else{
		var oldMaxCellWidthTotal = maxCellWidth * width * cols/100;
cols = n;
// more columns so less width
var newMaxCellWidthTotalAbsolute = oldMaxCellWidthTotal / cols;

maxCellWidth = Math.min(newMaxCellWidthTotalAbsolute, maxWidth) * 100/width;

var oldMaxCellHeightTotal = maxCellHeight * height /100;
//cols = n;
// more columns so less width
var newMaxCellHeightTotalAbsolute = oldMaxCellHeightTotal * 2;

maxCellHeight = Math.min(newMaxCellHeightTotalAbsolute, maxWidth) * 100/height;




//maxCellWidth = Math.min(maxCellWidth, maxWidth);
	}

	//////////////////////////////alert(i + " " +  rows + " " +  cols + " " +  cellWidth + " " +  maxWidth);

}

if(i == rows -1)
{
	var oldMaxCellWidthTotal = maxCellWidth * width * cols/100;
cols = n;
// more columns so less width
var newMaxCellWidthTotalAbsolute = oldMaxCellWidthTotal / cols;

maxCellWidth = newMaxCellWidthTotalAbsolute * 100/width;

}


var finalHeight = maxCellHeight;
var finalWidth = maxCellWidth;
if(shape == "square")
{
	////alert("here2");
	var lastRowHeight = maxCellHeight * height/100;
	var lastRowWidth = maxCellWidth * width / 100;
	
	var finalSizeOfRow = Math.min(lastRowHeight, lastRowWidth);
	
	finalHeight = finalSizeOfRow * 100/height;
	finalWidth = finalSizeOfRow * 100/width;
	
	
	////alert(finalHeight);
	////alert(finalWidth);
}


                    const row = document.createElement('div');
					////////alert(maxCellWidth*cols);
                    row.style.width = (finalWidth * cols) + '%';
					
                    row.style.height = finalHeight + '%';
					
                    //row.style.height = cellHeight + '%';
                    container.appendChild(row);

// if(i == rows -2 )
// {
	// //////////////////////////////alert(i);
	// //////////////////////////////alert(rows);
	
	// if(n%cols != 0 && ((n%cols) * maxCellWidth < 100))
	// {
		// //////////////////////////////alert(n);
		// //////////////////////////////alert(cols);
		// //////////////////////////////alert(maxCellWidth);
// cols = n;
// maxCellWidth = 100 / cols;

		// //////////////////////////////alert(n);
		// //////////////////////////////alert(cols);
		// //////////////////////////////alert(maxCellWidth);
	// }
// }

var finalHeight = 100;
var finalWidth = maxCellWidth;
if(shape == "square")
{
	////alert("here2");
	var lastRowHeight = maxCellHeight * height/100;
	var lastRowWidth = maxCellWidth * width / 100;
	
	var finalSizeOfRow = Math.min(lastRowHeight, lastRowWidth);
	
	finalHeight = finalSizeOfRow * 100/height;
	finalWidth = finalSizeOfRow * 100/width;
	
	finalHeight = 100;
	finalWidth = 100/cols;
	
	////alert(finalHeight);
	////alert(finalWidth);
}

                    for (let j = 0; j < cols; j++) {
					//////////////////////////////alert(n + " " + j + " " + i);
                            const cell = document.createElement('div');
							cell.className = "box"
							
                            cell.style.width = finalWidth + '%';
							
                            //cell.style.width = cellWidth + '%';
                            cell.style.height = finalHeight + '%';
                            cell.style.float = 'left';
							cell.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor()+ ',' + randomcolor() + '\)';
                            row.appendChild(cell);
n--;
                        }
                    }
                }
            }
			
			
