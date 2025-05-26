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
main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 15px 50px; /* menos padding lateral para celular */
  min-height: 100vh;
  box-sizing: border-box;
}

.detalhes {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  font-family: "Playfair Display SC", serif;
  padding: 10px 20px;
  box-sizing: border-box;
}

.img {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  max-width: 320px;
}

.img img {
  width: 100%;
  height: auto;
  max-width: 300px;
  border-radius: 8px;
}

.txt {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.nome {
  font-size: 48px;
  margin: 0 0 10px;
}

.preco {
  color: red;
  font-size: 22px;
  font-family: "Lato", sans-serif;
  margin: 0 0 8px;
}

.estoque {
  font-size: 14px;
  font-family: "Lato", sans-serif;
  margin: 0 0 16px;
}

.estoque .disponivel {
  color: green;
  font-weight: bold;
}

.estoque .indisponivel {
  color: #cc0000;
  font-weight: bold;
}

.descricao {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.4;
}

.adicionar {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
}

.botao {
  border: 1px solid black;
  padding: 12px 8px;
  width: 158px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  user-select: none;
}

.botao button {
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 10px;
}

.botao button:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.addCar {
  border: 1px solid black;
  padding: 12px 8px;
  background-color: #FA77AB;
  color: black;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.addCar:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background-color: #f9b9c4;
}

.addCar:hover:not(:disabled) {
  background-color: #f05895;
}

/* Responsividade */

/* Tablets e abaixo */
@media (max-width: 900px) {
  .detalhes {
    flex-direction: column;
    padding: 10px;
    gap: 30px;
  }

  .img {
    max-width: 100%;
  }

  .nome {
    font-size: 38px;
    text-align: center;
  }

  .preco {
    font-size: 20px;
    text-align: center;
  }

  .estoque {
    text-align: center;
  }

  .descricao {
    text-align: center;
  }

  .adicionar {
    justify-content: center;
  }

  .botao {
    width: 120px;
    font-size: 18px;
  }

  .botao button {
    font-size: 20px;
  }

  .addCar {
    width: 100%;
    max-width: 320px;
    font-size: 18px;
  }
}

/* Celulares pequenos */
@media (max-width: 480px) {
  .nome {
    font-size: 28px;
  }

  .preco {
    font-size: 18px;
  }

  .botao {
    width: 100px;
    padding: 8px 6px;
  }

  .botao button {
    font-size: 18px;
  }

  .addCar {
    font-size: 16px;
    width: 100%;
  }
}
</style>
