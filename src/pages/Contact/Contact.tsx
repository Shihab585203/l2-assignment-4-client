import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import contactAnimation from "../../../public/contactAnimation.json";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import fadeIn from "../framerMotion/fadeIn";


const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "sehab50100",
          "template_7lj93wi",
          form.current,
          "Le6LPWQsFxqCsdi5-"
        )
        .then(
          (result) => {
            console.log("Successfully Email Sent!", result);
            form.current?.reset();
            toast.success('Success Email has been sent!');
          },
          (err) => {
            console.log("Failed to send email", err);
          }
        );
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <motion.h1 
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="text-3xl font-semibold text-center">Contact us</motion.h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-3/6">
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
          <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form ref={form} onSubmit={handleContactForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="user_name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Text</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea textarea-bordered"
                  placeholder="Write Your Issue..."
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Email</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
