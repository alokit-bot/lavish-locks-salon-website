import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Menu, X, Scissors, Sparkles, Award, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    { name: 'Haircut & Styling', price: '₹500 onwards', icon: Scissors },
    { name: 'Hair Color', price: '₹1,500 onwards', icon: Sparkles },
    { name: 'Keratin Treatment', price: '₹3,000 onwards', icon: Sparkles },
    { name: 'Bridal Makeup', price: '₹8,000 onwards', icon: Sparkles },
    { name: 'Skin Care', price: '₹800 onwards', icon: Sparkles },
    { name: 'Nail Art', price: '₹400 onwards', icon: Sparkles },
    { name: 'Threading', price: '₹50 onwards', icon: Sparkles },
    { name: 'Waxing', price: '₹300 onwards', icon: Sparkles },
    { name: 'Hair Academy Courses', price: 'Contact for details', icon: Award }
  ];

  const reviews = [
    {
      name: 'Smita V',
      rating: 5,
      text: 'Amazing haircut experience! The stylist listened carefully to what I wanted and delivered perfectly. Very professional.'
    },
    {
      name: 'Nisha P',
      rating: 5,
      text: 'Best keratin treatment I\'ve had in Bangalore. Hair is silky smooth. Will definitely come back.'
    },
    {
      name: 'Asha G',
      rating: 5,
      text: 'Great salon with skilled staff. They also offer training courses. Prices are very reasonable for the quality.'
    },
    {
      name: 'Deepa M',
      rating: 5,
      text: 'Bridal makeup was stunning! Got so many compliments. The team is creative and patient.'
    },
    {
      name: 'Rekha B',
      rating: 5,
      text: 'Clean, hygienic place. Staff is warm and welcoming. The hair coloring came out exactly as I wanted.'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2',
    'https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg',
    'https://images.pexels.com/photos/7195799/pexels-photo-7195799.jpeg',
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
    'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg',
    'https://images.pexels.com/photos/4974568/pexels-photo-4974568.jpeg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-rose-600" />
              <h1 className="text-2xl font-bold text-gray-900">lavish locks btm</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
              <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left nav-link">About</button>
              <button onClick={() => scrollToSection('services')} className="text-left nav-link">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left nav-link">Gallery</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left nav-link">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-left nav-link">Contact</button>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white w-full">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-6">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-gray-700 font-medium ml-2">5.0 on Google Maps</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Where Beauty Meets
              <span className="block text-rose-600">Excellence</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Experience luxury beauty services and professional training at Bangalore's premier salon and hair academy
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call to Book
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-6"
                onClick={() => scrollToSection('services')}
              >
                View Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-rose-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-rose-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">1000+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Sparkles className="w-8 h-8 text-rose-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">15+</p>
                <p className="text-gray-600">Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Destination for
                <span className="block text-rose-600">Beauty & Excellence</span>
              </h3>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Welcome to <strong>lavish locks btm</strong>, where passion for beauty meets professional expertise. For over a decade, we've been transforming looks and building confidence, one client at a time.
                </p>
                <p>
                  Our team of skilled stylists and beauty experts are dedicated to delivering exceptional services in a warm, welcoming environment. From everyday styling to special occasion makeup, we've got you covered.
                </p>
                <p>
                  What sets us apart is our commitment to continuous learning and innovation. As a certified hair academy, we not only serve clients but also nurture the next generation of beauty professionals.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Team</p>
                    <p className="text-sm text-gray-600">Certified & Experienced</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Quality Products</p>
                    <p className="text-sm text-gray-600">Premium Brands Only</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2"
                  alt="Lavish Locks BTM Salon Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-400 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive beauty solutions tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="service-card group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-rose-200"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-600 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-rose-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                    <p className="text-rose-600 font-semibold text-lg">{service.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Call for Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Salon</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into our luxurious space and professional setup
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Salon view ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="testimonial-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                  <p className="font-bold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visit Us Today</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to make you look and feel your best
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="contact-card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-rose-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-rose-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
                <a href="tel:+919876543210" className="text-rose-600 hover:text-rose-700 font-semibold text-lg">
                  +91 98765 43210
                </a>
                <p className="text-gray-600 mt-2 text-sm">Book your appointment</p>
              </CardContent>
            </Card>

            <Card className="contact-card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-rose-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-rose-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-700">BTM Layout, Bangalore</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:text-rose-700 font-semibold text-sm mt-2 inline-block"
                >
                  Get Directions
                </a>
              </CardContent>
            </Card>

            <Card className="contact-card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-rose-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-rose-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h4>
                <p className="text-gray-700">Open Daily</p>
                <p className="text-gray-600 text-sm mt-2">10:00 AM - 8:00 PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-rose-50 to-amber-50 rounded-3xl p-8 md:p-12 text-center">
            <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Look?
            </h4>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the lavish locks difference
            </p>
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Call Now to Book
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-rose-400" />
                <h5 className="text-2xl font-bold">lavish locks btm</h5>
              </div>
              <p className="text-gray-400 mb-4">
                Your destination for premium beauty services and professional training in Bangalore.
              </p>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-gray-400 ml-2">5.0 Rating</span>
              </div>
            </div>

            <div>
              <h6 className="text-lg font-bold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-bold mb-4">Contact Info</h6>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>BTM Layout, Bangalore</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Open Daily: 10 AM - 8 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 lavish locks btm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;