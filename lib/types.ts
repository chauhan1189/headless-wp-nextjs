export type Doctor = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
  acf?: {
    position?: string;
    bio?: string;
  };
};