export const TOP_LEFT = 0;
export const TOP_MIDDLE = 1;
export const TOP_RIGHT = 2;
export const MIDDLE_LEFT = 3;
export const MIDDLE = 4;
export const MIDDLE_RIGHT = 5;
export const BOTTOM_LEFT = 6;
export const BOTTOM_MIDDLE = 7;
export const BOTTOM_RIGHT = 8;
export const LINES = [
    // Horizontal Lines
    [TOP_LEFT, TOP_MIDDLE, TOP_RIGHT],
    [MIDDLE_LEFT, MIDDLE, MIDDLE_RIGHT],
    [BOTTOM_LEFT, BOTTOM_MIDDLE, BOTTOM_RIGHT],
    // Vertical Lines
    [TOP_LEFT, MIDDLE_LEFT, BOTTOM_LEFT],
    [TOP_MIDDLE, MIDDLE, BOTTOM_MIDDLE],
    [BOTTOM_RIGHT, MIDDLE_RIGHT, TOP_RIGHT],
    // Diagonal Lines
    [TOP_LEFT, MIDDLE, BOTTOM_RIGHT],
    [TOP_RIGHT, MIDDLE, BOTTOM_LEFT]
];