// async And await ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#:~:text=Use%20of%20async%20and%20await,you%20will%20get%20a%20SyntaxError%20.
// Here async Declare new Promise
// Here await Declare fulfilled(resolve) Promise callBack Means .then()

// {
//   // Syntax Of async And await

//   async function my(){

//     let declare = await
//   }
// }
{
  let url = `https://jsonplaceholder.typicode.com/posts`;
  async function my(url) {
    let store = await fetch(url);
    console.log(store);
    let response = await store.json();
    console.log(response);
    let newurl = `${url}/2`;
    let a = await fetch(newurl);
    let b = await a.json();
    console.log(b);
  }
  my(url);
}
console.log(my());
{
  let url = `https://jsonplaceholder.typicode.com/posts`;
  function my(url) {
    return new Promise(function (resolve, reject) {
      fetch(url).then((response) => {
        return resolve(response.json());
      });
    });
  }
  my(url).then((data) => {
    console.log(data);
  });
}
// {
//   // Wrong Way Of Fetch Method :- First Promise Fulfilled And Also Return Second Promise But Second Promise Reject Or First Promise Prototype Shows Those Fetch Data

//   let url = `https://jsonplaceholder.typicode.com/posts`;
//   function my(url) {
//     return new Promise(function (resolve, reject) {
//       fetch(url).then((response) => {
//         let str = response.json();
//         console.log(str);
//         return resolve(response.json()); // Output :- Shows Error For Reason We Already Use str.....
//       });
//     });
//   }
//   my(url).then((str) => {
//     console.log(str);
//   });
// }
// console.log(fetch(`https://jsonplaceholder.typicode.com/posts`));
