class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	static countUsers() {
		console.log('there are 50 users');
	}

	register() {
		console.log(this.username + ' is now registered ');
	}
}
let bob = new User('bob', 'bob@gmail.com', '34567');

bob.register();

User.countUsers();

class Member extends User {
	constructor(username, email, password, memberpackage) {

		super(username, email, password);
		this.package = memberpackage;
	}
	getpackage() {
		console.log(this.username + ' sub to this pakage ' + this.package + 'package');
	}

}
let mike = new Member('mike', 'mike@gmail.com', '12344', 'stand');

mike.getpackage();

//template literals
let name = 'jhon';

function makeUppercase(word) {

	return word.toUpperCase();
}
let template =
	`<h1>${makeUppercase('hello')}, ${name}</h1>
   <p>this is simple</p> `;

document.getElementById('template').innerHTML = template;

// new string & number method
let string = 'hello , i am not bad';

console.log(string.startsWith('hello'));
console.log(string.endsWith
	('hello'));
console.log(string.includes('hello'));
console.log(Number.isFinite(3));

//defalt params and spread operater

function greet($greeting = 'hello world') {
	console.log($greeting);
}
greet();

let args1 = [1, 2, 3,];
let args2 = [4, 5, 6];
function test() {
	console.log(args1 + '' + args2)
}
test();

 /*set , map , weakset , weakmap  */     

let myArray = [12,34,'45',60];

let mySet = new Set(myArray);
 
	mySet.add('100');
	mySet.delete('45');
	
   console.log(mySet);
   mySet.forEach (function(val){
console.log(val);
   });                   

   let myMap = new Map([['A1','venu'],['B1','gopal']]);
   myMap.set('c1','reddy');
   myMap.delete('A1');
   console.log(myMap);           

let carWeakSet = new WeakSet();

let cars1 = { name: "honda", modal: "civic" };

carWeakSet.add(cars1);

let cars2 = { name: "hero", moda: "splendr" };

carWeakSet.add(cars2);
console.log(carWeakSet);
   

 let carWeakMap = new WeakMap();
 let key1 = {
	 id: 1
 };
 let cars3 = {
	  name: "honda", 
	  modal: "civic" 
	};
	let key2 = {
		id: 2
	};
	let cars4 = {
		 name: "audi", 
		 modal: "r8" 
	   };
   
   carWeakMap.set(key1,cars3,);
   carWeakMap.set(key2,cars4);
   console.log(carWeakMap);
 
/* arrow function => */
let add = function(a,b){
	let sum = a+b ;
    console.log(sum)
}
		add(23,23)
		
		let sub = (a,b) =>{
			let sub = a-b ;
			console.log(sub)
		}
				sub(23,20)