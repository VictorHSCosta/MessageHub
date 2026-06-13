import { application } from "./application"

const controllers = import.meta.glob("./**/*_controller.js", { eager: true })
const componentControllers = import.meta.glob("../../components/**/controller.js", { eager: true })

function controllerName(path) {
  if (path.startsWith("../../components/")) {
    return path
      .replace("../../components/", "")
      .replace("/controller.js", "")
      .replaceAll("_", "-")
      .replaceAll("/", "--")
  }

  return path
    .replace("./", "")
    .replace("_controller.js", "")
    .replaceAll("_", "-")
    .replaceAll("/", "--")
}

Object.entries({ ...controllers, ...componentControllers }).forEach(([path, controller]) => {
  application.register(controllerName(path), controller.default)
})
