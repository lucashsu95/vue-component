import HomeView from '@/views/HomeView.vue'
import StudentList from '@/views/StudentList.vue'
import LoginView from '@/views/LoginView.vue'
import { ref, computed } from 'vue'
import NotFound from '@/views/NotFound.vue'
import ArticleView from '@/views/ArticleView.vue'

const currentPath = ref(window.location.pathname)

const baseUrl = '/vue-component'
const paths = Object.fromEntries(
  Object.entries({
    home: '/',
    studentList: '/student-list',
    loginView: '/login-view',
    articleView: '/article'
  }).map(([key, value]) => [key, baseUrl + value])
)
const routes = {
  [paths.home]: HomeView,
  [paths.studentList]: StudentList,
  [paths.loginView]: LoginView,
  [paths.articleView]: ArticleView
}
const currentView = computed(() => routes[currentPath.value] || NotFound)

const navigateTo = (path) => {
  currentPath.value = path
  window.history.pushState(null, '', path)
}

export { paths, currentView, currentPath, navigateTo }
