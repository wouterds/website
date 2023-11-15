import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Evix' },
    {
      name: 'description',
      content:
        'We build websites, web apps & mobile apps of the highest standards.',
    },
  ];
};

export default function Index() {
  return (
    <>
      <h1>EVIX</h1>
      <p>
        We build websites, web apps &amp; mobile apps of the highest standards.
      </p>
    </>
  );
}
