import Home from '@/views/Home.vue';
import StudentList from '@/views/StudentList.vue';
import LoginView from '@/views/LoginView.vue';
import { ref, computed } from 'vue';

const currentPath = ref(window.location.pathname);

const routes = {
    '/': { component: Home, name: 'Home' },
    '/student-list': { component: StudentList, name: 'StudentList' },
    '/login-view': { component: LoginView, name: 'LoginView' },
};

const paths = Object.fromEntries(
    Object.entries(routes).map(([path, { name }]) => [name, path])
);

const currentView = computed(() => routes[currentPath.value]?.component || 'NotFound');

const navigateTo = (path) => {
    history.pushState(null, '', path);
    currentPath.value = path;
};

export { paths, currentView, currentPath, navigateTo };
