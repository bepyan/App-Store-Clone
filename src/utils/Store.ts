import * as SecureStore from "expo-secure-store";

type keyType = "authToken";

const Store = {
    setItem: (key: keyType, value: any) => {
        (async () => {
            try {
                await SecureStore.setItemAsync(key, JSON.stringify(value));
            } catch (e) {
                console.log(e);
            }
        })();
    },

    getItemAsync: async (key: string) => {
        let obj;
        try {
            const jsonString = await SecureStore.getItemAsync(key);
            if (jsonString === null) return undefined;

            obj = JSON.parse(jsonString);
        } catch (e) {
            console.log(e);
        }
        return obj;
    },

    deleteItem: (key: keyType) => {
        (async () => {
            try {
                await SecureStore.deleteItemAsync(key);
            } catch (e) {
                console.log(e);
            }
        })();
    },
};

export default Store;