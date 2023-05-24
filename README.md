This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a next.js project.

```
npx create-next-app@latest
```

I have chosen to use the /app directory in my project. I also opted to use tailwind css in my project. Next.js ask if you want to use tailwind css when you run the above command.

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## How to set up MongoDB / Prisma
Create a 'lib' folder in the root directory. Inside the lib folder create a folder called 'prisma'. Inside the prisma folder create a 'index.js' file. 
In the index.js file we will create some functions that can be exported and used throughout our project.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
