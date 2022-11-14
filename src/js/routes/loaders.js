const rootLoader = ({ request }) => {
  const url = new URL(request.url);
  const number = url.searchParams.get("number");
  return Number(number) || 4;
};

export { rootLoader };
