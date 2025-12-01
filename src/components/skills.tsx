import { Code2, Palette, Layers, Zap } from 'lucide-react';
import LeahDetails from '../data/details';

export function Skills() {

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white mb-2 text-4xl font-bold">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-rose-400 rounded-full"></div>
        </div>

        <div className="grid grid-row-1 md:grid-cols-2 lg:grid-row-4 gap-8">
          {LeahDetails.skills.map((category) => (
            <div key={category.category} className="flex flex-col bg-neutral-800 rounded-xl p-6 hover:shadow-xl transition-all shadow-lg shadow-rose-400/20 hover:shadow-rose-400/50 border border-rose-400/20 hover:border-rose-400/50 hover:-translate-y-1 group">
              <div className="flex flex-row mb-6 gap-4 pr-8">
                <category.icon className="flex justify-self-center text-rose-400" size={32} />
                <h3 className="text-white text-2xl mb-2 group-hover:text-rose-400 transition-colors">{category.category}</h3>
              </div>
              <div className="flex flex-wrap items gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex bg-neutral-800 items-center px-3 py-1 bg-neutral-300 text-neutral-300 rounded-full text-sm border shadow-md shadow-rose-400/20 border-rose-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}