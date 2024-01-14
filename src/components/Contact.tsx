import LocationIcon from "@/assets/icons/Location";
import Button from "./Button";
import MailIcon from "@/assets/icons/Mail";

const Contact = () => {
  return (
    <div className="w-full flex items-center justify-center bg-brand-blue relative">
      <div className="absolute xl:left-10 2xl:left-40">
        <LocationIcon />
      </div>
      <div className="w-[1200px] h-[224px] py-10 pr-6 pl-[180px] flex items-center justify-between">
        <div>
          <h4 className="text-[28px] text-white font-normal">
            Join our newsletter to stay up to date
          </h4>
          <p className="text-white text-xl">Stay connected with our brand</p>
        </div>
        <form>
          <div className="flex gap-3">
            <div className="bg-white p-3 rounded-lg flex gap-2 w-[336px] items-center">
              <MailIcon />
              <input
                className="w-full focus:outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <Button variant="black">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
