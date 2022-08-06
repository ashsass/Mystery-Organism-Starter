// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Creates a factory function to make multiple objects. 
const pAequorFactory = (specimenNum, dnaArray) => {
  return {
    specimenNum,
    dnaArray,
    mutate () {
      let randNumber = Math.floor(Math.random() * 15); //Creates a random number so we can access the index later
      let randIndex = dnaArray[randNumber]; //Grabs the value at said index
      let newVal = returnRandBase(); //Creates a new value from the function created above

      while(randIndex === newVal){
        newVal = returnRandBase();
      }; //Loops to find a new value if newVal matches the current value
      
      dnaArray[randNumber] = newVal; //Accesses the index to replace the current value with the new value
    }
  }
};







