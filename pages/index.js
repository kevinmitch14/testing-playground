import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h3 className="font-semibold text-xl">Inventory</h3>
      <ul className="list-disc list-inside">
        <li>
          <Link href='/ios16'>
            <a className="underline text-blue-600 visited:text-purple-600">
              iOS 16 Checkbox
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
