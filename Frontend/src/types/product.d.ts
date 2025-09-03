export interface Product {
  id:  number;
  title: string;
  name?: string;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
  image: {
    url: string;
  };
}

export interface ProductCardProps {
  product: Product;
  isLoading?: boolean;
}

export interface StarRatingProps {
  rating: number;
}