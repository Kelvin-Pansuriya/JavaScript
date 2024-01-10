{
  // SYNTAX OF PROMISE IN JS ------- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // fetch("API Link In String").then((parameter)=>{
  //   // Here Return Promise Of Fetch's Link....
  // }).then((parameter)=>{
  //   // Here Your Data Will Be Fetched.....
  // })
}

{
  // Wrong Way Of Fetch Method :- First Promise Fulfilled And Also Return Second Promise But Second Promise Reject Or First Promise Prototype Shows Those Fetch Data
  let storeFetch = fetch("https://api.covid19api.com/summary");
  console.log(storeFetch);
  storeFetch.then((response) => {
    console.log(response);
    console.log(Response.prototype);
    console.log(response.__proto__);
    let a = response.json(); // Here Declare Second Promise Of Fetch, Second Promise Rejected For This Reason
    console.log(a);
  });
}

{
  // Right Way Of Fetch Method :- First Promise Fulfilled And Return Second Promise, And Second Promise Also Fulfilled

  let storeFetch = fetch("https://api.covid19api.com/summary");
  console.log(storeFetch);
  storeFetch
    .then((response) => {
      console.log(response);
      console.log(Response.prototype);
      console.log(response.__proto__);
      return response.json(); // Here Declare Second Promise in Fetch, Second Promise Fulfilled For This Reason
    })
    .then((fetchedData) => {
      console.log(fetchedData);
    });
}

function data(url) {
  fetch(url)
    .then((datas) => {
      // console.log(datas);
      return datas.json();
    })
    .then((response) => {
      console.log(response);
      let myTable = document.getElementById("table");
      let countriesDetails = response.Countries;
      let globalDetail = response.Global;
      myTable.innerHTML = `<tr>
      <th>Country</th>
      <th>NewConfirmed</th>
      <th>NewDeaths</th>
      <th>NewRecovered</th>
      <th>TotalConfirmed</th>
      <th>TotalDeaths</th>
      <th>TotalRecovered</th>
      </tr>`;
      for (let i = 0; i <= countriesDetails.length; i++) {
        myTable.innerHTML += `
        <tr>
        <td>${countriesDetails[i].Country}</td>
        <td>${countriesDetails[i].NewConfirmed}</td>
        <td>${countriesDetails[i].NewDeaths}</td>
        <td>${countriesDetails[i].NewRecovered}</td>
        <td>${countriesDetails[i].TotalConfirmed}</td>
        <td>${countriesDetails[i].TotalDeaths}</td>
        <td>${countriesDetails[i].TotalRecovered}</td>
        </tr>`;
        let createId = document.querySelectorAll("td")[i];
        createId.setAttribute(`id`, `td_${i}`);
      }
    });
}
data("https://api.covid19api.com/summary");
