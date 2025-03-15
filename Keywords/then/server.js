const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Step 1 Complete"), 1000);
    });
  };
  
  fetchData()
    .then(result => {
      console.log(result);
      return "Step 2 Complete";
    })
    .then(nextResult => {
      console.log(nextResult);
    });
  

    /* 
    then keyword used in combination with promise keyword
    Runs when the Promise resolves successfully , we can use then keyword to do some operation with the output of first function.

    */

