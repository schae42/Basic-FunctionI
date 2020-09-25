function a(){
    return 35;
}
console.log(a())

/* var      value 
a()         35 

console 
35 */


function a(){
    return 4;
}
console.log(a()+a());

/* var      value  
a()            4

console
8*/

function a(b){
    return b;
}
console.log(a(2)+a(4));

/* var          value 
a(b)           b
b             2,4

console 
6 */


/* function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

var         value 
b             3

console
9 */

function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

/* var             value
b                 10

console
40 */

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

/* var           value 
a               
b                 15

console 
4 */

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

/* var              value 
a(b,c)               b*c

console 
10,3
30 */

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

/* var        value 


console 
3 , 4  */

function a(){
    for(var i=0; i<10; i++){
        i = i + 2;
        console.log(i);
    }
}
a();

/* var         value          
i             2, 5, 8, 11

console 
2, 5, 8, 11 */
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

/* var           value
b                 0
c                 10
i                 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console */
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

/* var             value  


console
undefined */ 

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
var z = 10;

/* var           value

console 
undefined*/

function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
var z = 10;

/* var            value 
z                   10

console
 10*/
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
var z = 10;

/* var            value 
z                   15
z                   10
console
15, 10*/

function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

/* var             value
z                   15
console 
15, 15*/