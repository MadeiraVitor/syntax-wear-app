import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import GoogleIcon from "@/assets/images/google-icon.png";
import { Separator } from "../../components/Separator";

export const Route = createFileRoute("/_auth/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="bg-[#f5f5f5] h-screen w-full flex items-center justify-center p-5">
      <div className="w-112.5 bg-white p-10 rounded-[18px] shadow-md">
        <div className="flex flex-col">
          <Logo />

          <h2 className="font-bold text-[21px] mb-2">Entrar</h2>

          <p className="mb-3.5">Escolha seu método de login</p>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
            <img src={GoogleIcon} alt="Ícone do Google" className="w-5 h-5" />
            <span className="text-sm font-medium">Continuar com o Google</span>
          </button>

          <Separator />

          <LoginForm />

          <p className='text-sm text-gray-600 mt-6 text-center'>
                Ainda não possui conta? <a href="/signup" className='text-[#5433EB] hover:underline'>Cadastre-se</a>
            </p>
        </div>
      </div>
    </section>
  );
}
