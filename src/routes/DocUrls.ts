export class ConfigUrls {
    public static readonly Root = '/config';
    public static readonly Styling = `${ConfigUrls.Root}/styling`;
    public static readonly Builders = `${ConfigUrls.Root}/builders`;
    public static BuildersTab = (tab: string) => `${ConfigUrls.Builders}?tab=${tab}`;
}