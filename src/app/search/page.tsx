// File: /app/search/page.tsx
import { Suspense } from "react";
import SearchResults from "../components/SearchResults";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
