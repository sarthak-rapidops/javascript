let courseTitle;
let imgSrc;
let courseLink;
let courseimg;
let coursesArray=[];
let course;
let src;

function AddCourse(){
    if(course=JSON.parse(localStorage.getItem("Courses"))){
        coursesArray=course;
    }
    courseName = document.getElementById("courseName").value;
    courseLink= document.getElementById("courseLink").value;
    courseimg = document.getElementById("courseimg").value;
    let imgaename = courseimg.slice(12);
    src = "./img/" + imgaename ;
    let objectOfCourse = {courseName, courseLink, src};
    coursesArray.push(objectOfCourse);
    localStorage.setItem("Courses",JSON.stringify(coursesArray));
}

const store=()=>{
    AddCourse();
    document.getElementById("courseName").value ="";
    document.getElementById("courseLink").value ="";
    window.location.reload();
}   

/* 
    img.src = src;
    document.body.appendChild(img) */