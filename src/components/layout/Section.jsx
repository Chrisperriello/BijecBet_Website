export default function Section({
  id,
  children,
  className = '',
  containerClassName = '',
}) {
  return (
    <section id={id} className={`w-full px-6 py-12 sm:py-16 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>{children}</div>
    </section>
  )
}
