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
.main {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
}

.itens {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.item-carrinho {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 15px;
  background-color: #fff9fb;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.product {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  gap: 10px;
}

.img img {
  max-width: 80px;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.detalhes {
  flex: 1;
  min-width: 0;
}

.detalhes h3 {
  font-size: 18px;
  margin: 0;
}

.detalhes p {
  font-size: 14px;
  margin: 4px 0;
}

.total {
  display: flex;
  align-items: center;
}

.total button {
  background: none;
  border: none;
  color: #fa77ab;
  font-weight: bold;
  cursor: pointer;
  padding: 8px;
}

.pedidos {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.resumo {
  width: 100%;
  max-width: 400px;
  margin: 20px auto 0;
  padding: 15px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #fff0f6;
  box-sizing: border-box;
}

.divPreco {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
}

.resumo button {
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  background-color: #fa77ab;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.resumo button:hover {
  background-color: #f05895;
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .item-carrinho {
    flex-direction: column;
    align-items: flex-start;
  }

  .product {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .resumo {
    width: 100%;
  }

  .img img {
    max-width: 60px;
  }

  .detalhes h3 {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .main {
    padding: 10px;
  }

  .item-carrinho {
    padding: 10px;
  }

  .resumo button {
    font-size: 14px;
  }

  .divPreco {
    font-size: 14px;
  }
}

</style>