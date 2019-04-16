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

    }
];
export default routers;
