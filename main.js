const {createApp} = Vue ;

createApp ({
    data(){
        return {
            error: false,
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
            
            if (this.newtask !== "") {
                

            this.newTaskObject.content=this.newtask ;
            this.newTaskObject.done= false

            this.tasks.unshift(this.newTaskObject) ;
            this.newtask = ""
            
            this.newTaskObject = {} 

            
        }   

        else (
            this.error= true
        )
        
        },

       Rimuovitask(indice) {
        this.tasks.splice(indice,1)
       }
       
    }


    

}).mount ("#app")