import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

export function HandModel(props) {
    const { nodes, materials } = useGLTF('/3d-models/robotic_hand.glb') as any;
    const { rotation, ...otherProps } = props;

    // Smooth rotation animation
    const { animatedRotation } = useSpring({
        animatedRotation: rotation || [0, 0, 0],
        config: {
            tension: 120,
            friction: 14,
            precision: 0.001
        }
    });

    return (
        <animated.group {...otherProps} rotation={animatedRotation} dispose={null}>
            <group
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                position={[-3.8, -0.2, 1.5]} // Offset to center the model
            >
                <group
                    position={[3.7087, 0.5566, -1.3151]}
                    rotation={[Math.PI / 2, -0.509, Math.PI / 2]}
                    scale={[0.3322, 0.3321, 0.3321]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere008_0.geometry}
                        material={materials['Material.000']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere008_1.geometry}
                        material={materials['Material.011']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere008_2.geometry}
                        material={materials['Material.010']}
                    />
                </group>
                <group position={[3.8375, 0.4671, -2.6726]} scale={[0.0606, 0.0606, 0.5246]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder018_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder018_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder018_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[3.972, -0.8893, -0.1462]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1632, 0.1632, 0.1046]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder017_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder017_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder017_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[3.9027, -0.8893, 0.9615]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1166, 0.1166, 0.084]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder016_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder016_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder016_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[3.9648, -0.8893, 0.3963]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1364, 0.1364, 0.0982]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder015_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder015_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder015_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[4.0617, -0.425, 0.7221]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1651, 0.1651, 0.1189]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder014_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder014_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder014_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[3.9865, -0.425, 1.4063]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1411, 0.1411, 0.1016]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder013_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder013_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder013_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[4.0704, -0.425, 0.0655]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1975, 0.1975, 0.1266]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder012_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder012_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder012_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[4.1441, 0.096, 0.912]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1651, 0.1651, 0.1256]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder011_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder011_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder011_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[4.0691, 0.096, 1.642]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1411, 0.1411, 0.1074]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[4.1587, 0.096, 0.1968]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1975, 0.1975, 0.1131]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder009_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder009_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder009_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[4.1074, 0.6539, 0.198]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1975, 0.1975, 0.1131]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder008_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder008_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder008_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[4.0235, 0.6539, 1.5388]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1411, 0.1411, 0.1074]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder007_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder007_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder007_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[4.0987, 0.6539, 0.8546]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={[0.1651, 0.1651, 0.1256]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder006_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder006_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder006_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[3.175, 1.3438, -0.3127]}
                    rotation={[2.0761, -1.0996, 2.4429]}
                    scale={0.1312}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder005_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder005_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder005_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[3.3637, 1.1081, -0.9192]}
                    rotation={[2.1269, -1.0702, 2.4878]}
                    scale={0.1528}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group position={[3.8375, -0.5444, -3.4792]} scale={[0.1156, 0.1156, 1]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group position={[3.8628, 0.0002, -3.6036]} scale={0.5805}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_0.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_1.geometry}
                        material={materials['Material.010']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_2.geometry}
                        material={materials['Material.011']}
                    />
                </group>
                <group
                    position={[3.9237, -0.883, 0.9197]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.8188, 0.7749, 0.8188]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube037_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube037_1.geometry}
                        material={materials['Material.000']}
                    />
                </group>
                <group
                    position={[3.9221, -0.883, 0.9197]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.8188, 0.7749, 0.8188]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube035_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube035_1.geometry}
                        material={materials['Material.009']}
                    />
                </group>
                <group
                    position={[4.0099, -0.4174, 1.3557]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.991, 0.9379, 0.991]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube034_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube034_1.geometry}
                        material={materials['Material.009']}
                    />
                </group>
                <group
                    position={[4.0119, -0.4174, 1.3557]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.991, 0.9379, 0.991]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube032_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube032_1.geometry}
                        material={materials['Material.000']}
                    />
                </group>
                <group
                    position={[4.0982, 0.1039, 1.6018]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[1.1145, 0.991, 0.991]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube031_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube031_1.geometry}
                        material={materials['Material.009']}
                    />
                </group>
                <group
                    position={[4.1002, 0.1039, 1.6018]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[1.1145, 0.991, 0.991]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube029_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube029_1.geometry}
                        material={materials['Material.000']}
                    />
                </group>
                <group position={[4.0489, 0.6619, 1.4882]} rotation={[0, -Math.PI / 2, 0]} scale={0.991}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube028_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube028_1.geometry}
                        material={materials['Material.000']}
                    />
                </group>
                <group position={[4.0469, 0.6619, 1.4882]} rotation={[0, -Math.PI / 2, 0]} scale={0.991}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube026_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube026_1.geometry}
                        material={materials['Material.009']}
                    />
                </group>
                <group position={[3.7562, 0.0078, -3.942]} rotation={[0, -Math.PI / 2, 0]} scale={0.991}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube019_1.geometry}
                        material={materials['Material.000']}
                    />
                </group>
                <group position={[3.8091, 0, -4.0345]} rotation={[0, -Math.PI / 2, 0]} scale={0.991}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_0.geometry}
                        material={materials['Material.012']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_1.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_2.geometry}
                        material={materials['Material.013']}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_0.geometry}
                    material={materials['Material.011']}
                    position={[3.8354, 0.5564, -1.3122]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.3466, 0.3466, 0.3806]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube036_0.geometry}
                    material={materials['Material.012']}
                    position={[3.9232, -0.883, 0.9197]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.8188, 0.7749, 0.8188]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube033_0.geometry}
                    material={materials['Material.012']}
                    position={[4.0112, -0.4174, 1.3557]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.991, 0.9379, 0.991]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube030_0.geometry}
                    material={materials['Material.012']}
                    position={[4.0995, 0.1039, 1.6018]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[1.1145, 0.991, 0.991]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube027_0.geometry}
                    material={materials['Material.012']}
                    position={[4.0482, 0.6619, 1.4882]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={0.991}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube025_0.geometry}
                    material={materials['Material.010']}
                    position={[3.9401, -0.0359, -1.8945]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.3762, 0.3762, 0.193]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018_0.geometry}
                    material={materials['Material.012']}
                    position={[3.7562, -0.0168, -3.942]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={0.991}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube017_0.geometry}
                    material={materials['Material.012']}
                    position={[3.8091, -0.0137, -4.0345]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={0.991}
                />
            </group>
        </animated.group>
    )
}

useGLTF.preload('/3d-models/robotic_hand.glb')
