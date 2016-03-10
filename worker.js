function initWorker(){
  onmessage = function(event){
    var lastNum = event.data;
    findPrimes(lastNum);
  };
  postMessage("workerReady");
}

function findPrimes(lastNum){
  var n = 1;
  search: while (n < parseInt(lastNum)) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    postMessage(n)
  }
  postMessage("ended");
}

initWorker();