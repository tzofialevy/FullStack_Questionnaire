 
import {INode} from "./Inode";

let obj:INode={name:"Vered",children:[{name:"yosi",children:[{name:"jj",children:[{name:"AA",children:[{name:"b",children:[{name:"c",children:[]}]}]}]}]}]};


function prints_names_it_and_all_with_recursion(obj:INode,i:number)
{
    if(obj.children.length==0)
         {console.log(0)}
    
                    obj.children.forEach(e => {
                    console.log(obj.children[i].name);
                    prints_names_it_and_all_with_recursion(obj.children[i],i+1)                    
                   });
}

prints_names_it_and_all_with_recursion(obj,0);


