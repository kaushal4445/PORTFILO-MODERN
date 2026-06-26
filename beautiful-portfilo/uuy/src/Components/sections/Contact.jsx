import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser"; // npm i @emailjs/browser (emailjs-com is deprecated)

const SERVICE_ID = "service_6ivtnzo";
const TEMPLATE_ID = "template_3rrbc3c";
const PUBLIC_KEY = "tT2A5twHuV_KoHZA9";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  const isSending = status === "sending";

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 text-sm mb-8">
            Have a project in mind? Send a message and I'll get back to you soon.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSending}
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded pl-10 pr-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 disabled:opacity-50"
                placeholder="Name..."
                onChange={handleChange("name")}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSending}
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded pl-10 pr-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 disabled:opacity-50"
                placeholder="example@gmail.com"
                onChange={handleChange("email")}
              />
            </div>

            {/* Message */}
            <div className="relative">
              <svg
                className="absolute left-3 top-3 w-4 h-4 text-gray-500"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 21l1.8-4A8.86 8.86 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={isSending}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded pl-10 pr-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 disabled:opacity-50 resize-none"
                placeholder="Your Message..."
                onChange={handleChange("message")}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
            >
              {isSending && (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* Status feedback */}
            {status === "success" && (
              <p className="text-center text-sm text-green-400 animate-fadeIn">
                Message sent — thanks for reaching out!
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400 animate-fadeIn">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};