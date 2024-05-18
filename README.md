# React Assessment

Ever felt hungry but had no clue what to eat? Well thanks to _CiaoChow_ this will never happen again.

## Tech Stack

We'd like you to please build the CiaoChow web experience (mobile view only) using:

-   [Next.js 14](https://nextjs.org/)
-	[Next.js App Router](https://nextjs.org/docs/app)
-	[TypeScript](https://www.typescriptlang.org/)
-	[Bun](https://bun.sh/)
-	[Tailwind CSS](https://tailwindcss.com/)
-   [Strapi](https://strapi.io/)

## Designs

The design team has prepped [this Figma file](https://www.figma.com/file/bscWZpaWT1Leu0BGBWK0NV/CiaoChow?node-id=19%3A518) for you to follow. 
You'll be able to grab all of the assets and styles there. We aren't concerend about desktop at this stage so you can restrict the `<body>` to a max-width of 414px.

## User Journey

-   Review the onboarding splash screen
-   Register an account
-   Log in with the newly registered credentials
-   Be presented with something to eat
-   Don't like the option? Just click "Nah" to be given another choice (randomised)

## Strapi Integration

The API is all set up for you already at [https://ciaochow.plusnarrative.biz/](https://ciaochow.plusnarrative.biz/) and we've included the [Postman Collection](ciaochow-api-collection.json) in this repo which will show you the endpoints and payloads that you need to use.

We should be able to register a new user and then log in with that new users credentials. Bonus points for considering the unhappy paths.

You'll need to grab the JWT token returned after login so you can pass it as a bearer token when requesting "chow" ideas.

## Deployment

When you're done, please share a link to a public repo for us to download the source code. 
Make sure your readme.md is clear on how to get up and running. You can also add some handy scripts to `package.json` to make the process even simpler.

## Bonus Points

It's not required, but add some [tests](https://nextjs.org/docs/app/building-your-application/testing) and [containerise](https://nextjs.org/docs/app/building-your-application/deploying#docker-image) the application if you really want to impress us.

Good luck and please reach out if you have any questions!

## Mock Data

I have added a folder with mock data containing data about the food
