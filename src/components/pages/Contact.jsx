
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";
import FooterCard from "../footer/Footer";

const ContactCard = () => {
  return (
    <div>
      <div className="flex justify-center items-center  bg-[#efede9] py-15">
        <div className="bg-[#121212] text-white p-5 rounded-lg shadow-lg w-full max-w-[400px] text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex items-center gap-2 pb-2 border-b border-[#444]">
              <FaMapMarkerAlt className="text-[#ffcc00] text-xl" />
              <p className="break-words">India, Hyderabad, PinCode 532345</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 pb-2 border-b border-[#444]">
              <FaPhoneAlt className="text-[#ffcc00] text-xl" />
              <p className="break-words">+91 8019555222</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 pb-2 border-b border-[#444]">
              <FaEnvelope className="text-[#ffcc00] text-xl" />
              <p className="break-words">kunadinesh.work@gmail.com</p>
            </div>

            {/* Website */}
            <div className="flex items-center gap-2 pb-2 border-b border-[#444]">
              <FaGithub className="text-[#ffcc00] text-xl" />
              <p className="break-words">https://github.com/Dineshkuna/instamart-react-redux</p>
            </div>
          </div>
        </div>
      </div>
      <FooterCard />
    </div>
  );
};

export default ContactCard;

