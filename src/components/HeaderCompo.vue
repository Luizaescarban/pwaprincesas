<script setup>
 import {  useRouter } from 'vue-router';


const router = useRouter();

const voltar = () => {
  router.push('/'); 
};

const irParaCarrinho = () => {
  router.push('/carrinho'); 
};
</script>
<template>
  <header class="header">
        <div class="desconto">
          <p>Discount 20% For New Member, ONLY FOR TODAY!!</p>
        </div>
        <div class="nav">
          <div class="logo"><img @click="voltar" src="/src/assets/images/logo.png" alt="" /></div>
          <div class="car"><img @click="irParaCarrinho" src="/src/assets/images/car.png" alt="" /></div>
        </div>
      </header>
</template>

<style scoped>
.desconto {
  background-color: #FA77AB;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 14px;
}

.nav {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  box-sizing: border-box;
}

.nav .logo img {
  width: 100px;
  height: 100px;
  cursor: pointer;
  object-fit: contain;
}

.nav .car img {
  width: 100px;
  height: 100px;
  cursor: pointer;
  object-fit: contain;
}

/* Responsividade */

@media (max-width: 768px) {
  .desconto {
    font-size: 12px;
    justify-content: center;
    padding: 0.5rem 0.5rem;
  }

  .nav {
    padding: 0.5rem 1rem;
  }

  .nav .logo img,
  .nav .car img {
    width: 70px;
    height: 70px;
  }
}

@media (max-width: 480px) {
  .desconto {
    font-size: 11px;
    padding: 0.3rem 0.3rem;
  }

  .nav {
    flex-direction: column;
    gap: 10px;
    padding: 0.5rem 0.5rem;
  }

  .nav .logo img,
  .nav .car img {
    width: 60px;
    height: 60px;
  }
}

</style>
