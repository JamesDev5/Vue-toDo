<template>
  <div>
    <v-col cols="12" >
      <v-text-field
        v-model="campoInput"
        label="Qual a sua Tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item-group  multiple active-class="">
        <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
          <Tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from "../components/novasTarefas/Tarefa.vue";
export default {
  name: "Home",
  components: {
    Tarefa,
  },
  data: () => ({
    campoInput: null,
  }),
  methods:{
    handleAddTask(){
      this.$store.commit('adicionarTarefas',this.campoInput)
      this.campoInput = null
    }
  }
}
</script>
