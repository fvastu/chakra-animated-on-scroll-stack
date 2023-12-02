<br>
<p align="center">
  <h1 align="center">AnimatedOnScrollStack for ChakraUI</h1>
</p>
<p align="center">The easiest way to add scroll animations to your ChakraUI elements</p>

<p align="center">
    <img width="100%" src="https://github.com/fvastu/chakra-animated-on-scroll-stack/blob/main/scroll-demo.gif" alt="Demo Scroll Animation">
</p>

# Introduction
`animated-on-scroll-stack` simplifies the process of incorporating captivating scroll animations into your Next.js project, seamlessly integrating with all ChakraUI properties. 
This project is a union between the ideas from [next-reveal](https://github.com/ritmillio/next-reveal) and the power of ChakraUI. 

### Why AnimatedOnScrollStack?
- ✨ Easily animate ChakraUI elements with captivating scroll animations.
- 🚀 Seamless integration with ChakraUI, leveraging its powerful features.
- 📚 Inspired by Scrollreveal.js – for more details, refer to [https://scrollrevealjs.org](https://scrollrevealjs.org).
- 🐧 ⭐ If you find this project helpful, give it a star ⭐ 🐧

# Installation
```bash
npm i @fvastu/animated-on-scroll-stack
```
or
```bash
yarn add  @fvastu/animated-on-scroll-stack
```
# Usage

### AnimatedOnScrollStack
You can animate multiple elements which will result a sequence animation.

Basic usage
*Note that in AnimatedOnScrollStack you need to specify at least the delay and interval*
```js
'use client'

import { AnimatedOnScrollStack } from "@fvastu/animated-on-scroll-stack";
```
```html
<AnimatedOnScrollStack interval={60} delay={500}  className='flex flex-wrap items-center justify-center'>
  <Card className='bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
  <Card className='bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
  <Card className='bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
  <Card className='bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
</AnimatedOnScrollStack>
```

---
### Options/Animations

| Option                           | Type                    | Description                                                                                                                                                                          |
| ---------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `delay`                    | number                  | `delay` is the time before reveal animations begin.                                                                               |
| `distance`                            | string                  | `distance` controls how far elements move when revealed.                                                                                                                                                       |
| `duration`                     | number                  | `duration` controls how long animations take to complete.                                                               |
| `easing`                          | string | `easing` controls how animations transition between their start and end values.                                                                                                                    |
| `interval`                         | number | `interval` is the time between each reveal.                                                                                                                  |
| `opacity`                      | `number | null`                  | `opacity` specifies the opacity they have prior to being revealed.                                                                                                       |
| `origin`                      | string                  | `origin` specifies what direction elements come from when revealed.                                                                                                                                                        |
| `rotate`                      | object                  | `rotate` specifies the rotation elements have prior to being revealed.                                                                                                                                                        |
| `scale`                      | number                  | `scale` specifies the size of elements have prior to being revealed.                                                                                                                                                        |
| `desktop`                      | boolean                  | `desktop`  enables/disables animations on desktop browsers.                                                                                                                                                        |
| `mobile`                      | boolean                  | `mobile` enables/disables animations on mobile browsers.                                                                                                                                                        |
| `reset`                      | boolean                  | `reset` enables/disables elements returning to their initialized position when they leave the viewport. When `true` elements reveal each time they enter the viewport instead of once.                                                                                                                                                        |
| `useDelay`                      | string                  | `useDelay` specifies when values assigned to options.delay are used.                                                                                                                                                        |
| `viewFactor`                      | number                  | `viewFactor` specifies what portion of an element must be within the viewport for it to be considered visible.                                                                                                                                                        |
| `viewOffset`                      | object                  | `viewOffset` expands/contracts the active boundaries of the viewport when calculating element visibility.                                                                                                                                                        |

### Defaults
```js
const defaultRevealOptions  = {
delay:  350,
distance:  '50px',
duration:  650,
easing:  'cubic-bezier(0.5, 0, 0, 1)',
opacity:  0,
origin:  'top',
rotate: {
	x:  0,
	y:  0,
	z:  0,
},
scale:  1,
cleanup:  false,
desktop:  true,
mobile:  true,
reset:  false,
useDelay:  'always',
viewFactor:  0.0,
viewOffset: {
		top:  0,
		right:  0,
		bottom:  0,
		left:  0,
	},
}
```

# License

Since this package is using Scrollreveal.js, in case of commercial use check out their [Commercial License](https://scrollrevealjs.org/pricing/)
