// scripts.js




	var loader=document.getElementById("spinerr");


function display(){
loader.style.display ="none";
}
setInterval(display,2000);

	
	
	
	
	
	
	var project1=setInterval(project1,10);
var project2=setInterval(project2,10);
var project3=setInterval(project3,10);
count1=1;
count2=2;
count3=3;
function project1(){
count1++;
document.querySelector("#number1").innerHTML=count1;
if(count1==500){

clearInterval(project1)
}
}

function project2()
{count2++;
document.querySelector("#number2").innerHTML=count2;
if(count2==499){

clearInterval(project2)
}
}

function project3()
{
count3++;
document.querySelector("#number3").innerHTML=count3;
if(count3==400)
{
clearInterval(project3)
}
}
	
	
	
	
	
	





















document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent! Thank you for contacting me.');
        contactForm.reset();
    });
});
