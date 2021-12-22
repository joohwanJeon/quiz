import Vue from "vue";
import VueRouter from "vue-router";

import Main from '../pages/Main'
import Answer from '../pages/Answer'
import QuizList from '../pages/QuizList'
import Test from '../pages/Test'
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
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;