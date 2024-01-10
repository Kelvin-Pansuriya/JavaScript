"use strict";
{
  // Ajax Syntax 1...

  let http = new XMLHttpRequest();
  console.log(http);
  http.open("GET", "https://api.covid19api.com/summary", true);
  http.onload = function () {
    let data = http.responseText;
    let convert = JSON.parse(data);
    console.log(convert);
    let reConvert = JSON.stringify(convert);
    console.log(reConvert);
  };
  http.onerror = function () {
    console.log("Network Connection Error");
  };
  http.send();
}
{
  // Ajax Syntax 2...

  let url = "https://api.covid19api.com/summary";
  let http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.onreadystatechange = function () {
    if (this.readyState == 0) {
      console.log(`You Current Ready State Is ${this.readyState}`);
    } else if (this.readyState == 1) {
      console.log(`You Current Ready State Is ${this.readyState}`);
    } else if (this.readyState == 2) {
      console.log(`You Current Ready State Is ${this.readyState}`);
    } else if (this.readyState == 3) {
      console.log(`You Current Ready State Is ${this.readyState}`);
    } else if (
      http.readyState == 4 &&
      http.status >= 200 &&
      http.status <= 299
    ) {
      console.log(`You Current Ready State Is ${this.readyState}`);
      console.log(`You Current Status Is ${this.status}`);
      let response = http.response;
      let data = JSON.parse(response);
      console.log(data);
    } else {
      console.log("Something Went Wrong");
    }
  };
  http.onerror = function () {
    console.log(`Network Connection Error`);
  };
  http.send();
}
