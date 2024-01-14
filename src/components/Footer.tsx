import FacebookIcon from "@/assets/icons/Facebook";
import Logo from "../assets/icons/logo";
import InstagramIcon from "@/assets/icons/Instagram";
import TwitterIcon from "@/assets/icons/Twitter";

const Footer = () => {
  return (
    <footer className="bg-brand-black w-full flex items-center justify-center">
      <div className="w-[1200px] py-[80px]">
        <div className="flex justify-between items-start pb-[100px] border-b border-b-white">
          <div className="flex flex-col">
            <Logo />
            <p className="text-white mt-6 w-[300px]">
              Wanderlust meets wander well – Experience seamless travel with our
              services.
            </p>
          </div>
          <div className="flex gap-10 text-white">
            <div className="w-[164px]">
              <h5 className="text-lg font-medium mb-4">Company</h5>
              <ul className="font-normal">
                <li className="py-2">About Us</li>
                <li className="py-2">Blog</li>
                <li className="py-2">Customers</li>
                <li className="py-2">Packages</li>
                <li className="py-2">Comunity</li>
              </ul>
            </div>
            <div className="w-[164px]">
              <h5 className="text-lg font-medium mb-4">Help</h5>
              <ul className="font-normal">
                <li className="py-2">Support</li>
                <li className="py-2">FAQs</li>
                <li className="py-2">Refund Policy</li>
              </ul>
            </div>
            <div className="w-[164px]">
              <h5 className="text-lg font-medium mb-4">Follow Us</h5>
              <ul className="font-normal">
                <li className="py-2 flex gap-3">
                  <FacebookIcon fill="#fff" />
                  <span>Facebook</span>
                </li>
                <li className="py-2 flex gap-3">
                  <InstagramIcon fill="#fff" />
                  <span>Instagram</span>
                </li>
                <li className="py-2 flex gap-3">
                  <TwitterIcon fill="#fff" />
                  <span>Twitter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-white pt-6">
          <span>2023 Logoipsum. All right reserved.</span>
          <div className="flex gap-6">
            <span className="border-b">Privacy Policy</span>
            <span className="border-b">Terms of Service</span>
            <span className="border-b">Cookies Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
