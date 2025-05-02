import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Tesimonial from "../components/sections/Testimonial";
import Cohorts from "../components/sections/Cohorts";
import Features from "../components/sections/Features";
import Community from "../components/sections/Community";

const Index = () => {
  return (
    <Layout title="ChaiCode">
      <Hero />
      <Tesimonial />
      <Cohorts />
      <Features />
      <Community />
    </Layout>
  );
};

export default Index;
