const courseTypes = ["Editing", "Fashion", "Business", "Craft", "PD",];
const dummyCourses  = {
  Editing: [
    { id: "Editing_1", title: "Character Animation", instructor: "Jane Doe", count: 1200, rating: 4.5, thumbnail: "img/courses-1.jpg" },
    { id: "Editing_2", title: "3D Animation", instructor: "John Smith", count: 2300, rating: 4.7, thumbnail: "img/courses-1.jpg" },
    { id: "Editing_3", title: "Visual Effexts", instructor: "Sara Lee", count: 1800, rating: 4.6, thumbnail: "img/courses-1.jpg" },
    { id: "Editing_4", title: "Adode Photoshop", instructor: "Mike Chan", count: 1500, rating: 4.8, thumbnail: "img/courses-1.jpg" },
  ],
  Fashion: [
    { id: "Fashion_1", title: "Personal Styling", instructor: "Warren B.", count: 3000, rating: 4.9, thumbnail: "img/courses-1.jpg" },
    { id: "Fashion_2", title: "Fashion Management", instructor: "Satoshi N.", count: 2200, rating: 4.6, thumbnail: "img/courses-1.jpg" },
    
    { id: "Fashion_3", title: "Sustainable Fashion", instructor: "Michael Burry", count: 1100, rating: 4.4, thumbnail: "img/courses-1.jpg" },
    { id: "Fashion_4", title: "Textile Fashion", instructor: "Paul A.", count: 1800, rating: 4.5, thumbnail: "img/courses-1.jpg" },
  ],
  Business: [
    { id: "Business_1", title: "Business Strategy", instructor: "Gary Vee", count: 2100, rating: 4.7, thumbnail: "img/courses-1.jpg" },
    
    { id: "Business_2", title: "Entrepreneurship", instructor: "Mark Cuban", count: 1900, rating: 4.6, thumbnail: "img/courses-1.jpg" },
    
    { id: "Business_3", title: "Product Management", instructor: "Marty Cagan", count: 1400, rating: 4.4, thumbnail: "img/courses-1.jpg" },
    { id: "Business_4", title: "Operations Management", instructor: "Tim Cook", count: 1100, rating: 4.3, thumbnail: "img/courses-1.jpg" },
    
  ],
  Craft: [
    
    { id: "Craft_1", title: "Ceramic & Pottery", instructor: "Clay T.", count: 600, rating: 4.3, thumbnail: "img/courses-1.jpg" },
    { id: "Craft_2", title: "Candle Making", instructor: "Lily M.", count: 500, rating: 4.2, thumbnail: "img/courses-1.jpg" },
    { id: "Craft_3", title: "Jewellery Making", instructor: "Granny J.", count: 850, rating: 4.5, thumbnail: "img/courses-1.jpg" },
   
    { id: "Craft_4", title: "Textile Craft", instructor: "Kenji M.", count: 950, rating: 4.7, thumbnail: "img/courses-1.jpg" },
  ],
  PD: [
    { id: "PD_1", title: "Time Management", instructor: "Brian T.", count: 1800, rating: 4.5, thumbnail: "img/courses-1.jpg" },
    { id: "PD_2", title: "Public Speaking", instructor: "Chris A.", count: 2200, rating: 4.8, thumbnail: "img/courses-1.jpg" },
    { id: "PD_3", title: "Emotional Intelligence", instructor: "Daniel G.", count: 1700, rating: 4.6, thumbnail: "img/courses-1.jpg" },
  
    { id: "PD_4", title: "Critical Thinking", instructor: "Carl S.", count: 1200, rating: 4.5, thumbnail: "img/courses-1.jpg" },
  ]
};

// DOM elements
const categoryMenu = document.getElementById("categoryMenu");
const courseMenu = document.getElementById("courseMenu");
const categoryBtn = document.getElementById("categoryBtn");
const courseBtn = document.getElementById("courseBtn");
const showBtn = document.getElementById("showCoursesBtn"); // your "Show Courses" button

