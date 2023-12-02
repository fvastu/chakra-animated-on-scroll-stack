import { mapResponsive } from '@chakra-ui/breakpoint-utils';
export function getDividerStyles(options) {
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
        '&': mapResponsive(direction, function (value) { return dividerStyles[value]; })
    };
}
//# sourceMappingURL=stack-utils.js.map