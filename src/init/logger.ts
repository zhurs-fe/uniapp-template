const fns = ['log']

export const initLog = () => {
  for (const fn of fns) {
    console[fn] = (function (orilogFunc) {
      return function (...log) {
        if (!import.meta.env.VITE_ENABLE_LOG) return
        try {
          orilogFunc.call(console, ...log)
        } catch (error) {
          console.error('console error: ', error)
        }
      }
    })(console[fn])
  }
}
