const URL_API = "https://api.coincap.io/v2/assets";

function printResponseAPI(data) {
  const ulList = document.querySelector("#container-list");
  
  data.reduce((acc, coin) => {
    if(acc !== 0){
      const listName = document.createElement("p");
      listName.innerHTML = `${coin.name}(${coin.symbol}): ${Number(
        coin.priceUsd
      ).toFixed(2)}`;

      ulList.appendChild(listName);
      acc -= 1;
    }
    return acc;

  }, 10)
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
