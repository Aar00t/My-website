
// app/sections/footer.tsx
export default function Footer() {
  return (
    <footer className="border-t">
      <div className="grid grid-cols-2 mx-auto max-w-5xl px-6 py-6 text-sm text-gray-600">
        <div className="text-left">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="text-right">
          <p>Designed & built by Aar00t</p>
        </div>
      </div>
    </footer>
  );
}
