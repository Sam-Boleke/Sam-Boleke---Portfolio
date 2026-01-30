# Sam Boleke - Portfolio

A modern, commission-ready portfolio website showcasing full-stack software engineering work, case studies, and professional experience. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Professional Hero Section** - Clear positioning as a Software Engineer with photo, skills, and CTAs
- **Project Case Studies** - Detailed case studies for each project with problem/solution/highlights
- **Experience & References** - Teaching, mentoring, and professional references
- **Responsive Design** - Mobile-first with smooth animations and modern UI/UX
- **SEO Optimized** - Proper metadata and semantic HTML
- **Performance** - Optimized images, fast loading, and production-ready

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.5 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + Custom CSS
- **Deployment:** Vercel (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── SAM 7.jpg          # Profile photo
│   └── ...                 # Other static assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── MobileNav.tsx    # Mobile navigation component
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Dynamic project case study pages
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout with metadata
│   │   └── page.tsx               # Homepage
│   └── lib/
│       └── data.ts                # Profile, projects, experiences, references data
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## ✏️ Customization

### Update Your Information

Edit `src/lib/data.ts` to update:

- **Profile:** Name, location, email, social links, summary
- **Projects:** Add/edit project case studies
- **Experiences:** Teaching, mentoring, work experience
- **References:** Professional references

### Update Profile Photo

1. Place your photo in `public/` folder
2. Update the image path in `src/app/page.tsx`:
```tsx
<Image
  src="/your-photo.jpg"
  alt="Portrait description"
  ...
/>
```

### Styling

- Global styles: `src/app/globals.css`
- Component-specific styles: Inline styles or add to `globals.css`
- Color scheme: Update CSS variables in `:root` selector

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

No environment variables required for basic setup. Add any API keys or secrets as needed.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Philosophy

This portfolio is designed to be:

- **Commission-Ready:** Clear CTAs, professional presentation, verifiable references
- **High Standard:** Premium UI/UX, smooth animations, responsive design
- **Performance-Focused:** Optimized images, fast loading, SEO-friendly
- **Accessible:** Semantic HTML, proper ARIA labels, keyboard navigation

## 📄 License

This project is private and proprietary.

## 👤 Author

**Relebohile Samuel Boleke (Sam Boleke)**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Email: releboleke@gmail.com

---

Built with ❤️ using Next.js and deployed on Vercel.
