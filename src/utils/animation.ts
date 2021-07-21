import { StackCardInterpolationProps } from "@react-navigation/stack";
import { useRef } from "react";
import { Animated, Easing } from "react-native";

// for navigator --------------------------

export const forStackFade = ({ current }: StackCardInterpolationProps) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

// for component --------------------------

/**
 * `mount`: opacity + scale up
 *
 * `unmount`: opacity
 *
 *  반드시 함수 호출 후 `.start()`를 해주길 바란다!!
 */
export const forAlertAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1.1)).current;

    const opacityAnimation = (value: number) =>
        Animated.timing(opacity, {
            toValue: value,
            duration: 100,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
        });

    /**
     * on mount
     */
    const onAppear = () =>
        Animated.parallel([
            opacityAnimation(1),
            Animated.timing(scale, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }),
        ]);

    /**
     * on unmount
     */
    const onDisapper = () => opacityAnimation(0);

    return {
        animationStyle: { opacity, transform: [{ scale }] },
        onAppear,
        onDisapper,
    };
};