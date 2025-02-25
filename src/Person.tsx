import { useState } from "react";

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries
}

export enum Countries {
  SL = "Sri Lanka",
  Brazil = "Brazil",
  France = "France",
}

export const Person = (props: Props) => {
  //   const [isShowInfo, setShowInfo] = useState<boolean>(false);
  const [personBio, setPersonBio] = useState<string | null>(null);

  //   const toggleInfo = () => {
  //     setShowInfo((prev) => !prev);
  //   };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };

  return (
    <div>
      {/* {isShowInfo && ( */}
      <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This person {props.isMarried ? "is married." : "is single."}</p>
        <p>This person is from {props.country}</p>
      </>
      {/* )} */}
      {/* <button onClick={toggleInfo}>Toggle Info</button> */}
      <p>
        {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
      </p>
      <input onChange={handleOnChange} />
    </div>
  );
};
