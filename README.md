# JavaScript Calculator

Calculator:
To be submitted by Tuesday 5th of October
-   HTML/SCSS
1. Create a calculator to be rendered to the html page
1. it should have number keys from 0 to 9
1. It should have operator keys (+, -, /, \*)
It should handle decimals
1. It should have a display rendering the current calculation in a box at the top
1. You should choose a picture of a calculator from the Internet and reproduce it in HTML/SCSS
-   JavaScript
1. Should render the current calculation in a box at the top (calculator display)
1. It doesn’t need to support orders of operation
1. It should not use eval() or Function() constructor (edited) 

## Calculator Challenge

What do we need?

1. A function that takes 3 arguments (2 numbers + 1 operator) and that return the result.

2. Have a way to click on number keys and create string (look into parseInt)() or parseFloat() function if you want to work with number type). Check if the number is smaller than 10 digits. 
3. A way to store the numbers in variables.
4. A way to store operator clicked in a variable. 
5. Have result displayed when clicking the `=` symbol. (store the result value in a variable).
6. Check if the numbers contain a '.'. If it does not, when clicking on the dot, add a dot. It it does, do nothing. (Grab value that is displayed on the screen for the check).
7. Clear button should reset all variables.