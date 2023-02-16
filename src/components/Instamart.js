import React, { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-4 m-4">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visileSection, setVisibleSection] = useState("team");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio lectus, mattis vulputate tristique in, aliquam eget eros. In pellentesque augue eget ex aliquet finibus. Donec a posuere massa. Cras vel odio et eros facilisis ultricies a sit amet felis. Duis eu ornare libero, non pellentesque leo. Pellentesque eleifend hendrerit lacinia. Maecenas pretium elit vel dapibus tincidunt. Vivamus sit amet ipsum risus. Mauris tincidunt, felis ac rutrum cursus, ante urna consequat massa, ac aliquam ex ex sed neque"
        }
        isVisible={visileSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />

      <Section
        title={"teamsInstamart"}
        description={"The team has 50 instamart"}
        isVisible={visileSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />

      <Section
        title={"Carrers"}
        description={"careers"}
        isVisible={visileSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />

      {/* <AboutInstamart />
      <DetailsInstamart />
      <TeamInstamart />
      <ProductInstamart />
      <CareerInstamart /> */}
    </div>
  );
};

export default Instamart;
