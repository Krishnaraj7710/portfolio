import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_83c9igj",
        "template_lhkbemi",
        form.current!,
        "bjmM4tTHgV_3Yc4_5"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen px-4 pt-32 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 font-['Poppins'] max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">

            {/* Email */}
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 shadow-lg border border-indigo-100/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                  <Mail className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 font-['Poppins'] text-sm">
                    kr710krish@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 shadow-lg border border-indigo-100/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                  <Phone className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 font-['Poppins'] text-sm">9495192853</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 shadow-lg border border-indigo-100/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                  <MapPin className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600 font-['Poppins'] text-sm">
                    Trivandrum, Kerala, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 shadow-lg border border-indigo-100/50">
              <h3 className="font-['Poppins'] font-semibold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex items-center gap-3">
                <a href="https://github.com/Krishnaraj7710" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl text-indigo-600 shadow-sm">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/Kris" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl text-indigo-600 shadow-sm">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 md:p-10 shadow-xl border border-indigo-100/50">
              <h2 className="text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-6">
                Send Me a Message
              </h2>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-['Poppins'] font-medium text-gray-900 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border border-indigo-100 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-['Poppins'] font-medium text-gray-900 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border border-indigo-100 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-['Poppins'] font-medium text-gray-900 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border border-indigo-100 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-['Poppins'] font-medium text-gray-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border border-indigo-100 rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white flex items-center gap-2"
                >
                  {isSubmitting ? "Sending..." : (<><Send size={20} /> Send Message</>)}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
