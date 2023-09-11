import { Team } from "../components";
import { teamsDetails } from "../constants";

const TeamComponent = () => {
  return (
    <section className="container   mx-auto md:px-6">
      <div className="text-center tex-PJ">
        <p className="text-[#ff44ec] text-base font-semibold leading-normal">
          We're hiring!
        </p>
        <h2 className="mb-6 text-gray-900 text-4xl font-semibold leading-[44px]">
          Meet Our Team
        </h2>
        <p className="md:w-[60%]  mx-auto text-center text-gray-500 lg:text-xl font-normal leading-[30px]  sm:text-sm max-sm:px-8">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
      </div>

      <div className="container mt-24 mx-auto md:px-6 text-center text-PJ">
        <div className="lg:gap-xl-12 grid lg:px-16 xl:px-32 px-0 gap-x-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
          {teamsDetails.map((item) => (
            <Team key={item.name} {...item} />
          ))}
          
        </div>
      </div>
    </section>
  );
};
export default TeamComponent;
