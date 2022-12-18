import TypeIt from "typeit-react";

const MyBanner = () => {
  //   const Type = (text) => {
  //     new TypeIt(text).pause(1000);
  //   };

  const random = [
    "어려운게 아니라 익숙하지 않은거야.🍀",
    "오늘 고생 했어!",
    "조금만 더 힘내!🦄",
    "할 수 있어!👊",
    "오늘도 잘 버텼다.🎁",
    "오늘 하루는 어땠어?",
    "절절포🔥",
    "맛있는거 먹자🍗",
    "푹 잘자😴",
  ];

  return (
    <div className="MyBanner">
      <h4>
        <TypeIt
          getBeforeInit={(instance) => {
            instance.type(random[Math.floor(Math.random() * random.length)]);
            // .pause(750)
            // .delete(5)

            // Remember to return it!
            return instance;
          }}
        ></TypeIt>
      </h4>
    </div>
  );
};

export default MyBanner;
