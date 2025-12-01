import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import LeahDetails from '../data/details';
import PrettyButton from './ui/prettyButton';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-white mb-2 text-5xl font-bold">Let's Work Together</h2>
          <div className="w-20 h-1 rounded-full mx-auto mb-6"></div>
          <p className="text-neutral-300 text-xl max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-400 text-white rounded-lg hover:bg-rose-500 transition-all shadow-lg hover:shadow-xl text-lg"
          >
            <Mail size={24} />
            Send Me an Email
          </a>
        </div>

        <div className="mb-8">
          <p className="text-neutral-400  mb-4">Or connect with me on social media</p>
          <div className="flex gap-4 justify-center">
            <PrettyButton
              href={LeahDetails.github}
              aria-label="GitHub"
              icon={<Github size={28} />}
            />
            <PrettyButton
              href={LeahDetails.linkedin}
              aria-label="LinkedIn"
              icon={<Linkedin size={28} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}