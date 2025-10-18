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

