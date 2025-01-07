import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_05q950d", "template_jzph6tn", form.current, {
        publicKey: "oP74nEvOOAfXozr7c",
      })
      .then(
        (res) => {
          if (res) {
            toast.success("check you mail");
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center pb-10 underline">
        <Typewriter
          words={["CONTACT ME"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <div className=" py-12 mb-20 rounded-md px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
            <p className="mb-6 text-gray-400">
              Have a question, collaboration idea, or just want to say hello?
              Feel free to reach out! I’m always excited to discuss new
              opportunities, projects, or anything you have in mind. Drop me a
              message, and I’ll get back to you as soon as possible.
            </p>
            <div className="mb-4 flex items-center">
              <span className="mr-2">📍</span>
              <p>Mohammad Sajeeb, Chittagong, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📧</span>
              <p>mohammadsajeeb890@gmail.com</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <form onSubmit={sendEmail} ref={form} className="space-y-4">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                name="user_email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-red-600 text-white font-bold hover:bg-red-700 transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
