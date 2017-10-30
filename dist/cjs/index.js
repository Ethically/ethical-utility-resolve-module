'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requireModule = exports.resolveModuleName = exports.getRequire = exports.appendExtension = exports.isRelativePackage = exports.isAbsolutePackage = exports.isPackage = exports.isAppModule = exports.getAppPrefix = undefined;

var _path = require('path');

var _ethicalUtilityIsNode = require('ethical-utility-is-node');

var _ethicalUtilityIsNode2 = _interopRequireDefault(_ethicalUtilityIsNode);

var _ethicalUtilityPath = require('ethical-utility-path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAppPrefix = exports.getAppPrefix = function getAppPrefix(moduleName) {
    return '~';
};

var isAppModule = exports.isAppModule = function isAppModule(moduleName) {
    return moduleName.charAt(0) === getAppPrefix();
};

var isPackage = exports.isPackage = function isPackage(name) {
    if ((0, _ethicalUtilityPath.isRelative)(name) || (0, _ethicalUtilityPath.isAbsolute)(name)) return false;
    return true;
};

var isAbsolutePackage = exports.isAbsolutePackage = function isAbsolutePackage(name) {
    if (isPackage(name) && name.indexOf('/') === -1) return true;
    return false;
};

var isRelativePackage = exports.isRelativePackage = function isRelativePackage(name) {
    if (name.indexOf('/') > -1 && isPackage(name)) return true;
    return false;
};

var appendExtension = exports.appendExtension = function appendExtension(name) {
    var extension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';

    if (isAbsolutePackage(name)) return name;
    var ext = '.' + extension;
    if (name.slice(-ext.length) === ext) return name;
    return name + ext;
};

var getRequire = exports.getRequire = function getRequire() {
    if ((0, _ethicalUtilityIsNode2.default)()) return require;
    return window.require;
};

var resolveModuleName = exports.resolveModuleName = function resolveModuleName(module) {
    if (isAppModule(module)) {
        return (0, _path.join)((0, _ethicalUtilityPath.getRootPath)(), module.replace(getAppPrefix(), ''));
    }
    if ((0, _ethicalUtilityPath.isRelative)(module)) return (0, _path.join)((0, _ethicalUtilityPath.getRootPath)(), module);
    return module;
};

