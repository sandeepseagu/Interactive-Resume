/*
This is empty on purpose! Your code to build the resume will go here.

var name="Sandeep Seagu";
var formatedName= HTMLheaderName.replace("%data%",name);
$("#header").append(formatedName);
 $("#main").append("sandeep"); //Jquery command starts with $ sign and "main" is the id in the index.html page//
/* var awesomeThoughts= " I am Sandeep Seagu and i am awesome!";
 console.log(awesomeThoughts); // it prints awesomeThoughts on console
 funThoughts= awesomeThoughts.replace("awesome","fun");
//$("#main").append(funThoughts);
var name="Sandeep Seagu";
var role = "I am actively looking for the postion of Web developer";
var formatedName= HTMLheaderName.replace("%data%",name);/* HTMLheaderName is variable in helper.js by the time
            //resumeBuilder.js is executed helper.js is executed that's why we can access that variable*/
/* var formatedRole= HTMLheaderRole.replace("%data%",role);

$("#header").append(formatedName);
$("#header").append(formatedRole);
var skills=["awesomeness"]
*/
/*var bio={

    "name":"Sandeep Seagu",
    "role":"I am actively looking for the postion of Web developer",
    "contact-info":"903-422-0821",

};*/

//$("#main").append(bio.role);

var bio={
    "name":"Sandeep Seagu",
    "role":"Web Developer",
    "contacts":[{
        "mobile":"903-422-0821",
        "email":"sandeep.segu50@gmail.com",
        "location":"Commerce, Texas, United States Of America "
    }],
    "biopic":"images/fry.jpg",
    "skills":["HTML","CSS","Python","Java Script","Jinja-2","Sqlalchemy","Google webapp engine","java","C++","Jquery","MYSQL"],
    "picture":"images/sandeep.jpg"
}

bio.display=function(){

var formatedName= HTMLheaderName.replace("%data%",bio.name);
var formatedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formatedName);
$("#header").append(formatedRole);
for(contact in bio.contacts)
{
    var formatedEmail=HTMLemail.replace("%data%",bio.contacts[contact].email);
    var formatedMobile=HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
    var formatedLocation=HTMLlocation.replace("%data%",bio.contacts[contact].location);
    var formatedContact=formatedMobile+formatedEmail;
    $("#topContacts").append(formatedContact);
    $("#topContacts").append(formatedLocation);
    //$("#header").append(formatedMobile);




var formatedBiopic=HTMLbioPic.replace("%data%",bio.picture);



$("#header").prepend(formatedBiopic);


}


if(bio.skills.length > 0)
{
      $("#header").append(HTMLskillsStart);

      for(i in bio.skills){
         var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);

}
}
}

bio.display();
      /*formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);*/




var work={
    "jobs":[
    {
    "title":"Web Developer",
    "employer":"InfoTech Solutions",
    "location": "Hyderabad, INDIA",
    "dates":"Aug2014-Jul2015",
    "description":"Built web applications using Google webapp engine as infrastructre. \
    I used Python, HTML, Postgresql, Sqlalchemy and Jinja-2 template language "
    },
    {
     "title":"Test Engineer",
     "employer":"SRV Commodities",
     "location":"Hyderabad, INDIA",
     "dates":"May2014-Jul2014",
     "description":" "
    },
    {
        "title":"Tutor",
        "employer":"JB Institue of Techonolgy and Science",
        "location":"Hyderabad, INDIA",
        "dates":"Jan2014-Apr2014",
        "description":" "
    }
    ]

}





var education={
    "schools":[
    {
        "name":"Texas A&M Commerce",
        "years":"2017",
        "degree":"Masters",
        "majors":"cs",
        "location":"Commerce, TX"
    },
    {
        "name":"Jawahrlal Nehru Institue of Techonolgy and Science",
        "years":"2015",
        "degree":"Bachelor's",
        "majors":"cs",
        "location":"Hyderabad, INDIA"
    }
  ],

    "Online Courses":[
            {
                "title":"Full-Stack-development",
                "school":"Udacity",
                "date":"2017",
                "url":"https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"

            }

    ]
}

education.display=function()
{

    for(var school in education.schools)
    {
        $("#education").append(HTMLschoolStart);
        var formatedSchoolname=HTMLschoolName.replace("%data%",education.schools[school].name);

        var formatedSchooldates=HTMLschoolDates.replace("%data%",education.schools[school].years);
        var formatedSchooldegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formatedmajors= HTMLschoolMajor.replace("%data%",education.schools[school].majors);


        $(".education-entry:last").append(formatedSchoolname,formatedSchooldates,formatedSchooldegree,formatedmajors);

    }

}

education.display();



// Projects Object//

var projects={
    "projects":[
    {
    "title":"Responsive Web Page",
    "year":"2017",
    "tools":"HTML, CSS, bootstrap",
    "description":"It is an single webpage application.It is a Responsive webpage made \
    of using grids and bootstrap framework.It is compataible for any size of device.Some of \
    features were built using media queries and flex-box properties."
    },
    {
        "title":"Attendance Tracking System",
        "year":"2016",
        "tools":"HTML, CSS, Angular js, Mongo DB",

        "description":"Attendance Tracking System(ATS) is a web application used by Students and Professor \
        Students use the application to mark the attendance, enroll in course and drop a course.Professor can add \
        a course or delete a course.It shows the day-to-day attendance"
    },
    {
        "title":"Tournament Database",
        "year":"2017",
        "tools":"Python, PostgreSQL, Vagrant",
        "description":"tournament database is data driven application in which we use PostgreSQL to store \
        players and matches data in tables and Python modules to rank the players, set games \
         between players based on their ranks. This is swiss tournament system in which their is no \
         elimination of players for a loss ."

    }
    ]

}

//project object complete

function displayjob()
{
    for(job in work.jobs){
     $("#workExperience").append(HTMLworkStart);

    var formatedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formatedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formatedEmployerTitle= formatedEmployer + formatedTitle;
    $(".work-entry:last").append(formatedEmployerTitle);
    var formatedDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formatedDate);
    var formatedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description)
    $(".work-entry:last").append(formatedDescription);

}


}

displayjob();


// adding function to projects object which display entire project
projects.display=function(){


    for(project in projects.projects){

        $("#projects").append(HTMLprojectStart);


        var formattedProjectTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectTools=HTMLprojectTools.replace("%data%",projects.projects[project].tools);
        $(".project-entry:last").append(formattedProjectTools);

        var formattedProjectDate=HTMLprojectDates.replace("%data%",projects.projects[project].year);
        $(".project-entry:last").append(formattedProjectDate);

        var formattedProjectDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

    }

}
projects.display();

/* End of adding function to Projects Object */



function inName(name){

    var name=name.split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();


    return name[0]+ " "+name[1];

}


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);