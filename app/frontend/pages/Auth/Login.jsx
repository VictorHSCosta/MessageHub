import { useForm } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    user: {
      email: '',
      password: '',
      remember_me: false,
    }
  });

  const submit = (e) => {
    e.preventDefault();
    post('/users/sign_in');
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Entrar na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <input
                type="email"
                value={data.user.email}
                onChange={e => setData('user', { ...data.user, email: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
              <input
                type="password"
                value={data.user.password}
                onChange={e => setData('user', { ...data.user, password: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Não tem uma conta?{' '}
            <a href="/users/sign_up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
  );
}
