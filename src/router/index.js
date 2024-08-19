import Home from '@/views/Home.vue';
import StudentList from '@/views/StudentList.vue';
import LoginView from '@/views/LoginView.vue';
import { ref, computed } from 'vue';
import NotFound from '@/views/NotFound.vue';

const currentPath = ref(window.location.pathname);

const paths = {
    home: '/',
    studentList: '/student-list',
    loginView: '/login-view',
}

const routes = {
    [paths.home]: Home,
    [paths.studentList]: StudentList,
    [paths.loginView]: LoginView,
}

const currentView = computed(() => routes[currentPath.value] || NotFound);

const navigateTo = (path) => {
    window.history.pushState(null, '', path);
    currentPath.value = path;
};

export { paths, currentView, currentPath, navigateTo };