This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Migration Notes (Vite React -> Next.js App Router)

This codebase was migrated from a standalone React (Vite) project. Key decisions:

- Routing: React Router pages converted to App Router segments in `app/`.
- Pages Migrated: Home, About, Products (catalog), Dynamic Product Detail (`products/[productId]`), Careers, Contact.
- Dynamic Routes: Product detail validates IDs and calls `notFound()` for unknown identifiers.
- UI Primitives: Common components (`button`, `badge`, `card`, etc.) live under `components/ui/` using Tailwind utility classes.
- Images: A lightweight `ImageWithFallback` component is used; consider replacing with `next/image` for built-in optimization later.
- Styling: Tailwind utilities (no large monolithic CSS carried over). Global styles in `app/globals.css`.
- Lint Fixes: Apostrophes escaped (e.g. `It&apos;s`) to satisfy `react/no-unescaped-entities` rule.
- Removed Dependency: `react-day-picker` (peer conflict with React 19 and unused in migrated code).

### Adding a New Product

1. Add product metadata to `components/ProductDetailPage.tsx` `productData` map (ensure the key matches URL slug).
2. Add any catalog list entry if needed inside `components/ProductsPage.tsx` array.
3. The route `/products/[productId]` will automatically work if the slug matches an existing key; otherwise it returns a 404 via `notFound()`.

### Recommended Next Improvements

- Replace `ImageWithFallback` usages with `next/image` for performance.
- Centralize product data in a dedicated module (e.g. `lib/products.ts`) and share types.
- Add unit tests for product slug validation.
- Implement form handling (Contact page) via API route (`app/api/contact/route.ts`).

### Development

Run development server:

```
npm run dev
```

Then open http://localhost:3000.

### Type & Lint

```
npm run lint
npm run build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
