import React, { useCallback, useMemo, useRef, useState } from "react";

// useMemo(()=>함수호출, [변경될 값])
// useEffect랑 비슷하게 생김
const getAverage = (numbers) => {
  console.log("평균값 계산중 ...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

export const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
    // 컴포넌트가 처음 렌더링될 때만 함수 생성
  }, []);
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      // 버튼을 누르고 나서 input으로 포커싱 되게 함
      inputEl.current.focus()
    },
    [number, list]
  );
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};
