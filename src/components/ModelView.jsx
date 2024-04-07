import { PerspectiveCamera, View } from '@react-three/drei'
import React from 'react'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, item, size}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`size-full border-2 border-red-500 ${index === 2} ? "right-[-100%] : "`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3}/>
      <PerspectiveCamera makeDefault position={[0,0,4]} />
    </View>
  )
}

export default ModelView