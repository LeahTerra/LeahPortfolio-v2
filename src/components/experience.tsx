import { Briefcase, Calendar } from 'lucide-react';
import LeahDetails from '../data/details';

export function Experience() {

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white mb-2 text-4xl font-bold">Work Experience</h2>
          <div className="w-20 h-1 bg-rose-400 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {LeahDetails.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl p-6 md:p-8 shadow-lg shadow-rose-400/20 hover:shadow-rose-400/50 hover:shadow-xl transition-all border border-rose-400/20 hover:border-rose-400/50 hover:-translate-y-1 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-white mb-2 text-2xl font-bold group-hover:text-rose-400 transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-neutral-300 mb-2">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-neutral-300 mb-4">{exp.description}</p>
              <div className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                    <p className="text-neutral-400 ">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}