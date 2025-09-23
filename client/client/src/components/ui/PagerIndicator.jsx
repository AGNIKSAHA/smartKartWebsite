import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const pagerIndicatorClasses = cva(
  'flex items-center justify-center gap-2',
  {
    variants: {
      variant: {
        default: '',
        dots: 'gap-1',
        numbers: 'gap-3',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const dotClasses = cva(
  'rounded-full transition-all duration-200 cursor-pointer',
  {
    variants: {
      active: {
        true: 'bg-red-500',
        false: 'bg-gray-300 hover:bg-gray-400',
      },
      size: {
        small: 'w-2 h-2',
        medium: 'w-3 h-3',
        large: 'w-4 h-4',
      },
    },
    defaultVariants: {
      active: false,
      size: 'medium',
    },
  }
);

const PagerIndicator = ({
  // Optional parameters (no defaults)
  layout_width,
  margin,
  position,
  
  // Standard React props
  variant = 'dots',
  size = 'medium',
  totalPages = 5,
  currentPage = 0,
  onPageChange,
  className,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Safe page change handler
  const handlePageChange = (pageIndex) => {
    if (typeof onPageChange === 'function') {
      onPageChange(pageIndex);
    }
  };

  // Generate page indicators
  const renderIndicators = () => {
    const indicators = [];
    
    for (let i = 0; i < totalPages; i++) {
      if (variant === 'dots') {
        indicators?.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={twMerge(
              dotClasses({ active: i === currentPage, size }),
              'focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1'
            )}
            aria-label={`Go to page ${i + 1}`}
            aria-current={i === currentPage ? 'page' : undefined}
          />
        );
      } else if (variant === 'numbers') {
        indicators?.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={twMerge(
              'px-3 py-1 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500',
              i === currentPage
                ? 'bg-red-500 text-white' :'bg-gray-200 text-gray-700 hover:bg-gray-300'
            )}
            aria-label={`Go to page ${i + 1}`}
            aria-current={i === currentPage ? 'page' : undefined}
          >
            {i + 1}
          </button>
        );
      }
    }
    
    return indicators;
  };

  return (
    <div
      className={twMerge(
        pagerIndicatorClasses({ variant, size }),
        optionalClasses,
        className
      )}
      role="navigation"
      aria-label="Pagination"
      {...props}
    >
      {renderIndicators()}
    </div>
  );
};

export default PagerIndicator;