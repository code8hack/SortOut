$(function(){//start to code

var trash = '<svg width="13" aria-hidden="true" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash fa-w-14 fa-2x"><path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm415.2 56.7L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32.8 140.7c-.4-6.9 5.1-12.7 12-12.7h358.5c6.8 0 12.3 5.8 11.9 12.7z" class=""></path></svg>'
  
// counting total item on click  
function listLength(){
  return $('.target-items > li').length
}

//grabbing item text to convert into an array of object
function objectFunction(){
    var eachItems = []  
    $('.target-items').children('li').each(function(i){
      eachItems[i] = $(this).find('.text').text()
    }) 

    var obj = []  
    $.each(eachItems, function(i, eachItem){
      obj[i] = {item1:eachItem}
    })  
    
    ObjToString = JSON.stringify(obj)  
}  
  
// add item on click  
var ObjToString = [] //stringify object
$('button[type="submit"]').on("click", function(e){
  e.preventDefault()
  var val = $('input[type="text"]').val()
  $('input[type="text"]').val('')//empty value
  
  if(val != ''){//start if statment
      //create and appending value to DOM
      $('<li class="'+val+'"><span class="text">'+val+'</span><span class="remove">'+trash+'</span></li>').appendTo('#target')
    
    // function here 
    objectFunction()
        
  }//end if statement
  
  localStorage.setItem("key", ObjToString);
  
})// on click ends

// remove item on click  
$('body').on("click", '.remove', function(){
  $(this).closest('li').remove()
  objectFunction()
  localStorage.setItem("key", ObjToString);  
})
 
// On page load  
var getStorage = localStorage.getItem("key");
var stringToObj = JSON.parse(getStorage)
    
// Pull items from storage and recreate items in DOM
$.each(stringToObj, function(i, stringToObjItem){
    $('<li class="'+stringToObjItem.item1+'"><span class="text">'+stringToObjItem.item1+'</span><span class="remove">'+trash+'</span></li>').appendTo('#target')
  })
    
})//end of ready