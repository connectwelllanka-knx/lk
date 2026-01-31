// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768) {
        if (!event.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    }
});

// Form Submission
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        
        // In a real application, you would send this to a server
        // For now, we'll show a success message
        
        // Show success message
        alert(`Thank you ${name}! Your enquiry has been submitted. We will contact you within 24 hours.`);
        
        // Reset form
        this.reset();
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Add course data dynamically
const courses = [
    {
        title: "KNX Basic Certification",
        badge: "KNX Certified",
        duration: "5 Days Intensive",
        level: "Beginner to Intermediate",
        features: [
            "KNX Standard Fundamentals",
            "ETS Software Training",
            "System Design & Planning",
            "Practical Installation",
            "Troubleshooting Techniques",
            "KNX TP Topology"
        ],
        color: "linear-gradient(135deg, var(--primary), var(--secondary))"
    },
    {
        title: "Advanced KNX Programming",
        badge: "Advanced Level",
        duration: "7 Days",
        level: "Prerequisite: KNX Basic",
        features: [
            "Advanced ETS Programming",
            "KNX IoT Integration",
            "Building Management Systems",
            "KNX Secure Programming",
            "Custom Visualization",
            "DALI & BACnet Integration"
        ],
        color: "linear-gradient(135deg, #2c3e50, #4a6491)"
    },
    {
        title: "Smart Home Integration",
        badge: "Professional",
        duration: "6 Days",
        level: "Intermediate",
        features: [
            "Multi-Protocol Systems",
            "KNX + DALI + BACnet",
            "Voice Control Integration",
            "Mobile App Development",
            "Energy Management Systems",
            "Cloud Integration"
        ],
        color: "linear-gradient(135deg, #0066cc, #00b4d8)"
    }
];

// Function to create course cards
function createCourseCards() {
    const courseGrid = document.querySelector('.course-grid');
    if (!courseGrid) return;
    
    courseGrid.innerHTML = '';
    
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        
        card.innerHTML = `
            <div class="course-header" style="background: ${course.color}">
                <h3>${course.title}</h3>
                <div class="knx-badge">${course.badge}</div>
            </div>
            <div class="course-body">
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p><strong>Level:</strong> ${course.level}</p>
                <h4>You'll Learn:</h4>
                <ul>
                    ${course.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <a href="#contact" class="cta-button" style="display: block; text-align: center; margin-top: 1.5rem;">Enroll Now</a>
            </div>
        `;
        
        courseGrid.appendChild(card);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    createCourseCards();
    
    // Add current year to footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});