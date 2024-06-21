import { Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type CustomRemoteConfig = RemoteConfig & {   // represents the entries in the manifest
    exposedModule: string;
    routePath: string;
    ngModuleName: string;
}   // intersection type

export type CustomManifest = Manifest<CustomRemoteConfig>;  // manifest