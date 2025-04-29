const Footer = () => {
  return (
    <footer className="bg-blue-800 dark:bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 Parliamentary Debate Championship. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-300 dark:hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-300 dark:hover:text-blue-400">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-300 dark:hover:text-blue-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;