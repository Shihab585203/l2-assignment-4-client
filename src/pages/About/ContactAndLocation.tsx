const ContactAndLocation = () => {
  return (
    <div className="nunito">
      <h1 className=" my-12 text-4xl text-primary font-extrabold ">
        CONTACT AND LOCATION
      </h1>
      <p>
        <div className=" mx-auto rounded-lg">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Sports Gear BD</h3>
            <p>123 Sports Avenue,</p>
            <p>Chandina, Cumilla</p>
            <p>Bangladesh</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Phone:</h3>
            <p>+880 1645118084</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Email:</h3>
            <p>sehabahmed50100@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Customer Service Hours:</h3>
            <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
            <p>Friday: Closed</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Follow Us:</h3>
            <ul className="list-none p-0">
              <li>
                <a
                  href="https://facebook.com/sportsgearbd"
                  className="text-primary hover:underline"
                >
                  Facebook: facebook.com/sportsgearbd
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sportsgearbd"
                  className="text-pink-600 hover:underline"
                >
                  Instagram: instagram.com/sportsgearbd
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/sportsgearbd"
                  className="text-primary hover:underline"
                >
                  Twitter: twitter.com/sportsgearbd
                </a>
              </li>
            </ul>
          </div>
        </div>
      </p>
    </div>
  );
};

export default ContactAndLocation;
