export async function GET(request, { params }) {
  const apiUrl = `${process.env.MY_SYNCTHONS}/${params.slug[0]}`;
  console.log(`${process.env.MY_SYNCTHONS}/${params.slug[0]}`);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resData = await fetch(apiUrl, requestOptions).then((res) => res.json());
  return Response.json(resData);
}

export async function POST(request, { params }) {
  const res = await request.json();
  console.log(res);
  console.log(params);
  const apiUrl = `${process.env.MY_SYNCTHONS}/${params.slug[0]}`;
  console.log(apiUrl);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(res),
  };
  console.log(requestOptions);
  const resData = await fetch(apiUrl, requestOptions).then((res) => res.json());
  console.log(resData)

  return Response.json(resData);
}
