
const Header = () => {
	return (
		<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
	
		<img src="/plane-icon.svg" alt="" className="w-8 h-8"/>
      <span className="ml-3 text-xl">TravelEase</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Services</a>
      {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
    </nav>
    <button className="inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-xl text-base text-white mt-4 md:mt-0">Get Started
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
);
}


export default Header;