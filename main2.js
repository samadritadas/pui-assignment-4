$(document).ready(function(){

//load the cart list and wishlist
var listData= JSON.parse(localStorage.getItem("listData"));
var wishListData= JSON.parse(localStorage.getItem("wishListData"));

//if cart list is not null
if(listData!=null)
{
    console.log("check1");

    document.getElementById("status").innerHTML="You have the following items in the list";
        var listElement=document.createElement("ol"); 
        //listElement.id= "ullist";
        listElement.setAttribute("id","ullist");
        document.getElementById("status").appendChild(listElement); 

        for(var i=0; i<listData.length; i++){
        console.log(listData[i]);
        
        var liItem=document.createElement("li");
        //liItem.className="liClass";
        liItem.setAttribute("class","liClass");

        liItem.appendChild(document.createTextNode(listData[i]));

        var button = document.createElement("button");
        button.setAttribute("class","delete");
        button.setAttribute("value", i);
        console.log("button value is  " + button.value);
        button.innerHTML = "Remove";
        liItem.appendChild(button);
        listElement.appendChild(liItem);
    }
  document.getElementById("ullist").style.paddingLeft="380px";
}



//if wishlist is not null

if(wishListData!=null)
{
    console.log("check1");

    document.getElementById("second").innerHTML="You have the following items in your wishlist";
        var listElement=document.createElement("ol"); 
        //listElement.id= "ullist";
        listElement.setAttribute("id","ulwishlist");
        document.getElementById("wishlist").appendChild(listElement); 

        for(var i=0; i<wishListData.length; i++){
        console.log(wishListData[i]);
        
        var liItem=document.createElement("li");
        //liItem.className="liClass";
        liItem.setAttribute("class","liClass");

        liItem.appendChild(document.createTextNode(wishListData[i]));

        var button = document.createElement("button");
        button.setAttribute("class","delete");
        button.setAttribute("value", i);
        console.log("button value is  " + button.value);
        button.innerHTML = "Remove";
        liItem.appendChild(button);
        listElement.appendChild(liItem);
    }
  document.getElementById("ulwishlist").style.paddingLeft="380px";

}


//on clicking the delete button, send the parent node of the clicked button and its value
$(".delete").click(function(){
    deleteListItem(this.parentNode, this.value);
}); 





function deleteListItem(item,value) {
    //to remove the item from the list
    item.parentNode.removeChild(item);  

    //remove node only removed it from the DOM, but it needs to be removed from the local storage as well
    var arr= JSON.parse(localStorage.getItem("listData"));
    var arr= JSON.parse(localStorage.getItem("wishListData"));

    //delete the item whose index= value
    arr.splice(value,1);

    //stored the new array in the local storage
    localStorage.setItem("listData",  JSON.stringify(arr));
    localStorage.setItem("wishListData",  JSON.stringify(arr));
      

}





});
        

    

 