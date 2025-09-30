import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

beforeAll(() => {
  getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

const context = require.context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);
