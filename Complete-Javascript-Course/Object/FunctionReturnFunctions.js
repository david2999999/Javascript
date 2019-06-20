function interviewQuestion(job) {
    if(job === "designer"){
        return function (name) {
            console.log(name + ", can you explain what is UX?");
        }
    }else if(job === "teacher"){
        return function (name) {
            console.log("What subject do you teach? " + name);
        }
    }else{
        return function (name) {
            console.log("Hello" + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("Dav");

var designerQuestion = interviewQuestion("designer");

designerQuestion("Josh");
designerQuestion("Tim");
designerQuestion("Mip");

interviewQuestion("teacher")("Jack");