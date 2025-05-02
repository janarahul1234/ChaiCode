import Badge from "./Badge";

const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="mb-8 text-center">
    <Badge className="mb-4.5 mx-auto">{badge}</Badge>
    <h2 className="text-white text-2xl md:text-[2rem]">{title}</h2>
    {subtitle && (
      <p className="text-pretty mx-auto max-w-[18rem]">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
