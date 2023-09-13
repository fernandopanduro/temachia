import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";

export const Login = () => {
  const googlePrivider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googlePrivider);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <h1>Join Today</h1>
      <div>
        <h2>Sign in with one of the providers </h2>
      </div>
      <div>
        <button onClick={() => googleLogin()}>Sign in with Google</button>
        <button className="color-red" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
