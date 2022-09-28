import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index.vue'
import About from './views/about.vue'
import TopBar from './layout/topbar.vue'
import Product from './views/product.vue'
import Teams from './views/team.vue'
import Gallery from './views/gallery.vue'
import Career from './views/career.vue'
import Resume from './views/resume.vue'
import Login from './views/signin.vue'
import Profile from './views/profile.vue'
import Blog from './views/blog.vue';
import Blogs from './views/blogs.vue';

Vue.use(Router)

const route =  new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TopBar,
      children: [
        { 
          path: '', 
          name: 'home', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Home
        },
        { 
          path: 'about', 
          name: 'about', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: About
        },
        { 
          path: 'product', 
          name: 'product', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Product
        },
        { 
          path: 'teams', 
          name: 'team', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Teams
        },
        { 
          path: 'gallery', 
          name: 'gallery', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Gallery
        },
        { 
          path: 'career', 
          name: 'career', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Career
        },
        { 
          path: 'resume', 
          name: 'resume', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Resume
        },
        { 
          path: 'blog/:id', 
          name: 'blog', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Blog
        },
        { 
          path: 'blogs', 
          name: 'blogs', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Blogs
        },
        { 
          path: 'signin', 
          name: 'signin', 
          meta: { 
            auth: false,
            title: 'IT Wizard' 
          }, 
          component: Login
        },
        { 
          path: 'profile', 
          name: 'profile', 
          meta: { 
            auth: true,
            title: 'IT Wizard' 
          }, 
          component: Profile
        }
      ]
    }
  ]
});


route.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  document.title = to.meta.title;
  let authrequired = false
  if(to && to.meta && to.meta.auth)
		authrequired = true
  
  const tk = auth.loggedIn();
  if(authrequired) {
      tk ? next() : route.push('/');
  } else {
      if (to.name === 'signin') {
        !tk ? next() : route.push('/');
      } else {
        next();
      }
  }
});

const auth = {
  loggedIn() {
    var token = localStorage.getItem("token");
    return token ? true : false;
  }
}

export default route;