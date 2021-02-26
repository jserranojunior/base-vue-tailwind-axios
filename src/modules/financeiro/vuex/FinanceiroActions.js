import ApiFinancial from "../../../http/api/ApiFinancial.js";
const Financial = new ApiFinancial();

export const ActionGetFinancial = ({ commit }, dataSelecionada) => {
  return Financial.get(dataSelecionada).then((res) => {
    commit("SET_CATEGORIA_CONTAS", res.data.data);
  });
};

export const ActionStoreFinancial = ({ commit }, data) => {
  return Financial.store(data).then((res) => {
    console.log(res);
    return res;
  });
};

export const ActionUpdateFinancial = ({ commit }, data) => {
  return Financial.update(data);
};

export const ActionEditFinancial = async ({ commit }, data) => {
  return Financial.edit(data).then((res) => {
    commit("SET_EDITAR_CONTA_A_PAGAR", res);
  });
};

export const ActionSetDataSelecionada = ({ commit }, data) => {
  return new Promise(async (resolve) => {
    commit("SET_DATA_SELECIONADA", data);
    resolve(true);
  });
};

export const ActionStoreFinancialBillPayment = ({ commit }, data) => {
  return Financial.storeContaPaga(data).then((res) => {
    return res;
  });
};

export const ActionDeleteFinancialBillPayment = ({ commit }, data) => {
  return Financial.deleteContaPaga(data).then((res) => {
    return res;
  });
};
