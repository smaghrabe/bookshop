import { CiStar, CiHeart, CiGlobe } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { CiDeliveryTruck, CiHeadphones } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaArrowsRotate } from "react-icons/fa6";

const FeatureItem = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-start text-left">
    <div className="text-gray-400 text-4xl mb-3">
      <Icon />
    </div>
    <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
    <p className="text-gray-500 text-[10px] leading-relaxed max-w-[200px]">
      {desc}
    </p>
  </div>
);

const MissionCard = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white shadow-sm border border-gray-100 rounded-sm">
    <div className="text-pink-600 text-5xl mb-4">
      <Icon />
    </div>
    <h3 className="font-bold text-gray-800 text-lg mb-3">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      <div
        className="relative h-[300px] w-full flex items-center justify-center text-white text-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('/bgBooks.png')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 py-24 text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-6">About Bookshop</h1>
          <p className="text-gray-300 max-w-2xs mx-auto text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-10 md:px-24 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-12">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MissionCard
              Icon={CiStar}
              title="Quality Selection"
              desc="We hand-pick every title in our store to ensure the highest quality of content and physical condition."
            />
            <MissionCard
              Icon={CiHeart}
              title="Exceptional Service"
              desc="Our team is dedicated to helping you find your next great read with personalized recommendations."
            />
            <MissionCard
              Icon={CiGlobe}
              title="Set Up Stores"
              desc="Bringing bookstores closer to you through our expanding network of local and digital shops."
            />
          </div>
        </div>
      </div>

      <div className="bg-[#3B2F4A] py-20 text-white">
        <div className="container mx-auto px-10 md:px-24 flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Have a Questions?</h2>
            <h2 className="text-3xl font-bold mb-8">Get in Touch!</h2>
            <p className="text-xs text-gray-400 mb-4 max-w-2xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam, malesuada leo.
            </p>

            <form className="space-y-4 max-w-md">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 px-5 bg-white p-3 rounded text-black text-sm outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 bg-white p-3 rounded text-black text-sm outline-none"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-white p-3 rounded text-black text-sm outline-none"
              ></textarea>
              <button className="bg-pink-600 hover:bg-pink-700 text-white text-center font-bold py-3 px-8 rounded transition-all w-full md:w-auto cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <h4 className="font-bold mb-4 text-pink-400">Address</h4>
              <p className="text-sm text-gray-300">
                123 Bookstore Lane, Library District, Egypt
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-pink-400">Social Media</h4>
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
                  <FaInstagram />
                </div>
                <div className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
                  <FaYoutube />
                </div>
                <div className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition-colors cursor-pointer">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Start Features Section */}
      <div className="container mx-auto py-16 px-10 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FeatureItem
            Icon={CiDeliveryTruck}
            title="Fast & Reliable Shipping"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
          <FeatureItem
            Icon={RiSecurePaymentLine}
            title="Secure Payment"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
          <FeatureItem
            Icon={FaArrowsRotate}
            title="Easy Returns"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
          <FeatureItem
            Icon={CiHeadphones}
            title="24/7 Support"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
        </div>
      </div>
      {/*End Features Section */}
    </div>
  );
};

export default AboutPage;
