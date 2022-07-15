// 
console.log('\x1Bc'); // clears the console each run


// * Assess if there are any properties within a JavaScript Object

/* ******************* objects ******************* */
console.log('--------- Objects Demo Start ---------');

// * 
/* ********* Use the Constructor Method and Literal Syntax to create new Empty Objects ********* */

// Create Objects
console.log('--------- Creating Objects---------');

//Creating Objects 1: 
//Creating Empty Objects Using the Object Constructor Method
// One way we can construct an object in javascript is using the Object constructfor method.
// note here that we use the keyword new.

let newObj = new Object();

//Check the value of your newly created object
console.log(newObj);

//Verify its value/reference: 
console.log(typeof(newObj));

//Creating Objects 2: 
// We can also create objects using literal syntax, where we create a variable and assign it two empty curly braces
//which we knos is an object
//Creating Empty Objects Using the Literal Syntax
console.log('\n--------- Creating Empty Objects Using Literal Syntax---------\n');

let newObj2 = {};

//Check its value/reference: 
console.log(newObj2);

//Check its type: 
console.log(typeof(newObj2));


/* ********* Create Key-Value Pairs (Properties and Behaviors) in Objects ********* */
console.log('\n--------- Creating Key-Value Pairs on Existing Objects ---------\n');

/*

Here I have created an object using the literal syntax.

objects contain properties or key value pair. So each property has a name, which is called a key
and also a corresponding value.

variables and functions and fucntions within global scope are called variables and functions

however wehn you make a variables and functions in an object these are called methods and properties

Each key- value pair is a property so there would be x properties in this object.
each property is sepearted by a comma.*/



let computer = {
    name: 'macboook',
    brand: 'apple',
    screen: 13,
    colour: 'space grey'
}

//Lets have a go at assigning properties to an object 

//1. Initializing Empty Object using Object Contructor Method

// lets create an object using the Object contructor method 
//we start by declaring a variable and an initiliasing it with our object constructor function

let someObj1 = new Object();

// we can also use dot notation to add properties to an object.
// so . key and then the value

//1a. Adding Properties
someObj1.color = "Blue";
someObj1.brand = "Tesla";
someObj1.model = "3";
someObj1.name = "Tesla Model 3";
someObj1.mph = 0;

//1b. Adding Methods, a method is a property that does something with the date inside. I this case it in changing the speed mph property from 0 -60
someObj1.speedIncrease = function(){
    this.mph = 60;
}

//here you cna see that I am using the keyword this which refers to this object 
//1c. Verify the Type
console.log("\n" + typeof(someObj1) + "\n");

//1d. Verify Properties within the Object
console.log(someObj1);


//2. Initializing Empty Object using Literal Syntax
let someObj2 = {};

//2a. Adding Properties to the Object:
someObj2.color = "Red";
someObj2.brand = "Honda";
someObj2.model = "Civic";
someObj2.name = "Honda Civic";
someObj2.mph = 0;

//2b. Adding Behavior to the Object
someObj2.turboMode = function(){
    this.mph += 50;
}

//2c. Verify the Type
console.log("\n" + typeof(someObj2) + "\n");

//2d. Verify Properties and method within the Object
console.log(someObj2);



/* ********* Read from JavaScript Objects using Dot Notation and Square Bracket Notation ********* */
console.log('\n--------- Read from JavaScript Objects using Dot Notation and Square Bracket Notation ---------\n');

// so now we have created our javascirpt obejcts lets see how to read the values.

// the first way to do this is by using square bracket notation.


//1. Reading from Objects Properties (Values) Using Square Bracket Notation
console.log("The Color of this Object is: " + someObj1["colour"]);
console.log("The Brand of this Object is: " + someObj1["brand"]);
console.log("The Model of this Object is: " + someObj1["model"]);
console.log("The Name of this Object is: " + someObj1["name"]);
console.log("This car is currently going " + someObj1["mph"] + " miles per hour.");

//1a. Applying Objects Behaviors (Functions) Using Square Bracket Notation
someObj1["speedIncrease"]();

//1b. Verify Applied Behavior
console.log("This Object is now moving at " + someObj1["mph"] + " miles per hour.\n");


//2. Reading from Objects Using Dot Notation
console.log("The Color of this Object is: " + someObj2.colour);
console.log("The Brand of this Object is: " + someObj2.brand);
console.log("The Model of this Object is: " + someObj2.model);
console.log("The Model of this Object is: " + someObj2.name);
console.log("Currently this car is going: " + someObj2.mph + " miles per hour.");

//2a. Applying Objects Behaviors (Functions) Using Dot Notation
someObj2.turboMode();

//2c Verify Applied Behaviors
console.log("This Object is now moving at " + someObj2.mph + " miles per hour.");


/* ********* Update JavaScript Objects  ********* */
console.log('\n--------- Update JavaScript Objects ---------\n');

//1. Updating Using Square Bracket Notation:
someObj1["colour"] = "Yellow";
someObj1["brand"] = "Toyota";
someObj1["model"] = "Corolla";
someObj1["name"] = "Toyota Corolla";

//1a. Verify Updated Values: 
console.log(someObj1);


//2. Updating Using Dot Notation: 
someObj2.color = "White";
someObj2.brand = "Nissan";
someObj2.model = "Altima";
someObj2.name = "Nissan Altima";

//2a. Verify the Updated Values
console.log(someObj2);



/* ********* Delete from JavaScript Objects using the keyword `delete` ********* */
console.log('\n--------- Delete from JavaScript Objects using keyword `delete` ---------\n');
//1. Deleting Ludacris Mode from Object 1
delete someObj1.speedIncrease;

//1a. Verify Updated Value
console.log(someObj1);

//2 Deleting Turbo Mode from Object 2
delete someObj2.turboMode;

//2a. Verify Updated Value
console.log(someObj2);


/* ********* Use For...In Loop ********* */
console.log('\n--------- For...In Loop ---------\n');

//1. Initialize an Object:
let pen = {
    color: "Black",
    inkColor: "Black",
    brand: "Bic",
    number: 9
}

//2. Iterate through Object Using For...In

//The body of the for-in loop will execute once for each property of the object.
//The for-in loop does not loop through all of the properties of the object.
// It is can only loop through the enumerable properties such as user-defined properties or inherited user-defined properties

for(property in pen){
    console.log(`This is the key: ${property}`)
    console.log(`This is the value: ${pen[property]}`)
}


/* ********* Working with Object.keys() ********* */

//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
console.log('\n--------- Object.keys() ---------\n');

//1. Initialize an Object: 
const remote = {
    numButtons: 10,
    color: "Black",
    builtInAlexa: false
}

//2. Get Reference to Keys as an Array using Object.keys()
Object.keys(remote);

//2a. Store the Reference into a variable (Optional)
remoteKeys = Object.keys(remote);

//3. Log the Keys to the console.
console.log(`This is using the Object.keys() without storing in a variable: ${Object.keys(remote)}`);
console.log(`This is using the Object.keys() with the variable reference: ${remoteKeys}`);