// Populate category dropdown
function addCourseTypes() {
  categoryMenu.innerHTML = "";
  courseTypes.forEach(category => {
    const item = document.createElement("a");
    item.className = "dropdown-item";
    item.href = "#";
    item.textContent = category;
    item.addEventListener("click", () => {
      categoryBtn.textContent = category;
      updateCourseDropdown(category);
    });
    categoryMenu.appendChild(item);
  });
}

// Populate course dropdown
function updateCourseDropdown(category) {
  courseMenu.innerHTML = "";
  courseBtn.textContent = "Courses";

  dummyCourses[category].forEach(course => {
    const item = document.createElement("a");
    item.className = "dropdown-item";
    item.href = "#";
    item.textContent = course.title;
    item.addEventListener("click", () => {
      courseBtn.textContent = course.title;
    });
    courseMenu.appendChild(item);
  });
}

// Show courses on button click
function showCourses() {
  const selectedCategory = categoryBtn.textContent;
  const selectedCourse = courseBtn.textContent;
  const courses = dummyCourses[selectedCategory];
  const container = document.getElementById("course-container");

  container.innerHTML = ""; // Clear previous course

  if (!courses) {
    container.innerHTML = "<p class='text-white text-center'>Please select a valid category.</p>";
    return;
  }

  // Find the course that matches the dropdown selection
  const course = courses.find(c => c.title === selectedCourse);
  if (!course) {
    container.innerHTML = "<p class='text-white text-center'>No matching course found.</p>";
    return;
  }
  sessionStorage.setItem("currentCourse",course.id);
  const card = document.createElement("div");
  card.className = "col-lg-4 col-md-6 pb-4";
  card.innerHTML = `
    <a class="courses-list-item position-relative d-block overflow-hidden mb-2" href="login.html">
      <img class="img-fluid" src="${course.thumbnail}" alt="${course.title}">
      <div class="courses-text">
        <h4 class="text-center text-white px-3">${course.title}</h4>
        <div class="border-top w-100 mt-3">
          <div class="d-flex justify-content-between p-4">
            <span class="text-white"><i class="fa fa-user mr-2"></i>${course.instructor}</span>
            <span class="text-white"><i class="fa fa-star mr-2"></i>${course.rating}</span>
          </div>
        </div>
      </div>
    </a>
  `;
  container.appendChild(card);
  card.scrollIntoView({
  behavior: "smooth",   // smooth scrolling animation
  block: "start",       // align to top of viewport
  inline: "nearest"
});
}
 function signIn() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("⚠️ Please enter both email and password.");
      return;
    }

    // Dummy credentials (for testing only)
    if (password === "12345") {
      sessionStorage.setItem("email", email);
      alert("✅ Sign-in successful! Redirecting...");
      
    } else {
      alert("❌ Invalid credentials. Try again!");
    }
  }

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  addCourseTypes();
  categoryBtn.textContent = "Editing";        
  updateCourseDropdown("Editing");

  // Show courses button click
  showBtn.addEventListener("click", showCourses);
});

