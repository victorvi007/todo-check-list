let list = document.querySelector('#list');
const addBtn = document.getElementById('addBtn');
const addBox = document.getElementById('addBox');
const select = document.querySelector(".selector");
 let storedData = JSON.parse(localStorage.getItem("storedTodos"));




addBtn.addEventListener("click", () => {
  if (addBox.value != "") {


        //    if(localStorage.getItem('storedTodos')=== null){
        //     localStorageArray = []; 
        //    localStorageArray.push(addBox.value)
        //   //  console.log(localStorageArray);
        //    localStorage.setItem("storedTodos", JSON.stringify(localStorageArray));

        //  }else{
        //     localStorageArray = JSON.parse(localStorage.getItem("storedTodos"));
        //     localStorageArray.push(addBox.value);
        //    localStorage.setItem("storedTodos", JSON.stringify(localStorageArray));

        //  }

         
            todoData = `<div class="list-item uncompleted">
           <i class="far fa-circle" id="checkbox"></i>
               <div class="item-name">${addBox.value}</div>
               <button class="del"> <i class="far fa-trash-alt"></i> </button>
           </div>`;

            list.innerHTML += todoData;
       
    
  }
  addBox.value ="";
  
});

storedData;

list.addEventListener('click',(event)=>{
  let item = event.target;

  if (item.classList[0] === "del") {
   
    item.parentElement.className = "list-item vanish";

  }

  if(item.classList[1] == "fa-circle" ){

     let parentDiv =  item.parentElement;
     parentDiv.setAttribute('class','list-item completed');
     parentDiv.children[0].setAttribute('class','far fa-check-circle');
     parentDiv.children[1].setAttribute('id','line-through');

  }else if (item.classList[1] == "fa-check-circle") {

    let parentDiv = item.parentElement;
     parentDiv.setAttribute("class", "list-item uncompleted");

    parentDiv.children[0].setAttribute("class", "far fa-circle");
     parentDiv.children[1].setAttribute("id", "");


  }


});

select.addEventListener('click',(selected)=>{
  let category = selected.target.value;
  let listChild = list.childNodes;

  if(category == 'completed'){
     for(let i=0;i<listChild.length;i++){
    if(listChild[i].classList[1] == "completed"){
        listChild[i].style.display="flex";
    }else{
        listChild[i].style.display = "none";
    }
    
    // if(listChild[i].classList)
  }
}
  if(category == 'uncompleted'){
     for(let i=0;i<listChild.length;i++){
    if(listChild[i].classList[1] == "uncompleted"){
        listChild[i].style.display="flex";
    }else{
        listChild[i].style.display = "none";
    }

    // if(listChild[i].classList)
  }
}
  if(category == 'all'){
     for(let i=0;i<listChild.length;i++){

        listChild[i].style.display="";
    

  }
}
 
})


//   if(storedData != null){
//     storedData.forEach(data=>{
//      todoData = `<div class="list-item uncompleted">
//            <i class="far fa-circle" id="checkbox"></i>
//                <div class="item-name">${data}</div>
//                <button class="del"> <i class="far fa-trash-alt"></i> </button>
//            </div>`;

//      list.innerHTML += todoData;
// })
//   }


