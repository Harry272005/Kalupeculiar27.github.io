let body = document.body;
body.style.backgroundImage = "url()";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
body.style.minHeight = "1000px";
body.style.margin = "0";
body.style.letterSpacing = "1px";
body.style.transition = "0.5s";


const aboutSection = document.createElement("section");
aboutSection.style.width = "90%";
aboutSection.style.height = "500px";
aboutSection.style.margin = "50px auto";
aboutSection.style.display = "flex";
aboutSection.style.justifyContent = "space-between";
aboutSection.style.alignItems = "top";
aboutSection.style.padding = "40px";
aboutSection.style.borderRadius = "30px";

aboutSection.classList.add("about-section");

const aboutText = document.createElement("div");
aboutText.classList.add("about-text");
aboutText.style.width = "50%";
aboutText.style.color = "white";
aboutText.style.lineHeight = "1.5";


const aboutH = document.createElement("div");
aboutH.style.width = "250px";
aboutH.style.height = "60px";
aboutH.style.marginLeft = "0px";
aboutH.style.display = "flex";
aboutH.style.backgroundColor = "rgba(255,255,255,0.1)";
aboutH.style.alignItems = "center";
aboutH.style.borderTopRightRadius = "40px";
aboutH.style.borderBottomRightRadius = "40px";
aboutH.style.backdropFilter = "blur(20px)";
aboutH.style.background = "linear-gradient(to right, transparent, rgba(255,255,255,0.1))";


const heading = document.createElement("h1");
heading.textContent = "About Me";
heading.style.fontSize = "35px";
heading.style.marginBottom = "20px";
heading.style.position = "center";
heading.style.paddingLeft = "80px";
heading.style.fontFamily = "arial";
heading.style.color = "white";
heading.style.fontWeight = "bold";



const paragraph = document.createElement("p");
paragraph.textContent =
"Hi!";
paragraph.style.fontSize = "17px";
paragraph.style.marginBottom = "20px";
paragraph.style.fontFamily = "Arial";

const para2 = document.createElement("p");
para2.style.fontSize = "17px";
// para2.style.marginBottom = "16px";
para2.style.fontFamily = "Arial";
para2.innerHTML = `
    My name is <span style="color: #cfaf2e; font-weight: bold;">Kalu Peculiar</span>.<br><br>
    I am a <span style="color: #cfaf2e;">Web developer</span> based in Abuja, Nigeria
    with solid experience gained through hands-on projects and academic work.
`;

const para3 = document.createElement("p");
para3.style.fontSize = "17px";
// para3.style.marginBottom = "30px";
para3.style.fontFamily = "Arial";
para3.innerHTML = `
    <span style="color: #cfaf2e; font-weight: bold;">My objective:</span> 
    Challenge myself in a new environment to learn, grow, and shapen my skills
    through different projects and contribute meaningfully to the team  with my abilities.
`;

const imgdiv = document.createElement("div");
imgdiv.style.width = "250px";
imgdiv.style.height = "350px";
imgdiv.style.borderRadius = "65px";
imgdiv.style.overflow = "hidden";
imgdiv.style.border = "1px solid white";

const Hcontact = document.createElement("div");
Hcontact.textContent = "Contact";

Hcontact.style.display = "flex";
Hcontact.style.fontSize = "30px";
Hcontact.style.marginTop = "40px";
Hcontact.style.fontFamily = "Arial";
Hcontact.style.fontWeight = "bold";
Hcontact.style.color = "white";
Hcontact.style.fontStyle = "italic";


const contact = document.createElement("section");

contact.style.display = "flex";
contact.style.justifyContent = "space-between";
contact.style.marginTop = "0px";
contact.style.width = "100%";
contact.style.color = "white";



const leftContact = document.createElement("section");
leftContact.style.display = "flex";
leftContact.style.flexDirection = "column";
leftContact.style.gap = "20px";
contact.appendChild(leftContact);

const rightContact = document.createElement("section");
rightContact.style.display = "flex";
rightContact.style.flexDirection = "column";
rightContact.style.gap = "20px";

contact.appendChild(rightContact);


const email = document.createElement("p");

email.innerHTML =
'<i class="fa-brands fa-google"></i><a href="mailto:Peeteq27@gmail.com">peeteq27@gmail.com</a>';
leftContact.appendChild(email);

email.style.display = "flex";
email.style.alignItems = "center";
email.style.gap = "10px";
email.style.fontSize = "16px";
email.querySelector("a").style.textDecoration = "none";
email.querySelector("a").style.color ="inherit";



const linkedin = document.createElement("p");

linkedin.innerHTML =
'<i class="fa-brands fa-linkedin"></i><a href="https://linkedin.com/in/kalupeculiar" target="_blank">linkedin.com/in/kalupeculiar<a/>';

leftContact.appendChild(linkedin);

