var Tim = {
    name: "Tim",
    age : 26,
    job : "Teacher",
    presentation: function (style, timeOfDay) {
        if(style === "formal"){
            console.log("Good " + timeOfDay + ", Ladies and gentleman! I'm " +
            this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old.");
        }else if(style === "friendly"){
            console.log("Hey! what's up? I'm " + this.name + ", I'm a " + this.job +
            " and I'm " + this.age + " years old. Have a nice " + timeOfDay);
        }
    }
};


var emily = {
    name : "Emily",
    age  : 35,
    job: "designer"
};

Tim.presentation('formal', 'morning');
Tim.presentation.call(emily, 'friendly', 'afternoon');
// Tim.presentation(emily, ['friendly', 'night']);

var TimFriendly = Tim.presentation.bind(Tim, 'friendly');

TimFriendly("night");
TimFriendly("day");