import { Auth, AuthContextType, AuthReducer, useAuthType } from "@types";
import React from "react";
import { Store } from "@utils";

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("Cannot find AuthContext");

  return context;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /* 로컬 Store에서 auth 가져오기 */
  React.useEffect(() => {
    (async () => {
      const authToken: Auth = await Store.getItemAsync("authToken");
      if (!!authToken) {
        dispatch({ type: "SIGN_IN", auth: authToken });
      }
    })();
  }, []);

  /* reducer */
  const reducer: AuthReducer = (_, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return action.auth;
      case "SIGN_OUT":
        return undefined;
    }
  };
  const [auth, dispatch] = React.useReducer(reducer, undefined);

  /* auth method */
  const useAuth: useAuthType = React.useMemo(
    () => ({
      /**
       * 추후애 body를 통한 통신 코드 작성 필요
       */
      signIn: async (body) => {
        // fake login
        const authToken = { token: `barzer asdfasdf` };

        if (!!!authToken) {
          return { success: false, message: "" };
        }

        Store.setItem("authToken", authToken);
        dispatch({ type: "SIGN_IN", auth: authToken });

        return { success: true };
      },
      signOut: () => {
        Store.deleteItem("authToken");
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ auth, useAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
