let courseTitle;
let imgSrc;
let courseLink;
let coursesArray=[];
let course;


function AddCourse(){
    if(course=JSON.parse(localStorage.getItem("Courses"))){
        coursesArray=course;
    }
    courseName = document.getElementById("courseName").value;
    courseLink= document.getElementById("courseLink").value;

    let objectOfCourse = {courseName,courseLink};
    coursesArray.push(objectOfCourse);
    localStorage.setItem("Courses",JSON.stringify(coursesArray));
    //alert("Course Added"); 
}

const store=()=>{
    AddCourse();
    document.getElementById("courseName").value ="";
    document.getElementById("courseLink").value ="";
   window.location.reload();
}   