linkedin.style.display = "flex";
linkedin.style.alignItems = "center";
linkedin.style.gap = "10px";
linkedin.style.fontSize = "16px";
linkedin.querySelector("a").style.textDecoration = "none";
linkedin.querySelector("a").style.color ="inherit";

const phone = document.createElement("p");

phone.innerHTML =
'<i class="fa-solid fa-phone"></i> +234 8119052741';

rightContact.appendChild(phone);

phone.style.display = "flex";
phone.style.alignItems = "center";
phone.style.gap = "10px";
phone.style.fontSize = "16px";


const github = document.createElement("p");
github.innerHTML =
'<i class="fa-brands fa-github"></i> <a href="https://github.com/kalupeculiar27" target="_blank">github.com/kalupeculiar27</a>';

rightContact.appendChild(github);

github.style.display = "flex";
github.style.alignItems = "center";
github.style.gap = "10px";
github.style.fontSize = "16px";
github.querySelector("a").style.textDecoration = "none";
github.querySelector("a").style.color ="inherit";


const fmain = document.createElement("div");

fmain.style.border = "1px solid rgba(225,225,225,0.2)";
// fmain.style.width = "85%";
fmain.style.width = "90%";
fmain.style.maxWidth = "1200px";
fmain.style.boxSizing = "border-box";
fmain.style.minheight = "700px";
fmain.style.marginRight = "600px";
fmain.style.padding = "60px";
fmain.style.backgroundColor = "rgba(255,255,255,0.1)";
fmain.style.backdropFilter = "blur(20px)";
fmain.style.display = "grid";
fmain.style.gridTemplateColumns = "1fr 1fr";
fmain.style.gap = "60px";
fmain.style.boxShadow ="0 0 60px black";
fmain.style.alignItems = "start";
fmain.style.borderTopRightRadius = "140px";
fmain.style.borderBottomRightRadius = "140px";
fmain.style.transform = "translateY(-30px)";
fmain.style.transition = "0.4s";
fmain.addEventListener("mouseenter", () => {

   fmain.style.transform = "translateY(-40px)";
});
fmain.addEventListener("mouseleave", () => {

   fmain.style.transform = "translateY(-30px)";
});





function createSection(title, content){
    const section = document.createElement("div");
    section.style.padding = "10px 20px";
    section.style.opacity = "0";
   section.style.transform = "translateY(40px)";
  section.style.transition = "1s";

  setTimeout(() => {
   section.style.opacity = "1";
   section.style.transform = "translateY(0)";
}, 300);
    const heading = document.createElement("h2");
    heading.textContent = title;
    heading.style.color = "white";
    heading.style.fontSize = "20px";
    heading.style.marginBottom = "20px";
    heading.style.fontFamily = "arial";
    heading.style.fontStyle = "italic";
    section.appendChild(heading);

    const text = document.createElement("p");
    text.innerHTML = content;
    text.style.color = "white";
    text.style.fontSize = "15px";
    text.style.lineHeight = "2";
    text.style.fontFamily = "arial";
    text.style.fontStyle = "italic";
    section.appendChild(text);

    fmain.appendChild(section);
}

createSection(
    "Education",
    "Veritas University - Computer Engineering"
);

// createSection(
//     "Soft skills",
//     "Comunication <br> Teamwork <br> Critical Thinking <br> Time Managment"
// );

const softSkills = document.createElement("div");

const softTitle = document.createElement("h2");

softTitle.textContent = "Soft Skill";
softTitle.style.color = "white";
softTitle.style.fontSize = "20px";
softTitle.style.fontFamily = "arial";
softTitle.style.fontStyle = "italic";
softSkills.appendChild(softTitle);

const skillWrapper = document.createElement("div");

skillWrapper.style.display = "flex";
skillWrapper.style.gap = "40px";
skillWrapper.style.marginTop = "20px";

const leftSkills = document.createElement("div");

leftSkills.innerHTML =
"Teamwork <br><br> Communication";


const line = document.createElement("div");

line.style.width = "2px";
line.style.height = "60px";
line.style.background = "white";

const rightSkills = document.createElement("div");
rightSkills.innerHTML =
"Critical Thinking <br><br> Time Management";


[leftSkills, rightSkills].forEach(div => {
    div.style.color = "white";
    div.style.fontSize = "15px";
    div.style.fontFamily = "arial";
    div.style.fontStyle = "italic";

});


skillWrapper.appendChild(leftSkills);
skillWrapper.appendChild(line);
skillWrapper.appendChild(rightSkills);
softSkills.appendChild(skillWrapper);
fmain.appendChild(softSkills);

// createSection(
//     "Technical Skills",
//     "HTML <br> CSS <br> JavaScript <br> React <br> Python"
// );

const techskills = document.createElement("div");
const techTitle = document.createElement("h2");
techTitle.textContent = "Technical Skills";
techTitle.style.color = "white";
techTitle.style.fontSize = "20px";
techTitle.style.fontFamily = "arial";
techTitle.style.fontStyle = "italic";
techskills.appendChild(techTitle);


