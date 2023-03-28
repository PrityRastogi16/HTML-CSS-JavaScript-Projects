const name = document.getElementById("name");
const mode = document.getElementById("mode");
const amount = document.getElementById("amount");
const CustomerDetail = document.querySelector(".customerDetail");
const updatedDetail = document.querySelector(".updatedDetail");
const find = document.querySelector(".find");
const update = document.querySelector(".update");

let customers = [
  {
    name: 'Prity Rastogi',
    accNum: 1,
    currBal: 16800,

  },
  {
    name: 'Kartik Rastogi',
    accNum: 2,
    currBal: 15000,
  },
  {
    name: 'Suraj Rastogi',
    accNum: 3,
    currBal: 180000,
  },
];

const customerFind = (name , accNum , mode , amount) => {
  const customer = customers.find((customer) => customer.name === name);
  console.log(customer);
  CustomerDetail.innerHTML = JSON.stringify(customer);

};

const amountUpdate = (name, accNum, mode, amount) => {
  customers = customers.map((customer) => {
    if(customer.name === name){
      return{
        ...customer,
        currBal:
        mode == 'deposite' 
        ? customer.currBal + amount
        : customer.currBal - amount,
      };
    }
    return customer;
  });

  const updatedCustomerDetail = customers.find((customer) => customer.name === name);

  updatedDetail.innerHTML = JSON.stringify(updatedCustomerDetail);
  CustomerDetail.innerHTML = JSON.stringify(updatedCustomerDetail);
};

find.addEventListener('click' , (e) => {
  e.preventDefault();
  customerFind(
    name.value,
    Number(accNum.value),
    mode.value,
    Number(amount.value)
  );
});

update.addEventListener('click' , (e) => {
  e.preventDefault();
  if(name.value && accNum.value && mode.value && amount.value){
    amountUpdate(
      name.value,
      Number(accNum.value),
      mode.value,
      Number(amount.value)
    );
  }
});


