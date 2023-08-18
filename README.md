This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo

Go [check](https://www.loom.com/share/0b47b0798491496d9691c429f775b86b?sid=5c737853-e777-437e-af98-2a88e63769c4) it out how to use the app
## Getting Started
  
  1. Add a `env.local` file by adding env varibles as we have on  `env.example` file. Create an account on [Neo4J page](https://neo4j.com/); it'd be great if you follow [this tuto](https://www.smashingmagazine.com/2023/03/full-stack-graphql-nextjs-neo4j-auradb-vercel/#neo4j-auradb-overview-graph-data-in-the-cloud) how to create a database instance and download `.env` credentials file
  2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tech stack
- Next js 13.4
- Tailwind CSS 3.3
- Neo4j Graph database
- Apollo client Graphql 
- Nextjs Api for backend
- Custom authentication

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
