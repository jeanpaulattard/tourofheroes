/**
 * Created by Jean-paul.attard on 06/09/2016.
 */

var path = require('path');

var _root = path.resolve(__dirname, '..');

function root(args: any) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

exports.root = root;