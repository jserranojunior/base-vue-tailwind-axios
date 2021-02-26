/* eslint-disable */

export const ActionSetDataSelecionada = ({ commit }, data) => {
  return new Promise(async resolve => {
    commit("SET_DATA_SELECIONADA", data);
    resolve();
  });
};
