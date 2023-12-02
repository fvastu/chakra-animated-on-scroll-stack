import { getValidChildren } from '@chakra-ui/react-children-utils'
import { cx } from '@chakra-ui/shared-utils'
import { chakra, forwardRef } from '@chakra-ui/system'
import { Fragment, cloneElement, createRef, useEffect, useMemo, useRef } from 'react'

import { StackItem, StackProps } from '@chakra-ui/react'
import React from 'react'
import { AnimatedStackDefaultValues } from './animated-stack-default-values'
import { AnimatedOnScrollStackType } from './animated-stack-type'
import { getDividerStyles } from './stack-utils'

export type AnimatedOnScrollStackProps = StackProps & AnimatedOnScrollStackType

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
export const AnimatedOnScrollStack = forwardRef<AnimatedOnScrollStackProps, 'div'>((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = '0.5rem',
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    interval,
    origin = AnimatedStackDefaultValues.origin,
    distance = AnimatedStackDefaultValues.distance,
    duration = AnimatedStackDefaultValues.duration,
    delay,
    reset = AnimatedStackDefaultValues.reset,
    easing = AnimatedStackDefaultValues.easing,
    opacity = AnimatedStackDefaultValues.opacity,
    rotate = AnimatedStackDefaultValues.rotate,
    scale = AnimatedStackDefaultValues.scale,
    cleanup = AnimatedStackDefaultValues.cleanup,
    desktop = AnimatedStackDefaultValues.desktop,
    mobile = AnimatedStackDefaultValues.mobile,
    useDelay = AnimatedStackDefaultValues.useDelay,
    viewFactor = AnimatedStackDefaultValues.viewFactor,
    viewOffset = AnimatedStackDefaultValues.viewOffset,
    ...rest
  } = props

  const listRefs = useRef([]) as any

  const direction = isInline ? 'row' : directionProp ?? 'column'

  const dividerStyle = useMemo(() => getDividerStyles({ spacing, direction }), [spacing, direction])

  const hasDivider = !!divider
  const shouldUseChildren = !shouldWrapChildren && !hasDivider

  const clones = useMemo(() => {
    const validChildren = getValidChildren(children)
    return shouldUseChildren
      ? validChildren
      : validChildren.map((child, index) => {
          // Prefer provided child key, fallback to index
          const key = typeof child.key !== 'undefined' ? child.key : index
          const isLast = index + 1 === validChildren.length
          const wrappedChild = <StackItem key={key}>{child}</StackItem>
          const _child = shouldWrapChildren ? wrappedChild : child

          if (!hasDivider) return _child

          const clonedDivider = cloneElement(divider as React.ReactElement<any>, {
            __css: dividerStyle,
          })

          const _divider = isLast ? null : clonedDivider

          return (
            <Fragment key={key}>
              {_child}
              {_divider}
            </Fragment>
          )
        })
  }, [divider, dividerStyle, hasDivider, shouldUseChildren, shouldWrapChildren, children])

  const revealList = React.Children.map(clones, (child: any) => React.cloneElement(child, { ref: createRef() }))

  useEffect(() => {
    async function revElement() {
      const sr = (await require('scrollreveal')).default(AnimatedStackDefaultValues)
      const Interval = interval != 0 ? interval : 50
      const baseDelay: any = delay != 0 || undefined || null ? delay : 300
      revealList.forEach((e: any, index: number) => {
        listRefs[index] = e.ref
        const currentIntervalDelay = Interval * index
        if (listRefs[index].current) {
          sr.reveal(listRefs[index].current, {
            delay: baseDelay + currentIntervalDelay,
            origin,
            distance,
            duration,
            reset,
            easing,
            opacity,
            rotate,
            scale,
            cleanup,
            desktop,
            mobile,
            useDelay,
            viewFactor,
            viewOffset,
          })
        }
      })
    }
    revElement()
  }, [])

  const _className = cx('chakra-stack', className)

  return (
    <chakra.div
      ref={ref}
      display='flex'
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction}
      flexWrap={wrap}
      gap={hasDivider ? undefined : spacing}
      className={_className}
      {...rest}
    >
      {revealList}
    </chakra.div>
  )
})

AnimatedOnScrollStack.displayName = 'AnimatedOnScrollStackType'
