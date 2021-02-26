<template>
  <div>
    <div class="painel">
      <div class="painel-body">
        <div class="flex">
          <div class="w-full">
            <VueTailwindPicker
              :theme="{
                background: '#1A202C',
                text: 'text-white',
                border: 'border-gray-700',
                currentColor: 'text-gray-200',
                navigation: {
                  background: 'bg-gray-800',
                  hover: 'hover:bg-gray-700',
                  focus: 'bg-gray-700',
                },
                picker: {
                  rounded: 'rounded-md',
                  selected: {
                    background: 'bg-teal-400',
                    border: 'border-teal-400',
                    hover: 'hover:border-teal-400',
                  },
                  holiday: 'text-red-400',
                  weekend: 'text-green-400',
                  event: 'bg-blue-500',
                },
                event: {
                  border: 'border-gray-700',
                },
              }"
              :start-date="'2020-01-01'"
              :selected-date="selectedDate"
              @change="(v) => (selectedDate = v)"
            >
              <input
                class="cursor-pointer w-full bg-gray-600 appearance-none border-2 border-gray-600 rounded py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:bg-gray-500 focus:border-purple-500"
                type="date"
                v-model="selectedDate"
              />
            </VueTailwindPicker>
          </div>
        </div>
        <!-- <div class="flex mt-1 justify-between">
          <div class="w-1/2">
            <button
              class="cursor-pointer text-center border border-teal-500 bg-teal-500 text-white rounded-sm font-bold py-1 px-6 ml-2"
              @click="changeMonth('previous')"
            >
              Anterior
            </button>
          </div>
          <div class="w-1/2">
            <button
              class="cursor-pointer text-center border border-teal-500 bg-teal-500 text-white rounded-sm font-bold py-1 px-6"
              @click="changeMonth('next')"
            >
              Próximo
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import VueTailwindPicker from "./VueTailwindPicker";
  import dayjs from "dayjs";
  var updateLocale = require("dayjs/plugin/updateLocale");
  dayjs.extend(updateLocale);

  dayjs.updateLocale("en", {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    weekdays: [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domindo",
    ],
    weekdaysShort: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  });

  import { inject, watch, ref } from "vue";
  export default {
    setup() {
      const useFinancial = inject("financial");
      const { setDataCalendario, Calendario } = useFinancial;
      let selectedDate = ref(Calendario.value.selectedDate);

      watch(selectedDate, () => {
        setDataCalendario(selectedDate.value);
      });

      function changeMonth(type) {
        console.log(type);
      }
      return { changeMonth, VueTailwindPicker, selectedDate };
    },
  };
</script>
