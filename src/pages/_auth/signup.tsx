import { createFileRoute, Link } from '@tanstack/react-router'
import { RegisterForm } from '../../components/RegisterForm'
import { Logo } from '../../components/Logo'
import { Separator } from '../../components/Separator'
import { GoogleAuthButton } from '../../components/GoogleAuthButton'

export const Route = createFileRoute('/_auth/signup')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "SyntaxWear - Cadastro" }],
  }),
})

function RouteComponent() {
  return (
    <section className='min-h-screen w-full flex items-center justify-center bg-surface p-5'>
        <div className='w-112.5 bg-white rounded-2xl p-5 flex flex-col'>
            <Logo />
            <RegisterForm />
            <Separator />

            <GoogleAuthButton />

            <p className='text-sm text-gray-text mt-6 text-center'>
                Já tem uma conta? <Link to="/signin" className='text-accent hover:underline'>Entrar</Link>
            </p>
        </div>
    </section>
  )
}
