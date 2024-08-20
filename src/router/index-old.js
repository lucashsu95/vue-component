import HomeView from '@/views/HomeView.vue'
import StudentList from '@/views/StudentList.vue'
import LoginView from '@/views/LoginView.vue'
import { ref, computed } from 'vue'

const currentPath = ref(window.location.pathname)

const routes = {
  '/': { component: HomeView, name: '首頁' },
  '/student-list': { component: StudentList, name: '學生列表' },
  '/login-view': { component: LoginView, name: '登入頁面' }
}

const paths = Object.fromEntries(Object.entries(routes).map(([path, { name }]) => [name, path]))

const currentView = computed(() => routes[currentPath.value]?.component || 'NotFound')

const navigateTo = (path) => {
  history.pushState(null, '', path)
  currentPath.value = path
}

export { paths, currentView, currentPath, navigateTo }
