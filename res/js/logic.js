$(function(){
    var courses = [
        new Course("Agile software development", 1, 82),
        new Course("System modeling", 1, 85),
        new Course("Object-oriented programming", 2, 99),
        new Course("Estonian language Level A2", 2, 65),
    ];
    addCourses(courses);

    var user = new User("John", "Doe", "11 / 10 / 1990", "Software Engineering", updateGPA());
    addUser();
    $("#profile-button").click(function(){
        $("#profile-container").show();
        $("#courses-container").hide();
        $(this).removeClass("pill");
        $(this).addClass("pill active");
        $("#courses-button").removeClass("pill active");
        $("#courses-button").addClass("pill");
        addUser();
        updateGPA();
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

        var newTitle=$("#title").val()
        var newSemester=$("#semester").val()
        var newGrade=$("#grade").val()
        var newCourse=new Course(newTitle,newSemester,newGrade);
        courses.push(newCourse);
        addCourses(courses);
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");

    });
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
        return Math.round(sum*100)/100;
    }

    function addCourses(newCourseList){
        $("#listBody").empty();
        $.each(newCourseList, function(index,course) {
            let entry = "<tr>";
            entry += "<td>" + (index+1) + "</td>";
            entry += "<td>" + course.title + "</td>";
            entry += "<td>" + course.semester + "</td>";
            entry += "<td>" + course.grade + "</td>";
            entry += "</tr>";
            $("#courses").append(entry);
        })
    }
    function addUser(){
        $("#info").empty();
        let entry ="";
        entry += "<li>" + user.firstname + "</li>";
        entry += "<li>" + user.lastname + "</li>";
        entry += "<li>" + user.birthdate + "</li>";
        entry += "<li>" + user.facaulty + "</li>";
        entry += "</tr>";
        $("#info").append(entry);
    }

    $("#cancel-course").click(function(){
        $("#add-course").toggle();
        //clear data
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");
    });
});