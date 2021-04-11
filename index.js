let input = document.getElementById("textinput");
let Addbutton = document.getElementById("Addbutton");
let maincontainer = document.getElementById("maincontainer");
let clearAll = document.getElementById("clearAll");

 if(input.value==" ")
 {
     alert("Please Enter Value First");
 
 }
 else
 {
    Addbutton.addEventListener('click',function(){
        let paragraph = document.createElement('p');
        let mybutton = document.createElement('button');
        let edit = document.createElement('button');
        let hr = document.createElement('HR');
        paragraph.classList.add('mypara');
        mybutton.setAttribute('id','mybutton');
        edit.setAttribute('id','editlist');
        paragraph.innerText=input.value;
        mybutton.innerText="Delete";
        edit.innerText="Edit";
        maincontainer.appendChild(paragraph);
        maincontainer.appendChild(mybutton);
        maincontainer.appendChild(edit);
        maincontainer.appendChild(hr);
 mybutton.addEventListener('click',function(){

   
    maincontainer.removeChild(paragraph);
    maincontainer.removeChild(mybutton);
    maincontainer.removeChild(edit);
    maincontainer.removeChild(hr);
})
edit.addEventListener('click',function(){

   let editvalue = prompt("Enter Value Here");
   paragraph.innerHTML = editvalue;
    
})

})
}
clearAll.addEventListener('click',function(){
    maincontainer.innerHTML=" ";
    input.innerHTML=" ";
})
