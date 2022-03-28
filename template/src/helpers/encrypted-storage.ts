import EncryptedStorage from "react-native-encrypted-storage";

export const storeData = async (key: string, value: any) => {
  const convertedValue = JSON.stringify(value);

  try {
    await EncryptedStorage.setItem(key, convertedValue);
  } catch (error) {
    console.log("error", error);
  }
};

export const retrieveData = async (key: string) => {
  try {
    const data = await EncryptedStorage.getItem(key);

    if (data) {
      return data;
    } else {
      throw new Error(`There is no information stored with this key ${key}.`);
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const removeData = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error) {
    console.log("error", error);
  }
};

export const clearStorage = async () => {
  try {
    await EncryptedStorage.clear();
  } catch (error) {
    console.log("error", error);
  }
};
