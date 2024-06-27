import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4 text-white flex justify-center">
      <Link href="/" className="mx-4">Home</Link>
      <Link href="/frame1" className="mx-4">Frame1</Link>
      <Link href="/frame2" className="mx-4">Frame2</Link>
    </nav>
  );
};

export default Navbar;
