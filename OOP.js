// RULES FOR OOP IN JS.......

// 0. In OOP Always class Name First Letter Start With Capital Letter(Caps Lock --> On)
// 1. In OOP new Keyword Create Empty Object
// 2. In OOP new Keyword Give Access For this keyword
// 3. In OOP new Keyword Call constructor Function That Reason constructor function is Call First(Means Call Back Function) and constructor has parameter for Create keys in object and prototype can access those keys
// 4. In OOP this keyword Create key of object
// 5. ObjectName.prototype == Object_Store_In_VariableName.__proto__  <------> [true]
// 6. Prototype Of Object Is An Empty Space For Create Any Logical Task
// 7. In OOP Inheritence extendes keyword Connect Child Class with Parent Class
// 8. In OOP Inheritence super() keyword Connect Child Class with Parent Class key , prototype and super() Always Written Under Child Class's constructor
// 9. In OOP Getter And Setter
// 10. In OOP Encapsulation

// Here Link For Online Reference https://www.freecodecamp.org/news/object-oriented-javascript-for-beginners/
// Here Syntax Of OOP

{
  // OOP Method 1 Syntax............................

  let Method_One = function (para, meter) {
    this.key_name = para;
    this.key_surname = meter;
  }; // This Is Constructor Function Of OOP

  let demo = new Method_One("pass", "any data type value");
  let secondDemo = new Method_One("pass", "any data type value");

  console.log(demo); // Give Us Output Of Object Created With OOP Method
  console.log(secondDemo);

  // MAINLY USE THIS METHOD FOR CREATE PROTOTYPE
  Method_One.prototype.add = function (parameter, forThisFunction) {
    console.log(
      `hello ${parameter} ${forThisFunction} ${this.key_name} ${this.key_surname}`
    );
  };

  // This Method Also Create Prototype But This Method Is Not Better For Create Prototype
  demo.__proto__.added = function (arg, thisFunctionArg) {
    console.log(`new added ${arg} ${thisFunctionArg}`);
  };

  secondDemo.__proto__.newAdd = function (arguments, thisFunctionArguments) {
    return `newADD ${arguments} ${thisFunctionArguments}`;
  };

  demo.add("pass", "any data type value"); // For Call Logical Tast Of Object Means Call prototype
  demo.added("pass", "any data type value");
  console.log(demo.newAdd("pass", "any data type value"));

  secondDemo.add("pass", "any data type value"); // For Call Logical Tast Of Object Means Call prototype
  secondDemo.added("pass", "any data type value");
  console.log(secondDemo.newAdd("pass", "any data type value"));
}

{
  // OOP Method 2 Syntax............................

  class Method_Two {
    constructor(para, meter) {
      this.key_name = para;
      this.key_surname = meter;
      this.key_about = this.add;
      // this.key_about = this.add()
    }

    add(parameter, forThisFunction) {
      console.log(`hello ${parameter} ${forThisFunction}`);
      return `hello ${parameter} ${forThisFunction}`;
    }
  }

  let demo = new Method_Two("Key Name", "Any Data Type"); // Give Us Output Of Object Created With OOP Method
  let secondDemo = new Method_Two("Key Name", "Any Data Type");

  console.log(
    (new Method_Two("Key Name", "Any Data Type").__proto__.darshan = "darshan")
  );
  console.log(demo.darshan);
  // console.log(secondDemo);
  console.log(demo.key_about);
  // console.log(demo.key_about());

  // MAINLY USE THIS METHOD FOR CREATE PROTOTYPE
  Method_Two.prototype.otherAdd = function (arg, thisFunctionArg) {
    console.log(`new added ${arg} ${thisFunctionArg}`);
  };

  // This Method Also Create Prototype But This Method Is Not Better For Create Prototype
  demo.__proto__.added = function (arguments, thisFunctionArguments) {
    console.log(`new added ${arguments} ${thisFunctionArguments}`);
  };

  secondDemo.__proto__.newAdd = function (arguments1, thisFunctionArguments1) {
    return `newADD ${arguments1} ${thisFunctionArguments1}`;
  };

  demo.add("para", "meter");
  demo.otherAdd("para", "meter");
  demo.added("para", "meter");
  demo.newAdd("para", "meter");

  secondDemo.add("para", "meter");
  secondDemo.otherAdd("para", "meter");
  secondDemo.added("para", "meter");
  secondDemo.newAdd("para", "meter");
}

