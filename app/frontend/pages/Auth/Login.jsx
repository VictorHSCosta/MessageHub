import { useForm , Link } from '@inertiajs/react';
import { useState } from 'react';
import { Eye ,  EyeClosed } from 'lucide-react';

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

  const goToRegister = () => {
    document.documentElement.dataset.navDirection = 'forward';
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-between w-full h-screen">
      <div className='h-screen w-1/2 bg-sky-200 flex items-center justify-center'>
        <img src="/login.png" className="w-1/2 h-1/2 object-cover" alt="Ilustração de login" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 gap-12
      ">
          <h2 className="text-2xl capitalize font-semibold text-sky-800">
            Encontre seus amigos no MessageHub
          </h2>
        

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-sky-900">Email</label>
              <input
                type="email"
                value={data.user.email}
                onChange={e => setData('user', { ...data.user, email: e.target.value })}
                className="block w-full rounded-md border-0  text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4 py-2"
              />
              {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium leading-6 text-sky-900">Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                value={data.user.password}
                onChange={e => setData('user', { ...data.user, password: e.target.value })}
                className="block w-full rounded-md border-0  text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4 py-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-sky-600 hover:text-sky-500 mt-1 absolute right-3 top-8"
              >
                {showPassword ? <EyeClosed className="w-4 h-4" /> : <Eye className="w-4 h-4" /> }
              </button>
              {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Entrar
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-sky-900">
            Não tem uma conta?{' '}
            <Link
              href="/users/sign_up"
              className="font-semibold leading-6 text-sky-600 hover:text-sky-500"
              viewTransition
              onClick={goToRegister}
            >
              Cadastre-se
            </Link>
          </p>
          </div>
        </div>
      </div>
  );
}
