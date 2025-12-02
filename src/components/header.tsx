import { Github, Linkedin, Mail } from 'lucide-react';
import PrettyButton from './ui/prettyButton';
import LeahDetails from '../data/details';

export function Header() {
  return (
    <header id="header" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-900 to-neutral-800 z-0 ">
      <div className="max-w-8xl mx-auto text-center z-2">
        <p className="text-neutral-400  mb-4 text-24xl">Hi I'm</p>
        <h1 className="text-4xl md:text-7xl lg:text-8xl scale-2 mb-8 text-rose-400 font-gothic-bold">
          {LeahDetails.name}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300  mb-4">
          {LeahDetails.title}
        </p>
        <p className="text-neutral-400 mb-12 max-w-2xl mx-auto text-lg">
          {LeahDetails.about}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <PrettyButton
            href={`mailto:${LeahDetails.email}`}
            text='Email'
            icon={<Mail size={20} />}
          />
          <PrettyButton
            href={LeahDetails.github}
            text='GitHub'
            icon={<Github size={20} />}
          />
          <PrettyButton
            href={LeahDetails.linkedin}
            text='LinkedIn'
            icon={<Linkedin size={20} />}
          />
        </div>
      </div>
    </header>
  );
}
