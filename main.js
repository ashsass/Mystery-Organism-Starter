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
      console.log('Printing the DNA Array');
      console.log(dnaArray);
      let randIndex = dnaArray[Math.floor(Math.random() * 15)];
      let newVal = returnRandBase();
      console.log('Initial printing of randIndex and newVal');
      console.log(randIndex);
      console.log(newVal);
      while(randIndex === newVal){
        newVal = returnRandBase();
        console.log('In the while loop');
        console.log(randIndex);
        console.log(newVal);
      }

      dnaArray[]
    }
  }
};







