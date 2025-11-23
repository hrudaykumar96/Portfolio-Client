"Use client";

import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: FaFacebook,
      },
      {
        name: "Facebook",
        href: "#",
        icon: RiInstagramFill,
      },
      {
        name: "Facebook",
        href: "#",
        icon: FaGithub,
      },
      {
        name: "Facebook",
        href: "#",
        icon: FaTelegram,
      },
      {
        name: "Facebook",
        href: "#",
        icon: FaLinkedin,
      },
      {
        name: "Facebook",
        href: "#",
        icon: IoLogoWhatsapp,
      },
    ],
  };

  const year = new Date().getFullYear();
  const name = "hruday kumar";

  return (
    <footer className="bg-(--background-footer)">
      <section>
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-(--link-text) hover:text-(--link-text-hover)"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="text-(--link-text) hover:text-(--link-text-hover)"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-(--link-text)">
          &copy; {year} <span className="capitalize"> {name}</span> - Crafted
          with passion & clean code
        </p>
      </section>
    </footer>
  );
};

export default Footer;
