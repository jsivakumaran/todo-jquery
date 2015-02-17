$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var inputtedDescription = $("input#description").val();

    var newTask = { task: inputtedTask, description: inputtedDescription }

    $("#tasks").append("<input type='checkbox' class='checkbox'>"
    + "<span class='task'>"
    + newTask.task + "</span> - <span class='description'>"
    + newTask.description + "</span><br>"
    );

    $("input#task").val("");
    $("input#description").val("");

    $("#tasks").children(".task").click(function() {
      $(this).css('text-decoration', 'line-through');
      // $(this).addClass()
    });
  });
});
