$(function() {
    //listen for submission events - (mouse clicking on the button or pushing "return" key)
    $('#js-shopping-list-form').submit(function (event) {
        // when these events happen, stop default submission behavior
        event.preventDefault();
        // store the entered text to be added as a new shopping list item
        let newItem = $('input').val();
        // clear the entry field so additional items can easily be added
        $("input").val("");
        // generate a new div in the same format as the below and append it to the list
        // $('ul').append('<li class="new"></li>')
        $('ul').append(`
        <li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
    });
});

$(function () {
    // listen for clicks on the "check" button
    $('ul').on('click', '.shopping-item-toggle', function(event) {
    // toggle the strike-through class on and off on the shopping item
    $(this).closest("li").find('span.shopping-item').toggleClass("shopping-item__checked");
    });
});

$(function () {
    // target the delete buttons and listen for clicks
    $('ul').on('click', '.shopping-item-delete', function(event) {
    // delete the list item closest in the DOM to where the click event took place
        $(this).closest('li').remove();
    });
});

    


