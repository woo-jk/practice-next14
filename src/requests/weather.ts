import { ForecastResponse, WeatherResponse } from "@/types/weather";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getCurrentWeather = async (location: string): Promise<WeatherResponse> => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no
  `,
    { next: { tags: ["weather"] } }
  );

  if (!response.ok) {
    throw new Error("날씨 정보를 불러올 수 없습니다.");
  }

  return response.json();
};

export const getForecast = async (location: string): Promise<ForecastResponse> => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=no&alerts=no`,
    { next: { tags: ["forecast"] } }
  );

  if (!response.ok) {
    throw new Error("일기예보 정보를 불러올 수 없습니다.");
  }

  return response.json();
};
