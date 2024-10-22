"use client";

import { NextPage } from "next";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei"; // Htmlコンポーネントをインポート
import { GiArchiveResearch } from "react-icons/gi";
import { FcLinux } from "react-icons/fc";
import { FaUbuntu } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
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

  return <perspectiveCamera ref={cameraRef} position={[0, 0, 3]} fov={50} />;
};

const ThreeComponent: NextPage = () => {
  const totalIcons = 4;

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
          IconComponent={GiArchiveResearch} // 1つ目のアイコン
        />
        <RotatingIcon
          radius={2}
          speed={0.7}
          iconIndex={1}
          totalIcons={totalIcons}
          IconComponent={FaUbuntu} // 2つ目のアイコン
        />
        <RotatingIcon
          radius={2}
          speed={0.7}
          iconIndex={2}
          totalIcons={totalIcons}
          IconComponent={FcLinux} // 3つ目のアイコン
        />
        <RotatingIcon
          radius={2}
          speed={0.7}
          iconIndex={3}
          totalIcons={totalIcons}
          IconComponent={GiCctvCamera} // 4つ目のアイコン
        />
      </Canvas>
    </div>
  );
};

export default ThreeComponent;
