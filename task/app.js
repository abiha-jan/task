// Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its success.

function myvalue(){
    let array=[1, 2, 3, 4, 5]
    array.reverse();
    console.log(array)
}
myvalue()


// Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad data.”


function filters(){
    let input=parseInt(prompt("enter five number"));
    let array=[];
    array.push(input)
    console.log(array)

}
filters();


// Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.

function thevowels(){
    let vowels=["a" , "e" , "i" , "o" , "u"]
    console.log(vowels)
    return vowels
}
thevowels()


// 4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.

function palindrome(){
    let palindrome=["kayak" , "mom" , "reder" , "refer"]
    let string="kayak"
    reverse=string.split("").reverse().join("")
    console.log(reverse)
    return palindrome
}
palindrome()


// 5. Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.


function check(){
    let num1=parseInt(prompt("enter first number"))
    let num2=parseInt(prompt("enter second number"))
    if(num1>=50 && num1<=99 || num2>=50 &&  num2<=99)
    console.log("true")
else
console.log("false")
}

// 6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.

 function nim(array,fn){
        return Math.nim(...array.map(fn))
    const array1=[1,2,3,4,5]
    const array2=[1,2,3,4,5]
    const array3=[1,2,3,4,5]
    const array4=[1,2,3,4,5]
    const array5=[1,2,3,4,5]
    const array6=[1,2,3,4,5]
    const array7=[1,2,3,4,5]
    const array8=[1,2,3,4,5]
    const array9=[1,2,3,4,5]
    const array10=[1,2,3,4,5]
   
    console.log(nim(array1,x=>x*x))
    console.log(nim(array2,x=>x*x))
    console.log(nim(array3,x=>x*x))
    console.log(nim(array4,x=>x*x))
    console.log(nim(array5,x=>x*x))
    console.log(nim(array6,x=>x*x))
    console.log(nim(array7,x=>x*x))
    console.log(nim(array8,x=>x*x))
    console.log(nim(array9,x=>x*x))
    console.log(nim(array10,x=>x*x))
  }
 
nim()

// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.

function updated(){
    let str=prompt("enter string")
    if(str.length>3)
    console.log(str.slice(-3).repeat(5))
console.log()
}
updated()








// 8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.



// 9. Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.

function roundnumber(){
    
}




// 10.function findIndex(array, item) 
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i; 
        }
    }
    return -1;

const myArray = [10, 20, 30, 40, 50];
const itemToFind = 30;

const index = findIndex(myArray, itemToFind);

if (index !== -1) {
    console.log(`The index of ${itemToFind} in the array is: ${index}`);
} else {
    console.log(`${itemToFind} was not found in the array.`);
}
