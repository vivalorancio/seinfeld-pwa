export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: Image;
  summary: string;
  _links: Links;
}

interface Links {
  self: Self;
}

interface Self {
  href: string;
}

interface Image {
  medium: string;
  original: string;
}
