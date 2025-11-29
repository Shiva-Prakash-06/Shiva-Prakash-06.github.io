# 🚀 Portfolio Website - Complete Setup Guide

## ✨ What's Been Done

Your portfolio has been transformed into a **multi-page application** with all documents integrated and contact information updated!

### 🎯 Key Changes

#### 1️⃣ **Multi-Page Structure** (Instead of Continuous Scroll)
- ✅ Separate pages for each section
- ✅ React Router navigation
- ✅ Active page highlighting in navbar
- ✅ Clean URLs (`/projects`, `/contact`, etc.)

#### 2️⃣ **All Files Integrated**
- ✅ **Profile Picture** - Shows in Hero section with golden border
- ✅ **Project Images** - All 4 projects have screenshots with hover effects
- ✅ **Resume PDF** - Fully viewable with download button

#### 3️⃣ **Contact Information Updated**
- ✅ Email: p.shivaraman@gmail.com
- ✅ LinkedIn: linkedin.com/in/shiva-prakash-9b8b10315
- ✅ GitHub: github.com/Shiva-Prakash-06

#### 4️⃣ **Scroll-to-Top Button**
- ✅ Floating button (bottom-right)
- ✅ Appears when scrolling down
- ✅ Present on all pages

## 📂 Pages Available

| Route | Content |
|-------|---------|
| `/` | Home (Hero + About) |
| `/about` | About Me |
| `/academics` | Education Details |
| `/projects` | Featured Projects (4 projects with images) |
| `/experience` | Leadership & Experience |
| `/interests` | Hobbies & Interests |
| `/aspirations` | Goals & Aspirations |
| `/skills` | Technical & Soft Skills |
| `/resume` | Resume Viewer & Download |
| `/contact` | Contact Form & Info |

## 🔧 How to Run

### Development Mode
```bash
npm run dev
```
Then open: **http://localhost:5173**

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deploy to GitHub Pages

### Step 1: Update Repository Name in vite.config.js
If deploying to `username.github.io/repository-name/`, change:
```javascript
base: '/' 
```
to:
```javascript
base: '/repository-name/'
```

### Step 2: Create GitHub Repository
1. Go to GitHub.com
2. Create new repository (e.g., `my-portfolio`)
3. Don't initialize with README

### Step 3: Push Your Code
```bash
git init
git add .
git commit -m "Initial commit - Multi-page portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Configure GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Set source to `gh-pages` branch
4. Save and wait 2-3 minutes

Your site will be live at: `https://YOUR_USERNAME.github.io/my-portfolio/`

## 📱 Features

### Navigation
- **Desktop:** Full navbar with page links
- **Mobile:** Hamburger menu
- **Active State:** Current page highlighted in gold

### Scroll Behavior
- Smooth scrolling on all pages
- Floating back-to-top button (appears after 300px scroll)

### Project Showcase
- Project images with hover zoom
- Modal with detailed information
- Tech stack badges with icons
- Course/context labels

### Resume Section
- Embedded PDF viewer (800px height)
- Download button (saves as `Resume_ShivaPrakash.pdf`)
- View in new tab option
- File metadata display

### Contact Methods
- Email card (links to mail client)
- LinkedIn card (opens profile)
- GitHub card (opens repositories)
- Contact form (console logs for now, integrate EmailJS for real sending)

## 🎨 Design Features

- **Dark Theme:** Midnight Navy (#0A0F24)
- **Accent Color:** Royal Gold (#E7B10A)
- **Animations:** Framer Motion throughout
- **Responsive:** Works on mobile, tablet, desktop
- **Icons:** React Icons library

## 📦 Tech Stack

- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool
- **React Router DOM** - Multi-page routing
- **Tailwind CSS 3.4.1** - Styling
- **Framer Motion 12.23.24** - Animations
- **React Icons 5.5.0** - Icon library

## 🔍 Files in `/public/` Folder

```
public/
├── profile.jpg      ✅ Used in Hero
├── project-1.png    ✅ Vehicle Parking App
├── project-2.png    ✅ Docathon Sports
├── project-3.png    ✅ Hospital Management
├── project-4.png    ✅ Blossoms Fest 2025
├── resume.pdf       ✅ Resume viewer
└── vite.svg
```

## 🐛 Troubleshooting

### Issue: Images not loading
**Solution:** Ensure files are in `/public/` folder and referenced as `/filename.ext`

### Issue: Routing not working on GitHub Pages
**Solution:** 
1. Check `base` path in `vite.config.js`
2. Ensure using `HashRouter` instead of `BrowserRouter` for GitHub Pages (if needed)

### Issue: PDF not displaying
**Solution:** 
1. Verify `resume.pdf` is in `/public/` folder
2. Check browser console for errors
3. Try opening `/resume.pdf` directly in browser

### Issue: 404 on page refresh (GitHub Pages)
**Solution:** This is normal for GitHub Pages with client-side routing. Options:
1. Use HashRouter (URLs will have `#`)
2. Add 404.html redirect
3. Use Vercel/Netlify instead (handles routing automatically)

## 📊 Project Statistics

- **Total Pages:** 10
- **Components:** 13
- **Routes:** 10
- **Projects Showcased:** 4
- **Tech Skills Listed:** 20+
- **Code Lines:** ~3,000+

## 🎓 Projects Featured

1. **Vehicle Parking App** - Flask, SQLite, Bootstrap
2. **Docathon Sports Event** - Flask, SQLite, Tournament Logic
3. **Hospital Management V2** - Flask, VueJS, Redis, Celery
4. **Blossoms Fest 2025** - Astro v5, Turso, 2,512 students, 31 events

## 🌟 Next Steps (Optional)

1. **SEO Optimization**
   - Add meta tags for social sharing
   - Create sitemap.xml
   - Add Google Analytics

2. **Performance**
   - Optimize images (use WebP format)
   - Add lazy loading
   - Implement code splitting

3. **Features**
   - Integrate EmailJS for contact form
   - Add blog section
   - Add testimonials/recommendations

4. **Content**
   - Keep projects updated
   - Add new achievements
   - Update resume regularly

## 📞 Support

If you need to make changes:
1. **Update Content:** Edit component files in `src/components/`
2. **Add Pages:** Create new page in `src/pages/` and add route in `App.jsx`
3. **Change Colors:** Update `tailwind.config.js`
4. **Add Images:** Place in `/public/` folder

## ✅ Checklist

- [x] Multi-page routing setup
- [x] Profile picture integrated
- [x] Project images integrated
- [x] Resume PDF integrated
- [x] Contact info updated (email, LinkedIn, GitHub)
- [x] Scroll-to-top button added
- [x] Navbar active state
- [x] Mobile responsive
- [x] No compilation errors
- [x] Development server working
- [ ] Deployed to GitHub Pages (your next step!)

## 🎉 Your Portfolio is Ready!

The website is **production-ready** and can be deployed immediately. All files are integrated, contact information is updated, and the multi-page structure is fully functional.

**Current Status:** ✅ Development server running on http://localhost:5173

---

**Need Help?** Check `RECENT_UPDATES.md` for detailed change log.

**Last Updated:** November 29, 2025  
**Developer:** GitHub Copilot (Claude Sonnet 4.5)
