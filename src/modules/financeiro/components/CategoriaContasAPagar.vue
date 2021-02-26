<template>
  <div class="bg-gray-900">
    <div class="columns mt-2">
      <div
        v-for="categoria in categoriaContas.CategoriasContasAPagars"
        :key="categoria.id"
        class="mt-2 w-full"
        style="width: 100%"
      >
        <div class="painel w-full">
          <div
            class="painel-header categoria-header text-center p-1 rounded-lg w-full"
            :style="{ backgroundColor: categoria.cor }"
          >
            <p class="painel-title  text-sm">{{ categoria.nome }}</p>
          </div>
          <div class="painel-body w-full p-1">
            <div
              class="text-center cursor-pointer rounded-lg px-1 hover:bg-gray-700 text-gray-100 w-full shadow itens-center flex"
              v-for="contas in categoria.ContasAPagar"
              :key="contas.ID"
            >
              <div class="w-1/4 text-left">
                <div
                  class="relative  itens-center mt-1"
                  v-if="contas.ContasPagas && contas.ContasPagas.ID > 0"
                >
                  <label
                    for="checked"
                    class="cursor-pointer"
                    @click="deleteBillPayment(contas.ContasPagas.ID)"
                  >
                    <span>
                      <span
                        class="block w-8 h-5 bg-blue-800 rounded-full shadow-inner"
                      ></span>
                      <span
                        class="absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-300 transform translate-x-full"
                      >
                      </span>
                    </span>
                  </label>
                </div>
                <div class="relative" v-else>
                  <label
                    for="unchecked"
                    class="cursor-pointer"
                    @click="makeBillPayment(contas.ID)"
                  >
                    <span>
                      <span
                        class="block w-8 h-5 bg-red-800 rounded-full shadow-inner"
                      ></span>
                      <span
                        class="absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-red-300"
                      >
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <span @click="openEditBillsToPay(contas.ID)">
                <div class="w-2/4 pointer text-sm ">
                  {{ contas.favorecido }}
                </div>
                <div
                  class="w-1/4 text-right  text-sm itens-center"
                  v-if="contas.ValoresContasAPagar"
                >
                  {{ money(contas.ValoresContasAPagar.valor) }}
                </div>
                <div v-else class="w-1/4">0</div>
              </span>
            </div>
          </div>

          <div
            class="painel-footer flex text-center justify-between p-1 text-gray-300 w-full"
          >
            <div class="border-t w-full h-1">
              <div class="w-1/2 text-left">Total</div>
              <div class="w-1/2 text-right">{{ money(categoria.Soma) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from "@/router";
  import { inject, onMounted } from "vue";
  import { money } from "@/helpers/filters";
  export default {
    setup() {
      const useFinancial = inject("financial");
      const {
        categoriaContas,
        editandoContaAPagar,
        getCategoriaContas,
        makeBillPayment,
        deleteBillPayment,
        editBillsToPay,
      } = useFinancial;

      async function openEditBillsToPay(id) {
        await editBillsToPay(id).then(() => {
          router.push("/financeiro/editarconta");
        });
      }

      onMounted(() => {
        getCategoriaContas();
      });

      return {
        categoriaContas,
        editandoContaAPagar,
        money,
        makeBillPayment,
        deleteBillPayment,
        openEditBillsToPay,
      };
    },
  };
</script>

<style scoped>
  .columns {
    column-width: 200px;
    column-gap: 10px;
  }

  div.columns div {
    display: inline-block;
  }
</style>
