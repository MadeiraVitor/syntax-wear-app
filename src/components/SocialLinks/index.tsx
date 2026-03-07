import IconInstagram from "@/assets/images/icon-instagram.png";
import IconWhatsapp from "@/assets/images/icon-whatsapp.png";
import IconTiktok from "@/assets/images/icon-tiktok.png";
import IconFacebook from "@/assets/images/icon-facebook.png";

const socialLinks = [
  { href: "#", icon: IconInstagram, name: "Instagram" },
  { href: "#", icon: IconWhatsapp, name: "WhatsApp" },
  { href: "#", icon: IconTiktok, name: "TikTok" },
  { href: "#", icon: IconFacebook, name: "Facebook" },
];

export const SocialLinks = () => {
  return (
    <div>
      <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>

      <ul className="flex gap-5">
        {socialLinks.map(({ href, icon, name }) => (
          <li key={name}>
            <a href={href} aria-label={name}>
              <img src={icon} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
