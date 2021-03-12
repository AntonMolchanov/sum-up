const selectIsAuth = (currentStore) =>
  !!currentStore.user &&
  !!currentStore.user.token &&
  typeof currentStore.user.token === "string";
const selectUser = (currentStore) => {
  return currentStore.user.data;
};
const selectError = (currentStore) =>
  currentStore.user && currentStore.user.message;

const userSelectors = {
  isAuth: selectIsAuth,
  user: selectUser,
  error: selectError,
};

export default userSelectors;
