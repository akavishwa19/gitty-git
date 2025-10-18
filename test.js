const p1 = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("p1 resolved");
    }, 1000);
  });

const p2 = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("p2 resolved");
    }, 1500);
  });

const p3 = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("p3 resolved");
    }, 2000);
  });

const p4 = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject("p4 rejected");
    }, 1500);
  });

const p5 = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject("p5 rejected");
    }, 2000);
  });

//NOTE
/* The promises were changed to funtions that return
 promises indeted of directly defining them with the 
 new keyword because they are invoked just after
 definition and if we attach handlers , its consumed
 before we actua;;y consume it */


 //proimse.all method executed multiple promises as an array and returns an array of resolved values
 //if any one of them fails , the promise rejects with rejected promise's value

 Promise.all([p1(),p2(),p3()])
 .then((res)=>console.log(res))
 .catch((err)=>console.log(err))

 Promise.all([p1(),p2(),p4()])
 .then((res)=>console.log(res))
 .catch((err)=>console.log(err))

//promise.allSettled method returns an array of resolved or rejected values and their states
//it never rejects and always waits till all the promises are settled 

Promise.allSettled([p1(),p2(),p3()])
.then((res)=>console.log(res))

Promise.allSettled([p1(),p2(),p3(),p4()])
.then((res)=>console.log(res))

//promise.race method settles as soons as any of the promise is settled
//works the same irrespective of whether the promises resolve or reject

Promise.race([p1(),p2(),p3()])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

Promise.race([p1(),p2(),p3(),p4()])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

//promse.any method returns the value of the first resolved promise , rejects only when all promises reject with an aggreagtor error

Promise.any([p1(),p2(),p3()])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

Promise.any([p1(),p2(),p3(),p4()])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

Promise.any([p4(),p5()])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))