var requireModule = exports.requireModule = function requireModule(name) {
    var path = (0, _ethicalUtilityIsNode2.default)() ? resolveModuleName(name) : name;
    return getRequire()(path);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRBcHBQcmVmaXgiLCJtb2R1bGVOYW1lIiwiaXNBcHBNb2R1bGUiLCJjaGFyQXQiLCJpc1BhY2thZ2UiLCJuYW1lIiwiaXNBYnNvbHV0ZVBhY2thZ2UiLCJpbmRleE9mIiwiaXNSZWxhdGl2ZVBhY2thZ2UiLCJhcHBlbmRFeHRlbnNpb24iLCJleHRlbnNpb24iLCJleHQiLCJzbGljZSIsImxlbmd0aCIsImdldFJlcXVpcmUiLCJyZXF1aXJlIiwid2luZG93IiwicmVzb2x2ZU1vZHVsZU5hbWUiLCJtb2R1bGUiLCJyZXBsYWNlIiwicmVxdWlyZU1vZHVsZSIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFDQyxVQUFEO0FBQUEsV0FBZ0IsR0FBaEI7QUFBQSxDQUFyQjs7QUFFQSxJQUFNQyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNELFVBQUQ7QUFBQSxXQUN2QkEsV0FBV0UsTUFBWCxDQUFrQixDQUFsQixNQUF5QkgsY0FERjtBQUFBLENBQXBCOztBQUlBLElBQU1JLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQy9CLFFBQUksb0NBQVdBLElBQVgsS0FBb0Isb0NBQVdBLElBQVgsQ0FBeEIsRUFBMEMsT0FBTyxLQUFQO0FBQzFDLFdBQU8sSUFBUDtBQUNILENBSE07O0FBS0EsSUFBTUMsZ0RBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0QsSUFBRCxFQUFVO0FBQ3ZDLFFBQUlELFVBQVVDLElBQVYsS0FBbUJBLEtBQUtFLE9BQUwsQ0FBYSxHQUFiLE1BQXNCLENBQUMsQ0FBOUMsRUFDSSxPQUFPLElBQVA7QUFDSixXQUFPLEtBQVA7QUFDSCxDQUpNOztBQU1BLElBQU1DLGdEQUFvQixTQUFwQkEsaUJBQW9CLENBQUNILElBQUQsRUFBVTtBQUN2QyxRQUFJQSxLQUFLRSxPQUFMLENBQWEsR0FBYixJQUFvQixDQUFDLENBQXJCLElBQTBCSCxVQUFVQyxJQUFWLENBQTlCLEVBQStDLE9BQU8sSUFBUDtBQUMvQyxXQUFPLEtBQVA7QUFDSCxDQUhNOztBQUtBLElBQU1JLDRDQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0osSUFBRCxFQUE0QjtBQUFBLFFBQXJCSyxTQUFxQix1RUFBVCxJQUFTOztBQUN2RCxRQUFJSixrQkFBa0JELElBQWxCLENBQUosRUFBNkIsT0FBT0EsSUFBUDtBQUM3QixRQUFNTSxNQUFNLE1BQU1ELFNBQWxCO0FBQ0EsUUFBSUwsS0FBS08sS0FBTCxDQUFXLENBQUVELElBQUlFLE1BQWpCLE1BQThCRixHQUFsQyxFQUF1QyxPQUFPTixJQUFQO0FBQ3ZDLFdBQU9BLE9BQU9NLEdBQWQ7QUFDSCxDQUxNOztBQU9BLElBQU1HLGtDQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUM1QixRQUFJLHFDQUFKLEVBQWMsT0FBT0MsT0FBUDtBQUNkLFdBQU9DLE9BQU9ELE9BQWQ7QUFDSCxDQUhNOztBQUtBLElBQU1FLGdEQUFvQixTQUFwQkEsaUJBQW9CLENBQUNDLE1BQUQsRUFBWTtBQUN6QyxRQUFJaEIsWUFBWWdCLE1BQVosQ0FBSixFQUF5QjtBQUNyQixlQUFPLGdCQUFLLHNDQUFMLEVBQW9CQSxPQUFPQyxPQUFQLENBQWVuQixjQUFmLEVBQStCLEVBQS9CLENBQXBCLENBQVA7QUFDSDtBQUNELFFBQUksb0NBQVdrQixNQUFYLENBQUosRUFBd0IsT0FBTyxnQkFBSyxzQ0FBTCxFQUFvQkEsTUFBcEIsQ0FBUDtBQUN4QixXQUFPQSxNQUFQO0FBQ0gsQ0FOTTs7QUFRQSxJQUFNRSx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNmLElBQUQsRUFBVTtBQUNuQyxRQUFNZ0IsT0FBUyx3Q0FBV0osa0JBQWtCWixJQUFsQixDQUFYLEdBQXFDQSxJQUFwRDtBQUNBLFdBQU9TLGFBQWFPLElBQWIsQ0FBUDtBQUNILENBSE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2luLCByZXNvbHZlLCBkaXJuYW1lIH0gZnJvbSAncGF0aCdcbmltcG9ydCBpc05vZGUgZnJvbSAnZXRoaWNhbC11dGlsaXR5LWlzLW5vZGUnXG5pbXBvcnQgeyBpc1JlbGF0aXZlLCBpc0Fic29sdXRlLCBnZXRSb290UGF0aCB9IGZyb20gJ2V0aGljYWwtdXRpbGl0eS1wYXRoJ1xuXG5leHBvcnQgY29uc3QgZ2V0QXBwUHJlZml4ID0gKG1vZHVsZU5hbWUpID0+ICd+J1xuXG5leHBvcnQgY29uc3QgaXNBcHBNb2R1bGUgPSAobW9kdWxlTmFtZSkgPT4gKFxuICAgIG1vZHVsZU5hbWUuY2hhckF0KDApID09PSBnZXRBcHBQcmVmaXgoKVxuKVxuXG5leHBvcnQgY29uc3QgaXNQYWNrYWdlID0gKG5hbWUpID0+IHtcbiAgICBpZiAoaXNSZWxhdGl2ZShuYW1lKSB8fCBpc0Fic29sdXRlKG5hbWUpKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgaXNBYnNvbHV0ZVBhY2thZ2UgPSAobmFtZSkgPT4ge1xuICAgIGlmIChpc1BhY2thZ2UobmFtZSkgJiYgbmFtZS5pbmRleE9mKCcvJykgPT09IC0xKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVBhY2thZ2UgPSAobmFtZSkgPT4ge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJy8nKSA+IC0xICYmIGlzUGFja2FnZShuYW1lKSkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZEV4dGVuc2lvbiA9IChuYW1lLCBleHRlbnNpb24gPSAnanMnKSA9PiB7XG4gICAgaWYgKGlzQWJzb2x1dGVQYWNrYWdlKG5hbWUpKSByZXR1cm4gbmFtZVxuICAgIGNvbnN0IGV4dCA9ICcuJyArIGV4dGVuc2lvblxuICAgIGlmIChuYW1lLnNsaWNlKC0oZXh0Lmxlbmd0aCkpID09PSBleHQpIHJldHVybiBuYW1lXG4gICAgcmV0dXJuIG5hbWUgKyBleHRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlcXVpcmUgPSAoKSA9PiB7XG4gICAgaWYgKGlzTm9kZSgpKSByZXR1cm4gcmVxdWlyZVxuICAgIHJldHVybiB3aW5kb3cucmVxdWlyZVxufVxuXG5leHBvcnQgY29uc3QgcmVzb2x2ZU1vZHVsZU5hbWUgPSAobW9kdWxlKSA9PiB7XG4gICAgaWYgKGlzQXBwTW9kdWxlKG1vZHVsZSkpIHtcbiAgICAgICAgcmV0dXJuIGpvaW4oZ2V0Um9vdFBhdGgoKSwgbW9kdWxlLnJlcGxhY2UoZ2V0QXBwUHJlZml4KCksICcnKSlcbiAgICB9XG4gICAgaWYgKGlzUmVsYXRpdmUobW9kdWxlKSkgcmV0dXJuIGpvaW4oZ2V0Um9vdFBhdGgoKSwgbW9kdWxlKVxuICAgIHJldHVybiBtb2R1bGVcbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVNb2R1bGUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSAoIGlzTm9kZSgpID8gcmVzb2x2ZU1vZHVsZU5hbWUobmFtZSkgOiBuYW1lIClcbiAgICByZXR1cm4gZ2V0UmVxdWlyZSgpKHBhdGgpXG59XG4iXX0=