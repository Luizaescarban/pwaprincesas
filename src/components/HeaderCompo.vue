<script setup>
 
</script>
<template>
  <header class="header">
        <div class="desconto">
          <p>Discount 20% For New Member, ONLY FOR TODAY!!</p>
        </div>
        <div class="nav">
          <div class="logo"><img @click="voltar" src="/public/" alt="" /></div>
          <div class="car"><img @click="irParaCarrinho" src="assets/images/car.png" alt="" /></div>
        </div>
      </header>
</template>

<style scoped>
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
</style>
