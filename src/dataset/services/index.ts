import { RequestInfo, RequestInit } from "node-fetch";
import fetch from "node-fetch";
import { CoinsFetchData } from "../../types/coingecko";

export async function fetchServiceNodes() {
  let data;
  try {
    const response = await fetch("http://public-na.optf.ngo:22023/json_rpc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"jsonrpc":"2.0","id":"0","method":"get_service_nodes", "params": {"service_node_pubkeys": []}}',
    });
    data = await response.json();
  } catch (err) {
    console.log(err);
  }
  return data;
}

export async function fetchBlockchainSize() {
  let data;
  try {
    const response = await fetch("http://public-na.optf.ngo:22023/json_rpc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"jsonrpc":"2.0","id":"0","method":"get_info", "params": {"service_node_pubkeys": []}}',
    });

    data = await response.json();
  } catch (err) {
    console.log(err);
  }
  return data;
}

export async function fetchMarketData(): Promise<CoinsFetchData> {
  let data: CoinsFetchData | any;
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/loki-network",
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    );
    data = await response.json();
  } catch (err) {
    console.log(err);
  }
  return data;
}
