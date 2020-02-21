let u = sessionStorage.getItem("username");
document.getElementById("session").innerHTML=u;
const apiResult = JSON.parse(localStorage.getItem("assignedCourse"));
  console.log(apiResult);
  let container = document.getElementById('according');
  
  apiResult.forEach((result, idx) => {
    if(result.StudenName == u ){
    const card = document.createElement('div');
    card.classList = 'card-body';

    const content = `
      <div class="card">
      
      <div class="card-header" id="heading-${idx}">
        <h5 class="mb-0">
        <h5>${result.title}</h5>
        </h5>
      </div>
  
      <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
        <div class="card-body">
          <a class="btn btn-primary" href= ${result.courseLink}>
          Start Course
                          </a>
        </div>
      </div>
    </div>
    `;
  
    container.innerHTML += content;
    }
  }) 

let getButtonID= (id) => {
    btnID = id;       
}

