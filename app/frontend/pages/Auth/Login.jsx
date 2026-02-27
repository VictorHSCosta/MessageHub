import { useForm, Link } from '@inertiajs/react'
import { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    user: {
      email: '',
      password: '',
      remember_me: false,
    },
  })

  const submit = (e) => {
    e.preventDefault()
    post('/users/sign_in')
  }

  const goToRegister = () => {
    document.documentElement.dataset.navDirection = 'forward'
  }

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col lg:h-screen lg:flex-row">
      <div className="flex h-56 w-full items-center justify-center bg-cyan-200 sm:h-72 lg:h-screen lg:w-1/2">
        <img
          src="/login.png"
          className="h-40 w-40 object-cover sm:h-56 sm:w-56 lg:h-1/2 lg:w-1/2"
          alt="Ilustração de login"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8 px-6 py-10 sm:px-8 lg:w-1/2 lg:gap-12 lg:px-10">
        <h2 className="text-center text-xl font-semibold capitalize text-cyan-800 sm:text-2xl">
          Encontre seus amigos no MessageHub
        </h2>

        <div className="w-full max-w-sm">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-cyan-900">Email</label>
              <input
                type="email"
                value={data.user.email}
                onChange={(e) => setData('user', { ...data.user, email: e.target.value })}
                className="block w-full rounded-md border-0 text-cyan-900 shadow-sm ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 px-4 py-2"
              />
              {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium leading-6 text-cyan-900">Senha</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={data.user.password}
                onChange={(e) => setData('user', { ...data.user, password: e.target.value })}
                className="block w-full rounded-md border-0 text-cyan-900 shadow-sm ring-1 ring-inset ring-cyan-300 placeholder:text-cyan-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 px-4 py-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-cyan-600 hover:text-cyan-500 mt-1 absolute right-3 top-8"
              >
                {showPassword ? <Eye className="w-4 h-4" /> : <EyeClosed className="w-4 h-4" />}
              </button>
              {errors.password && (
                <div className="text-red-500 text-xs mt-1">{errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Entrar
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-cyan-900">
            Não tem uma conta?{' '}
            <Link
              href="/users/sign_up"
              className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
              viewTransition
              onClick={goToRegister}
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
