export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Have questions or need assistance? Send us a message and our team will get back to you shortly.
      </p>

      <form className="space-y-6">

        {/* Name */}
        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}