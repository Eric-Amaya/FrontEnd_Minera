"use client";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
import { useRouter } from "next/navigation";
import MiLogo from "src/components/logo";
import Boton from "src/components/boton";

<<<<<<< HEAD
=======

>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
const Home = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isButtonDisabled = () => {
<<<<<<< HEAD
    return !username || !password || !validateEmail(username);
  };

  useEffect(() => {
    // Obtener el rol del usuario desde el almacenamiento local
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserRole(parsedUser.role);
    }
  }, []);
=======
    return (!username || !password || !validateEmail(username)); 
  }  
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Debe completar todos los campos");
      return;
    }
<<<<<<< HEAD

    const data = {
      email: username,
=======
    const data = {
      name: username,
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
      password: password,
    };

    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost:3001/auth/login", {
=======
      const response = await fetch("http://localhost:3000/auth/login", {
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        if (result.token) {
          localStorage.setItem("token", result.token);
<<<<<<< HEAD
          localStorage.setItem("user", JSON.stringify(result.user));

          setUserRole(result.user.role);
=======
          localStorage.setItem("user", JSON.stringify(result.User));

          if (userRole === "admin") {
            router.push("/admin/inicio");
          } else if (userRole === "user") {
            router.push("/user/inicio");
          } else {
            router.push("/unauthorized");
          }
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
        } else {
          setError("Credenciales inválidas");
        }
      } else {
<<<<<<< HEAD
        setError("Error en la solicitud");
=======
        throw new Error("Error en la solicitud");
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Ocurrió un error en el servidor");
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    // Observar cambios en userRole para redirigir correctamente
    if (userRole === "admin") {
      router.push("/adm/inicio");
    } else if (userRole === "user") {
      router.push("/user/inicio");
    } else {
      setError("Usuario no válido");
    }
  }, [userRole]);

=======
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
  const handleForgotPassword = () => {
    router.push("/olvidar_contrasena");
  };

  const handleRequestAccess = () => {
    router.push("/solicitar_acceso");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
<<<<<<< HEAD
//hola
=======

>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
  return (
    <div>
      <title>Minerales Raros S.A.</title>
      <>
        <MiLogo />
      </>   
      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-300 px-12 py-16 mt-52 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mt-1 mb-8">
            Plataforma de Reportes
          </h2>
          <p className="text-lg font-semibold mt-1 mb-4">
            Bienvenido, ingrese sus datos.
          </p>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full border-2 border-gray-400 hover:border-gray-600 rounded-xl p-3 mt-1 focus:outline-none"
              placeholder="Ingrese su Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              Contraseña
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full border-2 border-gray-400 hover:border-gray-600 rounded-xl p-3 mt-1 focus:outline-none"
                placeholder="Ingrese su contraseña"
              />
              <button
                className="bg-gray-300 rounded-xl px-3 ml-2 mt-4 focus:outline-none"
                onClick={toggleShowPassword}
              >
<<<<<<< HEAD
                {showPassword ? <Boton ruta={"ojo-abierto"} /> : <Boton ruta={"cerrar-ojo"} />}
=======
                {showPassword ? <Boton ruta = {"ojo-abierto"}></Boton> : <Boton ruta = {"cerrar-ojo"}></Boton>}
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-2 rounded font-semibold"
<<<<<<< HEAD
              onClick={handleSubmit}
=======
              onClick={() => window.location.href = '/adm/inicio'}
>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
              disabled={isButtonDisabled()}
            >
              Enviar
            </button>
            <div>
              <button
                className="text-blue-600 hover:text-blue-800 text-base font-medium mt-1"
                onClick={handleForgotPassword}
              >
                Olvidé mi contraseña
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <p className="font-medium text-base">¿No tiene una cuenta?</p>
            <button
              className="text-blue-600 hover:text-blue-800 text-base font-medium ml-4"
              onClick={handleRequestAccess}
            >
              Solicitar acceso
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
<<<<<<< HEAD
=======


>>>>>>> 8cc095d5d05435838790a71127415b9a0e076f7f
