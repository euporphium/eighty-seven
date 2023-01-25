# Eighty Seven

[Solid JS](https://www.solidjs.com/) project, powered by [solid-start](https://start.solidjs.com).


## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `pnpm run build` will generate a Node app that you can run with `pnpm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.


## Developing

The package manager for this application is [pnpm](https://pnpm.io/motivation).

```bash
# install dependencies
pnpm install

# start the server
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```


## Database

[Prisma](https://www.prisma.io/docs) is used to manage the database. To create a new migration:

```bash
npx prisma migrate dev --name <migration-name>
```
