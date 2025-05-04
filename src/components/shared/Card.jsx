import { motion } from "motion/react";
import Button from "./Button";
import Badge from "./Badge";

const formatINR = (number) => {
  return number.toLocaleString("en-IN");
};

const Iframe = ({ src = "" }) => (
  <iframe
    width="100%"
    height="100%"
    src={src}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
);

const Card = ({
  video = "",
  title = "",
  description = "",
  startingDate = "",
  duration = "",
  percentage = 0,
  originalPrice = 0,
  discountPrice = 0,
  btnLink = "",
  isNew = false,
}) => {
  return (
    <motion.div initial="initial" whileHover="hovered">
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: -8 },
        }}
        transition={{ type: "spring" }}
        className="h-full flex flex-col bg-neutral-950/50 ring ring-neutral-800 rounded-2xl relative"
      >
        <div className="bg-neutral-900 aspect-video rounded-t-2xl overflow-hidden z-1">
          <Iframe src={video} />
        </div>

        <div className="p-6 flex flex-col justify-between grow gap-12 relative z-1">
          {isNew && (
            <Badge className="absolute top-0 right-4 -translate-y-[60%] py-1 pl-3 pr-4">
              <i className="ri-asterisk text-lg"></i> New
            </Badge>
          )}

          <div>
            <h2 className="text-white text-2xl truncate mb-2">{title}</h2>
            <p className="truncate mb-7.5">{description}</p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 flex items-center gap-2 ring ring-neutral-800 rounded-full">
                <i className="ri-calendar-line text-base"></i>
                <span className="text-sm truncate">{startingDate}</span>
              </span>
              <span className="text-sm truncate px-3 py-1.5 flex items-center gap-2 ring ring-neutral-800 rounded-full">
                <i className="ri-time-line text-base"></i>
                <span className="text-sm truncate">{duration}</span>
              </span>
            </div>
          </div>

          <div className="flex sm:flex-wrap justify-between items-center gap-4">
            <div>
              <span className="text-orange-500 text-sm">
                Save {percentage}%
              </span>
              <div className="flex items-center gap-2">
                <span className="text-white text-2xl font-semibold">
                  ₹{formatINR(discountPrice)}
                </span>
                <span className="text-sm line-through">
                  ₹{formatINR(originalPrice)}
                </span>
              </div>
            </div>
            <Button href={btnLink} className="sm:w-full md:w-fit px-6">
              Buy now
            </Button>
          </div>
        </div>

        <motion.span
          variants={{
            initial: { width: "50%", opacity: 0.6 },
            hovered: { width: "60%", opacity: 1 },
          }}
          className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0"
        />
        <motion.span
          variants={{
            initial: { opacity: 0.6 },
            hovered: { opacity: 1 },
          }}
          className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,rgba(255,115,0,0.15)_0%,transparent_100%)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
