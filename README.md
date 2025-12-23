# Cowell Portfolio

A visually stunning, production-ready personal portfolio website for a Mechanical Engineer built with React and Vite.

## 🚀 Features

- **Apple-level Design**: Minimal, premium, and confident aesthetic
- **Smooth Animations**: Subtle scroll reveals, hover effects, and animated backgrounds
- **Fully Responsive**: Desktop-first design that works beautifully on all devices
- **Accessible**: Semantic HTML, proper contrast, and keyboard navigation
- **Modern Stack**: React 18 + Vite for fast development and builds

## 📁 Project Structure

```
src/
├── components/
│   ├── About/          # Professional bio section
│   ├── Button/         # Reusable button component
│   ├── Card/           # Flexible card component
│   ├── Contact/        # Contact form and social links
│   ├── Experience/     # Timeline-based experience
│   ├── Footer/         # Site footer
│   ├── Hero/           # Animated landing section
│   ├── Nav/            # Floating navigation
│   ├── Projects/       # Project gallery with modal
│   ├── Resume/         # Resume download and preview
│   └── Section/        # Reusable section wrapper
├── hooks/              # Custom React hooks
├── styles/             # Global CSS and variables
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🎨 Design System

### Colors

- **Primary**: Deep navy (#1a1a2e)
- **Accent**: Aerospace blue (#0f3460)
- **Highlight**: Sky blue (#4a90d9)

### Typography

- **Font**: Inter (system fallback)
- **Scale**: 0.75rem → 4.5rem

### Spacing

- Consistent 4px base unit
- Generous whitespace for premium feel

## 🛠 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Customization

### Personal Information

Update the placeholder data in each component:

- `Hero.jsx` - Name, title, tagline
- `About.jsx` - Bio, stats, skills
- `Experience.jsx` - Work history
- `Projects.jsx` - Project details
- `Resume.jsx` - Education, certifications
- `Contact.jsx` - Email, location, social links
- `Footer.jsx` - Social links, copyright

### Styling

All CSS variables are defined in `src/styles/index.css`. Modify these to change:

- Color palette
- Typography scale
- Spacing values
- Animation timings

### Resume PDF

Replace `public/resume.pdf` with your actual resume file.

## 🌐 Deployment

The built site (`dist/` folder) can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

_Designed with aerospace elegance for engineers who build the future._
