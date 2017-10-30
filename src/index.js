import { join, resolve, dirname } from 'path'
import isNode from 'ethical-utility-is-node'
import { isRelative, isAbsolute, getRootPath } from 'ethical-utility-path'

export const getAppPrefix = (moduleName) => '~'

export const isAppModule = (moduleName) => (
    moduleName.charAt(0) === getAppPrefix()
)

export const isPackage = (name) => {
    if (isRelative(name) || isAbsolute(name)) return false
    return true
}

export const isAbsolutePackage = (name) => {
    if (isPackage(name) && name.indexOf('/') === -1)
        return true
    return false
}

export const isRelativePackage = (name) => {
    if (name.indexOf('/') > -1 && isPackage(name)) return true
    return false
}

export const appendExtension = (name, extension = 'js') => {
    if (isAbsolutePackage(name)) return name
    const ext = '.' + extension
    if (name.slice(-(ext.length)) === ext) return name
    return name + ext
}

export const getRequire = () => {
    if (isNode()) return require
    return window.require
}

export const resolveModuleName = (module) => {
    if (isAppModule(module)) {
        return join(getRootPath(), module.replace(getAppPrefix(), ''))
    }
    if (isRelative(module)) return join(getRootPath(), module)
    return module
}

export const requireModule = (name) => {
    const path = ( isNode() ? resolveModuleName(name) : name )
    return getRequire()(path)
}
