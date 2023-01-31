export class LocalStorage {
    public static SaveToLocal(key: string, value: any) : void {
        sessionStorage.setItem(key,JSON.stringify(value))
    }

    public static ReadFromLocal(key: string): any | null {
        const value = sessionStorage.getItem(key);

        try {
            if(value){
                return JSON.parse(value) as any;
            }
            return null;
        } catch (error) {
            sessionStorage.removeItem(key);
            return null;
        }
    }
}