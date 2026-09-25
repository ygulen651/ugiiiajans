"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  Asterisk,
  BarChart3,
  Check,
  Code2,
  Globe2,
  Menu,
  Megaphone,
  PenTool,
  Search,
  ShoppingCart,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    no: "01",
    icon: Code2,
    title: "Web Tasarım",
    text: "Mobil ve SEO uyumlu web tasarım çözümlerimizle potansiyel müşterilerinize ulaşmanızı sağlıyoruz.",
    tags: ["Mobil uyumlu", "SEO uyumlu", "Modern tasarım"],
  },
  {
    no: "02",
    icon: Megaphone,
    title: "Sosyal Medya Yönetimi",
    text: "Dijital medya ekibimizle markanızın hedefe ulaşması yolunda profesyonel paylaşımlara imza atıyoruz.",
    tags: ["İçerik", "Paylaşım", "Hedef kitle"],
  },
  {
    no: "03",
    icon: Search,
    title: "Google Ads Yönetimi",
    text: "Uzman ekibimizle doğru hesap yönetimi yaparak bütçenizi daha etkin kullanmanıza yardımcı oluyoruz.",
    tags: ["Google Ads", "Hesap yönetimi", "Bütçe"],
  },
  {
    no: "04",
    icon: BarChart3,
    title: "Marka Danışmanlığı",
    text: "A'dan Z'ye tüm süreçlerde profesyonel ve deneyimli ekibimizle markanızı zirveye çıkarmak için buradayız.",
    tags: ["Strateji", "Danışmanlık", "Büyüme"],
  },
  {
    no: "05",
    icon: PenTool,
    title: "Kurumsal Kimlik Tasarımı",
    text: "Logo tasarımından başlayarak baskıya yönelik tüm ihtiyaçlarınızın tasarımını gerçekleştiriyoruz.",
    tags: ["Logo", "Kurumsal kimlik", "Baskı"],
  },
  {
    no: "06",
    icon: ShoppingCart,
    title: "E-Ticaret",
    text: "E-ticaret sitenizi kullanıcı deneyimleri doğrultusunda yenilikçi bakış açısıyla tasarlıyoruz.",
    tags: ["E-Ticaret", "Kullanıcı deneyimi", "Satış"],
  },
  {
    no: "07",
    icon: Code2,
    title: "Yazılım Hizmetleri",
    text: "Gelişmiş yazılım teknolojileri ve yenilikçi çözümlerimizle, işletmenizin ihtiyaçlarına özel tasarlanmış yazılımlar sunuyoruz.",
    tags: ["Özel yazılım", "Teknoloji", "Çözüm"],
  },
  {
    no: "08",
    icon: Globe2,
    title: "İnternet Hizmetleri",
    text: "İşletmenizi dijital dünyada öne çıkaracak, hızlı, güvenilir ve profesyonel internet hizmetleri sunuyoruz.",
    tags: ["Hızlı", "Güvenilir", "Profesyonel"],
  },
  {
    no: "09",
    icon: Sparkles,
    title: "Danışmanlık",
    text: "Profesyonel danışmanlık hizmetlerimizle, sektörel deneyim ve uzmanlığımızı birleştirerek iş süreçlerinizi optimize ediyoruz.",
    tags: ["Deneyim", "Uzmanlık", "Optimizasyon"],
  },
];

const projects = [
  {
    title: "Web Tasarım",
    category: "Dijital Çözümler",
    result: "Web",
    image: "/web11.png",
    imageClassName: "projectProductImage",
    unoptimized: true,
    className: "projectLarge",
  },
  {
    title: "Ambalaj Tasarımları",
    category: "Kurumsal Kimlik Tasarımı",
    result: "Ambalaj",
    image: "/ambalaj1.png",
    imageClassName: "projectProductImage",
    className: "projectTall",
  },
  {
    title: "Sosyal Medya",
    category: "Sosyal Medya Yönetimi",
    result: "Dijital",
    image: "/sosyal1.png",
    imageClassName: "projectProductImage",
    className: "projectWide",
  },
];

