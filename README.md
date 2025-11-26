# Aziz Rahman - Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer and AI Engineer. Built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, sophisticated dark theme with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 16 for optimal performance
- **Type-Safe**: Written in TypeScript for better developer experience
- **Component-Based**: Modular component architecture using React
- **Accessible**: Built with accessibility best practices in mind

## 🛠️ Tech Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS 4** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **shadcn/ui** - Re-usable component library

### Additional Tools
- **Vercel Analytics** - Website analytics
- **next-themes** - Theme management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Portfolio section components
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── education.tsx
│   │   └── contact.tsx
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   ├── navigation.tsx     # Navigation component
│   └── theme-provider.tsx # Theme provider
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── [config files]         # Configuration files
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ (or use pnpm)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Updating Personal Information

1. **Metadata**: Edit `app/layout.tsx` to update SEO metadata
2. **Hero Section**: Modify `components/sections/hero.tsx`
3. **About Section**: Update `components/sections/about.tsx`
4. **Experience**: Edit `components/sections/experience.tsx`
5. **Projects**: Update `components/sections/projects.tsx`
6. **Contact**: Modify `components/sections/contact.tsx`

### Styling

Global styles are defined in `app/globals.css`. The project uses TailwindCSS with custom color variables defined in the CSS file.

### Theme

The portfolio uses a dark theme by default. Theme configuration can be found in `app/globals.css` under the `:root` and `.dark` selectors.

## 📦 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live!

Alternatively, you can build and deploy manually:

```bash
pnpm build
pnpm start
```

## 📄 License

This project is private and personal.

## 📧 Contact

- **Email**: azizrah.swe@gmail.com
- **LinkedIn**: [linkedin.com/in/AzizRahmanSWE](https://linkedin.com/in/AzizRahmanSWE)
- **GitHub**: [github.com/AzizRahmanSWE](https://github.com/AzizRahmanSWE)

---

Built with ❤️ by Aziz Rahman

