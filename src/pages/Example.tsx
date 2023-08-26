import React from "react";

type ExampleProps = {
  name: string;
  mark: string;
  option?: string; // ?는 필수가 아니라는 의미
  onClick: (name: string) => void; // 아무것도 리턴하지 않는 함수라는 의미
};

const Example = ({ name, mark, option, onClick }: ExampleProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {option && <p>{option}</p>}
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

Example.defaultProps = { mark: "!" };

export default Example;
