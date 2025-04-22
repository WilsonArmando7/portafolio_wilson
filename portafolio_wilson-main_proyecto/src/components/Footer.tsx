const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white p-4 text-center">
      <p>© 2024 Wilson Armando. Todos los derechos reservados.</p>
      <p>
        <a
          href="https://github.com/WilsonArmando7"
          className="hover:underline mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/wilsonarmando"
          className="hover:underline mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
