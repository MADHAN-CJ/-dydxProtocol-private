/// <reference types="long" />
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MarketPrice is used by the application to store/retrieve oracle price. */
export interface MarketPrice {
    /** Unique, sequentially-generated value that matches `MarketParam`. */
    id: number;
    /**
     * Static value. The exponent of the price. See the comment on the duplicate
     * MarketParam field for more information.
     */
    exponent: number;
    /**
     * The variable value that is updated by oracle price updates. `0` if it has
     * never been updated, `>0` otherwise.
     */
    price: Long;
}
/** MarketPrice is used by the application to store/retrieve oracle price. */
export interface MarketPriceSDKType {
    id: number;
    exponent: number;
    price: Long;
}
export declare const MarketPrice: {
    encode(message: MarketPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketPrice;
    fromPartial(object: DeepPartial<MarketPrice>): MarketPrice;
};