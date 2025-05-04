import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Tesimonial from "../components/sections/Testimonial";
import Cohorts from "../components/sections/Cohorts";
import Features from "../components/sections/Features";
import Topics from "../components/sections/Topics";
import Community from "../components/sections/Community";
import Banner from "../components/sections/Banner";

const Index = () => {
  return (
    <Layout title="ChaiCode">
      <Hero />
      <Tesimonial />
      <Cohorts />
      <Features />
      <Topics />
      <Community />
      <Banner />
    </Layout>
  );
};

export default Index;
