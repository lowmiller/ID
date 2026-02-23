import Link from 'next/link'

export const metadata = {
  title: 'Teacher Training | iD Hot Yoga',
  description: 'Learn about yoga teacher training programs at iD Hot Yoga.',
}

export default function TeacherTrainingPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-3xl font-bold mb-4">Teacher Training</h1>
      <p className="text-text-secondary mb-8">
        Interested in becoming a certified yoga instructor? Our teacher training programs provide comprehensive education and hands-on experience.
      </p>
      <Link
        href="/"
        className="text-primary font-medium hover:underline"
      >
        Back to Home &rarr;
      </Link>
    </div>
  )
}
