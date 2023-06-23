function showBoxes() {
    var x = parseInt(document.getElementById("numberInput").value);
    var y = parseInt(document.getElementById("maxSideLength").value);
    var shape = document.getElementById("shapeSelect").value;
    var overallShape = document.getElementById("overallShapeSelect").value;
  
    if (isNaN(x) || x < 1 || isNaN(y) || y < 1) {
      alert("Please enter valid whole numbers greater than 0.");
      return;
    }
  
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
  
    page1.style.display = "none";
    page2.style.display = "block";
  
    var container = document.getElementById("boxContainer");
    container.innerHTML = "";
    
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
      
}