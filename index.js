$(function(){

  // Toggles between crossing out and not when "check" button is clicked
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked")
  });

  // Removes an item when "delete" button is clicked
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(this).parent().parent().remove("li");
  });

  // Adds an item to the shopping list
function postItem(item){
   const newItem =
   `<li>
       <span class="shopping-item">${item}</span>
       <div class="shopping-item-controls">
         <button class="shopping-item-toggle">
           <span class="button-label">check</span>
         </button>
         <button class="shopping-item-delete">
           <span class="button-label">delete</span>
         </button>
       </div>
     </li>`
     $('.shopping-list').append(newItem);
};

  // Submits and posts the text entered in the "Add an item" field
  $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
      let userInput = $('#shopping-list-entry').val();
      postItem(userInput);
      $('#shopping-list-entry').val('');
  })

});
