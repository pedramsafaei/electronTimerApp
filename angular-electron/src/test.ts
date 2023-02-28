import 'zone.js/dist/zone-testing';
import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

const testBedConfig: TestModuleMetadata = {
  imports: [BrowserDynamicTestingModule],
  providers: [],
  declarations: [],
  schemas: []
};

TestBed.initTestEnvironment(
  [BrowserDynamicTestingModule],
  platformBrowserDynamicTestingModule()
);

const context = require.context('./', true, /\.spec\.ts$/);
context.keys().forEach((key: string) => {
  context(key);
});
