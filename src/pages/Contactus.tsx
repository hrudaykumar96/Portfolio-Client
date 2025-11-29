"use client";

import ContactForm from "@/forms/ContactForm";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const ContactusPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-5xl mx-auto bg-(--background-color)/95 rounded-3xl shadow-xl p-8 sm:p-10 flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-(--text-color) mb-2">
            Get in Touch
          </h1>
          <p className="text-(--text-color)/80">
            Feel free to reach out for collaborations or just a friendly hello
            👋
          </p>
        </div>

        <div className="w-full">
          <ContactForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-(--text-color)">
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-(--card-background) shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-(--button-background) text-3xl" />
            <span className="font-semibold">Email</span>
            <p className="text-center">your.email@example.com</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-(--card-background) shadow-md hover:shadow-lg transition">
            <FaPhone className="text-(--button-background) text-3xl" />
            <span className="font-semibold">Phone</span>
            <p className="text-center">+91 9876543210</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-(--card-background) shadow-md hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-(--button-background) text-3xl" />
            <span className="font-semibold">Address</span>
            <p className="text-center">123 Example Street, Hyderabad, India</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <Link
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-(--text-color) hover:text-(--button-background) transition transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </Link>
          <Link
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-(--text-color) hover:text-(--button-background) transition transform hover:scale-110"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-(--text-color) hover:text-(--button-background) transition transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </Link>
          <Link
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noreferrer"
            className="text-(--text-color) hover:text-(--button-background) transition transform hover:scale-110"
          >
            <FaWhatsapp size={28} />
          </Link>
          <Link
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-(--text-color) hover:text-(--button-background) transition transform hover:scale-110"
          >
            <FaInstagram size={28} />
          </Link>
          <Link
            href="https://t.me/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-(--text-color) hover:text-(--button-background) transition transform hover:scale-110"
          >
            <FaTelegram size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactusPage;
