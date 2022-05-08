// function sum(x, y){
//     if (typeof x !== "number" || typeof y !== "number" ){
//         throw new Error("These are not numbers!")
//     }else {return x + y;}

   
//   }

//   try{
//       result = sum('1','2')
//     //   result = sum(1,2)
//       console.log(result)
//   }
//   catch(err){
//       console.log(err)
//   }

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if ( username !== user.username || password !== user.password){
      throw new Error("username and/or password does not match our records.")
  }else{
      console.log("login successful!")}
}

try{
    login('sam','123abc')
    // login('mike','password')
  
}
catch(err){
    console.log(err)
}
