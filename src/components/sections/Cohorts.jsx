import Container from "../shared/Container";
import Card from "../shared/Card";
import Button from "../shared/Button";
import SectionHeader from "../shared/SectionHeader";

const cards = [
  {
    video: "https://www.youtube.com/embed/yG8JMlldoCE?si=5JDknhDYZ9q3YaI2",
    title: "Web Dev Cohort 1.0",
    description: "Ultimate guide to build software on web",
    startingDate: "Starts Jan 11, 2025",
    duration: "6 months",
    percentage: 22,
    originalPrice: 8999,
    discountPrice: 6999,
    btnLink: "https://courses.chaicode.com/learn/batch/about?bundleId=214297",
    isNew: true,
  },
  {
    video: "https://www.youtube.com/embed/Kjd-SWpe1do?si=3hZlGSHlmDIEVUry",
    title: "Full Stack Data Science 1.0",
    description: "From Python basics to project deployment",
    startingDate: "Starts April 12, 2025",
    duration: "6 months",
    percentage: 22,
    originalPrice: 8999,
    discountPrice: 6999,
    btnLink: "https://courses.chaicode.com/learn/batch/about?bundleId=227817",
    isNew: false,
  },
  {
    video: "https://www.youtube.com/embed/Fw3FezexzV0?si=0IZpXiGsLPAwIa3f",
    title: "Coding Hero 2025",
    description: "Our Community focused program for students",
    startingDate: "Starts Constantly going",
    duration: "Always running",
    percentage: 50,
    originalPrice: 599,
    discountPrice: 299,
    btnLink: "https://courses.chaicode.com/learn/batch/Coding-Hero-2025",
    isNew: true,
  },
  {
    video: "https://www.youtube.com/embed/oBLpqSHc3lA?si=VUvQOrRFDOn-h1Bk",
    title: "DevOps for Developers 1.0",
    description: "Perfect guide to get started with DevOps",
    startingDate: "Starts April 15, 2025",
    duration: "1-2 months",
    percentage: 38,
    originalPrice: 7999,
    discountPrice: 4999,
    btnLink: "https://courses.chaicode.com/learn/batch/about?bundleId=227963",
    isNew: false,
  },
  {
    video: "https://www.youtube.com/embed/VNb_LawBBWU?si=LC5_SSi44hrCvy9M",
    title: "GenAI with Python 1.0",
    description: "Development side of AI application",
    startingDate: "Starts April 7, 2025",
    duration: "1-2 months",
    percentage: 38,
    originalPrice: 7999,
    discountPrice: 4999,
    btnLink: "https://courses.chaicode.com/learn/batch/about?bundleId=227321",
    isNew: false,
  },
];

const Cohorts = () => (
  <section className="pt-20 pb-8" id="cohorts">
    <Container className="pt-2 pb-16">
      <SectionHeader badge="Cohorts" title="Join a Live Learning Cohort" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 mb-12">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>

      <Button
        variant="ghost"
        href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
        className="w-fit mx-auto"
      >
        View all cohorts
      </Button>
    </Container>
  </section>
);

export default Cohorts;
