import { StackProps } from '@chakra-ui/react';
import { AnimatedOnScrollStackType } from './animated-stack-type';
/**
 * AnimatedOnScrollStack is a flexible layout component that enables you to stack elements
 * horizontally or vertically, with the option to add space and dividers between them.
 *
 * It internally uses `display: flex` and renders a `div`, providing a simple way
 * to create distributed layouts with animation capabilities.
 *
 * @see Docs: https://chakra-ui.com/stack
 *
 * @component AnimatedOnScrollStack
 *
 * @param {boolean} [isInline] - If true, stacks elements in a row; if false, stacks them in a column.
 * @param {string} [direction] - Determines the stacking direction (overrides `isInline` if provided).
 * @param {string} [align] - Aligns the items along the cross axis.
 * @param {string} [justify] - Aligns the items along the main axis.
 * @param {string} [spacing="0.5rem"] - Spacing between stack items.
 * @param {string} [wrap] - Defines whether the items should wrap to the next line.
 * @param {ReactNode} children - The stack's child elements.
 * @param {ReactNode} divider - The divider element to be placed between stack items.
 * @param {string} className - Additional CSS classes for styling.
 * @param {boolean} shouldWrapChildren - If true, wraps each child with a StackItem component.
 * @param {number} interval - The interval between revealing animated stack items.
 * @param {string} origin - The origin for the reveal animation.
 * @param {string} distance - The distance for the reveal animation.
 * @param {number} duration - The duration of the reveal animation.
 * @param {number} delay - The base delay for revealing stack items.
 * @param {boolean} reset - If true, resets the reveal animation on subsequent views.
 * @param {string} easing - The easing function for the reveal animation.
 * @param {number} opacity - The opacity for the reveal animation.
 * @param {string} rotate - The rotation for the reveal animation.
 * @param {number} scale - The scale for the reveal animation.
 * @param {boolean} cleanup - If true, removes the reveal animation styles after they are applied.
 * @param {boolean} desktop - If true, reveals on desktop devices.
 * @param {boolean} mobile - If true, reveals on mobile devices.
 * @param {boolean} useDelay - If true, uses delay for the reveal animation.
 * @param {number} viewFactor - The view factor for triggering the reveal animation.
 * @param {number} viewOffset - The view offset for triggering the reveal animation.
 *
 * @returns {ReactElement} - The AnimatedOnScrollStack component.
 */
export declare const AnimatedOnScrollStack: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", StackProps & AnimatedOnScrollStackType>;
