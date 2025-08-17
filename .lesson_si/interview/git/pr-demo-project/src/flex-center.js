/**
 * Flexbox居中工具方法
 * @module flex-center
 */

/**
 * 使用Flexbox实现元素居中
 * @param {string} [direction='both'] - 居中方向
 * @param {string} [justify='center'] - justify-content值
 * @param {string} [align='center'] - align-items值
 * @returns {Object} CSS样式对象
 * 
 * @example
 * // 完全居中
 * const style = flexCenter();
 * 
 * @example
 * // 仅水平居中
 * const style = flexCenter('horizontal');
 * 
 * @example
 * // 自定义对齐
 * const style = flexCenter('both', 'space-between', 'flex-start');
 */
export const flexCenter = (direction = 'both', justify = 'center', align = 'center') => {
  const baseStyles = {
    display: 'flex',
  };

  switch(direction) {
    case 'horizontal':
      return {
        ...baseStyles,
        justifyContent: justify,
      };
    
    case 'vertical':
      return {
        ...baseStyles,
        alignItems: align,
      };
    
    case 'both':
    default:
      return {
        ...baseStyles,
        justifyContent: justify,
        alignItems: align,
      };
  }
};

/**
 * 快捷方法：水平居中
 * @returns {Object} CSS样式对象
 */
export const flexCenterHorizontal = () => flexCenter('horizontal');

/**
 * 快捷方法：垂直居中
 * @returns {Object} CSS样式对象
 */
export const flexCenterVertical = () => flexCenter('vertical');

/**
 * 快捷方法：完全居中
 * @returns {Object} CSS样式对象
 */
export const flexCenterBoth = () => flexCenter('both');