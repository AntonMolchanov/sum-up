const selectAllDays = currentStore => currentStore.days;
const selectError = currentStore => currentStore.user && currentStore.user.message;

export default {
  all: selectAllDays,
  error: selectError,
}
