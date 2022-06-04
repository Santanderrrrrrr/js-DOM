// document.querySelector('body').style.backgroundColor="#222"






class HandingIn{
    constructor(){

        this.inputBar = document.getElementById('textInput')
        this.handInButton = document.getElementById('handIn')
        
        this.theRender = new Render()

        this.handInButton.addEventListener('click', this.submitAndRender.bind(this))
            
    }
    submitAndRender=(e)=>{
            if(this.inputBar.value == ""|| this.inputBar.value == null){
                alert("We actually need you to have a task, fam!")
            }else {
                e.preventDefault()
                console.log(this.inputBar.value)
                this.theRender.addToList(this.inputBar.value);
                this.inputBar.value = ""
                return
        } 
    }   
    
}

class Render{
    constructor(){
        const _taskArray = []
        
        this.addToList=(something)=>{

            _taskArray.push(something)
            this.elementCreate()
            this.elementDelete()    
            this.elementComplete()
            return 
        }
        this.getTaskList=()=> _taskArray
        this.taskSection = document.getElementsByClassName('taskSection')[0]
        

    }
    elementCreate(){
       
        let task = this.getTaskList()[this.getTaskList().length-1]

        let delButton = document.createElement('button')
        delButton.textContent = "Done"
        delButton.classList.add('deleteBtn')
        
        let upd8Btn = document.createElement('button')
        upd8Btn.textContent = "Complete"
        upd8Btn.classList.add('editBtn')

        let divText = document.createElement('p')
        divText.textContent = task;

        
        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task')

        taskDiv.appendChild(divText)
        taskDiv.appendChild(upd8Btn)
        taskDiv.appendChild(delButton)

                
        this.taskSection.appendChild(taskDiv)
        
    }
    elementDelete(){
        document.querySelectorAll('.deleteBtn').forEach((db)=>{
            db.addEventListener('click', (e)=>{
                e.target.parentNode.remove();
            })
        })
    }
    elementComplete(){
        document.querySelectorAll('.editBtn').forEach((eb)=>{
            eb.addEventListener('click', (e)=>{
                let parent=e.target.parentNode
                parent.querySelector('p').style.textDecoration = "line-through"
            })
        })
    }
}

const submission = new HandingIn()