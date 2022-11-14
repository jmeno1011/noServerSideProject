import { useState } from "react";
import { Icon } from "@iconify/react";
import "./ClipBoard.css";

const ClipBoard = () => {
  const pre_text = "복사 할 내용 1";
  const [initext, setInitext] = useState("복사 할 내용 2");
  const [visual, setVisual] = useState(false);
  const [visual2, setVisual2] = useState(false);

  const copy = (i) => {
    if (i === 0) {
      navigator.clipboard.writeText(pre_text);
      setVisual(true);
      setTimeout(() => {
        setVisual(false);
      }, 1000);
    } else if (i === 1) {
      navigator.clipboard.writeText(initext);
      setVisual2(true);
      setTimeout(() => {
        setVisual2(false);
      }, 1000);
    }
  };
  return (
    <div>
      <div className="copy-area">
        <pre className="copy-area-pre">{pre_text}</pre>
        <div className="copy-icon-wrapper" onClick={() => copy(0)}>
          <Icon
            icon="fluent:copy-16-regular"
            style={{ fontSize: 16 }}
            name="copy1"
          />
        </div>
        <span className={`alert-text ${visual ? "" : "hidden"}`}>Copied!</span>
      </div>
      <div className="copy-area">
        <input
          type={"text"}
          className="copy-area-input"
          value={initext}
          onChange={(e) => {
            setInitext(e.target.value);
          }}
        />
        <div className="copy-icon-wrapper" onClick={() => copy(1)}>
          <Icon icon="fluent:copy-16-regular" style={{ fontSize: 16 }} />
        </div>
        <span className={`alert-text ${visual2 ? "" : "hidden"}`}>
          Copied!
        </span>
      </div>
    </div>
  );
};

export default ClipBoard;
