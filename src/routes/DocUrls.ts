export class ConfigUrls {
    public static readonly Root = '/config';
    public static readonly Styling = `${ConfigUrls.Root}/styling`;
    public static readonly Builders = `${ConfigUrls.Root}/builders`;
    public static BuildersTab = (tab: string) => `${ConfigUrls.Builders}?tab=${tab}`;
}

export class TypesUrls {
    public static readonly Root = '/types';
    public static readonly Core = `${TypesUrls.Root}/core`;
    public static CoreTab = (tab:string) => `${TypesUrls.Core}?tab=${tab}`;
}

export class CoreUrls {
    public static readonly Home = '/';
    public static readonly Dev = '/dev';
}