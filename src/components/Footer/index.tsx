import { Copyright } from "../Copyright";
import { Form } from "../Form";
import { MenuItems } from "../MenuItems";
import { SocialLinks } from "../SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container text-white">
        <div className="flex flex-col lg:flex-row justify-between p-5 md:p-10 gap-2">
          <div className="flex flex-col gap-8 max-w-86">
            <Form />

            <SocialLinks />
          </div>

          <MenuItems />
        </div>

        <Copyright />
      </div>
    </footer>
  );
};
