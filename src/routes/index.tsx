import { Title } from 'solid-start';
import cn from 'classnames';

export default function Home() {
  return (
    <main class="p-4 text-center">
      <Title>Welcome to 87!</Title>
      <h1
        class={cn(
          'mx-auto my-16',
          'text-blue-900 dark:text-blue-500',
          'uppercase font-serif font-thin text-6xl'
        )}
      >
        Hello world!
      </h1>
      <p class="mx-auto my-8">
        Visit{' '}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
