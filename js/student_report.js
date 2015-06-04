/*work on "no name found" message
work on pulling up duplicate names*/

var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudent(student){
    
        var studentInfo = '<h2>Student: ' + student.name + '</h2>';
        studentInfo += '<p>Track: ' + student.track + '</p>';
        studentInfo += '<p>Achievements: ' + student.achievements +'</p>';
        studentInfo += '<p>Points: ' + student.points + '</p>';
        return studentInfo;
}

while(true){
    search = prompt("Enter a student name or type quit or click cancel to end search:").toLowerCase();
       
    if(search === 'quit' || search === null){
        break;
    }
    for(var j = 0; j < students.length; j +=1){
            if(search === (students[j].name).toLowerCase()){
                var student = students[j];
                print(getStudent(student));
            }
        }
}


