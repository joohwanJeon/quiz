import Vue from "vue";
import VueRouter from "vue-router";

import Main from '../pages/Main'
import Answer from '../pages/Answer'
import QuizList from '../pages/QuizList'
import Test from '../pages/Test'
import Quiz2 from '../pages/Quiz2'
import BoardDetail from '../pages/BoardDetail'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
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