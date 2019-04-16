const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path:'/about',
        component:(resolve)=> require(['./views/about.vue'],resolve)

    },
    {
        path:'/menu',
        component:(resolve)=> require(['./views/menu.vue'],resolve)
    },
    {
        path:'/test',
        component:(resolve)=> require(['./views/test.vue'],resolve)
    }
];
export default routers;
