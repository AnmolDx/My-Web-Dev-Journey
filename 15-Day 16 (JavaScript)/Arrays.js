let fruit = ["apple","banana","mango"]
      console.log(fruit)

      //we can access items by
      console.log(fruit[1])

      let info = ["anmol", 19, 5.10]; //mixed array
      let arremp = []; //empty array
      console.log(info[0][0])

      info[2] = 6; //change 5.10 from list to 6, hence list are mutable
      console.log(info)

      info[10] = "coder"; //it will add it to 10th index and the remaining indexes will be consider as empty
      console.log(info)

      //Array methods
      let friends = ["anmol", "manish", "nitin", "kartik"];
      friends.push("ayush") //push is used to add items
      console.log(friends)

      friends.pop() //delete the last item from the list
      console.log(friends)
      
      friends.unshift("ayush")
      console.log(friends)
      
      friends.shift()
      console.log(friends)

      console.log(friends.indexOf("nitin"))
      console.log(friends.includes("nitin")) //returns true if the value exist 

      console.log(fruit.concat(friends)) //concatinate method
      console.log(friends.reverse())

      //slice
      console.log(friends.slice(1,3))

      //splice : removes/replaces/add elements in place

      //Nested Arrays
      let arr = [[1,3],[2,4],[5,10]];
      console.log(arr)
      console.log(arr[0])
      console.log(arr[0][0])
      
      //practice Qs
      let tictac = [['x',null,'o'],[null,'x',null],['o',null,'x']];
      console.log(tictac)
