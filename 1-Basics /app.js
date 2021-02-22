// Create the app object
const app = Vue.createApp({
    // data, functions and HTML template to be rendered
    //template: `<h1>I am the template</h1>`
    // Or
    // We can present dynamic data by creating a function and returning an object
    data(){
      return {
          title: `This is the title`,
          name: `Dynamic Dave`,
          strength: 10,
          show: true,
          x: 0,
          y: 0
      }
    },
    // Place methods inside:
    methods: {
        changeTitle(title){
           
            this.title = title
        },
        toggleContent(){
            this.show = !this.show
        },
        handleEvent(e, data){
            console.log(e)
            if(data){
            console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
            console.log(this.x, this.y)
        }
    }
})
// Mount the div element with the id of app  in the DOM
app.mount('#app')
// Now the Vue app object controls the content within the div

