var bio = {
  'contacts': {
    'email': 'jasperridge@gmail.com',
    'github': 'jasperridge',
    'location': 'San Francisco',
    'mobile': '619.757.9895',
    'twitter': 'jasperridge'
  },
  'name': 'Alejandro Rubio',
  'pictureUrl': 'http://scontent.fsnc1-4.fna.fbcdn.net/v/t1.0-9/12932606_10154153568493854_5496581388104565614_n.jpg?oh=c97e8d3c500e4c0dab329c00669bd8e6&oe=58C30654',
  'role': 'Senior Engineer',
  'skills': [
    'AEM',
    'Front End Development',
    'Sailing',
    'Tech PM'
  ],
  'welcomeMessage': 'Hi and thanks for checking out my resume'
};

var education = {
  'onlineCourses': [{
    'dates': '2016',
    'school': 'Udacity',
    'title': 'Javascript Syntax',
    'url': 'http://udacity.com'
  }],
  'schools': [{
    'city': 'Palo Alto',
    'dateOfGraduation': '1999',
    'major': ['Anthropology'],
    'name': 'Stanford University',
    'onlineCourseInfo': 'http://stanford.edu'
  }, {
    'city': 'Oxford, England',
    'dateOfGraduation': '1999',
    'major': ['Creative Writing'],
    'name': 'Oxford University',
    'onlineCourseInfo': 'http://oxford.edu'
  }, {
    'city': 'Minneapolis, Minnesota',
    'dateOfGraduation': '1995',
    'major': ['In Place of High School'],
    'name': 'University of Minnesota, Twin Cities',
    'url': 'http://umn.edu'
  }]
};

var work = {
  'jobs': [{
    'city': 'San Francisco',
    'description': 'Using a hybrid Kanban model, we break down our sprints based on your requirements for deliverables. This allows us to move efficiently while layering a more traditional project approach to work with you more effectively. We build mobile and web apps with proven open source technologies as much as possible to minimize technology transfer snafus, keep costs down, and limit obsolescence of the infrastructure.',
    'employer': 'CoMedia Design',
    'position': 'Senior Engineer',
    'years': '2016-presnt'
  }, {
    'city': 'San Francisco',
    'description': 'SolutionSet is now part of Epsilon. SolutionSet is a digital consultancy. We design and develop web, mobile, social and digital marketing solutions to help leading companies better engage and serve customers. Development and maintenance on company public and private, client-facing portals:  ordering and reporting systems; DNA translation services; laboratory information system integration.  Implementation of new corporate site: sgidna.com.',
    'employer': 'Epsilon, LLC',
    'position': 'Senior Web Developer',
    'years': '2014-2016'
  }, {
    'city': 'San Diego',
    'description': 'Development and maintenance on company public and private, client-facing portals:  ordering and reporting systems; DNA translation services; laboratory information system integration.  Implementation of new corporate site: sgidna.com.',
    'employer': 'SGI-DNA',
    'position': 'Senior Web Developer, consultant',
    'years': '2012-2014'
  }],
  'volunteer': [{
    'city': 'Palo Alto',
    'description': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    'org': 'Stanford Pride',
    'position': 'Volunteer',
    'years': '2014-2016'
  }, {
    'city': 'San Diego',
    'description': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    'employer': 'SD Pride',
    'position': 'Volunteer',
    'years': '2013'
  }]
};



function displayWork() {
  for (i in work.jobs) {
    if (work.jobs.hasOwnProperty(i)) {
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].position);
      var formattedDate = HTMLworkDates.replace('%data%', work.jobs[i].years);
      var formattedCity = HTMLworkLocation.replace('%data%', work.jobs[i].city);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(formattedEmployer + formattedTitle);
      $('.work-entry:last').append(formattedDate);
      $('.work-entry:last').append(formattedCity);
      $('.work-entry:last').append(formattedDescription);
    }
  }
}

displayWork();

$(document).click(function(loc) {
  var locX = loc.clientX;
  var locY = loc.clientY;

  logClicks(locX, locY);
});

$('#main').prepend(internationalizeButton);

function locationizer(work_obj) {
  var workArray = [];

  for (i in work_obj.jobs) {
    if (work_obj.jobs.hasOwnProperty(i)) {
      city = work_obj.jobs[i].city;
      workArray.push(city);
    }
  }

  return workArray;
}

function inName(name) {
  name = name.trim().split(' ');
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + ' ' + name[1];
}


// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

var projects = {
  'project': [{
    'description': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    'title': 'Stanford Pride email',
    'dates': '2014-2016',
    'images': 'http://alumni-gsb.stanford.edu/get/file2/eventImage/15334/L'

  }, {
    'description': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    'title': 'Habitat for Humanity',
    'dates': '2014-2016',
    'images': 'https://www.habitatgsf.org/hubfs/Habitat_Redesign/Shared/big-logo-1.jpg?t=1479509541709'

  }]
};

projects.display = function() {
  for (i in projects.project) {
    if (projects.project.hasOwnProperty(i)) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', projects.project[i].title);
      var formattedDates = HTMLprojectDates.replace('%data%', projects.project[i].dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', projects.project[i].description);
      var formattedPictureURL = HTMLprojectImage.replace('%data%', projects.project[i].images);

      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);
      $('.project-entry:last').append(formattedPictureURL);
    }
  }
}

projects.display();

for (contact in bio.contacts) {
  if (bio.contacts.hasOwnProperty(contact)) {
    var formattedContactInfo = HTMLcontactGeneric.replace('%data%', bio.contacts[contact]);
    $('#topContacts').append(formattedContactInfo);
  }
}

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedPictureURL = HTMLbioPic.replace('%data%', bio.pictureUrl);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedSkills = HTMLskills.replace('%data%', bio.skills.join(', '));
var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);


$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedPictureURL);
$('#header').append(formattedWelcomeMessage);


$('#main').append(work['position']);
$('#main').append(education.school);

$('#skills').append(formattedSkills);


if (bio.skills.length !== 0) {
  $('#header').append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace('%data%', skill);
    $('#skills').append(formattedSkill);
  });
}