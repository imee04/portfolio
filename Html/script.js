d// Smooth scroll on nav click
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetID);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Simple contact form feedback (no backend)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    this.reset();
});
// 🔹 Open Modal Function
function openModal(title, description) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("modal").classList.remove("hidden");
}

// 🔹 Close when (×) is clicked
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});

// 🔹 Close when clicking outside the modal-content
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
let lastSection = ""; // Store the last section the modal was opened from

function openModal(title, description, sectionId) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("modal").classList.remove("hidden");

  lastSection = sectionId; // Save the section ID to scroll back later
}

// Close the modal when clicking the (x)
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");

  // Scroll back to the last viewed section
  if (lastSection) {
    const target = document.getElementById(lastSection);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}
);function openModal(title, description, sectionId) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal').classList.remove('hidden');

  document.getElementById('modal').dataset.returnSection = sectionId;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.close-btn').addEventListener('click', function () {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');

    const sectionId = modal.dataset.returnSection;
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

