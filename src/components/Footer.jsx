const Footer = () => {
  return (
    <>
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-5">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#achievement">Achievement</a>
            <a href="#project">Project</a>
        </div>
        <div className="flex items-center gap-5">
            <a href="https://github.com/edwink29?tab=overview&from=2025-09-01&to=2025-09-30" >
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/edwin-kurniawan-617bb534a/">
                <i className="ri-linkedin-box-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/edwk29/">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
