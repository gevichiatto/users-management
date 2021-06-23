<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mrgnbtm">
                <h2 class="titles">Gerenciamento de Cargos</h2>
                <div class="row">
                    <button type="button" @click='showModal()' class="col-md-4 btn btn-cadastro">Cadastro de cargos</button>
                    <button type="button" @click='showTabela()' class="col-md-4 btn btn-cadastro">Listar cargos</button>
                </div>
            </div>
        </div>
        <hr class="w-25 my-4">
        <div class="row">
            <div v-if="results" class="tableContainer">
                <div class="tableContent">
                    Tabela aqui
                </div>
                
            </div>
        </div>
        <!-- Modal de Cadastro de Cargos -->
        <modal name="modalCadastro">
            <h4 class="modal-titles modal-header">Cadastro de cargos</h4>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Nome do Cargo</label>
                        <input type="text" class="form-control" v-model="cargoName" name="cargoName" id="cargoName" aria-describedby="emailHelp" placeholder="Nome do Cargo" />
                    </div>
                </div>
                <div class="row">
                    <button type="button" @click='createCargo()' class="btn btn-cadastro">Cadastrar</button>
                </div>
            </form>
        </modal>
    </div>
</template>

<script>
export default {
    name: 'createCargo',
    data() {
        return {
            cargoName: '',
            results: false
        }
    },
    methods: {
        showModal() {
            this.$modal.show('modalCadastro',);
            this.clearForm();
        },
        showTabela() {
            this.results = !this.results;
        },
        clearForm() {
            this.cargoName = "";
        }
    },
}
</script>