import { AiFillMail } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GiGymBag } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
const HowWorks = () => {
  return (
    <div className="bg-[#E2F1E8] text-black my-32">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-black py-20">
        How it Works
      </h1>
      <div className="container mx-auto px-2 md:px-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <div className="flex justify-end items-center">
                <AiFillMail className="text-7xl" />
              </div>
              <div className="text-lg font-bold md:text-4xl">Get in touch</div>
              Have questions or need assistance? Our dedicated support team is
              here to help. Get in touch with us for any inquiries regarding
              property listings, booking procedures, or general assistance. Your
              satisfaction is our priority.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <div>
                <FaUserFriends className="text-7xl" />
              </div>
              <div className="text-lg font-bold md:text-4xl">Let’s chat</div>
              Connect with property owners, discuss rental details, and
              negotiate terms through our convenient chat feature. Efficient
              communication is key, and House Hunter makes it easy for landlords
              and tenants to engage in meaningful conversations.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <div className="flex justify-end items-center">
                <IoEye className="text-7xl" />
              </div>
              <div className="text-lg font-bold md:text-4xl">
                Property viewing
              </div>
              Visualize your next home with our virtual property viewing
              feature. Take a virtual tour of available rentals, explore
              interiors, and get a feel for the space—all from the comfort of
              your device. It’s the modern way to narrow down your options.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <div>
                <BiSolidBuildingHouse className="text-7xl" />
              </div>
              <div className="text-lg font-bold md:text-4xl">
                Time to decorate
              </div>
              Once you’ve found the perfect property, it&lsquo;s time to make it
              your own! Use our resources and tips to personalize your space.
              From design inspiration to practical decorating advice, we help
              you turn your rental into a home that reflects your style.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <div className="flex justify-end items-center">
                <GiGymBag className="text-7xl" />
              </div>
              <div className="text-lg font-bold md:text-4xl">
                Moving in & Moving up!
              </div>
              Congratulations on your new home! Navigate the moving process
              smoothly with our moving-in guide. From organizing logistics to
              settling into your new environment, House Hunter is with you every
              step of the way as you embark on this exciting journey.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <div>
                <IoSunny className="text-7xl" />
              </div>
              <div className="text-lg font-bold md:text-4xl">
                Sit back & Relax
              </div>
              Now that you&lsquo;re settled, it&lsquo;s time to enjoy your new
              home. Our platform continues to support you even after
              you&lsquo;ve moved in. Sit back, relax, and let House Hunter be
              your trusted companion for any future needs or property-related
              assistance. Your comfort is our commitment.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowWorks;
