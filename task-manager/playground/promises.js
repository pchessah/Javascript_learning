const doWorkPromise = new Promise ((resolve, reject)=> {
    setTimeout (() => {
       // resolve ([7, 4, 1]);
       reject('THings went wrong bruh');
    }, 5000);
});

doWorkPromise.then((result) => {
    console.log('Success!', result);
}).catch((error) => {
    console.log('Error!', error);
});