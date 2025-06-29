import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase/appConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export default function FormIniciarSesion() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [firebaseError, setFirebaseError] = useState("");

  const onSubmit = async (data) => {
    setFirebaseError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      const userRef = doc(db, "usuarios", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        // Si no existe, crearlo por seguridad
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          createdAt: new Date()
        });
      }

      alert("¡Inicio de sesión exitoso!");
      window.location.reload();
    } catch (error) {
      setFirebaseError("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {firebaseError && <div className="alert alert-danger">{firebaseError}</div>}

      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          {...register("email", {
            required: "Correo requerido",
            pattern: { value: /^\S+@\S+$/i, message: "Correo inválido" }
          })}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          {...register("password", {
            required: "Contraseña requerida",
            minLength: { value: 6, message: "Mínimo 6 caracteres" }
          })}
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>

      <button type="submit" className="btn btn-success w-100">Iniciar sesión</button>
    </form>
  );
}