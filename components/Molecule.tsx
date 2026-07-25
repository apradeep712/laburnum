'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Lightformer } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

type Atom = {
  position: [number, number, number]
  radius: number
  accent: boolean
}

function buildMolecule() {
  // Deterministic pseudo-random cluster (no hydration/build surprises)
  let seed = 1337
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }

  const atoms: Atom[] = []
  const count = 18
  for (let i = 0; i < count; i++) {
    const r = 2.4 + rand() * 2.8
    const theta = rand() * Math.PI * 2
    const phi = Math.acos(2 * rand() - 1)
    atoms.push({
      position: [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ],
      radius: 0.55 + rand() * 0.5,
      accent: rand() > 0.72,
    })
  }

  const bonds: { start: THREE.Vector3; end: THREE.Vector3 }[] = []
  for (let i = 0; i < atoms.length; i++) {
    const a = new THREE.Vector3(...atoms[i].position)
    let nearest = -1
    let best = Infinity
    for (let j = 0; j < atoms.length; j++) {
      if (i === j) continue
      const d = a.distanceTo(new THREE.Vector3(...atoms[j].position))
      if (d < best) {
        best = d
        nearest = j
      }
    }
    if (nearest > i) {
      bonds.push({ start: a, end: new THREE.Vector3(...atoms[nearest].position) })
    }
  }

  return { atoms, bonds }
}

function Bond({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const { position, quaternion, length } = useMemo(() => {
    const dir = new THREE.Vector3().subVectors(end, start)
    const len = dir.length()
    const pos = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    )
    return { position: pos, quaternion: quat, length: len }
  }, [start, end])

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.07, 0.07, length, 12]} />
      <meshStandardMaterial
        color="#bcd8ef"
        transparent
        opacity={0.35}
        roughness={0.25}
        metalness={0}
      />
    </mesh>
  )
}

function MoleculeGroup({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null)
  const { atoms, bonds } = useMemo(() => buildMolecule(), [])

  useFrame((_, delta) => {
    if (group.current && !reduced) {
      group.current.rotation.y += delta * 0.12
      group.current.rotation.x += delta * 0.03
    }
  })

  return (
    <group ref={group}>
      {atoms.map((a, i) => (
        <mesh key={`atom-${i}`} position={a.position}>
          <sphereGeometry args={[a.radius, 48, 48]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={1}
            thickness={a.radius * 1.6}
            roughness={0.06}
            ior={1.35}
            clearcoat={1}
            clearcoatRoughness={0.1}
            attenuationColor={a.accent ? '#3aa6e6' : '#d3e9fb'}
            attenuationDistance={2.2}
          />
        </mesh>
      ))}
      {bonds.map((b, i) => (
        <Bond key={`bond-${i}`} start={b.start} end={b.end} />
      ))}
    </group>
  )
}

export default function Molecule() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 6, 6]} intensity={1.2} />
      <directionalLight position={[-6, -3, 2]} intensity={0.5} color="#bcd8ef" />

      <Float
        speed={reduced ? 0 : 1.2}
        rotationIntensity={reduced ? 0 : 0.4}
        floatIntensity={reduced ? 0 : 0.6}
      >
        <MoleculeGroup reduced={reduced} />
      </Float>

      <Environment resolution={256}>
        <group>
          <Lightformer form="rect" intensity={2} position={[0, 5, -6]} scale={[12, 6, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={1.1} position={[-7, 0, 3]} scale={[6, 8, 1]} color="#e2f0ff" />
          <Lightformer form="ring" intensity={1.4} position={[7, 3, 4]} scale={[5, 5, 1]} color="#bfe0ff" />
        </group>
      </Environment>
    </Canvas>
  )
}
