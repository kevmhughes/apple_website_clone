import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Model = () => {

useGSAP(() => {
    gsap.to("#heading", {
        y:0, opacity: 1
    })
})

  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <h1 id="heading" className='section-heading'>
                Take a closer look.
            </h1>
            <div className='mt-5 flex flex-col items-center'>
                <div className='relative h-[75vh] w-full overflow-hidden md:h-[90vh]'>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Model