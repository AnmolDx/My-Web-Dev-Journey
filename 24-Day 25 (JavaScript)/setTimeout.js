// it is asynchrous nature
setTimeout(() => {
   console.log("hey world")//prints hey world after 2 second for 1 time
}, 2000);

console.log("i am anmol")  //js dont wait for timout function to print first it will print other lines first the executes the timeout even though it is single threaded language 