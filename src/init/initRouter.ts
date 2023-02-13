export const initRouter = () => {
  const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']

  list.forEach((routerMenth) => {
    uni.addInterceptor(routerMenth, {
      invoke(e) {
        const eb = beforeEach(e)
        return eb
      }
    })
  })

  // #ifdef H5
  window.addEventListener('hashchange', function () {
    let url = ''
    if (!location.hash) {
      url = location.pathname + location.search
    } else {
      url = location.hash.split('#')[1]
    }

    const eb = beforeEach({ url })

    if (eb.url === url) return

    location.replace(`${location.origin}${location.hash ? '/#' : ''}${eb.url}`)
  })
  window.onload = () => {
    let url = ''
    if (!location.hash) {
      url = location.pathname + location.search
    } else {
      url = location.hash.split('#')[1]
    }

    const eb = beforeEach({ url })

    if (eb.url === url) return

    location.replace(`${location.origin}${location.hash ? '/#' : ''}${eb.url}`)
  }
  // #endif
}

// 路由白名单
const whiteList = ['/pages/login/index']

function beforeEach(e) {
  return e
}
function afterEach(e) {
  return e
}
