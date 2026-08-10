"use client";

import { FormEvent, useState } from "react";
import { Eye, EyeOff, LockKeyhole, User } from "lucide-react";

const API_URL = "http://localhost:8080";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: usuario,
          password: senha
        }),
      });

      const data = await response.json();
      console.log("Resposta da API:", data.error);

      if (!response.ok) {
        setSuccess(false);
        throw new Error(data.error);
      }
      else {
        setSuccess(true);
      }

      // router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao realizar login"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#315da8] flex items-center justify-center px-4">
      <section className="w-full max-w-[430px] rounded-[28px] bg-[#fbf8fc] px-7 py-8 shadow-xl">

        <div className="text-center">
          <img
            src="/imagemlogin.png"
            alt="SysempTravel"
            className="mx-auto h-50 w-54 object-contain"
          />

          <h1 className="text-[38px] font-normal tracking-tight text-[#293346]">
            Sysemp Travel
          </h1>

          <h2 className="mt-2 text-lg font-bold text-[#293346]">
            Gerencial
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Entre na sua conta para continuar
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-10">

          {/* Usuário */}
          <div className="mb-4 flex h-[68px] items-center gap-3 rounded-xl bg-white px-4">
            <User className="h-5 w-5 text-gray-500" />

            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
              className="w-full bg-transparent text-gray-700 outline-none"
              required
            />
          </div>

          {/* Senha */}
          <div className="flex h-[68px] items-center gap-3 rounded-xl bg-white px-4">
            <LockKeyhole className="h-5 w-5 text-gray-500" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              className="w-full bg-transparent text-gray-700 outline-none"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          <button
            type="button"
            className="ml-auto mt-6 block text-sm font-bold text-[#303849]"
          >
            Esqueci minha senha
          </button>

          <button
            type="submit"
            disabled={loading}
            className="mt-7 h-[58px] w-full rounded-[17px] bg-[#315da8] text-[17px] font-bold text-white shadow-lg transition hover:bg-[#274e91] disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          {success && (
            <div role="alert" className="alert alert-success fixed right-5 top-5 z-50 w-auto shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Login Realizado com Sucesso!</span>
            </div>)}

          {error && (
            <div role="alert" className="alert alert-error fixed right-5 top-5 z-50 w-auto shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}
        </form>

        <div className="mt-10 flex justify-center gap-2 text-sm">
          <span className="text-gray-500">
            Não tem uma conta?
          </span>

          <button className="font-bold text-[#315da8]">
            Criar conta
          </button>
        </div>

      </section>
    </main>
  );
}