import TypeIt from "typeit-react";

const MyBanner = () => {
  //   const Type = (text) => {
  //     new TypeIt(text).pause(1000);
  //   };

  return (
    <div className="MyBanner">
      <h3>
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type("어려운게 아니라 익숙하지 않은거야 ")
              // .pause(750)
              // .delete(5)
              .pause(500)
              .type("절절포! 🔥");
            // Remember to return it!
            return instance;
          }}
        ></TypeIt>
      </h3>
    </div>
  );
};

export default MyBanner;
