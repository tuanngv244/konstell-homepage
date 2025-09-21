import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { OrbitControls, Center } from '@react-three/drei'

type Props = {
    children?: React.ReactNode | ((...args: any[]) => React.ReactNode)
}

const Model3D: React.FC<Props> = ({ children }) => {

    return (
        <div className="model-3d h-full">
            <Canvas
                className={`w-full h-screen bg-transparent `}
                camera={{
                    position: [0, 0, 8],
                    fov: 45,
                    near: 0.1,
                    far: 1000
                }}
                style={{ width: '100%', height: '100%', minHeight: '100%' }}
            >
                <Suspense fallback={<>...</>}>
                    <directionalLight position={[5, 5, 5]} intensity={1.5} />
                    <ambientLight intensity={0.6} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <hemisphereLight args={["#ffffff", "#444444", 0.8]} />
                    <OrbitControls
                        enablePan={true}
                        enableZoom={false}
                        enableRotate={true}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={0}
                    />
                    <Center>
                        {typeof children === 'function' ? children({}) : children}
                    </Center>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Model3D