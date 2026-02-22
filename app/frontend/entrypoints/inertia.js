// frontend/entrypoints/inertia.js
import './application.css'
import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from '../components/Layout'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.jsx', { eager: true })
    const page = pages[`../pages/${name}.jsx`]

    if (!page?.default) {
      console.error(`Página ou default export não encontrado para: ${name}`)
      return page
    }

    // Define o layout se não existir um específico na página
    page.default.layout = page.default.layout || ((pageComponent) => createElement(Layout, { children: pageComponent }))

    return page
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(createElement(App, props))
  },
})
