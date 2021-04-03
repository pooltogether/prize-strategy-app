module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract BeforeAwardListenerInterface",
        "name": "beforeAwardListener",
        "type": "address"
      }
    ],
    "name": "BeforeAwardListenerSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IERC20Upgradeable",
        "name": "externalErc20",
        "type": "address"
      }
    ],
    "name": "ExternalErc20AwardAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IERC20Upgradeable",
        "name": "externalErc20Award",
        "type": "address"
      }
    ],
    "name": "ExternalErc20AwardRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IERC721Upgradeable",
        "name": "externalErc721",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "ExternalErc721AwardAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract IERC721Upgradeable",
        "name": "externalErc721Award",
        "type": "address"
      }
    ],
    "name": "ExternalErc721AwardRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "prizePeriodStart",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "prizePeriodSeconds",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "contract PrizePool",
        "name": "prizePool",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract TicketInterface",
        "name": "ticket",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract IERC20Upgradeable",
        "name": "sponsorship",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract RNGInterface",
        "name": "rng",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract IERC20Upgradeable[]",
        "name": "externalErc20Awards",
        "type": "address[]"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract PeriodicPrizeStrategyListenerInterface",
        "name": "periodicPrizeStrategyListener",
        "type": "address"
      }
    ],
    "name": "PeriodicPrizeStrategyListenerSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "prizePeriodSeconds",
        "type": "uint256"
      }
    ],
    "name": "PrizePeriodSecondsUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "prizePool",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "rngRequestId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "rngLockBlock",
        "type": "uint32"
      }
    ],
    "name": "PrizePoolAwardCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "prizePool",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "rngRequestId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "rngLockBlock",
        "type": "uint32"
      }
    ],
    "name": "PrizePoolAwardStarted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "randomNumber",
        "type": "uint256"
      }
    ],
    "name": "PrizePoolAwarded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "prizePeriodStartedAt",
        "type": "uint256"
      }
    ],
    "name": "PrizePoolOpened",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "RngRequestFailed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "rngRequestTimeout",
        "type": "uint32"
      }
    ],
    "name": "RngRequestTimeoutSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract RNGInterface",
        "name": "rngService",
        "type": "address"
      }
    ],
    "name": "RngServiceUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract TokenListenerInterface",
        "name": "tokenListener",
        "type": "address"
      }
    ],
    "name": "TokenListenerUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "_externalErc20",
        "type": "address"
      }
    ],
    "name": "addExternalErc20Award",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable[]",
        "name": "_externalErc20s",
        "type": "address[]"
      }
    ],
    "name": "addExternalErc20Awards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_externalErc721",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "_tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "addExternalErc721Award",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "beforeAwardListener",
    "outputs": [
      {
        "internalType": "contract BeforeAwardListenerInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "controlledToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      }
    ],
    "name": "beforeTokenMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "controlledToken",
        "type": "address"
      }
    ],
    "name": "beforeTokenTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "currentTime",
        "type": "uint256"
      }
    ],
    "name": "calculateNextPrizePeriodStartTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "canCompleteAward",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "canStartAward",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cancelAward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "completeAward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentPrize",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "secondsPerBlockMantissa",
        "type": "uint256"
      }
    ],
    "name": "estimateRemainingBlocksToPrize",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getExternalErc20Awards",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_externalErc721",
        "type": "address"
      }
    ],
    "name": "getExternalErc721AwardTokenIds",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getExternalErc721Awards",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLastRngLockBlock",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLastRngRequestId",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_prizePeriodStart",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_prizePeriodSeconds",
        "type": "uint256"
      },
      {
        "internalType": "contract PrizePool",
        "name": "_prizePool",
        "type": "address"
      },
      {
        "internalType": "contract TicketInterface",
        "name": "_ticket",
        "type": "address"
      },
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "_sponsorship",
        "type": "address"
      },
      {
        "internalType": "contract RNGInterface",
        "name": "_rng",
        "type": "address"
      },
      {
        "internalType": "contract IERC20Upgradeable[]",
        "name": "externalErc20Awards",
        "type": "address[]"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isPrizePeriodOver",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isRngCompleted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isRngRequested",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isRngTimedOut",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "periodicPrizeStrategyListener",
    "outputs": [
      {
        "internalType": "contract PeriodicPrizeStrategyListenerInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "prizePeriodEndAt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "prizePeriodRemainingSeconds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "prizePeriodSeconds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "prizePeriodStartedAt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "prizePool",
    "outputs": [
      {
        "internalType": "contract PrizePool",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "_externalErc20",
        "type": "address"
      },
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "_prevExternalErc20",
        "type": "address"
      }
    ],
    "name": "removeExternalErc20Award",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_externalErc721",
        "type": "address"
      },
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_prevExternalErc721",
        "type": "address"
      }
    ],
    "name": "removeExternalErc721Award",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rng",
    "outputs": [
      {
        "internalType": "contract RNGInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rngRequestTimeout",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract BeforeAwardListenerInterface",
        "name": "_beforeAwardListener",
        "type": "address"
      }
    ],
    "name": "setBeforeAwardListener",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract PeriodicPrizeStrategyListenerInterface",
        "name": "_periodicPrizeStrategyListener",
        "type": "address"
      }
    ],
    "name": "setPeriodicPrizeStrategyListener",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_prizePeriodSeconds",
        "type": "uint256"
      }
    ],
    "name": "setPrizePeriodSeconds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_rngRequestTimeout",
        "type": "uint32"
      }
    ],
    "name": "setRngRequestTimeout",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract RNGInterface",
        "name": "rngService",
        "type": "address"
      }
    ],
    "name": "setRngService",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract TokenListenerInterface",
        "name": "_tokenListener",
        "type": "address"
      }
    ],
    "name": "setTokenListener",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sponsorship",
    "outputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "startAward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticket",
    "outputs": [
      {
        "internalType": "contract TicketInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenListener",
    "outputs": [
      {
        "internalType": "contract TokenListenerInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
