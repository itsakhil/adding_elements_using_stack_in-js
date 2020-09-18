class Stack
{
    constructor()
    {
       this.addarr=[]//intiliazaton of constructor
    }
    print=()=>//traversing and printing the result 
    {
        this.addarr.forEach((e)=>
        {
            console.log(e)
        })
    }

    pop=()=>//removing the elements
    {
        return this.addarr.pop()
    }

        push=(props)=>{
             this.addarr.push(props) //push elements into stack
        }  
     add=()=>//adding the elemnts in the satck
      {
       let l=this.addarr.length
       let i=0
       let sum=0
       while(i<l)
       {
          let ele= this.addarr.pop()
           sum=sum+ele
          i++
       }
       return sum
   } 
}

var stack=new Stack()//object creation
stack.push(1)//push elemets into stack
stack.push(2)
var res=stack.add() // add them and store the response 
stack.push(res) //push the result into stack 
stack.print()//print the result


