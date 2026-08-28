export interface ServiceExampleContent {
  sector: string;
  situation: string;
  result: string;
}

export interface ServiceReviewContent {
  quote: string;
  role: string;
}

export interface ServiceContent {
  category: string;
  badge?: string;
  title: string;
  tagline: string;
  intro: string;
  description: string[];
  includes: string[];
  examples: ServiceExampleContent[];
  reviews: ServiceReviewContent[];
}
