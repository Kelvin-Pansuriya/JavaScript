// call() Method ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// apply() Method ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// call() And apply() Is Work Like OOP Class Inheritence
// In Every Object, ObjectName.KeyValue == this.KeyValue
// In call() Method We Can Pass Parameter(Argument) Separately
// In apply() Method We Can Pass Parameter(Argument) In Array
// MainObject.MainObject'sFunctionKeyName.call(PrimaryObject, parameter, argument(parameter))
{
  let info = {
    name: "kelvin",
    myFunction: function (parameter, argument) {
      console.log(
        `My Name Is ${this.name} And This Is Parameter${parameter} And This Is Second Parameter Means Arguments ${argument}`
      );
    },
  };
  console.log(info);
  console.log(info.name);
  info.myFunction("FirstParameter", "SeconParameter(Arguments)");

  let info2 = {
    name: "Pansuriya",
  };
  console.log(info2);
  console.log(info2.name);
  info.myFunction.call(info2, "FirstParameter", "SeconParameter(Arguments)"); // Here We Can Pass Arguments(Parameter) In call() Like This

  info.myFunction.apply(info2, ["FirstParameter", "SeconParameter(Arguments)"]); // Here We Can Pass Arguments(Parameter) In apply() Like This
}
