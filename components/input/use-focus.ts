import { useRef, useState } from "react"
import { useClickOutside } from "../../hooks/use-outside-click";

export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null)
    const [inputFocused, setInputFocused] = useState(false);
    useClickOutside(ref, () => {
        setInputFocused(false)
    });

    return { 
        onClick: () => setInputFocused(true),
        inputFocused,
        ref
    }
}