const URL_API = "https://api.coincap.io/v2/assets";
const API_URL ={
  baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`,
  endpoint: `/currencies/usd.min.json`
}
const resultConvert = [];

function printResponseAPI(data) {
  const ulList = document.querySelector("#container-list");
  const valueConvert = resultConvert[0].toFixed(2);
  console.log(valueConvert)
  data.reduce((acc, coin) => {
    if(acc !== 0){
      const resutlCoin = Number(coin.priceUsd).toFixed(2) * valueConvert
      const listName = document.createElement("p");
      listName.innerHTML = `${coin.name} (${coin.symbol}): R$ ${resutlCoin.toFixed(2)}`;

      ulList.appendChild(listName);
      acc -= 1;
    }
    return acc;

  }, 10)
}


const brlCovertCrypto = async () => {
  
  const response = await fetch(`${API_URL.baseUrl}${API_URL.endpoint}`
  );
  const data = await response.json(); 

  resultConvert.push(data.usd.brl);
  
  
}

const fetchCoincap = async () => {
  try {
    const response = await fetch(URL_API);
    const result = await response.json();
    printResponseAPI(result.data);
  } catch (error) {
    console.log(error);
  }
};

fetchCoincap(); 
 brlCovertCrypto()
