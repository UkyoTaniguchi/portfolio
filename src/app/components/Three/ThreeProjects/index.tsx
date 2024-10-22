"use client";

import { NextPage } from "next";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei"; // Htmlコンポーネントをインポート
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiFlask } from "react-icons/si";
import * as THREE from "three";

interface RotatingIconProps {
  radius: number; // Distance from the center
  speed: number; // Speed of rotation
  iconIndex: number; // Which icon to display
  totalIcons: number;
  IconComponent: React.ElementType; // React Iconの型を受け取る
}

const RotatingIcon: React.FC<RotatingIconProps> = ({
  radius,
  speed,
  iconIndex,
  totalIcons,
  IconComponent, // Iconを渡す
}) => {
  const group = useRef<THREE.Group>(null!); // Groupに変更
  const { camera } = useThree(); // カメラを取得
  let angle = (iconIndex / totalIcons) * Math.PI * 2; // 均等に配置するための角度を計算

  useFrame(() => {
    angle += speed * 0.01; // 角度を更新して回転させる
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    group.current.position.set(x, 0, z); // アイコンの位置を更新

    // アイコンが常にカメラの方向を向くようにする
    group.current.lookAt(camera.position);
  });

  return (
    <group ref={group}>
      {/* Htmlコンポーネントを使用してReact Iconを描画 */}
      <Html center>
        <IconComponent size={100} />
      </Html>
    </group>
  );
};

const CameraSetup: React.FC = () => {
  const { camera } = useThree(); // カメラを取得
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  useFrame(() => {
    if (cameraRef.current) {
      camera.position.copy(cameraRef.current.position);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  });

  return <perspectiveCamera ref={cameraRef} position={[0, 0.5, 3]} fov={50} />;
};

const ThreeProjectsComponent: NextPage = () => {
  const totalIcons = 5;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas>
        {/* カメラの設定 */}
        <CameraSetup />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* React Iconを回転させて描画 */}
        <RotatingIcon
          radius={2}
          speed={0.7}
          iconIndex={0}
          totalIcons={totalIcons}
          IconComponent={SiTypescript} // 1つ目のアイコン
        />
        <RotatingIcon
          radius={2}
          speed={0.7}
          iconIndex={1}
          totalIcons={totalIcons}
          IconComponent={FaReact} // 2つ目のアイコン
        />
        <RotatingIcon
          radius={2}
          speed={0.7}
          iconIndex={2}
          totalIcons={totalIcons}
          IconComponent={SiNextdotjs} // 3つ目のアイコン
        />
        <RotatingIcon
          radius={2}
          speed={0.7}
          iconIndex={3}
          totalIcons={totalIcons}
          IconComponent={IoLogoFirebase} // 4つ目のアイコン
        />
        <RotatingIcon
          radius={2}
          speed={0.7}
          iconIndex={4}
          totalIcons={totalIcons}
          IconComponent={SiFlask} // 5つ目のアイコン
        />
      </Canvas>
    </div>
  );
};

export default ThreeProjectsComponent;
