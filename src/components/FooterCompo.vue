<template>
   <footer class="footer">
        <div class="croche">
          <div class="crochesas">Crochesas</div>
          <div>
            <p>WhatsApp: : +62 859 9999 999</p>
            <p>Email: : hello@modeva.com</p>
            <p>
              Adress: : Lorem ipsum street Block B Number 08, Jakarta,
              Indonesia, 12345
            </p>
          </div>
        </div>
        <div class="Adress">
          <div class="text">
            <h3>Menu</h3>
            <p>Sale</p>
            <p>New arrivals</p>
            <p>Formal Man</p>
            <p>Formal Woman</p>
            <p>Casual Men </p>
          </div>
          <div class="text">
            <h3>Get Help</h3>
            <p>FAQ</p>
            <p>Customer Service</p>
            <p>Refund and return</p>
            <p>Terms and Conditions</p>
          </div>
          <div class="text">
            <h3>Account</h3>
            <p>My Account</p>
            <p>My Orders</p>
            <p>Vouchers and Discounts</p>
          </div>
        </div>
      </footer>
</template>

<style scoped>
.footer{
    background-color: #FA77AB;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .text{
    padding: 50px;
  }
  .Adress{
    display: flex;
    flex-direction: row;
  }
  .crochesas{
    font-family: "Pinyon Script", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .crochesas p{
    margin: 2px;
  }
</style>
