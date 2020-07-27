import _flatten from './_flatten.js';
import clone from './clone.js';

// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
export default function flatten(array, depth) {
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return clone(array);
  }
  return _flatten(array, depth, false);
}
