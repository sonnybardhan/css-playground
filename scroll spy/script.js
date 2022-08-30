const navlinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');

document.addEventListener('scroll', (e) => {
  const scrollTop = window.scrollY;
  console.log(scrollTop);

  sections.forEach((section) => {
    //if section is in view (+- some value)
    //that navlink should light up
    // const scrollTop = section.scrollTop;
    // console.log(scrollTop);
  });
});
