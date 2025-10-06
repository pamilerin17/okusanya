import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeorzdvl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch  {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-16 max-w-xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Write your message..."
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-blue-600 text-center mt-4">✅ Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mt-4">❌ Something went wrong. Try again later.</p>
      )}
    </section>
  );
};

export default ContactForm;
