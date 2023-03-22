// http request

const url =
  "https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z";
const corona = fetch(url)
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((data) => console.log(data));
