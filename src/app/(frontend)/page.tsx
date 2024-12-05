import { Main, Section, Container } from '@/components/craft'
import { Button } from '@/components/ui/button'

// export const revalidate = 600

export default function Index() {
  return (
    <Section>
      <Container className="grid gap-8">
        <h1>
          💸 Pay -- Payload Starter by <a href="https://9d8.dev">9d8</a>
        </h1>
        <HowToUse />
      </Container>
    </Section>
  )
}

const HowToUse = () => {
  return (
    <Main className="p-6 !prose-sm border rounded-md bg-accent/30 max-w-none">
      <h2>Modern Full-Stack Starter Template</h2>
      <p>
        A powerful starter template combining PayloadCMS with Next.js, designed for performance and
        developer experience.
      </p>

      <div className="not-prose my-6 flex gap-4">
        <Button asChild>
          <a href="https://github.com/9d8dev/pay">Docs on GitHub</a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://payloadcms.com/docs">Payload Docs</a>
        </Button>
      </div>

      <h3>Key Features</h3>
      <ul>
        <li>Next.js 15 with App Router for modern React development</li>
        <li>PayloadCMS for flexible content management</li>
        <li>PostgreSQL database with Neon support</li>
        <li>AWS S3 integration for media storage</li>
        <li>Tailwind CSS & shadcn/ui for beautiful UIs</li>
        <li>TypeScript for enhanced development</li>
      </ul>

      <h3>Quick Setup</h3>
      <ol>
        <li>
          <strong>Clone & Install:</strong>
          <pre>
            <code>git clone https://github.com/9d8dev/pay.git cd pay pnpm install</code>
          </pre>
        </li>
        <li>
          <strong>Configure Environment:</strong>
          <ul>
            <li>Copy .env.example to .env</li>
            <li>Set up PostgreSQL database</li>
            <li>Configure AWS S3 credentials</li>
            <li>Add Payload secret key</li>
          </ul>
        </li>
        <li>
          <strong>Start Development:</strong>
          <pre>
            <code>pnpm dev</code>
          </pre>
        </li>
      </ol>
    </Main>
  )
}
