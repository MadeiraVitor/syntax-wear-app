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

const menus = [
    { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
    { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
    { title: "Outlet", items: ["Masculino", "Feminino"] },
    { title: "Nossas lojas", items: ["Loja fisica", "Loja online"] },
    { title: "Sobre", items: ["Quem somos", "Missão"] },
]

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container text-white">
        <div className="flex flex-col lg:flex-row justify-between p-10 gap-2">
          <div className="flex flex-col gap-8 min-w-86">
            <form className="flex flex-col">
              <label htmlFor="newsletter">Inscreva-se em nosso e-mail</label>
              <input
                type="email"
                id="newsletter"
                name="newsletter"
                placeholder="email@email.com"
                className="rounded-[30px] bg-white py-3 px-5"
              />
            </form>

            <div>
              <p className="mb-4 text-xl font-medium text-surface-alt">
                Redes Sociais
              </p>

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
          </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {menus.map(({ title, items }) => (
                        <nav>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <p className="font-normal text-surface-alt text-xl">{title}</p>
                                </li>
                                {items.map((item) => (
                                    <li key={item}>
                                        <a className="font-medium hover:text-[#cccccc] transition-colors" href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
        </div>
      </div>
    </footer>
  );
};
