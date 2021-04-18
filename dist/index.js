"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = vue_1.defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    render: function () {
        return vue_1.h("p", {}, this.title);
    },
});
//# sourceMappingURL=index.js.map