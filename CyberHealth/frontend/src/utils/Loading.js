import { Grid } from '@material-ui/core'
import anime from 'animejs'
import { useEffect } from 'react'
import img from '../assets/Vector.svg'
export default function Loading({ width, stroke, color }) {
  useEffect(() => {
    anime({
      targets: '.div',
      opacity: 1,
      easing: 'easeInOutCubic',
      duration: 1,
    })
    anime({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutCubic',
      duration: 2000,
      direction: 'alternate',
      loop: true,
    })
  }, [])
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        opacity: 0,
        height: '100%',
      }}
      className="div"
    >
      <svg
        width={width}
        height={width / 2}
        viewBox="0 0 270 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88.7134 35.8444L131.679 163.494C134.008 170.404 147.523 170.76 150.558 164.001L193.171 69.0975L200.838 88.7475C201.414 90.225 202.65 91.5269 204.355 92.4544C206.061 93.382 208.143 93.8844 210.284 93.885H255.997C258.599 93.885 261.095 93.1442 262.935 91.8256C264.776 90.507 265.809 88.7185 265.809 86.8537C265.809 84.9889 264.776 83.2005 262.935 81.8819C261.095 80.5633 258.599 79.8225 255.997 79.8225H217.728L203.271 42.7912C200.654 36.0694 187.466 35.8912 184.483 42.5287L142.564 135.876L98.7091 5.50685C96.3279 -1.59002 82.2895 -1.70252 79.6859 5.35685L52.1848 79.8225H13.9814C11.379 79.8225 8.88316 80.5633 7.04296 81.8819C5.20276 83.2005 4.16895 84.9889 4.16895 86.8537C4.16895 88.7185 5.20276 90.507 7.04296 91.8256C8.88316 93.1442 11.379 93.885 13.9814 93.885H59.7208C61.8857 93.885 63.9899 93.3719 65.7055 92.4257C67.4212 91.4795 68.652 90.1533 69.2062 88.6537L88.7134 35.8444Z"
          fill="none"
          stroke={color ? color : '#5FA8D3'}
          stroke-width={stroke ? stroke : '3'}
        />
      </svg>
    </div>
  )
}
