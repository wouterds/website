import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Contact' },
    {
      name: 'description',
      content:
        "Questions? Want to discuss a project? Don't hesitate to contact us!",
    },
  ];
};

const Contact = () => {
  return (
    <p>
      <strong>Wouter De Schuyter</strong>
      <br />
      email: <a href="mailto:wouter@evix.io">wouter@evix.io</a>
      <br />
      tel: <a href="tel:+32479228210">+32479228210</a>
    </p>
  );
};

export default Contact;
