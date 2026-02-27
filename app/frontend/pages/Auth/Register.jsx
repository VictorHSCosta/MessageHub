import { Link, useForm } from '@inertiajs/react'
import { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'

export default function Register({ errors: serverErrors = {} }) {
  const { data, setData, post, processing, errors } = useForm({
    user: {
      email: '',
      password: '',
      password_confirmation: '',
    },
  })

  const submit = (e) => {
    e.preventDefault()
    post('/users')
  }

  const goToLogin = () => {
    const root = document.documentElement
    root.dataset.navDirection = 'backward'

    // Clear the navigation direction after this tick to avoid stale values
    setTimeout(() => {
      if (root.dataset.navDirection === 'backward') {
        delete root.dataset.navDirection
      }
    }, 0)
  }

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)

  // Mescla erros do servidor com erros do cliente
  const allErrors = { ...serverErrors, ...errors }

  return (
    <div className="flex min-h-screen w-full flex-col lg:h-screen lg:flex-row">
      <div className="flex h-56 w-full items-center justify-center bg-violet-200 sm:h-72 lg:h-screen lg:w-1/2">
        <img
          src="/login.png"
          className="h-40 w-40 object-cover sm:h-56 sm:w-56 lg:h-1/2 lg:w-1/2"
          alt="Ilustração de cadastro"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8 px-6 py-10 sm:px-8 lg:w-1/2 lg:gap-12 lg:px-10">
        <h2 className="text-center text-xl font-semibold capitalize text-violet-800 sm:text-2xl">
          Crie sua conta no MessageHub
        </h2>

        <div className="w-full max-w-sm">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-violet-900"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={data.user.email}
                onChange={(e) => setData('user', { ...data.user, email: e.target.value })}
                className="block w-full rounded-md border-0 text-violet-900 shadow-sm ring-1 ring-inset ring-violet-300 placeholder:text-violet-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 px-4 py-2"
              />
              {allErrors.email && <p className="mt-1 text-sm text-red-600">{allErrors.email[0]}</p>}
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-violet-900"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={data.user.password}
                onChange={(e) => setData('user', { ...data.user, password: e.target.value })}
                className="block w-full rounded-md border-0 text-violet-900 shadow-sm ring-1 ring-inset ring-violet-300 placeholder:text-violet-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 px-4 py-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 mt-1 text-sm text-violet-600 hover:text-violet-500"
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                aria-pressed={showPassword}
                aria-controls="password"
              >
                {showPassword ? <Eye className="h-4 w-4" /> : <EyeClosed className="h-4 w-4" />}
              </button>
              {allErrors.password && (
                <p className="mt-1 text-sm text-red-600">{allErrors.password[0]}</p>
              )}
            </div>

            <div className="relative">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-6 text-violet-900"
              >
                Confirmar Senha
              </label>
              <input
                id="password_confirmation"
                name="password_confirmation"
                type={showPasswordConfirmation ? 'text' : 'password'}
                autoComplete="new-password"
                required
                value={data.user.password_confirmation}
                onChange={(e) =>
                  setData('user', { ...data.user, password_confirmation: e.target.value })
                }
                className="block w-full rounded-md border-0 text-violet-900 shadow-sm ring-1 ring-inset ring-violet-300 placeholder:text-violet-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 px-4 py-2"
              />
              <button
                type="button"
                onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                className="absolute right-3 top-8 mt-1 text-sm text-violet-600 hover:text-violet-500"
                aria-label={showPasswordConfirmation ? 'Ocultar confirmação de senha' : 'Mostrar confirmação de senha'}
                aria-pressed={showPasswordConfirmation}
                aria-controls="password_confirmation"
              >
                {showPasswordConfirmation ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeClosed className="h-4 w-4" />
                )}
              </button>
              {allErrors.password_confirmation && (
                <p className="mt-1 text-sm text-red-600">{allErrors.password_confirmation[0]}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 disabled:bg-violet-300"
            >
              {processing ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-violet-900">
            Já tem uma conta?{' '}
            <Link
              href="/users/sign_in"
              className="font-semibold leading-6 text-violet-600 hover:text-violet-500"
              viewTransition
              onClick={goToLogin}
            >
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