const iconGrid = document.createElement("div");

iconGrid.style.display = "grid";
iconGrid.style.gridTemplateColumns = "repeat(3, 90px)";
iconGrid.style.gap = "20px";
iconGrid.style.marginTop = "30px";


const icons = [
   "img/1_--UrTgzXfdZFv8Q8KltnFg.jpg",
   "img/OIP (3).webp",
   "img/Webp.net-resizeimage-4-2.webp",
   "img/react-1-logo-png-transparent.png",
   "img/76720b81-06dc-46c2-8985-ccd0fbdac953.jpg",

];


icons.forEach(src => {

   const icon = document.createElement("img");

   icon.src = src;
   icon.style.width = "80px";
   icon.style.height = "80px";
   icon.style.objectFit = "contain";
   icon.style.transition = "0.3s";
   icon.style.borderRadius = "20px";
   icon.style.padding = "10px";


   icon.addEventListener("mouseenter", () => {

      icon.style.transform = "scale(1.1)";
   });

   icon.addEventListener("mouseleave", () => {

      icon.style.transform = "scale(1)";
   });

   iconGrid.appendChild(icon);

});

techskills.appendChild(iconGrid);
fmain.appendChild(techskills);


// createSection(
//     "Skill Set",
//     "Web Development <br> HardWare Repair <br> Wireframing"
// );

const skillset = document.createElement("div");

const skilltext= document.createElement("h2");

skilltext.textContent = "Skill Set";
skilltext.style.color = "white";
skilltext.style.fontSize = "20px";
skilltext.style.fontFamily = "arial";
skilltext.style.fontStyle = "italic";
skillset.appendChild(skilltext);

const setWrapper = document.createElement("div");

setWrapper.style.display = "flex";
setWrapper.style.gap = "40px";
setWrapper.style.marginTop = "20px";

const leftset = document.createElement("div");

leftset.innerHTML =
"Web Development <br><br> Wireframing";


const line2 = document.createElement("div");

line2.style.width = "2px";
line2.style.height = "60px";
line2.style.background = "white";

const rightset = document.createElement("div");
rightset.innerHTML =
"Hardware Repair <br><br> Brainstorming";


[leftset, rightset].forEach(div => {
    div.style.color = "white";
    div.style.fontSize = "15px";
    div.style.fontFamily = "arial";
    div.style.fontStyle = "italic";

});

setWrapper.appendChild(leftset);
setWrapper.appendChild(line2);
setWrapper.appendChild(rightset);
skillset.appendChild(setWrapper);
fmain.appendChild(skillset);


createSection(
    "Interest",
    "Technology <br> Fashion <br> Games"
);

// createSection(
//     "Language",
//     "Igbo <br> English"
// );


const Language = document.createElement("div");

const LanguageT = document.createElement("h2");

LanguageT.textContent = "Language";
LanguageT.style.color = "white";
LanguageT.style.fontSize = "20px";
LanguageT.style.fontFamily = "arial";
LanguageT.style.fontStyle = "italic";
Language.appendChild(LanguageT);

const LanWrapper = document.createElement("div");

LanWrapper.style.display = "flex";
LanWrapper.style.gap = "40px";
LanWrapper.style.marginTop = "20px";

const leftlan = document.createElement("div");

leftlan.innerHTML =
"Igbo";


const line1 = document.createElement("div");

line1.style.width = "2px";
line1.style.height = "20px";
line1.style.background = "white";

const rightlan = document.createElement("div");
rightlan.innerHTML =
"English";


[leftlan, rightlan].forEach(div => {
    div.style.color = "white";
    div.style.fontSize = "15px";
    div.style.fontFamily = "arial";
    div.style.fontStyle = "italic";

});

LanWrapper.appendChild(leftlan);
LanWrapper.appendChild(line1);
LanWrapper.appendChild(rightlan);
Language.appendChild(LanWrapper);
fmain.appendChild(Language);

aboutH.appendChild(heading);
aboutText.appendChild(aboutH);
aboutText.appendChild(paragraph);
aboutText.appendChild(para2);
aboutText.appendChild(para3);
aboutText.appendChild(Hcontact);
aboutText.appendChild(contact);

aboutSection.appendChild(aboutText);
aboutSection.appendChild(imgdiv);

body.appendChild(aboutSection);
body.appendChild(fmain)




if(window.innerWidth < 768){
   aboutSection.style.flexDirection = "column";
   aboutSection.style.textAlign = "center";
   aboutSection.style.gap = "30px";

   imgdiv.style.width = "220px";
   imgdiv.style.height = "300px";

   fmain.style.gridTemplateColumns = "1fr";
   fmain.style.padding = "30px";
   fmain.style.borderRadius = "40px";
   fmain.style.minHeight = "50";

   
}