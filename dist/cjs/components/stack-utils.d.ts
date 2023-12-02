import { ResponsiveValue, SystemProps } from '@chakra-ui/system';
export declare type StackDirection = ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
interface Options {
    spacing: SystemProps['margin'];
    direction: StackDirection;
}
export declare function getDividerStyles(options: Options): {
    '&': any;
};
export {};
