// Create the app object
const app = Vue.createApp({
    // data, functions and HTML template to be rendered
    //template: `<h1>I am the template</h1>`
    // Or
    // We can present dynamic data by creating a function and returning an object
    data(){
      return {
          url: `https://adamskoullos.github.io/TraderDashboards/`,
          title: `This is the title`,
          name: `Dynamic Dave`,
          strength: 10,
          show: true,
          x: 0,
          y: 0,
          skills: [
            {
                name: `speed`,
                power: 5,
                trump: true
            },
            {
                name: `strength`,
                power: 20,
                trump: true
            },
            {
                name: `fighting`,
                power: 10,
                trump: false
            }]
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
        },
        toggleTrump(skill){  
            // Long hand option
            // if(skill.trump){
            //     console.log(skill.trump)
            //     skill.trump = false
            // } else{
            //     skill.trump = true
            // }
            // Short hand option
            skill.trump = !skill.trump       
        }
    },
    computed:{
        filteredSkills(){
            return this.skills.filter(skill=> skill.trump)
        }
    }
})
// Mount the div element with the id of app  in the DOM
app.mount('#app')
// Now the Vue app object controls the content within the div

