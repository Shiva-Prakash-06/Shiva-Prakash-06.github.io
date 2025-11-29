# Quick Customization Guide

This guide will help you quickly customize your portfolio with your own information.

## 🎯 Priority Customizations

### 1. Personal Information (Hero Section)

**File:** `src/components/Hero.jsx`

Update these lines:
```javascript
<h1 className="...">
  Shiva Prakash  // ← Change to your name
</h1>

<p className="...">
  Business Analyst in the making | ...  // ← Change to your tagline
</p>

<p className="...">
  I combine analytics, finance, and...  // ← Change to your intro
</p>
```

### 2. Contact Information

**Files to update:**
- `src/components/Contact.jsx` (line ~40)
- `src/components/Footer.jsx` (line ~70)

```javascript
// Update email
email: 'your-email@example.com'

// Update social links
{ href: 'https://github.com/your-username', ... }
{ href: 'https://linkedin.com/in/your-profile', ... }
```

### 3. About Me Section

**File:** `src/components/About.jsx`

Update the personal description (lines 35-55):
```javascript
<p className="...">
  I'm a student pursuing...  // ← Your education
</p>
```

### 4. Academic Details

**File:** `src/components/Academics.jsx`

Update university information:
```javascript
// Christ University section (lines 35-60)
<h3>Your University Name</h3>
<p>Your Degree Name</p>

// Courses array
const christCourses = [
  { name: 'Your Course 1', progress: 70 },
  // ... add your courses
];
```

### 5. Projects

**File:** `src/components/Projects.jsx`

Replace the projects array (starting around line 12):
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Your project description',
    tech: ['Tech1', 'Tech2'],
    features: ['Feature 1', 'Feature 2'],
    // ... update with your projects
  }
];
```

### 6. Experience

**File:** `src/components/Experience.jsx`

Update the experiences array (line 12):
```javascript
const experiences = [
  {
    title: 'Your Role',
    organization: 'Your Organization',
    period: 'Start - End',
    achievements: ['Achievement 1', '...']
  }
];
```

### 7. Skills

**File:** `src/components/Skills.jsx`

Update skill categories (line 16):
```javascript
const skillCategories = [
  {
    title: 'Technical Skills',
    skills: [
      { name: 'Your Skill', level: 85 },
      // Add your skills with proficiency levels (0-100)
    ]
  }
];
```

### 8. Resume PDF

**Steps:**
1. Place your resume PDF in `public/` folder as `resume.pdf`
2. Update `src/components/Resume.jsx` (line 65):
```javascript
<iframe
  src="/resume.pdf"  // Points to public/resume.pdf
  className="w-full h-full"
  title="Resume PDF"
/>
```

## 🎨 Design Customizations

### Change Color Scheme

**File:** `tailwind.config.js`

```javascript
colors: {
  'midnight-navy': '#0A0F24',    // Main background
  'royal-gold': '#E7B10A',        // Accent color
  'warm-white': '#F5F5F5',        // Text color
  'slate-gray': '#1E2433',        // Card background
  'slate-gray-light': '#2A3042',  // Lighter cards
}
```

### Change Fonts

**File:** `tailwind.config.js`

```javascript
fontFamily: {
  'poppins': ['Your Font', 'sans-serif'],
  'inter': ['Your Font', 'sans-serif'],
  // ...
}
```

**Also update:** `src/index.css` - Google Fonts import URL

### Add Your Profile Picture

1. Add image to `src/assets/` folder (e.g., `profile.jpg`)
2. Update Hero or About section:
```javascript
import profileImg from '../assets/profile.jpg';

<img src={profileImg} alt="Your Name" className="..." />
```

## 📝 Content Tips

### Writing Good Descriptions

**Projects:**
- Start with action verbs (Built, Developed, Created)
- Mention the problem solved
- Highlight key technologies
- Include quantifiable results

**Experience:**
- Use bullet points
- Focus on achievements, not just duties
- Include metrics where possible
- Highlight leadership and impact

**Skills:**
- Be honest about proficiency levels
- Group related skills together
- Focus on relevant skills for your goals

### SEO Optimization

**File:** `index.html`

Update meta tags:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords, here" />
```

## 🔄 Quick Update Workflow

1. **Edit the content** in respective component files
2. **Test locally**: `npm run dev`
3. **Build**: `npm run build`
4. **Preview**: `npm run preview`
5. **Commit**: `git add . && git commit -m "Update content"`
6. **Deploy**: `npm run deploy`

## 📱 Test Responsiveness

After making changes, test on:
- Desktop (1920px, 1440px, 1024px)
- Tablet (768px, 1024px)
- Mobile (375px, 414px, 390px)

Use browser DevTools (F12) → Toggle device toolbar

## ⚠️ Common Mistakes to Avoid

1. **Broken Links**: Test all external links (GitHub, LinkedIn, etc.)
2. **Missing Images**: Ensure all image paths are correct
3. **Long Text**: Keep descriptions concise and scannable
4. **Inconsistent Data**: Make sure dates and details are accurate
5. **Typos**: Proofread all content before deploying

## 🚀 Performance Tips

1. **Optimize Images**: 
   - Use WebP format when possible
   - Compress images (tools: TinyPNG, Squoosh)
   - Keep images under 200KB

2. **Minimize Dependencies**: Only import what you need

3. **Lazy Load**: Use React.lazy() for heavy components

## 📚 Component Files Quick Reference

```
Hero.jsx          → Name, tagline, intro, CTA buttons
About.jsx         → Bio, timeline, personal info
Academics.jsx     → Universities, courses, achievements
Projects.jsx      → Project cards with tech stack
Experience.jsx    → Work/leadership timeline
Interests.jsx     → Hobbies and interests grid
Aspirations.jsx   → Short/medium/long term goals
Skills.jsx        → Technical, business, soft skills
Resume.jsx        → PDF viewer and download
Contact.jsx       → Contact form and social links
Footer.jsx        → Footer links and credits
Navbar.jsx        → Navigation (usually no changes needed)
```

## 🆘 Need Help?

- Check the main `README.md` for full documentation
- See `DEPLOYMENT.md` for deployment issues
- Use browser console (F12) to debug errors
- Check component imports if you see blank pages

---

**Pro Tip:** Make small changes and test frequently. It's easier to fix issues early than to debug many changes at once! 🎯
