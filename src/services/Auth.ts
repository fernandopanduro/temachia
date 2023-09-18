import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "sonner";
import { auth } from "../utils/firebase";

export const googleLogin = async () => {
  const googlePrivider = new GoogleAuthProvider();
  signInWithPopup(auth, googlePrivider)
    .then(res => console.log(res))
    .catch(err => console.log("error:", err));
};

export const facebookLogin = async () => {
  const facebookPrivider = new FacebookAuthProvider();
  signInWithPopup(auth, facebookPrivider)
    .then(res => console.log(res))
    .catch(err => console.log("error:", err));
};

export const createUserByEmail = async (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(res => console.log(res))
    .catch(err => {
      toast.error("El usuario ya esta registrado");
      console.error(err);
    });
};

export const signInbyEmail = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error("Credenciales incorrectas");
    });
};
