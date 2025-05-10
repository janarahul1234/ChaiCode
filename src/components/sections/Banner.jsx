import Container from "../shared/Container";

const Banner = () => {
  return (
    <section className="pt-20 pb-8 sm:px-6">
      <Container className="bg-linear-60 from-40% to-90% from-orange-500/90 to-orange-700/90 pt-2 pb-16 mx-0 max-[300px]:mx-0 sm:rounded-3xl">
        <div className="max-[300px]:mx-4 mx-6 mt-16 mb-8 sm:mb-5 flex flex-col items-center">
          <h1 className="max-w-[552px] text-[2rem] sm:text-5xl text-white text-center leading-[1.2] font-semibold mb-4 sm:mb-5">
            Learn anytime anywhere right from your pocket
          </h1>

          <p className="max-w-[456px] text-white text-center leading-[1.6] text-pretty mb-10">
            Take your coding journey anywhere with the ChaiCode app with
            courses, live sessions, and community in your pocket
          </p>

          <div className="mb-12 flex flex-wrap flex-col md:flex-row justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2.5">
              <span className="size-[34px] bg-white text-orange-500 flex justify-center items-center rounded-full">
                <i className="ri-wifi-off-line"></i>
              </span>
              <span className="text-white font-medium">
                Offline course access
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="size-[34px] bg-white text-orange-500 flex justify-center items-center rounded-full">
                <i className="ri-notification-2-line"></i>
              </span>
              <span className="text-white font-medium">
                Live session notifications
              </span>
            </div>

            <div className="flex items-center gap-2.5 ">
              <span className="size-[34px] bg-white text-orange-500 flex justify-center items-center rounded-full">
                <i className="ri-team-line"></i>
              </span>
              <span className="text-white font-medium">
                Revision while commuting
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-4">
            <a
              href="https://apps.apple.com/in/app/chaicode/id6504993143"
              target="_blank"
              className="sm:w-[218px] bg-white py-3.5 flex justify-center items-center gap-3.5 rounded-lg transition duration-300 ease-in-out hover:scale-105"
            >
              <i class="ri-app-store-line text-orange-500 text-4xl"></i>
              <div className="flex flex-col">
                <span className="text-sm text-neutral-600">Dowload on the</span>
                <span className="text-orange-500 font-semibold">App Store</span>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.chaicode.courses&hl=en_IN&pli=1"
              target="_blank"
              className="sm:w-[218px] bg-white text-neutral-950 py-3.5 flex justify-center items-center gap-3.5 rounded-lg transition duration-300 ease-in-out hover:scale-105"
            >
              <i class="ri-google-play-line text-orange-500 text-4xl"></i>
              <div className="flex flex-col">
                <span className="text-sm text-neutral-600">Get it on</span>
                <span className="text-orange-500 font-semibold">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
