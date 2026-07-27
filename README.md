# Personal Website & Portfolio

My personal portfolio website built with Next.js, React, and Tailwind CSS.

## Status

This project is configured to run tests, formatting, and builds automatically.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack for dev, React Compiler enabled)
- **UI**: React 19, Tailwind CSS 4, SCSS modules
- **Language**: TypeScript 6 (strict)
- **Animation**: `motion`, `gsap`, `animate.css`
- **Testing**: Jest 30, `@testing-library/react`, Playwright
- **Monitoring**: Sentry, Vercel Speed Insights
- **Package manager**: npm / pnpm

## Quick start

```bash
npm install
npm run dev            # http://localhost:3000
npm run test           # runs unit tests
npm run build          # production build
```

## Project layout

```text
src/
├── app/          Next.js App Router (server-first)
├── domains/      Feature verticals (journey, projects, ...)
├── layout/       Cross-page layout pieces (header, cookies modal, progress bar)
├── shared/       Cross-feature utilities (components, hooks, helpers, services)
└── data/         Static content (about-me, projects, recommendations)
```

## Security

Security policy lives in [`SECURITY.md`](./SECURITY.md). Report vulnerabilities privately at <23201065@uap-bd.edu>.

## License

[MIT](./LICENSE) for the source code.
