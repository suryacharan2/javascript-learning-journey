function fetchData() {
return new Promise((resolve) => {
setTimeout(() => {
resolve("Data Received");
}, 2000);
});
}
async function getData() {
console.log("Loading...");
const result = await fetchData();
console.log(result);
}
getData();
//Await: Pauses execution until a Promise is resolved