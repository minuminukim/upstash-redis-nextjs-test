import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export const revalidate = 0; // disable cache

export default async function Home() {
  const member = await redis.srandmember<string>('nextjs13');

  return (
    <div>
      <main>
        <h1>Welcome {member}</h1>
      </main>
      <p>You have been randomly chosen by the redis algorithm.</p>
    </div>
  );
}
