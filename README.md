# task2.unfinished

create a page with an interactive interface. Initially, this page will have an input box and a submit button. The user should be able to enter a whole number (X) into the input box. Upon clicking the submit button, the page should transition to a new view, which displays X number of boxes evenly distributed on the visible screen.

Subtask A: The boxes need to be arranged so that they collectively form a shape that approximates a square. To illustrate, here are some examples for specific values of X:
 
If X = 1, the page should display a single large box in the center of the page, occupying most of the area.
If X = 2, two boxes should be shown, occupying the full space. These could be aligned either vertically or horizontally, as both configurations would equally deviate from forming a perfect square.
If X = 3, the boxes should be arranged with two boxes in a row (or column), and the third box positioned beside one of the other boxes.
If X = 4, the boxes should form a 2x2 grid.
If X = 5, the boxes should be arranged so that they are as close to a square configuration as possible, given the constraints.

Please note that as the number of boxes increases, they should always be arranged in a way that best approximates a square shape. The goal is to display these boxes in the most square-like arrangement possible while filling up the maximum space of the visible screen.

subtask b: specify maximum box side length in the initial page, the user interface should be updated to include a new input box to specify the maximum side length for individual boxes. after the user inputs a number (y), when the submit button is clicked, the page should transition to the new view displaying x number of boxes as before. however, the boxes should now be constrained such that no side length exceeds the user-specified maximum length y, while still approximating a square shape collectively and occupying as much of the visible screen as possible.

 subtask c: choose shape of individual boxes update the initial page once again, this time to include a dropdown menu where the user can select the shape of the individual boxes. the options should include square, rectangle, and equilateral triangle. depending on the shape selected, the user will be asked to provide additional information: if the square or equilateral triangle is selected, ask the user for the maximum side length. if the rectangle is chosen, ask the user to input the maximum length and breadth.

 subtask d: add circle shape option in the dropdown menu for individual box shapes, add an additional option for circle. if the user selects circle, prompt them to enter a value for the radius. 

 subtask e (optional for outstanding results): choose overall shape introduce another dropdown menu on the initial page for the user to select the overall shape that the boxes should collectively form. the options should mirror the individual box shape options: square, rectangle, equilateral triangle, and circle. regardless of the shape chosen, arrange the boxes to best approximate the selected overall shape, while maximizing the occupied space within the given constraints. if the user selects triangle, for instance, the boxes should be arranged as closely as possible to the shape of a triangle.



