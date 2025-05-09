import Container from "../shared/Container";
import Badge from "../shared/Badge";
import FeatureCard from "../shared/FeatureCard";

const Features = () => {
  return (
    <section className="pt-20 pb-8" id="features">
      <Container className="pt-2 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={<i className="ri-building-line" />}
              title="Taught by Professionals"
              subtitle="Learn directly from top engineers and founders with real-world experience."
              className="lg:translate-x-4 lg:rounded-br-[2px]"
            />
            <FeatureCard
              icon={<i className="ri-user-star-line" />}
              title="Coding Hostels"
              subtitle="Join virtual hostels to study, collaborate, and vibe with fellow learners."
              className="lg:-translate-x-4 lg:rounded-br-[2px]"
            />
            <FeatureCard
              icon={<i className="ri-trophy-line" />}
              title="Bounties"
              subtitle="Win rewards for solving challenges, contributing to projects, and helping peers."
              className="lg:translate-x-4 lg:rounded-tr-[2px]"
            />
          </div>

          <div className="self-center mb-6 lg:mb-0 col-span-full lg:col-auto order-[-1] lg:order-[0]">
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
              className="lg:-translate-x-4 lg:rounded-bl-[2px]"
            />
            <FeatureCard
              icon={<i className="ri-team-line" />}
              title="Peer Code Reviews"
              subtitle="Improve faster with feedback from mentors and batchmates on your actual code."
              className="lg:translate-x-4 lg:rounded-bl-[2px]"
            />
            <FeatureCard
              icon={<i className="ri-lightbulb-line" />}
              title="Leet Lab"
              subtitle="Ace coding interviews with daily DSA problems, contests, and tracking."
              className="lg:-translate-x-4 lg:rounded-tl-[2px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
