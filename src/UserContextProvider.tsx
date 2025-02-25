import { createContext, useEffect, useState } from "react";

export interface UserType {
  name: string;
  age: number;
  isMarried: boolean;
}

interface UserContextType {
  users: UserType[] | null;
  addUser: (user: UserType) => null;
  updateUser: (id: string) => null;
  deleteUser: (id: string) => null;
}

const contextInitialValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
  children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState<UserType[] | null>(null);

  useEffect(() => {
    setUsers([
      {
        name: "Test 1",
        age: 22,
        isMarried: false,
      },
    ]);
  }, []);

  const addUser = (user: UserType) => null;
  const updateUser = (id: string) => null;
  const deleteUser = (id: string) => null;

  return <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>{props.children}</UserContext.Provider>;
};
