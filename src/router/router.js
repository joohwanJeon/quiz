import Vue from "vue";
import VueRouter from "vue-router";

import Main from '../pages/Main'
import Invite from '../pages/Invite'
import Answer from '../pages/Answer'
import QuizList from '../pages/QuizList'
import Test from '../pages/Test'
import Quiz2 from '../pages/Quiz2'
import BoardDetail from '../pages/BoardDetail'
import Routing from '../pages/Routing'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'invite',
        component: Invite
    },
    {
        path: '/main',
        name: 'main',
        component: Main
    },
    {
        path: '/answer',
        name: 'answer',
        component: Answer
    },
    {
        path: '/quizList',
        name: 'quizList',
        component: QuizList
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    },
    {
        path: '/hrefTargetChange',
        name: 'hrefTargetChange',
        component: Quiz2
    },
    {
        path: '/routing',
        name: 'routing',
        component: Routing
    },
    {
        path: '/boardDetail',
        name: 'boardDetail',
        component: BoardDetail,
        props: (route) => ({ boardId: route.query.id })
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;