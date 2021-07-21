declare module "@types" {
  /* auth */
  interface Auth {
    token: string;
  }

  type useAuthType = {
    signIn: (body: any) => Promise<{ success: boolean; message?: string }>;
    signOut: () => void;
  };

  /* context */
  interface AuthContextType {
    auth: Auth | undefined;
    useAuth: useAuthType;
  }

  /* reducer */
  type AuthActionType = "SIGN_IN" | "SIGN_OUT";

  type AuthReducer = (
    state: Auth | undefined,
    action: { type: AuthActionType; auth?: Auth }
  ) => Auth | undefined;
}
