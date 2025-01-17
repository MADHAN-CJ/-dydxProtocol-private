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
exports.ProcessProposerMatchesEvents = void 0;
const order_1 = require("./order");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseProcessProposerMatchesEvents() {
    return {
        placedLongTermOrderIds: [],
        expiredStatefulOrderIds: [],
        orderIdsFilledInLastBlock: [],
        placedStatefulCancellationOrderIds: [],
        removedStatefulOrderIds: [],
        conditionalOrderIdsTriggeredInLastBlock: [],
        placedConditionalOrderIds: [],
        blockHeight: 0
    };
}
exports.ProcessProposerMatchesEvents = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.placedLongTermOrderIds) {
            order_1.OrderId.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.expiredStatefulOrderIds) {
            order_1.OrderId.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.orderIdsFilledInLastBlock) {
            order_1.OrderId.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.placedStatefulCancellationOrderIds) {
            order_1.OrderId.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.removedStatefulOrderIds) {
            order_1.OrderId.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.conditionalOrderIdsTriggeredInLastBlock) {
            order_1.OrderId.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.placedConditionalOrderIds) {
            order_1.OrderId.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.blockHeight !== 0) {
            writer.uint32(64).uint32(message.blockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProcessProposerMatchesEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.placedLongTermOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiredStatefulOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.orderIdsFilledInLastBlock.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.placedStatefulCancellationOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.removedStatefulOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.conditionalOrderIdsTriggeredInLastBlock.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.placedConditionalOrderIds.push(order_1.OrderId.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.blockHeight = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseProcessProposerMatchesEvents();
        message.placedLongTermOrderIds = ((_a = object.placedLongTermOrderIds) === null || _a === void 0 ? void 0 : _a.map(e => order_1.OrderId.fromPartial(e))) || [];
        message.expiredStatefulOrderIds = ((_b = object.expiredStatefulOrderIds) === null || _b === void 0 ? void 0 : _b.map(e => order_1.OrderId.fromPartial(e))) || [];
        message.orderIdsFilledInLastBlock = ((_c = object.orderIdsFilledInLastBlock) === null || _c === void 0 ? void 0 : _c.map(e => order_1.OrderId.fromPartial(e))) || [];
        message.placedStatefulCancellationOrderIds = ((_d = object.placedStatefulCancellationOrderIds) === null || _d === void 0 ? void 0 : _d.map(e => order_1.OrderId.fromPartial(e))) || [];
        message.removedStatefulOrderIds = ((_e = object.removedStatefulOrderIds) === null || _e === void 0 ? void 0 : _e.map(e => order_1.OrderId.fromPartial(e))) || [];
        message.conditionalOrderIdsTriggeredInLastBlock = ((_f = object.conditionalOrderIdsTriggeredInLastBlock) === null || _f === void 0 ? void 0 : _f.map(e => order_1.OrderId.fromPartial(e))) || [];
        message.placedConditionalOrderIds = ((_g = object.placedConditionalOrderIds) === null || _g === void 0 ? void 0 : _g.map(e => order_1.OrderId.fromPartial(e))) || [];
        message.blockHeight = (_h = object.blockHeight) !== null && _h !== void 0 ? _h : 0;
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc19wcm9wb3Nlcl9tYXRjaGVzX2V2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZHlkeHByb3RvY29sL3Y0LXByb3RvL3NyYy9jb2RlZ2VuL2R5ZHhwcm90b2NvbC9jbG9iL3Byb2Nlc3NfcHJvcG9zZXJfbWF0Y2hlc19ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0Q7QUFDbEQsd0RBQTBDO0FBNkQxQyxTQUFTLHNDQUFzQztJQUM3QyxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsRUFBRTtRQUMxQix1QkFBdUIsRUFBRSxFQUFFO1FBQzNCLHlCQUF5QixFQUFFLEVBQUU7UUFDN0Isa0NBQWtDLEVBQUUsRUFBRTtRQUN0Qyx1QkFBdUIsRUFBRSxFQUFFO1FBQzNCLHVDQUF1QyxFQUFFLEVBQUU7UUFDM0MseUJBQXlCLEVBQUUsRUFBRTtRQUM3QixXQUFXLEVBQUUsQ0FBQztLQUNmLENBQUM7QUFDSixDQUFDO0FBRVksUUFBQSw0QkFBNEIsR0FBRztJQUMxQyxNQUFNLENBQUMsT0FBcUMsRUFBRSxTQUFxQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNwRixLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRTtZQUM5QyxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRTtZQUMvQyxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRTtZQUMxRCxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRTtZQUMvQyxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyx1Q0FBdUMsRUFBRTtZQUMvRCxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFB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