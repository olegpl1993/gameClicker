import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron", {

  btnClick: async () => {
    try {
      console.log('testClick');
    } catch {
      console.log(`Operation failed`);
    }
  }
});
