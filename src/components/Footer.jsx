export default function Footer(){
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Amandeep Kaur — UI/UX & Graphic Designer</p>
        <p className="text-neutral-500 text-sm">Dark · Neon Green Aesthetic</p>
      </div>
    </footer>
  )
}
