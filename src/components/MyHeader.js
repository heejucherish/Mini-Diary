const MyHeader = ({ headText, leftChild, rightChild }) => {
  const url = "";
  const mon = headText.slice(-4);

  const img = process.env.PUBLIC_URL + "/assets/free-icon-dog-194177.png";

  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">
        {headText} <img src={`${img}`} />
      </div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
