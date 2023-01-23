import { Title } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';
import cn from 'classnames';

export default function NotFound() {
  return (
    <main class="p-4 text-center">
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1
        class={cn(
          'mx-auto my-16',
          'text-blue-900 dark:text-blue-500',
          'uppercase font-serif font-thin text-6xl'
        )}
      >
        Page Not Found
      </h1>
      <p>
        Visit{' '}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
