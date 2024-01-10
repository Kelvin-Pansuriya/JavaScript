// bind() Can merge Object And Function ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

// FunctionName.bind(ObjectName)

{
  // This Is Invalid Syntax Of Bind Method........

  let obj = {
    name: "hello",
  };
  function my() {
    console.log(`${this.name}`);
  }
  let store = obj.bind(my);
  store();
}

{
  // This Is valid Syntax Of Bind Method........

  let obj = {
    name: "name",
    surname: "surname",
  };

  let obj1 = {
    name: "name1",
    surname: "surname1",
  };

  let obj2 = {
    name: "name2",
    surname: "surname2",
  };
  console.log(obj);
  console.log(obj.name);
  console.log(obj.surname);

  console.log(obj1);
  console.log(obj.name);
  console.log(obj.surname);

  console.log(obj2);
  console.log(obj.name);
  console.log(obj.surname);

  function fullName(parameter, argument) {
    console.log(
      `This Is My Name ${this.name} And This Is My Surname ${this.surname} And I Can Also Pass Parameter ${parameter} And Arguments ${argument} Like This`
    );
  }
  let store = fullName.bind(obj);
  let store1 = fullName.bind(obj1);
  let store2 = fullName.bind(obj2);
  store("First Parameter", "Second Argument");
  store1("First Parameter1", "Second Argument1");
  store2("First Parameter2", "Second Argument2");
}
