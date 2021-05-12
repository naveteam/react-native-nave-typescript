import React, { FC, useState, useEffect, useContext, createContext } from 'react';

import { getToken, clearToken } from 'src/utils';

interface User {}

interface CredentialsParams {
  username: string;
  password: string;
}

type ContextProps = {
  user: User | null | undefined;
  isFetchingUser: boolean;
  isFetchingToken: boolean;
  setUser: Function;
  login: (credentials: CredentialsParams) => Promise<void>;
  logout: () => void;
};

const UserContext = createContext({} as ContextProps);

const useUser: () => ContextProps = () => useContext(UserContext);

const UserProvider: FC = ({ children }) => {
  const [isFetchingUser, setIsFetchingUser] = useState<boolean>(true);
  const [isFetchingToken, setIsFetchingToken] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>();

  const fetchUser: () => Promise<void> = async () => {
    const token = await getToken();

    setIsFetchingUser(true);

    try {
      if (token) {
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetchingUser(false);
    }
  };

  const login: (credentials: CredentialsParams) => Promise<void> = async credentials => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const logout: () => Promise<void> = async () => {
    try {
      setUser(null);
      await clearToken();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isFetchingUser,
        isFetchingToken,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
