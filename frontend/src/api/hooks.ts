import axios from "axios";

import { useQuery } from "react-query";

import { Launch } from "../types";
import { adaptAxios } from "./utils";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/launches",
});

export enum LaunchPeriod {
  Previous = "previous",
  Upcoming = "upcoming",
}

export const useRecentLaunch = (period: LaunchPeriod) =>
  useQuery(["recentLaunch", period], () =>
    adaptAxios<Launch>(
      api.get(period === LaunchPeriod.Previous ? "/last" : "/next")
    )
  );

export const useLaunches = (period: LaunchPeriod) =>
  useQuery(["launches", period], () =>
    adaptAxios<Launch[]>(api.get(`/${period}`))
  );
