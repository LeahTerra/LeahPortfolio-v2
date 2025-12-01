import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navItems = [
    { label: 'About', href: '#header' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - (window.innerHeight / 2 - element.clientHeight / 2);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav className={`hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-60 hover:opacity-100'}`}>
        <div className="flex gap-2 bg-neutral-800/90 backdrop-blur-sm border border-neutral-700 rounded-full px-3 py-2 shadow-lg items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-4 py-2 text-neutral-300 hover:text-white hover:bg-rose-400 rounded-full transition-all text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed top-6 right-6 z-50 p-3 bg-neutral-800/90 backdrop-blur-sm border border-neutral-700 rounded-full text-neutral-300 hover:text-rose-400 shadow-lg transition-opacity duration-300 ${isScrolling ? 'opacity-30' : 'opacity-60 hover:opacity-100'}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-neutral-900/95 backdrop-blur-sm z-40 flex items-center justify-center">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsOpen(false);
                  }}
                  className="px-6 py-3 text-neutral-300 hover:text-white hover:bg-rose-400 rounded-full transition-all text-center bg-neutral-800 border border-neutral-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
