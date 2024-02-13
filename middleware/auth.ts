
const authMiddleware = defineNuxtRouteMiddleware((to, from) => {
	const { isLoggedIn } = useAuth();
  if (isLoggedIn() && to.name === 'auth') {
    return navigateTo('/');
  }
  if (!isLoggedIn() && to.name === 'index') {
    return navigateTo('/auth');
  }
});

export default authMiddleware;