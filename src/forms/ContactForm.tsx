"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-(--card-background) p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="flex flex-col">
        <InputField
          type="text"
          name="name"
          value={formData.name}
          error={errors.name}
          placeholder="Your Name"
          required={true}
          disable={false}
          onChangeInputarea={handleChangeInput}
        />
      </div>

      <div className="flex flex-col">
        <InputField
          type="email"
          name="email"
          value={formData.email}
          error={errors.email}
          placeholder="Your Email"
          required={true}
          disable={false}
          onChangeInputarea={handleChangeInput}
        />
      </div>

      <div className="md:col-span-2 flex flex-col">
        <InputField
          type="textfield"
          name="message"
          value={formData.message}
          error={errors.message}
          placeholder="Your Message"
          required={true}
          disable={false}
          onChangeTextarea={handleChangeTextarea}
        />
      </div>

      <div className="md:col-span-2 text-right">
        <Button type="submit" name="Send Message" icon={<IoIosSend className="text-xl" />} />
      </div>
    </motion.form>
  );
};

export default ContactForm;
