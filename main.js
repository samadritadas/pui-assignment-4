//var trial = new Array();
$(document).ready(function(){



	//By default, on load, store Single roll as the choosen option
	localStorage.setItem("pack", "Single roll");	

	
	//Clicking the "view all options" on the landing page
	$("#menubutton").click(function(){
		location.href = "menu.html";
     });

    //Clicking the Single Pack option, the pack details and the price is temporarily stored in local storage and the cost,description and image gets updated accordingly.
    $("#individual").click(function(){
	    console.log("single clicked");
	    localStorage.setItem("pack", "Single roll");
		document.getElementById("cost").innerHTML = "$10. Free Shipping";
		localStorage.setItem("price", "$10"); 
	    document.getElementById("description").innerHTML = "Freshly baked delicious Cinnamon roll made with the finest cinnamons imported from Brazil in a traditional 20 year old recipe.";
		document.getElementById("image").src = "images/original.png";	
	    disableDropdown(); //No options of flavour if single roll is selected
    });


    //Clicking the Pack of 6 option
    $("#pack1").click(function(){
	    console.log("6pack clicked");
	    localStorage.setItem("pack", "Pack of 6");
	    document.getElementById("cost").innerHTML = "$20. Free Shipping";
	    localStorage.setItem("price", "$20");
	    document.getElementById("description").innerHTML = "You can customise a pack of 6 cinnamon rolls with upto two flavours";
	    document.getElementById("image").src = "images/pack1.png";
	    enableDropdown(); //Drop down to select two more flavors enabled
    });


     //Clicking the Pack of 12 option
    $("#pack2").click(function(){
	    console.log("12pack clicked");
	    localStorage.setItem("pack", "Pack of 12");	
	    document.getElementById("cost").innerHTML = "$30. Free Shipping";
	    localStorage.setItem("price", "$30");
	    document.getElementById("description").innerHTML = "You can customise a pack of 12 cinnamon rolls with upto two flavours";
	    document.getElementById("image").src= "images/pack2.png";
	    enableDropdown(); //Drop down to select two more flavors enabled
    });

  
    //Calling the function to show the dropdown on clicking
    $(".selectBox").click(function(){
    	showCheckboxes();	
    });	



    //Clicking the add the cart function
    var selected=[]; 
    var total=[];
    document.getElementById("addtocart").onclick=function(){	
	    
	    //Save the combination that user just selected from the dropdown
	    save(document.getElementsByClassName("checkbox"));

		var pack = localStorage.getItem("pack");
		var item= JSON.parse(localStorage.getItem("item"));
		var price= localStorage.getItem("price");
		

		//if no item in the list, push the item to a new array else first load the data in the list and then push the new item.
	    if(JSON.parse(localStorage.getItem("listData"))==null){
	    	selected.push(pack+": "+ item + " " + price);	
	    	localStorage.setItem("listData",  JSON.stringify(selected));
	    }
	 	else{
			var saved= JSON.parse(localStorage.getItem("listData"));
			saved.push(pack+": "+ item + " " + price);
			localStorage.setItem("listData",  JSON.stringify(saved));
	    }

	   //Give alert to the user based on the selection
	   if(pack=="Single roll")
	    	{
	    	alert(pack+ " " + "has been added to your cart");
	    	document.getElementById("selected").style.display="block";
	    	document.getElementById("selected").innerHTML="You have selected a " + pack + "and you have "+  JSON.parse(localStorage.getItem("listData")).length  + "  items in your cart" 
	    	}
	   
	    else{
	    	alert(pack+ " : " + item + " " + "has been added to your cart");
	    	document.getElementById("selected").style.display="block";
	    	document.getElementById("selected").innerHTML="You have selected a " + pack+ " " + item + " and you have "+  JSON.parse(localStorage.getItem("listData")).length  + "  items in your cart" ;
	    	}

	}

    
    //Clicking the add to wishlist function
    var saveArray=[];
	document.getElementById("wishlist").onclick=function(){	
	    save(document.getElementsByClassName("checkbox"));
			var pack = localStorage.getItem("pack");
			var item= JSON.parse(localStorage.getItem("item"));
			var price= localStorage.getItem("price");
		
		if(JSON.parse(localStorage.getItem("wishListData"))==null){
	    	console.log("wishlist");
	    	saveArray.push(pack+": "+ item + "		 " + price);
	    	localStorage.setItem("wishListData",  JSON.stringify(saveArray));
	    }
	 	else{

			var wishlisted= JSON.parse(localStorage.getItem("wishListData"));
			wishlisted.push(pack+": "+ item + "		 " + price);
			localStorage.setItem("wishListData",  JSON.stringify(wishlisted));

	    }
		if(pack=="Single roll")
	    	{
	    	alert(pack+ " " + "has been added to your wishlist");
	    	}
	    else{
	    	alert(pack+ " : " + item + " " + "has been added to your wishlist");
	    	document.getElementById("selected").style.display="block";
	    	document.getElementById("selected").innerHTML="You have selected a " + pack+ " " +item;
	    	}

	}

	//Dropdown disabled on clicking single roll
	function disableDropdown(){
		document.getElementById("mySelect").disabled= true;
		document.getElementById("flavourlist").style.display="none";
	} 


	//Dropdown enabled on clicking pack of 6 or 12
	function enableDropdown(){
		document.getElementById("mySelect").disabled= false;
		document.getElementById("flavourlist").style.display="none";
	}

	//Show dropdown on clicking the selector 
	var expanded = false;
	function showCheckboxes() {
	  	var flavourlist = document.getElementById("flavourlist");
	  	if (!expanded &&  document.getElementById("mySelect").disabled == false) {
	    	flavourlist.style.display = "block";
	    	expanded = true;
	  	} 
	  	else {
	    flavourlist.style.display = "none";
	    expanded = false;
	  	}
			
		// to ensure that only 2 are selected from the dropdown	
		checkboxlimit(document.getElementsByClassName("checkbox"));
	}
	    

	//takes the dropdown as the parameter
	function checkboxlimit(checkgroup){
		var checkgroup=checkgroup;
		var limit=2

		for (var i=0; i<checkgroup.length; i++){
			checkgroup[i].onclick=function(){
				var checkedcount=0
				for (var i=0; i<checkgroup.length; i++)
				checkedcount+=(checkgroup[i].checked);
		        
		        if (checkedcount>limit){
				alert("You can only select a maximum of "+limit+" flavours");
				this.checked=false
				}
			}
				
		}
	}

	//Saving users selections in the local storage 
	function save(checkgroup){
	    var checkgroup=checkgroup;
	    var item= "Original Cinnamon roll"
		for (var i=0; i<checkgroup.length; i++){
		if(checkgroup[i].checked){
			var item=item + "  "+  checkgroup[i].value;
			}
		}   
		localStorage.setItem("item", JSON.stringify(item));
	}

		responsiveSlider(); 
	 
	  
	//Function for the carousal
	function responsiveSlider(){

		var slider = document.getElementById("slider");
		var sliderWidth = slider.offsetWidth;
		var slideList = document.getElementById("slideWrap");
		var count = 1;
		var items = slideList.getElementsByClassName("slide").length;
		var prev = document.getElementById("prev");
		var next = document.getElementById("next");

		window.addEventListener('resize', function() {
			    sliderWidth = slider.offsetWidth;
		});


		//Clicking the back button on carousal
		var prevSlide = function() {
		    if(count > 1) {
		      count = count - 2;
		      slideList.style.left = "-" + count * sliderWidth + "px";
		      count++;
		    }
		    else if(count = 1) {
		      count = items - 1;
		      slideList.style.left = "-" + count * sliderWidth + "px";
		      count++;
		    }
			  
		  };

		//Clicking the next button on carousal
		var nextSlide = function() {
		    if(count < items) {
		      slideList.style.left = "-" + count * sliderWidth + "px";
		      count++;
		    }
		    else if(count = items) {
		      slideList.style.left = "0px";
		      count = 1;
		    }
			  
		};
			  
		next.addEventListener("click", function() {
		    nextSlide();
		});

		prev.addEventListener("click", function() {
		    prevSlide();
	    });

		setInterval(function() {
	    nextSlide()
	    }, 2000);


	}

	}); 








