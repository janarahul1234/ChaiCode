import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Button from "../shared/Button";
import GradientText from "../shared/GradientText";
import MagneticEffect from "../shared/MagneticEffect";

const images = [
  "https://pbs.twimg.com/profile_images/1875305826887593987/8x4ZhIvO_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1898426478339207169/WM_XtHia_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1879075502356586496/V9wQzW7V_400x400.jpg",
];

const Hero = () => {
  return (
    <section className="pt-20 pb-8" id="home">
      <Container className="grid grid-cols-1 sm:grid-cols-[28rem] md:grid-cols-1 sm:justify-center pt-20 pb-12 md:pb-18">
        <MagneticEffect>
          <Badge className="justify-self-center pl-2 py-[7px] mb-5 md:mb-5.5 cursor-pointer">
            <div className="flex flex-none items-center -space-x-2">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  className="bg-neutral-800 size-6 ring-2 ring-neutral-900 rounded-full"
                />
              ))}
            </div>
            Trusted by 1.5 Million Learners
          </Badge>
        </MagneticEffect>

        <h1 className="text-4xl md:text-[5.5rem] mb-7.5 md:mb-10 flex flex-col gap-1.5 md:gap-1">
          <span className="self-center">Don’t Learn Alone.</span>
          <span>
            <GradientText>Code Together</GradientText> with
          </span>
          <span className="self-end">
            a <GradientText>Real Community.</GradientText>
          </span>
        </h1>

        <p className="max-w-xl justify-self-center md:text-xl text-center text-pretty leading-[1.6] mb-10 md:mb-14">
          Finding content is easy — real growth needs practice, collaboration,
          support, guidance, resilience, and consistency.
        </p>

        <div className="justify-self-center">
          <Button href="#cohorts" size="large">
            Start Learning Today
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
