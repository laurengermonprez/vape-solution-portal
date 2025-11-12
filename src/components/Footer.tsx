const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">V</span>
              </div>
              <span className="text-xl font-bold">
                Vape Vendor Solutions
              </span>
            </div>
            <p className="text-secondary-foreground/70">
              Premium vending machine solutions for the modern retail environment.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("machines")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors"
                >
                  Machines
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>Fort Lauderdale, Florida</li>
              <li>
                <a href="tel:752-282-1546" className="hover:text-primary transition-colors">
                  752-282-1546
                </a>
              </li>
              <li>
                <a
                  href="mailto:cpcprofessionals@yahoo.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  cpcprofessionals@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Vape Vendor Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
