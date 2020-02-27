export interface Search {
  Products: Product[];
}

export interface Product {
  ProductImage: ProductImage;
  Title: string;
  MoonpigProductNo: string;
  ProductCategory: {
    Name: string;
  }
}

export interface ProductDetail {
  AvailableSizes: Size[];
  ThumbnailUrl: string;
  Title: string;
}

export interface Size {
  Description: string;
  Currency: string;
  Price: number;
  Name: string;
}

interface ProductImage {
  Link: Link;
}

interface Link {
  Href: string;
}