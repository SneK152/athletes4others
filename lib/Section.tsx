export default function Section({
  children,
  name,
  ...restprops
}: React.ComponentPropsWithoutRef<"section"> & { name: string }) {
  return (
    <section {...restprops} id={name}>
      <div className="h-16"></div>
      {children}
    </section>
  );
}