const clientLogos = [
  ["Karamanoğlu Ulak", "/ulak.png"],
  ["Saray Bisküvi", "/saray.svg"],
  ["Sıla Evde Bakım", "/sila-evde-bakim.png"],
  ["Pamir Villaları", "/pamir-villalari.png"],
  ["Oslo", "/oslo.png"],
  ["Kartap", "/kartap.png"],
  ["İlkem", "/ilkem.png"],
  ["Detay Sigorta", "/detay-sigorta.png"],
  ["Chubby", "/chubby.png"],
  ["Ani", "/ani.png"],
  ["360", "/360.png"],
  ["Kültür Sanat İş", "/kültür.png"],
  ["Karadağ Steak Restaurant", "/karadag onur  logo.png"],
  ["İKEV", "/İkev logo.png"],
  ["R Yapım", "/Çalışma Yüzeyi 1@4x.png"],
  ["Torio", "/Varlik-1.png"],
  ["Chubby Noodles", "/LOGO kopya.png"],
];

const packages = [
  {
    name: "Başlangıç",
    type: "Temel Paket",
    price: "12.000 ₺",
    description: "Modern, kullanıcı dostu ve SEO uyumlu bir web sitesi çözümü.",
    features: ["WordPress Alt Yapısı", "Ana Sayfa + 5 Sayfalık İçerik", "Mobil Uyumlu Tasarım", "10 Tema Arasından Seçim", "Ücretsiz SSL Sertifikası", "Temel SEO Yapılandırması", "Online Form", "Ücretsiz Alan Adı (com.tr)", "Ücretsiz Web Hosting", "Kurumsal E-Posta (5 Adet)"],
  },
  {
    name: "Profesyonel",
    type: "Pro Paket",
    price: "17.000 ₺",
    description: "Daha fazla içerik, düzenleme ve ölçüm imkânı sunan kapsamlı paket.",
    features: ["WordPress Alt Yapısı", "Ana Sayfa + 7 Sayfalık İçerik", "Mobil Uyumlu Tasarım", "20 Tema Arasından Seçim", "Ücretsiz SSL Sertifikası", "Temel SEO Yapılandırması", "Online Form", "Online Site Düzenleme", "Güvenlik Güncellemeleri", "Google Analytics + Facebook Pixel", "Ücretsiz Alan Adı (com.tr)", "Ücretsiz Premium Web Hosting", "Kurumsal E-Posta (35 Adet)"],
    featured: true,
  },
  {
    name: "Gelişmiş",
    type: "Ultra Paket",
    price: "24.000 ₺",
    description: "Gelişmiş SEO, e-ticaret desteği ve geniş içerik yapısı.",
    features: ["WordPress Alt Yapısı", "Ana Sayfa + 30 Sayfalık İçerik", "Mobil Uyumlu Tasarım", "50 Premium Tema Arasından Seçim", "Ücretsiz SSL Sertifikası", "Gelişmiş SEO Yapılandırması", "Online Form", "Online Site Düzenleme", "Güvenlik Güncellemeleri", "Google Analytics + Facebook Pixel", "Google Shopping", "Yandex Meta", "Ücretsiz Alan Adı (com/net/com.tr)", "Ücretsiz Premium Web Hosting", "Kurumsal E-Posta (100 Adet)"],
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="logo" href="#top" aria-label="UGI Digital ana sayfa">
        <Image className="brandLogo" src="/LOGOa.png" alt="UGI" width={4351} height={3383} priority />
      </a>
      <nav className={open ? "nav navOpen" : "nav"} aria-label="Ana menü">
        <a href="#hizmetler" onClick={() => setOpen(false)}>Hizmetler</a>
        <a href="#paketler" onClick={() => setOpen(false)}>Web Sitesi Paketleri</a>
        <a href="#hakkimizda" onClick={() => setOpen(false)}>Hakkımızda</a>
        <a href="#iletisim" onClick={() => setOpen(false)}>İletişim</a>
      </nav>
      <a className="headerCta" href="#iletisim">İletişime geç <ArrowDownRight size={17} /></a>
      <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Menüyü aç" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="top">
      <div className="announcement">
        <span>Dijital dünyada iz bırakın</span>
        <a href="#hizmetler">Hizmetlerimizi keşfet <ArrowRight size={14} /></a>
      </div>
      <Header />

      <section className="hero">
        <div className="heroGrid" aria-hidden="true" />
        <Image className="heroMascot" src="/hero-owl.webp" alt="" width={1350} height={1165} priority />
        <div className="heroTopline"><span>Karaman · Türkiye</span><span>Yenilikçi · Hızlı · Etkili</span></div>
        <div className="heroContent">
          <p className="kicker"><Sparkles size={15} /> UGI Ajans</p>
          <h1>Dijital dünyada<br /><span>markanızı öne çıkarın.</span></h1>
          <div className="heroBottom">
            <p>Dijital dünyada markanızı öne çıkaracak profesyonel çözümler. Yenilikçi, hızlı ve etkileşimli.</p>
            <div className="heroActions">
              <a className="primaryButton" href="#hizmetler">Hizmetlerimizi keşfet <ArrowRight size={18} /></a>
              <a className="textButton" href="#paketler">Paketleri incele</a>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Uzmanlıklarımız">
        <div className="tickerTrack">
          {["WEB TASARIM", "SOSYAL MEDYA", "GOOGLE ADS", "MARKA DANIŞMANLIĞI", "KURUMSAL KİMLİK", "E-TİCARET", "YAZILIM", "İNTERNET HİZMETLERİ", "WEB TASARIM"].map((item, i) => (
            <span key={`${item}-${i}`}>{item}<Asterisk size={18} /></span>
          ))}
        </div>
      </div>

      <section className="trustBar sectionPad" aria-label="Müşteri ve iş ortakları">
        <p>Birlikte çalıştığımız markalar</p>
        <div className="logos">
          <div className="logoTrack">
            {[0, 1].map((copy) => (
              <div className="logoGroup" key={copy} aria-hidden={copy === 1}>
                {clientLogos.map(([name, src]) => (
                  <div className="clientLogo" key={`${copy}-${src}`}>
                    <Image src={src} alt={copy === 0 ? name : ""} width={220} height={110} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intro sectionPad" id="hakkimizda">
        <p className="sectionLabel">UGI Ajans</p>
        <div>
          <h2>Dijital dünyada<br /><em>iz bırakmak</em> için buradayız.</h2>
          <p className="lead">Dijital dünyada iz bırakmak, kuralları yeniden yazmak ve markanızı zirveye taşımak için buradayız. Sınırları zorlayan tasarımlar ve stratejilerle geleceği bugünden inşa ediyoruz.</p>
        </div>
        <Image className="introMascot" src="/owl-ideas.png" alt="Fikir üreten UGI maskotu" width={1024} height={1202} />
      </section>

      <section className="services sectionPad" id="hizmetler">
        {services.map(({ no, icon: Icon, title, text, tags }) => (
          <article className="service" key={title}>
            <div className="serviceNo">{no}</div>
            <Icon className="serviceIcon" size={32} strokeWidth={1.5} />
            <div className="serviceCopy"><h3>{title}</h3><p>{text}</p></div>
            <div className="serviceTags">{tags.map((tag) => <span key={tag}><Check size={13} />{tag}</span>)}</div>
            <ArrowDownRight className="serviceArrow" />
          </article>
        ))}
      </section>

      <section className="mascotFeature sectionPad" aria-label="UGI ile fikirlerinizi hayata geçirin">
        <div className="mascotFeatureCopy">
          <p className="sectionLabel">Vizyon</p>
          <h2>Her köşede bir hikâye,<br /><em>her hikâyede bir keşif.</em></h2>
          <p>Şehrin en kapsamlı dijital platformu.</p>
          <a className="primaryButton" href="#iletisim">Bizimle iletişime geçin <ArrowRight size={18} /></a>
        </div>
        <Image src="/owl-fikir.png" alt="Dizüstü bilgisayarıyla fikir geliştiren UGI maskotu" width={1024} height={1182} />
      </section>

      <section className="projects" id="web-paketleri">
        <div className="projectHeading sectionPad">
          <p className="sectionLabel light">Çalışmalarımız</p>
          <h2>Fikirleri tasarımla buluşturuyoruz.</h2>
          <p>Web tasarım, ambalaj tasarımı ve sosyal medya çalışmalarımızla markanızın dijitalde ve fiziksel dünyada güçlü, tutarlı ve dikkat çekici görünmesini sağlıyoruz.</p>
        </div>
        <div className="projectGrid sectionPad">
          {projects.map((project) => (
            <a className={`project ${project.className}`} href="#iletisim" key={project.title}>
              <Image className={project.imageClassName || ""} src={project.image} alt={`${project.title} görseli`} fill sizes="(max-width: 800px) 100vw, 60vw" unoptimized={project.unoptimized} />
              <div className="projectOverlay">
                <div><span>{project.category}</span><h3>{project.title}</h3></div>
                <p>{project.result}</p>
                <span className="projectArrow"><ArrowUpRightIcon /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="caseStatement sectionPad">
        <p className="sectionLabel">UGI Ajans</p>
        <blockquote>“Sınırları zorlayan tasarımlar ve stratejilerle geleceği bugünden inşa ediyoruz.”</blockquote>
        <div><span>01 Yenilikçi</span><span>02 Hızlı</span><span>03 Etkili</span></div>
      </section>

      <section className="numbers">
        <div><strong>Yenilikçi</strong><span>özgün dijital çözümler</span></div>
        <div><strong>Hızlı</strong><span>ihtiyaca uygun hizmet</span></div>
        <div><strong>Etkili</strong><span>profesyonel yaklaşım</span></div>
      </section>

      <section className="packages sectionPad" id="paketler">
        <div className="packageHeading">
          <p className="sectionLabel">Web Sitesi Paketleri</p>
          <h2>Web siteniz ile<br />yayına geçin.</h2>
          <p>Web site paketlerimiz, her sektöre uygun modern, kullanıcı dostu ve SEO uyumlu çözümler sunar. Tüm web sitesi paketlerimiz ücretsiz alan adı ve hosting ile birlikte sunulmaktadır.</p>
        </div>
        <div className="packageGrid">
          {packages.map((item) => (
            <article className={item.featured ? "packageCard packageFeatured" : "packageCard"} key={item.type}>
              <span className="packageBadge">{item.name}</span>
              <h3>{item.type}</h3>
              <strong className="packagePrice">{item.price}</strong>
              <p>{item.description}</p>
              <ul>{item.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
              <a href="#iletisim">Satın Al <ArrowRight size={17} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial sectionPad">
        <div className="testimonialMark">“</div>
        <blockquote>Profesyonel ve ihtiyaçlarınıza uygun bir web sitesiyle hedef kitlenize ulaşabilir, işletmenizin online görünürlüğünü artırabilirsiniz.</blockquote>
        <div className="testimonialAuthor"><strong>UGI Ajans</strong><span>Yenilikçi · Hızlı · Etkili</span></div>
      </section>

      <section className="contact sectionPad" id="iletisim">
        <div className="contactIntro">
          <p className="sectionLabel light">İletişim</p>
          <h2>Markanızı birlikte<br /><em>zirveye taşıyalım.</em></h2>
          <a href="mailto:info@ugi.net.tr">info@ugi.net.tr <ArrowDownRight /></a>
          <p className="contactDetails"><a href="tel:+905307833370">+90 530 783 33 70</a><br />Kirişçi Mah., No: 10-12<br />Karaman / Türkiye</p>
          <Image className="contactMascot" src="/owl-contact.png" alt="UGI maskotu" width={1371} height={1148} />
        </div>
        <form className="contactForm" onSubmit={submitForm}>
          <div className="fieldRow"><label>Adınız<input name="name" required placeholder="Ad Soyad" /></label><label>E-posta<input type="email" name="email" required placeholder="mail@sirket.com" /></label></div>
          <label>İlgilendiğiniz hizmet<select name="service" defaultValue=""><option value="" disabled>Bir hizmet seçin</option><option>Web Tasarım</option><option>Sosyal Medya Yönetimi</option><option>Google Ads Yönetimi</option><option>Marka Danışmanlığı</option><option>Kurumsal Kimlik Tasarımı</option><option>E-Ticaret</option><option>Yazılım Hizmetleri</option><option>İnternet Hizmetleri</option><option>Danışmanlık</option></select></label>
          <label>Projenizden bahsedin<textarea name="message" required placeholder="Hedefiniz, takviminiz ve aklınızdakiler..." /></label>
          <button type="submit" disabled={sent}>{sent ? <><Check /> Mesajınız alındı</> : <>Tanışalım <ArrowRight /></>}</button>
        </form>
      </section>

      <footer className="footer sectionPad">
        <a className="logo footerLogo" href="#top" aria-label="UGI ana sayfa"><Image className="brandLogo" src="/LOGOa.png" alt="UGI" width={4351} height={3383} /></a>
        <p>Dijital dünyada markanızı öne çıkaracak profesyonel çözümler.</p>
        <div><a href="#hakkimizda">Hakkımızda</a><a href="#hizmetler">Hizmetler</a><a href="#paketler">Paketler</a><a href="#iletisim">İletişim</a></div>
        <div className="footerMeta">
          <span>© 2026 UGI Ajans</span>
        </div>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowDownRight size={22} style={{ transform: "rotate(-90deg)" }} />;
}
