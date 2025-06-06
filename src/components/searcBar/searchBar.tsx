'use client'

import { useRouter } from "next/navigation"

export function SearchBar({ slug }: { slug: string }) {
  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.namedItem("search") as HTMLInputElement;
    const query = searchInput.value.trim();
    if (query) {
      router.push(`/category/${slug}?search=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form onSubmit={handleSearch} method="POST">
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md py-1 px-2 text-sm"
        name="search"
      />
    </form>
  );
}
