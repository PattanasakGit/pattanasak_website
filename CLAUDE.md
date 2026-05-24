# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start development server
yarn build      # Production build
yarn start      # Start production server
yarn lint       # Run ESLint
```

There are no tests in this project.

## Architecture

This is a **Next.js 14 single-page portfolio website** using the App Router. The entire site renders as one scrollable page (`src/app/page.tsx`) with sections navigated via `react-scroll` named anchors: `hello`, `about`, `experiences`, `projects`, `skills`, `contact`.

**State management (Zustand)** lives in `src/store/`:
- `DarkModeState.ts` — global dark/light mode toggle (defaults to dark)
- `ShowImageModalStage.ts` — controls the full-screen project image preview modal
- `ProjectData.ts` — static project data exported as named constants
- `Data.ts` — static personal links and experience entries

**Content data** is all hardcoded in `src/store/Data.ts` (links, experiences) and `src/store/ProjectData.ts` (projects with images/tools/descriptions). To add or edit a project, update `ProjectData.ts` and add images to `public/project_img/<ProjectName>/`.

**Shared UI utilities** in `src/utils/`:
- `ColorEffect.tsx` — exports `TopicEffect` (animated gradient heading), `CustomText` (dark-mode-aware paragraph), and `BGEffect` (dark-mode-aware container with shadow)
- `RandomColor.ts` — generates pastel hex colors adapted for dark/light mode, used for tool badge backgrounds

**Responsive Navbar** renders `NavbarDesktop` on `md+` and `NavbarPhone` on mobile via Tailwind breakpoints. Both are under `src/components/Navbar/`.

**`PreviewImageModal`** (`src/components/PreviewImageModal/index.tsx`) is a full-screen image carousel overlay driven by `useShowImageModalState`. It's mounted once at the root level in `page.tsx` and shown/hidden via Zustand state.

**Styling**: Tailwind CSS + `globals.css`. The `.text-gradient` class (animated gradient via `gradientShift` keyframe) is used for all section headings via `TopicEffect`. Background images (`/bg-black.webp`, `/bg-white.webp`) switch based on dark mode with a fixed `backdrop-blur-[80px]` overlay.

**`src/models/`** holds TypeScript interfaces: `IProjectData.ts` defines the shape used by `ProjectData.ts`; `IDarkModeState.ts` and `ITextEffict.ts` define prop/state types used across components.

All console output is suppressed in `page.tsx` (`console.log = () => {}`).
