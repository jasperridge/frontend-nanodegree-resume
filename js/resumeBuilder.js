/*
This is empty on purpose! Your code to build the resume will go here.
*/

//$('#main').append('Jano');

//var firstName = 'Alejandro';
//var age = 39;
//var awesomeThoughts = 'I am Jano and I am AWESOME!';

//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace('AWESOME', 'fun');

//console.log(funThoughts);
//$('#main').append(funThoughts);

//var name = 'Alejandro Rubio';
//var role = 'Senior Engineer';

//var formattedName = HTMLheaderName.replace('%data%', name);
//var formattedRole = HTMLheaderRole.replace('%data%', role);

//$('#header').prepend(formattedRole);
//$('#header').prepend(formattedName);

var bio = {
  'contacts': {
    'email': 'jasperridge@gmail.com',
    'github': 'jasperridge',
    'location': 'San Francisco',
    'mobile': '619.757.9895',
    'twitter': 'jasperridge'
  },
  'name': 'Alejandro Rubio',
  'pictureUrl': "http://scontent.fsnc1-4.fna.fbcdn.net/v/t1.0-9/12932606_10154153568493854_5496581388104565614_n.jpg?oh=c97e8d3c500e4c0dab329c00669bd8e6&oe=58C30654",
  'role': 'Senior Engineer',
  'skills': [
    'AEM',
    'Front End Development',
    'Sailing',
    'Tech PM'
  ],
  'welcomeMessage': 'Hi and thanks for checking out my resume'
};

var work = {};
work.city = 'San Francisco';
work.employer = 'CoMedia Design';
work.position = 'Senior Engineer';
work.yearsWorked = '1';

// var education = {};
// education['city'] = 'Palo Alto';
// education['school'] = 'Stanford University';
// education['yearsAttended'] = '1995-1999';

var education = {
  'schools': [{
    'city': 'Palo Alto',
    'dateOfGraduation': '1999',
    'major': ['Anthropology'],
    'minor': [''],
    'name': 'Stanford University',
    'onlineCourseInfo': 'http://stanford.edu'
  }, {
    'city': 'Oxford, England',
    'dateOfGraduation': '1999',
    'major': ['Creative Writing'],
    'minor': [''],
    'name': 'Oxford University',
    'onlineCourseInfo': 'http://oxford.edu'
  }, {
    'city': 'Minneapolis, Minnesota',
    'dateOfGraduation': '1995',
    'major': ['In Place of High School'],
    'minor': [''],
    'name': 'University of Minnesota, Twin Cities',
    'onlineCourseInfo': 'http://umn.edu'
  }]
};

var formattedContantInfo = HTMLcontactGeneric.replace('%data%', bio.contacts);
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedPictureURL = HTMLbioPic.replace('%data%', bio.pictureUrl);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedSkills = HTMLskills.replace('%data%', bio.skills.join(', '));
var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);


$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').prepend(formattedPictureURL);
$('#header').append(formattedWelcomeMessage);
$('#header').append(HTMLskillsStart);

$('#main').append(work['position']);
$('#main').append(education.school);

$('#skills').append(formattedSkills);

$('#footerContacts').append(formattedContantInfo);