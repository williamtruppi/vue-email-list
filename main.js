/* Genera 10 mail tramite api e stampale in una lista */

let app = new Vue ({
  
  el: ".container",

  data: {
    emailList: [],
  },

  mounted () {
    for(let i = 0; i < 10; i++){
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(response => {    
        this.emailList.push(response.data.response);
      })
    }
    console.log(this.emailList);
  }
})