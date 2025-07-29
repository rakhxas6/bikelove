import React, { useState } from "react";

const InputField = ({ label, placeholder, width, onChange }) => {
  return (
    <div className={`flex flex-col ${width || "w-[50%]"} p-4`}>
      <label className="font-bold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const TextAreaField = ({ label, placeholder, width, onChange }) => {
  return (
    <div className={`flex flex-col ${width || "w-full"} p-4`}>
      <label className="font-bold">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={5}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex flex-col w-full md:w-[300px]">
    <div className="flex flex-col grow mt-2.5 text-gray-900">
      <div className="flex items-center gap-5 text-xl font-bold">
        <img src={icon} alt={title} className="shrink-0 w-[54px] h-[54px]" />
        <h3>{title}</h3>
      </div>
      <div className="mt-2 text-lg leading-7 pl-16">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\+?\d{1,3}(?:[-\s]?\d{3}){3}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await fetch("https://your-backend-endpoint.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });

      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to submit the form. Please try again.");
    }
  };

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=...",
      title: "Call us",
      content: (
        <>
          +1-940-394-2948 <br />
          +1-389-385-3807
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=...",
      title: "Email us",
      content: (
        <>
          support@brainwave.io <br />
          contact@brainwave.io
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342?apiKey=...",
      title: "Visit us",
      content: (
        <>
          34 Madison Street, <br />
          NY, USA 10005
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="bg-[#F4F7FA] p-10 max-w-[1250px] mx-auto rounded-2xl">
        {/* Heading */}
        <section className="text-center text-gray-900 mb-10">
          <h1 className="text-4xl md:text-6xl font-bold">Contact us</h1>
          <p className="mt-6 text-lg md:text-xl max-w-[650px] mx-auto">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
        </section>

        {/* Form & Info */}
        <section className="flex flex-col lg:flex-row gap-10 bg-white p-8 rounded-xl shadow-2xl">
          {/* Form */}
          <div className="flex-1 flex flex-wrap justify-between">
            <InputField
              label="First Name & Last Name"
              placeholder="i.e. John Smith"
              width="w-[48%]"
              onChange={(value) => handleChange("firstName", value)}
            />
            <InputField
              label="Email"
              placeholder="i.e. john@mail.com"
              width="w-[48%]"
              onChange={(value) => handleChange("email", value)}
            />
            <InputField
              label="Phone Number"
              placeholder="i.e. +1-234-567-7890"
              width="w-[48%]"
              onChange={(value) => handleChange("phoneNumber", value)}
            />
            <InputField
              label="Subject"
              placeholder="i.e. I need help"
              width="w-[48%]"
              onChange={(value) => handleChange("subject", value)}
            />
            <TextAreaField
              label="Message"
              placeholder="Type your message here..."
              width="w-full"
              onChange={(value) => handleChange("message", value)}
            />
            <div className="px-4 mt-4">
              <button
                onClick={handleSubmit}
                className="text-lg bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                Send
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-10 justify-start">
            {contactData.map((item, idx) => (
              <ContactItem
                key={idx}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
