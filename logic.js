function updateGPA() {
    let sum = 0;
    $("#courses tbody td:nth-child(4)").each(function(index) {
        let value = parseInt($(this).text(),0);
        if(value > 90) { value = 4;}
        else if(value > 80) { value = 3;}
        else if(value > 70) { value = 2;}
        else if(value > 60) { value = 1;}
        else if(value > 50) { value = 0.5;}
        else if(value <= 50) { value = 0;}
        sum += value;
    });
    sum /= $("#courses tr").length;
    $("#gpa").html("<strong>" + Math.round(sum*100)/100 + "</strong>");
}

$(document).ready(function(){
    $("#profile-button").click(function(){
        $("#profile-container").show();
        $("#courses-container").hide();
        $(this).removeClass("pill");
        $(this).addClass("pill active");
        $("#courses-button").removeClass("pill active");
        $("#courses-button").addClass("pill");
    });
    $("#courses-button").click(function(){
        $("#profile-container").hide();
        $("#courses-container").show();
        $(this).removeClass("pill");
        $(this).addClass("pill active");
        $("#profile-button").removeClass("pill active");
        $("#profile-button").addClass("pill");
    });
    $("#add-course-button").click(function(){
        $("#add-course").toggle();
    });

    $("#save-course").click(function(){
        //create row
        let entry = "<tr>";
        entry += "<td>" + $("#courses tr").length + "</td>";
        entry += "<td>" + $("#title").val() + "</td>";
        entry += "<td>" + $("#semester").val() + "</td>";
        entry += "<td>" + $("#grade").val() + "</td>";
        entry += "</tr>";
        $("#courses").append(entry);
        //clear data
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");
        //update big number
        updateGPA();
    });

    $("#cancel-course").click(function(){
        $("#add-course").toggle();
        //clear data
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");
    });

    updateGPA();

});
