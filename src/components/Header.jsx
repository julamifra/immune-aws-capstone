import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { navLinks } from '@/config/navLinks';
import ReactGA from 'react-ga4';
import { logUserEvent } from '@/services/eventLogger';

import { imageUrls } from '@/config/urls';
const logoUrlDark = imageUrls.ioaLogoDark;
const logoUrlWhite = imageUrls.ioaLogoWhite;

const Header = ({ onPideCitaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  const trackEvent = (category, label) => {
    const eventName = label.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    logUserEvent(`header_${eventName}_click`);
    ReactGA.event('header_click', { category, label });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isSolid = isScrolled || isMenuOpen || location.pathname !== '/';
  const headerTextColorClass = isSolid ? 'text-gray-700' : 'text-white';

  const NavItem = ({ link, children }) => (
    <NavLink
      to={link.path}
      end={link.path === '/'}
      onClick={() => trackEvent('Navigation', `Desktop Nav - ${link.name}`)}
      className={({ isActive }) =>
        cn(
          'relative font-medium transition-colors capitalize flex items-center px-1 py-2 text-base',
          'hover:text-brand-DEFAULT',
          isActive
            ? isSolid
              ? 'text-brand-DEFAULT'
              : 'text-white font-semibold'
            : headerTextColorClass
        )
      }
    >
      {children}
    </NavLink>
  );

  const MobileMenuItem = ({ link, level = 0, onLinkClick }) => {
    const isCirugiaRefractiva =
      link.path === '/especialidades/cirugia-refractiva';
    const [isOpen, setIsOpen] = useState(isCirugiaRefractiva); // Force open for Cirugía Refractiva
    const hasSubLinks =
      link.dropdown && link.subLinks && link.subLinks.length > 0;

    const handleToggle = () => {
      if (isCirugiaRefractiva) {
        // For Cirugía Refractiva, clicking the main link navigates, not toggles
        trackEvent('Navigation', `Mobile Nav - ${link.name}`);
        onLinkClick(); // Close main menu
      } else if (hasSubLinks) {
        setIsOpen(!isOpen);
      } else {
        trackEvent('Navigation', `Mobile Nav - ${link.name}`);
        onLinkClick(); // Close main menu on link click
      }
    };

    return (
      <div className={`pl-${level * 4}`}>
        {hasSubLinks ? (
          <>
            {isCirugiaRefractiva ? (
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={handleToggle} // This will close the main menu
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between px-4 py-3 text-gray-700 hover:text-brand-DEFAULT font-medium transition-colors capitalize rounded-md hover:bg-brand-extralight/50',
                    isActive && 'text-brand-DEFAULT bg-brand-extralight/70'
                  )
                }
              >
                <div className="flex items-center space-x-3">
                  {link.icon && <link.icon className="w-5 h-5" />}
                  <span className="font-semibold">{link.name}</span>
                </div>
                {/* No ChevronDown for Cirugía Refractiva as it's always open */}
              </NavLink>
            ) : (
              <button
                onClick={handleToggle}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-brand-DEFAULT font-medium transition-colors capitalize rounded-md hover:bg-brand-extralight/50"
              >
                <span className="font-semibold">{link.name}</span>
                <ChevronDown
                  className="w-5 h-5 transition-transform"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
            )}

            <AnimatePresence>
              {isOpen && ( // isOpen will be true for Cirugía Refractiva due to initial state
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 space-y-1 overflow-y-auto max-h-[50vh]"
                >
                  {link.subLinks.map((subLink) => (
                    <MobileMenuItem
                      key={subLink.name}
                      link={subLink}
                      level={level + 1}
                      onLinkClick={onLinkClick}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <NavLink
            to={link.path}
            end={link.path === '/'}
            onClick={handleToggle}
            className={({ isActive }) =>
              cn(
                'flex items-center space-x-3 text-left px-4 py-3 text-gray-700 hover:text-brand-DEFAULT font-medium transition-colors capitalize rounded-md hover:bg-brand-extralight/50',
                isActive && 'text-brand-DEFAULT bg-brand-extralight/70'
              )
            }
          >
            {link.icon && <link.icon className="w-5 h-5" />}
            <span>{link.name}</span>
          </NavLink>
        )}
      </div>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isSolid ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div
            className={`relative flex items-center justify-between h-16 lg:h-20 ${
              !isMobile ? 'ml-10' : ''
            }`}
          >
            <Link
              to="/"
              className="flex items-center"
              onClick={() => trackEvent('Navigation', 'Logo')}
            >
              <img
                src={isSolid ? logoUrlDark : logoUrlWhite}
                srcSet={
                  isSolid
                    ? `${imageUrls.ioaLogoDark_versions[0]} 150w, ${imageUrls.ioaLogoDark_versions[1]} 200w`
                    : undefined
                }
                sizes={isSolid ? '(max-width: 1023px) 144px, 192px' : undefined}
                alt="IO Amigo Logo"
                className={
                  isMobile ? 'h-12 lg:h-14 w-auto' : 'h-16 lg:h-18 w-auto'
                }
                width={isMobile ? 144 : 192}
                height={isMobile ? 48 : 64}
                loading="eager"
              />
            </Link>

            <div className="lg:hidden absolute right-24 top-1/2 -translate-y-1/2 flex items-center space-x-4">
              <a
                href="https://www.instagram.com/oftalmologoamigo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => trackEvent('Social', 'Instagram Icon - Mobile')}
                className={cn(
                  'transition-colors',
                  isSolid ? 'text-brand-DEFAULT' : 'text-white',
                  'hover:text-brand-DEFAULT'
                )}
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="tel:922535971"
                aria-label="Llamar"
                onClick={() => trackEvent('Contact', 'Phone Icon - Mobile')}
                className={cn(
                  'transition-colors',
                  isSolid ? 'text-brand-DEFAULT' : 'text-white',
                  'hover:text-brand-DEFAULT'
                )}
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/34922535971"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => trackEvent('Contact', 'WhatsApp Icon - Mobile')}
              >
                <WhatsAppIcon
                  className={cn(
                    'w-6 h-6',
                    isSolid ? 'text-green-600' : 'text-white',
                    'hover:text-green-500'
                  )}
                />
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setOpenDropdown(link.name)
                  }
                  onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
                >
                  <NavItem link={link}>
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className="w-4 h-4 ml-1 transition-transform duration-200"
                        style={{
                          transform:
                            openDropdown === link.name
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                        }}
                      />
                    )}
                  </NavItem>
                  <AnimatePresence>
                    {link.dropdown && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-md shadow-xl border border-gray-100"
                      >
                        <div className="p-2">
                          {link.subLinks.map((subLink) => (
                            <div
                              key={subLink.name}
                              className="relative"
                              onMouseEnter={() =>
                                subLink.dropdown &&
                                setOpenNestedDropdown(subLink.name)
                              }
                              onMouseLeave={() =>
                                subLink.dropdown && setOpenNestedDropdown(null)
                              }
                            >
                              <NavLink
                                to={subLink.path}
                                className={({ isActive }) =>
                                  cn(
                                    'flex items-center justify-between px-3 py-2.5 text-base text-gray-700 hover:bg-brand-extralight/50 hover:text-brand-DEFAULT rounded-sm',
                                    isActive &&
                                      'text-brand-DEFAULT bg-brand-extralight/70'
                                  )
                                }
                                onClick={() => {
                                  trackEvent(
                                    'Navigation',
                                    `Desktop Nav - ${link.name} - ${subLink.name}`
                                  );
                                  setOpenDropdown(null);
                                  setOpenNestedDropdown(null);
                                }}
                              >
                                <div className="flex items-center space-x-3">
                                  {subLink.icon && (
                                    <subLink.icon className="w-5 h-5 opacity-80" />
                                  )}
                                  <span>{subLink.name}</span>
                                </div>
                                {subLink.dropdown && (
                                  <ChevronRight className="w-4 h-4 ml-1" />
                                )}
                              </NavLink>
                              <AnimatePresence>
                                {subLink.dropdown &&
                                  openNestedDropdown === subLink.name && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 10 }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute top-0 left-full ml-2 w-64 bg-white rounded-md shadow-xl border border-gray-100"
                                    >
                                      <div className="p-2">
                                        {subLink.subLinks.map((nestedLink) => (
                                          <NavLink
                                            key={nestedLink.name}
                                            to={nestedLink.path}
                                            className={({ isActive }) =>
                                              cn(
                                                'flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-brand-extralight/50 hover:text-brand-DEFAULT rounded-sm',
                                                isActive &&
                                                  'text-brand-DEFAULT bg-brand-extralight/70'
                                              )
                                            }
                                            onClick={() => {
                                              trackEvent(
                                                'Navigation',
                                                `Desktop Nav - ${link.name} - ${subLink.name} - ${nestedLink.name}`
                                              );
                                              setOpenDropdown(null);
                                              setOpenNestedDropdown(null);
                                            }}
                                          >
                                            {nestedLink.icon && (
                                              <nestedLink.icon className="w-5 h-5 opacity-80" />
                                            )}
                                            <span>{nestedLink.name}</span>
                                          </NavLink>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <Button
                className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white text-sm"
                onClick={() => {
                  trackEvent('CTA', 'Pedir Cita - Desktop');
                  onPideCitaClick();
                }}
              >
                Pedir Cita
              </Button>
              <a
                href="https://www.instagram.com/oftalmologoamigo/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('Social', 'Instagram Icon - Desktop')}
                className={cn(
                  'transition-colors',
                  isSolid ? 'text-brand-DEFAULT' : 'text-white',
                  'hover:text-brand-DEFAULT'
                )}
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/34922535971"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('Contact', 'WhatsApp Icon - Desktop')}
                className="text-green-500 hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a
                href="tel:922535971"
                onClick={() => trackEvent('Contact', 'Phone Link - Desktop')}
                className={cn(
                  'flex items-center space-x-2 text-sm hover:text-brand-DEFAULT transition-colors',
                  headerTextColorClass
                )}
              >
                <Phone
                  className={cn(
                    'w-4 h-4',
                    isSolid ? 'text-brand-DEFAULT' : 'text-white'
                  )}
                />
                <span>922 535 971</span>
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'lg:hidden p-2',
                isSolid ? 'text-brand-DEFAULT' : 'text-white'
              )}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-y-auto max-h-[calc(100vh-4rem)]"
            >
              <nav className="flex flex-col space-y-1 px-2 py-4">
                {navLinks.map((link) => (
                  <MobileMenuItem
                    key={link.name}
                    link={link}
                    onLinkClick={() => setIsMenuOpen(false)}
                  />
                ))}
                <div className="px-2 pt-4 mt-2 border-t border-gray-200 space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-brand-DEFAULT to-brand-dark text-white"
                    onClick={() => {
                      trackEvent('CTA', 'Pedir Cita - Mobile');
                      onPideCitaClick();
                      setIsMenuOpen(false);
                    }}
                  >
                    Pedir Cita
                  </Button>
                  <a
                    href="https://wa.me/34922535971"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('Contact', 'WhatsApp Link - Mobile')
                    }
                    className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-700 transition-colors text-sm pt-1"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Contactar por WhatsApp</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
