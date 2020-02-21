const apiResult = JSON.parse(localStorage.getItem("Courses"));
let assignedCourse = JSON.parse(localStorage.getItem("assignedCourse"));
let User = JSON.parse(localStorage.getItem("StudentName"));

let container = document.getElementById('according');
let courses = [];
let assignCourse = assignedCourse;
let btnid;

let username;
if (apiResult) {
    apiResult.forEach((result, idx) => {

        const card = document.createElement('div');
        card.classList = 'card-body';


        const content = `
    <div class="card">
   
    <div class="card-header" id="heading-${idx}">

   
      <h5 class="mb-0">
      <h5>${result.courseName}</h5>
      </h5>
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body ">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick="assignHTML(this.id);creatTable();" id=${result.courseName}>
      Assign Course
  </button> <button type="button" class="btn btn-primary" onclick="RemoveCourse(this.id);remove();" id=${result.courseName}>
  Remove Course
</button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">List of Student</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                 <!--  <button type="button" onclick="creatTable()" id="tb">Click</button> -->
                  <div id="new">

                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                
              </div>
          </div>
      </div>
  </div>
      </div>
    </div>
  </div>
  `;

        container.innerHTML += content;
    })
}
else {
    alert("add new course from Add Course Tab");
}

const creatTable = () => {
    let btnname = "Assign";
    let method = "ass(this.id)";
    let classname  ="btn btn-primary";
    noOfStudent = JSON.parse(localStorage.getItem("StudentName"));

    let std = '';
    if (assignedCourse) {
        for (let i = 0; i < noOfStudent.length; i++) {
            for (let j = 0; j < assignedCourse.length; j++) {
                if (assignedCourse[j].StudenName.includes(User[i]) && assignedCourse[j].title.includes(btnid)) {
                    btnname = "Remove";
                    method = "rm(this.id)"
                    classname ="btn btn-danger";
                    break;
                }
                else {
                    btnname = "Assign";
                    method = "ass(this.id)";
                    classname ="btn btn-primary";
                }
            }
            std += `<li style="display:inline">${noOfStudent[i]}</li> <input type="button" style="text-align:right; margin: 5px" class="${classname}" 
        id=${i} onclick=${method} value=${btnname}></input>
        <br>`;
        }
    }
    else {
        for (let i = 0; i < noOfStudent.length; i++) {
            std += `<li style="display:inline">${noOfStudent[i]}</li> <input type="button" style="text-align:right; margin: 5px" class="${classname}" 
        id=${i} onclick=${method} value=${btnname}></input>
        <br>`;
        }
    }
    document.getElementById("new").innerHTML = std;
}
function assignHTML(bid) {
    btnid = bid;
}
let courseobject;
function ass(bid) {
    console.log("hello");
    uname = document.getElementById(bid).previousElementSibling.innerHTML;
    console.log(uname);
    for (let j = 0; j < apiResult.length; j++) {
        if (assignCourse) {
            switch (btnid) {
                case apiResult[j].courseName:
                    courseobject = { title: `${apiResult[j].courseName}`, StudenName: uname, courseLink:`${apiResult[j].courseLink}`  };
                    assignCourse.push(courseobject);
                    localStorage.setItem("assignedCourse", JSON.stringify(assignCourse));
                    alert(`${apiResult[j].courseName} is Assigned to ${uname}`);
                    window.location.reload();
                    break;
            }
        }
        else {
            switch (btnid) {
                case apiResult[j].courseName:
                    courseobject = { title: `${apiResult[j].courseName}`, StudenName: uname };
                    courses.push(courseobject);
                    localStorage.setItem("assignedCourse", JSON.stringify(courses));
                    alert(`${apiResult[j].courseName} is Assigned to ${uname}`);
                    window.location.reload();
                    break;
            }
        }
    }
}

function rm(bid) {
    username = document.getElementById(bid).previousElementSibling.innerHTML;;
    for (let j = 0; j < assignedCourse.length; j++) {
        if (assignedCourse[j].title == btnid && assignedCourse[j].StudenName == username) {
            assignedCourse.splice(j, 1);
            localStorage.setItem("assignedCourse", JSON.stringify(assignedCourse));
        }

    }

}
let btid;
function RemoveCourse(id) {
    btid = id;
}
function remove() {
    for (let j = 0; j < apiResult.length; j++) {
        if (apiResult[j].courseName == btid) {
            apiResult.splice(j, 1);
            localStorage.setItem("Courses", JSON.stringify(apiResult));
            window.location.reload();

        }
        for (let i = 0; i < assignedCourse.length; i++) {
            if (assignedCourse[i].title.includes(btid)) {
                assignedCourse.splice(i, 1);
                localStorage.setItem("assignedCourse", JSON.stringify(assignedCourse));
                window.location.reload();
            }

        }

    }
}



