import { GraduationCap } from 'lucide-react';
import LeahDetails from '../data/details';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-800 dark:bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col flex-wrap">
          <div className="lg:order-2 flex">
            <div>
              <h2 className="text-white dark:text-neutral-900 mb-2 text-4xl font-bold">Education</h2>
              <div className="w-20 h-1 bg-rose-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex lg:order-2 self-center my-12">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap size={32} className="text-rose-400 flex-shrink-0" />
              <div className='flex flex-col justify-evenly gap-4'>
                <div>
                  <h3 className="text-white dark:text-neutral-900 text-2xl mb-2">Bachelor of Science</h3>
                  <p className="text-neutral-300 dark:text-neutral-600 text-xl mb-1">University of Alberta</p>
                  <p className="text-neutral-400 dark:text-neutral-500 mb-4">2017 - 2023</p>
                </div>
                <p className="text-neutral-300 dark:text-neutral-600">
                  <span className="text-rose-400">Major:</span> Computer Science
                </p>
                <p className="text-neutral-300 dark:text-neutral-600">
                  <span className="text-rose-400">Minor:</span> Psychology
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
