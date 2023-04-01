
///// جلسه دوم 

// let person={
//     first_name:'sadeq',
//     last_name:'khan',
//     fullname:function(){
//         console.log(this.first_name+' '+this.last_name);
//     }
// };

// person.fullname();

//// پایان جلسه دوم

//// جلسه سوم

// function Person(name){
//   this.name = name;
  
// }

// // Person();

// const ali = new Person('ali');
// const mostafa = new Person('mostafa');

// console.log(ali);


// function Person(firstName,lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
  
//     this.fullName = function(){
//       return this.firstName +' '+ this.lastName;
//     }
//   }
  
  
//   const ali = new Person('ali','sheikh');
  
//   console.log( ali.fullName() );

  /// پایان جلسه سوم


//   class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;

       
//     }
//     fullName () {
//         return this.firstName + ' ' + this.lastName;
//     };
// }
      
      
//       const ali = new Person('ali','sheikh');
      
//       console.log( ali.fullName() );


  //// جلسه پنجم

// class Person {
//    // method and property
// }

// const ali = new Person();

// console.log(ali);


// class Person {
//    constructor(name, family) {
//       this.name = name;
//       this.family = family;
//   }
// }

// const ali = new Person('Ali','Sheikh');

// console.log(ali);


// class Person {
//     constructor(name, family) {
//       this.name = name;
//       this.family = family;
//     }
  
//     getInfo() {
//       return this.name + " " + this.family;
//     }
//   }
  
//   const ali = new Person("Ali", "Sheikh");
  
//   console.log( ali );
  //// پایان جلسه پنجم

  /// جلسه ششم

//   class Person {

//     constructor( name, family ) {
//       this.name = name;
//       this.family = family;
//     }
  
//     static getInfo(name,family) {
//       return name + " " + family;
//     }
  
//   }
  
//   // const ali = new Person('Ali','Sheikh');
  
//   // console.log( ali.getInfo() );
  
//   console.log( Person.getInfo('sadeq ','khan') );

  ////جلسه هشتم 

//   class Person {

//     constructor( name, family ) {
//       this.name = name;
//       this.family = family;
//     }
  
//     getInfo() {
  
//       return this.name + " " + this.family;
      
//     }
  
//   }
  
  
//   class Age extends Person {
  
//     constructor( name, family, age ) {
//       super(name,family)
//       this.age = age;
//     }
  
//     getInfo() {
  
//       return this.name + " " + this.family + " : " + this.age;
  
//     }
  
//   }
  
  
//   const ali = new Age('Ali','Sheikh','27');
  
//   console.log( ali.getInfo() );

  /// جلسه نهم 

//   class Sum{

// 	constructor(message){
// 		this.message = message;
//   }
  
// 	get sum(){
// 		return this.message + ": " + (this.A + this.B);
//   }
  
// 	set sum(parameter){
// 		this.A = parameter[0];
// 		this.B = parameter[1];
// 	}
	
// }

// let sumNumbers = new Sum("sum of two number");

// sumNumbers.sum = [7,19];

// console.log( sumNumbers.sum );
