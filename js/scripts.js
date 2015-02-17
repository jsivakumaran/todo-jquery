$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var newTask = { task: inputtedTask };

    $("ul.tasks").append("<li><span class='task'>" + newTask.task + "</span></li>");

    $("input#task").val("");

    $(".tasks li").last().click(function() {
      $(this).css('text-decoration', 'line-through');
    });
  });
});
