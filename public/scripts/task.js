$(document).on("click", ".edit", function () {
    let inputField = $(this).closest(".task").find(".text");
    inputField.prop("readonly", false);
    inputField.focus();
    $(this).text("Save").removeClass("edit").addClass("save");
})

$(document).on("click", ".save", function () {
    $(this).text("Edit").removeClass("save").addClass("edit");
    let inputField = $(this).closest(".task").find(".text");
    inputField.prop("readonly", true);
    inputField.focus();
})

$(document).on("click", ".delete", function () {
    const taskElement = $(this).closest(".task"); 
    const taskIndex = taskElement.index(); 

    console.log("Deleting task:", taskElement.find(".text").val());
    console.log("Task index:", taskIndex);

    if (taskIndex >= 0) {
        $.post("/delete", { taskIndex: taskIndex }, () => {
            taskElement.remove();
        });
    } else {
        console.error("Task index not found!");
    }
});
