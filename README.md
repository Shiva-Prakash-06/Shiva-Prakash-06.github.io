# Shiva Prakash - Personal Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS, featuring smooth animations and a premium dark theme with gold accents.

## 🎨 Design Features

- **Dark Theme**: Midnight Navy (#0A0F24) background
- **Gold Accents**: Royal Gold (#E7B10A) for highlights and interactions
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI/UX**: Card-based layouts with hover effects and micro-interactions

## 🚀 Technologies Used

- **React 19.2.0** - UI library
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite** - Build tool and dev server

## 📁 Project Structure

```
src/
  ├── components/
  │   ├── Navbar.jsx       # Navigation with smooth scroll
  │   ├── Hero.jsx         # Landing section
  │   ├── About.jsx        # About me with timeline
  │   ├── Academics.jsx    # Academic portfolio
  │   ├── Projects.jsx     # Project showcase
  │   ├── Experience.jsx   # Experience timeline
  │   ├── Interests.jsx    # Interests grid
  │   ├── Aspirations.jsx  # Future goals
  │   ├── Skills.jsx       # Skills breakdown
  │   ├── Resume.jsx       # Resume viewer
  │   ├── Contact.jsx      # Contact form
  │   └── Footer.jsx       # Footer section
  ├── pages/
  │   └── Home.jsx         # Main page component
  ├── App.jsx              # Root component
  ├── main.jsx             # Entry point
  └── index.css            # Global styles
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or another port if 5173 is in use)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deploying to GitHub Pages

### Step 1: Update `vite.config.js`

Add the base URL for your GitHub Pages site:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
})
```

### Step 2: Install `gh-pages` package

```bash
npm install --save-dev gh-pages
```

### Step 3: Update `package.json`

Add these scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy

```bash
npm run deploy
```

This will build your site and push it to the `gh-pages` branch.

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**

Your site will be live at: `https://your-username.github.io/your-repo-name/`

## 📝 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'midnight-navy': '#0A0F24',
  'royal-gold': '#E7B10A',
  'warm-white': '#F5F5F5',
  'slate-gray': '#1E2433',
  'slate-gray-light': '#2A3042',
}
```

### Content

Update the content in each component file located in `src/components/`:

- Personal information in `Hero.jsx` and `About.jsx`
- Academic details in `Academics.jsx`
- Project information in `Projects.jsx`
- Experience in `Experience.jsx`
- Skills in `Skills.jsx`
- Contact information in `Contact.jsx` and `Footer.jsx`

### Adding Your Resume

1. Place your resume PDF in the `public` folder as `resume.pdf`
2. Update the `Resume.jsx` component to link to your file
3. Uncomment the iframe section in `Resume.jsx` to embed the PDF viewer

### Contact Form Integration

The contact form currently logs to console. To make it functional:

1. **Using EmailJS** (Recommended for static sites):
   ```bash
   npm install @emailjs/browser
   ```
   
2. Create an account at [EmailJS](https://www.emailjs.com/)

3. Update `Contact.jsx` with your EmailJS credentials

## 🎯 Sections Overview

1. **Hero** - Introduction with animated background
2. **About** - Personal background with timeline
3. **Academics** - Dual degree program details
4. **Projects** - Showcase of 3 major projects with tech stacks
5. **Experience** - Timeline of leadership and tech roles
6. **Interests** - Icon-based grid of hobbies
7. **Aspirations** - Short, medium, and long-term goals
8. **Skills** - Technical, business, and soft skills
9. **Resume** - PDF viewer and download
10. **Contact** - Contact form and social links
11. **Footer** - Quick links and credits

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Animated transitions and hover effects
- ✅ Dark theme with gold accents
- ✅ SEO-friendly structure
- ✅ Fast loading with Vite
- ✅ Modern React patterns (hooks, functional components)
- ✅ Clean, maintainable code structure

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Shiva Prakash**

- Email: shivaprakash68127@gmail.com
- Location: Bangalore, Karnataka, India

---

**Built with ❤️ using React + Tailwind CSS**