function checkLoginStatus(redirectIfLoggedIn = false) {
  const user = sessionStorage.getItem("email");

  if (redirectIfLoggedIn && user) {
    // Already logged in → go to index.html
    window.location.href = "subscribe.html";
  } else if (!redirectIfLoggedIn && !user) {
    // Not logged in → go to login.html
    window.location.href = "login.html";
  }
}
function getCourseInfoById(id) {
  // Loop through each category in dummyCourses
  for (const category in dummyCourses) {
    // Find a course with matching title (case-insensitive)
    const course = dummyCourses[category].find(
      (c) => (c.id === id)
    );
    if (course) {
      // Return both course info and its category
      return { ...course, category };
    }
  }
  // If not found, return null
  return null;
}
function addSubscription(email, courseId) {
  if (!email || !courseId) {
    console.warn("Email or Course ID missing — cannot add subscription.");
    return;
  }

  // Get existing subscriptions from sessionStorage
  let subscriptions = JSON.parse(sessionStorage.getItem("subscriptions")) || [];

  // Check for duplicates (optional but good to have)
  const alreadySubscribed = subscriptions.some(
    sub => sub.email === email && sub.courseId === courseId
  );
  if (alreadySubscribed) {
    alert("You are already subscribed to this course!");
    return;
  }

  // Create a new subscription object
  const newSubscription = {
    email: email,
    courseId: courseId,
    date: new Date().toISOString()
  };

  // Add and save back to sessionStorage
  subscriptions.push(newSubscription);
  sessionStorage.setItem("subscriptions", JSON.stringify(subscriptions));

  console.log("✅ Subscription added:", newSubscription);

  // Re-render courses after subscribing
  displaySubscribedCourses();
}

// Function to display subscribed courses
function displaySubscribedCourses() {
  const container = document.getElementById("course-container");
  if (!container) return; // safeguard for missing element

  container.innerHTML = ""; // clear previous cards

  // Get subscriptions from sessionStorage
  const subscriptions = JSON.parse(sessionStorage.getItem("subscriptions")) || [];

  if (subscriptions.length === 0) {
    container.innerHTML = "<p class='text-center text-white w-100'>No subscribed courses found.</p>";
    return;
  }

  // Loop through subscriptions and create cards
  subscriptions.forEach(sub => {
    // If you have a course lookup function (e.g., getCourseInfoById), you can use it here
    const course = typeof getCourseInfoById === "function" ? getCourseInfoById(sub.courseId) : null;

    const courseTitle = course ? course.title : `Course ID: ${sub.courseId}`;
    const instructor = course ? course.instructor : "John Doe";
    const rating = course ? course.rating : "4.5";
    const students = course ? course.students : "250";
    const imgSrc = course ? course.thumbnail : "img/courses-1.jpg";

    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 pb-4";
    card.innerHTML = `
      <a class="courses-list-item position-relative d-block overflow-hidden mb-2" 
         href="detail.html" 
         onclick="sessionStorage.setItem('currentCourse','${sub.courseId}')">
          <img class="img-fluid" src="${imgSrc}" alt="">
          <div class="courses-text">
              <h4 class="text-center text-white px-3">${courseTitle}</h4>
              <div class="border-top w-100 mt-3">
                  <div class="d-flex justify-content-between p-4">
                      <span class="text-white"><i class="fa fa-user mr-2"></i>${instructor}</span>
                      <span class="text-white"><i class="fa fa-star mr-2"></i>${rating}
                          <small>(${students})</small></span>
                  </div>
              </div>
          </div>
      </a>
      <div class="text-center pb-3">
          <button class="btn btn-primary py-2 px-4 mt-2"
              onclick="sessionStorage.setItem('currentCourse','${sub.courseId}'); window.location.href='leaderboard.html';">
              <i class="fa fa-trophy mr-2"></i> View  Leaderboard
          </button>
      </div>
      <div class="text-center pb-3">
          <button class="btn btn-primary py-2 px-4 mt-2"
              onclick="sessionStorage.setItem('currentCourse','${sub.courseId}'); window.location.href='community.html';">
              <i class="fa fa-comments mr-2"></i>  Go  to  Community
          </button>
      </div>
      <div class="text-center pb-3">
          <button class="btn btn-primary py-2 px-4 mt-2"
              onclick="sessionStorage.setItem('currentCourse','${sub.courseId}'); window.location.href='bookslot.html';">
              <i class="fa fa-calendar-check mr-2"></i> Book appointment
          </button>
      </div>
    `;
    container.appendChild(card);
  });
}



// Auto-display subscribed courses on load
window.addEventListener("DOMContentLoaded", displaySubscribedCourses);
(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

