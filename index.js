let isModalOpen = false;
let isFooterModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_rdvucq2",
      "template_qilo1fd",
      event.target,
      "CoaJHSf4eGFA2nCLF"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at: jamkyu@proton.me"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function toggleFooterModal() {
  if (isFooterModalOpen) {
    isFooterModalOpen = false;
    return document.body.classList.remove("footer__modal--open");
  }
  isFooterModalOpen = true;
  document.body.classList += " footer__modal--open";
}

function closeFooterModal() {
  if (isFooterModalOpen) {
    isFooterModalOpen = false;
    return document.body.classList.remove("footer__modal--open");
  }
}

console.log(`
#     #                          
#     # ####### #      #      ######
#     # #       #      #      #    #
####### #####   #      #      #    #
#     # #       #      #      #    #
#     # #       #      #      #    #
#     # ####### ###### ###### ######

####### 
   #    #    # ###### #####  ######
   #    #    # #      #    # #
   #    ###### #####  #    # #####
   #    #    # #      #####  #
   #    #    # #      #   #  #
   #    #    # ###### #    # ######`);
console.log("This website was made by James Kyu ");
