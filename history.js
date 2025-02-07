/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* sticky top decade headers */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function monitorHeaderPosition() {
  const targetClass = "decade"; // header class
  const stickyClass = "small"; // sticky class

  const checkPosition = () => {
   
    const elementAtTop = document.elementFromPoint(window.innerWidth/2, 15);

    //check top element
    if (elementAtTop?.tagName === "HEADER" && elementAtTop.classList.contains(targetClass)) {
      // add sticky to top header
      if (!elementAtTop.classList.contains(stickyClass)) {
        elementAtTop.classList.add(stickyClass);
      }

      //remove sticky from all other headers
      document.querySelectorAll(`header.${targetClass}`).forEach(header => {
        if (header !== elementAtTop && header.classList.contains(stickyClass)) {
          header.classList.remove(stickyClass);
        }
      });
    } else {
      ///remove sticky from all headers
      document.querySelectorAll(`header.${targetClass}.${stickyClass}`).forEach(header => {
        header.classList.remove(stickyClass);
      });
    }
  };

  //add scroll listener
  window.addEventListener("scroll", checkPosition);
}

monitorHeaderPosition();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* header nav */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const header = document.querySelectorAll('.nav');

header.forEach(element => {
  element.innerHTML += `
    <ul class="tl-nav">
      <li class="tl-nav-item"><a href="#section1">1800s</a></li>
      <li class="tl-nav-item"><a href="#section2">1900s</a></li>
      <li class="tl-nav-item"><a href="#section3">1910s</a></li>
      <li class="tl-nav-item"><a href="#section4">0000s</a></li>
      <li class="tl-nav-item"><a href="#section5">0000s</a></li>
      <li class="tl-nav-item"><a href="#section6">0000s</a></li>
      <li class="tl-nav-item"><a href="#section7">0000s</a></li>
      <li class="tl-nav-item"><a href="#section8">0000s</a></li>
      <li class="tl-nav-item"><a href="#section9">0000s</a></li>
      <li class="tl-nav-item"><a href="#section10">0000s</a></li>
      <li class="tl-nav-item"><a href="#section11">0000s</a></li>
      <li class="tl-nav-item"><a href="#section12">0000s</a></li>
      <li class="tl-nav-item"><a href="#section13">0000s</a></li>
      <li class="tl-nav-item"><a href="#section14">0000s</a></li>
    </ul>`;
});


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* fade in when in view */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const section = document.querySelectorAll(".tl-card");

section.forEach((el) => {
  el.classList.add("will-fade-in");
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
    // Add the else if you want to fade out images out of the viewport
    else {
      entry.target.classList.remove("fade-in");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

section.forEach((el) => observer.observe(el));
