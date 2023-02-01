export class LocalStorage {

    public static SaveToLocal(key: string, value: any): void {
        sessionStorage.setItem(key, JSON.stringify(value))
    }

    public static ReadFromLocal(): any | undefined {
        const value = sessionStorage.getItem(Object.keys(sessionStorage)[0])
        try {
            if (value) {
                return JSON.parse(value) as any;
            }
            return undefined;
        } catch (error) {
            this.DeleteLocal();
            return undefined;
        }
    }
    public static DeleteLocal() {
        sessionStorage.clear();
    }

}
