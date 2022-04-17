import { axios } from 'axios'

  //#region Network
  function getAxiosDataNetworkStats  (){return axios.get("https://supportxmr.com/api/network/stats")};

  function getAxiosDataConfig() { return axios.get("https://supportxmr.com/api/config")};
  //#region Network

  //#region Pool
  function getAxiosDataPoolAddressType() { return axios.get("https://supportxmr.com/api/pool/address_type/:address")};

  function getAxiosDataPoolStats() { return axios.get("https://supportxmr.com/api/pool/stats")};

  function getAxiosDataPoolChartHashrate() { return axios.get("https://supportxmr.com/api/pool/chart/hashrate")};

  function getAxiosDataPoolChartMiners() { return axios.get("https://supportxmr.com/api/pool/chart/miners")};

  function getAxiosDataChartHashratePoolType  (){ return axios.get("https://supportxmr.com/api/pool/chart/hashrate/:pool_type")};

  function getAxiosDataPoolChartMinersPoolType  (){ return axios.get("https://supportxmr.com/api/pool/chart/miners/:pool_type")};

  function getAxiosDataPoolStatsPoolType  (){ return axios.get("https://supportxmr.com/api/pool/stats/:pool_type")};

  function getAxiosDataPoolPorts  (){ return axios.get("https://supportxmr.com/api/pool/ports")};

  function getAxiosDataPoolBlocksPoolType  (){ return axios.get("https://supportxmr.com/api/pool/blocks/:pool_type")};

  function getAxiosDataPoolBlocks() { return axios.get("https://supportxmr.com/api/pool/blocks")};

  function getAxiosDataPoolPaymentsPoolType() { return axios.get("https://supportxmr.com/api/pool/payments/:pool_type")};

  function getAxiosDataPoolPayments() { return axios.get("https://supportxmr.com/api/pool/payments")};
  //#endregion Pool

  //#region Miner
  function getAxiosDataMinerIdentifiers(address) { return axios.get("https://supportxmr.com/api/miner/"+address+"/identifiers")};

  function getAxiosDataMinerPayments(address) { return axios.get("https://supportxmr.com/api/miner/"+address+"/payments")};

  function getAxiosDataAllWorkers(address) { return axios.get("https://supportxmr.com/api/miner/"+address+"/stats/allWorkers")};

  function getAxiosDataMinerStatsIdentifier(address, identifier) { return axios.get("https://supportxmr.com/api/miner/"+address+"/stats/"+identifier)};

  function getAxiosDataMinerChartHashrate(address) { return axios.get("https://supportxmr.com/api/miner/"+address+"/chart/hashrate")};

  function getAxiosDataMinerChartHashrateAllWorkers(address) { return axios.get("https://supportxmr.com/api/miner/"+address+"/chart/hashrate/allWorkers")};

  function getAxiosDataChartHashrate(address, identifier) { return axios.get("https://supportxmr.com/api/miner/"+address+"/chart/hashrate/"+identifier)};

  function getAxiosDataMinerStats(address) { return axios.get("https://supportxmr.com/api/miner/"+address+"/stats")}
  //#endregion Miner

export { 
  getAxiosDataNetworkStats ,getAxiosDataConfig ,getAxiosDataPoolAddressType ,getAxiosDataPoolStats ,getAxiosDataPoolChartHashrate 
 ,getAxiosDataPoolChartMiners ,getAxiosDataChartHashratePoolType ,getAxiosDataPoolChartMinersPoolType
 ,getAxiosDataPoolStatsPoolType ,getAxiosDataPoolPorts ,getAxiosDataPoolBlocksPoolType ,getAxiosDataPoolBlocks 
 ,getAxiosDataPoolPaymentsPoolType ,getAxiosDataPoolPayments ,getAxiosDataMinerIdentifiers ,getAxiosDataMinerPayments
 ,getAxiosDataAllWorkers ,getAxiosDataMinerStatsIdentifier ,getAxiosDataMinerChartHashrate ,getAxiosDataMinerChartHashrateAllWorkers ,getAxiosDataChartHashrate ,getAxiosDataMinerStats
}