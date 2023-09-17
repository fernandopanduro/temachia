import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  FacebookIcon,
  GoogleIcon,
  MicrosoftIcon,
} from "../../components/Icons";
import { auth } from "../../utils/firebase";

export const Login = () => {
  const facebookPrivider = new FacebookAuthProvider();
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookPrivider);
      console.log(result);
    } catch (err) {
      console.log("error:", err);
    }
  };

  const googlePrivider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googlePrivider);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <main className="flex justify-center items-center min-h-[100vh]">
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-center text-3xl">Bienvenido de nuevo</h1>
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center justify-start gap-3 px-3 py-3 rounded-sm border border-black/20 w-full transition-colors hover:bg-black/10"
            onClick={() => googleLogin()}>
            <GoogleIcon />{" "}
            <span className="text-base font-medium">Continuar con Google</span>
          </button>
          <button
            className="flex items-center justify-start gap-3 px-3 py-3 rounded-sm border border-black/20 w-full transition-colors hover:bg-black/10"
            onClick={() => facebookLogin()}>
            <FacebookIcon />{" "}
            <span className="text-base font-medium">
              Continuar con Facebook
            </span>
          </button>
          <button
            className="flex items-center justify-start gap-3 px-3 py-3 rounded-sm border border-black/20 w-full transition-colors hover:bg-black/10"
            onClick={() => googleLogin()}>
            <MicrosoftIcon />{" "}
            <span className="text-base font-medium">
              Continuar con Microsoft
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};
