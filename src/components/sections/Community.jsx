import users from "../../assets/imgs/users.png";
import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Button from "../shared/Button";

const Community = () => {
  return (
    <section className="pt-20 pb-8" id="community">
      <Container className="pt-2 pb-16 flex flex-col sm:flex-row-reverse gap-14 sm:gap-16">
        <div className="sm:basis-[40%] self-center">
          <Badge className="mb-4.5 mx-auto sm:mx-0">Community</Badge>
          <h2 className="text-white text-2xl md:text-[2rem] text-center sm:text-left mb-3 sm:mb-4">
            Alumni Network and <br /> Job listings
          </h2>
          <p className="text-pretty text-center sm:text-left leading-[1.6] mb-12">
            The alumni network you always wanted — connect, collaborate, build
            projects, and join hackathons together.
            <br />
            <br />
            Our HR team also post regular job updates that you can apply
            directly whenever you are ready.
          </p>

          <Button href="https://discord.com/invite/WDrH3zuWFb" className="w-fit mx-auto sm:mx-0">Join our Community</Button>
        </div>

        <div className="sm:basis-[50%]">
          <img src={users} alt="users" />
        </div>
      </Container>
    </section>
  );
};

export default Community;
