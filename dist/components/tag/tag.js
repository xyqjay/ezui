import React from 'react';
import Style from './tag.module.scss';
var Tag = function Tag(_a) {
    var _b = _a.size, size = _b === void 0 ? 'middle' : _b, children = _a.children, style = _a.style, _c = _a.className, className = _c === void 0 ? '' : _c;
    var tagClassName = Style['ez-tag'] + " " + className;
    switch (size) {
        case 'big':
            tagClassName = tagClassName + (Style['ez-tag-bg'] + " ");
            break;
        case 'middle':
            tagClassName = tagClassName + (Style['ez-tag-middle'] + " ");
            break;
        default:
            tagClassName = tagClassName + '';
            break;
    }
    return (React.createElement("span", { className: tagClassName, style: style }, children));
};
export default Tag;
