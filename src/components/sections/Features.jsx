import Badge from "../shared/Badge";
import Container from "../shared/Container";
import FeatureCard from "../shared/FeatureCard";

const Features = () => {
  return (
    <section className="pt-20 pb-8" id="features">
      <Container className="pt-2 pb-16">
        <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={<i className="ri-building-line" />}
              title="Taught by Professionals"
              subtitle="Learn directly from top engineers and founders with real-world experience."
              className="sm:translate-x-4 sm:rounded-br-[2px]"
            />
            <FeatureCard
              icon={<i className="ri-user-star-line" />}
              title="Coding Hostels"
              subtitle="Join virtual hostels to study, collaborate, and vibe with fellow learners."
              className="sm:-translate-x-4 sm:rounded-br-[2px]"
            />
            <FeatureCard
              icon={<i className="ri-trophy-line" />}
              title="Bounties"
              subtitle="Win rewards for solving challenges, contributing to projects, and helping peers."
              className="sm:translate-x-4 sm:rounded-tr-[2px]"
            />
          </div>

          <div className="self-center md:mb-0 mb-6 order-[1] sm:order-[0]">
            <Badge className="mb-4.5 mx-auto">Features</Badge>
            <h2 className="text-white text-2xl md:text-[2rem] text-center mb-2 sm:mb-2.5">
              Key Benefits of Cohorts
            </h2>
            <p className="max-w-[18rem] text-center text-pretty mx-auto">
              Cohorts are best way to learn because you finish the course in a
              timely manner
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={<i className="ri-artboard-line" />}
              title="Revision Classes"
              subtitle="Stay sharp with weekly revision sessions and topic refreshers."
              className="sm:-translate-x-4 sm:rounded-bl-[2px]"
            />
            <FeatureCard
              icon={<i className="ri-team-line" />}
              title="Peer Code Reviews"
              subtitle="Improve faster with feedback from mentors and batchmates on your actual code."
              className="sm:translate-x-4 sm:rounded-bl-[2px]"
            />
            <FeatureCard
              icon={<i className="ri-lightbulb-line" />}
              title="Leet Lab"
              subtitle="Ace coding interviews with daily DSA problems, contests, and tracking."
              className="sm:-translate-x-4 sm:rounded-tl-[2px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
