import { __assign, __awaiter, __generator, __rest } from "tslib";
import { getValidChildren } from '@chakra-ui/react-children-utils';
import { cx } from '@chakra-ui/shared-utils';
import { chakra, forwardRef } from '@chakra-ui/system';
import { Fragment, cloneElement, createRef, useEffect, useMemo, useRef } from 'react';
import { StackItem } from '@chakra-ui/react';
import React from 'react';
import { AnimatedStackDefaultValues } from './animated-stack-default-values';
import { getDividerStyles } from './stack-utils';
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
export var AnimatedOnScrollStack = forwardRef(function (props, ref) {
    var isInline = props.isInline, directionProp = props.direction, align = props.align, justify = props.justify, _a = props.spacing, spacing = _a === void 0 ? '0.5rem' : _a, wrap = props.wrap, children = props.children, divider = props.divider, className = props.className, shouldWrapChildren = props.shouldWrapChildren, interval = props.interval, _b = props.origin, origin = _b === void 0 ? AnimatedStackDefaultValues.origin : _b, _c = props.distance, distance = _c === void 0 ? AnimatedStackDefaultValues.distance : _c, _d = props.duration, duration = _d === void 0 ? AnimatedStackDefaultValues.duration : _d, delay = props.delay, _e = props.reset, reset = _e === void 0 ? AnimatedStackDefaultValues.reset : _e, _f = props.easing, easing = _f === void 0 ? AnimatedStackDefaultValues.easing : _f, _g = props.opacity, opacity = _g === void 0 ? AnimatedStackDefaultValues.opacity : _g, _h = props.rotate, rotate = _h === void 0 ? AnimatedStackDefaultValues.rotate : _h, _j = props.scale, scale = _j === void 0 ? AnimatedStackDefaultValues.scale : _j, _k = props.cleanup, cleanup = _k === void 0 ? AnimatedStackDefaultValues.cleanup : _k, _l = props.desktop, desktop = _l === void 0 ? AnimatedStackDefaultValues.desktop : _l, _m = props.mobile, mobile = _m === void 0 ? AnimatedStackDefaultValues.mobile : _m, _o = props.useDelay, useDelay = _o === void 0 ? AnimatedStackDefaultValues.useDelay : _o, _p = props.viewFactor, viewFactor = _p === void 0 ? AnimatedStackDefaultValues.viewFactor : _p, _q = props.viewOffset, viewOffset = _q === void 0 ? AnimatedStackDefaultValues.viewOffset : _q, rest = __rest(props, ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren", "interval", "origin", "distance", "duration", "delay", "reset", "easing", "opacity", "rotate", "scale", "cleanup", "desktop", "mobile", "useDelay", "viewFactor", "viewOffset"]);
    var listRefs = useRef([]);
    var direction = isInline ? 'row' : directionProp !== null && directionProp !== void 0 ? directionProp : 'column';
    var dividerStyle = useMemo(function () { return getDividerStyles({ spacing: spacing, direction: direction }); }, [spacing, direction]);
    var hasDivider = !!divider;
    var shouldUseChildren = !shouldWrapChildren && !hasDivider;
    var clones = useMemo(function () {
        var validChildren = getValidChildren(children);
        return shouldUseChildren
            ? validChildren
            : validChildren.map(function (child, index) {
                // Prefer provided child key, fallback to index
                var key = typeof child.key !== 'undefined' ? child.key : index;
                var isLast = index + 1 === validChildren.length;
                var wrappedChild = React.createElement(StackItem, { key: key }, child);
                var _child = shouldWrapChildren ? wrappedChild : child;
                if (!hasDivider)
                    return _child;
                var clonedDivider = cloneElement(divider, {
                    __css: dividerStyle
                });
                var _divider = isLast ? null : clonedDivider;
                return (React.createElement(Fragment, { key: key },
                    _child,
                    _divider));
            });
    }, [divider, dividerStyle, hasDivider, shouldUseChildren, shouldWrapChildren, children]);
    var revealList = React.Children.map(clones, function (child) { return React.cloneElement(child, { ref: createRef() }); });
    useEffect(function () {
        function revElement() {
            return __awaiter(this, void 0, void 0, function () {
                var sr, Interval, baseDelay;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, require('scrollreveal')];
                        case 1:
                            sr = (_a.sent())["default"](AnimatedStackDefaultValues);
                            Interval = interval != 0 ? interval : 50;
                            baseDelay = delay != 0 || undefined || null ? delay : 300;
                            revealList.forEach(function (e, index) {
                                listRefs[index] = e.ref;
                                var currentIntervalDelay = Interval * index;
                                if (listRefs[index].current) {
                                    sr.reveal(listRefs[index].current, {
                                        delay: baseDelay + currentIntervalDelay,
                                        origin: origin,
                                        distance: distance,
                                        duration: duration,
                                        reset: reset,
                                        easing: easing,
                                        opacity: opacity,
                                        rotate: rotate,
                                        scale: scale,
                                        cleanup: cleanup,
                                        desktop: desktop,
                                        mobile: mobile,
                                        useDelay: useDelay,
                                        viewFactor: viewFactor,
                                        viewOffset: viewOffset
                                    });
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        }
        revElement();
    }, []);
    var _className = cx('chakra-stack', className);
    return (React.createElement(chakra.div, __assign({ ref: ref, display: 'flex', alignItems: align, justifyContent: justify, flexDirection: direction, flexWrap: wrap, gap: hasDivider ? undefined : spacing, className: _className }, rest), revealList));
});
AnimatedOnScrollStack.displayName = 'AnimatedOnScrollStackType';
//# sourceMappingURL=animated-stack.js.map