let userName = [
        "Ashish Shah",
        "Rashmin Chhatrala",
        "Yash Dubey",
        "Prakash Jain",
        "Yashraj Singh",
        "Viraj Sinha ",
        "Rajesh Kumar",
        "Mahesh Marwadi",
        "Suresh Sahni",
        "Amar Vilas",
        "Virdas Singhania",
        "Rajeshwari Bindra",
        "Birendra Bhalerao",
        "Virendra Bhupati",
        "Bhupendra Singh",
        "Bhuvam Bam",
        "Shri Raj",
        "Prashant Kamle",
        "Kamlesh Tomar",
        "Risabh Khare",
        "Rishi Kohli",
        "Kunwar Kharwanda",
        "Kartik Koli",
        "Komal Jain",
        "Kartikey Pandey"
];

    
//userName.forEach(displayName);
/* function displayName (item) {
    document.getElementById("name").innerHTML += item +"<br>";
}

let search = document.getElementById("textsearch");
search.addEventListener("keyup", () => {
    let value = search.value;
    let users = userName.filter((user) => {
        if( user.indexOf(value) != -1 ) return true;
        else false;
    })
    users.forEach(displayName);
}); */


var data= document.getElementById("data").innerHTML= userName;
var string  = document.getElementById("data").innerHTML;
var elDemo  = document.getElementById("name"); 
function getPortions(queryString, string) {
  var results = [];
  if(queryString.length > 0){
    var rgxp = new RegExp("(\\S*)?("+ queryString +")(\\S*)?", "ig");
    string.replace(rgxp, function(match, $1, $2, $3){
      results.push( ($1||" ") +"<span style=color:red>"+ $2 +"</span>"+ ($3||" ") );
    });
  }
  return results;
}

document.getElementById("textsearch").addEventListener("input", function(){
  var result = getPortions(this.value, string);
  elDemo.innerHTML = result.join(); 
});







