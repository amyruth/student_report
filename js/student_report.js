// prints to output div in html file.

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

/*gave variables related to student info function scope*/

function getStudentInfo(){
    for(var j = 0; j < students.length; j +=1){
        if(search.toLowerCase() === (students[j].name).toLowerCase()){
            var student = students[j];
            var studentInfo = '<h2>Student: ' + student.name + '</h2>';
            studentInfo += '<p>Track: ' + student.track + '</p>';
            studentInfo += '<p>Achievements: ' + student.achievements +'</p>';
            studentInfo += '<p>Points: ' + student.points + '</p>';
            print(studentInfo);
        }
    }
}


/*to keep the prompts going until quit is typed, use while loop w/search at the top
prompt pops up after student info is written to screen*/

while(true){
    var search = prompt("Enter a student name:");
    if(search.toLowerCase() === 'quit' || search === null){
        break;
    }
    getStudentInfo();
}



    
    


