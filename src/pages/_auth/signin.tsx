import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'

export const Route = createFileRoute('/_auth/signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section>
        <h1>Rota de login</h1>
        <LoginForm />
    </section>
  )
}
