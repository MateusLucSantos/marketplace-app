import axios, { AxiosInstance } from "axios";

export class MarketPlaceApiClient {
  private instace: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instace = axios.create({
      baseURL: "",
    });
  }

  getInstance() {
    return this.instace;
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
