import { getForecast } from "@/requests/weather";
import HomeButton from "@/components/HomeButton";
import RevalidateButton from "@/components/RevalidateButton";

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `날씨 앱 - ${searchParams.name}`,
    description: `${searchParams.name}의 평균 기온을 알려드려요`,
  };
}

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export default async function Detail({ params, searchParams }: Props) {
  const response = await getForecast(params.location);

  return (
    <main>
      <h1>{searchParams.name}의 3일 평균 기온</h1>
      <ul>
        {response.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / 평균 기온: {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <RevalidateButton tag="forecast" />
      <HomeButton />
    </main>
  );
}
