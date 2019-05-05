import request from '@/utils/request'

export function getRoleMenu() {
  return request({
    url: '/sxyc-admin/interface/user/getRoleMenu',
    method: 'get',
    params: { loginname: 's001' }
  })
}
export const getMenu = [
  {
    path: '/example',
    name: 'Example',
    meta: {
      title: '模块',
      icon: 'example'
    },
    children: [{
      path: 'table-demo',
      name: 'table-demo',

      meta: {
        title: '表格',
        icon: 'table',
        roles: 'table:permission:create,table:permission:update',
        component: '/modules/table-demo'
      }
    },
    {
      path: 'table-tree',
      name: 'table-tree',

      meta: {
        title: '综合表格',
        component: '/modules/table-tree',
        icon: 'table'

      }
    }, {
      path: 'vue-swiper',
      name: 'vue-swiper',

      meta: {
        title: '图片预览',
        component: '/modules/vue-swiper',
        icon: 'table'

      }
    },
    {
      path: 'tree',
      name: 'Tree',

      meta: {
        title: '树',
        component: '/tree',
        icon: 'tree'
      }
    }, {
      path: 'table',
      name: 'Table',

      meta: {
        title: '综合',
        component: '/table',
        icon: 'table'
      }
    }
    ]
  },

  {
    path: '/nested',

    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        meta: {
          component: '/nested/menu1', // Parent router-view
          title: 'Menu1'
        },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            meta: {
              component: '/nested/menu1/menu1-1',
              title: 'Menu1-1'
            }
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            meta: {
              component: '/nested/menu1/menu1-2',
              title: 'Menu1-2'
            },
            children: [{
              path: 'menu1-2-1',
              name: 'Menu1-2-1',
              meta: {
                component: '/nested/menu1/menu1-2/menu1-2-1',
                title: 'Menu1-2-1'
              }
            },
            {
              path: 'menu1-2-2',
              name: 'Menu1-2-2',
              meta: {
                component: '/nested/menu1/menu1-2/menu1-2-2',
                title: 'Menu1-2-2'
              }
            }
            ]
          },
          {
            path: 'menu1-3',
            name: 'Menu1-3',
            meta: {
              component: '/nested/menu1/menu1-3',
              title: 'Menu1-3'
            }
          }
        ]
      },
      {
        path: 'menu2',
        meta: {
          component: '/nested/menu2',
          title: 'menu2'
        }
      }
    ]
  },

  {
    path: '/sys',
    redirect: '/sys/sys-user',
    name: 'System',
    meta: {
      title: '平台管理',
      icon: 'example'
    },
    children: [{
      path: 'sys-user',
      name: 'sys-user',
      meta: {
        component: '/sysindex/sys-user',
        title: '角色管理',
        icon: 'peoples'
      }
    },
    {
      path: 'sys-menu',
      name: 'sys-menu',
      meta: {
        component: '/sysindex/sys-menu',
        title: '菜单管理',
        icon: 'documentation'

      }
    }]
  },

  {
    path: 'external-link',
    children: [{
      path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
      meta: {
        title: 'External Link',
        icon: 'link'
      }
    }]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

