import { Title, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import cn from 'classnames';
import { getMostRecentFact } from '~/db/facts';

export function routeData() {
  return createServerData$(getMostRecentFact);
}

export default function Home() {
  const factOfTheDay = useRouteData<typeof routeData>();

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
      <p class="mx-auto my-8">{factOfTheDay()?.fact.text}</p>
    </main>
  );
}
