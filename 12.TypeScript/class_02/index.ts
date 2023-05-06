type Words = {
  [key: string]: string;
};

// let dict:Words ={ "pizza":"food"}

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete() {}
}

class Word {
  constructor(public term: string, public definition: string) {}
}

const kimchi = new Word("kimchi", "한국의음식");
const dict = new Dict();

dict.add(kimchi);
dict.get("kimchi");
