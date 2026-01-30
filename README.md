# Sam Boleke - Portfolio

A modern, professional portfolio website showcasing full-stack software engineering work, case studies, and professional experience. Built with Next.js 16, TypeScript, and Tailwind CSS.

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

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Philosophy

This portfolio is designed to be:

- **Professional:** Clear CTAs, polished presentation, verifiable references
- **High Standard:** Premium UI/UX, smooth animations, responsive design
- **Performance-Focused:** Optimized images, fast loading, SEO-friendly
- **Accessible:** Semantic HTML, proper ARIA labels, keyboard navigation

## 📄 License

This project is private and proprietary.

## 👤 Author

**Relebohile Samuel Boleke (Sam Boleke)**
- Email: releboleke@gmail.com

---

Built with ❤️ using Next.js.
