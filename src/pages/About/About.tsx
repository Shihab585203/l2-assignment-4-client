import ContactAndLocation from "./ContactAndLocation";
import TeamSection from "./TeamSection";

const About = () => {
  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://img.freepik.com/free-vector/background-with-person-running_1017-6272.jpg?t=st=1722322027~exp=1722325627~hmac=765ac59acc672d2856e399f8896bca42d072045678ed9f5a7802bf159c1f9884&w=740"
            alt=""
            className=""
          />
        </div>
        <div className="space-y-5">
          <p className="nunito text-sm text-gray-500">
            We supply hight quality organic product
          </p>
          <h1 className="pacifico text-2xl text-primary font-bold">
            A shop for good people by good people
          </h1>
          <p className="nunito text-sm text-gray-500">
            Welcome to SportEcoGear.com, your premier destination for
            eco-friendly sports products. <br />
            <br />
            At SportEcoGear, our mission is to promote a sustainable and active
            lifestyle by offering products that are not only environmentally
            friendly but also high-performing and stylish. We believe in the
            power of small changes to make a big difference, and we are
            committed to sourcing and providing sports gear that helps reduce
            waste and promote a healthier planet. Whether you're a professional
            athlete or a fitness enthusiast, our carefully curated selection
            ensures you can enjoy your favorite sports while being kind to the
            environment.
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="nunito text-4xl text-center text-primary font-extrabold">
          Our Mission
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="pacifico text-3xl text-primary">Mission</h3>
            <p className="nunito">
              To empower athletes of all levels with high-quality, innovative
              sporting products that enhance performance, foster a love for
              sports, and promote a healthy, active lifestyle.
            </p>
            <h3 className="pacifico text-3xl text-primary">Vision</h3>
            <p className="nunito">
              To be a leading global brand recognized for our commitment to
              excellence, innovation, and sustainability in the sporting
              industry, inspiring athletes to achieve their best.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-photo/successful-redhead-man-winning-celebrating-victory-shouting-from-joy-clench-fists-make-fist-pump-gesture-celebrate-triumph-say-yeah-yes-win-prize-standing-white-background_176420-44884.jpg?t=st=1722489454~exp=1722493054~hmac=857f7c4851a9160ae13dda35299eebce1eb3845628eb259658b3e24c852ab063&w=740"
            alt=""
          />
        </div>
        {/* Team Section */}
        <TeamSection/>
        {/* Contact and Location */}
        <ContactAndLocation/>
      </div>
    </div>
  );
};

export default About;
