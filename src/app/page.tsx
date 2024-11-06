import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-center">
      <h1 className="text-2xl font-bold text-white mb-6">Select a button</h1>
      <div className="flex items-center gap-2">
        <Link href="/web-page">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Web page
          </button>
        </Link>
        <span className="text-white">or</span>
        <Link href="/QA-task/sign-up">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
            QA Tester
          </button>
        </Link>
      </div>
    </div>
  );
}
