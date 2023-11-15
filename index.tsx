import React, { ReactElement, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

class Stub {
  constructor() {
    return new Proxy(() => {}, {
      get: () => new Stub(),
      apply: () => new Stub(),
      set: () => true,
    });
  }
}
export const Skia = new Stub() as any;

export const Canvas = ({ style }): ReactElement => {
	const s = useMemo(
		() =>
			StyleSheet.compose(style, {
				backgroundColor: 'rgba(128, 128, 128, 0.1)',
			}),
		[style],
	);
	return <View style={s} />;
};
export const LinearGradient = (): ReactElement => <></>;
export const Rect = (): ReactElement => <></>;
export const Path = (): ReactElement => <></>;
export const RadialGradient = (): ReactElement => <></>;
export const BlurMask = (): ReactElement => <></>;
export const DashPathEffect = (): ReactElement => <></>;
export const Circle = (): ReactElement => <></>;
export const Group = (): ReactElement => <></>;
export const Paint = (): ReactElement => <></>;
export const Text = (): ReactElement => <></>;
export const Mask = (): ReactElement => <></>;
export const CornerPathEffect = (): ReactElement => <></>;
export const vec = (x?: number, y?: number) => ({ x: x ?? 0, y: y ?? x ?? 0 });
export const rect = (): void => {};
export const runTiming = (): void => {};
export const useValue = (): void => {};
export const useComputedValue = (): void => {};
export const useCanvas = (): object => ({
	size: {
		current: {
			width: 100,
			height: 100,
		},
	},
});
export const useFont = (): void => {};
