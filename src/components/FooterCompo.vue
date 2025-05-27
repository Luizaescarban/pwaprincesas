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
.footer {
  background-color: #FA77AB;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap; 
  box-sizing: border-box;
}

.croche {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
}

.crochesas {
  font-family: "Pinyon Script", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;
}

.croche p {
  margin: 5px 0;
  text-align: center;
}

.Adress {
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 300px;
}

.text {
  padding: 10px 20px;
  min-width: 150px;
}

.text h3 {
  margin-bottom: 15px;
  font-weight: 700;
}


@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
  }

  .Adress {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .text {
    padding: 10px 0;
    width: 100%;
    max-width: 300px;
    text-align: center;
  }

  .croche {
    margin-bottom: 30px;
  }
}

@media (max-width: 480px) {
  .crochesas {
    font-size: 36px;
  }

  .text h3 {
    font-size: 18px;
  }

  .text p {
    font-size: 14px;
  }
}
</style>
