const selectIsAuth = currentStore => !!currentStore.user && typeof currentStore.user === 'string';
const selectUser = currentStore => currentStore.user;
const selectError = currentStore => currentStore.user && currentStore.user.message;

export default {
  isAuth: selectIsAuth,
  user: selectUser,
  error: selectError,
}
