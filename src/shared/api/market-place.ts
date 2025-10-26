import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseURL = () => {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://192.168.2.127:3001",
  });
};

const baseURL = getBaseURL();

export class MarketPlaceApiClient {
  private instace: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instace = axios.create({
      baseURL,
    });
  }

  getInstance() {
    return this.instace;
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
