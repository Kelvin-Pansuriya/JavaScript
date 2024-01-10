{
  // IIFE Immediately Invoked Function Expression Means Anonymouse Function

  (function (para, meter) {
    console.log(para);
    console.log(meter);
  })("Immediately Invoked", 2);
}

{
  // CallBack Function In Js

  function first(parameter) {
    console.log(parameter);
  }
  function second(para, call) {
    console.log(para);
    call("First Parameter");
  }
  second("Pass Value", first);
}

{
  // CallBack Function
  function f() {
    console.log("maulik");
  }
  function s(f) {
    console.log("pokiya");
    f();
  }
  function t(s) {
    console.log("hello");
    s(f);
  }
  function four(t) {
    console.log("world");
    t(s);
  }
  four(t);
}

{
  // Clouser Function In Js

  {
    function first(parameter) {
      console.log(parameter);
      function second(pass) {
        console.log(pass);
      }
      second("Secondary Function");
    }
    first("Primary Function");
  }

  {
    function first(parameter) {
      console.log(parameter);
      function second(pass) {
        console.log(parameter + pass);
      }
      return second("Secondary Function");
    }
    let main = first;
    main("Primary Function");
  }

  {
    let second;
    function first(para) {
      console.log(para);
      second = function (pass) {
        console.log(pass + " " + para);
      };
    }
    first("Primary Function");
    second("Secondary Function");
  }

  {
    let second;
    function first(para) {
      console.log(para);
      return (second = function (pass) {
        console.log(pass + " " + para);
      });
    }
    let main = first("Primary Function");
    main("Second Function Parameter");
  }
}
