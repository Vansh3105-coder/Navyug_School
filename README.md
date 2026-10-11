# Navyug Public Sr. Sec. School — Official Website Demo

A modern, responsive, multi-page school website concept designed for **Navyug Public Sr. Sec. School, Panipat, Haryana**.

The project aims to provide a clean and user-friendly online experience for students, parents, and visitors through dedicated pages for academics, admissions, campus facilities, events, circulars, results, and school life.

> **Project status:** Website demonstration / prototype. Confirm school-specific information, photographs, facilities, announcements, and results with the school before public use.

## 🌐 Live Demo

**Website:** https://navyugschool.vercel.app/

## ✨ Features

* **Responsive design** — layouts adapted for desktop, tablet, and mobile screens.
* **Multi-page navigation** — separate pages for different school information sections.
* **Modern UI** — consistent navy-blue, blue, and white visual theme.
* **Interactive elements** — mobile navigation, expandable content, category filters, and photo lightbox where implemented.
* **Scroll animations** — content reveal effects while navigating the pages.
* **Gallery experience** — categorized photo grid with an enlarged image viewer.
* **Reusable styling** — shared design patterns across the website.
* **Lightweight frontend** — built with standard HTML, CSS, and JavaScript.

## 📄 Website Pages

| Page       | Purpose                                            |
| ---------- | -------------------------------------------------- |
| Home       | Main landing page and website overview             |
| About      | School introduction and information                |
| Academics  | Academic information and learning-related sections |
| Admissions | Admission-related information                      |
| Facilities | Overview of campus and facility categories         |
| Events     | School event and activity showcase                 |
| Circulars  | Notices and announcements                          |
| Results    | Results-related section                            |
| Gallery    | Photo collection and interactive image viewer      |
| Contact    | Contact and enquiry information                    |

*The availability and completeness of individual pages may vary as development continues.*

## 🛠️ Tech Stack

* **HTML5** — page structure and content
* **CSS3** — styling, layouts, animations, and responsive design
* **JavaScript** — navigation, filters, interactions, and dynamic behaviour
* **Git & GitHub** — version control and source-code hosting
* **Vercel** — website deployment

No frontend framework is required for the core website.

## 📁 Project Structure

```text
school-website/
│
├── index.html
├── vercel.json
├── README.md
│
├── home/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── about/
├── academics/
├── admissions/
├── facilities/
├── events/
├── circulars/
├── results/
├── gallery/
├── contact/
│
└── images/
    ├── school-building.jpg
    ├── campus.jpg
    ├── classroom.jpg
    ├── activities.jpg
    └── ...
```

Each page folder can contain its own HTML, CSS, and JavaScript files. The shared `images/` directory stores photographs and other image assets used throughout the website.

*This is a representative structure; keep the filenames and folders aligned with the actual repository.*

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Open the project

```bash
cd <YOUR_REPOSITORY_FOLDER>
```

### 3. Launch the website

Open the project in Visual Studio Code and use the **Live Server** extension to run the relevant HTML page in your browser.

For example, open `home/index.html` to view the Home page or `gallery/index.html` to view the Gallery page.

If the deployed website uses a root-page rewrite, retain the existing Vercel configuration and verify that the root URL opens the intended landing page.

## 🖼️ Adding or Replacing Images

1. Place image files in the shared `images/` directory.
2. Use the exact filenames referenced by the relevant HTML files.
3. Use appropriately sized, optimized images for faster loading.
4. Add meaningful alternative text to images.
5. Use authentic school photographs only when authorized.

If a page references a filename that does not exist, replace the reference or add the correct image file.

## 🌍 Deployment

This project is configured for a static website deployment workflow.

Typical deployment steps:

1. Commit and push the latest changes to GitHub.
2. Connect the repository to Vercel, if it is not already connected.
3. Configure the project root and build settings appropriately for a static HTML/CSS/JavaScript site.
4. Deploy the project.
5. Test the live URL, navigation links, images, and mobile layout.

**Live deployment:** https://navyugschool.vercel.app/

## 🔧 Future Improvements

* Add verified school information and approved photographs.
* Connect actual notices and circular downloads.
* Publish verified event schedules and result information.
* Connect enquiry forms to a backend or form-handling service.
* Improve accessibility and performance.
* Add content-management functionality if required.

## ⚠️ Important Notes

* This project is a website prototype and should not be treated as an official source of school information until approved by the school.
* Sample events, dates, results, and facility descriptions must be verified before publication.
* Any enquiry form must be tested to confirm whether it actually submits data.
* Do not publish students' personal information or photographs without appropriate authorization.

## 👨‍💻 Developer

**Developed by:** Vansh Jain

**Purpose:** Frontend web development project and school website demonstration.

---

*Built with HTML, CSS, and JavaScript.*
