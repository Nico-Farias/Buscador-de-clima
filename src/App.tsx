import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";
import Form from "./components/form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/weatherDetail/WeatherDetail";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { fetchWeather, weather, hasWeatherData, loading, notFound } =
    useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Clima no encontrado</Alert>}
      </div>
    </>
  );
}

export default App;
