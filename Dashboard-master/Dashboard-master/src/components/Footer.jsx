export default function Footer() {
  return (
    <footer className="bg-black flex flex-wrap items-center justify-between p-3 m-auto">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
        <ul className="flex mx-auto text-white text-center">
          <li className="p-2 cursor-pointer hover:underline">
            Terms of Service
          </li>
          <li className="p-2 cursor-pointer hover:underline">Privacy Policy</li>
          <li className="p-2 cursor-pointer hover:underline">Refund Policy</li>
        </ul>
        <div className="flex mx-auto text-white text-center">
          © {new Date().getFullYear} Oatmeal.gg
        </div>
      </div>
    </footer>
  );
}
