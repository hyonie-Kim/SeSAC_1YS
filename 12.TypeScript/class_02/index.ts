type Words = {
  [key:string]:string
}

// let dict:Words ={ "pizza":"food"}

class Dict {
 private words: Words
 constructor(){
  this.words ={}
 }
  add(word:Word){
      if(this.words[word.term] === undefined){
          this.words[word.term] = word.definition
      }
  }
  get(term:string){
      return this.words[term]
  }
  delete(term:string){
      delete this.words[term]
  }
  
  update(word:Word){
      if(this.words[word.term]!==undefined){
          this.words[word.term] = word.definition;
      }
  }
  showAll(){
      console.log(Object.keys(this.words))
      }
  
  count(){
      return Object.keys(this.words).length;
  }
  
}

class Word {
  constructor(
      public term:string,
      public definition:string
  ){}
}

const kimchi = new Word("kimchi","한국의음식");
const dict = new Dict();

dict.add(kimchi)
dict.get("kimchi")