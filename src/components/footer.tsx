export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-neutral-500 ">
          © {new Date().getFullYear()} Leah Sheptycki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
