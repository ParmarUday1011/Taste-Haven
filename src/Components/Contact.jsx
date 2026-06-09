import { useState } from "react";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Only letters allowed";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //     setSuccess("Message sent successfully!");

    //     setFormData({
    //         fullName: "",
    //         email: "",
    //         subject: "",
    //         message: "",
    //     });

    //     setErrors({});
    // } else {
    //     setSuccess("");
    // }

    if (validateForm()) {
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbz7_kIT_YPk2gxhxvOOwEFtlVwr9eS4rZ6cOLKb8r5q59pyCzxhThgEWtopjt-kWbBQHA/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        setSuccess("Your reservation has been confirmed!");

        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });

        setErrors({});
      } catch (error) {
        console.error(error);
        alert("Error sending data");
      }
    } else {
      setSuccess("");
    }
  };

  return (
    <div>
      <section id="contact" className="py-20 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-black">
            Contact Us
          </h2>

          <div
            className="h-1 bg-orange-500 rounded-full mx-auto mt-4 
    w-20 sm:w-24 md:w-32 lg:w-40"
          ></div>

          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
            We would love to hear from you! Please reach out with any questions
            or feedback.
          </p>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="bg-orange-500 text-white p-4 rounded-full">
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-gray-600">
                    123 Main Street, Ahmedabad, Gujarat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="bg-orange-500 text-white p-4 rounded-full">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="bg-orange-500 text-white p-4 rounded-full">
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-600">info@tastehaven.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="bg-orange-500 text-white p-4 rounded-full">
                  <FaClock size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Opening Hours</h4>
                  <p className="text-gray-600">
                    Mon - Sun : 11:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>

                <p className="text-gray-600 mb-8">
                  Stay connected with us on social media for updates and offers.
                </p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-orange-500 text-white p-4 rounded-full hover:scale-110 transition-all"
                  >
                    <FaFacebookF size={20} />
                  </a>

                  <a
                    href="#"
                    className="bg-orange-500 text-white p-4 rounded-full hover:scale-110 transition-all"
                  >
                    <FaInstagram size={20} />
                  </a>

                  <a
                    href="#"
                    className="bg-orange-500 text-white p-4 rounded-full hover:scale-110 transition-all"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-[#fcf9f2]/50 border border-neutral-200 p-8 md:p-12 rounded-2xl shadow-sm text-left grid grid-cols-1 gap-6"
              >
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-neutral-800 mb-2">
                    Full Name
                  </label>

                  <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
                  />

                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-neutral-800 mb-2">
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-neutral-800 mb-2">
                    Subject
                  </label>

                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
                  />

                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-neutral-800 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500 h-32 resize-none"
                  ></textarea>

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all font-medium"
                >
                  Send Message
                </button>

                {/* Success Message */}
                {success && (
                  <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg">
                    {success}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
