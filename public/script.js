const drkMd = document.querySelector(".drk-md");
const html = document.querySelector("html");
const icns = document.querySelectorAll(".icn-btn");
const ftrTxt = document.querySelector(".footer");

drkMd.addEventListener("click", () => {
  if (drkMd.className === "btn btn-outline-dark drk-md") {
    html.setAttribute("data-bs-theme", "dark");
    for (icn of icns) {
      icn.className = "btn btn-outline-light icn-btn";
    }
    drkMd.className = "btn btn-outline-light drk-md";
    drkMd.innerHTML = 'Light Mode <i class="bi bi-brightness-high-fill"></i>';
    ftrTxt.style.backgroundColor = "rgba(40, 40, 40, 0.1)";
  } else {
    html.setAttribute("data-bs-theme", "light");
    for (icn of icns) {
      icn.className = "btn btn-outline-dark icn-btn";
    }
    drkMd.className = "btn btn-outline-dark drk-md";
    drkMd.innerHTML = 'Dark Mode <i class="bi bi-moon-stars-fill"></i>';
    ftrTxt.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
  }
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


// Sample data for the timeline
const timelineData = [
  { date: '2024-02-15', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { date: '2024-02-16', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { date: '2024-02-17', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  // Add more timeline events as needed
];

// Function to add timeline items dynamically
function createTimelineItem(date, content) {
  const timeline = document.getElementById('timeline');
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
      <div class="timeline-item-date">${date}</div>
      <div class="timeline-item-content">${content}</div>
  `;
  timeline.appendChild(item);
}

// Populate the timeline with data
timelineData.forEach(event => {
  createTimelineItem(event.date, event.content);
});