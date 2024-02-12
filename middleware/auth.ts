
const authMiddleware = defineNuxtRouteMiddleware((to, from) => {
	const { isLoggedIn } = useAuth();
  if (!isLoggedIn() && to.path === '/Home') {
    return navigateTo('/');
  } 
});

export default authMiddleware;
