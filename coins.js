const solana = document.getElementById("solana");
const bitcoin = document.getElementById("bitcoin")
const algorand = document.getElementById("algorand")
const dog = document.getElementById("doge")


fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Csolana%2CAlgorand%2Cdogecoin%2Ccardino%2Cshiba&vs_currencies=pkr")
.then(res=>res.json())
.then(function(result){
    solana.innerHTML = result.solana.pkr;
    bitcoin.innerHTML = result.bitcoin.pkr;
    algorand.innerHTML = result.algorand.pkr;
    dog.innerHTML = result.dogecoin.pkr;

    
});

    