import insertCSS from 'insert-css';

export default function (css) {
  if (
    typeof document !== 'undefined' &&
    document &&
    typeof document.createElement === 'function' &&
    typeof document.getElementsByTagName === 'function'
  ) {
    insertCSS(css);
  }
  return () => {
    throw new Error('insert-css-module is designed to be used with babel-plugin-insert-css-module');
  };
}
