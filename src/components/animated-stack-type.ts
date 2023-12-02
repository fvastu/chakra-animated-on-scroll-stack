/**
 * AnimatedStackType
 *
 * Type definition for configuring reveal animations for a list of elements.
 * This type is used as props for a React component that applies reveal animations.
 *
 * @interface AnimatedOnScrollStackType
 * @property {React.ReactNode} children - The content to be revealed. Typically, this is a list of React elements.
 * @property {any} [className] - Additional class names to be applied to the container of the revealed elements.
 * @property {number} interval - The time between each reveal animation for consecutive elements.
 * @property {string} [origin] - Specifies the direction from which elements should appear when revealed.
 * @property {string} [distance] - Controls how far elements move when revealed.
 * @property {number} [duration] - Controls how long the reveal animations take to complete.
 * @property {number} [delay] - The time before reveal animations begin.
 * @property {string} [easing] - Controls how animations transition between their start and end values.
 * @property {number} [opacity] - Specifies the initial opacity of elements before they are revealed.
 * @property {{ x: number; y: number; z: number }} [rotate] - Specifies the rotation of elements before they are revealed.
 * @property {number} [scale] - Specifies the initial size of elements before they are revealed.
 * @property {boolean} [cleanup] - If true, elements return to their initialized position when they leave the viewport.
 * @property {boolean} [desktop] - Enables or disables animations on desktop browsers.
 * @property {boolean} [mobile] - Enables or disables animations on mobile browsers.
 * @property {boolean} [reset] - If true, elements reveal each time they enter the viewport instead of once.
 * @property {string} [useDelay] - Specifies when values assigned to options.delay are used.
 * @property {number} [viewFactor] - Specifies what portion of an element must be within the viewport to be considered visible.
 * @property {{ top: number; right: number; bottom: number; left: number }} [viewOffset] - Expands/contracts the active boundaries of the viewport when calculating element visibility.
 */
export type AnimatedOnScrollStackType = {
  children: React.ReactNode
  className?: any
  interval: number
  origin?: string
  distance?: string
  duration?: number
  delay?: number
  easing?: string
  opacity?: number
  rotate?: { x: number; y: number; z: number }
  scale?: number
  cleanup?: boolean
  desktop?: boolean
  mobile?: boolean
  reset?: boolean
  useDelay?: string
  viewFactor?: number
  viewOffset?: { top: number; right: number; bottom: number; left: number }
}
