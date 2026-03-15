import H1 from "~/components/H1";

export const meta = () => {
  return [{ title: "Page1" }, { name: "description", content: "Page1" }];
};

export default function Page1() {
  return (
    <>
      <H1>Page1</H1>
    </>
  );
}
