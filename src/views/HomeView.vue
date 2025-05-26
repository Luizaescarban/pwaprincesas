<template>
  <main>
    <div class="banner">
      <div><img :src="banner" alt="Banner" /></div>
      <div class="crochesas">
        <p>Bonecas Disney</p>
        <p>Crochesas</p>
      </div>
    </div>
    <div class="product">
      <div
        class="card"
        v-for="boneca in bonecas"
        :key="boneca.nome"
        :class="{ esgotado: boneca.estoque === 0 }"
        @click="irParaDetalhes(boneca)"
        style="cursor: pointer"
      >
        <img :src="boneca.imagem" :alt="boneca.nome" />
        <div class="info">
          <h2>{{ boneca.nome }}</h2>
          <p class="preco">R$ {{ boneca.preco.toFixed(2) }}</p>
          <p :class="boneca.estoque > 0 ? 'disponivel' : 'indisponivel'">
            {{ boneca.estoque > 0 ? 'Em estoque' : 'Esgotado' }}
          </p>
          <button @click.stop="comprar(boneca)" :disabled="boneca.estoque === 0">
            Comprar
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import banner from '@/assets/images/banner.png'

const router = useRouter()

const bonecas = ref([
  { nome: 'Ariel', preco: 89.9, imagem: '/images/ariel.png', estoque: 5 },
  { nome: 'Bela', preco: 99.9, imagem: '/images/bela.png', estoque: 0 },
  { nome: 'Cinderela', preco: 89.9, imagem: '/images/cinderela.png', estoque: 3 },
  { nome: 'Aurora', preco: 109.9, imagem: '/images/aurora.png', estoque: 2 },
  { nome: 'Branca de Neve', preco: 109.9, imagem: '/images/brancadeneve.png', estoque: 4 },
  { nome: 'Rapunzel', preco: 95.9, imagem: '/images/rapunzel.png', estoque: 1 },
  { nome: 'Jasmine', preco: 89.9, imagem: '/images/jasmine.png', estoque: 0 },
  { nome: 'Merida', preco: 99.9, imagem: '/images/merida.png', estoque: 2 },
  { nome: 'Mulan', preco: 109.9, imagem: '/images/mulan.png', estoque: 3 },
  { nome: 'Tiana', preco: 89.9, imagem: '/images/tiana.png', estoque: 5 }
])

function comprar(boneca) {
  alert(`Você comprou: ${boneca.nome}`)
}

function irParaDetalhes(boneca) {
  router.push({ name: 'Detalhes', params: { nome: encodeURIComponent(boneca.nome) } })
}
</script>
<style scoped>
.main{
    font-family: sans-serif;
    background: #f4f4f4;

}
.desconto{
    background-color: #FA77AB;
    color: white;
    display: flex;
    justify-content: flex-end;
}
.nav{
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
}
.nav .logo img{
    width: 100px;
    height: 100px;
}
.nav .car img{
    width: 100px;
    height: 100px;
}
.banner{
    display: flex;
    flex-direction: row;
    background-color: #FF9DC4;
    padding: 1rem;
    padding-bottom: 0px;
    justify-content: center;
    align-items: center;
}
.banner img{
  width: 400px;
  height: 350px;
}
.card {
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s ease;
    margin: 4px;
   
  }
  .product{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card:hover {
    transform: scale(1.03);
  }
  
  .card img {
    width: 300px;
    height: 300px;
  }
  .info {
    padding: 15px;
    text-align: center;
  }
  
  .info h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .preco {
    font-weight: bold;
    color: #2e8b57;
  }
  
  .disponivel {
    color: green;
  }
  
  .indisponivel {
    color: red;
  }  
  .product {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 90vw;
  max-width: 300px;
  margin: 8px 0;
}

/* Ajuste do banner para telas pequenas */
.banner img {
  width: 100%;
  max-width: 400px;
  height: auto;
}

/* Texto centralizado e espaçamento */
.crochesas p {
  font-size: 1.2rem;
  text-align: center;
  margin: 0.2rem 0;
}

/* Media query para telas maiores (tablet e desktop) */
@media (min-width: 768px) {
  .product {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    margin: 12px;
  }

  .banner {
    flex-direction: row;
    justify-content: center;
  }

  .crochesas p {
    font-size: 1.5rem;
  }
}

</style>
