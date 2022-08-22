import config from '~/config'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import Courses from '~/pages/Courses'
import Course from '~/pages/Course'
import Forum from '~/pages/Forum'
import Profile from '~/pages/Profile'
import TeacherForm from '~/pages/TeacherForm'
import UploadCourse from '~/pages/UploadCourse'
import ManageCourse from '~/pages/ManageCourse'
import Articles from '~/pages/Articles'
import Post from '~/pages/Post'
import Search from '~/pages/Search'

const publicRoutes = [
    {
        path: config.routes.home, component: Home
    },
    {
        path: config.routes.login, component: Login
    },
    {
        path: config.routes.register, component: Register
    },
    {
        path: config.routes.courses, component: Courses
    },
    {
        path: config.routes.course, component: Course
    },
    {
        path: config.routes.forum, component: Forum
    },
    {
        path: config.routes.profile, component: Profile
    },
    {
        path: config.routes.teacherForm, component: TeacherForm
    },
    {
        path: config.routes.articles, component: Articles
    },
    {
        path: config.routes.post, component: Post
    },
    {
        path: config.routes.search, component: Search
    }
]

const privateRoutes = [
    {
        path: config.routes.uploadCourse, component: UploadCourse
    },
    {
        path: config.routes.manageCourse, component: ManageCourse
    },
]

export {publicRoutes, privateRoutes}