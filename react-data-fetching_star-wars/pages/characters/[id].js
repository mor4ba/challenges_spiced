import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );
  console.log({ data });

  if (isLoading) return <h1>Is loading...</h1>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
