//Arithmatic operators

let a=4
let b=5
let c= a+b// Addition
console.log(c)

console.log(b-a)//Substraction
console.log(a*b)//multiplication
console.log(4/2)//division
console.log("Mother"+"India")//concatination in case of strings
console.log("India"+"1")//converts number as string and concatinates

//2.Logical operators

let x=true
let y=false
console.log(x&&y)//AND operator - result is true when both the values are true
console.log(x||y)//OR operator - result is true if one of the value is true
console.log(!x)//NOT operator - inverts the value

//3. Comparision operator
let str1="test"
let str2="test"
let str3="TEST"
console.log(str1==str2)//Gives true, it is case sensitive
console.log(str1==str3)//Gives false

let m="10"
let n=10
console.log(m==n)//compares only value and gives true
console.log(m===n)//compares value along with data type and gives false

console.log(2<3)//less than
console.log(5>4)//greater than
console.log(6>=4)//greater or equal
console.log(2<=1)//less than or equal

//4. Assignment operator
// x=2
// x+=3//x=x+3
// y-=2//y=y-2
// y*=3//y=y*3
// z/=4//z=z/4
// z%=2//z=z%2

x**2//x to the power of 2

//Ternary or conditional operator
//x=condition ? value1:value2
let p="match"
let q="unmatch"
r=2==="2"?p:q
console.log(r)