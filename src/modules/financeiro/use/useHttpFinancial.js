import { useApiConnect } from "@/modules/api/use/useApiConnect";

export const useHttpFinancial = () => {
  async function get(dataSelecionada) {
    const urlApi = `/financial/viewcategories/${dataSelecionada}`;
    return useApiConnect()
      .get(urlApi)
      .then((response) => {
        return response.data.data;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  async function edit(id, dataSelecionada) {
    const urlApi = `/financial/editbills/${id}/${dataSelecionada}`;
    return useApiConnect()
      .get(urlApi)
      .then((response) => {
        if (response.data.data[0]) {
          return response.data.data[0];
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  async function store(data) {
    const urlApi = `/financial/billstopay`;
    return useApiConnect()
      .post(urlApi, data)
      .then((response) => {
        if (response.data) {
          return response.data;
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  async function update(data) {
    console.log(data.ValoresContasAPagar.data_pagamento);
    const urlApi = `/financial/billstopay/${data.ID}/${data.ValoresContasAPagar.data_pagamento}`;
    return useApiConnect()
      .put(urlApi, data)
      .then((response) => {
        if (response.data) {
          return response.data;
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  async function storePaidAccount(data) {
    const urlApi = `/financial/paidbills`;
    return useApiConnect()
      .post(urlApi, data)
      .then((response) => {
        if (response) {
          return response;
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  async function deletePaidAccount(data) {
    const urlApi = `/financial/paidbills/${data}`;
    return useApiConnect()
      .delet(urlApi, data)
      .then((response) => {
        if (response) {
          return response;
        }
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  return { get, edit, store, update, storePaidAccount, deletePaidAccount };
};
