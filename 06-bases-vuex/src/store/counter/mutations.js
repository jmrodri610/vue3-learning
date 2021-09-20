export const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};
export const incrementedBy = (state, value) => {
  state.count += value;
  state.lastMutation = `incrementedBy ${value}`;
};
export const updateIsLoading = (state, val) => {
  state.isLoading = val;
};
