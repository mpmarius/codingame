/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = parseInt(readline());
var H = parseInt(readline());
var T = readline().toUpperCase();
var abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
var output = '';
var index = '';
var letter= '';
for (var i = 0; i < H; i++) {
    var ROW = readline();

for (var j = 0; j<T.length; j++){
    letter = T.charAt(j);
    index = abc.indexOf(letter);
        if (index === 0){
            output += ROW.substring(0,L);
            }
        else if (index > 0){
                output += ROW.substring(index*L,index*L+L);
            }
            else if (index < 0) {
                    output += ROW.substring(abc.length*L-L, abc.length*L);
                }
        
    }
output += "\n";   

}
print(output);



//printErr(ROW);
// Write an action using print()
// To debug: printErr('Debug messages...');

//printErr(T);