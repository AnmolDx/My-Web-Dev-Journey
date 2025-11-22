// let object = {property: value, property1: value2, property3: value3, property4: value4}
let post = { "username": "techwalaguy", "content": "i have nothing to post", "likes": 69, "repost": 10, "tags": ['#webdev', '#learniipublic'] }
console.log(post)

//Access value of object
console.log(post["username"])

//add and update values
//change some value
post.likes = 100;
console.log(post)

//to add property
post.gender = "male"
console.log(post)

//to delete = delete obj.keyname
delete post.repost
console.log(post)

//object of object (nested object)
let friends = {
   anmol: {
      gender: "male",
      city: "delhi"
   },
   manish: {
      gender: "male",
      city: "delhi"
   },
   nitin: {
      gender: "male",
      city: "delhi"
   },
}
console.log(friends)

let friendinfo = [
   {
      name: "anmol",
      gender: "male",
      city: "delhi"
   },
   {
      name: "nitin",
      gender: "male",
      city: "delhi"
   },
   {
      name: "manish",
      gender: "male",
      city: "delhi"
   }
]
console.log(friendinfo)

//math objects
//random integers
let num = Math.random() * 10
num = Math.floor(num) + 1
console.log(num)