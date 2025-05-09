import { Tweet } from "react-tweet";
import { motion } from "motion/react";

import logo_1 from "../../assets/imgs/logo-1.png";
import logo_2 from "../../assets/imgs/logo-2.png";
import logo_3 from "../../assets/imgs/logo-3.png";
import logo_4 from "../../assets/imgs/logo-4.png";
import logo_5 from "../../assets/imgs/logo-5.png";

import Container from "../shared/Container";
import SectionHeader from "../shared/SectionHeader";

const logos = [
  { name: "logo 1", src: logo_1 },
  { name: "logo 2", src: logo_2 },
  { name: "logo 3", src: logo_3 },
  { name: "logo 4", src: logo_4 },
  { name: "logo 5", src: logo_5 },
];

const tweetGroups = [
  ["1907045909394788416", "1906390359841640771"],
  ["1917074163635794430", "1916914630141903211"],
  ["1905574126112153860", "1906393735203836076"],
];

const Testimonial = () => {
  return (
    <section className="pt-20 pb-8" id="testimonial">
      <Container className="pt-2 pb-16">
        <SectionHeader badge="Testimonial" title="What Students Are Saying" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 mb-30">
          {tweetGroups.map((group, idx) => (
            <div
              key={idx}
              className={idx === 0 ? "" : "hidden sm:block"}
              data-theme="dark"
            >
              {group.map((id) => (
                <Tweet key={id} id={id} />
              ))}
            </div>
          ))}
        </div>

        <SectionHeader
          badge="Top brands"
          title="Built After Learning with Us"
          subtitle="Empowered Here. Now Founders, Creators, and Innovators"
        />

        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-8 pt-8">
          {logos.map(({ name, src }, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="sm:mx-2 cursor-pointer"
            >
              <img src={src} alt={name} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
