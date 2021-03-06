import * as React from 'react';
export interface Props {
    text: string;
    size: Size;
    color: Color;
    onClick: () => void;
    id?: string;
    disabled?: boolean;
    icon?: {
        image: React.ReactNode;
        position: 'left' | 'right';
    };
}
export declare type Color = 'brand' | 'action';
export declare type Size = 'large' | 'medium' | 'small';
export default class ButtonGhost extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
