import React, { useState, useEffect, createContext, ReactNode, MouseEvent } from "react";


type MixBlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';

// Define an interface for the cursor position
interface CursorPosition {
    x: number;
    y: number;
}

interface Variant {
    x?: number;
    y?: number;
    backgroundColor?: string;
    width?: string;
    height?: string;
    mixBlendMode?: MixBlendMode | MixBlendMode[] | undefined;  // Update this line
}

// Adjust CursorVariants to have an index signature
interface CursorVariants {
    [key: string]: Variant;
}

// Define an interface for the context value
interface CursorContextValue {
    cursorVariants: CursorVariants;
    cursorBg: string;
    mouseEnterHandler: () => void;
    mouseLeaveHandler: () => void;
}

// Create the context with an initial value of undefined
export const CursorContext = createContext<CursorContextValue | null>(null);

// Define an interface for the provider props
interface CursorProviderProps {
    children: ReactNode;
}

const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
    const [cursorPos, setCursorPos] = useState<CursorPosition>(
        {
            x: 0,
            y: 0
        }
    );

    // cursor bg state

    const [cursorBg, setCursorBg] = useState<string>('default');

    const [mobileViewportIsActive, setMobileViewportIsActive] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    
    useEffect(() => {
        // Check if window is defined before adding the event listener
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setMobileViewportIsActive(window.innerWidth < 768);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        // Check if window is defined before adding the event listener
        if (!mobileViewportIsActive && typeof window !== 'undefined') {
            const move = (e: MouseEvent) => {
                setCursorPos({
                    x: e.clientX,
                    y: e.clientY,
                });
            };

            window.addEventListener('mousemove', move as any);

            return () => {
                window.removeEventListener('mousemove', move as any);
            };
        }
        else {
            setCursorBg('none');
        }
    }, [mobileViewportIsActive]);


    const cursorVariants: CursorVariants = {
        default: {
            x: cursorPos.x - 16,
            y: cursorPos.y - 16,
            backgroundColor: '#7aefe3',
        },
        text: {
            width: '150px',
            height: '150px',
            x: cursorPos.x - 72,
            y: cursorPos.y - 72,
            backgroundColor: '#c3ff73',
            mixBlendMode: 'color',
        },
        none: {
            width: '0px',
            height: '0px',
            x: 0,
            y: 0,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }
    };

    const mouseEnterHandler = () => {
        setCursorBg('text')
    }

    const mouseLeaveHandler = () => {
        setCursorBg('default')
    }

    return (
        <CursorContext.Provider value={{ cursorVariants, cursorBg, mouseEnterHandler, mouseLeaveHandler }}>
            {children}
        </CursorContext.Provider>
    );
};

export default CursorProvider;
