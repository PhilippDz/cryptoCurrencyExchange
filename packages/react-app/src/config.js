import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x3Ae602D2899dc981247a66f09740469933269171"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/ot7nb35jU3ieI1Y4tGDjCqdfp8tjLH8E",
  },
};