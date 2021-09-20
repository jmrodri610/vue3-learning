import getRandomInt from "../../helpers/getRandomInt";

export const incrementRandomInt = async ({ commit }) => {
  commit("updateIsLoading", true);

  const randomInt = await getRandomInt();

  commit("updateIsLoading", false);

  commit("incrementedBy", randomInt);
};
