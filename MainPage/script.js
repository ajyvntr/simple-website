const btnCourse = document.getElementById('btnCourse');
const btnAbout = document.getElementById('btnAbout');
const btnContact = document.getElementById('btnContact');
const btnEnroll = document.getElementById('Enroll');

btnCourse.addEventListener('click', ()=>{
    window.location = "/SIA/content/Course/course.html"
});
btnAbout.addEventListener('click', ()=>{
    window.location = "/SIA/content/aboutUs/aboutUs.html"
});
btnContact.addEventListener('click', ()=>{
    window.location = "/SIA/content/Contact/contactUs.html"
});
btnEnroll.addEventListener('click',()=>{
    window.location = "/SIA/content/Enrollment/enrollment.html"
});