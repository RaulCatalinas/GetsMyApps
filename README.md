# GetsMyApps

Website to make it easy for users to download my apps

The apps are displayed as a card and each app has 2 buttons, one to view the source code on GitHub and one to download the app.

In each app a logo of the OS for which the app is available is shown.

## Features

### Technologies used

- Astro
- SolidJS for the user-interactable part (e.g. the download buttons of the apps)

### Additional features

- Backend created with Supabase
- The translations are obtained dynamically from some API to translate texts (the original description is in English and is obtained from Supabase).
- The download URL of the app desired by the user is obtained dynamically from GitHub thanks to the "octokit" library.

## Run Locally

Clone the project

```bash
  git clone https://github.com/RaulCatalinas/GetsMyApps.git
  #or
  git clone git@github.com:RaulCatalinas/GetsMyApps.git
  #or
  gh repo clone RaulCatalinas/GetsMyApps
```

Go to the project directory

```bash
  cd GetsMyApps
```

Install dependencies

```bash
  npm install
  #or
  yarn install
  #or
  pnpm install
  #or
  bun install
```

Start the server

```bash
  npm run dev
  #or
  yarn run dev
  #or
  pnpm run dev
  #or
  bun run dev
```

## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

## Feedback

If you have any feedback, please reach out to us at <raulcatalinas@gmail.com>

## License

The license information is contained in the file [LICENSE.md](LICENSE.md).

## Authors

- [Raul Catalinas Esteban](https://github.com/RaulCatalinas)
