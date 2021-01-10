/* Bonus (facolativo):
Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato */

let app = new Vue ({
  
  el: ".container",

  data: {
   rndNumber: 0,
   numbersArray: [],
  },

  methods: {
    checkNumber (index) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/int")
        .then(response => {    
          this.rndNumber = response.data.response;
          console.log(this.rndNumber);
          this.numbersArray[index] = this.rndNumber;
          console.log(this.numbersArray);
        });

    }
  },

  mounted (){
    for(let i = 0; i < 36; i++){
      this.numbersArray.push("");
    }
  }

})