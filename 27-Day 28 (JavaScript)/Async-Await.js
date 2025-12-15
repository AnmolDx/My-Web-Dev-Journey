async function getData() { //async will help in running the function in background
   return new Promise((resolve, reject)=>{
      setTimeout(() => {
         resolve(455)
      }, 3500);
   })
}

async function main() {
   console.log("loading modules");
   console.log("Do something else");
   console.log("load data");
   let data = await getData() //await will always used inside async function
   console.log(data);
   console.log("task2")
   
   console.log("process data");
}

main()
