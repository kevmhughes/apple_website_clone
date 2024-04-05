import { View } from '@react-three/drei'
import React from 'react'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, item, size}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className='size-full border-2 border-red-500'
    >

    </View>
  )
}

export default ModelView