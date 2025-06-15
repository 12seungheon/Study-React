import { useEffect } from "react";

function Even() {
  useEffect(() => {
    return () => {
      console.log("짝수 컴포넌트가 언마운트 되었습니다.");
    };
  }, []);
  return <div>현재 카운트는 짝수다.</div>;
}

export default Even;
