import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import PrettyButton from './ui/prettyButton';
import LeahDetails from '../data/details';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const projects = LeahDetails.projects;

  const nextProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const getPrevIndex = () => (currentIndex - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentIndex + 1) % projects.length;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white mb-2 text-4xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-rose-400 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="flex items-center transition-all duration-500 ease-in-out justify-center gap-8 ">
            {/* Previous Project */}
            <div className="hidden lg:block w-1/4 opacity-30 border border-rose-400/50 rounded-xl shadow-lg shadow-rose-400/20 scale-100 transition-all duration-500 ease-in-out">
              <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 shadow-lg pointer-events-none">
                <h3 className="text-white b-3 text-xl">{projects[getPrevIndex()].name}</h3>
                <p className="text-neutral-300 mb-4 line-clamp-2">{projects[getPrevIndex()].description}</p>
              </div>
            </div>

            {/* Current Project */}
            <div className="w-full lg:w-1/2 transition-all duration-500 ease-in-out">
              <div className="bg-neutral-800 rounded-xl p-8 md:p-12 border border-rose-400/20 shadow-rose-400/50 shadow-lg hover:shadow-xl transition-all group">
                <h3 className="text-white mb-4 text-3xl group-hover:text-rose-400 transition-all duration-500 ease-in-out">{projects[currentIndex].name}</h3>
                <div className=" h-1 bg-rose-400 rounded-full mb-8"></div>
                <p className="text-neutral-300 mb-6 text-lg">{projects[currentIndex].description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentIndex].technologies.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-800 border shadow-md shadow-rose-400/20 border-rose-400/20 text-neutral-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {projects[currentIndex].github != '' ?
                  <div className="flex gap-4">
                    <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-neutral-300 hover:text-rose-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Github
                    </a>
                  </div>
                  : null
                  }
                
              </div>
            </div>

            {/* Next Project */}
            <div className="hidden lg:block w-1/4 opacity-30 border border-rose-400/50 rounded-xl shadow-lg shadow-rose-400/20 scale-90 transition-all duration-500 ease-in-out">
              <div className="bg-neutral-800  rounded-xl p-6 border border-neutral-700 shadow-lg pointer-events-none">
                <h3 className="text-white mb-3 text-xl">{projects[getNextIndex()].name}</h3>
                <p className="text-neutral-300 mb-4 line-clamp-2">{projects[getNextIndex()].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <PrettyButton
              onClick={prevProject}
              disabled={true}
              aria-label="Previous project"
              icon={<ChevronLeft size={24}/>}
            />
            <PrettyButton
              onClick={nextProject}
              disabled={true}
              aria-label="Next project"
              icon={<ChevronRight size={24}/>}
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                  index === currentIndex ? 'bg-rose-400 w-8' : 'bg-neutral-700 w-2'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
