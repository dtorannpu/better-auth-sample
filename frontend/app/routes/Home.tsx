import H1 from "~/components/H1";

export const meta = () => {
  return [
    { title: "トップページ" },
    { name: "description", content: "トップページ" },
  ];
};

export default function Home() {
  return (
    <>
      <H1>トップページ</H1>
    </>
  );
}
