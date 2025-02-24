// import { useState } from "react";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Props) => {
  //   const [isShowInfo, setShowInfo] = useState<boolean>(false);
//   const [isShowInfo, setShowInfo] = useState<string | null>(null);

  //   const toggleInfo = () => {
  //     setShowInfo((prev) => !prev);
  //   };

  return (
    <div>
      {/* {isShowInfo && (
        <>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>This person {props.isMarried ? "is married." : "is single."}</p>
        </>
      )} */}
      {/* <button onClick={toggleInfo}>Toggle Info</button> */}
      <p>{props.name} Bio: </p>
      <input />
    </div>
  );
};
