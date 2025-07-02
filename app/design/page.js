// app/design/page.jsx
import { Suspense } from 'react';
import Design from './Design';

export default function DesignPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Loading page...</p>
      </div>
    }>
      <Design />
    </Suspense>
  );
}
