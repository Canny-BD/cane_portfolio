
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, light }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-20 mx-auto mt-6 rounded-full ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />
  </div>
);

export default SectionHeading;
