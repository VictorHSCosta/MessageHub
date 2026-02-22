import { useForm } from '@inertiajs/react';

export default function Register({ errors: serverErrors = {} }) {
  const { data, setData, post, processing, errors } = useForm({
    user: {
      email: '',
      password: '',
      password_confirmation: '',
    }
  });

  const submit = (e) => {
    e.preventDefault();
    post('/users');
  };

  // Mescla erros do servidor com erros do cliente
  const allErrors = { ...serverErrors, ...errors };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Criar nova conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={data.user.email}
                onChange={e => setData('user', { ...data.user, email: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {allErrors.email && (
                <p className="mt-1 text-sm text-red-600">{allErrors.email[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Senha
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={data.user.password}
                onChange={e => setData('user', { ...data.user, password: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {allErrors.password && (
                <p className="mt-1 text-sm text-red-600">{allErrors.password[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-gray-900">
              Confirmar Senha
            </label>
            <div className="mt-2">
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                autoComplete="new-password"
                required
                value={data.user.password_confirmation}
                onChange={e => setData('user', { ...data.user, password_confirmation: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {allErrors.password_confirmation && (
                <p className="mt-1 text-sm text-red-600">{allErrors.password_confirmation[0]}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={processing}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400"
            >
              {processing ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Já tem uma conta?{' '}
          <a href="/users/sign_in" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}
