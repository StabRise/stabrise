"use client"

import { useEffect } from 'react';
import Head from 'next/head';

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Calendly widget JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // Ensure the Calendly widget is initialized correctly
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/stabrise' });
    }
  };

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>

      <a href="" onClick={handleClick}>
        Schedule time with me
      </a>
    </>
  );
};

export default CalendlyWidget;
