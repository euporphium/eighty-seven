// @refresh reload
import { Suspense } from 'solid-js';
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import { setColorScheme } from '~/lib/color-scheme';
import './root.css';

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>87</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/color-scheme.js" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Josefin+Slab:100,400|Patrick+Hand:400"
        />
        <link
          href="/favicon-light.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon-dark.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/about">About</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
        <button onClick={() => setColorScheme('light')}>Light</button>
        <button onClick={() => setColorScheme('dark')}>Dark</button>
        <button onClick={() => setColorScheme('system')}>Reset</button>
      </Body>
    </Html>
  );
}
