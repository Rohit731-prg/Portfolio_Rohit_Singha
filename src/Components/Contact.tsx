interface conSchma {
  name: string;
  link: string;
}

function Contact() {
  const con: conSchma[] = [
    { name: 'GitHub', link: 'https://github.com/Rohit731-prg' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/rohit-singha-55477b308/' },
  ];

  return (
    <main
      id="section5"
      className="font-inter bg-primary px-6 md:px-20 lg:px-40 py-10 text-white"
    >
      <p className="text-3xl md:text-4xl font-semibold mb-6">Contact</p>

      <div className="space-y-3 mb-8">
        <p>
          <span className="font-medium">Email:</span>{' '}
          <span className="underline underline-offset-4">
            rohitsingha.bca@gmail.com
          </span>
        </p>
        <p>
          <span className="font-medium">Phone:</span>{' '}
          <span className="tracking-wide">+91 9883583218</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {con.map((item, index) => (
          <button
            onClick={() => window.open(item.link, '_blank')}
            key={`${item.name}-${index}`}
            className="bg-white text-primary px-5 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {item.name}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Contact;
