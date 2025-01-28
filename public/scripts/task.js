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
    $(this).closest(".task").remove();

    const taskIndex = $(this).closest(".actions").index();
    console.log(taskIndex)
    // $.post("/delete", { taskIndex: taskIndex }, (response) => {
    //     console.log("Task deleted successfully.");
    // }).fail(() => {
    //     console.error("Error deleting the task.");
    // })
})