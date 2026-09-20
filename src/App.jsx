import { useRef, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  Bars2Icon,
  MapPinIcon,
  Squares2X2Icon,
  SunIcon,
  HomeIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { photos } from "./property";
import salesSheet from "./sales-sheet.json";
import "./App.css";

const email = "hachadorian@comcast.net";
const inquiry = `mailto:${email}?subject=${encodeURIComponent("Private showing — 17 42nd Street, Unit #3")}&body=${encodeURIComponent("Hello,\n\nI’m interested in 17 42nd Street, Unit #3, Sea Isle City and would like to arrange a private showing.\n\nMy preferred dates are:\nMy phone number is:\n\nThank you!")}`;
const rooms = [
  {
    level: "Upstairs",
    name: "Primary bedroom",
    size: "13′ × 9′",
    detail:
      "New closet storage, a ceiling fan, TV with Roku, and plantation shutters.",
  },
  {
    level: "Upstairs",
    name: "Second bedroom",
    size: "10½′ × 9½′",
    detail:
      "New closet storage, a ceiling fan, TV with Roku, and new window shades.",
  },
  {
    level: "Upstairs",
    name: "Full bathroom",
    size: "6′ × 5½′",
    detail: "Renovated with an Ove shower enclosure.",
  },
  {
    level: "Upstairs",
    name: "Kitchen",
    size: "10′ × 10′",
    detail:
      "New appliances, granite countertops, and a new sliding door to the deck.",
  },
  {
    level: "Upstairs",
    name: "Dining area",
    size: "10½′ × 9½′",
    detail: "A welcoming space to gather, with a new sliding door to the deck.",
  },
  {
    level: "Downstairs",
    name: "Third bedroom",
    size: "10½′ × 9′",
    detail: "Newer flooring, a closet, and a TV with Roku.",
  },
  {
    level: "Downstairs",
    name: "Fourth bedroom",
    size: "10½′ × 9′",
    detail: "Newer flooring, a closet, and a TV with Roku.",
  },
  {
    level: "Downstairs",
    name: "Full bathroom",
    size: "6½′ × 8′",
    detail:
      "Fully renovated with a large soaking tub, new wall and floor tile, fixtures, and vanity.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [level, setLevel] = useState("Upstairs");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef();
  const selectedPhoto = photoIndex === null ? null : photos[photoIndex];
  const cycle = (direction) =>
    setPhotoIndex(
      (current) => (current + direction + photos.length) % photos.length,
    );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#" aria-label="42nd Street home">
          <span className="brand-mark">
            42<span>°</span>
          </span>
          <span>
            <small>SEA ISLE CITY, NEW JERSEY</small>
          </span>
        </a>
        <a className="button button-dark header-cta" href="#contact">
          Arrange a showing <ArrowUpRightIcon />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon /> : <Bars2Icon />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {[
              ["The home", "overview"],
              ["Gallery", "gallery"],
              ["The details", "details"],
              ["Location", "location"],
              ["Arrange a showing", "contact"],
            ].map(([name, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {name}
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> {salesSheet[0]}
            </p>
            <h1>
              Your Shore <br />
              Escape <em>Starts Here</em>
            </h1>
            <p className="hero-description">{salesSheet[9]}</p>
            <a className="address" href="#location">
              <MapPinIcon />
              <span>
                17 42nd Street, Unit #3
                <br />
                <span>Sea Isle City, NJ 08243</span>
              </span>
            </a>
            <div className="hero-actions">
              <a className="button button-dark" href="#gallery">
                Explore the home <ArrowRightIcon />
              </a>
              <a className="text-link" href="#contact">
                Plan your visit <ArrowUpRightIcon />
              </a>
            </div>
            <div className="hero-note">
              <span>01 /</span> FULLY FURNISHED. READY TO ENJOY.
            </div>
          </div>
          <div className="hero-visual">
            {photos.length > 0 && (
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                fetchPriority="high"
              />
            )}
            <button
              className="photo-button"
              onClick={() => setPhotoIndex(0)}
              disabled={!photos.length}
            >
              <Squares2X2Icon /> View all photos <span>{photos.length}</span>
            </button>
          </div>
        </section>
        <section className="facts" aria-label="Property at a glance">
          <div>
            <strong>4</strong>
            <span>BEDROOMS</span>
          </div>
          <div>
            <strong>2</strong>
            <span>FULL BATHROOMS</span>
          </div>
          <div>
            <strong>2</strong>
            <span>LEVELS OF LIVING</span>
          </div>
          <div>
            <strong>Turnkey</strong>
            <span>FULLY FURNISHED</span>
          </div>
        </section>
        <section className="section overview" id="overview">
          <div>
            <p className="eyebrow">TURNKEY OCEAN-BLOCK CONDO</p>
            <h2>
              Fully furnished.
              <br />
              <em>Ready to enjoy.</em>
            </h2>
          </div>
          <div className="overview-copy">
            <p>{salesSheet[2]}</p>
            <p>{salesSheet[4]}</p>
            <a className="text-link" href="#details">
              Get to know the home <ArrowRightIcon />
            </a>
          </div>
        </section>
        <section className="feature-strip">
          <article>
            <SunIcon />
            <h3>Large private deck</h3>
            <p>{salesSheet[5]}</p>
          </article>
          <article>
            <HomeIcon />
            <h3>Thoughtfully updated interior</h3>
            <p>{salesSheet[3]}</p>
          </article>
          <article>
            <KeyIcon />
            <h3>Fully furnished</h3>
            <p>{salesSheet[6]}</p>
          </article>
        </section>
        <section className="section gallery-section" id="gallery">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LOOK AROUND</p>
              <h2>
                Ready to make <em>memories.</em>
              </h2>
            </div>
            <button
              className="text-link"
              onClick={() => setPhotoIndex(0)}
              disabled={!photos.length}
            >
              All {photos.length} photos <ArrowUpRightIcon />
            </button>
          </div>
          <div className="gallery-grid">
            {photos.slice(0, 5).map((photo, index) => (
              <button
                key={photo.src}
                className={`gallery-photo gallery-photo-${index}`}
                onClick={() => setPhotoIndex(index)}
                aria-label={`View photo: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <span>
                  {photo.label}
                  <ArrowUpRightIcon />
                </span>
                {index === 4 && (
                  <span className="more-photos">
                    +{photos.length - 4} photos
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>
        <section className="section overview" aria-label="Shore living">
          <div>
            <p className="eyebrow">YOUR SHORE ESCAPE</p>
            <h2>
              The quintessential <em>shore lifestyle</em>
            </h2>
          </div>
          <div className="overview-copy">
            <p>{salesSheet[7]}</p>
            <p>{salesSheet[8]}</p>
          </div>
        </section>
        <section className="details-section" id="details">
          <div className="section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">ROOM DETAILS</p>
                <h2>
                  Flexible <em>two-level design</em>
                </h2>
              </div>
              <p>
                Four bedrooms. Two full baths.
                <br />
                Fully furnished interior.
              </p>
            </div>
            <div
              className="level-tabs"
              role="group"
              aria-label="Filter rooms by level"
            >
              {["Upstairs", "Downstairs", "Outdoor living"].map((item) => (
                <button
                  key={item}
                  aria-pressed={level === item}
                  onClick={() => setLevel(item)}
                >
                  {item}
                  <ArrowUpRightIcon />
                </button>
              ))}
            </div>
            <div className="room-list">
              {level === "Outdoor living" ? (
                <>
                  <article className="room-row">
                    <h3>Private upper deck</h3>
                    <span>38′ × 22′ × 9′*</span>
                    <p>
                      A large private outdoor space for coffee, dining, and
                      gathering after a beach day.
                    </p>
                  </article>
                  <article className="room-row">
                    <h3>Lower deck</h3>
                    <span>Additional outdoor space</span>
                    <p>
                      A smaller deck on the lower level offers another spot to
                      step outside.
                    </p>
                  </article>
                  <p className="dimension-note">
                    *Upper deck measurements as supplied by the owner; confirm
                    the deck configuration at your showing.
                  </p>
                </>
              ) : (
                rooms
                  .filter((room) => room.level === level)
                  .map((room) => (
                    <article className="room-row" key={room.name}>
                      <h3>{room.name}</h3>
                      <span>{room.size}</span>
                      <p>{room.detail}</p>
                    </article>
                  ))
              )}
            </div>
            <p className="dimension-note">
              Room dimensions are approximate. Both levels have separate
              entrances and are connected by an interior spiral staircase.
            </p>
          </div>
        </section>
        <section className="section location-section" id="location">
          <div className="location-card">
            <MapPinIcon />
            <p className="eyebrow">SEA ISLE CITY, NEW JERSEY</p>
            <h3>17 42nd Street</h3>
            <p>Unit #3 · Sea Isle City, NJ 08243</p>
            <a
              className="button button-light"
              href="https://www.google.com/maps/search/?api=1&query=17+42nd+Street+Sea+Isle+City+NJ+08243"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <ArrowUpRightIcon />
            </a>
          </div>
          <div>
            <p className="eyebrow">OCEAN-BLOCK LIVING</p>
            <h2>
              Steps to
              <br />
              <em>the beach.</em>
            </h2>
            <p>{salesSheet[13]}</p>
            <span className="location-tag">
              <SunIcon /> Ocean-block living · Steps to the beach
            </span>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <p className="eyebrow">{salesSheet[10]}</p>
          <h2>
            Your Shore
            <br />
            <em>Escape Starts Here</em>
          </h2>
          <p>{salesSheet[11]}</p>
          <a className="button button-light" href={inquiry}>
            Arrange a private showing <ArrowUpRightIcon />
          </a>
          <div className="contact-email">
            <a href={`mailto:${email}`}>{email}</a>
            <button onClick={copyEmail} aria-label="Copy email address">
              {copied ? "Copied!" : "Copy"}
            </button>
            <span className="sr-only" role="status">
              {copied ? "Email address copied" : ""}
            </span>
          </div>
        </section>
      </main>
      <footer>
        <a className="footer-brand" href="#">
          <span>AT 17 42ND STREET</span>
        </a>
        <p>Sea Isle City, New Jersey</p>
        <a href="#">Back to top ↑</a>
      </footer>
      <Dialog
        open={selectedPhoto !== null}
        onClose={() => setPhotoIndex(null)}
        className="lightbox"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") cycle(1);
          if (event.key === "ArrowLeft") cycle(-1);
        }}
      >
        <div className="lightbox-backdrop" />
        <div className="lightbox-container">
          <DialogPanel className="lightbox-panel">
            <div className="lightbox-top">
              <DialogTitle>Inside the shore house</DialogTitle>
              <button
                onClick={() => setPhotoIndex(null)}
                aria-label="Close photo gallery"
              >
                <XMarkIcon />
              </button>
            </div>
            {selectedPhoto && (
              <>
                <div className="lightbox-image">
                  <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                  <button
                    className="previous"
                    onClick={() => cycle(-1)}
                    aria-label="Previous photo"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button
                    className="next"
                    onClick={() => cycle(1)}
                    aria-label="Next photo"
                  >
                    <ChevronRightIcon />
                  </button>
                </div>
                <div className="lightbox-caption" aria-live="polite">
                  <span>{selectedPhoto.alt}</span>
                  <span>
                    {photoIndex + 1} / {photos.length}
                  </span>
                </div>
                <div className="thumbnails">
                  {photos.map((photo, index) => (
                    <button
                      key={photo.src}
                      aria-label={`Go to photo ${index + 1}`}
                      aria-current={index === photoIndex ? "true" : undefined}
                      onClick={() => setPhotoIndex(index)}
                    >
                      <img src={photo.src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
