"use strict";
exports.__esModule = true;
exports.getDividerStyles = void 0;
var breakpoint_utils_1 = require("@chakra-ui/breakpoint-utils");
function getDividerStyles(options) {
    var spacing = options.spacing, direction = options.direction;
    var dividerStyles = {
        column: {
            my: spacing,
            mx: 0,
            borderLeftWidth: 0,
            borderBottomWidth: '1px'
        },
        'column-reverse': {
            my: spacing,
            mx: 0,
            borderLeftWidth: 0,
            borderBottomWidth: '1px'
        },
        row: {
            mx: spacing,
            my: 0,
            borderLeftWidth: '1px',
            borderBottomWidth: 0
        },
        'row-reverse': {
            mx: spacing,
            my: 0,
            borderLeftWidth: '1px',
            borderBottomWidth: 0
        }
    };
    return {
        '&': (0, breakpoint_utils_1.mapResponsive)(direction, function (value) { return dividerStyles[value]; })
    };
}
exports.getDividerStyles = getDividerStyles;
//# sourceMappingURL=stack-utils.js.map