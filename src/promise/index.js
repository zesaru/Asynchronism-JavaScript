const sometimesWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("hey!");
    } else {
      reject("Whooooops");
    }
  });
};

sometimesWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err));

const sometimesWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("true");
      }, 2000);
    } else {
      const error = new Error("Whoooopsi");
      reject(error);
    }
  });
};

sometimesWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err));

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
  .then(response => {
    console.log("Array of results", response);
  })
  .catch(err => {
    console.log(err);
  });
