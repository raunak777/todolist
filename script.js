var text;

function addList() {
    text = $("#todotext").val();
    if (text != "") {
        $("#todolist").append('<li class="task"><input type="checkbox" class="form-check-input" id="done"> <span class="display">' + text +
            '</span> <input type="text" class="edit" style="display:none"/><button class=" btn-lg btn-primary saved">Edit</button><button class="delete btn-primary btn-lg">Delete</button></li>');
        $("#todotext").val('');
    } else
        alert("Enter text");
}

function deleteList() {
    $(this).parent().remove();
}

function editList() {
    var a = $('.display').text();
    console.log(a);
    if ($(this).text() == "update") {

        var x = $(this).parent().children(".edit").val();
        console.log(x);
        $(this).parent().children(".edit").css("display", "none");
        $(this).parent().children(".display").text(x);
        $(this).text("edit");

    } else {
        $(this).text("update");
        $(this).parent().children(".edit").css("display", "block");

    }
}

function finishList() {
    if ($(this).parent().parent().attr('id') == "todolist") {
        var one = $(this).parent();
        $("#myDiv").append(one);
    } else {
        var two = $(this).parent();
        $("#todolist").append(two);
    }
}


$(document).ready(function() {
    $('input[type=text]').keydown(function(e) {
        if (e.keyCode === 13) {
            addList();
        }
    });

    $("#add").on('click', addList);
    $(document).on('click', '.delete', deleteList);
    $(document).on('click', '#done', finishList);
    $(document).on('click', '.saved', editList);


});