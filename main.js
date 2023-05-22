const {createApp} = Vue ;

createApp ({
    data(){
        return {
            tasks : [
                {"content" : "fare la spesa",
                 "done" : false
                },
                {"content" : "andare al mercato",
                 "done" : false
                },
                {"content" : "fare la lavatrice",
                 "done" : false
                }
            ],

            newtask : "",

            newTaskObject : {}
            
        }
        
    },

    methods : {
        aggiuntiTask () {

            

            this.newTaskObject.content=this.newtask ;
            this.newTaskObject.done= false

            this.tasks.unshift(this.newTaskObject) ;
            this.newtask = ""
            this.newTaskObject = {}
           
            

        }
    }

    

}).mount ("#app")