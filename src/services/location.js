const API_KEY = import.meta.env.VITE_API_KEY;

export const generateLocation = async (searchQuery, loadingState, locationsState, errorState) => {
  loadingState(true);
  try {
    const response = await fetch('http://dataservice.accuweather.com/locations/v1/search?' + new URLSearchParams({ q: searchQuery, apikey: API_KEY }));
    const data = await response.json();
    locationsState(data);
  } catch (e) {
    errorState(e);
  } finally {
    loadingState(false);
  }
};

export const generateWeather = async (locKey, loadingState, conditionState, errorState) => {
  loadingState(true);
  try {
    const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locKey}?` + new URLSearchParams({ apikey: API_KEY }));
    const data = await response.json();
    conditionState(data);
  } catch (e) {
    errorState(e);
  } finally {
    loadingState(false);
  }
};
