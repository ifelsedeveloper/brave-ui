"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const modal_1 = require("../modal");
const contributeTable_1 = require("../contributeTable");
const helpers_1 = require("../../helpers");
class ModalContribute extends React.PureComponent {
    get headers() {
        return [
            helpers_1.getLocale('rewardsContributeVisited'),
            helpers_1.getLocale('rewardsContributeAttention')
        ];
    }
    render() {
        const { id, onClose, rows } = this.props;
        const numSites = rows && rows.length || 0;
        return (React.createElement(modal_1.default, { id: id, onClose: onClose },
            React.createElement(style_1.StyledWrapper, null,
                React.createElement(style_1.StyledTitle, null, helpers_1.getLocale('rewardsContribute')),
                React.createElement(style_1.StyledContent, null,
                    helpers_1.getLocale('rewardsContributeText1'),
                    " ",
                    React.createElement(style_1.StyledNum, null, numSites),
                    " ",
                    helpers_1.getLocale('sites'),
                    "."),
                React.createElement(contributeTable_1.default, { header: this.headers, rows: rows, numSites: numSites, allSites: true, showRowAmount: true }))));
    }
}
exports.default = ModalContribute;
//# sourceMappingURL=index.js.map