/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
// To debug: printErr('Debug messages...');
var myArray = temps.split(" ");
var min=5526;
var position=0;
printErr(temps);
if (myArray.length === 0){
    print('0');
    }
    else {
        for(var i=0; i<myArray.length; i++) {
            myArray[i] = +myArray[i]; 
           // printErr(myArray[i]);

             if (min > Math.abs(myArray[i])) {
                min = Math.abs(myArray[i]);
                position = i;
                }
             if ( myArray[i] > 0 && myArray[i] == min) {
                position = i;
                }
            } 

    }
print(myArray[position]);


//print('result');