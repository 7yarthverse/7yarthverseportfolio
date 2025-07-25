# Satyarth Mishra - Cloud & DevOps Portfolio

A modern, responsive portfolio website for Satyarth Mishra, showcasing expertise in Cloud & DevOps technologies.

## 🚀 Features

- **Modern Design**: Dark theme with blue and red accents
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Animated Hero Section**: Dynamic typing effect for roles
- **Interactive Components**: Hover effects and smooth transitions
- **Skills Showcase**: Categorized technical skills with icons
- **Project Gallery**: Featured DevOps and Cloud projects
- **Contact Form**: Functional email form
- **Fast Loading**: Built with Vite for optimal performance

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify, Vercel, or GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Hero section with animated typing
│   ├── About.tsx        # About me section
│   ├── Skills.tsx       # Technical skills grid
│   ├── Projects.tsx     # Featured projects
│   ├── Resume.tsx       # Resume download section
│   ├── Contact.tsx      # Contact form and info
│   └── Footer.tsx       # Footer component
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🏃‍♂️ Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/satyarth-mishra/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Deployment

### Deploy to Render
1. **Create a Render account** at [render.com](https://render.com)
2. **Connect your GitHub repository**:
   - Push this code to a GitHub repository
   - In Render dashboard, click "New +" → "Static Site"
   - Connect your GitHub account and select the repository
3. **Configure the deployment**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Auto-Deploy: Yes (recommended)
4. **Alternative: Use render.yaml**:
   - The included `render.yaml` file will automatically configure the deployment
   - Just connect your repo and Render will use these settings

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run: `npm run deploy`

## 📝 Customization

### Personal Information
Update the following in the respective components:
- Name and title in `Header.tsx`
- About me content in `About.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Contact information in `Contact.tsx`

### Styling
- Colors can be modified in the Tailwind classes
- The gradient theme uses blue and red as accent colors
- All animations are CSS-based for optimal performance

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Add navigation if needed

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Features

- **Dark Theme**: Professional appearance with excellent contrast
- **Gradient Accents**: Blue to red gradients for highlights
- **Smooth Animations**: CSS transitions and transforms
- **Interactive Elements**: Hover states and click effects
- **Typography**: Clean, readable fonts with proper hierarchy

## 📧 Contact Form

The contact form uses `mailto:` links to open the user's default email client. For production use, consider integrating with:
- EmailJS
- Netlify Forms
- Formspree
- Custom backend API

## 🔗 Social Links

Update the social media links in:
- `Header.tsx` (hero section)
- `Contact.tsx` (contact section)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

---

**Built with ❤️ by Satyarth Mishra**