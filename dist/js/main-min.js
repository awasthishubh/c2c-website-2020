"use strict";function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}var FAQ_DATA=[{q:"Lorem ipsum dolor sit amet, consectetur adipisicing?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex."},{q:"Lorem ipsum dolor sit amet, consectetur adipisicing?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex."},{q:"Lorem ipsum dolor sit amet consectetur?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."},{q:"Lorem ipsum dolor sit amet consectetur?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."},{q:"Lorem ipsum dolor sit?",a:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."},{q:"Lorem ipsum dolor sit?",a:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."},{q:"Lorem ipsum dolor sit amet consectetur?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."},{q:"Lorem ipsum dolor sit amet consectetur?",a:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."},{q:"Lorem, ipsum dolor?",a:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."}],organizer=function e(i,t,o){_classCallCheck(this,e),this.name=i,this.image=o,this.designation=t},ORGANIZER_DATA=[new organizer("Kartik Soni","Chair","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw1pDEfN8r6I-Pe4967zLzRD&ust=1581333437301000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDA0qCsxOcCFQAAAAAdAAAAABAD")],docFrag=document.createDocumentFragment();window.onload=function(){FAQ_DATA.map(function(e){var i=document.querySelector("div[data-type='collapsible-template']").cloneNode(!0);i.querySelector(".question").textContent=e.q,i.querySelector(".collapsible-content p").textContent=e.a,i.style.display="block",docFrag.appendChild(i)}),document.querySelector(".faq-grid").insertBefore(docFrag,document.querySelector(".code-of-conduct")),docFrag=null,document.querySelectorAll(".collapsible-header").forEach(function(e){return e.addEventListener("click",function(){var i=e.nextElementSibling;e.classList.toggle("active"),e.classList.contains("active")?i.style.maxHeight=i.scrollHeight+"rem":i.style.maxHeight=0})})};