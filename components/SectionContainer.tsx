import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-lg shadow-sm sm:shadow-lg ">
          {children}
        </div>
      </div>
    </section>
  );
}