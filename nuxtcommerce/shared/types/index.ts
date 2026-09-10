export type Money = string | number;

export interface VariationNode {
  databaseId: number;
  salePrice: Money;
  regularPrice: Money;
  stockQuantity?: number;
  image?: { sourceUrl: string };
}

export interface Variation {
  node: VariationNode;
  attributes: Array<{ value: string }>;
}

export interface ProductNode {
  sku: string;
  slug: string;
  name: string;
}

export interface ImageNode {
  sourceUrl: string;
}

export interface FeedProduct extends ProductNode {
  regularPrice?: Money;
  salePrice?: Money;
  image?: ImageNode;
  galleryImages?: { nodes: ImageNode[] };
  allPaStyle?: { nodes: Array<{ name: string }> };
}

export interface ProductsFeedResponse {
  products: {
    nodes: FeedProduct[];
    pageInfo?: { hasNextPage: boolean; endCursor: string | null };
  };
}

export interface CategoryNode {
  id: string;
  name: string;
  image?: ImageNode;
  products: { nodes: Array<{ id: string }> };
  children: { nodes: CategoryNode[] };
}

export interface CategoriesResponse {
  productCategories: { nodes: CategoryNode[] };
}

export interface ProductFeedQuery {
  search?: string;
  category?: string;
  field?: 'DATE' | 'PRICE';
  order?: 'ASC' | 'DESC';
}

export interface CartItem {
  key: string;
  quantity: number;
  product: { node: ProductNode };
  variation: Variation;
}

export interface AddToCartResponse {
  addToCart: { cartItem: CartItem };
}

export type AddBtnStatus = 'add' | 'loading' | 'added';

export type RemoveBtnStatus = 'remove' | 'loading';

export interface WishlistItem {
  databaseId: number;
  name?: string;
  slug?: string;
  sku?: string;
  salePrice?: Money;
  regularPrice?: Money;
  image?: { sourceUrl: string };
  allPaStyle?: { nodes: Array<{ name: string }> };
  [key: string]: unknown;
}

export interface CheckoutUserDetails {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address1: string;
}

export interface CheckoutOrder {
  total: string;
  orderNumber: string;
  date: string;
  paymentMethodTitle: string;
}

export interface CheckoutResponse {
  checkout?: {
    order?: CheckoutOrder;
  };
}

export type CheckoutStatus = 'order' | 'processing';
