// frontend/entrypoints/inertia.js
import './application.css'
import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import LoginAndSignUpLayout from '../components/Layout/LoginLayout'
import SignInLayout from '../components/Layout/SignInLayout'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.jsx', { eager: true })
    const page = pages[`../pages/${name}.jsx`]

    if (!page?.default) {
      console.error(`Página ou default export não encontrado para: ${name}`)
      return page
    }

    // Define o layout se não existir um específico na página
    if (name === 'Auth/Login' || name === 'Auth/Register') {
      page.default.layout =
        page.default.layout ||
        ((pageComponent) => createElement(LoginAndSignUpLayout, { children: pageComponent }))
    } else {
      page.default.layout =
        page.default.layout ||
        ((pageComponent) => createElement(SignInLayout, { children: pageComponent }))
    }

    return page
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(createElement(App, props))
  },
})
