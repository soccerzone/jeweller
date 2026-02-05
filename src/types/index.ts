export interface Category {
  id: number;
  title: string;
  imageUrl: string;
  altText: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
