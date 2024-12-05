// export const revalidate = 600

export default function Index() {
  return (
    <div className="grid gap-8">
      <h1>
        💸 Pay -- Payload Starter by <a href="https://9d8.dev">9d8</a>
      </h1>

      {/* Delete this */}
      <HowToUse />
    </div>
  )
}

const HowToUse = () => {
  return (
    <section className="p-6 border rounded-md bg-accent/30">
      <h2>9d8/pay is a PayloadCMS Starter</h2>
      <p className="mt-6">How </p>
      <ul>
        <li></li>
      </ul>
    </section>
  )
}
