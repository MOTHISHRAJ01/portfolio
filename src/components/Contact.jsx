import React from "react";

const contact_info = [
  {
    logo: "mail",
    text: "mothishraj01@gmail.com"
  },
  {
    logo: "call",
    text: "+91 7639263070"
  },
  {
    logo: "location",
    text: "Chennai, India"
  }
];

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Web3Forms access key
    formData.append("access_key", "ad688de8-7f2f-4b7d-a44f-d342805174f6");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-4 rounded-lg mx-auto"
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-gray-700 p-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="bg-gray-700 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              required
              className="bg-gray-700 p-3 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded text-white font-semibold w-fit"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
