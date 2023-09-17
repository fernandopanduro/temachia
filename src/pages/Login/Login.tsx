import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error("Credenciales incorractas");
      });
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
      <Toaster position="top-center" richColors />
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-bold text-center text-3xl">
            Bienvenido de nuevo
          </h1>
          <p>
            No tienes cuenta?{" "}
            <Link to={"/auth/register"} className="text-blue-800 font-bold">
              Registrate
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="mail" className="font-bold">
              Correo
            </label>
            <input
              id="mail"
              placeholder="nombre@empresa.com"
              onChange={e => setEmail(e.target.value)}
              className="p-2 bg-slate-200 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-bold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              onChange={e => setPassword(e.target.value)}
              className="p-2 bg-slate-200 rounded-md"
            />
          </div>
          <button
            onClick={signIn}
            className="p-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
            Entra a tu cuenta
          </button>
        </div>

        <div className="w-100 flex items-center gap-2">
          <div className="w-full bg-black/10 rounded-md h-[2px]"></div>
          <p className="text-center">Ó</p>
          <div className="w-full bg-black/10 rounded-md h-[2px]"></div>
        </div>

        <div className="flex flex-col gap-3">
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