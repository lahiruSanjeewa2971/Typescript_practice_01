import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

interface User {
  name: string;
  age: number;
  isMarried: boolean;
}

export const User = (props: User) => {
  const { users } = useContext(UserContext);
  console.log("Users:", users);
  return (
    <div>
      <>
        {/* <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>This person {props.isMarried ? "is married." : "is single."}</p> */}

        {users !== null &&
          users.length > 0 &&
          users.map((user, index) => (
            <div key={index}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>This person {props.isMarried ? "is married." : "is single."}</p>
            </div>
          ))}
      </>
    </div>
  );
};
