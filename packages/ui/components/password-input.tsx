'use client';
import { cn } from '@repo/ui/lib/utils';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Expose input ref to parent
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowPassword(!showPassword);
      inputRef.current?.focus();
    };

    // Handle focus state for the container
    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent) => {
      // Check if focus is moving to the toggle button
      if (!containerRef.current?.contains(e.relatedTarget as Node)) {
        setIsFocused(false);
      }
    };

    return (
      <div className='relative' ref={containerRef}>
        <div
          className={cn(
            'relative flex h-9 w-full min-w-0 items-center rounded-md bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow]',
            'bg-muted border border-input',
            isFocused && 'border-ring ring-ring/50 ring-3',
          )}
          tabIndex={-1} // Make container focusable
          onBlur={handleBlur}
          onClick={() => inputRef.current?.focus()}
          onFocus={handleFocus}
        >
          <input
            className='w-full bg-transparent outline-none'
            ref={inputRef}
            type={showPassword ? 'text' : 'password'}
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...props}
          />
          <button
            className={cn(
              'flex h-5 w-5 items-center justify-center text-gray-500 hover:text-gray-700',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            )}
            tabIndex={-1}
            type='button'
            onClick={handleToggle}
            onMouseDown={(e) => e.preventDefault()} // Prevent focus shift
          >
            {showPassword ? (
              <EyeOffIcon className='w-4 h-4' />
            ) : (
              <EyeIcon className='w-4 h-4' />
            )}
          </button>
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
