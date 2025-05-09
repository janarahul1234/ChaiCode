import Container from "../shared/Container";

const socialLinks = [
  {
    icon: <i className="ri-youtube-line"></i>,
    href: "https://www.youtube.com/@chaiaurcode",
  },
  {
    icon: <i className="ri-instagram-line"></i>,
    href: "https://www.instagram.com/hiteshchoudharyofficial/?hl=en",
  },
  {
    icon: <i className="ri-twitter-x-line"></i>,
    href: "https://x.com/hiteshdotcom",
  },
  {
    icon: <i className="ri-linkedin-line"></i>,
    href: "https://www.linkedin.com/in/hiteshchoudhary",
  },
  {
    icon: <i className="ri-github-line"></i>,
    href: "https://github.com/hiteshchoudhary",
  },
  {
    icon: <i className="ri-discord-line"></i>,
    href: "https://discord.com/invite/WDrH3zuWFb",
  },
];

const productLinks = [
  { name: "Cohort", href: "https://courses.chaicode.com/learn" },
  {
    name: "Courses",
    href: "https://courses.chaicode.com/learn/view-all?show=batch&type=17",
  },
  {
    name: "Coding Hero",
    href: "https://courses.chaicode.com/learn/batch/about?bundleId=226894",
  },
  { name: "FreeAPI", href: "https://freeapi.app" },
  { name: "Masterji", href: "https://masterji.co" },
];

const resourceLinks = [
  { name: "Docs", href: "https://docs.chaicode.com" },
  { name: "Privacy Policy", href: "https://www.chaicode.com/privacy-policy" },
  {
    name: "Terms of Service",
    href: "https://www.chaicode.com/terms-of-services",
  },
  { name: "Pricing Policy", href: "https://www.chaicode.com/pricing-policy" },
  { name: "Refund Policy", href: "https://www.chaicode.com/refund-policy" },
];

const Footer = () => {
  return (
    <footer className="pt-4 pb-8">
      <div className="relative footer-text bg-linear-to-b from-40% from-neutral-900 to-orange-500/35 text-transparent bg-clip-text text-center mb-6 sm:mb-0 -z-10">
        ChaiCode
      </div>

      <Container className="grid grid-cols-1 sm:grid-cols-[50%_1fr_1fr] gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <p className="max-w-[24rem] text-pretty text-center sm:text-left mx-auto sm:mx-0 mb-8 sm:mb-6">
              Learn, build, and grow with a community that moves with you.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-6 mb-6">
              {socialLinks.map(({ icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="text-2xl hover:text-orange-500 hover:scale-110 transition duration-300 ease-in-out"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <p className="text-white hidden sm:block">
            &copy; 2025 ChaiCode. All rights reserved.
          </p>
        </div>

        <FooterColumn title="Products" links={productLinks} />
        <FooterColumn title="Resources" links={resourceLinks} />

        <p className="text-white text-center sm:hidden">
          &copy; 2025 ChaiCode. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

const FooterColumn = ({ title = "", links = [] }) => {
  return (
    <div>
      <h3 className="text-white text-sm mb-4">{title}</h3>
      <ul className="space-y-3.5">
        {links.map(({ name, href }, idx) => (
          <li key={idx}>
            <a
              href={href}
              className="hover:text-orange-500 hover:underline hover:underline-offset-2 transition duration-300 ease-in-out"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
