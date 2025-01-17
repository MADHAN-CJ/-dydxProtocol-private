export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
        };
        base: {
            node: {
                v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
            };
            tendermint: {
                v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
            };
        };
        circuit: {
            v1: import("../cosmos/circuit/v1/query.lcd").LCDQueryClient;
        };
        consensus: {
            v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
            v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
        };
        group: {
            v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
        };
        params: {
            v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
        };
    };
    dydxprotocol: {
        accountplus: import("./accountplus/query.lcd").LCDQueryClient;
        assets: import("./assets/query.lcd").LCDQueryClient;
        blocktime: import("./blocktime/query.lcd").LCDQueryClient;
        bridge: import("./bridge/query.lcd").LCDQueryClient;
        clob: import("./clob/query.lcd").LCDQueryClient;
        delaymsg: import("./delaymsg/query.lcd").LCDQueryClient;
        epochs: import("./epochs/query.lcd").LCDQueryClient;
        feetiers: import("./feetiers/query.lcd").LCDQueryClient;
        listing: import("./listing/query.lcd").LCDQueryClient;
        perpetuals: import("./perpetuals/query.lcd").LCDQueryClient;
        prices: import("./prices/query.lcd").LCDQueryClient;
        ratelimit: import("./ratelimit/query.lcd").LCDQueryClient;
        revshare: import("./revshare/query.lcd").LCDQueryClient;
        rewards: import("./rewards/query.lcd").LCDQueryClient;
        stats: import("./stats/query.lcd").LCDQueryClient;
        subaccounts: import("./subaccounts/query.lcd").LCDQueryClient;
        vault: import("./vault/query.lcd").LCDQueryClient;
        vest: import("./vest/query.lcd").LCDQueryClient;
    };
}>;
