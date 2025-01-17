"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLCDClient = void 0;
const lcd_1 = require("@osmonauts/lcd");
const createLCDClient = async ({ restEndpoint }) => {
    const requestClient = new lcd_1.LCDClient({
        restEndpoint
    });
    return {
        cosmos: {
            auth: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/auth/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            authz: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            bank: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            base: {
                node: {
                    v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/base/node/v1beta1/query.lcd")))).LCDQueryClient({
                        requestClient
                    })
                },
                tendermint: {
                    v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/base/tendermint/v1beta1/query.lcd")))).LCDQueryClient({
                        requestClient
                    })
                }
            },
            circuit: {
                v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/circuit/v1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            consensus: {
                v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/consensus/v1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            distribution: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            evidence: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/evidence/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            feegrant: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/feegrant/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            gov: {
                v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1/query.lcd")))).LCDQueryClient({
                    requestClient
                }),
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            group: {
                v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/group/v1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            mint: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/mint/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            nft: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/nft/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            params: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/params/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            slashing: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/slashing/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            staking: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            tx: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/tx/v1beta1/service.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            upgrade: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            }
        },
        dydxprotocol: {
            accountplus: new (await Promise.resolve().then(() => __importStar(require("./accountplus/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            assets: new (await Promise.resolve().then(() => __importStar(require("./assets/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            blocktime: new (await Promise.resolve().then(() => __importStar(require("./blocktime/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            bridge: new (await Promise.resolve().then(() => __importStar(require("./bridge/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            clob: new (await Promise.resolve().then(() => __importStar(require("./clob/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            delaymsg: new (await Promise.resolve().then(() => __importStar(require("./delaymsg/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            epochs: new (await Promise.resolve().then(() => __importStar(require("./epochs/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            feetiers: new (await Promise.resolve().then(() => __importStar(require("./feetiers/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            listing: new (await Promise.resolve().then(() => __importStar(require("./listing/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            perpetuals: new (await Promise.resolve().then(() => __importStar(require("./perpetuals/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            prices: new (await Promise.resolve().then(() => __importStar(require("./prices/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            ratelimit: new (await Promise.resolve().then(() => __importStar(require("./ratelimit/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            revshare: new (await Promise.resolve().then(() => __importStar(require("./revshare/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            rewards: new (await Promise.resolve().then(() => __importStar(require("./rewards/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            stats: new (await Promise.resolve().then(() => __importStar(require("./stats/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            subaccounts: new (await Promise.resolve().then(() => __importStar(require("./subaccounts/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            vault: new (await Promise.resolve().then(() => __importStar(require("./vault/query.lcd")))).LCDQueryClient({
                requestClient
            }),
            vest: new (await Promise.resolve().then(() => __importStar(require("./vest/query.lcd")))).LCDQueryClient({
                requestClient
            })
        }
    };
};
exports.createLCDClient = createLCDClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGNkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkeWR4cHJvdG9jb2wvdjQtcHJvdG8vc3JjL2NvZGVnZW4vZHlkeHByb3RvY29sL2xjZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUEyQztBQUNwQyxNQUFNLGVBQWUsR0FBRyxLQUFLLEVBQUUsRUFDcEMsWUFBWSxFQUdiLEVBQUUsRUFBRTtJQUNILE1BQU0sYUFBYSxHQUFHLElBQUksZUFBUyxDQUFDO1FBQ2xDLFlBQVk7S0FDYixDQUFDLENBQUM7SUFDSCxPQUFPO1FBQ0wsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxJQUFJLENBQUMsd0RBQWEsa0NBQWtDLEdBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztvQkFDN0UsYUFBYTtpQkFDZCxDQUFDO2FBQ0g7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyx3REFBYSxtQ0FBbUMsR0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUM5RSxhQUFhO2lCQUNkLENBQUM7YUFDSDtZQUNELElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsSUFBSSxDQUFDLHdEQUFhLGtDQUFrQyxHQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7b0JBQzdFLGFBQWE7aUJBQ2QsQ0FBQzthQUNIO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsSUFBSSxDQUFDLHdEQUFhLHVDQUF1QyxHQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7d0JBQ2xGLGFBQWE7cUJBQ2QsQ0FBQztpQkFDSDtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQyx3REFBYSw2Q0FBNkMsR0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO3dCQUN4RixhQUFhO3FCQUNkLENBQUM7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