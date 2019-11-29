import $ from 'jquery';

const buttonClick = (e) => {
  e.preventDefault();
  const page = e.target.id;
  if (page === 'logoLink') {
    $('#bioPage').addClass('hide');
    $('#techPage').addClass('hide');
    $('#projectsPage').addClass('hide');
    $('#homePage').removeClass('hide');
  } else if (page === 'bioLink') {
    $('#techPage').addClass('hide');
    $('#projectsPage').addClass('hide');
    $('#bioPage').removeClass('hide');
    $('#homePage').addClass('hide');
  } else if (page === 'techLink') {
    $('#bioPage').addClass('hide');
    $('#projectsPage').addClass('hide');
    $('#techPage').removeClass('hide');
    $('#homePage').addClass('hide');
  } else if (page === 'projectsLink') {
    $('#enemiesPage').addClass('hide');
    $('#sectors').addClass('hide');
    $('#personnel').addClass('hide');
    $('#weaponsPage').removeClass('hide');
    $('#homePage').addClass('hide');
  }
};

$('#bioLink').click(buttonClick);
$('#techLink').click(buttonClick);
$('#projectsLink').click(buttonClick);
$('#logoLink').click(buttonClick);

export default { buttonClick };
