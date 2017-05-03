/**
 * WEB ANGULAR VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    defaultExtension: 'ts',
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      // Copy of compiler options in standard tsconfig.json
      "target": "es5",
      "module": "system",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": ["es2015", "dom"],
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      // 'npm:': 'node_modules'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      demo: './demo',

      // angular bundles
      '@angular/core': '../node_modules/@angular/core/bundles/core.umd.js',
      '@angular/common': '../node_modules/@angular/common/bundles/common.umd.js',
      '@angular/compiler': '../node_modules/@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': '../node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': '../node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      // '@angular/http': '../node_modules/@angular/http/bundles/http.umd.js',
      // '@angular/router': '../node_modules/@angular/router/bundles/router.umd.js',
      // '@angular/router/upgrade': '../node_modules/@angular/router/bundles/router-upgrade.umd.js',
      // '@angular/forms': '../node_modules/@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      '../node_modules/rxjs',
      'ts':                        '../node_modules/plugin-typescript/lib/plugin.js',
      'typescript':                '../node_modules/typescript/lib/typescript.js',
      'ngvas':                     '../bundle/ngvas.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      demo: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });

})(this);
