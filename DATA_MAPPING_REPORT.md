# DATA MAPPING REPORT

This report maps all headings and data points from data/profile.md and referenced details from data/Current_Projects.md to UI sections/components.

## Profile Heading Coverage

- Basic Information -> src/components/Hero.jsx, src/components/Navbar.jsx, src/components/Contact.jsx, src/components/Footer.jsx, src/components/Resume.jsx
- Hero Section -> src/components/Hero.jsx
- Key Highlights -> src/components/KeyHighlights.jsx
- About Me -> src/components/About.jsx
- Education -> src/components/Academics.jsx
- Experience -> src/components/Experience.jsx
- Positions of Responsibility -> src/components/Experience.jsx (Positions subsection)
- Projects -> src/components/Projects.jsx
- Projects note (For currently working on projects - refer to Current Projects.md) -> src/components/Projects.jsx (reference callout)
- Analytics & Research Work -> src/components/Projects.jsx (Analytics subsection)
- Achievements -> src/components/Experience.jsx (Achievements subsection)
- Skills -> src/components/Skills.jsx
- Certifications -> src/components/Skills.jsx (Certifications and Applied Work subsection)
- Interests -> src/components/Interests.jsx
- Languages -> src/components/Skills.jsx (Languages Proficiency subsection)
- Aspirations -> src/components/Aspirations.jsx
- What Sets Me Apart -> src/components/About.jsx

## Data Point Verification by Heading

### Basic Information
- Name, location, email, phone, LinkedIn, GitHub all mapped from src/data/profileData.js into UI cards/links.

### Hero Section
- Tagline and summary line rendered in Hero copy.

### Key Highlights
- All six highlight bullets rendered as highlight cards.

### About Me
- Both paragraphs rendered in About narrative card.

### Education
- Both institutions, periods, degrees, CGPA values, and all coursework lines mapped.

### Experience
- CSR Analyst Intern bullets mapped including NGO context and report/dataset/portal output line.
- Business Development Intern bullets mapped including 150+ colleges social internship detail.
- Volunteer Tour Guide line mapped.

### Positions of Responsibility
- Director, Finance Head, Social Media Head entries mapped with all bullets, including additional recruitment/process/alignment lines.

### Projects
- Docathon, Blossoms, Vehicle Parking, Hospital Management, Ensembl all mapped.
- All project bullets mapped to project details lists.
- Ensembl sub-details mapped (business model, cost structure, financial projections) and additional market/feasibility bullets mapped.

### Analytics & Research Work
- All three lines mapped to analytics cards.

### Achievements
- All five achievement lines mapped, including team/participant counts.

### Skills
- Analytics & Tools lines mapped.
- Development lines mapped.
- Business & Strategy lines mapped.
- Soft Skills lines mapped.

### Certifications
- Certification title and all three sub-points mapped.

### Interests
- All eight interests mapped as cards.

### Languages
- English (Fluent), Tamil (Native), Kannada (Working), Hindi (Working) mapped as language chips.

### Aspirations
- Short Term, Medium Term, Long Term headings and all bullets mapped.

### What Sets Me Apart
- All four differentiator bullets mapped.

## Current Projects.md Coverage

- Workspace Projects summary title and description -> src/components/Projects.jsx
- LifeQuest path, outcome, and all key achievements -> src/components/Projects.jsx
- EquityLab path, outcome, and all key achievements -> src/components/Projects.jsx
- IPL Auction App path, outcome, and all key achievements -> src/components/Projects.jsx

## Result

- Every heading in data/profile.md is mapped.
- All bullet and sub-bullet content from data/profile.md is represented in the UI.
- Referenced current project details from data/Current_Projects.md are integrated.
- Styling/layout/animations preserved by reusing existing section structures and Tailwind/Framer patterns.
