import { useState } from "react";

export default function Reservation() {
  const [formdata, setFormdata] = useState({
    date: "",
    time: "",
    partySize: "",
    tablePreference: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    specialRequest: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState("");

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formdata.date) {
      errors.date = "Date is required";
    }

    if (!formdata.time) {
      errors.time = "Time is required";
    }

    if (!formdata.partySize) {
      errors.partySize = "Party size is required";
    }

    if (!formdata.tablePreference) {
      errors.tablePreference = "Table preference is required";
    }

    if (!formdata.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!/^[A-Za-z\s]+$/.test(formdata.fullName)) {
      errors.fullName = "Only letters allowed";
    }

    if (!/^[0-9]{10}$/.test(formdata.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formdata.email)
    ) {
      errors.email = "Invalid email address";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted("Your reservation has been confirmed!");

      setFormdata({
        date: "",
        time: "",
        partySize: "",
        tablePreference: "",
        fullName: "",
        phoneNumber: "",
        email: "",
        specialRequest: "",
      });

      setFormErrors({});
    } else {
      setSubmitted("");
    }
  };

  return (
    <section id="reservation" className="py-20 pt-32 md:pt-20 scroll-mt-24 bg-[#FFF8E7]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-neutral-900 mb-2">
          Make a Reservation
        </h2>

        <div className="w-24 md:w-40 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>

        <p className="text-neutral-600 mb-12">
          Book your table in advance to ensure the best dining experience
        </p>

        {submitted && (
          <div className="bg-green-100 text-green-700 py-3 px-4 rounded-lg mb-6">
            {submitted}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-[#fcf9f2]/50 border border-neutral-200 p-8 md:p-12 rounded-2xl shadow-sm text-left grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-neutral-800 mb-2">
              Date
            </label>

            <input
              name="date"
              type="date"
              value={formdata.date}
              onChange={handleChange}
              placeholder="Select Date"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
            />

            {formErrors.date && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.date}
              </p>
            )}
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-neutral-800 mb-2">
              Time
            </label>

            <input
              name="time"
              type="time"
              value={formdata.time}
              onChange={handleChange}
              placeholder="Select Booking Time"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
            />

            {formErrors.time && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.time}
              </p>
            )}
          </div>

          {/* Party Size */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-neutral-800 mb-2">
              Party Size
            </label>

            <select
              name="partySize"
              value={formdata.partySize}
              onChange={handleChange}
              className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
            >
              <option value="">Select Party Size</option>
              <option>2 People</option>
              <option>4 People</option>
              <option>6 People</option>
              <option>8 People</option>
              <option>10+ People</option>
            </select>

            {formErrors.partySize && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.partySize}
              </p>
            )}
          </div>

          {/* Table Preference */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-neutral-800 mb-2">
              Table Preference
            </label>

            <select
              name="tablePreference"
              value={formdata.tablePreference}
              onChange={handleChange}
              className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
            >
              <option value="">Select Table Area</option>
              <option>Indoor</option>
              <option>Rooftop</option>
            </select>

            {formErrors.tablePreference && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.tablePreference}
              </p>
            )}
          </div>

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-neutral-800 mb-2">
              Full Name
            </label>

            <input
              name="fullName"
              type="text"
              value={formdata.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
            />

            {formErrors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.fullName}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-neutral-800 mb-2">
              Phone Number
            </label>

            <input
              name="phoneNumber"
              type="tel"
              value={formdata.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
            />

            {formErrors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.phoneNumber}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-bold text-neutral-800 mb-2">
              Email Address
            </label>

            <input
              name="email"
              type="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500"
            />

            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.email}
              </p>
            )}
          </div>

          {/* Special Request */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-bold text-neutral-800 mb-2">
              Special Request
            </label>

            <textarea
              name="specialRequest"
              rows="4"
              value={formdata.specialRequest}
              onChange={handleChange}
              placeholder="Any special requests?"
              className="px-4 py-3 bg-white rounded-lg border border-neutral-300 focus:outline-none focus:border-orange-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-lg shadow-md transition-all text-lg mt-4"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
}