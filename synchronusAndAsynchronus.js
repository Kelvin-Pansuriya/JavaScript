{
  // Asynchronus In js
  setTimeout(() => {
    console.log("Asynchronus 1...");
  }, 1000);
  setTimeout(() => {
    console.log("Asynchronus 2...");
  }, 2000);
  setTimeout(() => {
    console.log(Asynchronus);
  }, 3000);
  setTimeout(() => {
    console.log("Asynchronus 4...");
  }, 4000);
}
{
  // Asynchronus In js
  console.log("Synchronus 01...");
  console.log("Synchronus 02...");
  try {
    console.log(Synchronus);
  } catch (parameterAsError) {
    console.log(parameterAsError);
  }
  console.log("Synchronus 04...");
}
{
  // Asynchronus In js
  console.log("Synchronus 1...");
  console.log("Synchronus 2...");
  console.log(Synchronus);
  console.log("Synchronus 4...");
}
