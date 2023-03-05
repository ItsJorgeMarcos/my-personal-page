import { FC } from 'react';

const Footer: FC = () => {
  return (
    <p className="py-10 text-center">
      || 🧑🏻‍💻 Programado por{' '}
      <a
        href="https://www.linkedin.com/in/jorge-marcos-carrero/"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        <span className="text-primary hover:underline">JorgeMC.</span>
      </a>{' '}
      ||
    </p>
  );
};

export default Footer;
