import { useBox } from "@react-three/cannon";

const Box = ({ id, setBox1Clicked, gameProgress, setGameProgress, positionX = 0, positionY = 0, positionZ = 0, width = 1, height = 1, depth = 1, bounceOnClick = true, color, opacity = 1 }) => {
	const [ref, api] = useBox(() => ({ mass: 1, position: [positionX, positionY, positionZ] })),
		boxBounce = () => {
			api.velocity.set(0, 2, 0);
		},
		boxClickHandler = () => {
			if (bounceOnClick) {
				boxBounce();
			}
			if (id === 'box1') {
				setBox1Clicked(true);
			}
			setGameProgress(() => {
				return ({
					...gameProgress,
					id: true
				})
			})
		}

	return (
		<mesh
			onClick={boxClickHandler}
			ref={ref}
			position={[positionX, positionY, positionZ]}
		>
			<boxBufferGeometry attach="geometry" args={[width, height, depth]} />
			<meshLambertMaterial attach="material" color={color} opacity={opacity} transparent={true}/>
		</mesh>
	);
}

export default Box;
