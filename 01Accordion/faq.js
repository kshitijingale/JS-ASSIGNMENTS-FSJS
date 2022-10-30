const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer:
      "No, not at all!!!",
  }
];

const accordianBody = document.querySelector('.accordian_body');

const faqs = [];

function showFaq(btn, index) {
  let pText = document.querySelectorAll('.faq p');
  if (pText[index].className == 'hidden') {
    btn.innerText = "-";
    pText[index].className = 'block';
  }
  else {
    pText[index].className = 'hidden';
    btn.innerText = "+";
  }
}

function createFaq(data) {
  faqs.push(`<div id="${data.id}" class="faq">
  <div class="faq_header">
    <h3>${data.question}</h3>
    <button class="show_btn">+</button>
  </div>
  <p class="hidden">
    ${data.answer}
  </p>
  </div>`);
}

function btnStatusUpdate() {
  const btns = document.querySelectorAll('.show_btn');
  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      showFaq(btn, index);
    })
  })
}

faqData.forEach((data) => {
  createFaq(data);
})

faqs.forEach((element) => {
  accordianBody.innerHTML += element;
});


btnStatusUpdate();



