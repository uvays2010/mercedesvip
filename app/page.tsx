'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight, ChevronDown, Globe2, Heart, Menu, Search, Sparkles, UserRound, X } from 'lucide-react'

const models = [
  { name: 'The new CLA', type: 'Electric intelligence', stat: '792 km range', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85' },
  { name: 'EQS SUV', type: 'Electric luxury', stat: 'Up to 671 hp', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=85' },
  { name: 'G-Class', type: 'Iconic by nature', stat: 'The electric G-Class', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=85' },
]

const navGroups = [
  ['Models', 'Discover', 'Electric'],
  ['AMG', 'Maybach'],
  ['Technology', 'Services'],
]

const navItems = navGroups.flat()

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState<string | null>(null)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (name: string) => setFavorites((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])

  return (
    <main className={theme === 'light' ? 'site light-mode' : 'site'}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mercedes-Benz home">
          <span className="brand-mark">✦</span><span>MERCEDES-BENZ</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navGroups.map((group, index) => (
            <div className="nav-group" key={index}>
              {group.map((item) => <button key={item} className={activeNav === item ? 'nav-link active' : 'nav-link'} onClick={() => setActiveNav(activeNav === item ? null : item)}>{item}<ChevronDown size={13} /></button>)}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <button aria-label="Search"><Search size={18} /></button>
          <button aria-label="Language"><Globe2 size={18} /></button>
          <button aria-label="Account"><UserRound size={18} /></button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      {activeNav && <div className="mega-menu"><div><span className="eyebrow">Explore Mercedes-Benz</span><h2>{activeNav}</h2><p>Discover a world shaped around intelligent design, confident performance, and effortless luxury.</p></div><div className="mega-links"><a href="#models">Explore all {activeNav} <ArrowRight size={15} /></a><a href="#technology">Featured experiences <ArrowRight size={15} /></a><a href="#discover">Latest stories <ArrowRight size={15} /></a></div></div>}
      {menuOpen && <div className="mobile-menu"><div className="mobile-menu-top"><span>Menu</span><span className="eyebrow">MERCEDES-BENZ</span></div>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ArrowRight size={18} /></a>)}<a href="#configurator">Configure your Mercedes <ArrowRight size={18} /></a></div>}

      <section id="top" className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content"><span className="eyebrow">The new Mercedes-Benz</span><h1>Intelligence<br /><em>becomes</em> desire.</h1><p>Meet the next generation of mobility. Designed around you, powered by possibility.</p><div className="hero-actions"><a className="button button-light" href="#models">Discover the new CLA <ArrowRight size={16} /></a><a className="text-link" href="#technology">Explore innovation <ArrowDown size={15} /></a></div></div>
        <div className="hero-bottom"><span>01 — 04</span><div className="progress"><span /></div><span>Scroll to explore</span><ArrowDown size={16} /></div>
      </section>

      <section id="models" className="section models-section"><div className="section-heading"><div><span className="eyebrow">The collection</span><h2>Find your <em>expression.</em></h2></div><a className="text-link dark-link" href="#configurator">View all models <ArrowRight size={15} /></a></div><div className="model-grid">{models.map((model) => <article className="model-card" key={model.name}><div className="model-image" style={{ backgroundImage: `url(${model.image})` }}><button className="favorite" onClick={() => toggleFavorite(model.name)} aria-label={`Save ${model.name}`}><Heart size={17} fill={favorites.includes(model.name) ? 'currentColor' : 'none'} /></button><span className="model-stat">{model.stat}</span></div><div className="model-info"><div><span className="eyebrow">{model.type}</span><h3>{model.name}</h3></div><ArrowRight size={19} /></div></article>)}</div></section>

      <section id="electric" className="split-section electric-section"><div className="split-image electric-image" /><div className="split-content"><span className="eyebrow">Electric intelligence</span><h2>Move with<br /><em>meaning.</em></h2><p>From quiet confidence to remarkable range, our electric vehicles turn every journey into a more considered experience.</p><a className="button button-dark" href="#technology">Explore EQ <ArrowRight size={16} /></a><div className="stat-row"><div><strong>792</strong><span>km range</span></div><div><strong>15 min</strong><span>rapid charge</span></div><div><strong>0 g</strong><span>tailpipe emissions</span></div></div></div></section>

      <section id="technology" className="technology-section"><div className="tech-intro"><span className="eyebrow">Mercedes-Benz technology</span><h2>The car that<br /><em>understands you.</em></h2><p>Technology should feel invisible. Ours is designed to make every interaction more intuitive, every drive more personal.</p><a className="text-link" href="#discover">Discover MBUX <ArrowRight size={15} /></a></div><div className="tech-feature"><div className="tech-image" /><div className="tech-caption"><span className="eyebrow">01 / MBUX Superscreen</span><h3>A new dimension of connection.</h3><p>Immersive, intelligent and made for the way you live.</p></div></div></section>

      <section id="discover" className="world-section"><div className="world-content"><span className="eyebrow">Beyond the vehicle</span><h2>Welcome to<br /><em>your world.</em></h2><p>Discover the people, places and ideas moving Mercedes-Benz forward.</p><div className="world-links"><a href="#history"><span>Heritage & legacy</span><ArrowRight size={16} /></a><a href="#amg"><span>AMG performance</span><ArrowRight size={16} /></a><a href="#news"><span>Stories & inspiration</span><ArrowRight size={16} /></a></div></div><div className="world-image" /></section>

      <section id="configurator" className="config-section"><div><span className="eyebrow">Make it yours</span><h2>Your Mercedes.<br /><em>Your signature.</em></h2><p>Shape every detail, from the silhouette to the final stitch. Begin your configuration.</p><a className="button button-light" href="#models">Start configuring <ArrowRight size={16} /></a></div><div className="config-orbit"><div className="orbit-ring" /><span className="orbit-label">Your expression<br /><strong>01 / 04</strong></span></div></section>

      <section id="history" className="heritage-section"><div className="heritage-image" /><div className="heritage-content"><span className="eyebrow">Since 1886</span><h2>Always<br /><em>ahead.</em></h2><p>For more than 135 years, Mercedes-Benz has been redefining what is possible. The journey continues.</p><a className="text-link" href="#top">Explore our heritage <ArrowRight size={15} /></a></div></section>

      <section id="news" className="news-section"><div className="section-heading"><div><span className="eyebrow">The latest</span><h2>Stories in <em>motion.</em></h2></div><a className="text-link dark-link" href="#news">View all stories <ArrowRight size={15} /></a></div><div className="news-grid"><article><div className="news-image news-one" /><span className="eyebrow">Innovation · 06.10.2026</span><h3>The art of making tomorrow feel effortless.</h3><a className="text-link dark-link" href="#technology">Read story <ArrowRight size={15} /></a></article><article><div className="news-image news-two" /><span className="eyebrow">Design · 28.09.2026</span><h3>Inside the new language of luxury.</h3><a className="text-link dark-link" href="#discover">Read story <ArrowRight size={15} /></a></article><article><div className="news-image news-three" /><span className="eyebrow">AMG · 18.09.2026</span><h3>Performance, with nothing to prove.</h3><a className="text-link dark-link" href="#amg">Read story <ArrowRight size={15} /></a></article></div></section>

      <section id="amg" className="performance-section"><div className="performance-hero"><span className="eyebrow">Mercedes-AMG</span><h2>Born to<br /><em>thrill.</em></h2><p>Precision engineered for people who do not follow the road. Experience performance with a pulse.</p><a className="button button-light" href="#models">Explore AMG <ArrowRight size={16} /></a></div><div className="performance-cards"><article><span className="eyebrow">AMG GT Coupé</span><strong>585</strong><span>hp of handcrafted emotion</span></article><article><span className="eyebrow">AMG SL Roadster</span><strong>3.6s</strong><span>0—100 km/h, in an instant</span></article><article><span className="eyebrow">AMG experience</span><strong>01</strong><span>Make every corner count</span></article></div></section>

      <section id="services" className="service-section"><div className="service-heading"><span className="eyebrow">Mercedes me</span><h2>More than<br /><em>a journey.</em></h2><p>Everything you need, connected to your Mercedes. Personal support, intelligent care, and confidence wherever you go.</p></div><div className="service-list"><a href="#services"><span>01</span><div><strong>Find your nearest retailer</strong><small>Expert guidance, wherever you are</small></div><ArrowRight size={18} /></a><a href="#services"><span>02</span><div><strong>Book a service appointment</strong><small>Keep your Mercedes at its best</small></div><ArrowRight size={18} /></a><a href="#services"><span>03</span><div><strong>Mercedes me connect</strong><small>Your car, intelligently connected</small></div><ArrowRight size={18} /></a></div></section>

      <footer className="footer"><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark">✦</span><span>MERCEDES-BENZ</span></a><span className="footer-note">The best or nothing.</span><div className="footer-actions"><button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</button><button>English <ChevronDown size={13} /></button></div></div><div className="footer-grid"><div><span className="eyebrow">Explore</span><a href="#models">Models</a><a href="#electric">Electric</a><a href="#technology">Technology</a><a href="#configurator">Configurator</a></div><div><span className="eyebrow">Discover</span><a href="#history">Heritage</a><a href="#amg">AMG</a><a href="#maybach">Maybach</a><a href="#news">Newsroom</a></div><div><span className="eyebrow">Support</span><a href="#services">Service & maintenance</a><a href="#services">Find a dealer</a><a href="#services">Contact us</a><a href="#services">Roadside assistance</a></div><div><span className="eyebrow">Follow us</span><a href="#social">Instagram</a><a href="#social">YouTube</a><a href="#social">LinkedIn</a><a href="#social">WeChat</a></div></div><div className="footer-bottom"><span>© 2026 Mercedes-Benz AG</span><span>Privacy · Legal notice · Accessibility · Cookie settings</span></div></footer>
    </main>
  )
}
