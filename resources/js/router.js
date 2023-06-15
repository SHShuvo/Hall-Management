import VueRouter from 'vue-router'

const routes = [
    { 
        path:'/', 
        component: () => import("./components/Landing"),
        name: "landing",
        children:[
            
        ]
    },
    {
        path:'/provost', 
        component: () => import("./components/Provost/Provost"),
        children:[
            {
                path:'', 
                component: () => import("./components/Provost/Dashboard/Dashboard"),
                name: "provost_dashboard",
            },
            {
                path:'add-student', 
                component: () => import("./components/User/Students/Students"),
                name: "add_student",
            },
            {
                path:'add-admin', 
                component: () => import("./components/User/Admins/Admins"),
                name: "add_admin",
            },
        ],
        beforeEnter: (to, from, next) => {
            let user_role = localStorage.getItem('user_role');
            if (user_role == 1) {
              next();
            } 
            else {
              next("/");
            }
        },
    },
    {
        path:'/admin', 
        component: () => import("./components/Admin/Admin"),
        children:[
            {
                path:'', 
                component: () => import("./components/Admin/Dashboard/Dashboard"),
                name: "admin_dashboard",
            },
            {
                path:'add-student', 
                component: () => import("./components/User/Students/Students"),
                name: "add_student_admin",
            },
            {
                path:'room', 
                component: () => import("./components/Operation/Room/Room"),
                name: "add_room_admin",
            },
            {   
                path:'department', 
                component: () => import("./components/Operation/Department/Department"),
                name: "add_department_admin",
            },
            {   
                path:'payment', 
                component: () => import("./components/Operation/Payments/Payments"),
                name: "payments_admin",
            }
        ],
        beforeEnter: (to, from, next) => {
            let user_role = localStorage.getItem('user_role');
            if (user_role == 2) {
              next();
            } 
            else {
              next("/");
            }
        },
    },
    {
        path:'/student', 
        component: () => import("./components/Student/Student"),
        children:[
            {
                path:'', 
                component: () => import("./components/Student/Profile/Profile"),
                name: "student_profile",
            },
            {
                path:'payment', 
                component: () => import("./components/Student/History/History"),
                name: "student_payment",
            },
            {
                path:'certificate', 
                component: () => import("./components/Student/Certificate/Certificate"),
                name: "student_certificate",
            },
            {
                path:'migration', 
                component: () => import("./components/Student/Migration/Migration"),
                name: "student_migration",
            },
        ],
        beforeEnter: (to, from, next) => {
            let user_role = localStorage.getItem('user_role');
            if (user_role == 3) {
              next();
            } 
            else {
              next("/");
            }
        },
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;