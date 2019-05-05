import { constantRoutes } from '@/router'
import { getMenu } from '@/api/menu'
import { getRoleMenu } from '@/api/menu'
import Layout from '@/layout'

const _import = (path, callback) => {
  import(`@/views${path}/index.vue`).then(res => {
    callback && callback(res.default)
  })
}
/**
 * Filter asynchronous routing tables
 * @param routes asyncRoutes
 */
export function filterAsyncRoutes(routes) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    const getChildren = (data, islev1 = true) => {
      if (!data) return
      data.forEach((child, i) => {
        const childrenComponentPath = (child.meta && child.meta.component) || ''
        if (i === 0 && islev1 === true) {
          tmp.redirect = tmp.path + '/' + child.path
        }
        if (childrenComponentPath) {
          _import(childrenComponentPath, (res) => {
            child['component'] = res
          })
        }
        if (child.children && child.children.length) getChildren(child.children, false)
      })
    }
    tmp.component = Layout
    getChildren(tmp.children)
    res.push(tmp)
  })
  return res
}

const state = {
  routes: [],
  addRoutes: [],
  btnPermission: ''
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  SET_BTN_PERMISSION: (state, permission) => {
    state.btnPermission = permission
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      getRoleMenu().then(res => console.log(res))
      const accessedRoutes = filterAsyncRoutes(getMenu)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
