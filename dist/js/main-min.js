"use strict";function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}var FAQ_DATA=[{q:"Lorem ipsum dolor sit amet, consectetur adipisicing?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex."},{q:"Lorem ipsum dolor sit amet, consectetur adipisicing?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex."},{q:"Lorem ipsum dolor sit amet consectetur?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."},{q:"Lorem ipsum dolor sit amet consectetur?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."},{q:"Lorem ipsum dolor sit?",a:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."},{q:"Lorem ipsum dolor sit?",a:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."},{q:"Lorem ipsum dolor sit amet consectetur?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."},{q:"Lorem ipsum dolor sit amet consectetur?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."},{q:"Lorem, ipsum dolor?",a:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."}],organizer=function e(i,a,n){_classCallCheck(this,e),this.name=i,this.image=n,this.designation=a},ORGANIZER_DATA=[new organizer("Kartik Soni","Chair","./images/kartikSoni.png"),new organizer("Shubham Awasthi","Vice Chair - Technical","./images/shubhamAwasthi.png"),new organizer("Nimisha Bhatia","Vice Chair - Management","./images/nimishaBhatia.png"),new organizer("Fiza rasool","General Secretary","./images/fizaRasool.png"),new organizer("Aditya Srivastava","Web Master","./images/adityaSrivastava.png"),new organizer("Sarthak Dandotiya","UI UX Lead","./images/sarthakDandotiya.png"),new organizer("Sventansu Singh","Treasurer","./images/sventansuSingh.png"),new organizer("Rajat Gupta","Competitive Lead","./images/rajatGupta.png"),new organizer("Subhaditya Mukherjee","Research Lead","./images/subhadityaMukherjee.png"),new organizer("Sparsh Srivastava","App Lead","./images/sparshSrivastava.png"),new organizer("Shrey Sindher","Projects Lead - App","./images/shreySindher.png"),new organizer("Shivank Sahai","Projects Lead - Web","./images/shivankSahai.png"),new organizer("Bhumij Gupta","Creative Head","./images/bhumijGupta.png"),new organizer("Madhur Dixit","Projects Lead - Research","./images/madhurDixit.png"),new organizer("Hari Ram Vishvakarma","Faculty Organiser","./images/white.png"),new organizer("Divya Udayan","Faculty Organiser","./images/white.png"),new organizer("Some Name","Faculty Organiser","./images/white.png"),new organizer("Some Name","Faculty Organiser","./images/white.png")],docFrag=document.createDocumentFragment();window.onload=function(){var e="",i=document.querySelector(".faqPage .faq-grid");console.log(i),FAQ_DATA.map(function(i){var a='<div\n      class="collapsible"\n      data-type="collapsible-template"\n    >\n    <button class="collapsible-header">\n      <div class="question-group">\n        <span class="question">'.concat(i.q,'</span>\n        <span class="arrow">\n          <img src="./vectors/arrow-green.svg" alt="FAQ Expand" />\n        </span>\n      </div>\n    </button>\n    <div class="collapsible-content">\n      <p>').concat(i.a,"</p>\n    </div>\n  </div>");e+=a}),e+='<div class="code-of-conduct">\n    < button class="c-of-c-text" >\n      <div class="c-of-c-collection">\n        <span class="text">Code of Conduct</span>\n        <span class="arrow">\n          <img src="./vectors/arrow-green.svg" alt="Code of Conduct" />\n        </span>\n      </div>\n            </button >\n          </div >',i.innerHTML=e,document.querySelectorAll(".collapsible-header").forEach(function(e){return e.addEventListener("click",function(){var i=e.nextElementSibling;e.classList.toggle("active"),e.classList.contains("active")?i.style.maxHeight=i.scrollHeight+"rem":i.style.maxHeight=0})});var a=document.querySelector(".organizers main");e="",ORGANIZER_DATA.map(function(i){var a="<div>\n        <img\n          src=".concat(i.image,'\n          alt="check"\n        />\n        <p>\n          <span> ').concat(i.name,"</span><br />\n          ").concat(i.designation,"\n        </p>\n      </div>");e+=a}),a.innerHTML=e};