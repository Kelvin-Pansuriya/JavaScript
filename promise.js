"use strict";

// Promise Has Three Step 1 Stpe :- Pending, 2 Step :- Fulfilled (resolve), And 3 Step :- Reject
// new Promise Has 1 parameter Means resolve And 2 parameter Means reject
// In Promise, Fulfilled (Resolve) Promise callBack Function Is .then(function(){})
// In Promise, Reject Promise callBack Function Is .catch(function(){})
// In Fulfilled (Resolve) Promise, If We Return Something Then We Get New Fulfilled Promise

{
  // Promise Syntax 1...
  // let a = new Promise(function(resolve,reject){
  //     if(){
  //         resolve("Data....")
  //     }
  //     else{
  //         reject("Error....")
  //     }
  // })
  // a.then(function(passData){
  //     console.log(passData);
  // }).catch(function(passError){
  //     console.log(passError);
  // })
}

{
  //   Promise Syntax 2...
  //   function a(){
  //       return new Promise(function(resolve,reject){
  //         if(){
  //             resolve("Data....")
  //         }
  //         else{
  //             reject("Error....")
  //         }
  //       })
  //   }
  //   a().then(function(passData){
  //       console.log(passData);
  //   }).catch(function(passError){
  //       console.log(passError);
  //   })
}

{
  let prom = new Promise(function (resolve, reject) {
    let bucket = ["Apple", "Mango", "Grapes"];
    if (
      bucket.includes("Apple") &&
      bucket.includes("Mango") &&
      bucket.includes("Grapes")
    ) {
      resolve(`This Is Your Bucket ${bucket}`);
    } else {
      reject(`Invalid Input`);
    }
  });
  prom
    .then(function (passData) {
      console.log(passData);
    })
    .catch(function (passError) {
      console.log(passError);
    });
}

{
  function prom(parameter) {
    return new Promise(function (resolve, reject) {
      if (
        parameter.includes("Apple") &&
        parameter.includes("Mango") &&
        parameter.includes("Grapes")
      ) {
        resolve(`This Is Your Data ${parameter}`);
      } else {
        reject(`Invalid Input`);
      }
    });
  }
  prom(["Apple", "Mango", "Grapes"])
    .then(function (passData) {
      console.log(passData);
      return (passData += " Darshan");
    })
    .then(function (passData) {
      console.log(passData);
    })
    .then(function () {
      console.log("Without Return Then Work");
    })
    .catch(function (passError) {
      console.log(passError);
    });
}
// {
//   // In Promise, Pending Step....
//   function pro(get, url) {
//     return new Promise(function (resolve, reject) {});
//   }
//   pro();
//   console.log(pro());
// }
// {
//   // In Promise, Fulfilled (resolve) Step....
//   function pro(get, url) {
//     return new Promise(function (resolve, reject) {
//       resolve("Fulfilled Data Pass By Parameter(Argument)");
//     });
//   }
//   pro().then((pass) => {
//     console.log(pass);
//   });
//   console.log(pro());
// }
// {
//   // In Promise, Reject (reject) Step....
//   function pro(get, url) {
//     return new Promise(function (resolve, reject) {
//       reject("Reject Data Pass By Parameter(Argument)");
//     });
//   }
//   pro().catch((pass) => {
//     console.log(pass);
//   });
//   console.log(pro());
// }

{
  let url = `https://jsonplaceholder.typicode.com/posts`;
  function pro(method, apiLink) {
    return new Promise(function (resolve, reject) {
      let http = new XMLHttpRequest();
      console.log(http);
      http.open(method, apiLink);
      http.onload = function () {
        if (http.status >= 200 && this.status < 300) {
          let data = http.responseText;
          let convertData = JSON.parse(data); // JSON String Into Js Object
          // let reConvert = JSON.stringify(data); // Js Object Into JSON String
          resolve(convertData);
        } else {
          reject(`Something Went Wrong`);
        }
      };
      http.onerror = function () {
        reject(`Network Connection Error`);
      };
      http.send();
    });
  }
  pro("GET", url)
    .then(function (fetchData) {
      console.log(typeof fetchData);
      console.log(fetchData);
      let newFetchData = fetchData[1].id;
      return newFetchData;
    })
    .then((newFetchData) => {
      console.log(newFetchData);
      let newUrl = `${url}/${newFetchData}`;
      console.log(newUrl);
      return pro("GET", newUrl);
    })
    .then((newFetchedData) => {
      console.log(newFetchedData);
    })
    .catch((fetchError) => {
      console.log(fetchError);
    });
}
