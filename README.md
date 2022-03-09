This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


Install dependencies

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

For a complete set up you will need to create an .env.local in the root directory and fill with env variables.

```
NEXT_PUBLIC_COGNITO_USER_POOL_ID=""
NEXT_PUBLIC_COGNITO_CLIENT_ID=""
NEXT_PUBLIC_ENV="local"
```

To skip sending real user data to cognito, add the following env variable

```
NEXT_PUBLIC_MOCK_COGNITO="true"
```

## Components

Shared components are in the `components` folder. To see examples of available components or easily develop components outside of the app run `npm run storybook` [Storybook](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/).

## Project Conventions

Since we have two sections of this app, for Artist's and User's (the marketplace). Artist app specific code is contained in an Artists folder, for example:  `Components/Artists` or the file's prefixed with "Artist" for example: `ArtistCollectionContext.js`.


## Deploy on Vercel

We are currently using Heroku for deployments due to pricing issues with vercel and github org accounts.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Continuous Integration

All pull requests to the `main` branch will be automatically checked for build errors using `.github/workflows/pull-request.yaml`.

## Styles and Component Libraries

This project used [Tailwind](https://tailwindcss.com/) to add styles using utility class names for example: `bg-primary, h-full, font-lg`.

You can find the project specific configuration for Tailwind in tailwind.config.js file in this repository. In addition to Tailwind, this project uses [DaisyUI](https://daisyui.com/) components wherever they closely match the designs. The custom configuration for DaisyUI is also found in tailwind.config.js.

Styles are generated with [PostCSS](https://postcss.org/).

Consider downloading Tailwind CSS IntelliSense if using VS Code. 

Overrides for Daisy UI and aother component libraries can be found in `globals.css`.

## Code Formatting & Linting

[Prettier](https://prettier.io/)
[Eslint](https://eslint.org/)

## Testing

Unit tests are written using React [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest] (https://jestjs.io/). 

To run all tests

`npm run test`

To run a specific test file, run:

`npm run tests [fileName.test.js]`

All tests can be found under the `tests` folder.

## Managing Content

Content for some pages can be found under within '.json' files  in the `content/` folder to make content easy to update without having to know React. In there, there is a `marketplace` (NiftyTunes) and `artists` (BRIDG3 For Artists) folder for each section of the app. Each .json file corresponds to a single page within the app, edit the values of each key in the json object to change the text that appears on each page.

You can find references to these content files throughout the app by searching for `content.[some key]` for example `content.title` in the artist's home page (`artists/index.js`) corresponds to the `"title:"` in key in the `home.json` file.

If needed, you can double check the syntax of the json object after making changes by copy and pasting the contents of the .json file into a linter for example https://jsonlint.com/ and checking that it is valid.
