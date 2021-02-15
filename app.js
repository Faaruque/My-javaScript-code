//Loop for Array.....

var number = [10,20,30,40,50,60]

for(var x = 0; x < 6; x ++){
    console.log(number[x])
}

//Loop for Array with sum....
var num = [10,20,30,40,50]
var sum = 0;
for( var x = 0; x < 5; x ++){
    console.log(num[x]);
    sum = sum + num [x];
}
console.log('TOTAL = ' + sum);


//User Input Subtration....
var num = new Array();

for( var x = 0; x < 5; x ++){
    num [x] = parseInt(prompt('Enter Any Five Number'));
}

var sum = 0;

for( var i = 0; i < 5; i ++){
    console.log(num[x]);
    sum = sum + num[i];
}
console.log('Sum = ' + sum)