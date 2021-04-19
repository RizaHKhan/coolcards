"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import "./TiltingCard.scss";
var vue_1 = require("vue");
exports.default = vue_1.defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    setup: function (props) {
        var clickListener = function () {
            alert("i got clicked");
        };
        return function () {
            return vue_1.h("div", {
                class: "tiling-card",
                onClick: clickListener,
            }, props.title);
        };
    },
});
//# sourceMappingURL=TiltingCard.js.map