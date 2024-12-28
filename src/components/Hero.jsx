
const Hero = () => {
  return (
    <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x800)' }}>
    <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
    <div className="relative flex items-center justify-center h-full text-center text-white px-4">
      <div>
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Find Your Dream Job</h1>
        <p className="text-lg sm:text-xl mb-6">Explore thousands of opportunities and take your career to the next level.</p>
        <a href="/jobs" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300">Browse Jobs</a>
      </div>
    </div>
  </section>
  );
};

export default Hero;
