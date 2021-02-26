import { reactive, toRefs } from "vue";
import { datePtBrToUs } from "@/helpers/helpersDates";
import { money } from "@/helpers/filters";
import router from "@/router";
import { useHttpFinancial } from "./useHttpFinancial";

// const editApi = {
//   ID: 91,
//   CreatedAt: "2020-11-14T00:00:00Z",
//   UpdatedAt: "2021-02-17T19:32:10.019Z",
//   DeletedAt: null,
//   user_id: 49,
//   categorias_contas_a_pagar_id: 1,
//   favorecido: "Teste 2",
//   inicio_data_pagamento: "2020-11-14",
//   fim_data_pagamento: "2021-02-18",
//   descricao: "TA ROLANDO A BIND",
//   forma_pagamento: "Dinheiro",
//   tipo_conta: "Fixa",
//   parcelas: "",
//   ValoresContasAPagar: {
//     ID: 126,
//     CreatedAt: "2021-02-17T19:32:10.017Z",
//     UpdatedAt: "2021-02-17T19:32:10.017Z",
//     DeletedAt: null,
//     contas_a_pagar_id: 91,
//     data_pagamento: "2020-02-15",
//     valor: 114,
//   },
//   ContasPagas: {
//     ID: 153,
//     CreatedAt: "2021-02-15T13:27:51.434Z",
//     UpdatedAt: "2021-02-15T13:27:51.434Z",
//     DeletedAt: null,
//     contas_a_pagar_id: 91,
//     data_pagamento: "2021-02-15",
//   },
// };
const state = reactive({
  categoriaContas: {},
  editarContaAPagar: {},
  Calendario: {
    selectedDate: datePtBrToUs(
      new Date().toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    ),
  },
  ContaAPagar: { ValoresContasAPagar: { valor: money(0) } },
  editAddMode: { mode: "" },
  dataAtual: datePtBrToUs(
    new Date().toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  ),
  err: "",
});

function getCategoriaContas() {
  if (state.Calendario.selectedDate) {
    useHttpFinancial()
      .get(state.Calendario.selectedDate)
      .then((res) => {
        state.categoriaContas = res;
      });
  }
}
function filtersBillsToPay() {
  state.ContaAPagar.categorias_contas_a_pagar_id = parseInt(
    state.ContaAPagar.categorias_contas_a_pagar_id
  );
  state.ContaAPagar.ValoresContasAPagar.valor = parseFloat(
    state.ContaAPagar.ValoresContasAPagar.valor
  );
  state.ContaAPagar.ValoresContasAPagar.data_pagamento =
    state.Calendario.selectedDate;
}
function setDataCalendario(data) {
  if (data) {
    state.Calendario.selectedDate = data;
    getCategoriaContas();
  }
}
function makeBillPayment(id) {
  const data = {
    contas_a_pagar_id: id,
    data_pagamento: state.Calendario.selectedDate,
  };
  return useHttpFinancial()
    .storePaidAccount(data)
    .then(() => {
      getCategoriaContas();
      return true;
    });
}
function deleteBillPayment(id) {
  return useHttpFinancial()
    .deletePaidAccount(id)
    .then(() => {
      getCategoriaContas();
      return true;
    });
}
async function editBillsToPay(id) {
  if (!id) {
    router.push("/financeiro");
  }
  return useHttpFinancial()
    .edit(id, state.Calendario.selectedDate)
    .then((res) => {
      state.ContaAPagar = res;
      return true;
    });
}
async function storeBillsToPay() {
  if (
    !state.ContaAPagar.favorecido ||
    !state.ContaAPagar.inicio_data_pagamento
  ) {
    state.err = "Campos Vazios";
  } else {
    filtersBillsToPay();
    return useHttpFinancial()
      .store(state.ContaAPagar)
      .then((res) => {
        getCategoriaContas();
        router.push("/financeiro");
        return res;
      });
  }
}
function updateBillsToPay() {
  if (
    !state.ContaAPagar.favorecido ||
    !state.ContaAPagar.inicio_data_pagamento
  ) {
    state.err = "Campos Vazios";
  } else {
    filtersBillsToPay();
    return useHttpFinancial()
      .update(state.ContaAPagar)
      .then((res) => {
        getCategoriaContas();
        router.push("/financeiro");
        return res;
      });
  }
}
function addBillsToPay() {
  state.ContaAPagar = { ValoresContasAPagar: {} };
  state.ContaAPagar.ValoresContasAPagar.valor = money(0);

  state.ContaAPagar.inicio_data_pagamento = state.dataAtual;
  state.ContaAPagar.fim_data_pagamento = state.dataAtual;
  state.ContaAPagar.forma_pagamento = "Cartão";
  state.ContaAPagar.tipo_conta = "Extra";
  state.ContaAPagar.categorias_contas_a_pagar_id = "2";
}
async function setEditAddMode(mode) {
  state.editAddMode.mode = mode;
  return mode;
}
export const useFinancial = () => {
  return {
    ...toRefs(state),
    getCategoriaContas,
    setDataCalendario,
    makeBillPayment,
    deleteBillPayment,
    editBillsToPay,
    storeBillsToPay,
    addBillsToPay,
    updateBillsToPay,
    setEditAddMode,
  };
};
