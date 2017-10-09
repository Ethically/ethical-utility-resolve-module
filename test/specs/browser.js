import { join } from 'path'
import { getRequire, requireModule } from '../../src/index.js'

const testFile = join('~', 'test', 'files', 'dist', 'a.js')

const browserRequire = (path) => path

const nodeProcess = process

const browserify = () => {
    global.window = { require: browserRequire }
    process = { ...nodeProcess, versions: null }
}

const nodify = () => {
    process = nodeProcess
    delete global.window
}

describe('getRequire()', () => {
    beforeAll(browserify)
    afterAll(nodify)
    it('should return browser require function', () => {
        expect(getRequire()).toBe(browserRequire)
    })
})

describe('requireModule()', () => {
    beforeAll(browserify)
    afterAll(nodify)
    it('should require module', () => {
        expect(requireModule(testFile)).toBe(testFile)
    })
})
