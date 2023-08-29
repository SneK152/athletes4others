export default function Section({
  children,
  name,
  ...restprops
}: React.ComponentPropsWithoutRef<"section"> & { name: string }) {
  return (
    <>
      <div className="h-14"></div>
      <section {...restprops} id={name}>
        {children}
      </section>
    </>
  );
}
