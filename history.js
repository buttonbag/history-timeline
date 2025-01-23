function monitorHeaderPosition() {
  const targetClass = "decade"; // header class
  const stickyClass = "small"; // sticky class

  const checkPosition = () => {
   
    const elementAtTop = document.elementFromPoint(0, 0);

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