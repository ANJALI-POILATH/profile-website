# Anjali's Personal Portfolio

A personal portfolio website showcasing my professional journey, interests, family, hobbies, and experiences. Built using HTML, CSS, and JavaScript, with a responsive design and a custom theme system.

🌐 **Live Website:** [https://anjali-poilath.github.io/profile-website/](https://anjali-poilath.github.io/profile-website/)

📂 **GitHub Repository:** [https://github.com/ANJALI-POILATH/profile-website](https://github.com/ANJALI-POILATH/profile-website)

---

## About the Project

This project is a single-page personal portfolio designed to present both my professional and personal sides in an interactive and visually engaging way.

It was developed as part of a practical assignment involving frontend development, Git branching strategies, collaborative workflows, and CI/CD automation using GitHub Actions.

## Website Sections

The portfolio consists of six main sections:

### 1. Hero Section
- Personal introduction.
- Profile image and branding.
- Navigation to different sections.

### 2. Professional Journey
- Educational background.
- Professional experiences.
- Career milestones and achievements.

### 3. Personal Likings
- Personal interests and areas of curiosity.
- Visual cards and images representing different interests.

### 4. Family
- A dedicated section celebrating family.
- Family photographs and memories.

### 5. Hobbies
- Image gallery showcasing hobbies and activities.
- Interactive image viewing and lightbox functionality.

### 6. Footer
- Contact and social links.
- Additional navigation and closing information.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts, animations, and responsiveness |
| JavaScript | Interactivity and dynamic functionality |
| Git | Version control |
| GitHub | Repository hosting and collaboration |
| GitHub Actions | CI/CD automation |
| GitHub Pages | Website deployment |

## Project Structure

```text
profile-website/
│
├── .github/
│   └── workflows/
│       ├── validate.yml
│       ├── deploy.yml
│       ├── pr-checks.yml
│       ├── lighthouse.yml
│       └── notify.yml
│
├── css/
│   ├── style.css
│   └── theme.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── family/
│   ├── hero/
│   ├── hobbies/
│   ├── interests/
│   └── journey/
│
├── .htmlhintrc
├── .stylelintrc.json
├── index.html
├── README.md
└── .gitignore
```

## Theme System

The website uses a centralized CSS theme system.

- Theme variables are maintained in `css/theme.css`.
- CSS custom properties are defined under `:root`.
- Colors and other theme-related values can be managed centrally.
- The main stylesheet, `css/style.css`, uses the theme variables for consistent styling.

This approach makes it easier to maintain and customize the website's appearance.

## Responsive Design

The website is designed to work across different screen sizes, including:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile devices.

CSS media queries and flexible layouts are used to adapt the content to different screen sizes.

## Git Branching Strategy

The project follows a structured Git branching strategy.

| Branch | Purpose |
|---|---|
| `main` | Production-ready website |
| `develop` | Integration branch |
| `feature/*` | Individual website features |
| `theme/*` | Theme-related changes |
| `ci/*` | GitHub Actions and CI/CD setup |

Feature and workflow changes were developed in separate branches and integrated into `develop` through pull requests. The completed project was then merged into `main.

## GitHub Actions Workflows

Five GitHub Actions workflows are included in the repository.

| Workflow | Purpose |
|---|---|
| `validate.yml` | HTML and CSS validation |
| `deploy.yml` | Deployment to GitHub Pages |
| `pr-checks.yml` | Pull request quality checks |
| `lighthouse.yml` | Website performance and quality auditing |
| `notify.yml` | Workflow notifications |

These workflows automate validation, quality checks, deployment, auditing, and notifications.

## Running the Project Locally

You can run this project locally without installing any additional frameworks or dependencies.

1. Clone the repository:

```bash
git clone https://github.com/ANJALI-POILATH/profile-website.git
```

2. Navigate to the project directory:

```bash
cd profile-website
```

3. Open the project in Visual Studio Code:

```bash
code .
```

4. Open `index.html` in your browser, or use the Live Server extension in VS Code.

## Deployment

The portfolio is hosted using **GitHub Pages**.

Deployment is automated through the `deploy.yml` GitHub Actions workflow.

The production website is available at:

**https://anjali-poilath.github.io/profile-website/**

## Future Enhancements

- Further improve accessibility.
- Add more interactive elements.
- Optimize images and loading performance.
- Expand the portfolio with new projects and experiences.
- Continue improving responsive design and animations.

---

## Author

**Anjali P V**

Computer Science and Engineering Graduate

- GitHub: [ANJALI-POILATH](https://github.com/ANJALI-POILATH)
- Portfolio: [Visit Website](https://anjali-poilath.github.io/profile-website/)

---

*Designed and developed with creativity, curiosity, and a passion for continuous learning.*