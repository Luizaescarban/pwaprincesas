<template>
<main class="main">
    <div v-if="carrinho.length > 0" class="itens">
      <div class="pedidos">
        <div
          v-for="(item, index) in carrinho"
          :key="index"
          class="item-carrinho"
        >
          <div class="product">
            <div class="img">
              <img
                :src="item.imagem"
                :alt="item.nome"
                style="max-width: 100px"
              />
            </div>
            <div class="detalhes">
              <h3>{{ item.nome }}</h3>
              <p>Preço: R$ {{ item.preco.toFixed(2) }}</p>
              <p>Total: R$ {{ (item.preco * item.quantidade).toFixed(2) }}</p>
            </div>
          </div>

          <div class="total">
            <button @click="removerItem(index)">Remover</button>
          </div>
        </div>
      </div>
      <div class="resumo">
        <div class="divPreco">
          <p>Total</p>
          <p> R$ {{ totalCarrinho.toFixed(2) }}</p>
        </div>

        <button @click="finalizarCompra">FINALIZAR</button>
      </div>
    </div>

    <div v-else>
      <p>Seu carrinho está vazio.</p>
      <button @click="voltar">Voltar</button>
    </div>
  </main>

 
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const carrinho = ref([])

const totalCarrinho = computed(() =>
carrinho.value.reduce((total, item) => total + item.preco * item.quantidade, 0)
)

function voltar() {
window.location.href = 'index.html'
}



function removerItem(index) {
carrinho.value.splice(index, 1)
salvarCarrinho()
}

function finalizarCompra() {
alert('Compra finalizada!')
carrinho.value = []
salvarCarrinho()
}

function salvarCarrinho() {
localStorage.setItem('carrinho', JSON.stringify(carrinho.value))
}

onMounted(() => {
const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || []
carrinho.value = carrinhoSalvo
})
</script>
<style lang="css" scoped>
.main{
    display: flex;
    flex-direction: column;

    padding-bottom: 50px;
}
.itens{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.item-carrinho{
    font-family: "Lato", sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 500px;
}
.total{
    display: flex;
    flex-direction: row;
}
.total button{
    border: 0px;
    text-decoration: underline;
    background-color: white;

}
.product{
    display: flex ;
    flex-direction: row;
    align-items: center;
}
.pedidos{
    display: flex;
    flex-direction: column;
}
.img{
    margin-right: 20px;

}

.detalhes h3{
    font-size: 30px;
}
.detalhes p{
   font-size: 15px;
}
.resumo{
    border: 1px solid black;
    height: 98px;
}
.divPreco{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "Lato", sans-serif;
}
.resumo button{
    border: 0px;
    padding: 12px 8px;
    width: 300px;
    height: 48px;
    background-color: #FA77AB;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 40px;
    font-family: "Lato", sans-serif;
  }
 
.resumo button:hover{

        background-color: #f05895;
    
   
} 

</style>