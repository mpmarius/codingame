/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var obj={};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0].toLowerCase(); // file extension
    var MT = inputs[1]// MIME type.
    
    obj[EXT] = MT; //create obj with prop EXT value MT
}

for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    var fileExt = FNAME.toLowerCase().split('.');
    var len = fileExt.length;
    var check = fileExt[len - 1];
    var isString = typeof fileExt[len-2] //if first elem is string name of file is valid
    if(obj[check] && isString == 'string'){
      print(obj[check])
    }    else {print('UNKNOWN') }
}

printErr(JSON.stringify(obj))
// Write an action using print()
// To debug: printErr('Debug messages...');
 // For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
