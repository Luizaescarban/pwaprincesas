<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const boneca = ref(null)
const quantidade = ref(0)

const todasBonecas = [
  { nome: 'Ariel', preco: 89.90, imagem: '/images/ariel.png', estoque: 5, descricao: 'Boneca Ariel linda.' },
  { nome: 'Bela', preco: 99.90, imagem: '/images/bela.png', estoque: 0, descricao: 'Boneca Bela esgotada.' },
  { nome: 'Cinderela', preco: 89.90, imagem: '/images/cinderela.png', estoque: 3, descricao: 'Boneca Cinderela charmosa.' },
  { nome: 'Aurora', preco: 109.90, imagem: '/images/aurora.png', estoque: 2, descricao: 'Boneca Aurora graciosa.' },
  { nome: 'Branca de Neve', preco: 109.90, imagem: '/images/brancadeneve.png', estoque: 4, descricao: 'Boneca Branca de Neve clássica.' },
  { nome: 'Rapunzel', preco: 95.90, imagem: '/images/rapunzel.png', estoque: 1, descricao: 'Boneca Rapunzel linda.' },
  { nome: 'Jasmine', preco: 89.90, imagem: '/images/jasmine.png', estoque: 0, descricao: 'Boneca Jasmine esgotada.' },
  { nome: 'Merida', preco: 99.90, imagem: '/images/merida.png', estoque: 2, descricao: 'Boneca Merida aventureira.' },
  { nome: 'Mulan', preco: 109.90, imagem: '/images/mulan.png', estoque: 3, descricao: 'Boneca Mulan forte.' },
  { nome: 'Tiana', preco: 89.90, imagem: '/images/tiana.png', estoque: 5, descricao: 'Boneca Tiana encantadora.' }
]

const incrementar = () => {
  if (quantidade.value < boneca.value.estoque) {
    quantidade.value++
  }
}

const decrementar = () => {
  if (quantidade.value > 0) {
    quantidade.value--
  }
}

const adicionarAoCarrinho = () => {
  if (quantidade.value > 0 && boneca.value.estoque >= quantidade.value) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
    const produtoExistente = carrinho.find(item => item.nome === boneca.value.nome)

    if (produtoExistente) {
      produtoExistente.quantidade += quantidade.value
    } else {
      carrinho.push({
        nome: boneca.value.nome,
        preco: boneca.value.preco,
        imagem: boneca.value.imagem,
        quantidade: quantidade.value,
      })
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    alert(`${quantidade.value}x ${boneca.value.nome} adicionada(s) ao carrinho!`)
    quantidade.value = 0
  }
}

const voltar = () => {
  router.back()
}

onMounted(() => {
  const nomeBoneca = decodeURIComponent(route.params.nome)
  boneca.value = todasBonecas.find(b => b.nome === nomeBoneca)
})
</script>

<template>
  <main>
    <div class="detalhes" v-if="boneca">
      <div class="img"><img :src="boneca.imagem" :alt="boneca.nome" style="max-width: 300px;"></div>
      <div class="txt">
        <h1 class="nome">{{ boneca.nome }}</h1>
        <p class="preco">R$ {{ boneca.preco.toFixed(2) }}</p>
        <p class="estoque">Status:
          <span :class="boneca.estoque > 0 ? 'disponivel' : 'indisponivel'">
            {{ boneca.estoque > 0 ? 'Em estoque' : 'Esgotado' }}
          </span>
        </p>
        <p class="descricao">{{ boneca.descricao }}</p>

        <div class="adicionar">
          <div class="botao">
            <button @click="decrementar" :disabled="quantidade === 0">-</button>
            <span>{{ quantidade }}</span>
            <button @click="incrementar" :disabled="quantidade >= boneca.estoque">+</button>
          </div>
          <button class="addCar"
            @click="adicionarAoCarrinho"
            :disabled="quantidade === 0 || boneca.estoque === 0"
          >
            ADICIONAR
          </button>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Boneca não encontrada.</p>
      <button @click="voltar">Voltar</button>
    </div>
  </main>
</template>


<style scoped>
main{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
}
.detalhes{
    display: flex;
    flex-direction: row;
    padding: 10px 200px 10px 350px;
    justify-content: center;
    font-family: "Playfair Display SC", serif;
}
.img{
    margin-right: 50px;
    display: flex;
    align-items: center;
}
.croche{
    display: flex;
    flex-direction: column;
  }
  .nome{
    font-size: 60px;
  }
  .txt{
    display: flex;
    flex-direction: column;
  }
  .preco{
    color: red
    ;
    font-size: 20px;
    font-family: "Lato", sans-serif;
  }
  .estoque{
    font-size: 10px;
    font-family: "Lato", sans-serif;
  }
  .adicionar{
    display: flex;
    flex-direction: row;

  }
  .botao{
    border: 1px solid black;
    padding: 12px 8px;
    width: 158px;
    height: 20px;
    gap: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .descricao{
    font-family: "Lato", sans-serif;
  }
  .adicionar button{
    border: none;
  }
  .addCar{
    border: 1px solid black;
    padding: 12px 8px;
    width: 300px;
    height: 48px;
    background-color: #FA77AB;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: black;
    gap: 40px;
  }
 
  .addCar:hover{
    background-color: #f05895;

  }
</style>
