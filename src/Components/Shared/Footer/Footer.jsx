import { MdHomeWork } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer p-10 bg-white text-black pt-28 container mx-auto">
        <nav>
          <div className="flex flex-col items-center">
            <MdHomeWork className="text-3xl text-[#064749]" />{" "}
            <p className="text-lg font-bold">House Hunter</p>
          </div>
          <a className="link link-hover">Contact number: 02033074477</a>
          <div className="flex justify-center items-center gap-3">
            <FaLinkedinIn className="text-[#064749] text-2xl" />
            <FaFacebookF className="text-[#064749] text-2xl" />
            <FaTwitter className="text-[#064749] text-2xl" />
          </div>
          <a className="link link-hover">© 2021 Flex Living</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-black">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our team</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-black">Guests</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Career</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-black">Privacy</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <form>
          <h6 className="text-lg font-bold text-black">Stay up to date</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="">
                Be the first to know about our newest apartments
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Email address"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item bg-[#064749] text-white">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
