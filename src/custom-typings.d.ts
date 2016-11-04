/**
 * Required by Webpack2.
 * Webpack treats System.import as a split-point and puts the requested module in a separate chunk.
 * System.import takes the module name as argument and returns a Promise.
 */
declare var System: SystemJS;

interface SystemJS {
    import: (path?: string) => Promise<any>;
}