{
  // OOP Method 2 With Inheritence Syntax............................

  class One {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    year(parameter) {
      console.log(`${2022 - this.age} ${parameter}`);
    }
  }

  let person = new One("name", 10);
  let nextPerson = new One("secondName", 20);

  console.log(person);
  console.log(nextPerson);

  person.year("pass");
  nextPerson.year("pass");

  class Two extends One {
    constructor(name, age, about) {
      super(name, age); // Here Declare super() But Also We Declare super() keyword's parameter on Our Child Class constructor
      this.about = about;
    }
  }
  let childPerson = new Two("new_name", 30, "hello world");
  console.log(childPerson);
  childPerson.year("pass");
}

{
  // OOP Syantax Of Encapsulation

  class One {
    #year;
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
      this.#year = 2022;
    }
  }
  let one = new One("hello", 18);
  console.log(one);
}

// OOP Method 1 TASK............................

// let Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// Person.prototype.findBirthYear = function () {
//   console.log(2022 - this.age);
// };

// // Person.prototype.fullName = (surname) => {
// //   console.log(`${surname} ${this.name}`);
// // };

// Person.prototype.fullName = function (surname) {
//   console.log(`${surname} ${this.name}`);
// };

// let darshan = new Person("darshan", 18);
// let kelvin = new Person("kelvin", 21);

// console.log(darshan);
// console.log(kelvin);

// darshan.findBirthYear();
// darshan.fullName("bhuva");

// kelvin.findBirthYear();
// kelvin.fullName("pansuriya");

//--------------------------------------------------------------------------------------------------------------

// OOP Method 2 TASK..............

// class Car {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }
//   Accelerate() {
//     if (this.speed == 0 || this.speed < 0) {
//       console.log(`Your ${this.name} Car Is On Neutral Mode`);
//       return this.speed = 10;
//
//  }
//     else if (this.speed > 0 && this.speed < 400) {
//       console.log(`Your ${this.name} Car Is Going On Speed : ${(this.speed += 10)}`);
//     }
//     else if (this.speed >= 400) {
//       console.log(`Your ${this.name} Car Is Going On Highest Speed`);
//     }
//   }

//   Break() {
//     if (this.speed == 0 || this.speed < 0) {
//       console.log(`Your ${this.name} Car Is On Neutral Mode`);
//     }
//
//    else if (this.speed > 0 && this.speed <= 400) {
//       console.log(`Your ${this.name} Car Speed Is Now Slow Down And Your Current Speed Now : ${(this.speed -= 5)}`);
//       // console.log( `Your ${this.name} Car Speed Is Now Slow Down And Your Current Speed Now : ${(this.speed -= this.speed)}`);
//     }
//     // else if (this.speed >= 400) {
//     //   console.log(`Your ${this.name} Car Is Going On Highest Speed`);
//     //   return this.speed = 395;
//     // }
//   }
// }

// let bmw = new Car("BMW", 80);
// let volvo = new Car("Volvo", 80);

// console.log(bmw);
// console.log(volvo);

// class EVCar extends Car {
//   constructor(name, speed, charge) {
//     super(name, speed);
//     this.evName = name;
//     this.evSpeed = speed;
//     this.evCharge = charge + "%";
//   }
// }

// let tata = new EVCar("TaTa", 10, 100);
// console.log(tata);

//   let a = {
//     name:"abcd",
//     age:18,
//     about:function(){
//         console.log(`${a.name} ${this.age}`);
//     }
//   }
//   console.log(a.about);
//   console.log(a.about());
