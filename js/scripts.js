var List = {
  list: "",
  tasks: [],
}

$(document).ready(function() {
  var currentList = Object.create(List);

  var displayTasks = function() {
    $("ul.tasks").text("");
    if(currentList.tasks.length > 0) {
      currentList.tasks.forEach(function(task) {
        $("ul.tasks").append("<li><span class='task'>" + task.task + "</span></li>");
      });
    }
  }

  $("form#form-list").submit(function(event) {
    event.preventDefault();

    var inputtedList = $("input#list").val();

    var newList = { list: inputtedList, tasks: [] };

    $("ul#lists").append("<li><span class='list'>" + newList.list + "</span></li>");

    $("input#list").val("");

    $('.list').last().click(function() {

      $(".add-task").show();

      currentList = newList;

      displayTasks();

      $(".tasksdisplay h2").text(newList.list);
    });
  });

  $("form#form-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var newTask = { task: inputtedTask };

    currentList.tasks.push(newTask);

    displayTasks();

    $(".task").last().click(function() {
      $(this).css('text-decoration', 'line-through');
    });

    $("input#task").val("");
  });
});
