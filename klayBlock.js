const BLOCK = document.querySelector("h2#block");


// 1001 테스트넷 , 8217 메인넷
function GET_BLOCK(){
    fetch('https://node-api.klaytnapi.com/v1/klaytn',{
    method:'POST',
    headers:{
        'x-chain-id':'1001',
        'Content-Type':'application/json',
        'Authorization': 'Basic S0FTS1VQNExROTFCMDk0MTIxMFdDMVc2OlZZLXM2M3pleUl6TmNzbl9SNW9SRV84ZzJ6QmNZWU50bE53S0pURm8='
    },
    body: JSON.stringify({
        'jsonrpc':'2.0',
        'method':'klay_blockNumber',
        'params':[],
        'id':1,
    }),
}).then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data.result);
    BLOCK.innerText = parseInt(data.result,16);
});

}

setInterval(GET_BLOCK,800);
