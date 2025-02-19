import React from 'react';
import styles from './index.module.scss';

export interface Props {
    placeholder?: string;
    onChange?: (event: any) => void;
    value: string;
    maxLength?: number;
    height?: any;
    className?: string;
}

export const Textarea = ({
    placeholder,
    onChange,
    maxLength,
    value,
    height,
    className,
    ...props
}: Props) => (
    <textarea
        cols={3}
        rows={20}
        maxLength={maxLength}
        placeholder={placeholder}
        className={styles.textarea}
        value={value || ''}
        onChange={onChange}
        {...props}
    />
);
