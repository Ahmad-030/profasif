// Sample book data - Replace with your actual books
const books = [
    {
        id: 1,
        title: "Educational Psychology in Practice",
        year: "2015",
        author: "Dr Muhammad Asif",
        publisher: "Academic Press",
        pages: "350",
        isbn: "978-1234567890",
        image: "", // Add image URL here
        description: "This comprehensive work explores the fundamental principles of educational psychology and their practical applications in modern teaching environments. The book bridges theoretical frameworks with real-world classroom scenarios.",
        abstract: "A detailed examination of cognitive development, learning theories, and instructional strategies that shape contemporary education. This work synthesizes decades of research with practical insights gained from extensive teaching experience.",
        keyFeatures: [
            "Evidence-based teaching strategies",
            "Case studies from real classrooms",
            "Assessment and evaluation frameworks",
            "Student motivation techniques"
        ]
    },
    {
        id: 2,
        title: "Research Methodology in Social Sciences",
        year: "2018",
        author: "Dr Muhammad Asif",
        publisher: "University Press",
        pages: "425",
        isbn: "978-0987654321",
        image: "",
        description: "An essential guide for graduate students and researchers, covering both quantitative and qualitative research methods. This book provides step-by-step guidance for conducting rigorous academic research.",
        abstract: "This comprehensive text covers research design, data collection methods, statistical analysis, and ethical considerations in social science research. It includes practical examples and templates for various research scenarios.",
        keyFeatures: [
            "Mixed methods research approaches",
            "Statistical software tutorials",
            "Research ethics guidelines",
            "Publication strategies"
        ]
    },
    {
        id: 3,
        title: "Critical Thinking in Higher Education",
        year: "2020",
        author: "Dr Muhammad Asif",
        publisher: "Educational Publications",
        pages: "290",
        isbn: "978-1122334455",
        image: "",
        description: "This book examines the role of critical thinking in university education and provides frameworks for developing analytical skills in students across disciplines.",
        abstract: "Exploring the intersection of critical thinking, creativity, and problem-solving in academic settings. The book offers practical strategies for educators to foster deeper learning and intellectual independence.",
        keyFeatures: [
            "Critical thinking assessment tools",
            "Interdisciplinary applications",
            "Bloom's taxonomy integration",
            "Active learning techniques"
        ]
    },
    {
        id: 4,
        title: "Leadership in Academic Institutions",
        year: "2021",
        author: "Dr Muhammad Asif",
        publisher: "Scholarly Books",
        pages: "380",
        isbn: "978-5566778899",
        image: "",
        description: "A comprehensive analysis of leadership challenges and opportunities in higher education, drawing from extensive administrative experience and research.",
        abstract: "This work explores transformational leadership, organizational culture, and change management in universities. It provides insights into building effective academic teams and fostering institutional excellence.",
        keyFeatures: [
            "Leadership assessment frameworks",
            "Change management strategies",
            "Faculty development models",
            "Institutional effectiveness metrics"
        ]
    }
];

// Render books
function renderBooks() {
    const grid = document.getElementById('booksGrid');
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.onclick = () => openModal(book.id);
        
        card.innerHTML = `
            <div class="book-image-container">
                ${book.image ? 
                    `<img src="${book.image}" alt="${book.title}" class="book-image">` :
                    `<div class="book-placeholder">📚</div>`
                }
            </div>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-year">${book.year}</p>
        `;
        
        grid.appendChild(card);
    });
}

// Open modal with book details
function openModal(bookId) {
    const book = books.find(b => b.id === bookId);
    const modal = document.getElementById('bookModal');
    const header = document.getElementById('modalHeader');
    const body = document.getElementById('modalBody');
    
    header.innerHTML = `
        ${book.image ? 
            `<img src="${book.image}" alt="${book.title}" class="modal-image">` :
            `<div class="modal-image-placeholder">📚</div>`
        }
        <div class="modal-title-section">
            <h2 class="modal-title">${book.title}</h2>
            <p class="modal-meta">Author: ${book.author}</p>
            <p class="modal-meta">Publisher: ${book.publisher}</p>
            <p class="modal-meta">Year: ${book.year} | Pages: ${book.pages}</p>
            <p class="modal-meta">ISBN: ${book.isbn}</p>
        </div>
    `;
    
    body.innerHTML = `
        <div class="modal-section">
            <h3>Description</h3>
            <p>${book.description}</p>
        </div>
        <div class="modal-section">
            <h3>Abstract</h3>
            <p>${book.abstract}</p>
        </div>
        <div class="modal-section">
            <h3>Key Features</h3>
            <p>${book.keyFeatures.map(feature => `• ${feature}`).join('<br>')}</p>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('bookModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('bookModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize
renderBooks();
