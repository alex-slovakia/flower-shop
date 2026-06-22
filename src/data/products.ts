import type { Product } from "@/types/commerce";

const images = {
  peony: "/products/tiche-dakujem.webp",
  roses: "/products/horuci-pulz.webp",
  field: "/products/plne-slnko.webp",
  bouquet: "/products/nedelna.webp",
  white: "/products/prve-svetlo.webp",
  tulips: "/products/bratislavske-rano.webp",
  wild: "/products/divoka.webp",
  pink: "/products/signal.webp",
  stems: "/products/medzi-nami.webp",
  purple: "/products/nocna-luka.webp",
  light: "/products/spomienka.webp",
  garden: "/products/mestska-zahrada.webp",
};

const variants = (base: number, prefix: string) => [
  { id: `${prefix}-mala`, name: "Malá", stemCount: 15, price: base },
  { id: `${prefix}-stredna`, name: "Stredná", stemCount: 25, price: base + 18 },
  { id: `${prefix}-velka`, name: "Veľká", stemCount: 39, price: base + 36 },
];

export const products: Product[] = [
  { id: "p1", slug: "nocna-luka", name: "Nočná lúka", shortDescription: "Fialové tóny, ktoré sa menia so svetlom.", description: "Hlboká, voľná kytica pre chvíle, ktoré nepotrebujú veľa slov.", composition: "Eustoma, scabiosa, limonium, sezónna zeleň", occasion: ["Láska", "Len tak"], colorMood: "Monochromatická", image: images.purple, gallery: [images.purple, images.garden], availableToday: true, featured: true, variants: variants(46, "nocna") },
  { id: "p2", slug: "prve-svetlo", name: "Prvé svetlo", shortDescription: "Jemná kytica s čistou rannou náladou.", description: "Vzdušná skladba bielych kvetov, ktorá pôsobí pokojne a presne.", composition: "Biela ruža, ranunculus, waxflower, eucalyptus", occasion: ["Poďakovanie", "Súcit"], colorMood: "Jemná", image: images.white, gallery: [images.white, images.light], availableToday: true, featured: true, variants: variants(42, "svetlo") },
  { id: "p3", slug: "bratislavske-rano", name: "Bratislavské ráno", shortDescription: "Svieže tulipány pre nečakané potešenie.", description: "Rýchle gesto s farbou jarného rána pri Dunaji.", composition: "Prémiové tulipány, breza, sezónna zeleň", occasion: ["Narodeniny", "Len tak"], colorMood: "Svieža", image: images.tulips, gallery: [images.tulips, images.field], availableToday: true, featured: true, variants: variants(34, "rano") },
  { id: "p4", slug: "horuci-pulz", name: "Horúci pulz", shortDescription: "Sýte červené a malinové kvety bez kompromisu.", description: "Sebavedomá kytica na výročie, veľké priznanie alebo výnimočný večer.", composition: "Záhradná ruža, amaranthus, dianthus, ruscus", occasion: ["Láska", "Narodeniny"], colorMood: "Výrazná", image: images.roses, gallery: [images.roses, images.pink], availableToday: true, variants: variants(54, "pulz") },
  { id: "p5", slug: "tiche-dakujem", name: "Tiché ďakujem", shortDescription: "Premyslené gesto v mäkkých ružových tónoch.", description: "Elegantná a nenútená kytica pre človeka, ktorému patrí vďaka.", composition: "Pivónia, ruža, astilbe, eucalyptus", occasion: ["Poďakovanie", "Narodeniny"], colorMood: "Jemná", image: images.peony, gallery: [images.peony, images.pink], availableToday: false, variants: variants(49, "dakujem") },
  { id: "p6", slug: "divoka", name: "Divoká", shortDescription: "Nespútané sezónne kvety s lúčnym charakterom.", description: "Každý kus je trochu iný, podľa toho, čo je práve najkrajšie.", composition: "Sezónny mix, trávy, harmanček, zeleň", occasion: ["Len tak", "Narodeniny"], colorMood: "Svieža", image: images.wild, gallery: [images.wild, images.field], availableToday: true, variants: variants(39, "divoka") },
  { id: "p7", slug: "nedelna", name: "Nedeľná", shortDescription: "Pokojná kytica pre pomalé popoludnie.", description: "Mäkká kompozícia so záhradnou kresbou a prirodzeným pohybom.", composition: "Ruža, lisianthus, alchemilka, zeleň", occasion: ["Len tak", "Poďakovanie"], colorMood: "Jemná", image: images.bouquet, gallery: [images.bouquet, images.light], availableToday: true, variants: variants(44, "nedelna") },
  { id: "p8", slug: "signal", name: "Signál", shortDescription: "Farba, ktorú nemožno prehliadnuť.", description: "Grafická kytica s ostrým farebným rytmom pre odvážny dar.", composition: "Gerbera, tulipán, dianthus, anthurium", occasion: ["Narodeniny", "Láska"], colorMood: "Výrazná", image: images.pink, gallery: [images.pink, images.stems], availableToday: true, variants: variants(47, "signal") },
  { id: "p9", slug: "medzi-nami", name: "Medzi nami", shortDescription: "Intímna ružová skladba bez veľkých gest.", description: "Kytica navrhnutá pre osobné stretnutia a súkromné oslavy.", composition: "Ruža, ranunculus, karafiát, waxflower", occasion: ["Láska", "Poďakovanie"], colorMood: "Monochromatická", image: images.stems, gallery: [images.stems, images.roses], availableToday: false, variants: variants(45, "medzi") },
  { id: "p10", slug: "mestska-zahrada", name: "Mestská záhrada", shortDescription: "Veľa zelene a nečakané botanické tvary.", description: "Svieža mestská kompozícia inšpirovaná dvorom ukrytým za starou bránou.", composition: "Anthurium, ammi, papraď, eukalyptus", occasion: ["Len tak", "Narodeniny"], colorMood: "Svieža", image: images.garden, gallery: [images.garden, images.field], availableToday: true, variants: variants(52, "zahrada") },
  { id: "p11", slug: "spomienka", name: "Spomienka", shortDescription: "Čistá, pokojná a citlivá kompozícia.", description: "Dôstojná kytica, ktorou možno vyjadriť blízkosť aj bez slov.", composition: "Ľalia, biela ruža, lisianthus, eucalyptus", occasion: ["Súcit"], colorMood: "Monochromatická", image: images.light, gallery: [images.light, images.white], availableToday: true, variants: variants(48, "spomienka") },
  { id: "p12", slug: "plne-slnko", name: "Plné slnko", shortDescription: "Žlté a oranžové kvety s veľkou energiou.", description: "Oslava zabalená do papiera, vhodná na narodeniny aj nečakanú návštevu.", composition: "Slnečnica, gerbera, solidago, sezónna zeleň", occasion: ["Narodeniny", "Poďakovanie"], colorMood: "Výrazná", image: images.field, gallery: [images.field, images.bouquet], availableToday: true, variants: variants(41, "slnko") },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const getProductById = (id: string) => products.find((product) => product.id === id);
