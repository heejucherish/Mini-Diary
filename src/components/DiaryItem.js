import React from "react";

import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const Btn = () => {
  return <button>상세보기</button>;
};

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const firstDate = new Date(parseInt(date)).toLocaleDateString();
  const strDate = new Date(parseInt(date)).toLocaleDateString("ko", {
    // year: "numeric",
    // month: "short",
    // day: "numeric",
    weekday: "short",
  });

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">
          {firstDate}({strDate})🐾
        </div>
        <div className="diary_content_preview">
          {content.length > 25 ? content.slice(0, 25) + `···` : content}
          <div>
            {" "}
            <button id="detailbtn">상세보기</button>
          </div>
        </div>
      </div>
      <div className="btn_wrapper">
        <MyButton onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
