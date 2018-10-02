// Combinations from n arrays picking one element from each array
/*

Input : [ [1, 2], [3, 4] ]
Output : 1 3
         1 4
         2 3
         2 4

Input : [ [1], [2, 3, 4], [5] ]
Output : 1 2 5
         1 3 5
         1 4 5

 */
var  result =[];

var array = [ [1, 2], [3, 4] ];
permutation(array)
out(result);
result =[];
var array = [ [1], [2, 3, 4], [5] ];
permutation(array)
out(result);
result =[];
var array = [[1,2,3],['a','b','c'],['!','@','#']];
permutation(array)
out(result);


function permutation(arr) {
    var n = arr.length;
    var indices = [];
    for (i = 0; i < n; i++) {
        indices[i] = 0;
    }

    while (1) {
        var res = [];
        for (var i = 0; i < n; i++) {
            res.push(arr[i][indices[i]]);
        }
        result.push(res.join(''));
        var next = n - 1;
        while (next >= 0 &&
        (indices[next] + 1 >= arr[next].length)) {
            next--;
        }
        if (next < 0)
            return;
        indices[next]++;
        for (var i = next + 1; i < n; i++)
            indices[i] = 0;

    }
}

function out(data, name = "yes") {
    console.log("***************************************");
    console.log(name);
    console.log(data);
    console.log("***************************************");
}

