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
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate () {
      let randNumber = Math.floor(Math.random() * 15); //Creates a random number so we can access the index later
      let randIndex = dna[randNumber]; //Grabs the value at said index
      let newVal = returnRandBase(); //Creates a new value from the function created above

      while(randIndex === newVal){
        newVal = returnRandBase();
      }; //Loops to find a new value if newVal matches the current value
      
      dna[randNumber] = newVal; //Accesses the index to replace the current value with the new value

      return dna;
    },
    compareDNA (obj) {
      let counter = 0;

       for(let i = 0; i<this.dna.length; i++){
          if(this.dna[i] === obj.dna[i]){
          counter++;
        }//Check to see if either object has a value in common. If so increase the counter
       }

       let dnaPercent = (counter/15) * 100;
       
       console.log(`Specimen ${this.specimenNum} and Specimen ${obj.specimenNum} have ${dnaPercent}% DNA in common.`)
    },
    willLikelySurvive() {
      let counter = 0;
      for(let i = 0; i<this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          counter++;
        }
      }
      let survivalPercent = (counter/15) * 100;

      survivalPercent > 60 ? true : false;
    }
  }
};

 








