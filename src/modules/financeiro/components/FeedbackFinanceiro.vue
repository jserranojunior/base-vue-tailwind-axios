<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 p-1">
        <div class="painel mt-1 shadow-md text-white">
          <div
            class="painel-header text-center p-1 rounded-lg text-white bg-red-500"
          >
            <p class="painel-title  text-sm">TOTAIS</p>
          </div>
          <div
            class="painel-body p-1"
            v-for="(index,
            formaPagamento) in categoriaContas.SomaFormaPagamento"
            :key="index"
          >
            <div class="flex flex-wrap">
              <div class="w-2/3">{{ formaPagamento }}</div>
              <div class="w-1/3 text-right  text-sm" v-if="formaPagamento">
                {{ money(index) }}
              </div>
              <div v-else class="w-1/4">{{ money("0") }}</div>
            </div>
          </div>
          <div class="painel-footer flex border-t mt-1 p-1">
            <div class="w-2/3">Total</div>
            <div class="w-1/3 text-right  text-sm">
              {{ money(categoriaContas.TotalCategories) }}
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 p-1">
        <div class="painel mt-1 shadow-md text-white">
          <div
            class="painel-header text-center p-1 rounded-lg text-white bg-green-500"
          >
            <p class="painel-title">CAIXA / FREELAS</p>
          </div>
          <div class="painel-body p-1">
            <div
              class="flex flex-wrap justify-between text-center mt-1 p-1  text-sm"
            >
              <div>Ls Star</div>
              <div>750,00</div>
            </div>
            <div
              class="flex flex-wrap justify-between text-center mt-1 p-1  text-sm"
            >
              <div>Acolher</div>
              <div>1.400,00</div>
            </div>
          </div>
          <div
            class="painel-footer flex text-center justify-between border-t mt-1 p-2  text-sm"
          >
            <div class="w-1/3">Total</div>
            <div class="w-1/3">{{ money("0") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import { inject } from "vue";

  import { money } from "@/helpers/filters";

  export default {
    setup() {
      const useFinancial = inject("financial");
      const { categoriaContas } = useFinancial;
      return { money, categoriaContas };
    },
  };
</script>
