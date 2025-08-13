// FORM CODE
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".form-wrapper");
  var successMessage = document.querySelector(".success-message");

  if (!form || !successMessage) {
    console.error("Missing form or success message element.");
    return;
  }

  // Create a MutationObserver to detect new elements added to the DOM
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          // Check if the new node is a div with the correct styles
          const computedStyle = window.getComputedStyle(node);
          if (
            node.tagName === "DIV" &&
            computedStyle.marginTop === "16px" && // 1rem in pixels
            computedStyle.marginBottom === "16px"
          ) {
            console.log("Target div detected:", node); // Debugging log

            // Hide the donation form
            form.style.display = "none";

            // Show the success message
            successMessage.style.display = "block";

            // Stop observing after detecting the div
            observer.disconnect();
          }
        }
      });
    });
  });

  // Observe the entire document for changes
  observer.observe(document.body, { childList: true, subtree: true });
});




// FOOTER ELEMENTS VISIBLE
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".section-ticker, .footer-link-inner, .footer-bottom-middle-mobile, .nav-bottom").forEach((el) => {
    el.style.display = "flex";
    el.style.opacity = "1";
    el.style.visibility = "visible";
  });
});




// HERO TEXT STAGGER PLAY ONCE
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".heading-letter-h1, .heading-letter-h1.is--negative", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.05,
    ease: "power3.out",
    delay: 1,
    scrollTrigger: {
      trigger: ".layout-inner.is--contact",
      start: "top 80%",
      toggleActions: "play none none none",
      once: true // 🔁 Play only once
    }
  });
});
