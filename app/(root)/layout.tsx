import Navbar from "@/app/components/Navbar";

export default function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <main className="font-word-sans">
        <Navbar />
        {children}
    </main>
  )
}