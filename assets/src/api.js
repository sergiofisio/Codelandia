const notice = axios.create({
  baseURL: `https://newsapi.org/v2/everything?q=keyword&apiKey=669d2a1758dc44c0a24d17cd05055899`,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
