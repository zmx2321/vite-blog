# react积累-1

## useState的用法
```js
import { useState } from "react";

const Demo = () => {
  const [num, setNum] = useState(0);
  const handle = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div>{num}</div>
      <button onClick={handle}>新增</button>
    </>
  );
};
export default Demo;
```
