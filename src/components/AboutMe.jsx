import SocialIcons from "../components/SocialIcons";

const AboutMe = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center m-4 sm:m-10 p-6 sm:p-10 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] h-auto">
        <img
          src="https://pbs.twimg.com/profile_images/1885338567603298304/Oe3cqSts_400x400.jpg"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 shadow-2xs mb-4 sm:mb-0 sm:mr-8 border-4"
          alt="Joseph Tadesse"
        />
        <div className="flex flex-col justify-center text-center sm:text-left max-w-xs sm:max-w-md">
          <h1 className="text-xl sm:text-2xl font-bold">Joseph Tadesse</h1>
          <p className="text-sm sm:text-lg">
            Believer | Developer (Android & Web) | Junior Penetration Tester
          </p>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed">
            I am a passionate developer specializing in Android and Web
            development, and a junior penetration tester with a strong interest
            in cybersecurity. I graduated from INSA and was part of the 3rd
            batch in the Summer Camp program.
            <br />
            <br />
            Currently, I am pursuing my Software Engineering degree at Wolkite
            University, continuously improving my skills and working on
            innovative tech projects. I am also a believer in Christ, and my
            faith guides me in both my professional and personal life.
          </p>
          <SocialIcons />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default AboutMe;
