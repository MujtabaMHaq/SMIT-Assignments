// Q1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var MultiDimArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(MultiDimArray);

// Q2. Declare and initialize a multidimensional array representing the following matrix:

// var MyArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// Q3. Write a program to print numeric counting from 1 to 10.

// var i=1;

// for( i; i<=10; i++ ){
//     document.write(i + "<br />");
// }

// Q4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var i=1;
// var tableNumber = +prompt("Please enter which number would you like to print the table of:")
// var tableLength = +prompt("Please enter length of table:")

// for( i; i<=tableLength; i++ ){
//     document.write( tableNumber + " x " + i + " = " + tableNumber*i + "<br />");
// }

// Q5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = [ "apple" , "banana" , "mango" , "orange" , "strawberry" ];
// var i = 0;
// var j = 0;

// for( i; i<fruits.length; i++ ){
//     document.write( fruits[i] + "<br />" );
// }

// document.write("<br />");

// for( j; j<fruits.length; j++ ){
//     document.write( "Element at index " + j + " is " + fruits[j] + "<br />" );
// }

// Q6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<br />1 to 15 Counting <br /><br />");

for( i = 1; i<=15; i++ ){
    document.write( i + "<br />")
}

document.write("<br />1 to 10 Reverse counting <br /><br />");

for( i = 10; i>=1; i-- ){
    document.write( i + "<br />")
}

document.write("<br />Even Numbers 2 to 20 <br /><br />");

for( i = 1; i<=20; i++ ){
    if(i%2==0){
        document.write(i + "<br />");
    }
}

document.write("<br />Odd Numbers 1 to 19 <br /><br />");

for( i = 1; i<=20; i++ ){
    if(i%2==1){
        document.write(i + "<br />");
    }
}

document.write("<br />K Series Numbers 2 to 20 <br /><br />");

for( i = 1; i<=20; i++ ){
    if(i%2==0){
        document.write(i + "k <br />");
    }
}